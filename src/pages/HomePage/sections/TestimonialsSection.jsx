import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import img1 from '../../../assets/encino.webp';
import img2 from '../../../assets/GettyImages.webp';
import img3 from '../../../assets/SeattleLawyer.webp';
const TestimonialsSection = () => {
  const [testimonials] = useState([
    {
      name: 'عميل',
      image: img1,
      rating: 5,
      text: 'تجربة متميزة تعكس أعلى معايير الاحترافية؛ لم يكن مجرد تمثيل قانوني، بل شعرت بوجود شريك حقيقي يحرص على مصلحتي ويولي أدق التفاصيل اهتماماً فائقاً. الوضوح في طرح الحلول القانونية كان مفتاح النجاح في قضيتي.',
    },
    {
      name: 'عميل',
      image: img2,
      rating: 5,
      text: 'ما يميز التعامل هنا هو الاستجابة السريعة والقدرة العالية على تحليل الموقف القانوني بدقة. حصلت على نتائج تجاوزت توقعاتي بفضل الخبرة العميقة والالتزام المهني الذي قل نظيره.',
    },
    {
      name: 'عميل',
      image: img3,
      rating: 5,
      text: '"احترافية في التعامل، دقة في المواعيد، ومعرفة قانونية واسعة. أنصح بشدة بكل من يبحث عن حلول قانونية مبتكرة وآمنة."',
    },
  ]);

  const [formData, setFormData] = useState({ name: '', rating: 5, text: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.text.trim()) return;

    alert('شكراً لك! تم استلام رأيك بنجاح.');
    setFormData({ name: '', rating: 5, text: '' });
  };

  return (
    <div className="px-6 py-12 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h3
          className="text-3xl font-bold text-center mb-4 text-yellow-400"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.4 }}
        >
          أراء عملاء مستشارك القانوني
        </motion.h3>

        <motion.p
          className="text-center text-gray-300 mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.6 }}
        >
          نعتز بثقة عملائنا ونسعى دائماً لتقديم تجربة قانونية راقية ونتائج ملموسة
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="bg-[#171616] backdrop-blur-sm rounded-lg p-6 border border-gray-800 hover:bg-[#2a2a2a] transition-colors"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.8 + index * 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-1 space-x-reverse">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FiStar
                      key={i}
                      className={i < (t.rating || 0) ? 'text-[#D2AF34]' : 'text-gray-600'}
                      size={16}
                    />
                  ))}
                </div>

                <img className="w-10 h-10 rounded-full" src={t.image} alt={t.name || 'testimonial'} />
              </div>

              <p className="text-gray-200 leading-relaxed text-sm md:text-base">{t.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 bg-[#171616] backdrop-blur-sm rounded-lg p-8 border border-gray-800"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.2 }}
        >
          <h4 className="text-2xl font-bold text-yellow-400 mb-6 text-center">أضف رأيك</h4>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-white">الاسم (اختياري)</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-black text-white border border-gray-700 rounded-lg focus:border-[#D2AF34] focus:outline-none"
                  value={formData.name}
                  onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-white">التقييم</label>
                <select
                  className="w-full px-4 py-3 bg-black text-white border border-gray-700 rounded-lg focus:border-[#D2AF34] focus:outline-none"
                  value={formData.rating}
                  onChange={(e) => setFormData((p) => ({ ...p, rating: e.target.value }))}
                >
                  <option value={5}>5</option>
                  <option value={4}>4</option>
                  <option value={3}>3</option>
                  <option value={2}>2</option>
                  <option value={1}>1</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-white">رأيك</label>
              <textarea
                className="w-full px-4 py-3 bg-black text-white border border-gray-700 rounded-lg focus:border-[#D2AF34] focus:outline-none h-28 resize-none"
                value={formData.text}
                onChange={(e) => setFormData((p) => ({ ...p, text: e.target.value }))}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#D2AF34] text-black py-3 rounded-lg hover:bg-[#c4a030] transition-colors font-semibold"
            >
              إرسال الرأي
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
