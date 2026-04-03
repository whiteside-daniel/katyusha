// ── Translations ──────────────────────────────────────────────────────────────
// Each locale entry has:
//   ui      — static interface strings (HTML labels, buttons, panel titles)
//   phases  — overrides for the PHASES data object (partial; falls back to EN)
//   axisInfo — overrides for the AXIS_INFO modal content

window.TRANSLATIONS = {

// ── English ───────────────────────────────────────────────────────────────────
en: {
  ui: {
    introTitle:      "Polity Phase Graph",
    introDesc:       "Polity Phase Graph is an interactive political analysis framework built as a standalone JavaScript application. Moving beyond linear \"cycle of democracy\" models like Tytler's, it maps political development as a directed graph of ten attractor states, spanning Formation through Mature Stability, Autocratic Consolidation, Reform, Repression, and Terminal Decay. Includes explicit branching decision points, feedback loops, and historical examples at each node. Each phase is characterized along three axes (legitimacy, capacity, and distribution), drawn from Weber, Tilly, Fukuyama, and Acemoglu/Robinson, with the framework designed to surface the divergence between these axes (particularly the decoupling of coercive from administrative capacity in pathological phases) as a signal in itself. The tool is intended for various types of analysis: a polity, organization, society, or movement can locate itself on the map, investigate its branching options, and understand the feedback loops that are either stabilizing or destabilizing its current position.",
    introBtn:        "Try Polity Graph",
    appTitle:        "Polity Phase Map",
    appSubtitle:     "Click a node to inspect its diagnostic markers, branching options, and historical examples.",
    legendNormal:    "Normal transition",
    legendRare:      "Rare transition",
    legendDangerous: "Dangerous transition",
    pinMark:         "Mark as: We are here",
    pinned:          "Pinned: You are here",
    secMarkers:      "Diagnostic markers",
    secBranches:     "Branching options",
    secLoop:         "Key feedback loop",
    secExamples:     "Historical examples",
    axisLegitimacy:  "Legitimacy",
    axisCapacity:    "Capacity",
    axisDistribution:"Distribution",
    edgeLabels: {}
  }
},

// ── Turkish ───────────────────────────────────────────────────────────────────
tr: {
  ui: {
    introTitle:     "Siyasi Yapı Evresi Grafiği",
    introDesc:      "Siyasi Yapı Evresi Grafiği, bağımsız bir JavaScript uygulaması olarak geliştirilmiş etkileşimli bir siyasi analiz çerçevesidir. Tytler'ın 'demokrasi döngüsü' gibi doğrusal modellerin ötesine geçerek siyasi gelişimi on çekim noktasından oluşan yönlü bir grafik olarak haritalar: Kuruluş'tan Olgun İstikrar'a, Otokratik Pekişme'den Reform, Baskı ve Son Çözülme'ye uzanır. Her düğümde açık dallanma noktaları, geri bildirim döngüleri ve tarihsel örnekler içerir. Her evre Weber, Tilly, Fukuyama ve Acemoglu/Robinson'dan yararlanılarak üç eksen boyunca (meşruiyet, kapasite ve dağılım) tanımlanmış; özellikle patolojik evrelerdeki zorlayıcı ile idari kapasite ayrışması sinyal olarak öne çıkarılmıştır. Araç; bir siyasi yapı, örgüt, toplum ya da hareketin harita üzerindeki konumunu belirlemesine, dallanma seçeneklerini incelemesine ve mevcut konumunu istikrarlı kılan ya da dengesizleştiren geri bildirim döngülerini anlamasına yardımcı olmak amacıyla tasarlanmıştır.",
    introBtn:       "Grafiği Aç",
    appTitle:       "Siyasi Yapı Evresi Haritası",
    appSubtitle:    "Tanı işaretlerini, dallanma seçeneklerini ve tarihsel örnekleri incelemek için bir düğüme tıklayın.",
    legendNormal:   "Normal geçiş",
    legendRare:     "Nadir geçiş",
    legendDangerous:"Tehlikeli geçiş",
    pinMark:        "Biz buradayız olarak işaretle",
    pinned:         "Sabitlendi: Siz buradasınız",
    secMarkers:     "Tanı işaretleri",
    secBranches:    "Dallanma seçenekleri",
    secLoop:        "Temel geri bildirim döngüsü",
    secExamples:    "Tarihsel örnekler",
    axisLegitimacy: "Meşruiyet",
    axisCapacity:   "Kapasite",
    axisDistribution:"Dağılım",
    edgeLabels: {
      "imposed":            "dayatılmış",
      "negotiated":         "müzakere edilmiş",
      "no settlement":      "uzlaşı yok",
      "new attempt":        "yeni girişim",
      "autocratic character":"otokratik karakter",
      "elite capture":      "seçkin ele geçirme",
      "liberalization":     "liberalleşme",
      "authoritarian turn": "otoriter dönüş",
      "renewal loop":       "yenilenme döngüsü",
      "managed opening":    "yönetimli açılım",
      "reconstitution":     "yeniden kuruluş",
      "next cycle":         "sonraki döngü",
      "external reset":     "dışsal sıfırlama"
    }
  },

  axisInfo: {
    legitimacy: {
      title: "Meşruiyet",
      body: `<p>Meşruiyet, üç eksenin en köklü teorik geçmişine sahip olanıdır. Max Weber'in üç tipi — geleneksel, karizmatik ve yasal-ussal — sonraki çalışmaların neredeyse tamamının temelidir. Kalıcı iktidarın gönüllü uyumu gerektirdiği, salt baskıya dayanamayacağı fikri, siyaset biliminde konsensüse en yakın önermedir. Seymour Martin Lipset bunu 1950'lerde ve 60'larda ampirik olarak formüle etmiştir.</p>
<p>Bir hükümet yalnızca korku ile iktidarı elinde tutabilir; ancak baskı pahalı ve kırılgandır. Meşruiyet, ham gücü otoriteye dönüştüren şeydir — toplumun rejimin yalnızca uygulatma kapasitesine değil, <em>yönetme hakkına</em> sahip olduğunu kabul etmesi.</p>
<p><strong>Ölçek (0–5):</strong> 0 = salt baskı, gönüllü uyum yok; 5 = rejimin yönetme hakkına ilişkin geniş, çok kesimli kabul.</p>`
    },
    capacity: {
      title: "Kapasite",
      body: `<p>Kapasite öncelikle devlet inşası literatüründen gelir: Charles Tilly'nin savaşın devleti yarattığı tezi, Francis Fukuyama'nın siyasi düzen üzerine çalışmaları ve Soğuk Savaş sonrasında genişleyen "başarısız devlet" araştırmaları (Robert Rotberg ve diğerleri). Temel öngörü şudur: kapasitesiz meşruiyet boş bir kabuktur. Sevildiği hâlde güvenlik, vergi toplama ya da sözleşme yaptırımı sağlayamayan bir hükümet mümkündür.</p>
<p>Kapasitenin tek bir şey mi yoksa birkaç ayrı boyut mu olduğu tartışmalıdır. Zorlayıcı kapasite (şiddet tekeli), idari kapasite (bürokratik erişim) ve mali kapasite (vergi ve harcama gücü) birbirinden anlamlı biçimde farklıdır ve her zaman birlikte hareket etmez.</p>
<p><strong>Ölçek (0–5):</strong> 0 = devlet temel işlevleri yerine getiremiyor; 5 = idari, mali ve zorlayıcı kapasite yüksek ve birlikte işliyor.</p>`
    },
    distribution: {
      title: "Dağılım",
      body: `<p>Dağılım en tartışmalı eksendir. Mancur Olson'ın kolektif eylem mantığı, Acemoglu ve Robinson'ın kapsayıcı ile çıkarımcı kurumlar çerçevesi (<em>Ulusların Düşüşü</em>) ve devletin nihayetinde kime hizmet ettiğine dair eski yapısal gelenekler gibi tam olarak uzlaşmayan birden fazla geleneği bir araya getirir.</p>
<p>Ampirik kayıtlar, yüksek oranda çıkarımcı rejimlerin uzun vadede daha az istikrarlı olduğunu desteklemektedir; ancak nedensel mekanizmalar tartışmalıdır. Kavram da özünde muğlaktır — <em>neyin</em> dağılımı? Servet? Kamu hizmetleri? Siyasi söz hakkı? Haklar? Bunlar her zaman birlikte hareket etmez ve farklı teorik gelenekler onları farklı ağırlıklandırır.</p>
<p><strong>Ölçek (0–5):</strong> 0 = yüksek çıkarımcı, faydalar küçük bir seçkinde yoğunlaşmış; 5 = faydalar toplumsal gruplar arasında geniş ölçüde paylaşılmış.</p>`
    }
  },

  phases: {
    formation: {
      label: "Kuruluş",
      desc: "Bir siyasi yapı, kurucu çatışma, devrim veya müzakere yoluyla ortaya çıkar. Meşruiyet tartışmalıdır; kurumlar ince ve semboliktir; karizmatik kurucular hakimdir. Burada yapılan seçimler nesiller boyu yankılanır.",
      markers: [
        "Kurucu belge ya da mit yazılmaktadır",
        "Rakip gruplar hâlâ otorite konusunda çekişmektedir",
        "Yüksek sembolik siyaset, düşük idari kapasite",
        "Dış tehditler sıklıkla mevcuttur (savaşlar, müdahaleler)",
        "Karizmatik kurucular hakimdir — kurumlar zayıftır"
      ],
      branches: [
        { label: "Kurucu uzlaşıya varıldı", severity: "positive", desc: "Gruplar, müzakere yoluyla ya da dayatmayla otorite çerçevesi üzerinde birleşir.", target: "settlement" },
        { label: "Uzlaşı yok", severity: "danger", desc: "Hiçbir grup yeterli üstünlüğü sağlayamaz; siyasi yapı oluşmadan parçalanır.", target: "fragmentation" }
      ],
      loop: "Kurucu mitler kendi kendini pekiştiren bir hal alır. Anayasayı hangi grup yazarsa, nesiller boyunca 'meşru' olanı o belirler. Karşı döngü: dışlanan gruplar zaman içinde paralel meşruiyet inşa eder.",
      examples: [
        "Amerikan Devrimi (1776) → anayasal cumhuriyet",
        "Fransız Devrimi (1789) → 80 yıl salınım sürdü",
        "Weimar Almanyası (1919) → aşırı baskı altında demokratik kuruluş",
        "Sovyet kuruluşu (1917–22) → güçlü adam yolu",
        "Hindistan (1947) → bölünme baskısı altında federal yol"
      ],
      theory: "Yeni bir siyasi birimin ortaya çıktığı andır. Devrim, bağımsızlık, ayrılma ya da önceki yapının çöküşüyle gerçekleşir. Meşruiyet tamamen yansıtılmıştır; performansa değil vaatlere ve kurucu mitlere dayanır. Merkezi değişken, herhangi bir grubun koşulları tek taraflı olarak dayatacak kadar güçlü bir üstünlük sağlayıp sağlayamayacağı ya da rakipler arasındaki kabaca eşitliğin müzakereli kısıtlamayı zorunlu kılıp kılmadığıdır. Bu anda yazılan kurallar, meşru siyasi aktörün kim olduğuna ilişkin varsayımları kodlar ve bu varsayımlar olağanüstü ölçüde kalıcıdır.",
      citation: "Acemoglu, D., & Robinson, J. A. (2012). Why nations fail: The origins of power, prosperity, and poverty. Crown Business."
    },

    settlement: {
      label: "Uzlaşı?",
      desc: "Kurucu uzlaşı gruplar arasında müzakere yoluyla mı, yoksa baskın bir tarafça dayatılarak mı sağlandı? Bu seçim pekişmenin niteliğini — ve pekişmenin mümkün olup olmadığını — belirler.",
      markers: [
        "Ana grupların kabul ettiği bir kurucu belge var mı?",
        "Galip gelen grup rakiplerine tavizler verdi mi?",
        "Dışlanan gruplar uzlaşıyı engelleyecek kapasitede mi?",
        "Gelecekteki anlaşmazlıkları çözmek için tanınmış bir süreç var mı?",
        "Başlıca silahlı aktörlerin tamamı silah bırakma veya entegrasyonu kabul etti mi?"
      ],
      branches: [
        { label: "Müzakere edilmiş → demokratik karakter", severity: "positive", desc: "Rakip gruplar ortak bir çerçeveyi benimser; pekişme meşru bir nitelik taşır.", target: "consolidation" },
        { label: "Dayatılmış → otokratik karakter", severity: "danger", desc: "Baskın grup koşulları dikte eder; pekişme dışlayıcı bir çizgide ilerler.", target: "consolidation" },
        { label: "Uzlaşı yok → parçalanma", severity: "danger", desc: "Hiçbir grup yeterli üstünlüğü sağlayamaz; siyasi yapı bütünleşemez.", target: "fragmentation" }
      ],
      loop: "Uzlaşının niteliği yola bağlıdır. Müzakere edilmiş uzlaşılar gelecekteki müzakereler için emsal oluşturur; dayatılmış uzlaşılar dışlamayı normalleştirir. İkisi de istikrarlı siyasi yapılar üretebilir — ama çok farklı türde.",
      examples: [
        "Philadelphia Konvansiyonu (1787) — müzakere edilmiş",
        "Bolşevik Ekim Devrimi (1917) — dayatılmış",
        "Versailles / Weimar (1919) — baskı altında müzakere edilmiş",
        "Afganistan Bonn Anlaşması (2001) — müzakere edilmiş ama dışarıdan dayatılmış"
      ]
    },

    fragmentation: {
      label: "Parçalanma",
      desc: "Hiçbir grup uzlaşıyı dayatacak yeterliliğe ulaşamadı; hiçbir koalisyon uzlaşıya yetecek genişliğe sahip değildi. Siyasi yapı çöküyor: rakip otoriteler, ağalık ya da bölünme. Yeni bir kuruluş girişimi mümkün ama garanti değil.",
      markers: [
        "Birbiriyle bağdaşmayan taleplere sahip birden fazla silahlı grup",
        "Tanınmış merkezi otorite yok",
        "Bölge, gruplara/etnik veya bölgesel hatlar boyunca parçalanmış",
        "Rakip grupları destekleyen dış aktörler",
        "Birbiriyle çatışan otoriteler arasında sıkışmış ya da yerinden edilmiş nüfus"
      ],
      branches: [
        { label: "Yeni kuruluş girişimi", severity: "info", desc: "Karşılıklı tükenme ya da dış baskı, uzlaşı için yeni bir pencere açıyor.", target: "formation" }
      ],
      loop: "Parçalanma, sapkın bir anlamda genellikle istikrarlıdır: her grup, nihayetinde kazanabileceğine inandığı sürece savaşmaya devam etmekte çıkar görür. Yalnızca karşılıklı tükenme, dış garantörler ya da belirleyici bir askeri sonuç bu çıkmazı kırar.",
      examples: [
        "Lübnan iç savaşı (1975–90)",
        "Somali (1991–günümüz)",
        "Libya (2011–günümüz)",
        "Afganistan (1989–2001)"
      ]
    },

    consolidation: {
      label: "Pekişme",
      desc: "Grup çatışması, baskın bir koalisyonun idari kapasite inşa etmeye başlayabileceği ölçüde çözüldü. Yeni düzen temel güvenlik ve hizmetleri sunduğça meşruiyet artar. Bu evrenin niteliği — demokratik ya da otokratik — kurucu uzlaşıda belirlenir.",
      markers: [
        "Tek bir yönetici koalisyon baskın ama tartışılmaz değil",
        "Bürokratik altyapı inşa ediliyor",
        "Rakipleri çıkar sağlayarak yönetime dahil etme ağları genişliyor",
        "Dış tanınırlık aranıyor ve kısmen elde ediliyor",
        "Ulusal kimlik anlatıları etkin biçimde yaygınlaştırılıyor"
      ],
      branches: [
        { label: "Olgun istikrar", severity: "positive", desc: "Kurumlar istikrar kazanır; muhalefet meşru alan elde eder.", target: "mature" },
        { label: "Otokratik pekişme", severity: "warning", desc: "Kapasite dışlamaya yönelir; uzlaşının demokratik niteliği terk edilir.", target: "autocratic" }
      ],
      loop: "Başarılı pekişme kapasiteyi artırır, bu geliri artırır, bu da daha fazla kapasiteyi finanse eder — erdemli bir döngü. Patronaj maliyetleri geliri aştığında ya da dışlanan gruplar kritik kitleye ulaştığında tersine döner.",
      examples: [
        "Meiji Japonya'sı (1868–90) → hızlı merkezileşme",
        "İkinci Dünya Savaşı sonrası Güney Kore (1950'ler–60'lar) → kalkınmacı devlet",
        "ANC Güney Afrika (1994–2008) → yönetimli geçiş",
        "Atatürk dönemi Türkiye (1923–38)"
      ],
      theory: "Kurucu koalisyon galip geldi; şimdi kurucuların ötesinde yaşayacak kurumlar inşa etmek zorundadır. Mahkemeler, bürokrasiler, vergi sistemleri ve ardıllık normlarının kişisel sadakat ağlarının yerini alması gerekir. Kritik tanı sorusu şudur: baskın grup, kendilerini de bağlayan tarafsız kurumlar mı — yoksa kurucu lideri merkeze alan kişisel kurumlar mı inşa ediyor? Linz ve Stepan'ın formülasyonu en keskin olanıdır: demokrasi pekiştiğinde 'tek geçerli oyun' haline gelir — davranışsal, tutumsal ve anayasal olarak. Bu evrenin tehlikesi, grubu devletle karıştırmaktır.",
      citation: "Linz, J. J., & Stepan, A. (1996). Problems of democratic transition and consolidation. Johns Hopkins University Press."
    },

    mature: {
      label: "Olgun İstikrar",
      desc: "Siyasi yapı yüksek meşruiyet, işlevsel kapasite ve görece geniş dağılım elde etmiştir. Kurumlar öngörülebilir biçimde işlemekte; barışçıl iktidar devirleri gerçekleşmektedir. Başlıca riskler seçkin ele geçirme ve rehavettir.",
      markers: [
        "Barışçıl iktidar devirleri rutin hale gelmiş",
        "Bağımsız yargı ve özgür basın işliyor",
        "Vergi tabanı geniş ve uyum oranı yüksek",
        "Sivil toplum kuruluşları özgürce faaliyet gösteriyor",
        "Politika anlaşmazlıkları kurumlar aracılığıyla yönetiliyor"
      ],
      branches: [
        { label: "Reform / uyum", severity: "positive", desc: "Kurumlar meşruiyeti koruyarak yeni zorluklara güncellenir.", target: "reform" },
        { label: "Gerilim / aşırı yayılma", severity: "warning", desc: "Dış şoklar ya da seçkin çıkarcılığı artı değeri aşındırır.", target: "strain" },
        { label: "Seçkin ele geçirme (nadir)", severity: "danger", desc: "Kurumsal korumalar içeriden boşaltılır; geri çekilme başlar.", target: "autocratic" }
      ],
      loop: "Yüksek meşruiyet vergilendirmeyi mümkün kılar; bu kapasiteyi finanse eder; bu hizmetleri sunar; bu da meşruiyeti pekiştirir. Bu döngüyü herhangi bir noktada kırmak tüm yapıyı zayıflatır.",
      examples: [
        "Savaş sonrası Batı Avrupa (1950–90)",
        "Amerika Birleşik Devletleri (1945–73)",
        "Botsvana (1966–günümüz) — Afrika'da istisna",
        "Kosta Rika (1949–günümüz)"
      ],
      theory: "Kurumlar, stresin altında hayatta kaldıklarını kanıtlamıştır. İktidar nesiller boyunca barışçıl biçimde el değiştirir. Vatandaşlar rejimin meşruiyetini içselleştirmiştir ve muhalefet bile sadık kalmaktadır: isyan etmek yerine seçimi kaybeder. Bu evre, siyaset teorisinin çoğunun varsaydığı ama az sayıda yapının uzun süre sürdürebildiği noktadır. Fukuyama'nın kritik içgörüsü şudur: olgun istikrar kendi çöküş mekanizmasını barındırır — başarılı kurumlar rehaveti doğurur, seçkinler kurumları koruyacakları çerçeveler yerine ele geçirecekleri kaynaklar olarak görmeye başlar ve 'yeniden patrimonyelleşme' (kişiselleştirilmiş, patronaj temelli siyasete dönüş) içeriden yerleşir.",
      citation: "Fukuyama, F. (2014). Political order and political decay. Farrar, Straus and Giroux."
    },

    autocratic: {
      label: "Otokratik Pekişme",
      desc: "Otorite tek bir lider ya da partide yoğunlaşmış. Kapasite, destekçileri ödüllendirmek ve muhalefeti cezalandırmak için seçici biçimde kullanılıyor. Meşruiyet rızaya değil performansa, milliyetçiliğe ya da korkuya dayanıyor.",
      markers: [
        "Mahkemeler ve yasama organı yürütmeye bağımlı kılınmış",
        "Muhalefet partileri yasaklanmış ya da etkisiz hale getirilmiş",
        "Hukukun rakiplere karşı seçici uygulaması",
        "Devlet medyası bilgi ortamına hakimdir",
        "Kaynak dağılımını iç/dış ayrımı belirliyor"
      ],
      branches: [
        { label: "Baskı / donma", severity: "danger", desc: "Kapasite içe döner; muhalifler ortak edilmek yerine bastırılır.", target: "repression" },
        { label: "Gerilim / aşırı yayılma", severity: "warning", desc: "Aşırı yayılma ya da seçkin çatışması otokratik kapasiteyi aşındırır.", target: "strain" },
        { label: "Liberalleşme (nadir)", severity: "positive", desc: "Seçkin bölünmesi ya da ekonomik başarısızlık müzakereli açılımı zorlar.", target: "mature" }
      ],
      loop: "Yoğunlaşmış güç daha hızlı kararları mümkün kılar, bu erken kazanımlar üretebilir, bu da daha fazla yoğunlaşmayı meşrulaştırır. Partizan ağlar çöktüğünde, seçkin kaçışı hızlandığında ya da performans başarısız olduğunda tersine döner.",
      examples: [
        "Putin dönemi Rusya (2000–günümüz)",
        "Orbán dönemi Macaristan (2010–günümüz)",
        "Venezuela (2013–günümüz)",
        "Erdoğan dönemi Türkiye (2014–günümüz)",
        "Singapur (1965–90) — yüksek kapasiteli varyant"
      ],
      theory: "Tek bir aktör ya da küçük bir grup rakip güç merkezlerini tasfiye etmiştir. Devlet aygıtı kişiselleştirilmiştir — kurumlar vardır ama hukuka değil, hükmedene hizmet eder. Svolik, tüm otokrasilerin yönetmesi gereken iki temel sorunu tanımlar: otoriter denetim (halktan gelen tehditleri yönetmek) ve otoriter güç paylaşımı (seçkin koalisyondan gelen tehditleri yönetmek). Bağımsız bir otorite anlaşmaları yaptırıma bağlayamadığından, şiddet her zaman başvurulan nihai hakemdir. Bu evre şaşırtıcı biçimde istikrarlı olabilir; ancak istikrar uyum yeteneği pahasına satın alınır: liderliğe ulaşan bilgi sistematik biçimde çarpıtılır, ardıllık varoluşsal ölçüde tehlikelidir ve problem çözme kapasitesi bozulurken zorlayıcı kapasite yüksek kalır.",
      citation: "Svolik, M. W. (2012). The politics of authoritarian rule. Cambridge University Press."
    },

    strain: {
      label: "Gerilim / Aşırı Yayılma",
      desc: "Siyasi yapı aşırı yayılmış — askeri, mali ya da toplumsal olarak. Kapasite taahhütlere kıyasla düşüyor. Meşruiyet aşınıyor. Sistem, eş zamanlı olarak karşılayamayacağı baskılarla karşı karşıya.",
      markers: [
        "Siyasi taahhütleri sürdürmek için açık finansman",
        "Kurumlara duyulan kamuoyu güveni ölçülebilir biçimde düşüyor",
        "Seçkin grupları açık ya da gizli çatışma içinde",
        "Çevre bölgeler ya da gruplar kopuyor",
        "Politika başarısızlıkları kamuoyuna açık hale geliyor"
      ],
      branches: [
        { label: "Reform", severity: "positive", desc: "Liderlik aşırı yayılmayı kabul eder ve çekilmeyi müzakere eder.", target: "reform" },
        { label: "Otoriter dönüş", severity: "warning", desc: "Seçkinler sıra düzeni kurar; hesap verebilirliği önlemek için muhalefet suç kapsamına alınır.", target: "autocratic" },
        { label: "Kriz / çöküş", severity: "danger", desc: "Birikmiş baskılar patlar; devlet kilit işlevlerin kontrolünü kaybeder.", target: "crisis" }
      ],
      loop: "Gerilim meşruiyeti azaltır; bu gönüllü uyumu azaltır; bu geliri azaltır; bu kapasiteyi azaltır; bu da gerilimi derinleştirir. Çıkış, dış şok ya da liderlik değişikliği olmaksızın nadiren gerçekleşen güvenilir bir yeni uzlaşı gerektirir.",
      examples: [
        "Geç Roma Cumhuriyeti (M.Ö. 133–31)",
        "XVI. Louis dönemi Fransa (1787–89)",
        "Sovyetler Birliği (1985–91)",
        "Amerika Birleşik Devletleri (2016–günümüz, tartışmalı)"
      ],
      theory: "Siyasi yapının maliyetleri onu sürdürme kapasitesini aşıyor — askeri aşırı yayılma, mali kriz, seçkin çatışması, demografik baskı ya da birikmiş meşruiyet açıkları. Bu, neredeyse her siyasi yapının geçtiği en önemli tanısal evredir; önemli olan, kurumların kırılma yaşanmadan yörüngeyi yeniden yönlendirmeye yetecek sağlamlıkta olup olmadığıdır. Gerilim evresi kendiliğinden güçlenir: mali baskı hizmet kesintilerini zorunlu kılar; bu meşruiyeti aşındırır; bu muhalefeti artırır; bu daha fazla zorlayıcı harcama gerektirir; bu da mali baskıyı derinleştirir. Goldstone'un yapısal modeli, gerilimi krize dönüştüren üç eş zamanlı koşulu saptar: devlet gelir krizi, seçkin parçalanması ve harekete geçirilebilir bir halk tabanı — her biri gerekli, hiçbiri tek başına yeterli değil.",
      citation: "Goldstone, J. A. (1991). Revolution and rebellion in the early modern world. University of California Press."
    },

    reform: {
      label: "Reform / Uyum",
      desc: "Seçkinler, mevcut uzlaşının başarısız olduğunu kabul eder ve meşruiyeti yeniden tesis etmek için güç ya da kaynakları yeniden dağıtarak yeni bir uzlaşı müzakere eder. Seçkinlerin kısa vadeli kayıpları kabullenmesini gerektirdiğinden nadirdir.",
      markers: [
        "Seçkin destekli tavizler yükselen gruplara yapılıyor",
        "Anayasal ya da seçim reformu sürecinde",
        "Yeniden dağılım ya da yolsuzlukla mücadele ivme kazanıyor",
        "Eski grup sınırlarını aşan yeni koalisyonlar",
        "Uluslararası modeller ya da baskı rol oynuyor"
      ],
      branches: [
        { label: "Yenilenmiş olgunluk (nadir)", severity: "positive", desc: "Reform meşruiyeti yeniden tesis eder; siyasi yapı daha üst düzeyde istikrar kazanır.", target: "mature" },
        { label: "Yönetimli ardıllık", severity: "info", desc: "Reform düzenli bir liderlik geçişinin zeminini hazırlar.", target: "succession" }
      ],
      loop: "Güvenilir reform beklentileri yükseltir; bu da reform başarısız olursa siyasi maliyeti artırır. Reform duraksarsa, meşruiyet vaad edilmeden öncekinden daha hızlı düşebilir. Başarı, söylemle somut yeniden dağılımın örtüşmesini gerektirir.",
      examples: [
        "New Deal ABD (1933–38)",
        "Güney Afrika geçişi (1990–94)",
        "İspanya Geçişi (1975–82)",
        "Britanya Reform Yasaları (1832, 1867)"
      ],
      theory: "Kurumlar kırılmadan eğilir. Siyasi yapı bir şoku — ekonomik, demografik, askeri ya da meşruiyet temelli — absorbe eder ve yeni kurallar, yeni koalisyonlar ya da yeniden dağıtılmış güçle ortaya çıkar. Bu en nadir ve en az teorileştirilmiş yoldur; birlikte elde edilmesi güç iki eş zamanlı koşul gerektirir: seçkinlerin kısa vadeli kayıpları üstlenme isteği ve reformu zorunlu kılacak güvenilir halk baskısı. Hirschman'ın çerçevesi mekanizmayı açıklar: çıkış mevcut olmadığında ya da maliyetli olduğunda, ses akılcı strateji haline gelir — reform, tam da güvenilir alternatifin daha kötü bir şey olduğu anlarda gerçekleşir. Bu tehdit olmadan, seçkinlerin reform maliyetlerini üstlenmeye teşviki yoktur.",
      citation: "Hirschman, A. O. (1970). Exit, voice, and loyalty. Harvard University Press."
    },

    repression: {
      label: "Baskı / Donma",
      desc: "Devlet düzeni öncelikle meşruiyet değil, zorlama yoluyla sürdürüyor. Kapasite nüfusa karşı içe yönelik olarak kullanılıyor. Kurumlar donmuş; uyum, statükodan yararlananlar tarafından engelleniyor.",
      markers: [
        "Siyasi muhaliflerin toplu tutuklanması ya da sürgünü",
        "Gözetim aygıtı günlük yaşama hâkim",
        "Ekonomik hareketlilik siyasi bağlantılara göre engelleniyor",
        "Nominal kurumlar (seçimler, mahkemeler) göstermelik",
        "Genç nüfusun göçü hızlanıyor"
      ],
      branches: [
        { label: "Son çözülme", severity: "danger", desc: "Zorlama sürdürülemez hale gelir; devlet içten boşalır.", target: "decay" },
        { label: "Kriz / çöküş", severity: "danger", desc: "Ani bir halk ayaklanması ya da seçkin ihaneti sistemi kırar.", target: "crisis" },
        { label: "Yönetimli açılım (nadir)", severity: "positive", desc: "Seçkin darbesi ya da ardıllık bir reform penceresi açar.", target: "mature" }
      ],
      loop: "Baskı geri bildirimi engeller; sorunlar görünmeden birikir. Yüzeye çıktıklarında, devletin onları absorbe edecek meşru bir kanalı yoktur. Zorlayıcı kapasitenin kendisi de atıflar özel çıkar amacıyla kullanıldıkça körelmektedir.",
      examples: [
        "SSCB Brejnev dönemi (1968–82)",
        "Doğu Almanya (1950–89)",
        "Kuzey Kore (1990–günümüz)",
        "Mugabe dönemi Zimbabve (2000–17)"
      ],
      theory: "Rejim gerilime uyum yerine sıkılaştırmayla yanıt verir. Kurumlar yönetici koalisyon etrafında kireçlenir. Sistem kırılgan hale gelir: zorlayıcı kapasite yüksek kalırken problem çözme ve uyum kapasitesi çöker. Levitsky ve Ziblatt mekanizmayı demokratik bağlamlarda belgeler — karşılıklı hoşgörü ve kurumsal çekimsenmenin erozyonu — ama aynı dinamik otokrasilerde daha kesin bir sonuçla işler: reform grubu tasfiye edildikten sonra, yalnızca dış şok ya da seçkin ihaneti değişimi üretebilir. Karakteristik belirti, liderliğe ulaşan bilginin yalnızca süzülmekle kalmayıp sistematik biçimde tahrif edilmesidir.",
      citation: "Levitsky, S., & Ziblatt, D. (2018). How democracies die. Crown Publishing."
    },

    crisis: {
      label: "Kriz / Çöküş",
      desc: "Devlet işlevleri çökmüş. Meşruiyet ve kapasite neredeyse sıfırda. Birden fazla silahlı aktör toprak üzerinde çekişiyor. Siyasi yapı bir birim olarak var olmaktan çıkabilir ya da yalnızca isim olarak var olabilir.",
      markers: [
        "Birden fazla silahlı grup merkezi topraklar için çekişiyor",
        "Para birimi çöküşü ya da mali felç",
        "İnsani acil durum — yerinden edilme, kıtlık",
        "Uluslararası aktörler doğrudan müdahil",
        "Devlet çalışanları maaşsız ya da öz geçim yoluna geçmiş"
      ],
      branches: [
        { label: "Yeniden kuruluş (nadir)", severity: "info", desc: "Hayatta kalan seçkinler yeni bir kurucu anlaşma müzakere eder.", target: "formation" }
      ],
      loop: "Çöküş kendi kendini güçlendirir: silahlı gruplar ekonomiyi talan eder, bu onu daha fazla çöktürür, ortaya çıkan herhangi bir otoriteyi gelirden yoksun bırakır. Kurtulmak için dış garantörler ya da kamu malları sunmaya başlayacak kadar kapasitesi olan baskın bir grup gerekir.",
      examples: [
        "Somali (1991–günümüz)",
        "Libya (2011–günümüz)",
        "Lübnan (2019–günümüz)",
        "Demokratik Kongo Cumhuriyeti (1996–2003)"
      ],
      theory: "Meşruiyet ve kapasite eş zamanlı ve alenen başarısız oldu. Siyasi yapı temel işlevlerini (güvenlik, hukuk, vergilendirme) yerine getiremiyor ve önemli gruplar artık otoritesini tanımıyor. Kritik olarak, bu evre tüm eksenler üzerinde sıfırı temsil etmez: meşruiyet yok olmaz, rakip talipçiler arasında parçalanır; zorlayıcı kapasite, idari kapasite çöktükten uzun süre sonra bile yerelleşmiş biçimde kalıcı olabilir; dağılım zaman zaman artar, çünkü çöken rejim sadakati satın almak için koşullarına para akıtır. Tanısal sinyal düşük puanlar değil eksen ayrışmasıdır: meşruiyet ve kapasitenin normal birlikte hareketi bozulur.",
      citation: "Goldstone, J. A. (1991). Revolution and rebellion in the early modern world. University of California Press."
    },

    succession: {
      label: "Yönetimli Ardıllık",
      desc: "Yüksek meşruiyetli bir siyasi yapı, liderlik geçişini yerleşik kurumlar aracılığıyla yönetiyor. Temel zorluk, geçişin kurumsal uzlaşıyı güçlendirip güçlendirmeyeceğidir.",
      markers: [
        "Seçim ya da ardıllık mekanizması geniş ölçüde kabul görüyor",
        "İktidar devri barışçıl ve kamuoyu önünde gerçekleşiyor",
        "Ayrılan liderlik geçişe katkı sağlıyor",
        "Değişim süresince politika sürekliliği sağlanıyor",
        "Yeni liderlik geniş koalisyon arıyor"
      ],
      branches: [
        { label: "Olgunluğa dönüş", severity: "positive", desc: "Ardıllık normları güçlendirir; siyasi yapı istikrarlı seyrine devam eder.", target: "mature" },
        { label: "Yeni döngü (nadir)", severity: "info", desc: "Ardıllık daha derin kırılmaları açığa çıkarır; yeni bir kuruluş başlar.", target: "formation" }
      ],
      loop: "Başarılı ardıllık kurumların değerini artırır: her barışçıl devir bir sonrakini kolaylaştırır. Başarısız ardıllık (tek bir kez bile) beklentiyi kırar ve gelecekteki devirleri garanti altına almayı güçleştirir.",
      examples: [
        "ABD Cumhurbaşkanlığı devirleri (1797–günümüz, 2021 istisnasıyla)",
        "İngiltere genel seçimleri",
        "Tayvan'ın demokratik pekişmesi (1996–günümüz)",
        "Meksika'nın PRI'dan PAN'a geçişi (2000)"
      ],
      theory: "İktidar, belirlenmiş kurallara göre barışçıl biçimde el değiştirir — seçimler, anayasal ardıllık, görev süresi sınırları. Bu, olgun demokratik bir sistemin imza başarısı ile kurumsal yeniden üretimin en kritik anıdır. Her başarılı barışçıl devir, normu sağlamlaştırarak bir sonrakini daha olası kılar. Her başarısız devir, gelecekteki anlaşmazlıkları daha muhtemel hale getirir. Amerika Birleşik Devletleri'nin 1800 seçimi — tarihte rakip partiler arasındaki ilk demokratik iktidar devri — paradigma vakasıdır. Przeworski'nin formülasyonu mekanizmayı tam olarak yakalar: demokrasi, siyasi çatışmayı şiddetsiz işleme sistemidir ve ardıllık, bu iddianın sınanma anıdır.",
      citation: "Przeworski, A. (1991). Democracy and the market. Cambridge University Press."
    },

    decay: {
      label: "Son Çözülme",
      desc: "Siyasi yapı hem meşruiyetini hem de kapasitesini yitirmiş ama henüz resmen çökmemiş. Devlet adı var kendi yok, gerçek yönetim ise gayri resmi aktörler — suç şebekeleri, yerel güçlü adamlar, yabancı güçler — tarafından yürütülüyor.",
      markers: [
        "Resmi kurumlar yalnızca cephe olarak süreliyor",
        "Fiili güç gayri resmi ya da suç ağları tarafından kullanılıyor",
        "Uluslararası yardım ya da döviz havaleleri temel nüfusu ayakta tutuyor",
        "Ulusal kimlik etnik/bölgesel hatlar boyunca parçalanıyor",
        "Beyin göçü teknik kapasiteyi içten boşaltıyor"
      ],
      branches: [
        { label: "Dışsal sıfırlama (nadir)", severity: "info", desc: "Fetih, vesayet ya da yabancı destekli yeniden kuruluş.", target: "formation" }
      ],
      loop: "Çözülme, sapkın bir anlamda istikrarlıdır: gayri resmi aktörler bundan kazanç sağladığından yeniden kuruluşu engellemeye güçlü teşvikleri vardır. Dengeyi kırmak için genellikle dış baskı ya da tam bir kaynak çöküşü gerekir.",
      examples: [
        "Haiti (2010–günümüz)",
        "Yemen (2015–günümüz)",
        "Taliban dönemi Afganistan (2021–günümüz)",
        "Geç Batı Roma İmparatorluğu (M.S. 395–476)"
      ],
      theory: "Siyasi yapı kendini içeriden yeniden yapılandırma kapasitesini yitirmiştir. Reform gruplarını tasfiye eden uzun soluklu baskı ile ekonomik ya da askeri başarısızlığın bileşimi sonucunda ortaya çıkan son çözülme, herhangi bir uygulanabilir iç reform koalisyonunun yokluğuyla krizden ayrışır. Tainter'ın temel mekanizması — idari karmaşıklığa ilişkin azalan marjinal getiriler — terminal niteliği açıklar: her yeni bürokratik katman bir sorunu çözmek için eklenir ama karmaşıklığın net faydasını azaltır; sonunda sistem, basitleşmenin (çöküş, bölünme, ilhak) çoğu aktör için gerçekten akılcı bir uyumsal tepki olduğu noktaya ulaşır. Çöküş bu çerçevede başarısızlık değil, uyumdur.",
      citation: "Tainter, J. A. (1988). The collapse of complex societies. Cambridge University Press."
    }
  }
},

// ── Russian ───────────────────────────────────────────────────────────────────
ru: {
  ui: {
    introTitle:     "Фазовый график политических режимов",
    introDesc:      "Граф фаз политии — это интерактивная аналитическая платформа, реализованная как автономное JavaScript-приложение. Выходя за рамки линейных моделей «цикла демократии» вроде модели Тайтлера, она отображает политическое развитие в виде ориентированного графа из десяти состояний-аттракторов: от Становления до Зрелой стабильности, Авторитарной консолидации, Реформы, Репрессий и Терминального распада. Включает явные точки ветвления, петли обратной связи и исторические примеры для каждого узла. Каждая фаза охарактеризована по трём осям (легитимность, дееспособность и распределение) на основе Вебера, Тилли, Фукуямы и Аджемоглу/Робинсона; особое внимание уделено разрыву между этими осями — в особенности разобщению принудительной и административной дееспособности в патологических фазах — как диагностическому сигналу. Инструмент предназначен для различных видов анализа: полития, организация, общество или движение может определить своё положение на карте, исследовать варианты ветвления и понять петли обратной связи, стабилизирующие или дестабилизирующие её нынешнее положение.",
    introBtn:       "Открыть граф",
    appTitle:       "Фазовый график политических режимов",
    appSubtitle:    "Нажмите на узел, чтобы изучить диагностические маркеры, варианты ветвления и исторические примеры.",
    legendNormal:   "Обычный переход",
    legendRare:     "Редкий переход",
    legendDangerous:"Опасный переход",
    pinMark:        "Отметить: мы здесь",
    pinned:         "Закреплено: вы здесь",
    secMarkers:     "Диагностические маркеры",
    secBranches:    "Варианты ветвления",
    secLoop:        "Ключевая петля обратной связи",
    secExamples:    "Исторические примеры",
    axisLegitimacy: "Легитимность",
    axisCapacity:   "Дееспособность",
    axisDistribution:"Распределение",
    edgeLabels: {
      "imposed":            "навязанное",
      "negotiated":         "договорное",
      "no settlement":      "без договорённости",
      "new attempt":        "новая попытка",
      "autocratic character":"авторитарный характер",
      "elite capture":      "захват элитой",
      "liberalization":     "либерализация",
      "authoritarian turn": "авторитарный поворот",
      "renewal loop":       "цикл обновления",
      "managed opening":    "управляемое открытие",
      "reconstitution":     "восстановление",
      "next cycle":         "следующий цикл",
      "external reset":     "внешний перезапуск"
    }
  },

  axisInfo: {
    legitimacy: {
      title: "Легитимность",
      body: `<p>Легитимность обладает самой глубокой теоретической традицией из всех трёх осей. Три типа Макса Вебера — традиционный, харизматический и рационально-легальный — составляют основу практически всех последующих работ. Идея о том, что прочная власть требует добровольного подчинения, а не одного лишь принуждения, является едва ли не консенсусным положением политической науки. Сеймур Мартин Липсет формализовал её эмпирически в 1950–60-е годы.</p>
<p>Правительство может удерживать власть одним лишь страхом, однако принуждение обходится дорого и отличается хрупкостью. Легитимность — это то, что превращает грубую силу в авторитет: признание населением того, что режим имеет <em>право</em> править, а не только располагает средствами принуждения.</p>
<p><strong>Шкала (0–5):</strong> 0 = чистое принуждение, добровольного подчинения нет; 5 = широкое межфракционное признание права режима на власть.</p>`
    },
    capacity: {
      title: "Дееспособность",
      body: `<p>Дееспособность берёт начало прежде всего в литературе о государственном строительстве: тезис Чарльза Тилли «война создаёт государство», работы Фрэнсиса Фукуямы о политическом порядке и исследования «несостоявшихся государств», расширившиеся после окончания Холодной войны (Роберт Ротберг и другие). Основной тезис: легитимность без дееспособности — пустая оболочка. Правительство может быть любимым народом и всё же неспособным обеспечивать безопасность, собирать налоги или принуждать к исполнению контрактов.</p>
<p>Ведётся дискуссия о том, является ли дееспособность чем-то единым или представляет собой несколько различных измерений. Принудительная дееспособность (монополия на насилие), административная дееспособность (бюрократический охват) и фискальная дееспособность (возможность облагать налогами и расходовать средства) значимо различаются и не всегда движутся в одном направлении.</p>
<p><strong>Шкала (0–5):</strong> 0 = государство не может выполнять базовые функции; 5 = высокая административная, фискальная и принудительная дееспособность, действующие согласованно.</p>`
    },
    distribution: {
      title: "Распределение",
      body: `<p>Распределение — наиболее спорная ось. Она объединяет несколько традиций, не вполне согласных между собой: логика коллективных действий Манкура Олсона, концепция инклюзивных и экстрактивных институтов Аджемоглу и Робинсона (<em>«Почему одни страны богатые, а другие бедные»</em>) и более ранние структурные концепции о том, чьим интересам государство служит в конечном счёте.</p>
<p>Эмпирические данные подкрепляют базовый тезис о том, что высоко экстрактивные режимы менее устойчивы в долгосрочной перспективе, однако причинно-следственные механизмы остаются предметом споров. Само понятие при этом подлинно неоднозначно — распределение <em>чего</em>? Богатства? Государственных услуг? Политического голоса? Прав? Эти измерения не всегда движутся вместе, и разные теоретические традиции взвешивают их по-разному.</p>
<p><strong>Шкала (0–5):</strong> 0 = высоко экстрактивное, выгоды сосредоточены у небольшой элиты; 5 = широко распределённые выгоды между различными социальными группами.</p>`
    }
  },

  phases: {
    formation: {
      label: "Становление",
      desc: "Полития возникает через учредительный конфликт, революцию или переговоры. Легитимность оспаривается; институты слабы и символичны; доминируют харизматичные основатели. Выбор, сделанный здесь, отзывается на протяжении поколений.",
      markers: [
        "Пишется учредительный документ или создаётся основополагающий миф",
        "Соперничающие фракции всё ещё оспаривают власть",
        "Высокая символическая политика, низкий административный потенциал",
        "Часто присутствуют внешние угрозы (войны, интервенции)",
        "Харизматичные основатели доминируют — институты слабы"
      ],
      branches: [
        { label: "Учредительное соглашение достигнуто", severity: "positive", desc: "Фракции сходятся — путём переговоров или принуждения — на рамке для осуществления власти.", target: "settlement" },
        { label: "Соглашения нет", severity: "danger", desc: "Ни одна фракция не достигает достаточного доминирования; полития распадается прежде, чем сформируется.", target: "fragmentation" }
      ],
      loop: "Учредительные мифы становятся самоподкрепляющимися. Какая фракция напишет конституцию, та и определяет, кто будет считаться «легитимным» на протяжении поколений. Контрпетля: исключённые группы со временем выстраивают параллельную легитимность.",
      examples: [
        "Американская революция (1776) → конституционная республика",
        "Французская революция (1789) → колебания продолжались 80 лет",
        "Веймарская Германия (1919) → демократическое становление в условиях крайнего напряжения",
        "Советское становление (1917–22) → путь сильного лидера",
        "Индия (1947) → федеральный путь под давлением раздела"
      ],
      theory: "Момент появления нового политического образования. Происходит через революцию, независимость, отделение или крах предшественника. Легитимность целиком проецирована — она основана на обещаниях и учредительных мифах, а не на результатах. Центральная переменная: достигнет ли какая-либо фракция достаточного доминирования, чтобы диктовать условия в одностороннем порядке, или примерное равенство между соперниками вынудит их к согласованным ограничениям. Какие бы правила ни были написаны в этот момент, они закрепляют предположения о том, кто является легитимным политическим актором — и эти предположения оказываются исключительно устойчивыми.",
      citation: "Acemoglu, D., & Robinson, J. A. (2012). Why nations fail. Crown Business."
    },

    settlement: {
      label: "Договорённость?",
      desc: "Было ли учредительное соглашение выработано в ходе переговоров между фракциями или навязано доминирующей из них? Этот выбор определяет характер консолидации — и возможна ли она вообще.",
      markers: [
        "Существует ли учредительный документ, признанный основными фракциями?",
        "Пошла ли победившая фракция на уступки соперникам?",
        "Способны ли исключённые группы сорвать соглашение?",
        "Существует ли признанная процедура урегулирования будущих споров?",
        "Согласились ли все ключевые вооружённые акторы на разоружение или интеграцию?"
      ],
      branches: [
        { label: "Переговорное → демократический характер", severity: "positive", desc: "Соперничающие фракции принимают общую рамку; консолидация приобретает легитимный характер.", target: "consolidation" },
        { label: "Навязанное → авторитарный характер", severity: "danger", desc: "Доминирующая фракция диктует условия; консолидация идёт по исключающей линии.", target: "consolidation" },
        { label: "Соглашения нет → фрагментация", severity: "danger", desc: "Ни одна фракция не достигает достаточного доминирования; полития не обретает единства.", target: "fragmentation" }
      ],
      loop: "Характер соглашения определяется предшествующим путём. Переговорные соглашения создают прецеденты для будущих переговоров; навязанные соглашения нормализуют исключение. Оба могут породить стабильные политии — но очень разного рода.",
      examples: [
        "Филадельфийский конвент (1787) — переговорное",
        "Большевистский октябрь (1917) — навязанное",
        "Версаль / Веймар (1919) — переговорное под давлением",
        "Боннское соглашение по Афганистану (2001) — переговорное, но навязанное извне"
      ]
    },

    fragmentation: {
      label: "Фрагментация",
      desc: "Ни одна фракция не достигла достаточного доминирования для навязывания соглашения, ни одна коалиция не оказалась достаточно широкой для его выработки путём переговоров. Полития раскалывается: соперничающие власти, полевые командиры или раздел. Новая попытка учреждения возможна, но не гарантирована.",
      markers: [
        "Несколько вооружённых фракций с несовместимыми претензиями",
        "Признанной центральной власти нет",
        "Территория разделена по фракционным, этническим или региональным линиям",
        "Внешние акторы поддерживают соперничающих претендентов",
        "Население вытеснено или оказалось между враждующими властями"
      ],
      branches: [
        { label: "Новая попытка учреждения", severity: "info", desc: "Взаимное истощение или внешнее давление создаёт новое окно для соглашения.", target: "formation" }
      ],
      loop: "Фрагментация нередко стабильна в извращённом смысле: у каждой фракции есть основания продолжать борьбу, пока она верит в возможную победу. Лишь взаимное истощение, внешние гаранты или решающий военный исход разрывают этот тупик.",
      examples: [
        "Гражданская война в Ливане (1975–90)",
        "Сомали (1991–настоящее время)",
        "Ливия (2011–настоящее время)",
        "Афганистан (1989–2001)"
      ]
    },

    consolidation: {
      label: "Консолидация",
      desc: "Фракционное противостояние разрешилось настолько, что доминирующая коалиция может приступить к построению административного потенциала. Легитимность растёт по мере того, как новый порядок обеспечивает базовую безопасность и услуги. Характер этой фазы — демократический или авторитарный — задаётся учредительным соглашением.",
      markers: [
        "Единая правящая коалиция доминирует, но не остаётся без вызовов",
        "Строится бюрократическая инфраструктура",
        "Расширяются патронажные сети для кооптации соперников",
        "Ведётся поиск внешнего признания, частично достигнутого",
        "Активно продвигаются нарративы национальной идентичности"
      ],
      branches: [
        { label: "Зрелая стабильность", severity: "positive", desc: "Институты стабилизируются; оппозиция получает легитимное пространство.", target: "mature" },
        { label: "Авторитарная консолидация", severity: "warning", desc: "Потенциал направляется на исключение; демократический характер соглашения abandons.", target: "autocratic" }
      ],
      loop: "Успешная консолидация повышает потенциал, что увеличивает доходы, что финансирует ещё больший потенциал — добродетельный цикл. Разворачивается, когда патронажные издержки превышают доходы или исключённые группы достигают критической массы.",
      examples: [
        "Япония Мэйдзи (1868–90) → стремительная централизация",
        "Послевоенная Южная Корея (1950-е–60-е) → государство развития",
        "ЮАР при АНК (1994–2008) → управляемый переход",
        "Турция при Ататюрке (1923–38)"
      ],
      theory: "Учредительная коалиция победила; теперь ей необходимо выстроить институты, способные пережить своих создателей. Суды, бюрократии, налоговые системы и нормы преемственности должны прийти на смену сетям личной лояльности. Ключевой диагностический вопрос: строит ли доминирующая фракция безличные институты — правила, обязательные даже для неё самой, — или личностные, центрированные на лидере-основателе? Формулировка Линца и Степана остаётся наиболее точной: демократия консолидирована, когда становится «единственной игрой в городе» — поведенчески, установочно и конституционно. Опасность этой фазы — смешение фракции с государством.",
      citation: "Linz, J. J., & Stepan, A. (1996). Problems of democratic transition and consolidation. Johns Hopkins University Press."
    },

    mature: {
      label: "Зрелая стабильность",
      desc: "Полития достигла высокой легитимности, функциональной дееспособности и относительно широкого распределения. Институты действуют предсказуемо; происходят мирные передачи власти. Главные риски — захват элитой и самодовольство.",
      markers: [
        "Мирные передачи власти стали рутинными",
        "Независимая судебная власть и свободная пресса функционируют",
        "Налоговая база широка, уровень соблюдения высок",
        "Организации гражданского общества действуют свободно",
        "Политические разногласия регулируются через институты"
      ],
      branches: [
        { label: "Реформа / адаптация", severity: "positive", desc: "Институты обновляются в ответ на новые вызовы, сохраняя легитимность.", target: "reform" },
        { label: "Перенапряжение / перегрузка", severity: "warning", desc: "Внешние потрясения или элитарная экстракция подрывают профицит.", target: "strain" },
        { label: "Захват элитой (редко)", severity: "danger", desc: "Институциональные защиты выхолащиваются изнутри; начинается откат.", target: "autocratic" }
      ],
      loop: "Высокая легитимность позволяет взимать налоги, что финансирует потенциал, что обеспечивает услуги, что укрепляет легитимность. Разрыв этого цикла в любой точке ослабляет всю структуру.",
      examples: [
        "Послевоенная Западная Европа (1950–90)",
        "США (1945–73)",
        "Ботсвана (1966–настоящее время) — исключение для Африки",
        "Коста-Рика (1949–настоящее время)"
      ],
      theory: "Институты доказали способность выдерживать стресс. Власть мирно переходит из рук в руки на протяжении поколений. Граждане интернализировали легитимность режима, и даже оппозиция остаётся лояльной: она проигрывает выборы, а не поднимает восстание. Эта фаза — то, что большинство политической теории принимает как должное, но немногие образования поддерживают долго. Ключевое прозрение Фукуямы: зрелая стабильность содержит собственный механизм распада — успешные институты порождают самодовольство, элиты начинают воспринимать институты как ресурсы для захвата, а не как рамки для поддержания, и «реПатримониализация» — возврат к персонализированной, патронажной политике — укореняется изнутри.",
      citation: "Fukuyama, F. (2014). Political order and political decay. Farrar, Straus and Giroux."
    },

    autocratic: {
      label: "Авторитарная консолидация",
      desc: "Власть сосредоточена у единственного лидера или партии. Потенциал используется избирательно: для вознаграждения сторонников и наказания инакомыслящих. Легитимность опирается на результаты, национализм или страх, а не на согласие.",
      markers: [
        "Суды и законодательная власть подчинены исполнительной",
        "Оппозиционные партии запрещены или лишены влияния",
        "Избирательное применение закона против соперников",
        "Государственные СМИ доминируют в информационной среде",
        "Распределение ресурсов определяется принципом «свой/чужой»"
      ],
      branches: [
        { label: "Репрессии / окостенение", severity: "danger", desc: "Потенциал обращается вовнутрь; оппоненты подавляются, а не кооптируются.", target: "repression" },
        { label: "Перенапряжение / перегрузка", severity: "warning", desc: "Перерасширение или элитный конфликт подрывает авторитарный потенциал.", target: "strain" },
        { label: "Либерализация (редко)", severity: "positive", desc: "Раскол элит или экономическая неудача вынуждает к договорному открытию.", target: "mature" }
      ],
      loop: "Концентрация власти позволяет принимать более быстрые решения, что может давать ранние победы, что оправдывает дальнейшую концентрацию. Разворачивается, когда персоналистские сети распадаются, дезертирство элит ускоряется или результаты ухудшаются.",
      examples: [
        "Россия при Путине (2000–настоящее время)",
        "Венгрия при Орбане (2010–настоящее время)",
        "Венесуэла (2013–настоящее время)",
        "Турция при Эрдогане (2014–настоящее время)",
        "Сингапур (1965–90) — высокодееспособный вариант"
      ],
      theory: "Единственный актор или небольшая группа устранила конкурирующие центры власти. Государственный аппарат персонализирован — институты существуют, но служат правителю, а не верховенству закона. Сволик выделяет две фундаментальные проблемы, которые все автократии вынуждены решать: авторитарный контроль (управление угрозами со стороны населения) и авторитарный раздел власти (управление угрозами со стороны элитной коалиции). Поскольку никакая независимая власть не может принудить к соблюдению соглашений, насилие остаётся неизменным конечным арбитром. Эта фаза может быть на удивление стабильной, однако стабильность достигается ценой адаптивности: информация, поступающая к руководству, систематически искажается, преемственность экзистенциально опасна, а проблемно-решающий потенциал деградирует при сохранении высокого принудительного потенциала.",
      citation: "Svolik, M. W. (2012). The politics of authoritarian rule. Cambridge University Press."
    },

    strain: {
      label: "Перенапряжение / Перегрузка",
      desc: "Полития перенапряглась — в военном, финансовом или социальном отношении. Потенциал снижается по сравнению с принятыми обязательствами. Легитимность подрывается. Система испытывает конкурирующее давление, которое не может удовлетворить одновременно.",
      markers: [
        "Дефицитные расходы ради поддержания политических обязательств",
        "Измеримое снижение общественного доверия к институтам",
        "Элитные фракции в открытом или скрытом конфликте",
        "Периферийные регионы или группы отстраняются",
        "Политические неудачи становятся публично очевидными"
      ],
      branches: [
        { label: "Реформа", severity: "positive", desc: "Руководство признаёт перегрузку и договаривается об отступлении.", target: "reform" },
        { label: "Авторитарный поворот", severity: "warning", desc: "Элиты консолидируются; инакомыслие криминализируется для предотвращения подотчётности.", target: "autocratic" },
        { label: "Кризис / коллапс", severity: "danger", desc: "Накопленное давление прорывается; государство теряет контроль над ключевыми функциями.", target: "crisis" }
      ],
      loop: "Перенапряжение снижает легитимность, что снижает добровольное соблюдение, что снижает доходы, что снижает потенциал, что углубляет перенапряжение. Выход требует нового достоверного соглашения — редкого без внешнего потрясения или смены руководства.",
      examples: [
        "Поздняя Римская республика (133–31 до н. э.)",
        "Франция при Людовике XVI (1787–89)",
        "Советский Союз (1985–91)",
        "США (2016–настоящее время, оспаривается)"
      ],
      theory: "Издержки политии превышают её возможности по их поддержанию — военное перерасширение, финансовый кризис, элитный раскол, демографическое давление или накопленные дефициты легитимности. Это диагностически наиболее важная фаза, поскольку через неё проходит почти каждая полития; важно, достаточно ли прочны институты, чтобы перенаправить траекторию без разрыва. Фаза перенапряжения самоусиливающаяся: финансовый стресс вынуждает урезать услуги, это подрывает легитимность, это усиливает инакомыслие, это требует больших принудительных расходов, что углубляет финансовый стресс. Структурная модель Голдстоуна выявляет три одновременных условия, переводящих перенапряжение в кризис: финансовый кризис государства, фрагментация элит и мобилизуемая народная база — каждое необходимо, ни одного не достаточно.",
      citation: "Goldstone, J. A. (1991). Revolution and rebellion in the early modern world. University of California Press."
    },

    reform: {
      label: "Реформа / Адаптация",
      desc: "Элиты признают, что нынешнее соглашение терпит неудачу, и договариваются о новом — перераспределяя власть или ресурсы ради восстановления легитимности. Редкость обусловлена тем, что это требует от элит принятия краткосрочных потерь.",
      markers: [
        "Элитные уступки в пользу набирающих силу групп",
        "Конституционная или электоральная реформа в процессе",
        "Перераспределение или антикоррупционные инициативы набирают силу",
        "Новые коалиции, пересекающие старые фракционные линии",
        "Международные модели или давление играют роль"
      ],
      branches: [
        { label: "Обновлённая зрелость (редко)", severity: "positive", desc: "Реформа восстанавливает легитимность; полития стабилизируется на более высоком уровне.", target: "mature" },
        { label: "Управляемая преемственность", severity: "info", desc: "Реформа создаёт условия для упорядоченной смены руководства.", target: "succession" }
      ],
      loop: "Достоверная реформа повышает ожидания, что повышает политическую цену неудачи. Если реформа буксует, легитимность может упасть быстрее, чем до её обещания. Успех требует соответствия риторики ощутимому перераспределению.",
      examples: [
        "Новый курс в США (1933–38)",
        "Переход в Южной Африке (1990–94)",
        "Испанский переход (1975–82)",
        "Реформы в Британии (1832, 1867)"
      ],
      theory: "Институты гнутся, не ломаясь. Полития поглощает потрясение — экономическое, демографическое, военное или связанное с легитимностью — и выходит из него с новыми правилами, коалициями или перераспределённой властью. Это редчайший и наименее теоретизированный путь; он требует двух одновременных условий, трудно достижимых совместно: готовности элит нести краткосрочные потери и достаточного народного давления, делающего реформу необходимой. Схема Хиршмана объясняет механизм: когда «выход» недоступен или дорог, «голос» становится рациональной стратегией — реформа происходит именно тогда, когда достоверной альтернативой является нечто худшее. Без этой угрозы у элит нет стимула нести издержки реформы.",
      citation: "Hirschman, A. O. (1970). Exit, voice, and loyalty. Harvard University Press."
    },

    repression: {
      label: "Репрессии / Окостенение",
      desc: "Государство поддерживает порядок преимущественно принуждением, а не легитимностью. Потенциал направлен вовнутрь — против населения. Институты заморожены; адаптация блокируется теми, кто извлекает выгоду из стагнации.",
      markers: [
        "Массовое заключение или высылка политических оппонентов",
        "Аппарат слежки доминирует в повседневной жизни",
        "Экономическая мобильность заблокирована политическими связями",
        "Номинальные институты (выборы, суды) носят театральный характер",
        "Молодёжная эмиграция ускоряется"
      ],
      branches: [
        { label: "Терминальный распад", severity: "danger", desc: "Принуждение становится неустойчивым; государство выхолащивается.", target: "decay" },
        { label: "Кризис / коллапс", severity: "danger", desc: "Внезапное народное восстание или дезертирство элиты ломает систему.", target: "crisis" },
        { label: "Управляемое открытие (редко)", severity: "positive", desc: "Элитный переворот или преемственность открывают окно для реформ.", target: "mature" }
      ],
      loop: "Репрессии блокируют обратную связь, и проблемы накапливаются незамеченными. Когда они проявляются, у государства нет легитимного канала для их поглощения. Сам принудительный потенциал атрофируется по мере того, как карательные органы переключаются на частную экстракцию.",
      examples: [
        "СССР в эпоху Брежнева (1968–82)",
        "Восточная Германия (1950–89)",
        "Северная Корея (1990–настоящее время)",
        "Зимбабве при Мугабе (2000–17)"
      ],
      theory: "Режим реагирует на перенапряжение ужесточением, а не адаптацией. Институты кристаллизуются вокруг правящей коалиции. Система становится хрупкой: принудительный потенциал остаётся высоким, тогда как проблемно-решающий и адаптивный потенциал рушится. Левицки и Зиблатт фиксируют этот механизм в демократических контекстах — эрозию взаимной терпимости и институциональной сдержанности, — однако та же динамика действует в автократиях с большей окончательностью: после ликвидации реформаторской фракции лишь внешнее потрясение или дезертирство элиты способны произвести изменения. Характерный маркер: информация, достигающая руководства, не просто фильтруется, но систематически фальсифицируется.",
      citation: "Levitsky, S., & Ziblatt, D. (2018). How democracies die. Crown Publishing."
    },

    crisis: {
      label: "Кризис / Коллапс",
      desc: "Государственные функции рухнули. Легитимность и дееспособность близки к нулю. Несколько вооружённых акторов оспаривают территорию. Полития как единица может прекратить существование или существовать лишь номинально.",
      markers: [
        "Несколько вооружённых фракций оспаривают ключевые территории",
        "Крах валюты или финансовый паралич",
        "Гуманитарная катастрофа — вынужденное перемещение, голод",
        "Международные акторы вмешиваются напрямую",
        "Государственные служащие без жалованья или перешедшие на самообеспечение"
      ],
      branches: [
        { label: "Воссоздание (редко)", severity: "info", desc: "Выжившие элиты договариваются о новом учредительном пакте.", target: "formation" }
      ],
      loop: "Коллапс самоподкрепляется: вооружённые фракции опустошают экономику, что ещё больше её разрушает, лишая любую зарождающуюся власть доходов. Выход требует внешнего гаранта или доминирующей фракции с достаточным потенциалом для начала предоставления общественных благ.",
      examples: [
        "Сомали (1991–настоящее время)",
        "Ливия (2011–настоящее время)",
        "Ливан (2019–настоящее время)",
        "Демократическая Республика Конго (1996–2003)"
      ],
      theory: "Легитимность и дееспособность одновременно и публично потерпели крах. Полития не может выполнять свои базовые функции (безопасность, право, налогообложение), и значительные фракции больше не признают её власть. Важно: эта фаза не означает нуля по всем осям — легитимность не исчезает, она фрагментируется между соперничающими претендентами; принудительный потенциал нередко сохраняется в локализованной форме ещё долго после краха административного; распределение иногда даже растёт, когда рушащийся режим осыпает ресурсами группы ради сохранения лояльности. Диагностический сигнал — не низкие оценки, а диссоциация осей: нормальное совместное движение легитимности и дееспособности нарушается.",
      citation: "Goldstone, J. A. (1991). Revolution and rebellion in the early modern world. University of California Press."
    },

    succession: {
      label: "Управляемая преемственность",
      desc: "Полития с высокой легитимностью осуществляет смену руководства через устоявшиеся институты. Ключевой вопрос: укрепляет ли переход институциональное соглашение или ослабляет его.",
      markers: [
        "Механизм выборов или преемственности широко принят",
        "Передача власти мирна и публично видима",
        "Уходящее руководство содействует переходу",
        "В ходе смены сохраняется преемственность политики",
        "Новое руководство ищет широкую коалицию"
      ],
      branches: [
        { label: "Возврат к зрелости", severity: "positive", desc: "Преемственность укрепляет нормы; полития остаётся стабильной.", target: "mature" },
        { label: "Новый цикл (редко)", severity: "info", desc: "Преемственность обнажает более глубокие разломы; начинается новое становление.", target: "formation" }
      ],
      loop: "Успешная преемственность повышает ценность институтов: каждая мирная передача власти облегчает следующую. Провальная преемственность (хотя бы однократно) разрушает ожидание, что делает будущие передачи труднее гарантировать.",
      examples: [
        "Президентские переходы в США (1797–настоящее время, с исключением 2021 года)",
        "Всеобщие выборы в Великобритании",
        "Демократическая консолидация Тайваня (1996–настоящее время)",
        "Переход Мексики от PRI к PAN (2000)"
      ],
      theory: "Власть мирно переходит в соответствии с установленными правилами — выборы, конституционная преемственность, ограничения сроков полномочий. Это одновременно фирменное достижение зрелой демократической системы и важнейший момент институционального воспроизводства. Каждая успешная мирная передача власти делает следующую более вероятной, укрепляя норму. Каждая провальная передача увеличивает вероятность будущих споров. Выборы 1800 года в США — первая в истории демократическая передача власти между соперничающими партиями — являются парадигматическим случаем. Формулировка Пшеворского точно фиксирует механизм: демократия — это система обработки политических конфликтов без насилия, а преемственность — момент, когда это утверждение проверяется на прочность.",
      citation: "Przeworski, A. (1991). Democracy and the market. Cambridge University Press."
    },

    decay: {
      label: "Терминальный распад",
      desc: "Полития утратила как легитимность, так и дееспособность, однако формально ещё не рухнула. Государство существует номинально, тогда как реальное управление осуществляется неформальными акторами — криминальными сетями, местными полевыми командирами, иностранными державами.",
      markers: [
        "Формальные институты сохраняются лишь как фасад",
        "Реальная власть осуществляется неформальными или криминальными сетями",
        "Международная помощь или денежные переводы поддерживают базовое население",
        "Национальная идентичность фрагментируется по этническим/региональным линиям",
        "Утечка мозгов выхолащивает технический потенциал"
      ],
      branches: [
        { label: "Внешний перезапуск (редко)", severity: "info", desc: "Завоевание, опека или восстановление с иностранной поддержкой.", target: "formation" }
      ],
      loop: "Распад стабилен в извращённом смысле: неформальные акторы, извлекающие из него выгоду, имеют сильные стимулы блокировать восстановление. Для разрушения равновесия обычно требуется внешнее давление или полный ресурсный коллапс.",
      examples: [
        "Гаити (2010–настоящее время)",
        "Йемен (2015–настоящее время)",
        "Афганистан при талибах (2021–настоящее время)",
        "Поздняя Западная Римская империя (395–476 н. э.)"
      ],
      theory: "Полития утратила способность восстанавливаться изнутри. Возникающий в результате длительных репрессий, уничтоживших реформаторские фракции, в сочетании с экономической или военной неудачей, терминальный распад отличается от кризиса отсутствием какой-либо жизнеспособной внутренней коалиции реформ. Ключевой механизм Тайнтера — убывающая предельная отдача от административной сложности — объясняет терминальный характер: каждый новый бюрократический слой, добавляемый для решения проблемы, снижает чистый выигрыш от сложности, пока система не достигает точки, где упрощение (коллапс, раздел, поглощение) оказывается подлинно рациональным адаптивным ответом для большинства акторов. Коллапс в этой системе координат — не провал, а адаптация.",
      citation: "Tainter, J. A. (1988). The collapse of complex societies. Cambridge University Press."
    }
  }
}

}; // end TRANSLATIONS
