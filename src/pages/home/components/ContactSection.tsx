import { useState } from 'react';

const contactInfo = [
  {
    icon: 'ri-mail-send-line',
    title: 'البريد الإلكتروني',
    value: 'info@whiterockholding.com',
    link: 'mailto:info@whiterockholding.com',
  },
  {
    icon: 'ri-phone-line',
    title: 'الهاتف',
    value: '+971 50 123 4567',
    link: 'tel:+971501234567',
  },
  {
    icon: 'ri-map-pin-2-line',
    title: 'العنوان',
    value: 'وايت روك القابضة، الإمارات العربية المتحدة',
    link: '#',
  },
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const maxChars = 500;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (charCount > maxChars) return;
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const params = new URLSearchParams();
    formData.forEach((value, key) => {
      params.append(key, value.toString());
    });
    try {
      await fetch('https://readdy.ai/api/form/d6vo1167ipaugi04lndg', {
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
    <section id="contact" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-bold px-4 py-1.5 rounded-full mb-4">
            تواصل معنا
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            نحن هنا للمساعدة
          </h2>
          <p className="text-gray-500 text-base max-w-md mx-auto">
            لا تتردد في التواصل معنا للإجابة على استفساراتك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {contactInfo.map((info) => (
            <a
              key={info.title}
              href={info.link}
              rel="nofollow"
              className="bg-white rounded-2xl p-6 text-center border border-stone-100 hover:border-emerald-200 transition-all hover:-translate-y-1 cursor-pointer"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-emerald-50 rounded-xl text-emerald-700 mx-auto mb-4">
                <i className={`${info.icon} text-xl`}></i>
              </div>
              <h4 className="font-bold text-gray-900 text-sm mb-2">{info.title}</h4>
              <p className="text-gray-500 text-sm" dir={info.title === 'الهاتف' || info.title === 'البريد الإلكتروني' ? 'ltr' : 'rtl'}>
                {info.value}
              </p>
            </a>
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 border border-stone-100">
          {submitted ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 flex items-center justify-center bg-emerald-100 rounded-full mx-auto mb-4">
                <i className="ri-check-double-line text-3xl text-emerald-600"></i>
              </div>
              <h3 className="text-gray-900 font-black text-xl mb-2">تم إرسال رسالتك!</h3>
              <p className="text-gray-500 text-sm">شكراً لتواصلك معنا، سنرد عليك في أقرب وقت.</p>
            </div>
          ) : (
            <>
              <h3 className="font-black text-gray-900 text-xl mb-6">أرسل لنا استفساراً</h3>
              <form
                data-readdy-form
                id="contact-form"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-1.5">الاسم الكامل *</label>
                    <input
                      type="text"
                      name="fullname"
                      required
                      className="w-full border border-stone-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                      placeholder="اسمك الكامل"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-1.5">البريد الإلكتروني *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full border border-stone-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                      placeholder="example@email.com"
                      dir="ltr"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-1.5">الموضوع *</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="w-full border border-stone-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                    placeholder="موضوع استفساركم"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-1.5">الرسالة *</label>
                  <textarea
                    name="message"
                    required
                    maxLength={maxChars}
                    rows={4}
                    onChange={(e) => setCharCount(e.target.value.length)}
                    className="w-full border border-stone-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                    placeholder="اكتب رسالتك هنا..."
                  />
                  <div className="flex justify-between mt-1">
                    <span className={`text-xs ${charCount > maxChars ? 'text-red-500' : 'text-gray-400'}`}>
                      {charCount}/{maxChars} حرف
                    </span>
                    {charCount > maxChars && (
                      <span className="text-red-500 text-xs">تجاوزت الحد المسموح به</span>
                    )}
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={loading || charCount > maxChars}
                  className="w-full bg-emerald-700 hover:bg-emerald-800 disabled:opacity-60 text-white font-bold text-sm py-4 rounded-lg whitespace-nowrap transition-all cursor-pointer"
                >
                  {loading ? 'جارٍ الإرسال...' : 'إرسال الرسالة'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
