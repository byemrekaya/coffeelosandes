/**
 * PDF “Tadım Etiketleri” yapısı — satır başlığı + içerik (TR).
 * Menşe ve lot özellikleri bölümünde tablo olarak gösterilir.
 */
export type TastingStructuredRow = {
  label: string;
  value: string;
};

export const tastingStructuredBySlug: Record<string, TastingStructuredRow[]> = {
  'geisha-91-54': [
    {
      label: 'Baskın notalar',
      value: 'Tayland Fesleğeni (+), Şampanya, Amaretto, Konyak',
    },
    {
      label: 'Destekleyici notalar',
      value: 'Şarabımsı, Meyve Kokteyli, Erik, Şeftali, Karamel, Şekerlemeler',
    },
    {
      label: 'Gövde ve bitiş',
      value:
        'Kakao, Kakao Parçacıkları (Nibs), Bitter Çikolata, Badem, Mentollü Yeşil Baharatlar',
    },
    {
      label: 'Karakter',
      value: 'Egzotik, Çiçeksi, Çok Kompleks ve Berrak',
    },
  ],
  'geisha-el-recreo-91-03': [
    {
      label: 'Baskın notalar',
      value: 'Şerbetli (+), Yasemin, Beyaz Çiçekler, Kivi',
    },
    {
      label: 'Destekleyici notalar',
      value:
        'Orman Meyveleri (Böğürtlengiller), Çilek, Kırmızı Meyveler, Guava, Şeftali',
    },
    {
      label: 'Gövde ve bitiş',
      value:
        'Tereyağımsı Gövde, Kavrulmuş Fındık, Beyaz Şeker, Karamel, Çikolata, Bitter Çikolata, Kakao',
    },
    {
      label: 'Karakter',
      value: 'Elegant, Floral, Zitrik ve Belirgin Yapılı',
    },
  ],
  'tabi-90-38': [
    {
      label: 'Baskın notalar',
      value: 'Süt Reçeli (Dulce de Leche), Cachapa (Mısır Krebi), Karamelize Hindistan Cevizi',
    },
    {
      label: 'Destekleyici notalar',
      value: 'Tatlı Kakao, Beyaz Çikolata, Şeker Kamışı, Kahveli Karamel',
    },
    {
      label: 'Gövde ve bitiş',
      value: 'Yumuşak Gövde, Tatlı ve Kalıcı Bitiş, Cosette',
    },
    {
      label: 'Karakter',
      value: 'Meyvemsi, Kakao Odaklı, Dengeli ve Kompleks',
    },
  ],
  'otra-89-83': [
    {
      label: 'Baskın notalar',
      value: 'Bergamot, Siyah Çay, Şeftali',
    },
    {
      label: 'Tatlılık',
      value: 'Şeker Kamışı, Karamel, Süt Reçeli (Dulce de Leche)',
    },
    {
      label: 'Karakter',
      value: 'Narenciye, Yasemin Çiçeği, Badem',
    },
    {
      label: 'Genel profil',
      value: 'Kompleks, Zarif, Tatlı ve Hoş Baharatlı',
    },
  ],
  'villanueva-89-05': [
    {
      label: 'Baskın notalar',
      value: 'Kayısı, Şerbet, Mandalina Çiçeği, Tereyağlı Kurabiye',
    },
    {
      label: 'Tatlılık',
      value: 'Esmer Şeker, Karamel, Süt Reçeli (Arequipe)',
    },
    {
      label: 'Karakter',
      value: 'Kavrulmuş Badem, Sedir Ağacı, Çekirdekli Meyveler (Stone Fruits)',
    },
    {
      label: 'Bitiş',
      value: 'Kahverengi Baharatlar ve Kakao Parçacıkları (Nibs)',
    },
  ],
  'castillo-naranjal-88-83': [
    {
      label: 'Baskın notalar',
      value: 'Bitter Çikolata (Bakers Chocolate), Karamelize Hindistan Cevizi, Kiraz',
    },
    {
      label: 'Tatlılık',
      value: 'Süt Reçeli (Dulce de Leche), Şeker Kamışı, Karamel',
    },
    {
      label: 'Karakter',
      value: 'Badem, Fındık, Esmer Baharatlar',
    },
    {
      label: 'Gövde',
      value: 'Kremamsı Gövde, Kakao ve Kakao Parçacıkları (Nibs)',
    },
  ],
  'monteclaro-88-75': [
    {
      label: 'Baskın notalar',
      value: 'Bergamot, Kırmızı Meyveler, Şeftali',
    },
    {
      label: 'Tatlılık',
      value: 'Esmer Şeker, Şeker Kamışı, Karamel, Sütlü Çikolata',
    },
    {
      label: 'Karakter',
      value: 'Kavrulmuş Badem, Esmer Baharatlar, İnce Otsu Notalar',
    },
    {
      label: 'Asidite',
      value: 'Sitrik ve Tatlı bir bitiş',
    },
  ],
  'inia-01-88-73': [
    {
      label: 'Baskın notalar',
      value: 'Yaban Mersini (Blueberry), Çilek, Taze Kiraz, Şeftali',
    },
    {
      label: 'Tatlılık',
      value: 'Süt Reçeli (Dulce de Leche), Esmer Şeker, Karamel',
    },
    {
      label: 'Karakter',
      value: 'Kakule, Frenk Kimyonu (Caraway), Tarhun, Egzotik Çiçeksi Tonlar',
    },
    {
      label: 'Yapı',
      value: 'Yumuşak Gövde, İnce Otsu ve Baharatlı Notalar',
    },
  ],
  'bourbon-88-52': [
    {
      label: 'Baskın notalar',
      value: 'Orman Meyveleri, Fermente Kirazlar, Çiçeksi',
    },
    {
      label: 'Tatlılık',
      value: 'Kamış Şekeri, Karamel, Bitter Çikolata',
    },
    {
      label: 'Karakter',
      value: 'Kakao Parçacıkları (Nibs), Zarif ve Karmaşık Yapı',
    },
    {
      label: 'Not',
      value:
        'Bu kahve karmaşık bir yapıya sahiptir; fincan sıcaklığı düştükçe tatların yoğunluğu değişerek farklı katmanlar sunar',
    },
  ],
  'castillo-las-mesas-84-50': [
    {
      label: 'Baskın notalar',
      value: 'Şeftali, Karamel, İncir, Kuru Üzüm',
    },
    {
      label: 'Karakter',
      value: 'Hafif Çiçeksi, Macadamia Fındığı, Tatlı Aromatikler',
    },
    {
      label: 'Deneyim',
      value: 'Belirgin ve iyi tanımlanmış gövde yapısı',
    },
  ],
  'caturra-la-cuchilla-83-75': [
    {
      label: 'İşlem',
      value: 'Yıkanmış (Washed)',
    },
    {
      label: 'Baskın notalar',
      value: 'Akçaağaç Şurubu (Maple Syrup), Çikolata, Karamel',
    },
    {
      label: 'Karakter',
      value: 'Baharatlı Tonlar, Şeftali',
    },
    {
      label: 'Deneyim',
      value: 'Çok katmanlı ve yapılandırılmış bir içim',
    },
  ],
  'catuai-los-cedros-84': [
    {
      label: 'Baskın notalar',
      value: 'Çekirdekli Meyveler (Stone Fruits), Vanilya, Erik',
    },
    {
      label: 'Asidite / gövde',
      value: 'İpeksi Gövde, Ferahlatıcı Sitrik Asidite',
    },
    {
      label: 'Bitiş',
      value: 'Derin Limon Otu (Lemongrass) tadı bırakan kalıcı bir retrogusto',
    },
  ],
  'dunamix-blend-83-50': [
    {
      label: 'Baskın notalar',
      value: 'Çikolata, Kavrulmuş Fındık ve Karamel',
    },
    {
      label: 'Meyvemsi dokunuşlar',
      value: 'Erik (Ciruela), Yeni Dünya (Níspero) ve Şeftali',
    },
    {
      label: 'Aromatik karakter',
      value: 'Yoğun Çiçeksi (Floral) tonlar ve Hafif Baharatlı (Spicy) bir yapı',
    },
    {
      label: 'Asidite / gövde',
      value: 'Orta düzeyde asidite, espresso için ideal dengeli gövde ve pürüzsüz içim',
    },
  ],
  'mixed-series-82-50': [
    {
      label: 'Baskın notalar',
      value: 'Kakao ve Fındık (Nussig)',
    },
    {
      label: 'Karakter',
      value: 'Hafif (Mild) ve Nötr',
    },
    {
      label: 'Deneyim',
      value: 'Pürüzsüz ve temiz içim, her fincanda tutarlı tat profili',
    },
    {
      label: 'Kullanım alanı',
      value:
        'Fiyat/performans odaklı büyük işletmeler ve harman (blend) bazları için idealdir',
    },
  ],
};
