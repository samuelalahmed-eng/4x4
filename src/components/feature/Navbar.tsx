import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface NavLink {
  label: string;
  to: string;
  anchor?: string;
}

const navLinks: NavLink[] = [
  { label: 'الرئيسية', to: '/' },
  { label: 'عن البرنامج', to: '/about' },
  { label: 'هيكلية البرنامج', to: '/structure' },
  { label: 'التسجيل', to: '/', anchor: 'registration' },
  { label: 'اتصل بنا', to: '/', anchor: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (anchor: string) => {
    const el = document.getElementById(anchor);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAnchorClick = (e: React.MouseEvent, anchor: string) => {
    e.preventDefault();
    if (isHome) {
      scrollToSection(anchor);
    } else {
      navigate('/');
      setTimeout(() => scrollToSection(anchor), 400);
    }
    setMenuOpen(false);
  };

  const navBg = scrolled ? 'bg-white shadow-sm' : 'bg-transparent';
  const linkColor = scrolled || !isHome
    ? 'text-gray-700 hover:text-emerald-700'
    : 'text-white/90 hover:text-amber-300';
  const logoFilter = !scrolled && isHome ? 'brightness-0 invert' : '';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center shrink-0">
          <img
            src="https://static.readdy.ai/image/d13b4f85d2207796ff60aaa89c0812a5/82d8eb4bdc353154fb1a5a6a0d2aaa95.jpeg"
            alt="شعار بصيرة 4×4"
            className={`h-12 w-auto object-contain transition-all duration-300 ${logoFilter}`}
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.label}>
              {link.anchor ? (
                <a
                  href={`/#${link.anchor}`}
                  className={`text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap ${linkColor}`}
                  onClick={(e) => handleAnchorClick(e, link.anchor!)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  to={link.to}
                  className={`text-sm font-semibold transition-colors whitespace-nowrap ${linkColor}`}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <a
          href="/#registration"
          className="hidden lg:block bg-amber-600 hover:bg-amber-700 text-white text-sm font-bold px-7 py-2.5 rounded-full whitespace-nowrap transition-all hover:scale-105 cursor-pointer"
          onClick={(e) => handleAnchorClick(e, 'registration')}
        >
          سجل الآن
        </a>

        <button
          className="lg:hidden w-8 h-8 flex items-center justify-center cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={`${menuOpen ? 'ri-close-line' : 'ri-menu-3-line'} text-2xl ${scrolled || !isHome ? 'text-gray-800' : 'text-white'}`}></i>
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-stone-100 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.anchor ? (
                  <a
                    href={`/#${link.anchor}`}
                    className="text-sm font-semibold text-gray-700 cursor-pointer"
                    onClick={(e) => handleAnchorClick(e, link.anchor!)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    to={link.to}
                    className="text-sm font-semibold text-gray-700"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
