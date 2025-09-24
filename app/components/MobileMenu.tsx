'use client';

export default function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
        <h2 className="text-xl font-bold text-blue-600">NextVision</h2>
        <button onClick={onClose} className="p-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Menu Links */}
      <ul className="flex flex-col gap-4 px-6 py-6">
        <li>
          <a href="#features" onClick={onClose} className="hover:text-blue-500 text-black">
            Features
          </a>
        </li>
        <li>
          <a href="#pricing" onClick={onClose} className="hover:text-blue-500 text-black">
            Pricing
          </a>
        </li>
        <li>
          <a href="#testimonials" onClick={onClose} className="hover:text-blue-500 text-black">
            Testimonials
          </a>
        </li>
        <li>
          <a href="#contact" onClick={onClose} className="hover:text-blue-500 text-black">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
