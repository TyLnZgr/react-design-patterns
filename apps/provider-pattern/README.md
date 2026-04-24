# React Provider Pattern Örneği

Bu uygulama, React'ta Provider Pattern kullanarak Context API ile state yönetimini gösteren eğitici bir örnektir.

## 🚀 Özellikler

- **Theme Yönetimi**: Light/Dark mode geçişi ile Provider Pattern örneği
- **Context API**: Global state yönetimi
- **Custom Hook**: `useTheme` hook ile kolay erişim
- **Responsive Design**: Mobil uyumlu tasarım

## 📋 Provider Pattern Nedir?

Provider Pattern, React Context API kullanarak component'ler arasında global state paylaşımını sağlar. Bu pattern sayesinde:

- **Prop Drilling** önlenir
- Component'ler arası veri akışı kolaylaşır
- State yönetimi merkezi hale gelir
- Kod tekrarları azaltılır

## 🏗️ Uygulama Yapısı (Best Practices)

```
src/
├── components/           # UI Component'leri
│   ├── Header.jsx       # Uygulama başlığı
│   ├── ThemeToggle.jsx  # Theme değiştirme butonu
│   ├── PatternExplanation.jsx  # Pattern açıklaması
│   ├── DemoSection.jsx  # Demo bölümü
│   ├── CodeExample.jsx  # Kod örnekleri
│   └── index.js         # Component exports
├── context/             # Context API
│   ├── ThemeContext.jsx # Theme context ve provider
│   └── index.js         # Context exports
├── hooks/               # Custom Hooks
│   ├── useTheme.js      # Theme hook'u
│   └── index.js         # Hook exports
├── constants/           # Sabitler
│   ├── themes.js        # Theme sabitleri
│   └── index.js         # Constants exports
├── styles/              # CSS dosyaları
│   └── App.css          # Ana stiller
├── App.jsx              # Ana uygulama
└── main.jsx             # Giriş noktası
```

### 📁 Klasör Yapısı Açıklaması

- **`components/`**: Tüm UI component'leri burada toplanır
- **`context/`**: Context API ile ilgili tüm kodlar
- **`hooks/`**: Custom hook'lar (Fast Refresh uyumluluğu için ayrı)
- **`constants/`**: Uygulama sabitleri ve konfigürasyonlar
- **`styles/`**: CSS dosyaları ve tema stilleri

## 🔧 Kullanım

1. **Kurulum**:

   ```bash
   npm install
   ```

2. **Geliştirme**:

   ```bash
   npm run dev
   ```

3. **Build**:
   ```bash
   npm run build
   ```

## 📖 Kod Açıklaması

### Context Yapısı (`context/ThemeContext.jsx`)

- `createContext()` ile theme context'i oluşturur
- `ThemeProvider` component'i state'i yönetir
- Sadece component export eder (Fast Refresh uyumluluğu için)

### Custom Hook (`hooks/useTheme.js`)

- `useContext()` ile context'e erişim sağlar
- Error handling ile Provider dışı kullanım kontrolü
- Sadece hook export eder (Fast Refresh için ayrı dosya)

### Component'ler (`components/`)

- `Header`: Uygulama başlığı ve theme toggle
- `PatternExplanation`: Provider Pattern açıklaması
- `DemoSection`: Interaktif demo alanı
- `CodeExample`: Kod örnekleri gösterimi

### Constants (`constants/themes.js`)

- Theme sabitleri ve etiketler
- İkon tanımları
- Uygulama genelinde kullanılan değerler

## 🎯 Öğrenme Hedefleri

Bu örnek ile şunları öğreneceksiniz:

1. **Context Oluşturma**: `createContext()` kullanımı
2. **Provider Kullanımı**: Component ağacına context sağlama
3. **Custom Hooks**: Context'e kolay erişim için hook oluşturma
4. **State Yönetimi**: Global state ile theme değiştirme
5. **Error Handling**: Context dışı kullanım kontrolü
6. **Best Practices**: Dosya organizasyonu ve Fast Refresh uyumluluğu
7. **Modüler Yapı**: Component'leri mantıklı şekilde ayırma

## 🌐 Demo

Uygulama çalışırken:

- Butona tıklayarak light/dark mode arasında geçiş yapın
- Tema değişikliğinin tüm component'lerde nasıl yansıdığını görün
- Kod örneklerini inceleyin

## 📚 Daha Fazla Bilgi

- [React Context API Dokümantasyonu](https://react.dev/reference/react/createContext)
- [Provider Pattern](https://reactpatterns.com/#provider-pattern)
- [useContext Hook](https://react.dev/reference/react/useContext)
