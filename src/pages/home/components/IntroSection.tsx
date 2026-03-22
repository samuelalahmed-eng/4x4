export default function IntroSection() {
  return (
    <section id="intro" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-bold px-4 py-1.5 rounded-full mb-5">
              عن البرنامج
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-6">
              رحلة التحول الذاتي<br />
              <span className="text-emerald-700">تبدأ هنا</span>
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-5">
              برنامج بصيرة 4×4، المقدم من وايت روك القابضة، هو برنامج معرفي تحفيزي رائد يهدف إلى تمكين الأفراد من
              تحقيق أقصى إمكاناتهم. صُمم البرنامج ليكون نقطة انطلاق نحو التحول الذاتي الواعي، مركزًا على تحويل
              المعرفة النظرية إلى بصائر عملية قابلة للتطبيق في حياتك الشخصية والمهنية.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              نحن نؤمن بأن التزامك وتطبيقك هما أساس نجاحك، ولهذا يركز برنامجنا على الجانب العملي والتطبيقي
              مع منهجية فريدة مستوحاة من أفضل البرامج العالمية في التطوير الشخصي.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: 'ri-book-open-line', text: 'قراءة واعية' },
                { icon: 'ri-lightbulb-line', text: 'تطبيق عملي' },
                { icon: 'ri-seedling-line', text: 'نمو مستدام' },
                { icon: 'ri-trophy-line', text: 'نجاح حقيقي' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 bg-stone-50 border border-stone-200 rounded-full px-4 py-2">
                  <div className="w-5 h-5 flex items-center justify-center text-emerald-700">
                    <i className={`${item.icon} text-sm`}></i>
                  </div>
                  <span className="text-gray-700 text-sm font-semibold">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {[
              {
                icon: 'ri-mind-map-line',
                title: 'تحول معرفي',
                desc: 'نساعدك على إعادة بناء طريقة تفكيرك وتوسيع نمط تفكيرك الإيجابي',
                color: 'bg-emerald-50 text-emerald-700',
              },
              {
                icon: 'ri-refresh-line',
                title: 'عادات إيجابية',
                desc: 'منهجية علمية لبناء عادات مستدامة تقودك نحو النجاح يوماً بيوم',
                color: 'bg-amber-50 text-amber-700',
              },
              {
                icon: 'ri-shield-star-line',
                title: 'الشجاعة والجرأة',
                desc: 'تنمية الشجاعة النفسية لمواجهة تحديات الحياة بثقة واستمرارية',
                color: 'bg-amber-50 text-amber-700',
              },
              {
                icon: 'ri-rocket-2-line',
                title: 'عقلية النجاح',
                desc: 'بناء عقلية المنجزين وتطوير رؤية واضحة نحو تحقيق الأهداف',
                color: 'bg-emerald-50 text-emerald-700',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-stone-100 rounded-2xl p-6 hover:border-emerald-200 transition-all hover:-translate-y-1"
              >
                <div className={`w-12 h-12 flex items-center justify-center rounded-xl mb-4 ${item.color}`}>
                  <i className={`${item.icon} text-xl`}></i>
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
