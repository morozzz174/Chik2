
import React, { useState } from 'react';
import { 
  ChevronLeft, 
  X, 
  Maximize2, 
  FileCheck, 
  Download,
  ArrowDown
} from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface Certificate {
  id: string;
  title: string;
  number: string;
  equipment: string;
  url: string;
}

const CERTIFICATES: Certificate[] = [
  {
    id: '1',
    title: 'Сертификат Jason H.E.S.&T',
    number: '№ ЕАЭС RU C-CN.АЖ49.В.04701/24',
    equipment: 'Котлы водогрейные отопительные E8',
    url: '/cert1.pdf'
  },
  {
    id: '2',
    title: 'Сертификат Kentatsu (Пром)',
    number: '№ ЕАЭС RU C-TR.HB26.B.04232/24',
    equipment: 'Котлы газовые отопительные > 100 кВт',
    url: '/cert2.pdf'
  },
  {
    id: '3',
    title: 'Сертификат Kentatsu (Быт)',
    number: '№ ЕАЭС RU C-CN.АБ53.В.07752/23',
    equipment: 'Котлы отопительные газовые до 100 кВт',
    url: '/cert3.pdf'
  },
  {
    id: '4',
    title: 'Сертификат Kentatsu (Электро)',
    number: '№ ЕАЭС RU C-CN.НВ93.В.00826/21',
    equipment: 'Электрические котлы Kentatsu',
    url: '/cert4.pdf'
  },
  {
    id: '5',
    title: 'Сертификат Kentatsu (Газ)',
    number: '№ ЕАЭС RU C-TR.АБ53.В.08647/23',
    equipment: 'Котлы газовые двухконтурные Nobby Smart',
    url: '/cert5.pdf'
  },
  {
    id: '6',
    title: 'Сертификат Лемакс (Element)',
    number: '№ ЕАЭС RU C-RU.АД87.В.00312/22',
    equipment: 'Аппараты отопительные Element, Aspect',
    url: '/cert6.pdf'
  },
  {
    id: '7',
    title: 'Сертификат Лемакс (Omega)',
    number: '№ ЕАЭС RU C-RU.АД85.В.00327/21',
    equipment: 'Котлы газовые отопительные Omega',
    url: '/cert7.pdf'
  },
  {
    id: '8',
    title: 'Сертификат Thermex (Водонагреватели)',
    number: '№ ЕАЭС RU C-RU.HB26.B.04242/24',
    equipment: 'Водонагреватели аккумуляционные электрические',
    url: '/cert8.pdf'
  },
  {
    id: '9',
    title: 'Сертификат Thermex (Котлы)',
    number: '№ ЕАЭС RU C-CN.АБ53.В.05683/22',
    equipment: 'Электрические котлы Grizzly, Skif, Tesla',
    url: '/cert9.pdf'
  }
];

interface CertificatesProps {
  onBack: () => void;
}

const Certificates: React.FC<CertificatesProps> = ({ onBack }) => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [numPages, setNumPages] = useState<number | null>(null);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <button onClick={onBack} className="flex items-center gap-2 text-[#0b2a4a] font-bold hover:text-[#b22222] transition-colors">
            <ChevronLeft size={20} />
            <span>Назад</span>
          </button>
          <div className="flex items-center gap-3">
            <div className="bg-[#b22222] text-white px-2 py-1 rounded font-bold text-sm">ЧИК</div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest hidden sm:inline">Наши сертификаты</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="bg-[#0b2a4a] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-[#b22222] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            <FileCheck size={16} />
            Гарантия качества
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Сертификаты соответствия</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Все поставляемое и монтируемое оборудование имеет официальную сертификацию ЕАЭС и соответствует государственным стандартам безопасности.
          </p>
        </div>
      </header>

      {/* Grid */}
      <main className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATES.map((cert) => (
            <div 
              key={cert.id}
              className="group bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="aspect-[3/4] relative overflow-hidden bg-white border-b border-gray-100 flex items-center justify-center">
                <div className="w-full h-full pointer-events-none overflow-hidden flex items-start justify-center">
                  <Document
                    file={cert.url}
                    loading={<div className="p-8 text-gray-400">Загрузка...</div>}
                  >
                    <Page 
                      pageNumber={1} 
                      width={400} 
                      renderTextLayer={false} 
                      renderAnnotationLayer={false}
                    />
                  </Document>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center z-20">
                  <div className="bg-white text-[#0b2a4a] p-3 rounded-full shadow-xl scale-0 group-hover:scale-100 transition-transform duration-300 flex items-center gap-2 px-6">
                    <span className="text-sm font-bold">Открыть PDF</span>
                    <Maximize2 size={18} />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-[10px] font-bold text-[#b22222] uppercase tracking-widest mb-2">{cert.number}</div>
                <h3 className="text-lg font-bold text-[#0b2a4a] mb-2 leading-tight group-hover:text-[#b22222] transition-colors">{cert.title}</h3>
                <p className="text-xs text-gray-500 line-clamp-2">{cert.equipment}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <div className="absolute inset-0 bg-[#0b2a4a]/90 backdrop-blur-sm" onClick={() => setSelectedCert(null)}></div>
          
          <div className="relative bg-white w-full max-w-4xl h-full max-h-[90vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300">
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-10">
              <div>
                <h4 className="font-bold text-[#0b2a4a]">{selectedCert.title}</h4>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{selectedCert.number}</p>
              </div>
              <div className="flex items-center gap-2">
                <a 
                  href={selectedCert.url}
                  download
                  className="p-2 text-gray-400 hover:text-[#b22222] transition-colors"
                  title="Скачать PDF"
                >
                  <Download size={20} />
                </a>
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="p-2 bg-gray-100 text-gray-500 rounded-full hover:bg-[#b22222] hover:text-white transition-all"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Modal Content - Scrollable PDF Viewer */}
            <div className="flex-grow overflow-y-auto p-4 md:p-8 space-y-8 bg-gray-100 custom-scrollbar flex flex-col items-center">
              <Document
                file={selectedCert.url}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={<div className="p-8 text-gray-400">Загрузка документа...</div>}
                className="flex flex-col gap-8 items-center w-full"
              >
                {Array.from(new Array(numPages || 0), (el, index) => (
                  <div key={`page_${index + 1}`} className="relative bg-white shadow-xl rounded-lg overflow-hidden border border-gray-200 max-w-full">
                    <div className="absolute top-4 left-4 bg-black/50 text-white text-[10px] px-2 py-1 rounded backdrop-blur-md font-bold z-10">
                      Стр. {index + 1}
                    </div>
                    <Page 
                      pageNumber={index + 1} 
                      width={800}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                      className="max-w-full"
                    />
                  </div>
                ))}
              </Document>
              
              {numPages && (
                <div className="py-12 text-center w-full">
                  <div className="inline-flex flex-col items-center gap-2 text-gray-400">
                    <ArrowDown size={24} className="animate-bounce" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Конец документа</span>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-gray-100 bg-white text-center">
               <button 
                onClick={() => setSelectedCert(null)}
                className="text-xs font-bold text-[#b22222] uppercase tracking-widest hover:underline"
               >
                 Закрыть просмотр
               </button>
            </div>
          </div>
        </div>
      )}
      <footer className="bg-gray-50 py-12 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#0b2a4a] font-bold mb-4">ЧИК — Челябинская Инженерная Компания</p>
          <button onClick={onBack} className="text-gray-400 hover:text-[#b22222] transition-colors text-sm font-bold">
            Вернуться на главную
          </button>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #0b2a4a;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #b22222;
        }
      `}} />
    </div>
  );
};

export default Certificates;
