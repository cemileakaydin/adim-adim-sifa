# 🛠 Teknoloji Yığını (Tech Stack) - Adım Adım Şifa

"Adım Adım Şifa" projesi, özel gereksinimli bireyler için düşük gecikmeli, güvenli ve erişilebilir bir deneyim sunmak amacıyla aşağıdaki teknolojilerle inşa edilmiştir.

## 🎨 Frontend (Önyüz)
- **HTML5 & CSS3:** Semantik yapı ve erişilebilirlik (accessibility) odaklı arayüz tasarımı.
- **JavaScript (Vanilla):** Harici kütüphane bağımlılığını azaltarak uygulamanın her cihazda (eski telefonlar dahil) hızlı çalışması sağlandı.
- **Responsive Design:** Otizm ve DEHB olan bireylerin odaklanmasını kolaylaştırmak için sade, büyük butonlu ve mobil uyumlu tasarım.

## 🤖 Yapay Zeka (AI)
- **Model:** `Gemini 1.5 Flash` (Google AI Studio)
- **Neden Flash?**: Hastane stresi yaşayan bir kullanıcının beklemeye tahammülü azdır. 1.5 Flash modeli, en düşük gecikme süresi (latency) ile en empatik yanıtları verebildiği için tercih edildi.
- **Prompt Engineering:** Kullanıcıyı sakinleştiren, hastane prosedürlerini oyunlaştıran özel bir "System Instruction" mimarisi kullanıldı.

## 🛡 Güvenlik ve Altyapı
- **Deployment:** `Vercel`
- **API Güvenliği:** API anahtarları istemci tarafında (client-side) açıkta bırakılmadı. Vercel üzerinde **Environment Variables (Çevresel Değişkenler)** kullanılarak anahtarın çalınması engellendi.
- **Hata Yönetimi (Fallback):** İnternet kesintisi veya API limit aşımı durumunda uygulamanın çökmemesi için "Yedek Mesaj Sistemi" entegre edildi.

## ⚙️ Araçlar
- **Cursor AI:** Kod yazımı ve hata ayıklama (Vibe Coding).
- **GitHub:** Versiyon kontrolü ve dokümantasyon.
- **Vercel:** CI/CD süreçleri ve canlı yayın.
