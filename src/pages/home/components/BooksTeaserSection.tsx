import { Link } from 'react-router-dom';

const books = [
  {
    num: '01',
    title: 'التزامك أساس نجاحك',
    idea: 'نجاحك يتشكل من معتقداتك وأفكارك الداخلية',
    desc: 'لتحقيق أهدافك، يجب أن تغير مخططك الذهني وتتحمل المسؤولية الكاملة عن حياتك.',
    lessons: ['العقلية هي كل شيء', 'تحمل المسؤولية', 'فكر بشكل كبير', 'ركز على الفرص'],
    color: 'from-emerald-600 to-emerald-800',
    icon: 'ri-brain-line',
    textColor: 'text-emerald-700',
    badgeBg: 'bg-emerald-50 text-emerald-700',
  },
  {
    num: '02',
    title: 'التحول العملي',
    idea: 'التغيير المستدام يأتي من الأنظمة والهوية وليس الأهداف فقط',
    desc: 'تعلم كيف تبني عادات مبنية على هويتك الجديدة من خلال قوانين السلوك الأربعة.',
    lessons: ['خطوات صغيرة كبيرة', 'ركز على الأنظمة', 'هوية جديدة', 'اجعلها سهلة'],
    color: 'from-amber-500 to-amber-700',
    icon: 'ri-loop-left-line',
    textColor: 'text-amber-600',
    badgeBg: 'bg-amber-50 text-amber-700',
  },
  {
    num: '03',
    title: 'التحول عبر الجرأة',
    idea: 'الضعف ليس ضعفاً، بل هو مفتاح الشجاعة والاتصال العميق',
    desc: 'اكتشف كيف يمكن للضعف أن يكون مصدر قوتك وإبداعك وفرحك الحقيقي.',
    lessons: ['الشجاعة مصدر الإبداع', 'الرحمة الذاتية', 'الاتصال الحقيقي', 'تجنب الاستعطاف'],
    color: 'from-rose-600 to-rose-800',
    icon: 'ri-heart-3-line',
    textColor: 'text-rose-600',
    badgeBg: 'bg-rose-50 text-rose-700',
  },
  {
    num: '04',
    title: 'اطمح للنجوم، ستهبط على القمر',
    idea: 'يمكنك أن تكون أعظم من أفكارك، النجاح يبدأ من الإيمان',
    desc: 'طموح بلا حدود يفتح أبواباً لم تتخيلها. آمن بنجاحك وافعل بقلب الخوف.',
    lessons: ['آمن بنجاحك', 'فكر بشكل كبير', 'حوّل الهزيمة لنصر', 'روح خدمة إيجابية'],
    color: 'from-violet-600 to-violet-800',
    icon: 'ri-rocket-2-line',
    textColor: 'text-violet-600',
    badgeBg: 'bg-violet-50 text-violet-700',
  },
];

export default function BooksTeaserSection() {
  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-bold px-4 py-1.5 rounded-full mb-4">
            هيكلية البرنامج
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            الركائز الأربع للتحول
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            أربعة كتب عالمية مؤثرة، كل واحد يمثل ركيزة أساسية في رحلة تحولك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <div
              key={book.num}
              className="bg-white rounded-2xl overflow-hidden border border-stone-100 hover:border-emerald-200 transition-all hover:-translate-y-1 group"
            >
              <div className={`bg-gradient-to-br ${book.color} p-6 relative`}>
                <span className="text-white/30 font-black text-5xl absolute top-3 left-4">{book.num}</span>
                <div className="w-14 h-14 flex items-center justify-center bg-white/20 rounded-xl mb-3 relative z-10">
                  <i className={`${book.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-white font-bold text-lg leading-snug relative z-10">{book.title}</h3>
              </div>
              <div className="p-5">
                <p className={`text-xs font-bold mb-3 ${book.textColor}`}>الفكرة الرئيسية</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{book.desc}</p>
                <div className="space-y-2">
                  {book.lessons.map((lesson) => (
                    <div key={lesson} className="flex items-center gap-2">
                      <div className="w-4 h-4 flex items-center justify-center text-emerald-600 shrink-0">
                        <i className="ri-check-line text-xs"></i>
                      </div>
                      <span className="text-gray-600 text-xs">{lesson}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/structure"
            className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm px-8 py-3.5 rounded-full whitespace-nowrap transition-all hover:scale-105 cursor-pointer"
          >
            تعرّف على البرنامج بالتفصيل
            <i className="ri-arrow-left-line"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
