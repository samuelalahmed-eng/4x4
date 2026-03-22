import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import { Link } from 'react-router-dom';

const books = [
  {
    num: '01',
    title: 'التزامك أساس نجاحك',
    mainIdea: 'نجاحك يتشكل من معتقداتك وأفكارك الداخلية، لتحقيق أهدافك، يجب أن تغير مخططك الذهني.',
    lessons: [
      { title: 'العقلية هي كل شيء', desc: 'طريقة تفكيرك تحدد مسار حياتك بالكامل' },
      { title: 'تحمل المسؤولية', desc: 'أنت المسؤول الوحيد عن نتائج حياتك' },
      { title: 'فكر بشكل كبير', desc: 'توسيع نطاق أهدافك ورؤيتك للمستقبل' },
      { title: 'ركز على الفرص وليس العقبات', desc: 'تحويل نظرتك نحو الفرص في كل موقف' },
      { title: 'تعلم وتنمو باستمرار', desc: 'الالتزام بالتعلم المستمر كمنهج حياة' },
      { title: 'الثروة الحقيقية', desc: 'فهم جوهر الثروة الحقيقية في حياتك' },
      { title: 'اتخذ خطوة رغم الخوف', desc: 'الشجاعة ليست غياب الخوف بل التصرف رغمه' },
    ],
    gradient: 'from-emerald-700 to-emerald-900',
    accentColor: 'text-emerald-700',
    badgeColor: 'bg-emerald-50 text-emerald-700',
    borderColor: 'border-emerald-100',
    icon: 'ri-brain-line',
  },
  {
    num: '02',
    title: 'التحول العملي',
    mainIdea: 'التغيير المستدام يأتي من الأنظمة والهوية، وليس الأهداف فقط.',
    lessons: [
      { title: 'خطوات صغيرة تُحدث فارقاً', desc: 'التركيز على التحسين التدريجي المستمر' },
      { title: 'ركز على الأنظمة', desc: 'بناء أنظمة فعّالة بدلاً من الهوس بالأهداف' },
      { title: 'العادات المبنية على الهوية', desc: 'الهوية الجديدة تُولد عادات جديدة' },
      { title: 'اجعلها واضحة', desc: 'وضوح الإشارة يُفعّل العادة الجديدة' },
      { title: 'اجعلها جذابة', desc: 'ربط العادة بمكافأة تزيد من الرغبة' },
      { title: 'اجعلها سهلة', desc: 'تقليل الاحتكاك يجعل العادة أسهل في البداية' },
      { title: 'اجعلها مرضية', desc: 'الإشباع الفوري يُثبّت العادة في حياتك' },
    ],
    gradient: 'from-amber-500 to-amber-800',
    accentColor: 'text-amber-600',
    badgeColor: 'bg-amber-50 text-amber-700',
    borderColor: 'border-amber-100',
    icon: 'ri-loop-left-line',
  },
  {
    num: '03',
    title: 'التحول عبر الجرأة',
    mainIdea: 'الضعف ليس ضعفاً، بل هو مفتاح الشجاعة والاتصال العميق.',
    lessons: [
      { title: 'الشجاعة هي مصدر الإبداع', desc: 'الشجاعة تفتح أبواب الإبداع والفرح الحقيقي' },
      { title: 'تجنب النظرة الاستعطافية', desc: 'الانطلاق من موقع القوة لا الشفقة' },
      { title: 'الرحمة الذاتية', desc: 'معاملة نفسك بالرحمة كما تعامل الآخرين' },
      { title: 'الاتصال الحقيقي', desc: 'بناء روابط عميقة قائمة على الأصالة' },
      { title: 'الضعف كمصدر قوة', desc: 'إعادة تعريف الضعف كشجاعة حقيقية' },
      { title: 'الجرأة في المواجهة', desc: 'مواجهة الصعاب بقلب مفتوح وعقل واعٍ' },
      { title: 'بناء الثقة الداخلية', desc: 'الثقة تنبع من الداخل وليس من تقدير الآخرين' },
    ],
    gradient: 'from-rose-600 to-rose-900',
    accentColor: 'text-rose-600',
    badgeColor: 'bg-rose-50 text-rose-700',
    borderColor: 'border-rose-100',
    icon: 'ri-heart-3-line',
  },
  {
    num: '04',
    title: 'اطمح للنجوم، ستهبط على القمر',
    mainIdea: 'يمكنك أن تكون أعظم من أفكارك، النجاح يبدأ من الإيمان.',
    lessons: [
      { title: 'آمن بنجاحك', desc: 'الإيمان العميق بالنجاح يُهيئ لتحقيقه' },
      { title: 'افعل بقلب الخوف', desc: 'الإجراء الجريء هو قاتل الخوف الوحيد' },
      { title: 'توقف عن الأعذار', desc: 'الأعذار تمنعك من الانطلاق نحو هدفك' },
      { title: 'فكر بشكل كبير دائماً', desc: 'الطموح الكبير يجذب الفرص الكبيرة' },
      { title: 'نظّم بيئتك للنجاح', desc: 'البيئة المناسبة تُسرّع نموّك وتحولك' },
      { title: 'حوّل الهزيمة إلى نصر', desc: 'كل إخفاق درس نحو النجاح الأكبر' },
      { title: 'عطاء إيجابي وروح خدمة', desc: 'النجاح الحقيقي مرتبط بخدمة الآخرين' },
    ],
    gradient: 'from-violet-600 to-violet-900',
    accentColor: 'text-violet-600',
    badgeColor: 'bg-violet-50 text-violet-700',
    borderColor: 'border-violet-100',
    icon: 'ri-rocket-2-line',
  },
];

export default function Structure() {
  return (
    <div className="font-cairo">
      <Navbar />

      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=four%20premium%20hardcover%20books%20beautifully%20arranged%20on%20polished%20mahogany%20desk%20with%20warm%20golden%20spotlight%20ribbon%20bookmarks%20knowledge%20education%20wisdom%20concept%20minimalist%20professional%20photography%20soft%20bokeh%20background%20amber%20tones%20high%20detail&width=1920&height=700&seq=basira-struct-bg-003&orientation=landscape"
            alt="هيكلية برنامج بصيرة"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 to-gray-900/85"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <span className="inline-block bg-amber-400/20 border border-amber-400/30 text-amber-300 text-xs font-bold px-4 py-1.5 rounded-full mb-5">
              هيكلية البرنامج
            </span>
            <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight mb-5">
              الكتب الأربعة<br />
              <span className="text-amber-400">ركائز التحول</span>
            </h1>
            <p className="text-white/80 text-base leading-relaxed">
              منهجية فريدة تعتمد على أربعة كتب عالمية مؤثرة، كل كتاب يمثل ركيزة أساسية في رحلة التحول
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {books.map((book) => (
              <a
                key={book.num}
                href={`#book-${book.num}`}
                className="flex items-center gap-2 bg-stone-50 border border-stone-200 rounded-full px-5 py-2 hover:border-emerald-300 transition-all cursor-pointer text-sm font-semibold text-gray-700 hover:text-emerald-700"
              >
                <span className="text-gray-400 font-bold">{book.num}</span>
                {book.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-14">
          {books.map((book) => (
            <div
              key={book.num}
              id={`book-${book.num}`}
              className={`rounded-2xl overflow-hidden border ${book.borderColor}`}
            >
              <div className={`bg-gradient-to-br ${book.gradient} p-8 lg:p-10`}>
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="flex items-center gap-5">
                    <span className="text-white/20 font-black text-7xl leading-none">{book.num}</span>
                    <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-2xl">
                      <i className={`${book.icon} text-3xl text-white`}></i>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-white font-black text-2xl lg:text-3xl mb-3">{book.title}</h2>
                    <div className="flex items-start gap-2">
                      <i className="ri-double-quotes-r text-amber-300 text-xl shrink-0 mt-0.5"></i>
                      <p className="text-white/85 text-base italic leading-relaxed">{book.mainIdea}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 lg:p-10 bg-white">
                <h4 className={`font-bold text-sm mb-6 flex items-center gap-2 ${book.accentColor}`}>
                  <i className="ri-list-check-3 text-base"></i>
                  الدروس الأساسية
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {book.lessons.map((lesson) => (
                    <div key={lesson.title} className="bg-stone-50 rounded-xl p-4 border border-stone-100">
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`w-5 h-5 flex items-center justify-center shrink-0 ${book.accentColor}`}>
                          <i className="ri-checkbox-circle-line text-base"></i>
                        </div>
                        <h5 className="font-bold text-gray-900 text-sm">{lesson.title}</h5>
                      </div>
                      <p className="text-gray-500 text-xs leading-relaxed">{lesson.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-emerald-700 to-emerald-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
            هل أنت مستعد للتحول؟
          </h2>
          <p className="text-white/75 text-base mb-8 max-w-xl mx-auto">
            سجل الآن في برنامج بصيرة 4×4 وانطلق في رحلتك نحو التميز والنجاح الحقيقي
          </p>
          <Link
            to="/#registration"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-black text-base px-10 py-4 rounded-full whitespace-nowrap transition-all hover:scale-105 cursor-pointer"
          >
            سجل الآن مجاناً
            <i className="ri-arrow-left-line mr-2"></i>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
