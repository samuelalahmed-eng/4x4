import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import { Link } from 'react-router-dom';

const objectives = [
  { icon: 'ri-book-read-line', text: 'تعزيز ثقافة القراءة التحولية وربطها بالتطور الذاتي الواعي' },
  { icon: 'ri-lightbulb-line', text: 'تمكين المشاركين من فهم وتطبيق الأفكار الجوهرية في الكتب الأربعة' },
  { icon: 'ri-seedling-line', text: 'المساهمة في بناء عادات إيجابية مستدامة' },
  { icon: 'ri-shield-star-line', text: 'تنمية الشجاعة النفسية والجرأة الواعية في مواجهة التحديات' },
  { icon: 'ri-expand-up-down-line', text: 'توسيع نمط التفكير الإيجابي وتجاوز المعتقدات المقيدة' },
  { icon: 'ri-trophy-line', text: 'تحفيز المشاركين على صناعة مسار نجاح متوازن بين الفكر والسلوك والإنجاز' },
];

const strengths = [
  {
    icon: 'ri-puzzle-line',
    title: 'منهجية فريدة',
    desc: 'مستوحى من برامج عالمية ناجحة مثل "إتقان الحياة" لتوني روبنز، مع التركيز على التكيف الثقافي والواقع العملي.',
    color: 'bg-emerald-50 text-emerald-700',
  },
  {
    icon: 'ri-tools-line',
    title: 'تطبيق عملي',
    desc: 'لا يقتصر البرنامج على المعرفة النظرية، بل يركز على تحويل الأفكار إلى خطوات عملية قابلة للتطبيق في حياتك اليومية.',
    color: 'bg-amber-50 text-amber-700',
  },
  {
    icon: 'ri-team-line',
    title: 'تجارب تفاعلية',
    desc: 'يوفر البرنامج تجارب تفاعلية وورش عمل يقودها مدربون خبراء، مما يعزز من فهمك وتطبيقك للمفاهيم.',
    color: 'bg-rose-50 text-rose-700',
  },
  {
    icon: 'ri-refresh-line',
    title: 'تحول شامل',
    desc: 'يغطي البرنامج جوانب متعددة من التطور الشخصي لضمان تحول شامل ومستدام يشمل التفكير والعادات والشجاعة.',
    color: 'bg-violet-50 text-violet-700',
  },
];

export default function About() {
  return (
    <div className="font-cairo">
      <Navbar />

      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=professional%20diverse%20business%20team%20engaged%20collaborative%20workshop%20modern%20corporate%20office%20natural%20sunlight%20large%20glass%20windows%20teamwork%20success%20aspirational%20editorial%20photography%20warm%20golden%20tones%20sharp%20colors&width=1920&height=700&seq=basira-about-bg-002&orientation=landscape"
            alt="عن برنامج بصيرة"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/75 to-emerald-900/85"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <span className="inline-block bg-amber-400/20 border border-amber-400/30 text-amber-300 text-xs font-bold px-4 py-1.5 rounded-full mb-5">
              وايت روك القابضة
            </span>
            <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight mb-5">
              عن برنامج<br />
              <span className="text-amber-400">بصيرة 4×4</span>
            </h1>
            <p className="text-white/80 text-base leading-relaxed">
              برنامج معرفي تحفيزي رائد يهدف إلى تمكين الأفراد من تحقيق أقصى إمكاناتهم
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-bold px-4 py-1.5 rounded-full mb-5">من نحن</span>
              <h2 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight mb-6">
                برنامج بصيرة 4×4<br />
                <span className="text-emerald-700">نقطة انطلاق التحول</span>
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-5">
                برنامج بصيرة 4×4، المقدم من وايت روك القابضة، هو برنامج معرفي تحفيزي رائد يهدف إلى تمكين الأفراد
                من تحقيق أقصى إمكاناتهم. صُمم البرنامج ليكون نقطة انطلاق نحو التحول الذاتي الواعي، مركزًا على
                تحويل المعرفة النظرية إلى بصائر عملية قابلة للتطبيق في حياتك الشخصية والمهنية.
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                نحن نؤمن بأن التزامك وتطبيقك هما أساس نجاحك، ولهذا يركز برنامجنا على الجانب العملي والتطبيقي
                لضمان تحول حقيقي ومستدام في حياتك.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=arabic%20professional%20mentor%20coaching%20group%20of%20motivated%20students%20in%20bright%20modern%20seminar%20room%20warm%20lighting%20knowledge%20sharing%20leadership%20training%20workshop%20positive%20atmosphere%20high%20quality%20editorial&width=700&height=550&seq=basira-whoweare-003&orientation=landscape"
                  alt="من نحن"
                  className="w-full h-72 object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-emerald-700 text-white rounded-xl p-5 shadow-lg max-w-xs">
                <div className="text-3xl font-black text-amber-300 mb-1">4×4</div>
                <div className="text-sm text-white/85">أربعة كتب تحويلية عالمية</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-bold px-4 py-1.5 rounded-full mb-4">رؤيتنا ورسالتنا</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">التوجه الاستراتيجي</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-emerald-700 to-emerald-900 rounded-2xl p-8">
              <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-xl mb-5">
                <i className="ri-eye-line text-2xl text-white"></i>
              </div>
              <div className="text-amber-300 font-bold text-sm mb-3">الرؤية</div>
              <h3 className="text-white font-black text-xl mb-4">نموذج رائد في صناعة التحول</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                أن نكون نموذجاً رائداً في صناعة التحول المعرفي والسلوكي، ومنصة ملهمة لبناء الإنسان الواعي
                القادر على تطوير ذاته وصناعة نجاحه بثقة واستمرارية.
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-600 to-amber-800 rounded-2xl p-8">
              <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-xl mb-5">
                <i className="ri-rocket-line text-2xl text-white"></i>
              </div>
              <div className="text-emerald-200 font-bold text-sm mb-3">الرسالة</div>
              <h3 className="text-white font-black text-xl mb-4">تحفيز القراءة الواعية التحويلية</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                تحفيز الأفراد على القراءة الواعية للكتب التحولية، واستخلاص جوهر أفكارها، وربطها بالواقع العملي،
                بما يسهم في تطوير التفكير وبناء العادات الإيجابية وتعزيز الشجاعة والإنجاز.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-bold px-4 py-1.5 rounded-full mb-4">أهداف البرنامج</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-3">ما نسعى لتحقيقه</h2>
            <p className="text-gray-500 text-base max-w-lg mx-auto">
              يهدف برنامج بصيرة 4×4 إلى إحداث تحول معرفي وسلوكي شامل لدى المشاركين
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {objectives.map((obj, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-stone-50 rounded-xl p-5 border border-stone-100 hover:border-emerald-200 transition-all">
                <div className="w-10 h-10 flex items-center justify-center bg-emerald-100 rounded-xl text-emerald-700 shrink-0">
                  <i className={`${obj.icon} text-lg`}></i>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed font-medium">{obj.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-bold px-4 py-1.5 rounded-full mb-4">لماذا بصيرة 4×4؟</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">نقاط القوة</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {strengths.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-7 border border-stone-100 hover:border-emerald-200 transition-all">
                <div className={`w-12 h-12 flex items-center justify-center rounded-xl mb-5 ${s.color}`}>
                  <i className={`${s.icon} text-xl`}></i>
                </div>
                <h3 className="font-black text-gray-900 text-lg mb-3">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-emerald-700 to-emerald-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
            ابدأ رحلة التحول اليوم
          </h2>
          <p className="text-white/75 text-base mb-8">
            انضم إلى مئات المشاركين الذين غيّروا حياتهم مع برنامج بصيرة 4×4
          </p>
          <Link
            to="/#registration"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-black text-base px-10 py-4 rounded-full whitespace-nowrap transition-all hover:scale-105 cursor-pointer"
          >
            سجل الآن مجاناً
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
