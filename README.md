# Mert Yurttaş — Çizgi Film ve Animasyon Portfolyo Web Sitesi

Bu proje, **Çizgi Film ve Animasyon 4. Sınıf** öğrencisi **Mert Yurttaş**'ın akademik ve profesyonel üretimlerini (3D Animasyon ve Modelleme, Konsept Çizim, Karakter Tasarımı, Cel Animasyon ve Storyboard) sergileyen, modern, erişilebilir ve duyarlı (responsive) 4 sayfalık kişisel web portfolyosudur.

---

## 🌐 Canlı Demo & GitHub Repository
* **GitHub Repository:** [https://github.com/mertyurttasbau/mert-yurttas-portfolyo](https://github.com/mertyurttasbau/mert-yurttas-portfolyo)
* **Canlı Web Sitesi (GitHub Pages):** [https://mertyurttasbau.github.io/mert-yurttas-portfolyo/](https://mertyurttasbau.github.io/mert-yurttas-portfolyo/)

---

## 📁 Proje Dosya Yapısı (Eksiksiz Doğrulama)

```text
Mert_Yurttas_Portfolyo_Web/
├── index.html              # Ana Sayfa: Tanıtım, öne çıkan alanlar, portre ve kategori özetleri
├── hakkinda.html           # Hakkımda: Sanat vizyonu, eğitim, logo analizi ve araç çubuğu incelemesi
├── projeler.html           # Projeler: 10 orijinal eserin interaktif filtreli ve videolu galerisi
├── iletisim.html           # İletişim: JS form doğrulamalı, erişilebilir iletişim sayfası
├── style.css               # Koyu Gri, Fıstık Yeşili ve Güneş Turuncusu renk paletli CSS stili
├── script.js               # Tema değişimi, mobil menü, filtreleme, arama, lightbox ve form kontrolü
├── README.md               # Proje dökümantasyonu ve teslim raporu
├── .gitignore              # Git için gereksiz sistem dosyalarını yoksayma dosyası
└── assets/
    ├── icons/              # Orijinal araç çubuğundan dilimlenmiş 6 adet arayüz ikonu
    │   ├── tool_1.png      # Çizim Fırçası
    │   ├── tool_2.png      # Çerçeve / Seçim Aracı
    │   ├── tool_3.png      # Vertex / Poligon Düzenleme
    │   ├── tool_4.png      # İnce Uçlu Kalem
    │   ├── tool_5.png      # Dolgu / Bağlantı Kovası
    │   └── tool_6.png      # Rigging Kemik / Ağırlık Barı
    ├── img/                # Orijinal görseller, sanat paftaları ve video kapakları (13 dosya)
    │   ├── ben.jpg         # Mert Yurttaş Orijinal Portre Fotoğrafı
    │   ├── logo.png        # Zırhlı Eldiven (Armored Gauntlet) Logo Sembolü
    │   ├── mini_logo_fikirleri.png # Orijinal Araç Çubuğu Pafta Kaynağı
    │   ├── konsept_ornek_1.jpg     # Steampunk Patenli Kız Konsept Tasarımı
    │   ├── konsept_ornek_3.jpg     # Khadenum & Gym Leader Seigniry Town Paftası
    │   ├── modelleme_1.jpg         # Stilize Uyuyan Köpek Retopoloji Paftası
    │   ├── modelleme_rigging.jpg   # 4 Bacaklı Meka Tank IK Rigging Kurulumu
    │   ├── modelleme_2.jpg         # Mitolojik Boynuzlu Yaratık Heykelleme (Sculpting)
    │   ├── poster_cel_1.jpg        # Cel Motion 1 Kapak Karesi
    │   ├── poster_cel_2.jpg        # Cel Motion 2 Kapak Karesi
    │   ├── poster_cel_3.jpg        # Cel Motion 3 Kapak Karesi
    │   ├── poster_3d_anim.jpg      # 3D Animasyon Kapak Karesi
    │   └── poster_honeyfier.jpg    # Honeyfier Storyboard Kapak Karesi
    └── video/              # Orijinal animasyon ve animatik videoları (5 adet MP4)
        ├── cel_motion_1.mp4        # Kare kare ateş saçan canavar 2D cel animasyonu
        ├── cel_motion_2.mp4        # Kaslı figür dinamik tırmanış 2D cel animasyonu
        ├── cel_motion_3.mp4        # Yırtıcı kurt dönüşüm sekansı 2D cel animasyonu
        ├── 3d_animasyon.mp4        # 3D kütle ve serbest düşüş zamanlama çalışması
        └── honeyfier_animatic.mp4  # 48 saniyelik Honeyfier storyboard kurgu animatiği
```

---

## 🎨 Tasarım ve Teknik Standartlar
1. **Renk Paleti:**
   * **Koyu Gri (#181B1E, #22262A):** Stüdyo karanlık oda atmosferi ve profesyonel kontrast.
   * **Fıstık Yeşili (#93C572):** Canlılık, onay butonları, kategori etiketleri ve tipografi vurguları.
   * **Güneş Turuncusu (#FF8C00):** Eylem çağrıları (CTA), ikon vurguları ve interaktif odaklanmalar.
2. **Erişilebilirlik (WCAG / a11y):**
   * Tüm sayfalarda `#mainContent` bağlantılı `skip-link` mevcuttur.
   * Görsellerde zengin `alt` açıklamaları, butonlarda `aria-label` ve `aria-expanded` özellikleri kullanılmıştır.
   * Yüksek kontrast oranı ve klavye sekme (Tab / Focus-visible) navigasyonu tam uyumludur.
3. **Duyarlılık (Responsive Layout):**
   * Mobil, tablet ve masaüstü ekranlar için CSS Grid ve Flexbox altyapısı.
   * 680px altı ekranlar için hamburger menü etkileşimi.
4. **Çalışmaların Sunumu:**
   * 10 eserin tamamı kategorilendirilmiş, her esere özel "Kazanılan Deneyim & Teknik" kutucuğu eklenmiştir.
   * Canlı arama ve kategori sekme butonları JavaScript ile gerçek zamanlı çalışmaktadır.
   * Eserler tam boyutta inceleme sağlayan Lightbox Modal desteğine sahiptir.
