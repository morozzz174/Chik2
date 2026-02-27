
import React from 'react';
import LawPage from './LawPage';

const Law384: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <LawPage 
      onBack={onBack}
      title="Федеральный закон № 384-ФЗ"
      subtitle="Технический регламент о безопасности зданий и сооружений"
      pdfUrl="/law384.pdf"
      content={
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-4">Цели закона</h2>
            <p>Настоящий Федеральный закон принимается в целях:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Защиты жизни и здоровья граждан;</li>
              <li>Охраны окружающей среды;</li>
              <li>Предупреждения действий, вводящих в заблуждение приобретателей;</li>
              <li>Обеспечения энергетической эффективности зданий.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Основные требования</h2>
            <p>Здания и сооружения должны проектироваться и строиться таким образом, чтобы обеспечивалась:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Механическая безопасность;</li>
              <li>Пожарная безопасность;</li>
              <li>Безопасность при опасных природных процессах;</li>
              <li>Безопасные условия для проживания и пребывания человека.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Инженерные системы</h2>
            <p>
              Системы инженерно-технического обеспечения должны соответствовать требованиям безопасности на протяжении всего жизненного цикла здания.
            </p>
          </section>

          <div className="p-6 bg-gray-50 rounded-2xl border-l-4 border-[#0b2a4a]">
            <p className="text-sm font-bold text-[#0b2a4a]">Юридическая сила:</p>
            <p className="text-sm text-gray-600 mt-1">
              Это базовый закон, на котором основываются все строительные нормы и правила (СНиП) и своды правил (СП).
            </p>
          </div>
        </div>
      }
    />
  );
};

export default Law384;
