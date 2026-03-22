const phases = [
  { phase: 'المرحلة الأولى', countries: 'الولايات المتحدة، المملكة المتحدة، كندا، أستراليا', icon: 'ri-flag-line' },
  { phase: 'المرحلة الثانية', countries: 'أوروبا، سنغافورة، نيوزيلندا', icon: 'ri-global-line' },
  { phase: 'المرحلة الثالثة', countries: 'الهند، ماليزيا، الإمارات، أمريكا اللاتينية', icon: 'ri-earth-line' },
];

const benefits = [
  { icon: 'ri-lightbulb-flash-line', text: 'تعزيز القدرات الفكرية والسلوكية' },
  { icon: 'ri-seedling-line', text: 'بناء عادات إيجابية ومستدامة' },
  { icon: 'ri-shield-star-line', text: 'تنمية الشجاعة لمواجهة تحديات الحياة' },
  { icon: 'ri-scales-3-line', text: 'تحقيق نجاح متوازن في جوانب الحياة' },
];

export default function TargetSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://static.readdy.ai/image/d13b4f85d2207796ff60aaa89c0812a5/518a5a80b61c23960a999b683a3b7f06.png"
                alt="الجمهور المستهدف لبرنامج بصيرة"
                className="w-full h-[500px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 right-6 left-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                  <p className="text-emerald-700 font-bold text-sm">للأفراد الطموحين</p>
                  <p className="text-gray-600 text-xs mt-1">من يسعون لإطلاق إمكاناتهم الكاملة</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-bold px-4 py-1.5 rounded-full mb-5">
              الجمهور المستهدف
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-5">
              لمن هذا<br />
              <span className="text-emerald-700">البرنامج؟</span>
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-7">
              يستهدف برنامج بصيرة 4×4 الأفراد الطموحين الذين يسعون إلى التطور الشخصي والمهني،
              وإطلاق إمكاناتهم الكاملة. نرحب بكل من يرغب في:
            </p>

            <div className="space-y-4 mb-10">
              {benefits.map((b) => (
                <div key={b.text} className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-emerald-50 rounded-xl text-emerald-700 shrink-0">
                    <i className={`${b.icon} text-lg`}></i>
                  </div>
                  <span className="text-gray-700 font-semibold text-sm">{b.text}</span>
                </div>
              ))}
            </div>

            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
              <h4 className="font-bold text-gray-900 text-sm mb-4 flex items-center gap-2">
                <div className="w-5 h-5 flex items-center justify-center text-emerald-700">
                  <i className="ri-map-2-line"></i>
                </div>
                خطة التوسع العالمي
              </h4>
              <div className="space-y-3">
                {phases.map((p, idx) => (
                  <div key={p.phase} className="flex items-start gap-3">
                    <div className={`w-6 h-6 flex items-center justify-center rounded-full shrink-0 text-xs font-bold mt-0.5 ${idx === 0 ? 'bg-emerald-700 text-white' : 'bg-stone-200 text-gray-500'}`}>
                      {idx + 1}
                    </div>
                    <div>
                      <span className="text-gray-800 font-bold text-xs">{p.phase}: </span>
                      <span className="text-gray-500 text-xs">{p.countries}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
