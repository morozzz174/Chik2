
import React from 'react';
import { ChevronLeft, FileText, Download, Share2 } from 'lucide-react';

interface LawPageProps {
  title: string;
  subtitle: string;
  content: React.ReactNode;
  onBack: () => void;
}

const LawPage: React.FC<LawPageProps> = ({ title, subtitle, content, onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <button onClick={onBack} className="flex items-center gap-2 text-[#0b2a4a] font-bold hover:text-[#b22222] transition-colors">
            <ChevronLeft size={20} />
            <span>Назад к регламенту</span>
          </button>
          <div className="flex items-center gap-3">
            <div className="bg-[#0b2a4a] text-white px-2 py-1 rounded font-bold text-sm">ЧИК</div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest hidden sm:inline">Законодательная база</span>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-white py-12 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#b22222]/10 text-[#b22222] rounded-xl flex items-center justify-center">
                <FileText size={24} />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-black text-[#0b2a4a]">{title}</h1>
                <p className="text-sm text-gray-500 font-medium">{subtitle}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-[#0b2a4a] transition-colors">
                <Download size={14} />
                Скачать PDF
              </button>
              <button className="flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-[#0b2a4a] transition-colors">
                <Share2 size={14} />
                Поделиться
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
          <div className="prose prose-slate max-w-none prose-headings:text-[#0b2a4a] prose-headings:font-black prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600">
            {content}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 text-center text-gray-400 text-xs">
        <p>© 2026 ЧИК — Челябинская Инженерная Компания</p>
        <p className="mt-2">Текст документа приведен в ознакомительных целях</p>
      </footer>
    </div>
  );
};

export default LawPage;
