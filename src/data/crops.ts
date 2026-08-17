import { Crop } from '@/types/crop';

export const crops: Crop[] = [
  {
    id: 'domates',
    name: 'Domates',
    emoji: '🍅',
    image: 'https://images.pexels.com/photos/33872280/pexels-photo-33872280.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Sebze',
    shortDescription:
      'Türkiye\'de en yaygın yetiştirilen sebzelerden biri olan domates, hem açık tarlada hem de örtü altında yetiştirilebilen, sıcak iklim seven bir üründür.',
    growingModes: ['field', 'pot'],
    planting: {
      period: 'Açık tarlada Nisan - Mayıs, seraltı yetiştiricilikte Ocak - Şubat fide dikimi yapılabilir.',
      temperature: 'En iyi gelişim 18-27°C arasında görülür. 10°C altı ve 35°C üzeri gelişimi olumsuz etkiler.',
      conditions: 'Bol güneş alan, don riski geçmiş, rüzgardan korunaklı alanlar tercih edilmelidir.',
      spacing: 'Sıra arası 70-100 cm, sıra üzeri 40-50 cm aralık genel olarak önerilir.',
    },
    soil: {
      type: 'Derin, organik maddece zengin, tınlı ve iyi havalanan topraklar en uygunudur.',
      ph: 'Yaklaşık 6.0 - 6.8 pH aralığı tercih edilir.',
      drainage: 'İyi drenajlı topraklar şarttır; su tutan ağır topraklarda kök hastalıkları artar.',
      preparation: 'Dikimden önce toprak derin sürülür, yabancı otlardan temizlenir ve yanmış organik gübre ile zenginleştirilir.',
    },
    irrigation: {
      requirement: 'Düzenli ve dengeli sulama ister; ani su stresi meyve çatlamasına yol açabilir.',
      periods: 'Çiçeklenme ve meyve tutumu döneminde su ihtiyacı artar; damla sulama sistemi verimliliği artırır.',
      overwatering: 'Aşırı sulama kök çürüklüğüne, mantar hastalıklarına ve besin elementi yıkanmasına neden olabilir.',
    },
    fertilization: {
      nutrients: 'Azot, fosfor, potasyum ile birlikte kalsiyum ve magnezyum önemlidir.',
      stages: 'Dikim öncesi taban gübrelemesi, vejetatif dönemde azot ağırlıklı, meyve döneminde potasyum ağırlıklı besleme genel yaklaşımdır.',
      general: 'Kalsiyum eksikliği çiçek burnu çürüklüğüne yol açabileceğinden dengeli beslenmeye dikkat edilmelidir.',
      soilAnalysis: 'Gübreleme miktarları bölgeye göre değişir; kesin dozlar için toprak analizi yaptırılması önemle tavsiye edilir.',
    },
    diseases: [
      {
        name: 'Erken Yanıklık (Alternaria)',
        symptoms: 'Yapraklarda konsantrik halkalı kahverengi lekeler, alt yaprakların sararıp dökülmesi.',
        causes: 'Nemli ve sıcak hava koşulları, yetersiz hava sirkülasyonu.',
        prevention: 'Bitki sıklığını azaltmak, düzenli havalandırma ve dayanıklı çeşit seçimi önerilir.',
      },
      {
        name: 'Kök Boğazı Çürüklüğü',
        symptoms: 'Gövde dibinde kararma, solgunluk ve bitkinin aniden solması.',
        causes: 'Aşırı nem, ağır ve drenajı kötü topraklar.',
        prevention: 'İyi drenaj sağlamak, aşırı sulamadan kaçınmak ve ekim nöbeti uygulamak faydalıdır.',
      },
    ],
    pests: [
      {
        name: 'Beyaz Sinek',
        symptoms: 'Yaprak altlarında küçük beyaz uçucu böcekler, yapraklarda sararma ve yapışkan salgı.',
        prevention: 'Sarı yapışkan tuzaklar, düzenli gözlem ve yabancı ot kontrolü.',
        control: 'Yaygın görülmesi halinde bölgesel tarım danışmanlarına başvurularak uygun kontrol yöntemi belirlenmelidir.',
      },
      {
        name: 'Domates Güvesi (Tuta absoluta)',
        symptoms: 'Yapraklarda ve meyvede galeri şeklinde tüneller, meyve içinde zarar.',
        prevention: 'Feromon tuzaklar ile takip, sağlıklı fide kullanımı ve düzenli arazi kontrolü.',
        control: 'Yoğun görülen durumlarda güncel etiket bilgileri ve yerel tarım kuruluşlarının önerileri takip edilmelidir.',
      },
    ],
    harvest: {
      period: 'Dikimden yaklaşık 70-90 gün sonra, çeşide göre değişmekle birlikte hasat başlar.',
      maturitySigns: 'Meyve renginin yeşilden kırmızıya (veya çeşide özgü rengine) dönmesi ve hafif yumuşama.',
      general: 'Hasat genellikle kademeli yapılır; meyveler sabah serin saatlerde toplanırsa daha uzun süre taze kalır.',
    },
    timeline: [
      { stage: 'Toprak Hazırlığı', duration: '1-2 hafta', description: 'Toprak sürülür, düzenlenir ve organik madde ile zenginleştirilir.' },
      { stage: 'Ekim/Dikim', duration: '1 gün', description: 'Fideler veya tohumlar uygun aralıklarla toprağa yerleştirilir.' },
      { stage: 'Çimlenme', duration: '5-10 gün', description: 'Tohumdan ekimde çimlenme gerçekleşir, fide dikiminde kök tutma süreci başlar.' },
      { stage: 'Gelişim', duration: '30-45 gün', description: 'Bitki hızla büyür, dallanır ve çiçeklenmeye hazırlanır.' },
      { stage: 'Bakım', duration: 'Sürekli', description: 'Sulama, gübreleme, budama ve destek çubuğu uygulamaları yapılır.' },
      { stage: 'Hasat', duration: '70-90. günden itibaren', description: 'Olgunlaşan meyveler kademeli olarak toplanır.' },
    ],
    potGrowing: {
      light: {
        requirement: 'Bol güneş — günde en az 6-8 saat doğrudan güneş ışığı.',
        placement: 'Güney veya batı yönüne bakan pencere kenarı, güneşli balkon veya teras en uygun yerlerdir.',
      },
      watering: {
        requirement: 'Toprağın üst 2-3 cm\'i kuruduğunda sulayın; yaz aylarında genellikle 1-2 günde bir.',
        moistureCheck: 'Parmağınızı toprağa 2-3 cm batırın; nem hissediyorsanız sulamayı erteleyin.',
        overwatering: 'Aşırı sulama kök çürüklüğüne yol açar; saksı altlığında su birikmesine izin vermeyin.',
      },
      container: {
        size: 'En az 30-40 cm çapında ve derinliğinde saksı; çalı tipi domates için 25 cm yeterli olabilir.',
        drainage: 'Saksı tabanında drenaj delikleri olmalıdır; altlığa biraz genişletilmiş kil döşemek drenajı iyileştirir.',
        repotting: 'Bitki saksıyı doldurduğunda bir boy büyük saksıya aktarın; genellikle yılda 1 kez.',
      },
      soil: {
        type: 'Drenajı iyi, organik maddece zengin saksı toprağı; tercihen torf ve perlit karışımı.',
        drainage: 'Perlit veya kaba kum eklemek drenajı artırır; ağır bahçe toprağı kullanmayın.',
      },
      environment: {
        temperature: 'İdeal sıcaklık 18-27°C; 10°C altında büyüme yavaşlar, dondan kesinlikle koruyun.',
        conditions: 'Ani sıcaklık değişimlerinden koruyun; klima veya ısıtıcı doğrudan bitkiye üflememelidir.',
      },
      fertilization: {
        schedule: '2 haftada bir sıvı gübre ile besleyin; çiçeklenme döneminde potasyum ağırlıklı gübre kullanın.',
        stages: 'Fide döneminde azot, çiçeklenme ve meyve döneminde potasyum ağırlıklı besleme önerilir.',
      },
      diseases: [
        {
          name: 'Çiçek Burnu Çürüklüğü',
          symptoms: 'Meyvenin alt ucunda siyahlaşan, çökmüş lekeler.',
          causes: 'Kalsiyum eksikliği, düzensiz sulama.',
          prevention: 'Düzenli sulama ve kalsiyum içeren gübre kullanımı.',
        },
      ],
      pests: [
        {
          name: 'Beyaz Sinek',
          symptoms: 'Yaprak altlarında küçük beyaz böcekler, yapışkan salgı.',
          prevention: 'Sarı yapışkan tuzaklar ve düzenli yaprak kontrolü.',
          control: 'Sabah erken saatte yaprakları suyla yıkamak ve gerektiğinde sabunlu su uygulamak faydalıdır.',
        },
      ],
      care: {
        pruning: 'Sürgün (koltuk) budaması yapın; ana gövde dışındaki sürgünleri temizleyin.',
        leafCare: 'Sarılan ve hastıklı yaprakları düzenli olarak temizleyin; hava sirkülasyonunu sağlayın.',
        general: 'Uzayan bitkiler için destek çubuğu kullanın; meyve ağırlaştıkça dalları destekleyin.',
      },
      timeline: [
        { stage: 'Ekim/Dikim', duration: '1 gün', description: 'Fide saksıya dikilir, hafifçe sulanır.' },
        { stage: 'Kök Tutma', duration: '7-10 gün', description: 'Bitki saksıya alışır, yeni yapraklar çıkmaya başlar.' },
        { stage: 'Vejetatif Gelişim', duration: '3-4 hafta', description: 'Bitki hızla büyür, sürgünler çıkarılır.' },
        { stage: 'Çiçeklenme', duration: '1-2 hafta', description: 'Çiçekler açar, döllenme gerçekleşir.' },
        { stage: 'Meyve Gelişimi', duration: '4-6 hafta', description: 'Meyveler büyür ve renk değiştirir.' },
        { stage: 'Hasat', duration: '70-90. günden itibaren', description: 'Meyveler kademeli olarak toplanır.' },
      ],
    },
  },
  {
    id: 'bugday',
    name: 'Buğday',
    emoji: '🌾',
    image: 'https://images.pexels.com/photos/33397323/pexels-photo-33397323.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Tahıl',
    shortDescription:
      'Türkiye tarımının temel taşlarından biri olan buğday, hem kışlık hem de yazlık olarak yetiştirilebilen, geniş adaptasyon yeteneğine sahip bir tahıldır.',
    growingModes: ['field'],
    planting: {
      period: 'Kışlık çeşitlerde Ekim - Kasım, yazlık çeşitlerde Mart ayı ekim için genel dönemlerdir.',
      temperature: 'Çimlenme için 4-12°C yeterlidir; gelişim döneminde 15-25°C idealdir.',
      conditions: 'Açık ve geniş tarla alanları, iyi güneşlenme ve orta düzey yağış rejimi uygundur.',
      spacing: 'Sıra arası genellikle 15-20 cm olacak şekilde serpme veya mibzerle ekim yapılır.',
    },
    soil: {
      type: 'Tınlı ve killi-tınlı topraklarda iyi verim alınır.',
      ph: 'Yaklaşık 6.0 - 7.5 pH aralığı uygundur.',
      drainage: 'Orta düzey su tutma kapasitesine sahip, iyi drene olan topraklar tercih edilir.',
      preparation: 'Ekim öncesi tarla sürülüp diskaro geçirilir, anız temizliği ve tesviye yapılır.',
    },
    irrigation: {
      requirement: 'Kurağa nispeten dayanıklıdır; kışlık ekimlerde çoğunlukla yağışa bağlı kalınabilir.',
      periods: 'Kardeşlenme, sapa kalkma ve tane doldurma dönemlerinde su ihtiyacı en yüksektir.',
      overwatering: 'Aşırı su, kök gelişimini olumsuz etkiler ve yatmaya (yatık kalmaya) yol açabilir.',
    },
    fertilization: {
      nutrients: 'Azot, fosfor ve potasyum temel besin elementleridir.',
      stages: 'Ekimle birlikte taban gübrelemesi, kardeşlenme ve sapa kalkma döneminde azotlu üst gübreleme genel uygulamadır.',
      general: 'Aşırı azotlu gübreleme yatmaya ve hastalık riskinin artmasına neden olabilir.',
      soilAnalysis: 'Gübre miktarı toprağın besin durumuna göre değişir; toprak analizi ile belirlenmesi önerilir.',
    },
    diseases: [
      {
        name: 'Sarı Pas',
        symptoms: 'Yapraklarda sarı-turuncu renkli ince çizgiler halinde spor yığınları.',
        causes: 'Serin ve nemli hava koşulları, yoğun ekim sıklığı.',
        prevention: 'Dayanıklı çeşit seçimi ve ekim nöbeti uygulanması önerilir.',
      },
      {
        name: 'Septoria Yaprak Lekesi',
        symptoms: 'Yapraklarda düzensiz kahverengi lekeler ve zamanla kuruma.',
        causes: 'Nemli ve yağışlı dönemler, yoğun bitki örtüsü.',
        prevention: 'Anız yönetimi, ekim nöbeti ve dengeli gübreleme önerilir.',
      },
    ],
    pests: [
      {
        name: 'Süne',
        symptoms: 'Tanelerde emgi izleri ve un kalitesinde bozulma.',
        prevention: 'Düzenli tarla gözlemi ve erken tespit önemlidir.',
        control: 'Yoğunluk tespit edilirse bölge tarım müdürlüklerinin önerileri doğrultusunda hareket edilmelidir.',
      },
      {
        name: 'Hessian Sineği',
        symptoms: 'Gövdede zayıflama, kıvrılma ve yatma eğilimi.',
        prevention: 'Ekim zamanının doğru ayarlanması ve dayanıklı çeşit tercih edilmesi.',
        control: 'Yaygın görülmesi durumunda yerel tarım kuruluşlarından güncel bilgi alınmalıdır.',
      },
    ],
    harvest: {
      period: 'Ekimden yaklaşık 8-9 ay sonra (kışlık), Haziran - Temmuz aylarında hasat genellikle yapılır.',
      maturitySigns: 'Başakların altın sarısı renk alması ve tanenin sertleşmesi.',
      general: 'Hasat genellikle biçerdöver ile yapılır; nem oranı düştüğünde hasat için uygun zaman gelmiş olur.',
    },
    timeline: [
      { stage: 'Toprak Hazırlığı', duration: '1-2 hafta', description: 'Anız temizliği yapılır, tarla sürülür ve tesviye edilir.' },
      { stage: 'Ekim/Dikim', duration: '1 gün', description: 'Tohumlar mibzer ile belirli sıra aralığında ekilir.' },
      { stage: 'Çimlenme', duration: '7-14 gün', description: 'Uygun nem ve sıcaklıkla tohumlar çimlenir.' },
      { stage: 'Gelişim', duration: '4-6 ay', description: 'Kardeşlenme, sapa kalkma ve başaklanma dönemleri geçirilir.' },
      { stage: 'Bakım', duration: 'Sürekli', description: 'Gübreleme, yabancı ot ve hastalık takibi yapılır.' },
      { stage: 'Hasat', duration: 'Haziran - Temmuz', description: 'Tane nem oranı uygun seviyeye düştüğünde hasat edilir.' },
    ],
  },
  {
    id: 'misir',
    name: 'Mısır',
    emoji: '🌽',
    image: 'https://images.pexels.com/photos/20234940/pexels-photo-20234940.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Tahıl',
    shortDescription:
      'Sıcak iklim seven ve yüksek verim potansiyeline sahip mısır, hem tane hem de silaj amaçlı geniş çapta yetiştirilen bir üründür.',
    growingModes: ['field'],
    planting: {
      period: 'Ana ürün olarak Nisan - Mayıs, ikinci ürün olarak Haziran ayı ekim için uygun dönemlerdir.',
      temperature: 'Çimlenme için toprak sıcaklığının en az 10-12°C olması gerekir; gelişim için 20-30°C idealdir.',
      conditions: 'Bol güneş ışığı alan, don riski geçmiş açık alanlar tercih edilir.',
      spacing: 'Sıra arası 70 cm, sıra üzeri 18-25 cm aralık genel olarak uygulanır.',
    },
    soil: {
      type: 'Derin, iyi havalanan, organik maddece zengin tınlı topraklar idealdir.',
      ph: 'Yaklaşık 5.8 - 7.0 pH aralığı uygundur.',
      drainage: 'İyi drenaj gereklidir; su birikintisi kök gelişimini olumsuz etkiler.',
      preparation: 'Derin sürüm, tesviye ve taban gübrelemesi ekim öncesi yapılmalıdır.',
    },
    irrigation: {
      requirement: 'Yüksek su tüketimine sahiptir, özellikle püskül çıkarma döneminde su stresine duyarlıdır.',
      periods: 'Fide, püskül çıkarma ve tane doldurma dönemlerinde düzenli sulama önemlidir.',
      overwatering: 'Aşırı sulama kök çürüklüğü ve besin kaybına yol açabilir.',
    },
    fertilization: {
      nutrients: 'Azot ihtiyacı yüksektir; fosfor ve potasyum da önemli rol oynar.',
      stages: 'Ekimle taban gübrelemesi, gelişim döneminde bölünmüş azotlu üst gübreleme genel uygulamadır.',
      general: 'Dengeli beslenme, tane doluluğunu ve verimi doğrudan etkiler.',
      soilAnalysis: 'Kesin gübre miktarları için toprak analizi yaptırılması önerilir.',
    },
    diseases: [
      {
        name: 'Mısır Kına Hastalığı (Rust)',
        symptoms: 'Yapraklarda kahverengi-turuncu küçük pustüller.',
        causes: 'Nemli hava ve yoğun bitki örtüsü.',
        prevention: 'Dayanıklı çeşit seçimi ve dengeli bitki sıklığı önerilir.',
      },
      {
        name: 'Fusarium Koçan Çürüklüğü',
        symptoms: 'Koçanlarda pembemsi-beyaz küf oluşumu ve çürüme.',
        causes: 'Yüksek nem, hasat gecikmesi ve zedelenmiş taneler.',
        prevention: 'Zamanında hasat ve uygun depolama koşulları önemlidir.',
      },
    ],
    pests: [
      {
        name: 'Mısır Kurdu (Kök Kurdu)',
        symptoms: 'Kök zararı, bitkide yatma ve gelişim geriliği.',
        prevention: 'Ekim nöbeti ve düzenli arazi gözlemi.',
        control: 'Yoğun görülmesi durumunda bölgesel tarım kuruluşlarına danışılmalıdır.',
      },
      {
        name: 'Mısır Koçan Kurdu',
        symptoms: 'Koçan ve yapraklarda beslenme delikleri, tane zararı.',
        prevention: 'Feromon tuzaklar ile popülasyon takibi.',
        control: 'Güncel öneriler için tarım danışmanlarına başvurulması tavsiye edilir.',
      },
    ],
    harvest: {
      period: 'Ekimden yaklaşık 100-140 gün sonra, çeşide göre değişmekle birlikte hasat gerçekleşir.',
      maturitySigns: 'Koçan kılçıklarının kahverengileşmesi ve tane neminin düşmesi.',
      general: 'Tane mısırda hasat genellikle makine ile yapılır; nem oranı hasat zamanlamasında önemli rol oynar.',
    },
    timeline: [
      { stage: 'Toprak Hazırlığı', duration: '1-2 hafta', description: 'Tarla derin sürülür, tesviye edilir ve taban gübresi uygulanır.' },
      { stage: 'Ekim/Dikim', duration: '1 gün', description: 'Tohumlar mibzer ile belirlenen sıra aralıklarında ekilir.' },
      { stage: 'Çimlenme', duration: '5-10 gün', description: 'Uygun toprak sıcaklığında hızlı çimlenme görülür.' },
      { stage: 'Gelişim', duration: '2-3 ay', description: 'Bitki boyu hızla artar, yaprak sayısı çoğalır.' },
      { stage: 'Bakım', duration: 'Sürekli', description: 'Sulama, gübreleme ve yabancı ot mücadelesi yapılır.' },
      { stage: 'Hasat', duration: '100-140. günden itibaren', description: 'Tane veya silaj amaçlı hasat gerçekleştirilir.' },
    ],
  },
  {
    id: 'patates',
    name: 'Patates',
    emoji: '🥔',
    image: 'https://images.pexels.com/photos/35596215/pexels-photo-35596215.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Sebze',
    shortDescription:
      'Serin iklim koşullarını seven patates, yumru şeklinde gelişen ve toprak altında hasat edilen önemli bir besin kaynağıdır.',
    growingModes: ['field'],
    planting: {
      period: 'İlkbahar ekimi için Mart - Nisan, sonbahar ekimi için Ağustos ayı uygundur.',
      temperature: 'Yumru gelişimi için 15-20°C idealdir; 27°C üzeri sıcaklıklar verimi düşürebilir.',
      conditions: 'Serin, ılıman iklimli ve iyi güneşlenen alanlar tercih edilir.',
      spacing: 'Sıra arası 60-70 cm, sıra üzeri 25-30 cm aralık genel olarak uygulanır.',
    },
    soil: {
      type: 'Hafif, kumlu-tınlı ve iyi havalanan topraklar en uygunudur.',
      ph: 'Yaklaşık 5.0 - 6.5 pH aralığı tercih edilir.',
      drainage: 'İyi drenaj şarttır; su birikintisi yumru çürüklüğüne yol açar.',
      preparation: 'Toprak derin işlenmeli, taşlardan arındırılmalı ve sırt (set) usulü hazırlanmalıdır.',
    },
    irrigation: {
      requirement: 'Düzenli ve dengeli su ister, özellikle yumru oluşum döneminde hassastır.',
      periods: 'Çiçeklenme ve yumru bağlama dönemlerinde sulama kritik önem taşır.',
      overwatering: 'Aşırı sulama yumru çürüklüğü ve hastalık riskini artırır.',
    },
    fertilization: {
      nutrients: 'Potasyum yumru kalitesi için özellikle önemlidir; azot ve fosfor da gereklidir.',
      stages: 'Dikimle taban gübrelemesi, gelişim döneminde boğaz doldurma ile birlikte üst gübreleme uygulanır.',
      general: 'Aşırı azot, yumru yerine yaprak gelişimini teşvik edebilir.',
      soilAnalysis: 'Doğru gübre programı için toprak analizi yaptırılması önerilir.',
    },
    diseases: [
      {
        name: 'Mildiyö (Geç Yanıklık)',
        symptoms: 'Yapraklarda koyu yeşil-kahverengi lekeler, hızlı yayılan solgunluk.',
        causes: 'Serin ve nemli hava koşulları.',
        prevention: 'İyi hava sirkülasyonu, dayanıklı çeşit seçimi ve sertifikalı tohumluk kullanımı.',
      },
      {
        name: 'Yumru Çürüklüğü',
        symptoms: 'Yumrularda yumuşama, kötü koku ve renk değişimi.',
        causes: 'Aşırı nem ve zedelenmiş yumrularda depolama.',
        prevention: 'İyi drenaj, dikkatli hasat ve uygun depolama koşulları sağlanmalıdır.',
      },
    ],
    pests: [
      {
        name: 'Patates Böceği (Colorado)',
        symptoms: 'Yapraklarda yoğun yenik izleri ve defoliasyon.',
        prevention: 'Düzenli arazi kontrolü ve erken tespit.',
        control: 'Yoğunluğa göre bölgesel tarım kuruluşlarının önerileri takip edilmelidir.',
      },
      {
        name: 'Tel Kurdu',
        symptoms: 'Yumrularda delik ve tünel şeklinde zararlar.',
        prevention: 'Ekim nöbeti ve toprak hazırlığı sırasında kontrol.',
        control: 'Yoğun görülmesi halinde güncel öneriler için uzman desteği alınmalıdır.',
      },
    ],
    harvest: {
      period: 'Dikimden yaklaşık 90-120 gün sonra, çeşide göre değişmekle birlikte hasat başlar.',
      maturitySigns: 'Bitki gövde ve yapraklarının sararıp kuruması yumruların olgunlaştığının işaretidir.',
      general: 'Hasat sırasında yumrulara zarar vermemeye özen gösterilmeli ve güneşte bekletilmemelidir.',
    },
    timeline: [
      { stage: 'Toprak Hazırlığı', duration: '1-2 hafta', description: 'Toprak derin işlenir, taşlardan temizlenir ve sırtlar oluşturulur.' },
      { stage: 'Ekim/Dikim', duration: '1 gün', description: 'Tohumluk yumrular uygun derinlik ve aralıkla dikilir.' },
      { stage: 'Çimlenme', duration: '15-20 gün', description: 'Toprak üstünde filizlenme görülmeye başlar.' },
      { stage: 'Gelişim', duration: '40-60 gün', description: 'Yaprak gelişimi hızlanır ve yumru oluşumu başlar.' },
      { stage: 'Bakım', duration: 'Sürekli', description: 'Boğaz doldurma, sulama ve hastalık takibi yapılır.' },
      { stage: 'Hasat', duration: '90-120. günden itibaren', description: 'Yumrular toprak altından çıkarılarak toplanır.' },
    ],
  },
  {
    id: 'biber',
    name: 'Biber',
    emoji: '🌶️',
    image: 'https://images.pexels.com/photos/10607851/pexels-photo-10607851.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Sebze',
    shortDescription:
      'Sıcak iklim seven ve renk çeşitliliği bol olan biber, hem taze hem de kuru olarak tüketilebilen popüler bir sebzedir.',
    growingModes: ['field', 'pot'],
    planting: {
      period: 'Açık tarlada Mayıs ayı, serada Mart - Nisan fide dikimi yapılabilir.',
      temperature: 'Gelişim için 20-28°C idealdir; 15°C altında büyüme yavaşlar.',
      conditions: 'Bol güneş, iyi drenajlı ve rüzgardan korunaklı alanlar tercih edilmelidir.',
      spacing: 'Sıra arası 50-60 cm, sıra üzeri 30-40 cm aralık genel olarak önerilir.',
    },
    soil: {
      type: 'Organik maddece zengin, iyi havalanan tınlı topraklar idealdir.',
      ph: 'Yaklaşık 6.0 - 6.8 pH aralığı tercih edilir.',
      drainage: 'İyi drenaj gereklidir; su tutan topraklarda kök hastalıkları artar.',
      preparation: 'Dikimden önce toprak sürülür, organik gübre eklenir ve yabancı otlardan temizlenir.',
    },
    irrigation: {
      requirement: 'Düzenli ve ölçülü sulama ister; su stresi meyve kalitesini düşürür.',
      periods: 'Çiçeklenme ve meyve gelişim döneminde su ihtiyacı artar.',
      overwatering: 'Aşırı sulama kök çürüklüğü ve mantar hastalıklarına yol açabilir.',
    },
    fertilization: {
      nutrients: 'Azot, fosfor ve potasyum dengeli şekilde uygulanmalıdır.',
      stages: 'Taban gübrelemesi ile başlanır, gelişim döneminde azotlu üst gübreleme yapılır.',
      general: 'Aşırı azot, yaprak gelişimini teşvik edip meyve verimini azaltabilir.',
      soilAnalysis: 'Toprak analizi ile gübre ihtiyacı belirlenmesi önerilir.',
    },
    diseases: [
      {
        name: 'Bakteriyel Yaprak Lekesi',
        symptoms: 'Yapraklarda kahverengi, merkezi açık lekeler.',
        causes: 'Nemli koşullar ve sulama suyunda bulaşma.',
        prevention: 'Yaprakları ıslatmadan sulamak ve hava sirkülasyonu sağlamak.',
      },
    ],
    pests: [
      {
        name: 'Yaprak Biti',
        symptoms: 'Yaprak altında küçük yeşil/siyah böcekler, yaprak kıvrılması.',
        prevention: 'Düzenli kontrol ve sabunlu su uygulaması.',
        control: 'Yoğun görülmesi durumunda uygun bitki koruma ürünleri için danışmanlık alınması önerilir.',
      },
    ],
    harvest: {
      period: 'Dikimden yaklaşık 60-80 gün sonra hasat başlar.',
      maturitySigns: 'Meyvenin çeşidine özgü rengini alması ve istenen büyüklüğe ulaşması.',
      general: 'Biberler kademeli hasat edilir; taze tüketimde sabah saatleri uygundur.',
    },
    timeline: [
      { stage: 'Toprak Hazırlığı', duration: '1-2 hafta', description: 'Toprak sürülür ve organik madde ile zenginleştirilir.' },
      { stage: 'Ekim/Dikim', duration: '1 gün', description: 'Fideler uygun aralıklarla dikilir.' },
      { stage: 'Çimlenme', duration: '7-14 gün', description: 'Tohum ekiminde çimlenme, fide dikiminde kök tutma başlar.' },
      { stage: 'Gelişim', duration: '30-40 gün', description: 'Bitki büyür, çiçeklenmeye başlar.' },
      { stage: 'Bakım', duration: 'Sürekli', description: 'Sulama, gübreleme ve zararlı takibi yapılır.' },
      { stage: 'Hasat', duration: '60-80. günden itibaren', description: 'Meyveler kademeli olarak toplanır.' },
    ],
    potGrowing: {
      light: {
        requirement: 'Bol güneş — günde en az 6 saat doğrudan güneş ışığı.',
        placement: 'Güney veya güneybatı yönüne bakan pencere, güneşli balkon idealdir.',
      },
      watering: {
        requirement: 'Toprağın üst 2 cm\'i kuruduğunda sulayın; genellikle 2-3 günde bir.',
        moistureCheck: 'Parmağınızı toprağa batırın; nem varsa sulamayı erteleyin.',
        overwatering: 'Aşırı sulama kök çürüklüğüne yol açar; saksı drenajına dikkat edin.',
      },
      container: {
        size: 'En az 25-30 cm çapında saksı; bitki başına 10-15 L toprak hacmi.',
        drainage: 'Drenaj delikleri zorunludur; altlıkta su birikmesine izin vermeyin.',
        repotting: 'Bitki saksıyı doldurduğunda bir boy büyük saksıya aktarın.',
      },
      soil: {
        type: 'Drenajı iyi, organik maddece zengin saksı toprağı; torf + perlit karışımı.',
        drainage: 'Perlit veya kaba kum ekleyerek drenajı artırın.',
      },
      environment: {
        temperature: 'İdeal sıcaklık 20-28°C; 15°C altında büyüme yavaşlar.',
        conditions: 'Ani sıcaklık değişimlerinden koruyun; cereyanlı yerlerden kaçının.',
      },
      fertilization: {
        schedule: '2 haftada bir sıvı gübre; çiçeklenme döneminde potasyum ağırlıklı.',
        stages: 'Büyüme döneminde dengeli, meyve döneminde potasyum ağırlıklı gübre.',
      },
      diseases: [
        {
          name: 'Bakteriyel Yaprak Lekesi',
          symptoms: 'Yapraklarda kahverengi lekeler.',
          causes: 'Nemli koşullar ve yaprakların ıslak kalması.',
          prevention: 'Yaprakları ıslatmadan sulayın; hava sirkülasyonu sağlayın.',
        },
      ],
      pests: [
        {
          name: 'Yaprak Biti',
          symptoms: 'Yaprak altında küçük böcekler, yaprak kıvrılması.',
          prevention: 'Düzenli kontrol ve sabunlu su uygulaması.',
          control: 'Sabunlu su veya neem yağı ile müdahale edilebilir.',
        },
      ],
      care: {
        pruning: 'İlk çiçeklenmeden önce teze budaması yapılabilir; sürgünler temizlenir.',
        leafCare: 'Sararan yaprakları temizleyin; yaprakları düzenli kontrol edin.',
        general: 'Meyve ağırlaştıkça bitkiyi destek çubuğu ile destekleyin.',
      },
      timeline: [
        { stage: 'Ekim/Dikim', duration: '1 gün', description: 'Fide saksıya dikilir.' },
        { stage: 'Kök Tutma', duration: '7-10 gün', description: 'Bitki saksıya alışır.' },
        { stage: 'Vejetatif Gelişim', duration: '3-4 hafta', description: 'Bitki büyür, dallanır.' },
        { stage: 'Çiçeklenme', duration: '1-2 hafta', description: 'Çiçekler açar.' },
        { stage: 'Meyve Gelişimi', duration: '4-6 hafta', description: 'Meyveler büyür ve renk değiştirir.' },
        { stage: 'Hasat', duration: '60-80. günden itibaren', description: 'Meyveler kademeli toplanır.' },
      ],
    },
  },
  {
    id: 'salatalik',
    name: 'Salatalık',
    emoji: '🥒',
    image: 'https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Sebze',
    shortDescription:
      'Su içeriği yüksek ve serinletici özelliğiyle bilinen salatalık, sıcak iklim seven ve hızlı büyüyen bir sebzedir.',
    growingModes: ['field'],
    planting: {
      period: 'Nisan - Mayıs aylarında ekim için uygun dönemdir.',
      temperature: 'Gelişim için 18-30°C idealdir; soğuğa karşı çok hassastır.',
      conditions: 'Bol güneş, sıcak ve nemli koşullar tercih edilmelidir.',
      spacing: 'Sıra arası 100-150 cm, sıra üzeri 30-50 cm aralık önerilir.',
    },
    soil: {
      type: 'Organik maddece zengin, iyi havalanan ve su tutma kapasitesi yüksek topraklar.',
      ph: 'Yaklaşık 5.5 - 6.8 pH aralığı uygundur.',
      drainage: 'İyi drenaj gerekir, ancak nemli toprak ister.',
      preparation: 'Derin sürüm ve bol organik madde eklenmesi önerilir.',
    },
    irrigation: {
      requirement: 'Yüksek su ihtiyacı vardır; düzenli ve bol sulama gerekir.',
      periods: 'Özellikle meyve gelişim döneminde su stresine duyarlıdır.',
      overwatering: 'Aşırı sulama kök çürüklüğüne yol açabilir.',
    },
    fertilization: {
      nutrients: 'Azot, fosfor ve potasyum dengeli uygulanmalıdır.',
      stages: 'Taban gübrelemesi ile başlanır, gelişim döneminde üst gübreleme yapılır.',
      general: 'Düzenli besleme meyve kalitesini artırır.',
      soilAnalysis: 'Toprak analizi önerilir.',
    },
    diseases: [
      {
        name: 'Külleme',
        symptoms: 'Yaprak yüzeyinde beyaz unlu tabaka.',
        causes: 'Yüksek nem ve sıcaklık dalgalanmaları.',
        prevention: 'Hava sirkülasyonu ve dengeli sulama.',
      },
    ],
    pests: [
      {
        name: 'Beyaz Sinek',
        symptoms: 'Yaprak altında beyaz böcekler, sararma.',
        prevention: 'Sarı tuzaklar ve düzenli gözlem.',
        control: 'Bölgesel danışmanlık alınması önerilir.',
      },
    ],
    harvest: {
      period: 'Ekimden yaklaşık 50-70 gün sonra hasat başlar.',
      maturitySigns: 'Meyvenin istenen büyüklüğe ulaşması ve koyu yeşil renk.',
      general: 'Sık hasat bitkiyi teşvik eder ve daha çok meyve verir.',
    },
    timeline: [
      { stage: 'Toprak Hazırlığı', duration: '1-2 hafta', description: 'Toprak sürülür ve organik madde eklenir.' },
      { stage: 'Ekim/Dikim', duration: '1 gün', description: 'Tohumlar veya fideler dikilir.' },
      { stage: 'Çimlenme', duration: '5-10 gün', description: 'Tohumlar çimlenir.' },
      { stage: 'Gelişim', duration: '20-30 gün', description: 'Bitki sürünücü veya sırıkta büyür.' },
      { stage: 'Bakım', duration: 'Sürekli', description: 'Sulama, gübreleme ve hastalık takibi.' },
      { stage: 'Hasat', duration: '50-70. günden itibaren', description: 'Meyveler kademeli toplanır.' },
    ],
  },
  {
    id: 'ayicegi',
    name: 'Ayçiçeği',
    emoji: '🌻',
    image: 'https://images.pexels.com/photos/235554/pexels-photo-235554.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Tahıl',
    shortDescription:
      'Yağlık ve çerezlik olarak yetiştirilen ayçiçeği, sıcak iklim seven ve uzun boylu bir tarla bitkisidir.',
    growingModes: ['field'],
    planting: {
      period: 'Mart - Nisan aylarında ekim için uygun dönemdir.',
      temperature: 'Çimlenme için 8-10°C, gelişim için 18-25°C idealdir.',
      conditions: 'Bol güneş alan, iyi drenajlı tarla alanları tercih edilir.',
      spacing: 'Sıra arası 70 cm, sıra üzeri 25-30 cm aralık önerilir.',
    },
    soil: {
      type: 'Derin, iyi havalanan tınlı topraklar idealdir.',
      ph: 'Yaklaşık 6.0 - 7.5 pH aralığı uygundur.',
      drainage: 'İyi drenaj gereklidir.',
      preparation: 'Derin sürüm ve tesviye yapılır.',
    },
    irrigation: {
      requirement: 'Orta düzey su ihtiyacı vardır; kurak dönemlerde sulama faydalıdır.',
      periods: 'Çiçeklenme ve tane doldurma döneminde su ihtiyacı artar.',
      overwatering: 'Aşırı sulama kök gelişimini olumsuz etkileyebilir.',
    },
    fertilization: {
      nutrients: 'Azot, fosfor ve potasyum dengeli uygulanmalıdır.',
      stages: 'Taban gübrelemesi ile başlanır.',
      general: 'Topak analizi önerilir.',
      soilAnalysis: 'Bölgesel toprak analizi ile gübre ihtiyacı belirlenmelidir.',
    },
    diseases: [
      {
        name: 'Ayçiçeği Pası',
        symptoms: 'Yapraklarda turuncu-kahverengi pustüller.',
        causes: 'Nemli koşullar.',
        prevention: 'Dayanıklı çeşit seçimi.',
      },
    ],
    pests: [
      {
        name: 'Ayçiçeği Güvesi',
        symptoms: 'Çiçek tabanında larva zararı.',
        prevention: 'Düzenli gözlem.',
        control: 'Bölgesel danışmanlık alınması önerilir.',
      },
    ],
    harvest: {
      period: 'Ekimden yaklaşık 110-130 gün sonra hasat yapılır.',
      maturitySigns: 'Çiçek tabanının sararması ve tanelerin siyahlaşması.',
      general: 'Nem oranı düştüğünde hasat edilir.',
    },
    timeline: [
      { stage: 'Toprak Hazırlığı', duration: '1-2 hafta', description: 'Tarla sürülür ve tesviye edilir.' },
      { stage: 'Ekim/Dikim', duration: '1 gün', description: 'Tohumlar mibzerle ekilir.' },
      { stage: 'Çimlenme', duration: '7-14 gün', description: 'Tohumlar çimlenir.' },
      { stage: 'Gelişim', duration: '2-3 ay', description: 'Bitki hızla uzar ve çiçeklenir.' },
      { stage: 'Bakım', duration: 'Sürekli', description: 'Sulama ve hastalık takibi.' },
      { stage: 'Hasat', duration: '110-130. günden itibaren', description: 'Taneler olgunlaştığında hasat edilir.' },
    ],
  },
  {
    id: 'sogan',
    name: 'Soğan',
    emoji: '🧅',
    image: 'https://images.pexels.com/photos/1306559/pexels-photo-1306559.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Sebze',
    shortDescription:
      'Mutfakların vazgeçilmezi olan soğan, serin iklim seven ve yetiştiriciliği oldukça yaygın bir sebzedir.',
    growingModes: ['field'],
    planting: {
      period: 'Ekim - Kasım veya Şubat - Mart aylarında ekim yapılabilir.',
      temperature: 'Gelişim için 13-24°C idealdir.',
      conditions: 'Bol güneş ve iyi drenajlı alanlar tercih edilir.',
      spacing: 'Sıra arası 20-30 cm, sıra üzeri 8-10 cm aralık önerilir.',
    },
    soil: {
      type: 'Hafif, kumlu-tınlı ve iyi havalanan topraklar.',
      ph: 'Yaklaşık 6.0 - 7.0 pH aralığı uygundur.',
      drainage: 'İyi drenaj şarttır.',
      preparation: 'Toprak derin işlenir ve organik madde eklenir.',
    },
    irrigation: {
      requirement: 'Orta düzey su ihtiyacı vardır.',
      periods: 'Soğan büyüme döneminde düzenli sulama, hasat öncesi sulama kesilir.',
      overwatering: 'Aşırı sulama soğan çürüklüğüne yol açar.',
    },
    fertilization: {
      nutrients: 'Azot ihtiyacı yüksektir.',
      stages: 'Taban gübrelemesi ve gelişim döneminde üst gübreleme.',
      general: 'Dengeli besleme önerilir.',
      soilAnalysis: 'Toprak analizi önerilir.',
    },
    diseases: [
      {
        name: 'Soğan Mildiyösü',
        symptoms: 'Yapraklarda soluk yeşil lekeler ve küflenme.',
        causes: 'Nemli ve serin koşullar.',
        prevention: 'Hava sirkülasyonu ve dengeli sulama.',
      },
    ],
    pests: [
      {
        name: 'Soğan Sineği',
        symptoms: 'Soğanlarda larva zararı ve çürüme.',
        prevention: 'Ekim nöbeti ve temiz tohumluk.',
        control: 'Bölgesel danışmanlık alınması önerilir.',
      },
    ],
    harvest: {
      period: 'Ekimden yaklaşık 90-120 gün sonra hasat yapılır.',
      maturitySigns: 'Yaprakların sararıp yatması ve soğanın kabuk bağlaması.',
      general: 'Hasattan sonra kurutmaya bırakılır.',
    },
    timeline: [
      { stage: 'Toprak Hazırlığı', duration: '1-2 hafta', description: 'Toprak işlenir ve hazırlanır.' },
      { stage: 'Ekim/Dikim', duration: '1 gün', description: 'Tohumlar veya soğanlar ekilir.' },
      { stage: 'Çimlenme', duration: '10-15 gün', description: 'Tohumlar çimlenir.' },
      { stage: 'Gelişim', duration: '60-80 gün', description: 'Soğan büyür.' },
      { stage: 'Bakım', duration: 'Sürekli', description: 'Sulama ve yabancı ot kontrolü.' },
      { stage: 'Hasat', duration: '90-120. günden itibaren', description: 'Soğanlar olgunlaştığında hasat edilir.' },
    ],
  },
  {
    id: 'havuc',
    name: 'Havuç',
    emoji: '🥕',
    image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Sebze',
    shortDescription:
      'Serin iklim seven ve kök şeklinde gelişen havuç, A vitamini açısından zengin, popüler bir sebzedir.',
    growingModes: ['field'],
    planting: {
      period: 'Şubat - Nisan veya Ağustos - Eylül aylarında ekim yapılabilir.',
      temperature: 'Gelişim için 15-20°C idealdir.',
      conditions: 'Bol güneş ve derin, gevşek topraklar tercih edilir.',
      spacing: 'Sıra arası 20-30 cm, sıra üzeri 5-8 cm aralık önerilir.',
    },
    soil: {
      type: 'Derin, gevşek, taşsız kumlu-tınlı topraklar idealdir.',
      ph: 'Yaklaşık 5.5 - 7.0 pH aralığı uygundur.',
      drainage: 'İyi drenaj gereklidir.',
      preparation: 'Toprak derin işlenir, taşlar temizlenir ve tesviye edilir.',
    },
    irrigation: {
      requirement: 'Düzenli ve ölçülü sulama ister.',
      periods: 'Kök gelişim döneminde düzenli nem önemlidir.',
      overwatering: 'Aşırı sulama kök çatlamasına yol açabilir.',
    },
    fertilization: {
      nutrients: 'Azot, fosfor ve potasyum dengeli uygulanmalıdır.',
      stages: 'Taban gübrelemesi yeterlidir, fazla azot zararlıdır.',
      general: 'Düşük azotlu gübreleme önerilir.',
      soilAnalysis: 'Toprak analizi önerilir.',
    },
    diseases: [
      {
        name: 'Yaprak Yanıklığı',
        symptoms: 'Yapraklarda kahverengi lekeler.',
        causes: 'Nemli koşullar.',
        prevention: 'Hava sirkülasyonu.',
      },
    ],
    pests: [
      {
        name: 'Havuç Sineği',
        symptoms: 'Köklerde tüneller ve çürüme.',
        prevention: 'Ekim nöbeti ve tuzaklama.',
        control: 'Bölgesel danışmanlık alınması önerilir.',
      },
    ],
    harvest: {
      period: 'Ekimden yaklaşık 70-80 gün sonra hasat başlar.',
      maturitySigns: 'Kökün istenen kalınlığa ve renge ulaşması.',
      general: 'Hasat gevşek toprakta elle veya çatalla yapılır.',
    },
    timeline: [
      { stage: 'Toprak Hazırlığı', duration: '1-2 hafta', description: 'Toprak derin işlenir ve taşlardan temizlenir.' },
      { stage: 'Ekim/Dikim', duration: '1 gün', description: 'Tohumlar sığ şekilde ekilir.' },
      { stage: 'Çimlenme', duration: '14-21 gün', description: 'Tohumlar yavaşça çimlenir.' },
      { stage: 'Gelişim', duration: '40-60 gün', description: 'Kök büyür ve kalınlaşır.' },
      { stage: 'Bakım', duration: 'Sürekli', description: 'Sulama ve seyreltme yapılır.' },
      { stage: 'Hasat', duration: '70-80. günden itibaren', description: 'Kökler olgunlaştığında hasat edilir.' },
    ],
  },
  {
    id: 'marul',
    name: 'Marul',
    emoji: '🥬',
    image: 'https://images.pexels.com/photos/8105035/pexels-photo-8105035.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Sebze',
    shortDescription:
      'Serin iklim seven ve hızlı büyüyen marul, salataların temel sebzesi olarak geniş tüketim alanına sahiptir.',
    growingModes: ['field', 'pot'],
    planting: {
      period: 'İlkbaharda Şubat - Nisan, sonbaharda Eylül - Ekim aylarında ekim yapılabilir.',
      temperature: 'Gelişim için 10-20°C idealdir; sıcakta hızla çiçeklenir.',
      conditions: 'Serin, yarı gölge veya bol güneş alan yerler tercih edilmelidir.',
      spacing: 'Sıra arası 30-40 cm, sıra üzeri 25-30 cm aralık önerilir.',
    },
    soil: {
      type: 'Organik maddece zengin, su tutma kapasitesi iyi topraklar.',
      ph: 'Yaklaşık 6.0 - 7.0 pH aralığı uygundur.',
      drainage: 'İyi drenaj gerekir, ancak nemli toprak ister.',
      preparation: 'Toprak sürülür ve organik madde eklenir.',
    },
    irrigation: {
      requirement: 'Düzenli ve bol sulama ister; su stresi yaprakların acılaşmasına yol açar.',
      periods: 'Tüm gelişim döneminde düzenli nem önemlidir.',
      overwatering: 'Aşırı sulama kök çürüklüğüne yol açabilir.',
    },
    fertilization: {
      nutrients: 'Azot ihtiyacı yüksektir.',
      stages: 'Taban gübrelemesi ve gelişim döneminde azotlu üst gübreleme.',
      general: 'Düzenli azot beslemesi yaprak kalitesini artırır.',
      soilAnalysis: 'Toprak analizi önerilir.',
    },
    diseases: [
      {
        name: 'Yaprak Damlası',
        symptoms: 'Yapraklarda kahverengi lekeler.',
        causes: 'Nemli koşullar.',
        prevention: 'Hava sirkülasyonu ve dengeli sulama.',
      },
    ],
    pests: [
      {
        name: 'Yaprak Biti',
        symptoms: 'Yaprak altında küçük böcekler.',
        prevention: 'Düzenli kontrol.',
        control: 'Sabunlu su ile müdahale edilebilir.',
      },
    ],
    harvest: {
      period: 'Ekimden yaklaşık 45-60 gün sonra hasat başlar.',
      maturitySigns: 'Yaprakların istenen büyüklüğe ulaşması.',
      general: 'Tam olgunlaşmadan önce de hasat edilebilir.',
    },
    timeline: [
      { stage: 'Toprak Hazırlığı', duration: '1 hafta', description: 'Toprak sürülür ve organik madde eklenir.' },
      { stage: 'Ekim/Dikim', duration: '1 gün', description: 'Tohumlar yüzeye ekilir.' },
      { stage: 'Çimlenme', duration: '7-14 gün', description: 'Tohumlar çimlenir.' },
      { stage: 'Gelişim', duration: '30-45 gün', description: 'Yapraklar hızla büyür.' },
      { stage: 'Bakım', duration: 'Sürekli', description: 'Sulama ve yabancı ot kontrolü.' },
      { stage: 'Hasat', duration: '45-60. günden itibaren', description: 'Yapraklar olgunlaştığında hasat edilir.' },
    ],
    potGrowing: {
      light: {
        requirement: 'Yarı gölge — günde 3-5 saat dolaylı veya filtrelenmiş güneş ışığı.',
        placement: 'Doğu veya kuzey yönüne bakan pencere, yarı gölge balkon uygundur.',
      },
      watering: {
        requirement: 'Toprağın sürekli nemli tutulması gerekir; genellikle 1-2 günde bir sulama.',
        moistureCheck: 'Toprak yüzeyini kontrol edin; kurumuşsa sulayın.',
        overwatering: 'Aşırı sulama kök çürüklüğüne yol açar; drenajı iyi saksı kullanın.',
      },
      container: {
        size: 'Sığ ve geniş saksı; en az 15-20 cm derinlik ve 20 cm çap.',
        drainage: 'Drenaj delikleri zorunludur.',
        repotting: 'Marul tek sezonluk bitkidir; saksı değişimi gerekmez.',
      },
      soil: {
        type: 'Organik maddece zengin, su tutma kapasitesi iyi saksı toprağı.',
        drainage: 'Hafif ve gevşek yapıda olmalıdır.',
      },
      environment: {
        temperature: 'İdeal sıcaklık 10-20°C; sıcakta hızla çiçeklenir.',
        conditions: 'Serin ortam idealdir; sıcak pencere kenarından uzak tutun.',
      },
      fertilization: {
        schedule: '2 haftada bir seyreltik sıvı azotlu gübre.',
        stages: 'Tüm dönemde azot ağırlıklı besleme.',
      },
      diseases: [
        {
          name: 'Yaprak Damlası',
          symptoms: 'Yapraklarda kahverengi lekeler.',
          causes: 'Nemli koşullar ve yaprakların ıslak kalması.',
          prevention: 'Yaprakları ıslatmadan sulayın.',
        },
      ],
      pests: [
        {
          name: 'Yaprak Biti',
          symptoms: 'Yaprak altında küçük böcekler, yaprak kıvrılması.',
          prevention: 'Düzenli kontrol.',
          control: 'Sabunlu su ile temizleyin.',
        },
      ],
      care: {
        pruning: 'Dış yapraklardan başlayarak haset edebilirsiniz; iç yapraklar büyümeye devam eder.',
        leafCare: 'Sararan dış yaprakları temizleyin.',
        general: 'Sıcak havalarda bitkiyi serin yerde tutun; çiçeklenmeyi önleyin.',
      },
      timeline: [
        { stage: 'Ekim/Dikim', duration: '1 gün', description: 'Tohumlar saksıya ekilir.' },
        { stage: 'Çimlenme', duration: '7-14 gün', description: 'Tohumlar çimlenir.' },
        { stage: 'Gelişim', duration: '30-40 gün', description: 'Yapraklar hızla büyür.' },
        { stage: 'Bakım', duration: 'Sürekli', description: 'Düzenli sulama ve gübreleme.' },
        { stage: 'Hasat', duration: '45-60. günden itibaren', description: 'Dış yapraklardan başlanarak hasat edilir.' },
      ],
    },
  },
  // --- Pot-only crops ---
  {
    id: 'feslegen',
    name: 'Fesleğen',
    emoji: '🌿',
    image: 'https://images.pexels.com/photos/1340112/pexels-photo-1340112.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Bitki',
    shortDescription:
      'Mutfak bitkilerinin kralı fesleğen, sıcak ve güneşli ortamlarda saksıda kolayca yetiştirilebilen aromatik bir bitkidir.',
    growingModes: ['pot'],
    planting: {
      period: 'Nisan - Mayıs aylarında ekim için uygundur.',
      temperature: 'Gelişim için 18-28°C idealdir; soğuğa karşı çok hassastır.',
      conditions: 'Sıcak, güneşli ve rüzgardan korunaklı yerler tercih edilmelidir.',
      spacing: 'Saksıda bitkiler arası 15-20 cm aralık bırakılmalıdır.',
    },
    soil: {
      type: 'Drenajı iyi, organik maddece zengin saksı toprağı.',
      ph: 'Yaklaşık 5.5 - 6.5 pH aralığı uygundur.',
      drainage: 'İyi drenaj şarttır; su birikmesi kök çürüklüğüne yol açar.',
      preparation: 'Torf ve perlit karışımı kullanılabilir.',
    },
    irrigation: {
      requirement: 'Düzenli sulama ister; toprağın kurumasına izin vermeyin.',
      periods: 'Yaz aylarında her gün kontrol edin.',
      overwatering: 'Aşırı sulama kök çürüklüğüne yol açar.',
    },
    fertilization: {
      nutrients: 'Azot ağırlıklı gübreleme yaprak gelişimini teşvik eder.',
      stages: '2 haftada bir sıvı gübre yeterlidir.',
      general: 'Aşırı gübreleme aromayı azaltabilir.',
      soilAnalysis: 'Saksı yetiştiriciliğinde toprak analizi genelde gerekmez.',
    },
    diseases: [
      {
        name: 'Külleme',
        symptoms: 'Yapraklarda beyaz unlu tabaka.',
        causes: 'Yüksek nem ve yetersiz hava sirkülasyonu.',
        prevention: 'Bitkiler arası mesafe bırakın ve yaprakları kuru tutun.',
      },
    ],
    pests: [
      {
        name: 'Yaprak Biti',
        symptoms: 'Yaprak altında küçük böcekler, yaprak kıvrılması.',
        prevention: 'Düzenli kontrol ve sabunlu su.',
        control: 'Sabunlu su veya neem yağı ile müdahale edilebilir.',
      },
    ],
    harvest: {
      period: 'Ekimden 60-70 gün sonra hasat başlar.',
      maturitySigns: 'Bitki 15-20 cm boya ulaştığında hasat edilebilir.',
      general: 'Düzenli hasat bitkiyi daha çok dallandırır.',
    },
    timeline: [
      { stage: 'Ekim/Dikim', duration: '1 gün', description: 'Tohumlar saksıya ekilir.' },
      { stage: 'Çimlenme', duration: '5-10 gün', description: 'Tohumlar çimlenir.' },
      { stage: 'Gelişim', duration: '30-40 gün', description: 'Bitki hızla büyür ve dallanır.' },
      { stage: 'Bakım', duration: 'Sürekli', description: 'Sulama ve düzenli haset.' },
      { stage: 'Hasat', duration: '60-70. günden itibaren', description: 'Yapraklar kademeli toplanır.' },
    ],
    potGrowing: {
      light: {
        requirement: 'Bol güneş — günde en az 6 saat doğrudan güneş ışığı.',
        placement: 'Güney yönüne bakan pencere kenarı veya güneşli balkon en ideal yerdir.',
      },
      watering: {
        requirement: 'Toprağın üst 1-2 cm\'i kuruduğunda sulayın; yaz aylarında genellikle her gün.',
        moistureCheck: 'Parmağınızı toprağa batırın; nem varsa bekleyin.',
        overwatering: 'Aşırı sulama kök çürüklüğüne yol açar; saksı altlığında su bırakmayın.',
      },
      container: {
        size: 'En az 15-20 cm çapında saksı; derinlik 15 cm yeterlidir.',
        drainage: 'Drenaj delikleri zorunludur.',
        repotting: 'Bitki saksıyı doldurduğunda bir boy büyük saksıya aktarın.',
      },
      soil: {
        type: 'Drenajı iyi, organik maddece zengin saksı toprağı; torf + perlit karışımı.',
        drainage: 'Perlit eklemek drenajı artırır.',
      },
      environment: {
        temperature: 'İdeal sıcaklık 18-28°C; 10°C altında büyüme durur.',
        conditions: 'Soğuk hava akımlarından ve cereyanlı yerlerden koruyun.',
      },
      fertilization: {
        schedule: '2 haftada bir seyreltik sıvı gübre; azot ağırlıklı.',
        stages: 'Tüm büyüme döneminde düzenli besleme.',
      },
      diseases: [
        {
          name: 'Külleme',
          symptoms: 'Yapraklarda beyaz unlu tabaka.',
          causes: 'Yüksek nem ve yetersiz hava sirkülasyonu.',
          prevention: 'Bitkiler arası mesafe bırakın ve yaprakları kuru tutun.',
        },
      ],
      pests: [
        {
          name: 'Yaprak Biti',
          symptoms: 'Yaprak altında küçük böcekler, yaprak kıvrılması.',
          prevention: 'Düzenli kontrol ve sabunlu su.',
          control: 'Sabunlu su veya neem yağı ile müdahale edilebilir.',
        },
      ],
      care: {
        pruning: 'Düzenli haset (teze budaması) bitkiyi daha çok dallandırır; çiçek sapları kesilir.',
        leafCare: 'Sararan yaprakları temizleyin; alt yapraklardan haset edin.',
        general: 'Çiçeklenmeyi geciktirmek için çiçek sapları kesilir; bu yaprak kalitesini korur.',
      },
      timeline: [
        { stage: 'Ekim/Dikim', duration: '1 gün', description: 'Tohumlar saksıya ekilir.' },
        { stage: 'Çimlenme', duration: '5-10 gün', description: 'Tohumlar çimlenir.' },
        { stage: 'Vejetatif Gelişim', duration: '3-4 hafta', description: 'Bitki hızla büyür ve dallanır.' },
        { stage: 'Bakım', duration: 'Sürekli', description: 'Düzenli sulama, haset ve gübreleme.' },
        { stage: 'Hasat', duration: '60-70. günden itibaren', description: 'Yapraklar kademeli toplanır.' },
      ],
    },
  },
  {
    id: 'nane',
    name: 'Nane',
    emoji: '🌱',
    image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Bitki',
    shortDescription:
      'Ferahlatıcı aromasıyla bilinen nane, saksıda çok kolay yetişen ve hızla yayılan dayanıklı bir bitkidir.',
    growingModes: ['pot'],
    planting: {
      period: 'Mart - Mayıs aylarında ekim için uygundur.',
      temperature: 'Gelişim için 15-25°C idealdir.',
      conditions: 'Yarı gölge veya bol güneş alan yerler uygundur.',
      spacing: 'Saksıda bitkiler arası 15-20 cm aralık bırakılmalıdır.',
    },
    soil: {
      type: 'Nem tutan, organik maddece zengin saksı toprağı.',
      ph: 'Yaklaşık 6.0 - 7.0 pH aralığı uygundur.',
      drainage: 'İyi drenaj istenir, ancak nemli toprak sever.',
      preparation: 'Torf ve bahçe toprağı karışımı kullanılabilir.',
    },
    irrigation: {
      requirement: 'Toprağın sürekli nemli tutulması gerekir.',
      periods: 'Yaz aylarında her gün kontrol edin.',
      overwatering: 'Aşırı sulama kök çürüklüğüne yol açabilir.',
    },
    fertilization: {
      nutrients: 'Azot ağırlıklı gübreleme yaprak gelişimini teşvik eder.',
      stages: '2 haftada bir sıvı gübre yeterlidir.',
      general: 'Aşırı gübrelemeden kaçının.',
      soilAnalysis: 'Saksı yetiştiriciliğinde genelde gerekmez.',
    },
    diseases: [
      {
        name: 'Pas Hastalığı',
        symptoms: 'Yapraklarda turuncu-kahverengi lekeler.',
        causes: 'Nemli koşullar.',
        prevention: 'Hava sirkülasyonu sağlayın.',
      },
    ],
    pests: [
      {
        name: 'Yaprak Biti',
        symptoms: 'Yaprak altında küçük böcekler.',
        prevention: 'Düzenli kontrol.',
        control: 'Sabunlu su ile temizleyin.',
      },
    ],
    harvest: {
      period: 'Ekimden 60-70 gün sonra hasat başlar.',
      maturitySigns: 'Bitki 15-20 cm boya ulaştığında haset edilebilir.',
      general: 'Düzenli haset bitkiyi daha çok dallandırır.',
    },
    timeline: [
      { stage: 'Ekim/Dikim', duration: '1 gün', description: 'Tohumlar saksıya ekilir.' },
      { stage: 'Çimlenme', duration: '10-15 gün', description: 'Tohumlar çimlenir.' },
      { stage: 'Gelişim', duration: '30-40 gün', description: 'Bitki hızla yayılır.' },
      { stage: 'Bakım', duration: 'Sürekli', description: 'Sulama ve haset.' },
      { stage: 'Hasat', duration: '60-70. günden itibaren', description: 'Yapraklar kademeli toplanır.' },
    ],
    potGrowing: {
      light: {
        requirement: 'Yarı gölge — günde 3-6 saat güneş ışığı yeterlidir.',
        placement: 'Doğu veya batı yönüne bakan pencere, yarı gölge balkon uygundur.',
      },
      watering: {
        requirement: 'Toprağın sürekli nemli tutulması gerekir; genellikle 1-2 günde bir.',
        moistureCheck: 'Toprak yüzeyini kontrol edin; hafif kurumuşsa sulayın.',
        overwatering: 'Aşırı sulama kök çürüklüğüne yol açar; drenajı iyi saksı kullanın.',
      },
      container: {
        size: 'En az 15-20 cm çapında saksı; nane hızla yayılır.',
        drainage: 'Drenaj delikleri zorunludur.',
        repotting: 'Yayılması durumunda daha geniş saksıya aktarın.',
      },
      soil: {
        type: 'Nem tutan, organik maddece zengin saksı toprağı.',
        drainage: 'Hafif ve nem tutucu yapıda olmalıdır.',
      },
      environment: {
        temperature: 'İdeal sıcaklık 15-25°C; dondan koruyun.',
        conditions: 'Serin ve nemli ortam idealdir.',
      },
      fertilization: {
        schedule: '2 haftada bir seyreltik sıvı gübre.',
        stages: 'Tüm büyüme döneminde düzenli besleme.',
      },
      diseases: [
        {
          name: 'Pas Hastalığı',
          symptoms: 'Yapraklarda turuncu-kahverengi lekeler.',
          causes: 'Nemli koşullar.',
          prevention: 'Hava sirkülasyonu sağlayın.',
        },
      ],
      pests: [
        {
          name: 'Yaprak Biti',
          symptoms: 'Yaprak altında küçük böcekler.',
          prevention: 'Düzenli kontrol.',
          control: 'Sabunlu su ile temizleyin.',
        },
      ],
      care: {
        pruning: 'Düzenli haset bitkiyi daha çok dallandırır; teze budaması yapın.',
        leafCare: 'Sararan yaprakları temizleyin.',
        general: 'Nane hızla yayıldığı için tek saksıda bırakmak yeterlidir; yayılımı kontrol etmek için saksı sınırları kullanın.',
      },
      timeline: [
        { stage: 'Ekim/Dikim', duration: '1 gün', description: 'Tohumlar saksıya ekilir.' },
        { stage: 'Çimlenme', duration: '10-15 gün', description: 'Tohumlar çimlenir.' },
        { stage: 'Vejetatif Gelişim', duration: '3-4 hafta', description: 'Bitki hızla yayılır.' },
        { stage: 'Bakım', duration: 'Sürekli', description: 'Düzenli sulama ve haset.' },
        { stage: 'Hasat', duration: '60-70. günden itibaren', description: 'Yapraklar kademeli toplanır.' },
      ],
    },
  },
  {
    id: 'maydanoz',
    name: 'Maydanoz',
    emoji: '🌿',
    image: 'https://images.pexels.com/photos/1340112/pexels-photo-1340112.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Bitki',
    shortDescription:
      'Mutfakların vazgeçilmezi maydanoz, serin iklim seven ve saksıda kolayca yetiştirilebilen aromatik bir bitkidir.',
    growingModes: ['pot'],
    planting: {
      period: 'Mart - Mayıs veya Eylül - Ekim aylarında ekim yapılabilir.',
      temperature: 'Gelişim için 10-22°C idealdir.',
      conditions: 'Yarı gölge veya bol güneş alan yerler uygundur.',
      spacing: 'Saksıda bitkiler arası 10-15 cm aralık bırakılmalıdır.',
    },
    soil: {
      type: 'Organik maddece zengin, su tutma kapasitesi iyi saksı toprağı.',
      ph: 'Yaklaşık 5.5 - 6.7 pH aralığı uygundur.',
      drainage: 'İyi drenaj istenir, ancak nemli toprak sever.',
      preparation: 'Torf ve bahçe toprağı karışımı kullanılabilir.',
    },
    irrigation: {
      requirement: 'Toprağın düzenli nemli tutulması gerekir.',
      periods: 'Yaz aylarında her gün kontrol edin.',
      overwatering: 'Aşırı sulama kök çürüklüğüne yol açabilir.',
    },
    fertilization: {
      nutrients: 'Azot ağırlıklı gübreleme yaprak gelişimini teşvik eder.',
      stages: '2 haftada bir sıvı gübre yeterlidir.',
      general: 'Aşırı gübrelemeden kaçının.',
      soilAnalysis: 'Saksı yetiştiriciliğinde genelde gerekmez.',
    },
    diseases: [
      {
        name: 'Yaprak Lekesi',
        symptoms: 'Yapraklarda sarı-kahverengi lekeler.',
        causes: 'Nemli koşullar.',
        prevention: 'Yaprakları kuru tutun.',
      },
    ],
    pests: [
      {
        name: 'Yaprak Biti',
        symptoms: 'Yaprak altında küçük böcekler.',
        prevention: 'Düzenli kontrol.',
        control: 'Sabunlu su ile temizleyin.',
      },
    ],
    harvest: {
      period: 'Ekimden 70-90 gün sonra hasat başlar.',
      maturitySigns: 'Bitki 15-20 cm boya ulaştığında haset edilebilir.',
      general: 'Dış yapraklardan başlayarak haset edilir.',
    },
    timeline: [
      { stage: 'Ekim/Dikim', duration: '1 gün', description: 'Tohumlar saksıya ekilir.' },
      { stage: 'Çimlenme', duration: '14-21 gün', description: 'Tohumlar yavaşça çimlenir.' },
      { stage: 'Gelişim', duration: '40-60 gün', description: 'Bitki büyür ve yapraklanır.' },
      { stage: 'Bakım', duration: 'Sürekli', description: 'Sulama ve haset.' },
      { stage: 'Hasat', duration: '70-90. günden itibaren', description: 'Yapraklar kademeli toplanır.' },
    ],
    potGrowing: {
      light: {
        requirement: 'Yarı gölge — günde 3-5 saat güneş ışığı yeterlidir.',
        placement: 'Doğu veya kuzey yönüne bakan pencere, yarı gölge balkon uygundur.',
      },
      watering: {
        requirement: 'Toprağın sürekli nemli tutulması gerekir; genellikle 1-2 günde bir.',
        moistureCheck: 'Toprak yüzeyini kontrol edin; kurumuşsa sulayın.',
        overwatering: 'Aşırı sulama kök çürüklüğüne yol açar; drenajı iyi saksı kullanın.',
      },
      container: {
        size: 'En az 15-20 cm çapında ve derin saksı; kök derinleştiği için 20 cm derinlik önerilir.',
        drainage: 'Drenaj delikleri zorunludur.',
        repotting: 'Tek sezonluk bitkidir; saksı değişimi genelde gerekmez.',
      },
      soil: {
        type: 'Organik maddece zengin, su tutma kapasitesi iyi saksı toprağı.',
        drainage: 'Hafif ve nem tutucu yapıda olmalıdır.',
      },
      environment: {
        temperature: 'İdeal sıcaklık 10-22°C; sıcakta hızla çiçeklenir.',
        conditions: 'Serin ortam idealdir; sıcak pencere kenarından uzak tutun.',
      },
      fertilization: {
        schedule: '2 haftada bir seyreltik sıvı azotlu gübre.',
        stages: 'Tüm büyüme döneminde düzenli besleme.',
      },
      diseases: [
        {
          name: 'Yaprak Lekesi',
          symptoms: 'Yapraklarda sarı-kahverengi lekeler.',
          causes: 'Nemli koşullar ve yaprakların ıslak kalması.',
          prevention: 'Yaprakları kuru tutun; alttan sulayın.',
        },
      ],
      pests: [
        {
          name: 'Yaprak Biti',
          symptoms: 'Yaprak altında küçük böcekler.',
          prevention: 'Düzenli kontrol.',
          control: 'Sabunlu su ile temizleyin.',
        },
      ],
      care: {
        pruning: 'Dış yapraklardan başlayarak haset edin; iç yapraklar büyümeye devam eder.',
        leafCare: 'Sararan dış yaprakları düzenli temizleyin.',
        general: 'Çiçek sapları çıkarsa kesin; yaprak kalitesini korur.',
      },
      timeline: [
        { stage: 'Ekim/Dikim', duration: '1 gün', description: 'Tohumlar saksıya ekilir.' },
        { stage: 'Çimlenme', duration: '14-21 gün', description: 'Tohumlar yavaşça çimlenir.' },
        { stage: 'Vejetatif Gelişim', duration: '4-6 hafta', description: 'Bitki büyür ve yapraklanır.' },
        { stage: 'Bakım', duration: 'Sürekli', description: 'Düzenli sulama ve gübreleme.' },
        { stage: 'Hasat', duration: '70-90. günden itibaren', description: 'Dış yapraklardan başlanarak hasat edilir.' },
      ],
    },
  },
  {
    id: 'biberiye',
    name: 'Biberiye',
    emoji: '🌿',
    image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Bitki',
    shortDescription:
      'Aromatik ve dayanıklı biberiye, saksıda kolay yetişen, az su isteyen ve Akdeniz iklimine alışkın bir bitkidir.',
    growingModes: ['pot'],
    planting: {
      period: 'Mart - Mayıs aylarında çelik veya tohumla ekim yapılabilir.',
      temperature: 'Gelişim için 15-25°C idealdir.',
      conditions: 'Bol güneş ve iyi drenajlı ortam tercih edilmelidir.',
      spacing: 'Saksıda tek bitki yeterlidir; 20-25 cm çap saksı önerilir.',
    },
    soil: {
      type: 'Drenajı çok iyi, hafif kumlu-tınlı saksı toprağı.',
      ph: 'Yaklaşık 6.0 - 7.0 pH aralığı uygundur.',
      drainage: 'Mükemmel drenaj şarttır; su birikmesi kök çürüklüğüne yol açar.',
      preparation: 'Torf, perlit ve kaba kum karışımı idealdir.',
    },
    irrigation: {
      requirement: 'Az su ister; toprağın kurumasına izin verin.',
      periods: 'Toprak tamamen kuruduğunda sulayın; kışın daha az sulayın.',
      overwatering: 'Aşırı sulama en yaygın ölümlük nedenidir.',
    },
    fertilization: {
      nutrients: 'Az gübreleme yeterlidir; azot, fosfor, potasyum dengeli.',
      stages: 'Ayda bir kez seyreltik sıvı gübre yeterlidir.',
      general: 'Aşırı gübreleme aromayı azaltır.',
      soilAnalysis: 'Saksı yetiştiriciliğinde genelde gerekmez.',
    },
    diseases: [
      {
        name: 'Kök Çürüklüğü',
        symptoms: 'Yapraklarda sararma ve dökülme, gövde dibinde kararma.',
        causes: 'Aşırı sulama ve kötü drenaj.',
        prevention: 'Toprağın kurumasına izin verin ve drenajı iyi saksı kullanın.',
      },
    ],
    pests: [
      {
        name: 'Örümcek Akarı',
        symptoms: 'Yapraklarda sararma ve ince ağ.',
        prevention: 'Düzenli kontrol ve yaprak nemlendirmesi.',
        control: 'Sabunlu su ile temizleyin.',
      },
    ],
    harvest: {
      period: 'Ekimden 80-90 gün sonra hasat başlar.',
      maturitySigns: 'Bitki 20-30 cm boya ulaştığında haset edilebilir.',
      general: 'Düzenli haset bitkiyi daha çok dallandırır.',
    },
    timeline: [
      { stage: 'Ekim/Dikim', duration: '1 gün', description: 'Çelik veya tohumlar saksıya ekilir.' },
      { stage: 'Kök Tutma', duration: '14-21 gün', description: 'Çelikler köklenir.' },
      { stage: 'Gelişim', duration: '60-70 gün', description: 'Bitki yavaşça büyür ve dallanır.' },
      { stage: 'Bakım', duration: 'Sürekli', description: 'Az sulama ve düzenli haset.' },
      { stage: 'Hasat', duration: '80-90. günden itibaren', description: 'Dallar kademeli toplanır.' },
    ],
    potGrowing: {
      light: {
        requirement: 'Bol güneş — günde en az 6-8 saat doğrudan güneş ışığı.',
        placement: 'Güney veya batı yönüne bakan pencere, güneşli balkon en ideal yerdir.',
      },
      watering: {
        requirement: 'Az su ister; toprağın tamamen kurumasına izin verin; genellikle 3-5 günde bir.',
        moistureCheck: 'Toprağın alt 3-4 cm\'i kurumuşsa sulayın.',
        overwatering: 'Aşırı sulama en yaygın ölümlük nedenidir; asla saksı altlığında su bırakmayın.',
      },
      container: {
        size: 'En az 20-25 cm çapında ve derin saksı; killi saksı ağır bitki için idealdir.',
        drainage: 'Mükemmel drenaj şarttır; drenaj delikleri ve altlıkta kalın bir kil tabakası kullanın.',
        repotting: 'Yılda bir kez daha büyük saksıya aktarın.',
      },
      soil: {
        type: 'Drenajı çok iyi, hafif kumlu-tınlı saksı toprağı; torf + perlit + kaba kum karışımı.',
        drainage: 'Kum veya perlit ekleyerek drenajı maksimuma çıkarın.',
      },
      environment: {
        temperature: 'İdeal sıcaklık 15-25°C; kuru ve sıcak ortam sever.',
        conditions: 'Nemli ortamdan hoşlanmaz; havalandırmanın iyi olduğu yerler idealdir.',
      },
      fertilization: {
        schedule: 'Ayda bir kez seyreltik sıvı gübre; kışın gübrelemeyi azaltın.',
        stages: 'Aktif büyüme döneminde hafif besleme yeterlidir.',
      },
      diseases: [
        {
          name: 'Kök Çürüklüğü',
          symptoms: 'Yapraklarda sararma ve dökülme, gövde dibinde kararma.',
          causes: 'Aşırı sulama ve kötü drenaj.',
          prevention: 'Toprağın kurumasına izin verin ve drenajı iyi saksı kullanın.',
        },
      ],
      pests: [
        {
          name: 'Örümcek Akarı',
          symptoms: 'Yapraklarda sararma ve ince ağ.',
          prevention: 'Düzenli kontrol ve yaprak nemlendirmesi.',
          control: 'Sabunlu su ile temizleyin.',
        },
      ],
      care: {
        pruning: 'Düzenli haset bitkiyi daha çok dallandırır; odunlaşmış dallardan haset edebilirsiniz.',
        leafCare: 'Eski yaprakları temizleyin; toz birikmesini önleyin.',
        general: 'Biberiye yavaş büyür; sabırlı olun. Kışın içeride serin bir yerde tutun.',
      },
      timeline: [
        { stage: 'Ekim/Dikim', duration: '1 gün', description: 'Çelik veya tohumlar saksıya ekilir.' },
        { stage: 'Kök Tutma', duration: '2-3 hafta', description: 'Çelikler köklenir.' },
        { stage: 'Vejetatif Gelişim', duration: '6-8 hafta', description: 'Bitki yavaşça büyür ve dallanır.' },
        { stage: 'Bakım', duration: 'Sürekli', description: 'Az sulama ve düzenli haset.' },
        { stage: 'Hasat', duration: '80-90. günden itibaren', description: 'Dallar kademeli toplanır.' },
      ],
    },
  },
  {
    id: 'kekik',
    name: 'Kekik',
    emoji: '🌿',
    image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Bitki',
    shortDescription:
      'Aromatik ve dayanıklı kekik, saksıda kolay yetişen, az su isteyen ve Akdeniz iklimine alışkın bir bitkidir.',
    growingModes: ['pot'],
    planting: {
      period: 'Mart - Mayıs aylarında tohum veya çelikle ekim yapılabilir.',
      temperature: 'Gelişim için 15-25°C idealdir.',
      conditions: 'Bol güneş ve iyi drenajlı ortam tercih edilmelidir.',
      spacing: 'Saksıda bitkiler arası 15-20 cm aralık bırakılmalıdır.',
    },
    soil: {
      type: 'Drenajı çok iyi, hafif kumlu-tınlı saksı toprağı.',
      ph: 'Yaklaşık 5.5 - 7.0 pH aralığı uygundur.',
      drainage: 'Mükemmel drenaj şarttır.',
      preparation: 'Torf, perlit ve kaba kum karışımı idealdir.',
    },
    irrigation: {
      requirement: 'Az su ister; toprağın kurumasına izin verin.',
      periods: 'Toprak tamamen kuruduğunda sulayın.',
      overwatering: 'Aşırı sulama kök çürüklüğüne yol açar.',
    },
    fertilization: {
      nutrients: 'Az gübreleme yeterlidir.',
      stages: 'Ayda bir kez seyreltik sıvı gübre yeterlidir.',
      general: 'Aşırı gübreleme aromayı azaltır.',
      soilAnalysis: 'Saksı yetiştiriciliğinde genelde gerekmez.',
    },
    diseases: [
      {
        name: 'Kök Çürüklüğü',
        symptoms: 'Yapraklarda sararma ve dökülme.',
        causes: 'Aşırı sulama.',
        prevention: 'Toprağın kurumasına izin verin.',
      },
    ],
    pests: [
      {
        name: 'Örümcek Akarı',
        symptoms: 'Yapraklarda sararma ve ince ağ.',
        prevention: 'Düzenli kontrol.',
        control: 'Sabunlu su ile temizleyin.',
      },
    ],
    harvest: {
      period: 'Ekimden 75-90 gün sonra hasat başlar.',
      maturitySigns: 'Bitki 15-20 cm boya ulaştığında haset edilebilir.',
      general: 'Çiçeklenmeden önce haset aromayı maksimize eder.',
    },
    timeline: [
      { stage: 'Ekim/Dikim', duration: '1 gün', description: 'Tohumlar saksıya ekilir.' },
      { stage: 'Çimlenme', duration: '14-21 gün', description: 'Tohumlar yavaşça çimlenir.' },
      { stage: 'Gelişim', duration: '50-70 gün', description: 'Bitki yavaşça büyür ve yayılır.' },
      { stage: 'Bakım', duration: 'Sürekli', description: 'Az sulama ve haset.' },
      { stage: 'Hasat', duration: '75-90. günden itibaren', description: 'Dallar kademeli toplanır.' },
    ],
    potGrowing: {
      light: {
        requirement: 'Bol güneş — günde en az 6 saat doğrudan güneş ışığı.',
        placement: 'Güney veya batı yönüne bakan pencere, güneşli balkon idealdir.',
      },
      watering: {
        requirement: 'Az su ister; toprağın tamamen kurumasına izin verin; genellikle 3-5 günde bir.',
        moistureCheck: 'Toprağın alt 3-4 cm\'i kurumuşsa sulayın.',
        overwatering: 'Aşırı sulama kök çürüklüğüne yol açar; asla saksı altlığında su bırakmayın.',
      },
      container: {
        size: 'En az 15-20 cm çapında saksı; sığ ve geniş saksı uygundur.',
        drainage: 'Mükemmel drenaj şarttır.',
        repotting: 'Yılda bir kez daha büyük saksıya aktarın.',
      },
      soil: {
        type: 'Drenajı çok iyi, hafif kumlu-tınlı saksı toprağı; torf + perlit + kum karışımı.',
        drainage: 'Kum veya perlit ekleyerek drenajı artırın.',
      },
      environment: {
        temperature: 'İdeal sıcaklık 15-25°C; kuru ve sıcak ortam sever.',
        conditions: 'Nemli ortamdan hoşlanmaz; havalandırmanın iyi olduğu yerler idealdir.',
      },
      fertilization: {
        schedule: 'Ayda bir kez seyreltik sıvı gübre.',
        stages: 'Aktif büyüme döneminde hafif besleme.',
      },
      diseases: [
        {
          name: 'Kök Çürüklüğü',
          symptoms: 'Yapraklarda sararma ve dökülme.',
          causes: 'Aşırı sulama ve kötü drenaj.',
          prevention: 'Toprağın kurumasına izin verin.',
        },
      ],
      pests: [
        {
          name: 'Örümcek Akarı',
          symptoms: 'Yapraklarda sararma ve ince ağ.',
          prevention: 'Düzenli kontrol.',
          control: 'Sabunlu su ile temizleyin.',
        },
      ],
      care: {
        pruning: 'Düzenli haset bitkiyi daha çok dallandırır; çiçeklenmeden önce haset aromayı maksimize eder.',
        leafCare: 'Eski ve sararan yaprakları temizleyin.',
        general: 'Kekik yavaş büyür; sabırlı olun. Kışın içeride serin ve aydınlık bir yerde tutun.',
      },
      timeline: [
        { stage: 'Ekim/Dikim', duration: '1 gün', description: 'Tohumlar saksıya ekilir.' },
        { stage: 'Çimlenme', duration: '2-3 hafta', description: 'Tohumlar yavaşça çimlenir.' },
        { stage: 'Vejetatif Gelişim', duration: '5-7 hafta', description: 'Bitki yavaşça büyür ve yayılır.' },
        { stage: 'Bakım', duration: 'Sürekli', description: 'Az sulama ve düzenli haset.' },
        { stage: 'Hasat', duration: '75-90. günden itibaren', description: 'Dallar kademeli toplanır.' },
      ],
    },
  },
  {
    id: 'cilek',
    name: 'Çilek',
    emoji: '🍓',
    image: 'https://images.pexels.com/photos/70746/red-strawberries-fresh-royalty-free.jpg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Meyve',
    shortDescription:
      'Tatlı ve aromatik çilek, saksıda yetiştiriciliğe uygun, meyve veren ve görsel olarak da keyifli bir bitkidir.',
    growingModes: ['pot'],
    planting: {
      period: 'Mart - Nisan veya Eylül - Ekim aylarında dikim yapılabilir.',
      temperature: 'Gelişim için 15-25°C idealdir.',
      conditions: 'Bol güneş ve iyi drenajlı ortam tercih edilmelidir.',
      spacing: 'Saksıda bitkiler arası 20-25 cm aralık bırakılmalıdır.',
    },
    soil: {
      type: 'Drenajı iyi, organik maddece zengin saksı toprağı.',
      ph: 'Yaklaşık 5.5 - 6.5 pH aralığı uygundur.',
      drainage: 'İyi drenaj şarttır.',
      preparation: 'Torf ve perlit karışımı kullanılabilir.',
    },
    irrigation: {
      requirement: 'Düzenli sulama ister; meyve döneminde su stresine duyarlıdır.',
      periods: 'Meyve gelişim döneminde düzenli nem önemlidir.',
      overwatering: 'Aşırı sulama meyve çürüklüğüne yol açabilir.',
    },
    fertilization: {
      nutrients: 'Potasyum ağırlıklı gübreleme meyve kalitesini artırır.',
      stages: '2 haftada bir sıvı gübre; çiçeklenme sonrası potasyum ağırlıklı.',
      general: 'Aşırı azot yaprak yerine meyve verimini azaltır.',
      soilAnalysis: 'Saksı yetiştiriciliğinde genelde gerekmez.',
    },
    diseases: [
      {
        name: 'Külleme',
        symptoms: 'Yapraklarda beyaz unlu tabaka.',
        causes: 'Nemli koşullar.',
        prevention: 'Hava sirkülasyonu sağlayın.',
      },
    ],
    pests: [
      {
        name: 'Sümüklü Böcek',
        symptoms: 'Meyvelerde yenik izleri.',
        prevention: 'Saksıyı yerden yüksekte tutun.',
        control: 'Bira tuzağı kullanabilirsiniz.',
      },
    ],
    harvest: {
      period: 'Dikimden 60-90 gün sonra hasat başlar.',
      maturitySigns: 'Meyvenin tam kırmızı renk alması ve aromanın belirginleşmesi.',
      general: 'Olgunlaşan meyveler hemen toplanmalıdır.',
    },
    timeline: [
      { stage: 'Ekim/Dikim', duration: '1 gün', description: 'Fideler saksıya dikilir.' },
      { stage: 'Kök Tutma', duration: '10-14 gün', description: 'Bitki saksıya alışır.' },
      { stage: 'Gelişim', duration: '30-40 gün', description: 'Bitki büyür ve çiçeklenir.' },
      { stage: 'Bakım', duration: 'Sürekli', description: 'Sulama ve gübreleme.' },
      { stage: 'Hasat', duration: '60-90. günden itibaren', description: 'Meyveler kademeli toplanır.' },
    ],
    potGrowing: {
      light: {
        requirement: 'Bol güneş — günde en az 6 saat doğrudan güneş ışığı.',
        placement: 'Güney veya batı yönüne bakan pencere, güneşli balkon idealdir.',
      },
      watering: {
        requirement: 'Düzenli sulama ister; toprağın nemli ama ıslak olmaması gerekir; genellikle 1-2 günde bir.',
        moistureCheck: 'Toprağın üst 2 cm\'i kurumuşsa sulayın.',
        overwatering: 'Aşırı sulama meyve çürüklüğüne yol açar; meyvelerin toprağa temas etmemesine dikkat edin.',
      },
      container: {
        size: 'En az 25-30 cm çapında saksı; çilek saksısı veya askı saksı idealdir.',
        drainage: 'Drenaj delikleri zorunludur.',
        repotting: 'Yılda bir kez toprak yenileyin.',
      },
      soil: {
        type: 'Drenajı iyi, organik maddece zengin saksı toprağı; torf + perlit karışımı.',
        drainage: 'Perlit ekleyerek drenajı artırın.',
      },
      environment: {
        temperature: 'İdeal sıcaklık 15-25°C; dondan kesinlikle koruyun.',
        conditions: 'Ani sıcaklık değişimlerinden koruyun.',
      },
      fertilization: {
        schedule: '2 haftada bir sıvı gübre; çiçeklenme sonrası potasyum ağırlıklı.',
        stages: 'Büyüme döneminde dengeli, meyve döneminde potasyum ağırlıklı.',
      },
      diseases: [
        {
          name: 'Külleme',
          symptoms: 'Yapraklarda beyaz unlu tabaka.',
          causes: 'Nemli koşullar.',
          prevention: 'Hava sirkülasyonu sağlayın; yaprakları kuru tutun.',
        },
      ],
      pests: [
        {
          name: 'Sümüklü Böcek',
          symptoms: 'Meyvelerde yenik izleri ve salgı.',
          prevention: 'Saksıyı yerden yüksekte tutun; kuru ortam sağlayın.',
          control: 'Bira tuzağı veya kuru talaş ile engelleyebilirsiniz.',
        },
      ],
      care: {
        pruning: 'Sürgünleri (koşucuları) kesin; meyve verimini artırır. Sararan yaprakları temizleyin.',
        leafCare: 'Meyvelerin toprağa temas etmemesi için altlığa saman veya talaş serin.',
        general: 'Çilek çok yıllık bitkidir; yılda bir kez toprak yenileyerek devam edebilirsiniz.',
      },
      timeline: [
        { stage: 'Ekim/Dikim', duration: '1 gün', description: 'Fideler saksıya dikilir.' },
        { stage: 'Kök Tutma', duration: '10-14 gün', description: 'Bitki saksıya alışır.' },
        { stage: 'Vejetatif Gelişim', duration: '3-4 hafta', description: 'Bitki büyür ve çiçeklenir.' },
        { stage: 'Meyve Gelişimi', duration: '3-4 hafta', description: 'Meyveler büyür ve kızarır.' },
        { stage: 'Hasat', duration: '60-90. günden itibaren', description: 'Meyveler kademeli toplanır.' },
      ],
    },
  },
  {
    id: 'aloe-vera',
    name: 'Aloe Vera',
    emoji: '🪴',
    image: 'https://images.pexels.com/photos/4503257/pexels-photo-4503257.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Sukulent',
    shortDescription:
      'Tıbbi ve kozmetik kullanımı olan aloe vera, saksıda çok az bakım isteyen, dayanıklı bir sukulent bitkisidir.',
    growingModes: ['pot'],
    planting: {
      period: 'İlkbahar veya yaz aylarında dikim için uygundur.',
      temperature: 'Gelişim için 18-30°C idealdir; 5°C altında zarar görür.',
      conditions: 'Sıcak, kuru ve çok aydınlık ortamlar tercih edilmelidir.',
      spacing: 'Saksıda tek bitki yeterlidir; 15-20 cm çap saksı önerilir.',
    },
    soil: {
      type: 'Drenajı çok iyi, kumlu-tınlı sukulent toprağı.',
      ph: 'Yaklaşık 6.0 - 7.0 pH aralığı uygundur.',
      drainage: 'Mükemmel drenaj şarttır; su birikmesi kök çürüklüğüne yol açar.',
      preparation: 'Kaktüs/sukulent toprağı veya torf + kaba kum karışımı idealdir.',
    },
    irrigation: {
      requirement: 'Çok az su ister; toprağın tamamen kurumasına izin verin.',
      periods: 'Yaz aylarında 7-10 günde bir, kış aylarında 2-3 haftada bir sulayın.',
      overwatering: 'Aşırı sulama en yaygın ölümlük nedenidir.',
    },
    fertilization: {
      nutrients: 'Çok az gübreleme yeterlidir.',
      stages: 'İlkbahar ve yaz aylarında ayda bir kez seyreltik sıvı gübre.',
      general: 'Aşırı gübrelemeden kaçının.',
      soilAnalysis: 'Saksı yetiştiriciliğinde gerekmez.',
    },
    diseases: [
      {
        name: 'Kök Çürüklüğü',
        symptoms: 'Yapraklarda yumuşama, sararma ve dökülme.',
        causes: 'Aşırı sulama ve kötü drenaj.',
        prevention: 'Toprağın tamamen kurumasına izin verin.',
      },
    ],
    pests: [
      {
        name: 'Unlu Bit',
        symptoms: 'Yapraklarda beyaz pamuksu tabaka.',
        prevention: 'Düzenli kontrol.',
        control: 'Sabunlu su ile temizleyin.',
      },
    ],
    harvest: {
      period: 'Bitki 1-2 yaşına ulaştığında yaprak hasat edilebilir.',
      maturitySigns: 'Dış yapraklar 15-20 cm boy ve kalınlaştığında haset edilebilir.',
      general: 'Dış yapraklardan başlayarak haset edilir.',
    },
    timeline: [
      { stage: 'Ekim/Dikim', duration: '1 gün', description: 'Fide veya yavru bitki saksıya dikilir.' },
      { stage: 'Kök Tutma', duration: '14-21 gün', description: 'Bitki saksıya alışır.' },
      { stage: 'Gelişim', duration: '3-6 ay', description: 'Bitki yavaşça büyür ve yeni yaprak çıkarır.' },
      { stage: 'Bakım', duration: 'Sürekli', description: 'Az sulama ve aydınlık ortam.' },
      { stage: 'Hasat', duration: '1-2 yaşından itibaren', description: 'Dış yapraklar kademeli toplanır.' },
    ],
    potGrowing: {
      light: {
        requirement: 'Bol aydınlık — günde en az 4-6 saat doğrudan veya filtrelenmiş güneş ışığı.',
        placement: 'Güney veya batı yönüne bakan pencere kenarı idealdir; doğrudan öğle güneşinden hafif koruyun.',
      },
      watering: {
        requirement: 'Çok az su ister; toprağın tamamen kurumasına izin verin; yaz aylarında 7-10 günde bir, kış aylarında 2-3 haftada bir.',
        moistureCheck: 'Toprağın alt 5 cm\'i tamamen kurumuşsa sulayın.',
        overwatering: 'Aşırı sulama en yaygın ölümlük nedenidir; saksı altlığında asla su bırakmayın.',
      },
      container: {
        size: 'En az 15-20 cm çapında saksı; geniş ve sığ saksı uygundur.',
        drainage: 'Mükemmel drenaj şarttır; drenaj delikleri ve kalın altlık tabakası kullanın.',
        repotting: 'Yılda bir kez daha büyük saksıya aktarın veya yavru bitkileri ayırın.',
      },
      soil: {
        type: 'Drenajı çok iyi, kumlu-tınlı sukulent toprağı; kaktüs toprağı veya torf + kaba kum karışımı.',
        drainage: 'Perlit veya kaba kum ekleyerek drenajı maksimuma çıkarın.',
      },
      environment: {
        temperature: 'İdeal sıcaklık 18-30°C; 5°C altında zarar görür.',
        conditions: 'Sıcak, kuru ve havalandırmanın iyi olduğu ortam idealdir; nemli yerlerden kaçının.',
      },
      fertilization: {
        schedule: 'İlkbahar ve yaz aylarında ayda bir kez seyreltik sıvı gübre; kışın gübrelemeyin.',
        stages: 'Aktif büyüme döneminde hafif besleme.',
      },
      diseases: [
        {
          name: 'Kök Çürüklüğü',
          symptoms: 'Yapraklarda yumuşama, sararma ve dökülme.',
          causes: 'Aşırı sulama ve kötü drenaj.',
          prevention: 'Toprağın tamamen kurumasına izin verin; drenajı iyi saksı kullanın.',
        },
      ],
      pests: [
        {
          name: 'Unlu Bit',
          symptoms: 'Yapraklarda beyaz pamuksu tabaka.',
          prevention: 'Düzenli kontrol.',
          control: 'Sabunlu su veya alkolle temizleyin.',
        },
      ],
      care: {
        pruning: 'Sararan ve zarar gören dış yaprakları kesin; sağlıklı dış yaprakları haset edebilirsiniz.',
        leafCare: 'Yaprakları tozdan temizleyin; nemli süngerle silin.',
        general: 'Aloe vera çok az bakım ister; en yaygın hata aşırı sulamadır. Yavru bitkileri (pups) ayırarak çoğaltabilirsiniz.',
      },
      timeline: [
        { stage: 'Ekim/Dikim', duration: '1 gün', description: 'Fide veya yavru bitki saksıya dikilir.' },
        { stage: 'Kök Tutma', duration: '2-3 hafta', description: 'Bitki saksıya alışır.' },
        { stage: 'Vejetatif Gelişim', duration: '3-6 ay', description: 'Bitki yavaşça büyür ve yeni yaprak çıkarır.' },
        { stage: 'Bakım', duration: 'Sürekli', description: 'Az sulama ve aydınlık ortam.' },
        { stage: 'Hasat', duration: '1-2 yaşından itibaren', description: 'Dış yapraklar kademeli toplanır.' },
      ],
    },
  },
];

export const getCropById = (id: string): Crop | undefined =>
  crops.find((crop) => crop.id === id);

export const getFieldCrops = (): Crop[] =>
  crops.filter((crop) => crop.growingModes.includes('field'));

export const getPotCrops = (): Crop[] =>
  crops.filter((crop) => crop.growingModes.includes('pot'));
