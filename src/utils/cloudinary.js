/**
 * Cloudinary utility for image uploads
 */

// const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'drqda8adh';
const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
// Note: Upload preset name should match exactly with Cloudinary dashboard
// If your preset name has spaces, Cloudinary may not accept it. Use underscores or exact preset name.
// const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || 'Upload_image';
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

/**
 * Upload image to Cloudinary
 * @param {File} file - Image file to upload
 * @param {Object} options - Upload options
 * @param {string} options.folder - Folder path in Cloudinary (optional)
 * @param {Function} options.onProgress - Progress callback (optional)
 * @returns {Promise<string>} - Image URL
 */
export const uploadImage = async (file, options = {}) => {
  const { folder, onProgress } = options;

  // Validate Cloudinary credentials
  if (!CLOUD_NAME) {
    throw new Error(
      "Cloudinary cloud name is not configured. Please set VITE_CLOUDINARY_CLOUD_NAME in your .env file.",
    );
  }

  if (!UPLOAD_PRESET) {
    throw new Error(
      "Cloudinary upload preset is not configured. Please set VITE_CLOUDINARY_UPLOAD_PRESET in your .env file.",
    );
  }

  return new Promise((resolve, reject) => {
    const formData = new FormData();
    formData.append("file", file);

    // Upload preset is required for unsigned uploads
    const uploadPreset = UPLOAD_PRESET.trim();
    if (!uploadPreset) {
      reject(
        new Error(
          "Upload preset is required. Please set VITE_CLOUDINARY_UPLOAD_PRESET in your .env file.",
        ),
      );
      return;
    }

    // Log for debugging (remove in production)
    if (import.meta.env.DEV) {
      console.log("Uploading to Cloudinary:", {
        cloudName: CLOUD_NAME,
        uploadPreset: uploadPreset,
        folder: folder || "none",
      });
    }

    formData.append("upload_preset", uploadPreset);

    // Convert to webp format with auto quality
    // formData.append("format", "webp");
    // formData.append("transformation", "f_webp,q_auto");

    // Add folder if provided
    if (folder) {
      formData.append("folder", folder);
    }

    const xhr = new XMLHttpRequest();

    // Track upload progress
    if (onProgress) {
      xhr.upload.addEventListener("progress", (e) => {
        if (e.lengthComputable) {
          const percentComplete = (e.loaded / e.total) * 100;
          onProgress(percentComplete);
        }
      });
    }

    xhr.addEventListener("load", () => {
      if (xhr.status === 200) {
        try {
          const response = JSON.parse(xhr.responseText);
          if (response.secure_url) {
            resolve(response.secure_url);
          } else {
            reject(
              new Error(
                response.error?.message || "Upload failed: No URL returned",
              ),
            );
          }
        } catch (error) {
          console.log("Failed to parse Cloudinary response:", error);
          reject(new Error("Failed to parse response"));
        }
      } else {
        try {
          const errorResponse = JSON.parse(xhr.responseText);
          const errorMessage =
            errorResponse.error?.message ||
            `Upload failed with status: ${xhr.status}`;

          // Log detailed error for debugging
          if (import.meta.env.DEV) {
            console.error("Cloudinary upload error:", {
              status: xhr.status,
              error: errorResponse.error,
              response: errorResponse,
            });
          }

          // Provide helpful error messages
          if (
            errorMessage.includes("preset") ||
            errorMessage.includes("Upload preset")
          ) {
            reject(
              new Error(
                `Upload preset "${uploadPreset}" not found. Please check your Cloudinary dashboard and ensure the preset name matches exactly. Make sure the preset is set to "Unsigned" mode.`,
              ),
            );
          } else {
            reject(new Error(errorMessage));
          }
        } catch (parseError) {
          console.log("Failed to parse Cloudinary error response:", parseError);
          reject(
            new Error(
              `Upload failed with status: ${xhr.status}. Please check your Cloudinary configuration.`,
            ),
          );
        }
      }
    });

    xhr.addEventListener("error", () => {
      reject(new Error("Upload failed"));
    });

    xhr.addEventListener("abort", () => {
      reject(new Error("Upload aborted"));
    });

    xhr.open(
      "POST",
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
    );
    xhr.send(formData);
  });
};

/**
 * Upload multiple images to Cloudinary
 * @param {File[]} files - Array of image files
 * @param {Object} options - Upload options
 * @returns {Promise<string[]>} - Array of image URLs
 */
export const uploadMultipleImages = async (files, options = {}) => {
  const uploadPromises = files.map((file, index) => {
    const fileOptions = {
      ...options,
      onProgress: options.onProgress
        ? (progress) => options.onProgress(index, progress)
        : undefined,
    };
    return uploadImage(file, fileOptions);
  });

  return Promise.all(uploadPromises);
};

/**
 * Validate image file
 * @param {File} file - File to validate
 * @param {Object} options - Validation options
 * @param {number} options.maxSize - Max file size in MB (default: 5)
 * @param {string[]} options.allowedTypes - Allowed MIME types
 * @returns {Object} - { valid: boolean, error?: string }
 */
export const validateImageFile = (file, options = {}) => {
  const {
    maxSize = 5, // 5MB default
    allowedTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/webp",
      "image/gif",
    ],
  } = options;

  if (!file) {
    return { valid: false, error: "No file selected" };
  }

  if (!allowedTypes.includes(file.type)) {
    return {
      valid: false,
      error: "Invalid file type. Only images are allowed.",
    };
  }

  const fileSizeMB = file.size / (1024 * 1024);
  if (fileSizeMB > maxSize) {
    return { valid: false, error: `File size exceeds ${maxSize}MB limit` };
  }

  return { valid: true };
};