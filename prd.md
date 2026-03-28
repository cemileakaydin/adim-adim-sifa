PRD: Adım Adım Şifa (Hospital Buddy)
1. Ürün Özeti
Adım Adım Şifa, özel gereksinimli bireylerin hastane fobisini yenmelerini sağlayan AI tabanlı bir simülasyon ve destek uygulamasıdır. Kullanıcıyı hastane süreçlerine (kan verme, muayene vb.) psikolojik olarak hazırlar.

2. Kullanıcı Hedefleri
Korkuyu Azaltmak: Bilinmezliği ortadan kaldırarak anksiyeteyi düşürmek.

Süreç Simülasyonu: Hastaneye gitmeden önce dijital olarak süreci deneyimlemek.

Kişiselleştirilmiş Destek: Kullanıcının özel korkularına (iğne, beyaz ışık, kalabalık) göre AI ile anlık çözümler üretmek.

3. Temel Özellikler (MVP)
3.1. AI Refakatçi (Chatbot)
Kullanıcının "Şimdi ne olacak?" sorusuna basit, sakin ve adım adım yanıt verir.

Örnek: "Önce kapıdaki ekranda ismini göreceksin, sonra hemşire seni içeri davet edecek."

Gemini API kullanılarak, kullanıcının ilgi alanlarına (örneğin: uzay, süper kahramanlar) göre süreci hikayeleştirir.

3.2. Etkileşimli Buton Simülasyonu
Hastanedeki cihazları temsil eden büyük, renkli ve sesli bir buton.

AI, "Şimdi sıra almak için butona basalım" dediğinde kullanıcı butona tıklar ve görsel/işitsel bir geri bildirim alır.

3.3. Rahatlama Modu
Kullanıcı "Korkuyorum" dediğinde AI; nefes egzersizi, görsel odaklanma oyunu veya sakinleştirici bir hikaye başlatır.

4. Teknik Gereksinimler (Tech Stack)
Frontend: React veya sadece HTML/JS (Tailwind CSS ile modern bir görünüm).

AI: Gemini API (Google AI Studio üzerinden).

Deployment: Lovable veya Netlify.

Dosya Yapısı:

index.html: Ana arayüz.

script.js: AI bağlantısı ve buton mantığı.

style.css: Erişilebilirlik odaklı (büyük yazı tipi, yumuşak renkler) tasarım.

5. Kullanıcı Akışı (User Flow)
Giriş: Kullanıcı uygulamayı açar ve yapmak istediği işlemi seçer (Örn: "Kan vereceğim").

Hazırlık: AI, süreci 3 basit adıma böler.

Etkileşim: AI yönlendirmesiyle kullanıcı ekrandaki butona basar (Sıra alma simülasyonu).

Destek: Kullanıcı anksiyete hissederse chat kısmına yazar, AI sakinleştirici moda geçer.
