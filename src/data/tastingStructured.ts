export type TastingLabelKey =
  | 'dominantNotes'
  | 'supportingNotes'
  | 'bodyFinish'
  | 'character'
  | 'sweetness'
  | 'generalProfile'
  | 'finish'
  | 'body'
  | 'acidity'
  | 'structure'
  | 'note'
  | 'process'
  | 'experience'
  | 'acidityBody'
  | 'fruityTouch'
  | 'aromaticCharacter'
  | 'usageArea';

export type TastingStructuredRow = {
  labelKey: TastingLabelKey;
  value: string;
};

export const tastingStructuredBySlug: Record<string, TastingStructuredRow[]> = {
  'geisha-91-54': [
    {
      labelKey: 'dominantNotes',
      value: 'Tayland Fesleğeni (+), Şampanya, Amaretto, Konyak',
    },
    {
      labelKey: 'supportingNotes',
      value: 'Şarabımsı, Meyve Kokteyli, Erik, Şeftali, Karamel, Şekerlemeler',
    },
    {
      labelKey: 'bodyFinish',
      value:
        'Kakao, Kakao Parçacıkları (Nibs), Bitter Çikolata, Badem, Mentollü Yeşil Baharatlar',
    },
    {
      labelKey: 'character',
      value: 'Egzotik, Çiçeksi, Çok Kompleks ve Berrak',
    },
  ],
  'geisha-el-recreo-91-03': [
    {
      labelKey: 'dominantNotes',
      value: 'Şerbetli (+), Yasemin, Beyaz Çiçekler, Kivi',
    },
    {
      labelKey: 'supportingNotes',
      value:
        'Orman Meyveleri (Böğürtlengiller), Çilek, Kırmızı Meyveler, Guava, Şeftali',
    },
    {
      labelKey: 'bodyFinish',
      value:
        'Tereyağımsı Gövde, Kavrulmuş Fındık, Beyaz Şeker, Karamel, Çikolata, Bitter Çikolata, Kakao',
    },
    {
      labelKey: 'character',
      value: 'Elegant, Floral, Zitrik ve Belirgin Yapılı',
    },
  ],
  'tabi-90-38': [
    {
      labelKey: 'dominantNotes',
      value: 'Süt Reçeli (Dulce de Leche), Cachapa (Mısır Krebi), Karamelize Hindistan Cevizi',
    },
    {
      labelKey: 'supportingNotes',
      value: 'Tatlı Kakao, Beyaz Çikolata, Şeker Kamışı, Kahveli Karamel',
    },
    {
      labelKey: 'bodyFinish',
      value: 'Yumuşak Gövde, Tatlı ve Kalıcı Bitiş, Cosette',
    },
    {
      labelKey: 'character',
      value: 'Meyvemsi, Kakao Odaklı, Dengeli ve Kompleks',
    },
  ],
  'geisha-90-30': [
    {
      labelKey: 'dominantNotes',
      value: 'Kayısı (+), Erik, Şeftali, Orman meyveleri',
    },
    {
      labelKey: 'supportingNotes',
      value: 'Esmer şeker, Brandy, Konyak, Kakao Nibs, Karamelize şeker',
    },
    {
      labelKey: 'bodyFinish',
      value: 'Kremamsı, İpeksi gövde, Çikolata, Kakao, Tatlı ve kalıcı bitiş',
    },
    {
      labelKey: 'character',
      value: 'Meyvemsi, Şarapmsı (avinato), Kahverengi baharatlar, Egzotik ve kompleks',
    },
  ],
  'otra-89-83': [
    {
      labelKey: 'dominantNotes',
      value: 'Bergamot, Siyah Çay, Şeftali',
    },
    {
      labelKey: 'sweetness',
      value: 'Şeker Kamışı, Karamel, Süt Reçeli (Dulce de Leche)',
    },
    {
      labelKey: 'character',
      value: 'Narenciye, Yasemin Çiçeği, Badem',
    },
    {
      labelKey: 'generalProfile',
      value: 'Kompleks, Zarif, Tatlı ve Hoş Baharatlı',
    },
  ],
  'villanueva-89-05': [
    {
      labelKey: 'dominantNotes',
      value: 'Kayısı, Şerbet, Mandalina Çiçeği, Tereyağlı Kurabiye',
    },
    {
      labelKey: 'sweetness',
      value: 'Esmer Şeker, Karamel, Süt Reçeli (Arequipe)',
    },
    {
      labelKey: 'character',
      value: 'Kavrulmuş Badem, Sedir Ağacı, Çekirdekli Meyveler (Stone Fruits)',
    },
    {
      labelKey: 'finish',
      value: 'Kahverengi Baharatlar ve Kakao Parçacıkları (Nibs)',
    },
  ],
  'castillo-naranjal-88-83': [
    {
      labelKey: 'dominantNotes',
      value: 'Bitter Çikolata (Bakers Chocolate), Karamelize Hindistan Cevizi, Kiraz',
    },
    {
      labelKey: 'sweetness',
      value: 'Süt Reçeli (Dulce de Leche), Şeker Kamışı, Karamel',
    },
    {
      labelKey: 'character',
      value: 'Badem, Fındık, Esmer Baharatlar',
    },
    {
      labelKey: 'body',
      value: 'Kremamsı Gövde, Kakao ve Kakao Parçacıkları (Nibs)',
    },
  ],
  'monteclaro-88-75': [
    {
      labelKey: 'dominantNotes',
      value: 'Bergamot, Kırmızı Meyveler, Şeftali',
    },
    {
      labelKey: 'sweetness',
      value: 'Esmer Şeker, Şeker Kamışı, Karamel, Sütlü Çikolata',
    },
    {
      labelKey: 'character',
      value: 'Kavrulmuş Badem, Esmer Baharatlar, İnce Otsu Notalar',
    },
    {
      labelKey: 'acidity',
      value: 'Sitrik ve Tatlı bir bitiş',
    },
  ],
  'inia-01-88-73': [
    {
      labelKey: 'dominantNotes',
      value: 'Yaban Mersini (Blueberry), Çilek, Taze Kiraz, Şeftali',
    },
    {
      labelKey: 'sweetness',
      value: 'Süt Reçeli (Dulce de Leche), Esmer Şeker, Karamel',
    },
    {
      labelKey: 'character',
      value: 'Kakule, Frenk Kimyonu (Caraway), Tarhun, Egzotik Çiçeksi Tonlar',
    },
    {
      labelKey: 'structure',
      value: 'Yumuşak Gövde, İnce Otsu ve Baharatlı Notalar',
    },
  ],
  'bourbon-88-52': [
    {
      labelKey: 'dominantNotes',
      value: 'Orman Meyveleri, Fermente Kirazlar, Çiçeksi',
    },
    {
      labelKey: 'sweetness',
      value: 'Kamış Şekeri, Karamel, Bitter Çikolata',
    },
    {
      labelKey: 'character',
      value: 'Kakao Parçacıkları (Nibs), Zarif ve Karmaşık Yapı',
    },
    {
      labelKey: 'note',
      value:
        'Bu kahve karmaşık bir yapıya sahiptir; fincan sıcaklığı düştükçe tatların yoğunluğu değişerek farklı katmanlar sunar',
    },
  ],
  'castillo-las-mesas-84-50': [
    {
      labelKey: 'dominantNotes',
      value: 'Şeftali, Karamel, İncir, Kuru Üzüm',
    },
    {
      labelKey: 'character',
      value: 'Hafif Çiçeksi, Macadamia Fındığı, Tatlı Aromatikler',
    },
    {
      labelKey: 'experience',
      value: 'Belirgin ve iyi tanımlanmış gövde yapısı',
    },
  ],
  'caturra-la-cuchilla-83-75': [
    {
      labelKey: 'process',
      value: 'Yıkanmış (Washed)',
    },
    {
      labelKey: 'dominantNotes',
      value: 'Akçaağaç Şurubu (Maple Syrup), Çikolata, Karamel',
    },
    {
      labelKey: 'character',
      value: 'Baharatlı Tonlar, Şeftali',
    },
    {
      labelKey: 'experience',
      value: 'Çok katmanlı ve yapılandırılmış bir içim',
    },
  ],
  'catuai-los-cedros-84': [
    {
      labelKey: 'dominantNotes',
      value: 'Çekirdekli Meyveler (Stone Fruits), Vanilya, Erik',
    },
    {
      labelKey: 'acidityBody',
      value: 'İpeksi Gövde, Ferahlatıcı Sitrik Asidite',
    },
    {
      labelKey: 'finish',
      value: 'Derin Limon Otu (Lemongrass) tadı bırakan kalıcı bir retrogusto',
    },
  ],
  'dunamix-blend-83-50': [
    {
      labelKey: 'dominantNotes',
      value: 'Çikolata, Kavrulmuş Fındık ve Karamel',
    },
    {
      labelKey: 'fruityTouch',
      value: 'Erik (Ciruela), Yeni Dünya (Níspero) ve Şeftali',
    },
    {
      labelKey: 'aromaticCharacter',
      value: 'Yoğun Çiçeksi (Floral) tonlar ve Hafif Baharatlı (Spicy) bir yapı',
    },
    {
      labelKey: 'acidityBody',
      value: 'Orta düzeyde asidite, espresso için ideal dengeli gövde ve pürüzsüz içim',
    },
  ],
  'mixed-series-82-50': [
    {
      labelKey: 'dominantNotes',
      value: 'Kakao ve Fındık (Nussig)',
    },
    {
      labelKey: 'character',
      value: 'Hafif (Mild) ve Nötr',
    },
    {
      labelKey: 'experience',
      value: 'Pürüzsüz ve temiz içim, her fincanda tutarlı tat profili',
    },
    {
      labelKey: 'usageArea',
      value:
        'Fiyat/performans odaklı büyük işletmeler ve harman (blend) bazları için idealdir',
    },
  ],
};
