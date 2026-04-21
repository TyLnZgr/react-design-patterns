# ⚛️ React Design Patterns

Bu repo, React’te kullanılan yaygın **design pattern’leri** öğrenmek ve pratik etmek için hazırlanmıştır.

Her pattern, tamamen **izole bir mini uygulama** olarak tasarlanmıştır. Amaç; pattern’in teorisini değil, gerçek kullanım senaryosunu göstermektir.

---

## 📦 Proje Yapısı
apps/
├── builder-pattern/
├── container-presenter-pattern/
├── render-props/
├── compound-components/
└── proxy-pattern/


Her klasör:
- Bağımsız bir Vite + React projesidir
- Kendi içinde çalışır
- Diğer projelerden bağımsızdır

---

## 🚀 Kurulum

Projeyi klonladıktan sonra:

```bash
npm install

▶️ Çalıştırma

Belirli bir pattern’i çalıştırmak için:
npm run dev --workspace=container-presenter-pattern

veya direkt app içine girerek:

cd apps/container-presenter-pattern
npm run dev

