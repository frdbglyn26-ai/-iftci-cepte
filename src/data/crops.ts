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
      preparation: 'Dikimden önce toprak derin sürülmeli, yabancı otlardan temizlenmeli ve yanmış organik gübre ile zenginleştirilmelidir.',
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
  },
  {
    id: 'bugday',
    name: 'Buğday',
    emoji: '🌾',
    image: 'https://images.pexels.com/photos/33397323/pexels-photo-33397323.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Tahıl',
    shortDescription:
      'Türkiye tarımının temel taşlarından biri olan buğday, hem kışlık hem de yazlık olarak yetiştirilebilen, geniş adaptasyon yeteneğine sahip bir tahıldır.',
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
      'Sıcak iklim bitkisi olan biber, tatlı ve acı çeşitleriyle hem açık tarlada hem de örtü altında yetiştirilebilen popüler bir sebzedir.',
    planting: {
      period: 'Fide dikimi için Nisan - Mayıs, seraltı yetiştiricilikte daha erken dönemler uygundur.',
      temperature: 'En iyi gelişim 20-28°C arasında görülür; 15°C altı gelişimi yavaşlatır.',
      conditions: 'Bol güneş alan, rüzgardan korunaklı ve don riski geçmiş alanlar tercih edilmelidir.',
      spacing: 'Sıra arası 60-70 cm, sıra üzeri 30-40 cm aralık genel olarak önerilir.',
    },
    soil: {
      type: 'Organik maddece zengin, iyi havalanan tınlı topraklar tercih edilir.',
      ph: 'Yaklaşık 6.0 - 6.8 pH aralığı uygundur.',
      drainage: 'İyi drenaj gereklidir; kök çürüklüğü riskine karşı su birikintisinden kaçınılmalıdır.',
      preparation: 'Dikim öncesi toprak derin sürülmeli ve yanmış organik gübre ile zenginleştirilmelidir.',
    },
    irrigation: {
      requirement: 'Düzenli ve dengeli sulama ister; su stresi çiçek ve meyve dökümüne yol açabilir.',
      periods: 'Çiçeklenme ve meyve gelişim döneminde su ihtiyacı artar.',
      overwatering: 'Aşırı sulama kök çürüklüğüne ve mantar hastalıklarına zemin hazırlar.',
    },
    fertilization: {
      nutrients: 'Azot, fosfor, potasyum ile birlikte kalsiyum önemli rol oynar.',
      stages: 'Dikim öncesi taban gübrelemesi, gelişim döneminde dengeli azot-potasyum beslemesi uygulanır.',
      general: 'Aşırı azotlu gübreleme aşırı yaprak gelişimine, düşük meyve tutumuna yol açabilir.',
      soilAnalysis: 'Kesin gübre miktarları için toprak analizi yaptırılması önerilir.',
    },
    diseases: [
      {
        name: 'Bakteriyel Leke Hastalığı',
        symptoms: 'Yapraklarda küçük sulu koyu lekeler, meyvelerde kabarcıklı izler.',
        causes: 'Nemli hava koşulları ve bulaşık tohum kullanımı.',
        prevention: 'Sertifikalı tohum kullanımı ve ekim nöbeti önerilir.',
      },
      {
        name: 'Kök Çürüklüğü',
        symptoms: 'Bitkide solgunluk, kök ve gövde dibinde kararma.',
        causes: 'Aşırı nem ve drenajı kötü topraklar.',
        prevention: 'İyi drenaj sağlamak ve aşırı sulamadan kaçınmak önemlidir.',
      },
    ],
    pests: [
      {
        name: 'Yaprak Biti (Afit)',
        symptoms: 'Yapraklarda kıvrılma, yapışkan salgı ve bitki gelişiminde yavaşlama.',
        prevention: 'Doğal düşmanların korunması ve düzenli gözlem.',
        control: 'Yoğun görülmesi halinde bölgesel tarım kuruluşlarına danışılmalıdır.',
      },
      {
        name: 'Kırmızı Örümcek',
        symptoms: 'Yapraklarda solgunluk, ince ağ oluşumu ve sararma.',
        prevention: 'Düzenli nem takibi ve bitki sağlığının izlenmesi.',
        control: 'Yaygınlaşması durumunda uzman desteği alınması önerilir.',
      },
    ],
    harvest: {
      period: 'Dikimden yaklaşık 65-85 gün sonra, çeşide göre değişmekle birlikte hasat başlar.',
      maturitySigns: 'Meyve renginin yeşilden çeşide özgü rengine (kırmızı, sarı vb.) dönmesi.',
      general: 'Hasat kademeli olarak yapılır; düzenli toplama yeni meyve oluşumunu teşvik eder.',
    },
    timeline: [
      { stage: 'Toprak Hazırlığı', duration: '1-2 hafta', description: 'Toprak sürülür ve organik madde ile zenginleştirilir.' },
      { stage: 'Ekim/Dikim', duration: '1 gün', description: 'Fideler uygun aralıklarla toprağa dikilir.' },
      { stage: 'Çimlenme', duration: '7-14 gün', description: 'Tohumdan yetiştirmede çimlenme, fidede kök tutma gerçekleşir.' },
      { stage: 'Gelişim', duration: '35-50 gün', description: 'Bitki dallanır, çiçeklenmeye hazırlanır.' },
      { stage: 'Bakım', duration: 'Sürekli', description: 'Sulama, gübreleme ve gerektiğinde destekleme yapılır.' },
      { stage: 'Hasat', duration: '65-85. günden itibaren', description: 'Olgunlaşan meyveler kademeli olarak toplanır.' },
    ],
  },
  {
    id: 'salatalik',
    name: 'Salatalık',
    emoji: '🥒',
    image: 'https://images.pexels.com/photos/31737291/pexels-photo-31737291.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Sebze',
    shortDescription:
      'Hızlı gelişen ve yüksek su içeriğine sahip salatalık, hem açık tarlada hem de örtü altında yaygın olarak yetiştirilen bir sebzedir.',
    planting: {
      period: 'Açık tarlada Nisan - Haziran, seraltı yetiştiricilikte daha erken dönemler uygundur.',
      temperature: 'En iyi gelişim 18-28°C arasında görülür; düşük sıcaklıklara duyarlıdır.',
      conditions: 'Bol güneş alan, rüzgardan korunaklı ve don riski geçmiş alanlar tercih edilir.',
      spacing: 'Sıra arası 100-150 cm, sıra üzeri 30-40 cm aralık genel olarak uygulanır.',
    },
    soil: {
      type: 'Organik maddece zengin, hafif ve iyi havalanan topraklar tercih edilir.',
      ph: 'Yaklaşık 6.0 - 6.8 pH aralığı uygundur.',
      drainage: 'İyi drenaj gereklidir; kök bölgesinde su birikmesi istenmez.',
      preparation: 'Dikim öncesi toprak derin sürülmeli ve organik gübre ile desteklenmelidir.',
    },
    irrigation: {
      requirement: 'Yüksek su ihtiyacı vardır; düzenli sulama meyve kalitesini doğrudan etkiler.',
      periods: 'Çiçeklenme ve meyve gelişim döneminde sulama sıklığı artırılmalıdır.',
      overwatering: 'Aşırı sulama kök çürüklüğüne ve mildiyö benzeri hastalıklara zemin hazırlar.',
    },
    fertilization: {
      nutrients: 'Azot, fosfor ve potasyum dengeli şekilde ihtiyaç duyulur.',
      stages: 'Dikim öncesi taban gübrelemesi, meyve tutumundan itibaren düzenli üst gübreleme uygulanır.',
      general: 'Dengeli beslenme meyve şeklini ve tadını olumlu etkiler.',
      soilAnalysis: 'Doğru gübre programı için toprak analizi yaptırılması önerilir.',
    },
    diseases: [
      {
        name: 'Külleme',
        symptoms: 'Yapraklarda beyaz unumsu tabaka oluşumu.',
        causes: 'Kuru gündüz, nemli gece koşulları ve yoğun bitki örtüsü.',
        prevention: 'İyi hava sirkülasyonu ve dayanıklı çeşit seçimi önerilir.',
      },
      {
        name: 'Mildiyö',
        symptoms: 'Yaprak üstünde sarı köşeli lekeler, alt yüzeyde gri-mor küf.',
        causes: 'Yüksek nem ve serin gece sıcaklıkları.',
        prevention: 'Sulamanın sabah saatlerinde yapılması ve yaprakların ıslak kalma süresinin azaltılması.',
      },
    ],
    pests: [
      {
        name: 'Beyaz Sinek',
        symptoms: 'Yaprak altında küçük beyaz böcekler ve yapışkan salgı.',
        prevention: 'Sarı yapışkan tuzaklar ve düzenli gözlem.',
        control: 'Yoğun görülmesi halinde bölgesel tarım kuruluşlarına danışılmalıdır.',
      },
      {
        name: 'Kırmızı Örümcek',
        symptoms: 'Yapraklarda solgunluk, noktalanma ve ince ağ oluşumu.',
        prevention: 'Düzenli nem takibi ve bitki sağlığı kontrolü.',
        control: 'Yaygınlaşırsa uzman desteği alınması önerilir.',
      },
    ],
    harvest: {
      period: 'Dikimden yaklaşık 50-65 gün sonra hasat başlar.',
      maturitySigns: 'Meyvenin çeşide uygun boy ve renge ulaşması, kabuğun parlak ve sıkı olması.',
      general: 'Sık aralıklarla hasat yapılması yeni meyve oluşumunu teşvik eder.',
    },
    timeline: [
      { stage: 'Toprak Hazırlığı', duration: '1 hafta', description: 'Toprak sürülür ve organik madde ile zenginleştirilir.' },
      { stage: 'Ekim/Dikim', duration: '1 gün', description: 'Tohum veya fideler uygun aralıklarla toprağa yerleştirilir.' },
      { stage: 'Çimlenme', duration: '3-10 gün', description: 'Sıcak koşullarda hızlı çimlenme gerçekleşir.' },
      { stage: 'Gelişim', duration: '25-35 gün', description: 'Sarılıcı gövde ve yapraklar hızla gelişir.' },
      { stage: 'Bakım', duration: 'Sürekli', description: 'Sulama, destekleme ve gübreleme düzenli yapılır.' },
      { stage: 'Hasat', duration: '50-65. günden itibaren', description: 'Meyveler sık aralıklarla toplanır.' },
    ],
  },
  {
    id: 'aycicegi',
    name: 'Ayçiçeği',
    emoji: '🌻',
    image: 'https://images.pexels.com/photos/38712281/pexels-photo-38712281.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Yağlı Tohum',
    shortDescription:
      'Yağ üretiminde önemli bir yeri olan ayçiçeği, kurağa nispeten dayanıklı ve geniş tarla alanlarında yetiştirilen bir bitkidir.',
    planting: {
      period: 'Nisan - Mayıs ayları arasında ekim genel olarak yapılır.',
      temperature: 'Çimlenme için toprak sıcaklığının en az 8-10°C olması yeterlidir; gelişim için 20-25°C idealdir.',
      conditions: 'Açık, güneşli ve rüzgardan aşırı etkilenmeyen geniş alanlar tercih edilir.',
      spacing: 'Sıra arası 60-70 cm, sıra üzeri 25-30 cm aralık genel olarak uygulanır.',
    },
    soil: {
      type: 'Derin, iyi havalanan tınlı topraklar tercih edilir.',
      ph: 'Yaklaşık 6.0 - 7.5 pH aralığı uygundur.',
      drainage: 'İyi drenaj gereklidir; kök çürüklüğüne karşı su birikintisinden kaçınılmalıdır.',
      preparation: 'Ekim öncesi tarla derin sürülmeli ve tesviye edilmelidir.',
    },
    irrigation: {
      requirement: 'Kurağa nispeten dayanıklıdır ancak çiçeklenme döneminde suya duyarlıdır.',
      periods: 'Tomurcuklanma ve çiçeklenme dönemlerinde düzenli su desteği verim üzerinde belirleyicidir.',
      overwatering: 'Aşırı sulama kök gelişimini olumsuz etkileyebilir ve hastalık riskini artırabilir.',
    },
    fertilization: {
      nutrients: 'Azot, fosfor ve potasyumun yanı sıra bor eksikliğine dikkat edilmelidir.',
      stages: 'Ekimle taban gübrelemesi, gelişim döneminde azotlu üst gübreleme genel uygulamadır.',
      general: 'Dengeli beslenme tohum verimini ve yağ oranını olumlu etkiler.',
      soilAnalysis: 'Kesin gübre miktarları için toprak analizi yaptırılması önerilir.',
    },
    diseases: [
      {
        name: 'Sclerotinia (Beyaz Çürüklük)',
        symptoms: 'Gövde ve tabla üzerinde beyaz pamuksu küf, çürüme.',
        causes: 'Nemli hava koşulları ve yoğun bitki sıklığı.',
        prevention: 'Ekim nöbeti uygulanması ve dayanıklı çeşit seçimi önerilir.',
      },
      {
        name: 'Mildiyö',
        symptoms: 'Yapraklarda sararma, bodurlaşma ve gelişim geriliği.',
        causes: 'Yüksek nem ve bulaşık tohum kullanımı.',
        prevention: 'Sertifikalı tohumluk kullanımı ve ekim nöbeti önerilir.',
      },
    ],
    pests: [
      {
        name: 'Ayçiçeği Güvesi',
        symptoms: 'Tablada tohum içine zarar veren larva faaliyeti.',
        prevention: 'Düzenli arazi gözlemi ve erken tespit.',
        control: 'Yoğun görülmesi halinde bölgesel tarım kuruluşlarının önerileri takip edilmelidir.',
      },
      {
        name: 'Tel Kurdu',
        symptoms: 'Kök ve gövde dibinde zarar, fide kayıpları.',
        prevention: 'Ekim nöbeti ve toprak hazırlığı sırasında kontrol.',
        control: 'Yaygın görülmesi halinde uzman desteği alınması önerilir.',
      },
    ],
    harvest: {
      period: 'Ekimden yaklaşık 110-130 gün sonra hasat genel olarak yapılır.',
      maturitySigns: 'Tabla arkasının sarıdan kahverengiye dönmesi ve tohumların sertleşmesi.',
      general: 'Hasat genellikle biçerdöver ile yapılır; tohum nem oranı hasat zamanlamasında önemlidir.',
    },
    timeline: [
      { stage: 'Toprak Hazırlığı', duration: '1-2 hafta', description: 'Tarla derin sürülür ve tesviye edilir.' },
      { stage: 'Ekim/Dikim', duration: '1 gün', description: 'Tohumlar mibzer ile belirli aralıklarla ekilir.' },
      { stage: 'Çimlenme', duration: '7-12 gün', description: 'Uygun toprak sıcaklığında çimlenme gerçekleşir.' },
      { stage: 'Gelişim', duration: '2-3 ay', description: 'Gövde uzar, tabla oluşumu başlar.' },
      { stage: 'Bakım', duration: 'Sürekli', description: 'Gübreleme, yabancı ot ve hastalık kontrolü yapılır.' },
      { stage: 'Hasat', duration: '110-130. günden itibaren', description: 'Tablalar olgunlaştığında hasat edilir.' },
    ],
  },
  {
    id: 'sogan',
    name: 'Soğan',
    emoji: '🧅',
    image: 'https://images.pexels.com/photos/5318077/pexels-photo-5318077.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Sebze',
    shortDescription:
      'Serin iklim koşullarında iyi gelişen soğan, hem fide hem de fidan (set soğanı) yöntemiyle yetiştirilebilen dayanıklı bir sebzedir.',
    planting: {
      period: 'Sonbahar ekimi Eylül - Ekim, ilkbahar ekimi Şubat - Mart aylarında yapılabilir.',
      temperature: 'Çimlenme için 10-20°C uygun olup, baş bağlama döneminde gün uzunluğu belirleyici rol oynar.',
      conditions: 'Açık, güneşli ve iyi havalanan alanlar tercih edilir.',
      spacing: 'Sıra arası 25-30 cm, sıra üzeri 8-10 cm aralık genel olarak uygulanır.',
    },
    soil: {
      type: 'Hafif, kumlu-tınlı ve organik maddece zengin topraklar tercih edilir.',
      ph: 'Yaklaşık 6.0 - 6.8 pH aralığı uygundur.',
      drainage: 'İyi drenaj önemlidir; su birikintisi baş çürüklüğüne yol açabilir.',
      preparation: 'Toprak ince ve düzgün bir şekilde işlenmeli, taşlardan arındırılmalıdır.',
    },
    irrigation: {
      requirement: 'Düzenli fakat ölçülü sulama ister; baş bağlama döneminde su ihtiyacı artar.',
      periods: 'Hasada yaklaşırken sulama azaltılarak baş sertleşmesi desteklenir.',
      overwatering: 'Aşırı sulama baş çürüklüğüne ve depolama kalitesinde düşüşe neden olabilir.',
    },
    fertilization: {
      nutrients: 'Azot erken dönemde, fosfor ve potasyum baş bağlama döneminde önemlidir.',
      stages: 'Dikim öncesi taban gübrelemesi, gelişim döneminde bölünmüş üst gübreleme uygulanır.',
      general: 'Hasada yakın dönemde azotlu gübrelemenin azaltılması baş kalitesini artırır.',
      soilAnalysis: 'Doğru gübre programı için toprak analizi yaptırılması önerilir.',
    },
    diseases: [
      {
        name: 'Mildiyö',
        symptoms: 'Yapraklarda sararma, gri-mor küf tabakası ve erken kuruma.',
        causes: 'Yüksek nem ve serin hava koşulları.',
        prevention: 'İyi hava sirkülasyonu ve ekim nöbeti önerilir.',
      },
      {
        name: 'Baş Çürüklüğü',
        symptoms: 'Depoda ve tarlada başlarda yumuşama ve kötü koku.',
        causes: 'Aşırı nem ve hasat sırasında oluşan zedelenmeler.',
        prevention: 'İyi drenaj, dikkatli hasat ve uygun kurutma sağlanmalıdır.',
      },
    ],
    pests: [
      {
        name: 'Soğan Sineği',
        symptoms: 'Kökte ve baş içinde larva zararı, bitkide solgunluk.',
        prevention: 'Ekim nöbeti ve düzenli arazi gözlemi.',
        control: 'Yoğun görülmesi halinde bölgesel tarım kuruluşlarına danışılmalıdır.',
      },
      {
        name: 'Thrips',
        symptoms: 'Yapraklarda gümüşi lekeler ve büyüme geriliği.',
        prevention: 'Mavi yapışkan tuzaklarla takip ve düzenli gözlem.',
        control: 'Yaygınlaşması halinde uzman desteği alınması önerilir.',
      },
    ],
    harvest: {
      period: 'Dikimden yaklaşık 90-120 gün sonra hasat genel olarak yapılır.',
      maturitySigns: 'Yaprakların sararıp yatması baş olgunluğunun bir işaretidir.',
      general: 'Hasat sonrası soğanların iyi havalanan gölgede kurutulması depolama ömrünü uzatır.',
    },
    timeline: [
      { stage: 'Toprak Hazırlığı', duration: '1 hafta', description: 'Toprak ince işlenir ve düzenlenir.' },
      { stage: 'Ekim/Dikim', duration: '1 gün', description: 'Fide veya set soğanları uygun aralıkla dikilir.' },
      { stage: 'Çimlenme', duration: '7-14 gün', description: 'Kök tutma ve ilk yaprak çıkışı gözlemlenir.' },
      { stage: 'Gelişim', duration: '60-80 gün', description: 'Yaprak gelişimi ve baş oluşumu başlar.' },
      { stage: 'Bakım', duration: 'Sürekli', description: 'Sulama, gübreleme ve yabancı ot kontrolü yapılır.' },
      { stage: 'Hasat', duration: '90-120. günden itibaren', description: 'Yapraklar yattığında başlar hasat edilir.' },
    ],
  },
  {
    id: 'havuc',
    name: 'Havuç',
    emoji: '🥕',
    image: 'https://images.pexels.com/photos/35810240/pexels-photo-35810240.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Sebze',
    shortDescription:
      'Toprak altında gelişen kök yapısıyla havuç, serin iklim koşullarını seven ve derin işlenmiş toprak isteyen bir sebzedir.',
    planting: {
      period: 'İlkbahar ekimi Mart - Nisan, sonbahar ekimi Temmuz - Ağustos ayları uygundur.',
      temperature: 'Çimlenme için 8-20°C uygundur; kök gelişimi için 16-21°C idealdir.',
      conditions: 'Derin işlenmiş, taşsız ve iyi güneşlenen alanlar tercih edilir.',
      spacing: 'Sıra arası 25-30 cm, sıra üzeri 4-6 cm aralık genel olarak uygulanır.',
    },
    soil: {
      type: 'Derin, hafif, kumlu-tınlı ve taşsız topraklar en uygunudur.',
      ph: 'Yaklaşık 6.0 - 6.8 pH aralığı tercih edilir.',
      drainage: 'İyi drenaj gereklidir; ağır ve taşlı topraklar kök şeklini bozabilir.',
      preparation: 'Toprak derin ve ince işlenmeli, taş ve sert kesekler ayıklanmalıdır.',
    },
    irrigation: {
      requirement: 'Düzenli ve dengeli sulama ister; düzensiz sulama kök çatlamasına yol açabilir.',
      periods: 'Çimlenme döneminde toprağın nemli tutulması, kök gelişim döneminde düzenli sulama önemlidir.',
      overwatering: 'Aşırı sulama kök çürüklüğüne ve kalite kaybına neden olabilir.',
    },
    fertilization: {
      nutrients: 'Potasyum kök kalitesi için önemlidir; aşırı azottan kaçınılmalıdır.',
      stages: 'Ekim öncesi taban gübrelemesi, gelişim döneminde ölçülü üst gübreleme uygulanır.',
      general: 'Aşırı azotlu gübreleme dallanmış veya çatallı kök oluşumuna yol açabilir.',
      soilAnalysis: 'Doğru gübre programı için toprak analizi yaptırılması önerilir.',
    },
    diseases: [
      {
        name: 'Alternaria Yaprak Yanıklığı',
        symptoms: 'Yapraklarda koyu kahverengi lekeler ve kuruma.',
        causes: 'Nemli hava koşulları ve yoğun bitki örtüsü.',
        prevention: 'İyi hava sirkülasyonu ve ekim nöbeti önerilir.',
      },
      {
        name: 'Kök Çürüklüğü',
        symptoms: 'Köklerde yumuşama, renk değişimi ve kötü koku.',
        causes: 'Aşırı nem ve drenajı kötü topraklar.',
        prevention: 'İyi drenaj sağlamak ve aşırı sulamadan kaçınmak önemlidir.',
      },
    ],
    pests: [
      {
        name: 'Havuç Sineği',
        symptoms: 'Köklerde tünel şeklinde zarar ve bodur gelişim.',
        prevention: 'Ekim nöbeti ve düzenli arazi gözlemi.',
        control: 'Yoğun görülmesi halinde bölgesel tarım kuruluşlarına danışılmalıdır.',
      },
      {
        name: 'Nematodlar',
        symptoms: 'Köklerde şişkinlik, çatallanma ve gelişim geriliği.',
        prevention: 'Ekim nöbeti ve dayanıklı çeşit seçimi.',
        control: 'Yaygın görülmesi halinde toprak analiziyle birlikte uzman desteği alınmalıdır.',
      },
    ],
    harvest: {
      period: 'Ekimden yaklaşık 70-100 gün sonra hasat genel olarak yapılır.',
      maturitySigns: 'Kök çapının çeşide uygun büyüklüğe ulaşması ve renk doygunluğu.',
      general: 'Hasat sırasında köklerin kırılmaması için toprağın gevşetilerek çekilmesi önerilir.',
    },
    timeline: [
      { stage: 'Toprak Hazırlığı', duration: '1-2 hafta', description: 'Toprak derin ve ince işlenir, taşlardan arındırılır.' },
      { stage: 'Ekim/Dikim', duration: '1 gün', description: 'Tohumlar sıra usulü ve sık aralıkla ekilir.' },
      { stage: 'Çimlenme', duration: '10-20 gün', description: 'Tohumlar yavaş fakat düzenli şekilde çimlenir.' },
      { stage: 'Gelişim', duration: '50-70 gün', description: 'Yaprak gelişimiyle birlikte kök kalınlaşması başlar.' },
      { stage: 'Bakım', duration: 'Sürekli', description: 'Seyreltme, sulama ve yabancı ot kontrolü yapılır.' },
      { stage: 'Hasat', duration: '70-100. günden itibaren', description: 'Kökler olgunlaştığında topraktan çıkarılır.' },
    ],
  },
  {
    id: 'marul',
    name: 'Marul',
    emoji: '🥬',
    image: 'https://images.pexels.com/photos/89267/pexels-photo-89267.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Sebze',
    shortDescription:
      'Serin iklim koşullarını seven marul, hızlı gelişimi sayesinde yıl içinde birden fazla ürün alınabilen yapraklı bir sebzedir.',
    planting: {
      period: 'İlkbahar ekimi Mart - Nisan, sonbahar ekimi Eylül ayı uygundur; sıcak yaz aylarında gelişimi zayıflar.',
      temperature: 'En iyi gelişim 15-20°C arasında görülür; 25°C üzeri sıcaklıklar erken çiçeklenmeye yol açabilir.',
      conditions: 'Serin, iyi güneşlenen fakat aşırı sıcaktan korunaklı alanlar tercih edilir.',
      spacing: 'Sıra arası 30-40 cm, sıra üzeri 20-30 cm aralık genel olarak uygulanır.',
    },
    soil: {
      type: 'Organik maddece zengin, hafif ve nemi iyi tutan topraklar tercih edilir.',
      ph: 'Yaklaşık 6.0 - 6.8 pH aralığı uygundur.',
      drainage: 'İyi drenaj gereklidir; kök bölgesinde su birikmesi istenmez.',
      preparation: 'Toprak ince işlenmeli ve organik madde ile desteklenmelidir.',
    },
    irrigation: {
      requirement: 'Sık kökleri nedeniyle düzenli ve hafif sulama ister.',
      periods: 'Toprağın yüzeyde nemli tutulması, özellikle sıcak dönemlerde önemlidir.',
      overwatering: 'Aşırı sulama kök çürüklüğü ve yaprak hastalıklarına neden olabilir.',
    },
    fertilization: {
      nutrients: 'Azot yaprak gelişimi için özellikle önemlidir.',
      stages: 'Dikim öncesi taban gübrelemesi, gelişim döneminde hafif düzeyde azotlu üst gübreleme uygulanır.',
      general: 'Dengeli beslenme yaprakların gevrek ve lezzetli olmasını destekler.',
      soilAnalysis: 'Doğru gübre programı için toprak analizi yaptırılması önerilir.',
    },
    diseases: [
      {
        name: 'Mildiyö',
        symptoms: 'Yaprak altında gri-mor küf, üstte sarı lekeler.',
        causes: 'Yüksek nem ve serin hava koşulları.',
        prevention: 'İyi hava sirkülasyonu ve sulamanın sabah yapılması önerilir.',
      },
      {
        name: 'Kurşuni Küf (Botrytis)',
        symptoms: 'Yapraklarda ve gövdede gri küf tabakası ve çürüme.',
        causes: 'Yüksek nem ve yoğun bitki sıklığı.',
        prevention: 'Bitki aralıklarına dikkat edilmesi ve iyi havalandırma sağlanması önerilir.',
      },
    ],
    pests: [
      {
        name: 'Yaprak Biti (Afit)',
        symptoms: 'Yapraklarda kıvrılma ve yapışkan salgı.',
        prevention: 'Doğal düşmanların korunması ve düzenli gözlem.',
        control: 'Yoğun görülmesi halinde bölgesel tarım kuruluşlarına danışılmalıdır.',
      },
      {
        name: 'Salyangoz ve Sümüklü Böcek',
        symptoms: 'Yapraklarda düzensiz kenar yenikleri.',
        prevention: 'Nemli ve yoğun bitki örtüsünden kaçınmak, düzenli arazi temizliği.',
        control: 'Yoğun görülmesi halinde fiziksel önlemler ve uzman tavsiyesi değerlendirilmelidir.',
      },
    ],
    harvest: {
      period: 'Ekimden yaklaşık 45-65 gün sonra hasat genel olarak yapılır.',
      maturitySigns: 'Baş marulda sıkı ve dolgun baş oluşumu, yaprak marulda yeterli yaprak büyüklüğü.',
      general: 'Hasat serin saatlerde yapılmalı ve yapraklara zarar vermemeye özen gösterilmelidir.',
    },
    timeline: [
      { stage: 'Toprak Hazırlığı', duration: '3-5 gün', description: 'Toprak ince işlenir ve organik madde ile desteklenir.' },
      { stage: 'Ekim/Dikim', duration: '1 gün', description: 'Tohum veya fideler uygun aralıklarla toprağa yerleştirilir.' },
      { stage: 'Çimlenme', duration: '5-10 gün', description: 'Serin koşullarda tohumlar hızla çimlenir.' },
      { stage: 'Gelişim', duration: '25-35 gün', description: 'Yaprak sayısı ve baş oluşumu hızla artar.' },
      { stage: 'Bakım', duration: 'Sürekli', description: 'Düzenli hafif sulama ve yabancı ot kontrolü yapılır.' },
      { stage: 'Hasat', duration: '45-65. günden itibaren', description: 'Başlar veya yapraklar olgunlaştığında toplanır.' },
    ],
  },
];

export const getCropById = (id: string): Crop | undefined =>
  crops.find((crop) => crop.id === id);

export const searchCrops = (query: string): Crop[] => {
  const normalized = query.trim().toLocaleLowerCase('tr-TR');
  if (!normalized) return crops;
  return crops.filter((crop) =>
    crop.name.toLocaleLowerCase('tr-TR').includes(normalized)
  );
};
