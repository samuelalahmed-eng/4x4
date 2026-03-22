export default function HeroSection() {
  const scrollToSection = (anchor: string) => {
    const el = document.getElementById(anchor);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=inspiring%20professional%20person%20standing%20on%20elevated%20rocky%20peak%20looking%20at%20vast%20golden%20sunrise%20horizon%20motivational%20success%20journey%20wide%20cinematic%20landscape%20dramatic%20lighting%20warm%20golden%20tones%20aspirational%20achievement%20photography&width=1920&height=1000&seq=basira-bg-hero-001&orientation=landscape"
          alt="خلفية برنامج بصيرة 4×4"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/65"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/20"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-28 pb-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold px-4 py-1.5 rounded-full">
              وايت روك القابضة
            </span>
            <span className="h-px w-12 bg-amber-400/40"></span>
            <span className="text-amber-300/80 text-xs font-medium">برنامج معرفي تحفيزي رائد</span>
          </div>

          <h1 className="text-5xl lg:text-[4.5rem] font-black text-white leading-tight mb-6">
            اكتشف<br />
            <span className="text-amber-400">إمكاناتك الكامنة</span><br />
            <span className="text-white/80 text-3xl lg:text-4xl font-bold">وانطلق نحو تحول حقيقي</span>
          </h1>

          <p className="text-lg text-white/85 leading-relaxed mb-3 max-w-2xl">
            برنامج بصيرة 4×4 هو رحلتك نحو التطور الشخصي والمهني، مصمم لإحداث تحول معرفي وسلوكي عميق.
            من خلال منهجية فريدة تعتمد على أربعة كتب عالمية مؤثرة، نساعدك على بناء عادات إيجابية،
            وتنمية الشجاعة، وتطوير عقلية النجاح.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <button
              onClick={() => scrollToSection('registration')}
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-base px-10 py-4 rounded-full whitespace-nowrap transition-all hover:scale-105 cursor-pointer"
            >
              سجل الآن في بصيرة 4×4
              <i className="ri-arrow-left-line mr-2"></i>
            </button>
            <button
              onClick={() => scrollToSection('intro')}
              className="bg-white/10 hover:bg-white/20 border border-white/40 text-white font-semibold text-base px-8 py-4 rounded-full whitespace-nowrap transition-all cursor-pointer"
            >
              اكتشف المزيد
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 w-full">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5">
            {[
              { num: '+500', label: 'مشارك حول العالم' },
              { num: '+15', label: 'دولة مستهدفة' },
              { num: '4', label: 'كتب تحويلية عالمية' },
              { num: '100%', label: 'تطبيق عملي' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-black text-amber-400">{stat.num}</div>
                <div className="text-white/70 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
