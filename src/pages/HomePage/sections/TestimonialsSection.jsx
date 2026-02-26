import React from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import img1 from '../../../assets/encino.webp';
import img2 from '../../../assets/GettyImages.webp';
import img3 from '../../../assets/SeattleLawyer.webp';
const TestimonialsSection = () => {
  const testimonials = [
    {
      image: img1,
      text: 'تجربة متميزة تعكس أعلى معايير الاحترافية؛ لم يكن مجرد تمثيل قانوني، بل شعرت بوجود شريك حقيقي يحرص على مصلحتي ويولي أدق التفاصيل اهتماماً فائقاً. الوضوح في طرح الحلول القانونية كان مفتاح النجاح في قضيتي.',
    },
    {
      image: img2,
      text: 'ما يميز التعامل هنا هو الاستجابة السريعة والقدرة العالية على تحليل الموقف القانوني بدقة. حصلت على نتائج تجاوزت توقعاتي بفضل الخبرة العميقة والالتزام المهني الذي قل نظيره.',
    },
    {
      image: img3,
      text: '"احترافية في التعامل، دقة في المواعيد، ومعرفة قانونية واسعة. أنصح بشدة بكل من يبحث عن حلول قانونية مبتكرة وآمنة."',
    },
  ];

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
                    <FiStar key={i} className="text-[#D2AF34]  " size={16} />
                  ))}
                </div>
             
                  <img className="w-10 h-10 rounded-full" src={t.image} alt={t.name || 'testimonial'} />
                </div>
             

              <p className="text-gray-200 leading-relaxed text-sm md:text-base">{t.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
