export interface GuideArticle {
  id: string;
  category: string;
  title: string;
  summary: string;
  content: string[];
}

export interface GuideCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export const guideCategories: GuideCategory[] = [
  { id: 'ekim', name: 'Ekim', icon: 'Sprout', description: 'Doğru zamanlama ve dikim teknikleri' },
  { id: 'toprak', name: 'Toprak', icon: 'Mountain', description: 'Toprak hazırlığı ve toprak sağlığı' },
  { id: 'sulama', name: 'Sulama', icon: 'Droplets', description: 'Su yönetimi ve sulama yöntemleri' },
  { id: 'gubreleme', name: 'Gübreleme', icon: 'Leaf', description: 'Bitki besleme ve gübre stratejileri' },
  { id: 'hastaliklar', name: 'Hastalıklar', icon: 'Bug', description: 'Bitki hastalıklarını tanıma ve önleme' },
  { id: 'zararlilar', name: 'Zararlılar', icon: 'Shield', description: 'Zararlılarla mücadele yöntemleri' },
  { id: 'hasat', name: 'Hasat', icon: 'Wheat', description: 'Doğru zamanda ve doğru şekilde hasat' },
];

export const guideArticles: GuideArticle[] = [
  {
    id: 'ekim-zamanlama',
    category: 'ekim',
    title: 'Ekim Zamanlamasında Dikkat Edilmesi Gerekenler',
    summary: 'Doğru ekim zamanı seçimi, verim ve kaliteyi doğrudan etkileyen en önemli faktörlerden biridir.',
    content: [
      'Her ürünün ideal bir ekim penceresi vardır ve bu pencere toprak sıcaklığı, don riski ve gün uzunluğu gibi faktörlere bağlıdır.',
      'Erken ekim, don zararına; geç ekim ise yetersiz gelişim süresine yol açabilir.',
      'Bölgenizin son ilkbahar donu ve ilk sonbahar donu tarihlerini bilmek, ekim planlaması için önemli bir başlangıç noktasıdır.',
      'Tohum paketleri ve fide etiketleri üzerindeki önerilere ek olarak, yerel tarım il/ilçe müdürlüklerinin bölgesel tavsiyeleri her zaman dikkate alınmalıdır.',
    ],
  },
  {
    id: 'fide-dikim-teknikleri',
    category: 'ekim',
    title: 'Fide Dikiminde Doğru Teknikler',
    summary: 'Fidelerin toprağa doğru şekilde aktarılması, bitkinin ilk gelişim sürecini büyük ölçüde etkiler.',
    content: [
      'Fideler dikimden birkaç gün önce dış koşullara kademeli olarak alıştırılmalıdır (sertleştirme).',
      'Dikim, serin saatlerde (sabah erken veya akşamüzeri) yapılırsa fide stresini azaltır.',
      'Dikim çukuru fidenin kök topağından biraz daha büyük olmalı ve dikim sonrası hafif bastırılıp sulanmalıdır.',
      'Sıra ve bitki aralıkları, yetişkin bitkinin ihtiyaç duyacağı alan göz önünde bulundurularak ayarlanmalıdır.',
    ],
  },
  {
    id: 'toprak-analizi',
    category: 'toprak',
    title: 'Neden Toprak Analizi Yaptırmalısınız?',
    summary: 'Toprak analizi, gübreleme ve toprak düzenleme kararlarının bilinçli şekilde alınmasını sağlar.',
    content: [
      'Toprak analizi; pH düzeyi, organik madde oranı ve temel besin elementi seviyelerini gösterir.',
      'Bu bilgiler olmadan yapılan gübreleme, hem gereksiz maliyete hem de bitki besin dengesizliğine yol açabilir.',
      'Analiz sonuçları, bölgesel tarım kuruluşları ya da akredite laboratuvarlar aracılığıyla yorumlanabilir.',
      'Toprak analizinin ekim öncesinde, tercihen her birkaç yılda bir tekrarlanması önerilir.',
    ],
  },
  {
    id: 'toprak-hazirligi',
    category: 'toprak',
    title: 'Ekim Öncesi Toprak Hazırlığının Temelleri',
    summary: 'İyi hazırlanmış bir toprak yatağı, sağlıklı çimlenme ve kök gelişiminin ilk adımıdır.',
    content: [
      'Toprak işleme; havalanmayı artırır, yabancı ot baskısını azaltır ve kök gelişimini kolaylaştırır.',
      'Aşırı işleme toprak yapısını bozabileceğinden, ihtiyaç duyulan kadar işleme yapılması önerilir.',
      'Organik madde ilavesi (yanmış gübre, kompost gibi) toprağın su tutma kapasitesini ve besin içeriğini iyileştirir.',
      'Ağır killi topraklarda drenajı artırmak için sırt (set) usulü ekim tercih edilebilir.',
    ],
  },
  {
    id: 'damla-sulama',
    category: 'sulama',
    title: 'Damla Sulamanın Avantajları',
    summary: 'Damla sulama sistemi, su kullanımını optimize ederken bitki sağlığını da destekler.',
    content: [
      'Damla sulama, suyu doğrudan kök bölgesine ileterek buharlaşma kaynaklı kayıpları azaltır.',
      'Yaprakların ıslanmasını önlediği için birçok mantar hastalığının görülme riskini düşürür.',
      'Gübre ile birlikte uygulanabilen sistemlerde (damla gübreleme) besin verimliliği artar.',
      'Sistemin düzenli kontrolü, tıkanma ve su dağılım sorunlarının erken tespiti için önemlidir.',
    ],
  },
  {
    id: 'sulama-zamanlama',
    category: 'sulama',
    title: 'Sulama Zamanlaması ve Sıklığı Nasıl Belirlenir?',
    summary: 'Doğru sulama sıklığı; iklim, toprak yapısı ve bitkinin gelişim dönemine göre değişir.',
    content: [
      'Sabah erken saatlerde yapılan sulama, buharlaşma kaybını azaltır ve yaprakların gün içinde kurumasına imkan tanır.',
      'Toprağın üst birkaç santimetresinin kuruyup kurumadığını kontrol etmek, sulama zamanını belirlemede pratik bir yöntemdir.',
      'Çiçeklenme ve meyve/yumru oluşum dönemleri, çoğu bitki için suya en duyarlı dönemlerdir.',
      'Aşırı sulama kadar yetersiz sulama da verim kaybına yol açabileceğinden dengeli bir program izlenmelidir.',
    ],
  },
  {
    id: 'organik-gubreleme',
    category: 'gubreleme',
    title: 'Organik Gübrelerin Rolü',
    summary: 'Organik gübreler, toprak sağlığını uzun vadede destekleyen doğal besin kaynaklarıdır.',
    content: [
      'Yanmış hayvan gübresi ve kompost gibi organik kaynaklar, toprağın fiziksel yapısını iyileştirir.',
      'Organik gübreler besinleri yavaş salım yaparak bitkiye daha dengeli bir besin akışı sağlar.',
      'Taze (yanmamış) hayvan gübresi kullanımı kök yanığına ve hastalık riskine yol açabileceğinden önerilmez.',
      'Organik ve mineral gübrelerin dengeli kullanımı, sürdürülebilir verim için genellikle en iyi sonucu verir.',
    ],
  },
  {
    id: 'besin-elementleri',
    category: 'gubreleme',
    title: 'Bitkiler İçin Temel Besin Elementleri',
    summary: 'Azot, fosfor ve potasyum başta olmak üzere temel besin elementlerinin rolünü anlamak gübreleme kararlarını kolaylaştırır.',
    content: [
      'Azot (N) yaprak ve gövde gelişimini destekler; eksikliğinde sararma ve zayıf büyüme görülür.',
      'Fosfor (P) kök gelişimi ve çiçeklenme için önemlidir.',
      'Potasyum (K) meyve/yumru kalitesini ve bitkinin genel dayanıklılığını artırır.',
      'Kalsiyum, magnezyum ve bor gibi ikincil ve mikro elementler de belirli bitkilerde kritik rol oynayabilir.',
      'Gübreleme kararları her zaman güncel bir toprak analizine dayandırılmalıdır.',
    ],
  },
  {
    id: 'hastalik-erken-teshis',
    category: 'hastaliklar',
    title: 'Bitki Hastalıklarının Erken Teşhisi',
    summary: 'Erken teşhis, hastalığın yayılmasını önlemede ve müdahale maliyetini azaltmada kilit rol oynar.',
    content: [
      'Bitkilerin düzenli olarak, özellikle yaprak alt yüzeyleri ve gövde dipleri kontrol edilerek gözlemlenmesi önerilir.',
      'Renk değişimi, leke oluşumu, solgunluk ve anormal büyüme şekli erken uyarı işaretleri olabilir.',
      'Şüpheli belirtiler görüldüğünde etkilenen bitki kısımlarının izole edilmesi yayılmayı sınırlayabilir.',
      'Kesin teşhis ve tedavi önerileri için bölgesel tarım kuruluşlarına veya ziraat mühendislerine danışılması önerilir.',
    ],
  },
  {
    id: 'ekim-nobeti-hastalik',
    category: 'hastaliklar',
    title: 'Ekim Nöbetinin Hastalık Yönetimindeki Rolü',
    summary: 'Aynı alanda farklı bitki gruplarının sırayla yetiştirilmesi, toprak kaynaklı hastalıkların birikimini azaltır.',
    content: [
      'Aynı familyadan bitkilerin art arda aynı alanda yetiştirilmesi, o bitkiye özgü patojenlerin toprakta birikmesine yol açabilir.',
      'Ekim nöbeti, farklı kök yapılarına ve besin ihtiyaçlarına sahip bitkilerin sırayla ekilmesini içerir.',
      '3-4 yıllık bir rotasyon planı, birçok toprak kaynaklı hastalık riskini azaltmada etkili olabilir.',
      'Rotasyon planı yaparken bölgesel iklim ve pazar ihtiyaçları da göz önünde bulundurulmalıdır.',
    ],
  },
  {
    id: 'zararli-izleme',
    category: 'zararlilar',
    title: 'Zararlı Popülasyonlarını İzlemenin Yöntemleri',
    summary: 'Düzenli izleme, zararlı mücadelesinde doğru zamanlama ve doğru yöntem seçimi için temel oluşturur.',
    content: [
      'Sarı ve mavi yapışkan tuzaklar, uçucu zararlıların erken tespitinde yaygın olarak kullanılır.',
      'Feromon tuzaklar, belirli zararlı türlerinin popülasyon yoğunluğunu izlemek için etkili bir araçtır.',
      'Düzenli arazi gözlemleri, zararlı zararının erken aşamada fark edilmesini sağlar.',
      'Zararlı yoğunluğu belirli bir eşiği aştığında, bölgesel tarım kuruluşlarının güncel önerileri doğrultusunda hareket edilmelidir.',
    ],
  },
  {
    id: 'dogal-dusman',
    category: 'zararlilar',
    title: 'Doğal Düşmanlardan Faydalanmak',
    summary: 'Faydalı böcekler ve doğal avcılar, zararlı popülasyonlarını dengelemede önemli bir rol oynar.',
    content: [
      'Uğur böcekleri ve kısa kanatlı böcekler gibi doğal avcılar, yaprak biti gibi zararlıların kontrolüne katkı sağlar.',
      'Çiçekli bitki şeritleri, faydalı böcekleri tarım alanına çekmede etkili olabilir.',
      'Geniş spektrumlu kimyasal uygulamalar doğal düşman popülasyonlarına da zarar verebileceğinden dikkatli değerlendirilmelidir.',
      'Biyolojik mücadele yöntemleri hakkında güncel ve bölgesel bilgi için tarım danışmanlarına başvurulması önerilir.',
    ],
  },
  {
    id: 'hasat-zamanlama',
    category: 'hasat',
    title: 'Hasat Zamanını Doğru Belirlemek',
    summary: 'Erken veya geç hasat, ürün kalitesini ve depolama ömrünü olumsuz etkileyebilir.',
    content: [
      'Her ürünün olgunluk belirtileri farklıdır; renk, sertlik, koku ve boyut gibi göstergeler dikkate alınmalıdır.',
      'Hasat genellikle günün serin saatlerinde yapılırsa ürün tazeliği daha uzun süre korunur.',
      'Hasat sırasında oluşan mekanik zedelenmeler, depolama sırasında çürüme riskini artırabilir.',
      'Hasat sonrası hızlı soğutma veya gölgede bekletme, birçok ürünün kalitesini korumada etkilidir.',
    ],
  },
  {
    id: 'hasat-sonrasi-depolama',
    category: 'hasat',
    title: 'Hasat Sonrası Depolamada Temel İlkeler',
    summary: 'Doğru depolama koşulları, hasat edilen ürünün kalitesini ve raf ömrünü doğrudan etkiler.',
    content: [
      'Depolama alanının iyi havalandırılması, nem ve küf oluşumu riskini azaltır.',
      'Farklı ürünlerin ideal depolama sıcaklığı ve nem oranı birbirinden farklılık gösterebilir.',
      'Zedelenmiş veya hastalıklı ürünlerin sağlıklı ürünlerden ayrı tutulması çürümenin yayılmasını önler.',
      'Uzun süreli depolama planlanıyorsa bölgesel tarım kuruluşlarının ürüne özel tavsiyelerine başvurulması önerilir.',
    ],
  },
];

export const getArticlesByCategory = (categoryId: string): GuideArticle[] =>
  guideArticles.filter((article) => article.category === categoryId);
