import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollToSection = (anchor: string) => {
    const el = document.getElementById(anchor);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-100 pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <img
              src="https://static.readdy.ai/image/d13b4f85d2207796ff60aaa89c0812a5/82d8eb4bdc353154fb1a5a6a0d2aaa95.jpeg"
              alt="شعار بصيرة 4×4"
              className="h-14 w-auto object-contain mb-5"
            />
            <p className="text-emerald-700 font-bold text-sm mb-2">وايت روك القابضة</p>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              تمكين التحول العالمي | إطلاق الإمكانات من خلال تطوير الذات
            </p>
            <div className="flex gap-3 mt-5">
              <a href="#" rel="nofollow" className="w-9 h-9 flex items-center justify-center rounded-full bg-stone-200 text-gray-500 hover:bg-emerald-700 hover:text-white transition-all cursor-pointer">
                <i className="ri-twitter-x-line text-sm"></i>
              </a>
              <a href="#" rel="nofollow" className="w-9 h-9 flex items-center justify-center rounded-full bg-stone-200 text-gray-500 hover:bg-emerald-700 hover:text-white transition-all cursor-pointer">
                <i className="ri-instagram-line text-sm"></i>
              </a>
              <a href="#" rel="nofollow" className="w-9 h-9 flex items-center justify-center rounded-full bg-stone-200 text-gray-500 hover:bg-emerald-700 hover:text-white transition-all cursor-pointer">
                <i className="ri-linkedin-box-line text-sm"></i>
              </a>
              <a href="#" rel="nofollow" className="w-9 h-9 flex items-center justify-center rounded-full bg-stone-200 text-gray-500 hover:bg-emerald-700 hover:text-white transition-all cursor-pointer">
                <i className="ri-youtube-line text-sm"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-5 text-sm border-r-2 border-emerald-600 pr-3">روابط سريعة</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-500 text-sm hover:text-emerald-700 transition-colors cursor-pointer">الرئيسية</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-500 text-sm hover:text-emerald-700 transition-colors cursor-pointer">عن البرنامج</Link>
              </li>
              <li>
                <Link to="/structure" className="text-gray-500 text-sm hover:text-emerald-700 transition-colors cursor-pointer">هيكلية البرنامج</Link>
              </li>
              <li>
                <a href="/#registration" className="text-gray-500 text-sm hover:text-emerald-700 transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); scrollToSection('registration'); }}>التسجيل</a>
              </li>
              <li>
                <a href="/#contact" className="text-gray-500 text-sm hover:text-emerald-700 transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>اتصل بنا</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-5 text-sm border-r-2 border-emerald-600 pr-3">تواصل معنا</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 flex items-center justify-center text-emerald-700">
                  <i className="ri-mail-line text-base"></i>
                </div>
                <a href="mailto:info@whiterockholding.com" className="text-gray-500 text-sm hover:text-emerald-700 transition-colors">
                  info@whiterockholding.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 flex items-center justify-center text-emerald-700">
                  <i className="ri-phone-line text-base"></i>
                </div>
                <span className="text-gray-500 text-sm" dir="ltr">+971 50 123 4567</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 flex items-center justify-center text-emerald-700 shrink-0 mt-0.5">
                  <i className="ri-map-pin-line text-base"></i>
                </div>
                <span className="text-gray-500 text-sm">وايت روك القابضة، الإمارات العربية المتحدة</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-200 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-400 text-xs">
            © 2026 بصيرة 4×4 - وايت روك القابضة. جميع الحقوق محفوظة.
          </p>
          <p className="text-gray-400 text-xs">
            تمكين التحول العالمي
          </p>
        </div>
      </div>
    </footer>
  );
}
