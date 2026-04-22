⚛️ React Design Patterns Monorepo

Bu repository, React’te kullanılan yaygın design pattern’leri öğrenmek ve gerçek kullanım senaryoları üzerinden pratik etmek için hazırlanmıştır.

Amaç yalnızca teoriyi göstermek değil, her pattern’i izole, çalışabilir ve üretim benzeri bir mini uygulama olarak deneyimlemektir.

🧠 Yaklaşım

Her design pattern:

Tamamen bağımsız bir uygulamadır
Kendi Vite + React setup’ına sahiptir
Diğer pattern’lerden izole çalışır
Gerçek dünya kullanımına yakın şekilde tasarlanmıştır

apps/
├── container-presenter-pattern/
├── controlled-uncontrolled-pattern/
├── ...

🚀 Kurulum

Projeyi klonladıktan sonra bağımlılıkları yükle:

npm install

▶️ Çalıştırma
🔹 Workspace üzerinden çalıştırma

Belirli bir pattern’i çalıştırmak için:

npm run dev -w container-presenter-pattern


🔹 Direkt klasör üzerinden çalıştırma

Alternatif olarak ilgili app’e girip çalıştırabilirsin:

cd apps/container-presenter-pattern
npm run dev
