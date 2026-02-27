
import React from 'react';
import LawPage from './LawPage';

const Law624: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <LawPage 
      onBack={onBack}
      title="Приказ Минрегиона РФ № 624"
      subtitle="Перечень видов работ в строительстве, требующих наличие допуска СРО"
      pdfUrl="/law624.pdf"
      content={
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-4">Работы по газоснабжению</h2>
            <p>Допуск СРО обязателен для следующих видов работ:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Устройство и демонтаж систем газоснабжения;</li>
              <li>Прокладка газопроводов с рабочим давлением до 1,2 МПа;</li>
              <li>Монтаж и демонтаж газорегуляторных пунктов и установок;</li>
              <li>Врезка под давлением в действующие газопроводы;</li>
              <li>Пусконаладочные работы на газовом оборудовании.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Внутренние инженерные системы</h2>
            <p>Перечень включает устройство систем отопления, вентиляции и кондиционирования воздуха, а также систем электроснабжения.</p>
          </section>

          <div className="p-6 bg-blue-50 rounded-2xl border-l-4 border-[#0b2a4a]">
            <p className="text-sm font-bold text-[#0b2a4a]">Для заказчика:</p>
            <p className="text-sm text-gray-600 mt-1">
              Всегда проверяйте наличие актуальной выписки из реестра СРО у подрядной организации перед началом работ.
            </p>
          </div>
        </div>
      }
    />
  );
};

export default Law624;
