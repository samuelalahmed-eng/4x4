import { useState } from 'react';

const benefits = [
  { icon: 'ri-fire-line', title: 'تحول حقيقي', desc: 'الأدوات والمعرفة لتغيير إيجابي مستدام' },
  { icon: 'ri-expand-up-down-line', title: 'تطوير شامل', desc: 'نمِ قدراتك في التفكير، العادات، والشجاعة' },
  { icon: 'ri-user-star-line', title: 'دعم الخبراء', desc: 'توجيهات مدربين خبراء وتجارب تفاعلية' },
  { icon: 'ri-team-line', title: 'مجتمع داعم', desc: 'انضم لمجتمع أفراد طموحين في رحلة التطور' },
];

export default function RegistrationSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [source, setSource] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const params = new URLSearchParams();
    formData.forEach((value, key) => {
      params.append(key, value.toString());
    });
    try {
      await fetch('https://readdy.ai/api/form/d6vo10e7ipaugi04lnd0', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="registration" className="py-24 bg-gradient-to-br from-emerald-800 to-emerald-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-300 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <span className="inline-block bg-amber-400/20 border border-amber-400/30 text-amber-300 text-xs font-bold px-4 py-1.5 rounded-full mb-5">
              سجل الآن
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
              لماذا تسجل في<br />
              <span className="text-amber-400">بصيرة 4×4؟</span>
            </h2>
            <p className="text-white/75 text-base leading-relaxed mb-8">
              لا تدع الفرصة تفوتك! سجل الآن في برنامج بصيرة 4×4 وابدأ رحلتك نحو التميز.
            </p>
            <div className="space-y-5">
              {benefits.map((b) => (
                <div key={b.title} className="flex items-start gap-4">
                  <div className="w-11 h-11 flex items-center justify-center bg-amber-400/20 rounded-xl text-amber-400 shrink-0">
                    <i className={`${b.icon} text-xl`}></i>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">{b.title}</h4>
                    <p className="text-white/65 text-sm">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 flex items-center justify-center bg-emerald-100 rounded-full mx-auto mb-4">
                  <i className="ri-check-double-line text-3xl text-emerald-600"></i>
                </div>
                <h3 className="text-gray-900 font-black text-xl mb-2">تم التسجيل بنجاح!</h3>
                <p className="text-gray-500 text-sm">شكراً لك! سيتواصل معك فريقنا قريباً.</p>
              </div>
            ) : (
              <>
                <h3 className="font-black text-gray-900 text-xl mb-6">نموذج التسجيل</h3>
                <form
                  data-readdy-form
                  id="registration-form"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-1.5">الاسم الكامل *</label>
                    <input
                      type="text"
                      name="fullname"
                      required
                      className="w-full border border-stone-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-emerald-500 transition-colors"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-1.5">البريد الإلكتروني *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full border border-stone-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-emerald-500 transition-colors"
                      placeholder="example@email.com"
                      dir="ltr"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-1.5">رقم الهاتف</label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full border border-stone-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-emerald-500 transition-colors"
                      placeholder="+971 50 000 0000"
                      dir="ltr"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-1.5">الدولة *</label>
                    <select
                      name="country"
                      required
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full border border-stone-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-emerald-500 transition-colors bg-white"
                    >
                      <option value="">اختر دولتك</option>
                      <option>الإمارات العربية المتحدة</option>
                      <option>المملكة العربية السعودية</option>
                      <option>الكويت</option>
                      <option>قطر</option>
                      <option>البحرين</option>
                      <option>عُمان</option>
                      <option>الأردن</option>
                      <option>مصر</option>
                      <option>الولايات المتحدة الأمريكية</option>
                      <option>المملكة المتحدة</option>
                      <option>كندا</option>
                      <option>أستراليا</option>
                      <option>دولة أخرى</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-1.5">كيف سمعت عنا؟</label>
                    <select
                      name="source"
                      value={source}
                      onChange={(e) => setSource(e.target.value)}
                      className="w-full border border-stone-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-emerald-500 transition-colors bg-white"
                    >
                      <option value="">اختر</option>
                      <option>وسائل التواصل الاجتماعي</option>
                      <option>توصية من صديق</option>
                      <option>محرك البحث</option>
                      <option>إعلانات</option>
                      <option>فعالية أو مؤتمر</option>
                      <option>أخرى</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-emerald-700 hover:bg-emerald-800 disabled:opacity-60 text-white font-bold text-sm py-4 rounded-lg whitespace-nowrap transition-all cursor-pointer"
                  >
                    {loading ? 'جارٍ الإرسال...' : 'سجّل الآن مجاناً'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
