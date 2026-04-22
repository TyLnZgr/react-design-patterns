# ⚛️ React Design Patterns Lab

Bu proje, React’te kullanılan yaygın design pattern’leri öğrenmek için hazırlanmış bir **monorepo eğitim ortamıdır**.

Amaç sadece pattern ezberlemek değil,  
👉 “hangi problemi çözer, neden vardır ve ne zaman kullanılmamalıdır?” sorularını anlamaktır.

---

# 🎯 Amaç

Bu repo sayesinde:

- React component mimarisini öğrenirsin
- Gerçek dünya pattern’lerini görürsün
- Over-engineering yapmamayı öğrenirsin
- UI ve state tasarımını bilinçli hale getirirsin

---

# 📦 Proje Yapısı

Her pattern, **bağımsız bir React + Vite uygulaması**dır:

```bash id="structure_tr"
apps/
  controlled-uncontrolled/
  compound-components/
  hoc-pattern/
  render-props/
  proxy-pattern/
  custom-hook-pattern/
  provider-pattern/
  state-reducer-pattern/
  pub-sub-observer/
  react-performance-guide/

  🚀 Kurulum
npm install

▶️ Çalıştırma
Workspace ile çalıştırma
npm run dev -w compound-components

Direkt klasör üzerinden
cd apps/compound-components
npm run dev

🧠 Öğrenme Sırası 

Bu sırayla ilerlemen önerilir:

1. Temel React Mantığı
Controlled / Uncontrolled Components
Custom Hooks Pattern

👉 React state kontrolünü öğrenirsin

2. Component Composition
Compound Components
Render Props
Higher Order Components (HOC)

👉 Component tasarım mantığını öğrenirsin

3. State Mimarisi
Provider Pattern
State Reducer Pattern

👉 state yönetimini mimari seviyede anlarsın

4. İleri Seviye Pattern’ler
Proxy Pattern
Pub/Sub (Observer Pattern)

👉 sistem tasarım bakış açısı kazanırsın

5. Performans
React Performance Guide

👉 gereksiz render’ları önlemeyi ve optimizasyonu öğrenirsin

🧩 Pattern Mantığı

Her pattern şu sorulara cevap verir:

Bu problem neden oluşur?
Basit çözüm neden yetersiz kalır?
Pattern neyi değiştirir?
Yan etkileri nelerdir?

⚠️ Önemli Not

Bu projede:

Her pattern tek doğru çözüm değildir
Her biri trade-off içerir
Amaç “kullanmak” değil “anlamak”tır

💣 Gerçek Hedef

Bu repo sana şunu kazandırır:

👉 React component yazmak değil
👉 React sistem tasarlamak
