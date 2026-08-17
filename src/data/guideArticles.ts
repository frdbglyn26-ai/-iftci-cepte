export interface GuideArticle {
  id: string;
  title: string;
  emoji: string;
  category: string;
  summary: string;
  content: string[];
}

export const guideArticles: GuideArticle[] = [
  {
    id: 'toprak-hazirligi',
    title: 'Toprak Hazırlığı Rehberi',
    emoji: '🌍',
    category: 'Toprak',
    summary: 'Verimli bir hasat için toprak hazırlığının temel adımları.',
    content: [
      'Toprak hazırlığı, başarılı bir tarım sezonunun en önemli adımıdır. İyi hazırlanmış toprak, bitki köklerinin derinlemesine yayılmasını, suyu etkili şekilde emmesini ve besin maddelerine kolay erişmesini sağlar.',
      'İlk adım, toprağın derin sürülmesidir. Sürüm, toprağı havalandırır ve alt katmanlardaki besin maddelerini yüzeye çıkarır. Toprak işleme, son hasattan sonra veya ekimden 2-3 hafta önce yapılmalıdır.',
      'Toprak analizi yaptırmak, pH değerini ve besin elementi seviyelerini belirlemenin en doğru yoludur. Analiz sonuçlarına göre gerekli gübreleme ve toprak iyileştirme işlemleri planlanmalıdır.',
      'Organik madde eklenmesi toprağın yapısını iyileştirir. Yanmış çiftlik gübresi, kompost veya yeşil gübre uygulamaları toprağın su tutma kapasitesini artırır ve mikrobiyal aktiviteyi destekler.',
    ],
  },
  {
    id: 'sulama-teknikleri',
    title: 'Akıllı Sulama Teknikleri',
    emoji: '💧',
    category: 'Sulama',
    summary: 'Su tasarrufu sağlayan ve verimi artıran sulama yöntemleri.',
    content: [
      'Sulama, tarımsal verimliliğin en kritik faktörlerinden biridir. Doğru sulama, hem su tasarrufu sağlar hem de bitki sağlığını korur.',
      'Damla sulama sistemleri, suyu doğrudan bitki köküne ulaştırarak buharlaşma kaybını en aza indirir. Geleneksel sulama yöntemlerine göre %30-50 su tasarrufu sağlayabilir.',
      'Sulama zamanlaması çok önemlidir. Sabah erken saatlerde veya akamüstü sulama, su buharlaşmasını azaltır. Öğle saatlerinde sulamaktan kaçının.',
      'Toprak nemini düzenli olarak kontrol etmek, aşırı veya eksik sulamayı önler. Parmağınızı toprağın 5-10 cm derinliğine batırarak nem seviyesini kontrol edebilirsiniz.',
    ],
  },
  {
    id: 'hastalık-zararli',
    title: 'Hastalık ve Zararlı Yönetimi',
    emoji: '🐛',
    category: 'Hastalık',
    summary: 'Bitki hastalıklarının ve zararlıların erken teşhisi ve yönetimi.',
    content: [
      'Bitki hastalıkları ve zararlıları, tarımsal verimi ciddi şekilde etkileyebilir. Erken teşhis ve doğru müdahale, kayıpları en aza indirmenin anahtarıdır.',
      'Kültürel mücadele yöntemleri ilk savunma hattıdır. Ekim nöbeti, dayanıklı çeşit seçimi, uygun bitki sıklığı ve temiz tarım aletleri kullanımı hastalık riskini azaltır.',
      'Düzenli tarla kontrolü, hastalık ve zararlıların erken tespiti için şarttır. Haftalık olarak yaprak, gövde ve kök kontrolü yapılmalıdır.',
      'Kimyasal mücadele, son çare olarak kullanılmalıdır. Uygulama öncesi bölgesel tarım danışmanlarına başvurulması ve güncel etiket bilgilerinin takip edilmesi önemle tavsiy edilir.',
    ],
  },
  {
    id: 'ekim-nobeti',
    title: 'Ekim Nöbeti Önemi',
    emoji: '🔄',
    category: 'Toprak',
    summary: 'Toprak verimliliğini koruyan hastalık riskini azaltan ekim nöbeti.',
    content: [
      'Ekim nöbeti, aynı tarla parselinde farklı ürünlerin sırayla yetiştirilmesi uygulamasıdır. Bu yöntem, toprak verimliliğini korur ve hastalık riskini azaltır.',
      'Aynı ürünün üst üste ekilmesi, topraktaki belirli besin elementlerinin tükenmesine ve bazı hastalık etmenlerinin toprakta birikmesine yol açar.',
      'Ekim nöbeti planlanırken, kök derinliği farklı ürünler seçilmeli, baklagil ve tahıl dönüşümleri yapılmalıdır. Baklagiller toprağa azot katarak sonraki ürünün verimini artırır.',
      'İyi planlanmış bir ekim nöbeti, yabancı ot mücadelesini de kolaylaştırır. Farklı ürünler farklı bakım uygulamaları gerektirdiği için yabancı otların yayılması sınırlanır.',
    ],
  },
  {
    id: 'saksi-bitki-bakimi',
    title: 'Saksı Bitki Bakımı Rehberi',
    emoji: '🪴',
    category: 'Saksı',
    summary: 'Ev ve balkonda saksı bitkisi yetiştiriciliği için temel bakım ipuçları.',
    content: [
      'Saksıda bitki yetiştirmek, tarla tarımına göre bazı farklılıklar içerir. Sınırlı toprak hacmi ve kontrol edilebilir ortam koşulları, saksı yetiştiriciliğini hem avantajlı hem de dikkat gerektiren bir yöntem yapar.',
      'Saksı seçimi çok önemlidir. Bitkinin kök yapısına uygun büyüklükte ve drenaj delikli saksılar kullanılmalıdır. Drenaj delikleri olmayan saksılarda su birikmesi kök çürüklüğüne yol açar.',
      'Toprak seçimi, tarla toprağından farklıdır. Saksı için özel hazırlanmış, drenajı iyi toprak karışımları kullanılmalıdır. Torf, perlit ve organik madce zengin toprak karışımları idealdir.',
      'Sulama, saksı yetiştiriciliğinin en kritik adımıdır. Toprağın nemini parmakla kontrol etmek, aşırı veya eksik sulamayı önler. Her bitkinin su ihtiyacı farklıdır; bitkinin yaprak durumunu ve toprak nemini düzenli kontrol edin.',
      'Işık, saksı bitkileri için en önemli faktörlerden biridir. Bitkinin ışık ihtiyacına göre pencere yönü seçilmelidir. Bol güneş isteyen bitkiler için güney yönü, yarı gölge seven bitkiler için doğu veya kuzey yönü uygundur.',
      'Gübreleme, sınırlı toprak hacmi nedeniyle önemlidir. 2-4 haftada bir seyreltik sıvı gübre uygulaması, bitkinin besin ihtiyacını karşılar. Aşırı gübrelemeden kaçının.',
    ],
  },
];
