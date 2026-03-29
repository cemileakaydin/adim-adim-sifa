# 🗺️ Kullanıcı Akışı (User Flow) - Adım Adım Şifa

"Adım Adım Şifa", özel gereksinimli bireylerin hastane deneyimini kaostan düzene dönüştürmek için tasarlanmış lineer ve güvenli bir akış sunar.

## 🟢 1. Giriş ve Karşılama (Açılış)
- **Eylem:** Kullanıcı uygulamayı açar.
- **Görünüm:** Sakinleştirici renk tonları ve büyük, net yazılarla karşılanır.
- **Duygu:** Güven hissi oluşturulur.

## 🔵 2. Durum Belirleme (AAC Etkileşimi)
- **Eylem:** Kullanıcı o anki ihtiyacını tek tıkla belirtir.
- **Seçenekler:**
  - "Korkuyorum" (Duygusal destek ihtiyacı)
  - "Su istiyorum" (Fiziksel ihtiyaç bildirimi)
  - "Muayene ne kadar sürer?" (Belirsizlik giderme)
- **AI Yanıtı:** Gemini 1.5 Flash, seçilen butona göre anında, şefkatli ve somut bir açıklama yapar.

## 🟡 3. İnteraktif Simülasyon (AI Diyaloğu)
- **Eylem:** Kullanıcı aklındaki spesifik soruyu sesli veya yazılı sorar. (Örn: "İğne acıtacak mı?")
- **AI Davranışı:** - Soyut kavramları somutlaştırır ("Küçük bir sinek ısırığı gibi").
  - Süreci oyunlaştırır ("Şimdi bir süper kahraman gibi derin nefes alıyoruz").
  - Adım adım yönlendirme yapar.

## 🔴 4. Güvenli Çıkış ve Rahatlama
- **Eylem:** Kullanıcı simülasyonu tamamlar veya "Teşekkür ederim" der.
- **Sonuç:** AI, kullanıcıyı başarısından dolayı tebrik eder ve hastane stresini başarıyla yönettiği için olumlu pekiştirme (positive reinforcement) yapar.

---

### 🛡️ Hata ve Kesinti Senaryosu (Fallback Flow)
- **Durum:** İnternet kopması veya API anahtarı hatası.
- **Akış:** Uygulama "triggerFallback" sistemini devreye sokar -> Kullanıcıya önceden tanımlanmış, çevrimdışı çalışan sakinleştirici mesajlar gösterilir -> Kullanıcı asla cevapsız bırakılmaz.
