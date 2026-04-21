import type React from 'react';
// TODO: После экспорта из Lovable и вставки этого компонента в Next.js, 
// раскомментируйте импорт вашего оригинального компонента карты.
// import { MapInterface } from '@/components/MapInterface';

export const LandingMapSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <h2 className="text-3xl font-extrabold text-[#1A1A1A] sm:text-4xl">
          Карта доступности Сухума
        </h2>
        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
          Исследуйте город без барьеров: объекты со светофорной разметкой доступности, заведения с приставными пандусами и пилотная городская навигация.
        </p>
      </div>

      <div className="w-full h-[500px] relative shadow-lg rounded-xl overflow-hidden mx-auto max-w-7xl border border-gray-100 z-10">
        {/* Вставка карты: здесь должен быть ваш Map-компонент */}
        {/* <MapInterface /> */}
        
        {/* Заглушка для визуализации в дизайн-режиме (можно удалить после интеграции) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl">
          <svg className="w-12 h-12 text-[#F57C00] mb-4" viewBox="0 0 24 24" fill="currentColor">
             <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 11.5c-2.48 0-4.5-2.02-4.5-4.5S9.52 4.5 12 4.5s4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5z"/>
          </svg>
          <p className="text-gray-500 font-medium">Сюда будет встроена интерактивная карта GoApsny</p>
        </div>
      </div>
    </section>
  );
};

export default LandingMapSection;
