// Oyun Verileri (İlk 30 sav örnek olarak - toplam 283'e çıkarılabilir)
const savlarData = [
    // KOLAY SEVIYE (1-10)
    {
        id: 1,
        sav: "Awçı neçe al bilse adhığ ança yol bilir.",
        meaning: "Avcı ne kadar hile bilirse, ayı da o kadar yol bilir.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Kurnaz kişiye karşılık, karşı taraf da tedbir geliştirebilir.",
        options: [
            "Avcı ne kadar hile bilirse, ayı da o kadar yol bilir.",
            "Tilki ne kadar kurnaz olsa da, kurt daha açtır.",
            "Ayı avcıyı, avcı hileyi bilir.",
            "Yolu bilen kişi, tuzağa düşmez.",
        ],
        difficulty: "kolay",
    },
    {
        id: 2,
        sav: "Aç agrı, toq yawaş.",
        meaning: " Aç hızlı, tok yavaş olur.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "İhtiyaç içindekiler daha çabuk davranır; tokluk rahatlık getirir.",
        options: [
            "Tok köpek tembel olur, aç olan ise saldırır.",
            "Acıkmak hastalığa neden olur.",
            " Aç hızlı, tok yavaş olur.",
            "Yavaş yiyen aç kalır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 3,
        sav: "Açıglığ er şebük karımas.",
        meaning: "Varlıklı kişi çabuk yaşlanmaz.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            " İmkanları olan kişiler daha az yıpranır.",
        options: [
            "Hırslı kişi çok çalışır ve yorulur.",
            "Varlıklı kişi çabuk yaşlanmaz.",
            "Paranın gücü erkeği yavaşlatır.",
            "Hızlı olan kişi çok yorulur.",
        ],
        difficulty: "kolay",
    },
    {
        id: 4,
        sav: "Aç ne yemez, toq ne demez.",
        meaning: "Aç olan her şeyi yer; tok olan her şeye laf eder.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Durumlar davranışları belirler.",
        options: [
            "Aç olan yemek seçmez, tok olan konuşmak ister.",
            "Tok karınla aç göz doymaz.",
            "Aç kişi konuşmaz, tok kişi sürekli laf eder.",
            "Aç olan her şeyi yer; tok olan her şeye laf eder.",
        ],
        difficulty: "kolay",
    },
    {
        id: 5,
        sav: "Agılda oğlak togsa arıkda otı oner.",
        meaning: " Ağılda oğlak doğsa, ırmakta otu biter.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            " Bir şey olacaksa doğa başka yerden de destek sağlar.",
        options: [
            " Ağılda oğlak doğsa, ırmakta otu biter.",
            "Ağıldan kaçan oğlak ırmağa gider.",
            "Her doğum bereket getirir.",
            "Her oğlağın otu önceden biter.",
        ],
        difficulty: "kolay",
    },
    {
        id: 6,
        sav: "Agız yese köz uyadhur.",
        meaning: " Ağız yerken göz mahcup olur.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            " İnsan yerken başkasından utanır; yiyiş davranışa dikkat ister.",
        options: [
            "Göz doyarsa ağız konuşur.",
            " Ağız yerken göz mahcup olur.",
            "Yiyen kişinin gözü hep dışarıdadır.",
            "Göz, doyarken ağzı utandırır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 7,
        sav: "Alın arslan, küçin sıçgan.",
        meaning: "Alacaklı arslan, borçlu sıçan gibidir.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Güç dengesi borçlunun aleyhinedir.",
        options: [
            "Hile, güçsüzü aslan yapar.",
            "Sıçan alacaklı olsa arslan olur.",
            "Aslan, sıçanın gücünü alır.",
            "Alacaklı arslan, borçlu sıçan gibidir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 8,
        sav: "Alın arslan tutar; küçin oyuk tutmas",
        meaning: "Hileyle arslan tutulur; sadece güçle korkuluk tutulmaz.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Bazı işler güçle değil, akılla olur.",
        options: [
            "Korkuluğun işi gücü tutmaktır.",
            "Akıl, aslandan güçlüdür.",
            "Hileyle arslan tutulur; sadece güçle korkuluk tutulmaz.",
            "Korkuluk, aslanı hileyle tutar.",
        ],
        difficulty: "kolay",
    },
    {
        id: 9,
        sav: "Alın arslan tutar; küçin sıçgan tutmas",
        meaning: "Hileyle arslan tutulur; güçle sıçan bile tutulmaz.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Güç her problemi çözmez, bazen hile gerekir.",
        options: [
            "Hileyle arslan tutulur; güçle sıçan bile tutulmaz.",
            "Aslanın gücü fareyi yakalamaya yetmez.",
            "Sıçan hileyle avlanır.",
            "Her iş için akıl ve güç gerekir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 10,
        sav: " Alp er savaşda, biliglig beg mecliste bilinir.",
        meaning: "Yiğit savaşta, bilge kişi mecliste belli olur.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "İnsan gerçek niteliğini doğru ortamda gösterir.",
        options: [
            "Bilge kişi savaştan, yiğit meclisten kaçar.",
            "Yiğit savaşta, bilge kişi mecliste belli olur.",
            "Savaşta yiğit, mecliste aslan bellidir.",
            "Mecliste bilgelik, savaşta yiğitlik aranır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 11,
        sav: "Alp erig yawrıtma, ıkılaç arkasın yagrıtma.",
        meaning: "Yiğidi kırma; iyi atın sırtını incitme.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Değerli insana ve işe zarar verilmez.",
        options: [
            "İyi atın sırtı yorulmaz, yiğidin kalbi kırılmaz.",
            "Yiğit atı incitirse yaya kalır.",
            "Yiğide kırık at, ata yorgun yiğit yakışmaz.",
            "Yiğidi kırma; iyi atın sırtını incitme.",
        ],
        difficulty: "kolay",
    },
    {
        id: 12,
        sav: "Alp birle uruşma, beg birle yarışma.",
        meaning: " Yiğit ile dövüşme, bey ile yarışma.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Güçlü olanı karşıya almak zarar getirir.",
        options: [
            " Yiğit ile dövüşme, bey ile yarışma.",
            "Bey ile dövüşmek, yiğit ile yarışmak demektir.",
            "Güçlü ile dövüşmek, liderle yarışmak gerekir.",
            "Bey yiğidi över, yiğit beyi yener.",
        ],
        difficulty: "kolay",
    },
    {
        id: 13,
        sav: "Alp yagıda bilinir, uslug yükte bilinir.",
        meaning: "Yiğit savaşta, akıllı işte belli olur.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Zor zamanlar insanı ortaya çıkarır.",
        options: [
            "Akıllı kişi yük taşımaz.",
            "Savaş, yiğidin yükü, akıl ise işidir.",
            "Yiğit savaşta, akıllı işte belli olur.",
            "Yiğitlik savaşta, akıl ise her yerde gösterilir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 14,
        sav: "Anası tewlük yuwka yapar, oğlı tetik koşa kapar.",
        meaning: "Anası ince yufka açar, oğlu uyanık olduğu için iki tane birden alır.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Zeki kişi fırsatı iyi değerlendirir.",
        options: [
            "Uyanık anne, hızlı oğul yetiştirir.",
            "Anası ince yufka açar, oğlu uyanık olduğu için iki tane birden alır.",
            "İnce yufka çabuk biter.",
            "Hızlı olan yufkayı kapar.",
        ],
        difficulty: "kolay",
    },
    {
        id: 15,
        sav: "Anğduz bolsa at ölmes.",
        meaning: "Andız (şifalı ot) varsa at karın ağrısından ölmez.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Tedbir alınırsa zarar görülmez.",
        options: [
            "Andız (şifalı ot) varsa at karın ağrısından ölmez.",
            "Ot varsa at beslenir.",
            "Karın ağrısı attan gitmez.",
            "Şifalı ot atı iyileştirir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 16,
        sav: "Anınğ yüzinğ titinü baksa bolmas.",
        meaning: "Onun yüzüne dik baksa olmaz.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "İnsan güzel olana karşı dik bakamaz",
        options: [
            "Gözü sert olanın yüzüne bakılmaz.",
            "Karşısındakine sert bakan çekinir.",
            "Gözü kara olanın yüzü asıktır.",
            "Onun yüzüne dik baksa olmaz.",
        ],
        difficulty: "kolay",
    },
    {
        id: 17,
        sav: "Anug utru tuşa yokka sanmas.",
        meaning: "Konuğun önüne koyan yemek ikram edilmiş sayılmaz",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Misafire yemeği sadece önüne koymakla ikram tamamlanmış sayılmaz; yemeği yedirmek, ona eşlik etmek ve ilgi göstermek gerekir.",
        options: [
            "Az veren candan, çok veren maldan.",
            "Misafir on kısmetle gelir, birini yer dokuzunu bırakır.",
            "Misafir umduğunu değil, bulduğunu yer.",
            "Konuğun önüne koyan yemek ikram edilmiş sayılmaz",
        ],
        difficulty: "kolay",
    },
    {
        id: 18,
        sav: " Arıg arıg sakar.",
        meaning: "Arıyı kızdıran adamı arı sokar.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Kötülük yaparsan karşılığını görürsün.",
        options: [
            "Arıyı kızdıran adamı arı sokar.",
            "Kızgın arı bal yapmaz.",
            "Kötüye kötülük geri döner.",
            "Arı, kışkırtanı sokmaz.",
        ],
        difficulty: "kolay",
    },
    {
        id: 19,
        sav: "Arguçsız alp çeriğ kazanmas",
        meaning: "Yardımcısı olmayan yiğit savaş kazanamaz.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Başarı tek başına gelmez.",
        options: [
            "Tek başına savaşılmaz.",
            "Savaş, yiğitliği yardımsız bırakır.",
            "Yardım, savaşı kazandıran güçtür.",
            "Yardımcısı olmayan yiğit savaş kazanamaz.",
        ],
        difficulty: "kolay",
    },
    {
        id: 20,
        sav: "Arpasız at aşumas; arkasız alp çeriğ suyumas",
        meaning: "Arpasız at koşmaz; dayanağı olmayan yiğit zafer kazanamaz.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Güçlü olmak destek gerektirir.",
        options: [
            "Arpasız at koşmaz; dayanağı olmayan yiğit zafer kazanamaz.",
            "Arpa, atın arkasından gelir.",
            "Yiğit atsız, at arpasız olmaz.",
            "Destek, zaferin ilk adımıdır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 21,
        sav: "Arslan karısa sıçgan ötün ködhezür.",
        meaning: "Arslan yaşlanınca fare deliğine göz diker.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Güçsüzleşen büyük kişiler küçük şeylere muhtaç olur.",
        options: [
            "Yaşlanan aslan ava çıkmaz.",
            "Arslan yaşlanınca fare deliğine göz diker.",
            "Fare, yaşlı aslandan korkar.",
            "Aslanın gözü farenin deliğinden büyüktür.",
        ],
        difficulty: "kolay",
    },
    {
        id: 22,
        sav: "Arslan kökrese at adhakı tuşalır.",
        meaning: "Arslan kükreyince atın ayağı dolaşır.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Güçlü kişinin etkisi zayıfları korkutur; güç karşısında herkes irkilir.",
        options: [
            "At, aslanın kükremesiyle hızlanır.",
            "Dolaşan ayak atın gücünü artırır.",
            "Arslan kükreyince atın ayağı dolaşır.",
            "Güçlü, zayıfı ezmek için kükrer.",
        ],
        difficulty: "kolay",
    },
    {
        id: 23,
        sav: "Aş tuz bilig birle bolur.",
        meaning: "Yemeğin tadı tuzla olur.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Her şey değerini detaylardan alır; küçük şeyler bütünü güzelleştirir.",
        options: [
            "Yemeğin tadı tuzla olur.",
            "Bilgi, yemekten daha lezzetlidir.",
            "Tuz, bilginin kaynağıdır.",
            "Tat, her zaman tuzdan gelmez.",
        ],
        difficulty: "kolay",
    },
    {
        id: 24,
        sav: "Tuzsuz aş yenmes.",
        meaning: "Tuzsuz yemek yenmez.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Gereken unsur yoksa iş tad vermez; eksik iş olmaz.",
        options: [
            "Tuzsuz aş, tatsız hayat demektir.",
            "Tuz, yemeğin değerini bilmez.",
            "Yenmeyen aş tuzsuz demektir.",
            "Tuzsuz yemek yenmez.",
        ],
        difficulty: "kolay",
    },
    {
        id: 25,
        sav: "Atan yüki aş bolsa açka az körünür.",
        meaning: "Devenin yükü yemek olsa aç kişiye az görünür.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Aç gözlü insana ne verirsen ver yetmez.",
        options: [
            "Aç gözlülük, doymazlığın göstergesidir.",
            "Devenin yükü yemek olsa aç kişiye az görünür.",
            "Aç, devenin yükünü taşıyamaz.",
            "Devenin yükü açın gözünü doyurur.",
        ],
        difficulty: "kolay",
    },
    {
        id: 26,
        sav: "Ata oglı ataç togar.",
        meaning: "Oğul babasına benzer",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Evlat karakterini aileden alır.",
        options: [
            "Oğul babasına benzer",
            "Baba, oğlunun karakterini belirler.",
            "Benzerlikler karakterden önemlidir.",
            "Her oğul babası gibi olmalıdır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 27,
        sav: "Atası açığ almıla yese oglınınğ tışı kamar.",
        meaning: "Baba ekşi elma yerse oğlunun dişi kamaşır.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Büyüklerin davranışları çocukları etkiler.",
        options: [
            "Elma yiyen baba oğlunun dişini bilir.",
            "Ekşi elma dişleri kamaştırır.",
            "Baba ekşi elma yerse oğlunun dişi kamaşır.",
            "Ekşi yiyen, tatlı bulamaz.",
        ],
        difficulty: "kolay",
    },
    {
        id: 28,
        sav: "Atası anası açığ yese oğl kızı tışı kamar.",
        meaning: "Anne babası ekşi yer, çocuklarının dişi kamaşır.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Ailede yapılanın etkisi çocuklara yansır.",
        options: [
            "Çocuklar, anne babanın yediklerini ister.",
            "Ekşi yiyen aile diş doktoruna gider.",
            "Anne baba ne yerse çocuk onu yapar.",
            "Anne babası ekşi yer, çocuklarının dişi kamaşır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 29,
        sav: "At köni bolgay er könglünke.",
        meaning: "At iyiyse sahibinin gönlü geniş olur.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "İyi bir imkâna sahip olan rahat olur.",
        options: [
            "At iyiyse sahibinin gönlü geniş olur.",
            "İyi at, sahibine gönül rahatlığı verir.",
            "Gönül, ata binmeyi ister.",
            "Atın boynu sahibinin elindedir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 30,
        sav: "At teküzligi ay bolmas.",
        meaning: "Atın alnındaki beyazlık ay yerine geçmez.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Taklit gerçek yerine geçmez; görünüş aslı etkilemez.",
        options: [
            "Ayın parlaklığı atın alnından gelir.",
            "Atın alnındaki beyazlık ay yerine geçmez.",
            "Gerçek, taklidi gölgede bırakır.",
            "Atın beyazlığı ayı kıskandırır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 31,
        sav: "Başga mal mal sanılmas.",
        meaning: "Başkasının malı sana mal sayılmaz",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Kendi malın olmayan sana ait değildir.",
        options: [
            "Malın aslı başkasının malıdır.",
            "Başkasının malına göz dikmek günahtır.",
            "Başkasının malı sana mal sayılmaz",
            "Kendi malın yoksa başkasının malını istersin.",
        ],
        difficulty: "kolay",
    },
    {
        id: 32,
        sav: "Ay tolun bolsa eliğin imlemes.",
        meaning: "Ay dolunay olunca parmağınla gösterilmez.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Ortada açık olanı tekrar göstermeye gerek yoktur.",
        options: [
            "Parmakla gösterilen şey dolunaydır.",
            "Dolunay, parmakla gösterilmekten utanır.",
            "Görünür olanı göstermeye gerek yoktur.",
            "Ay dolunay olunca parmağınla gösterilmez.",
        ],
        difficulty: "kolay",
    },
    {
        id: 33,
        sav: "Azığ bolgan er yorulmas.",
        meaning: " Azığı olan adam yorulmaz",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Hazırlıklı olan zorlanmaz.",
        options: [
            " Azığı olan adam yorulmaz",
            "Azık, yorgunluğu alır.",
            "Yorulmak, azığın bittiği zamandır.",
            "Çok azık yorgunluk getirir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 34,
        sav: "Balık suwda, közi taştın.",
        meaning: "Balık suda olsa da gözü dışarıdadır.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Rahat görünen kişinin içinde başka istek olabilir.",
        options: [
            "Gözü dışarıda olan balık sudan çıkar.",
            "Balık suda olsa da gözü dışarıdadır.",
            "Balık sudan çıkarsa gözü kararır.",
            "Göz, her zaman dışarıyı izler.",
        ],
        difficulty: "kolay",
    },
    {
        id: 35,
        sav: "Bar bakır, yok altun.",
        meaning: "Elinde olan bakırdır, olmayansa altın.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "İnsan sahip olmadığı şeyleri daha değerli görür.",
        options: [
            "Altın bakırdan daha az değerlidir.",
            "Yok olan şey, var olandan kıymetlidir.",
            "Elinde olan bakırdır, olmayansa altın.",
            "Bakır, altının kardeşidir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 36,
        sav: "Barçın yamağı barçınka, karış yamağı karışka.",
        meaning: " İpek yaması ipekliye, yün yaması yünlüye yakışır.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Her şey kendi türüyle uyumludur.",
        options: [
            " İpek yaması ipekliye, yün yaması yünlüye yakışır.",
            "Yama, kumaşın türünü değiştirir.",
            "İpek ve yün yama birbirini tutmaz.",
            "Her yama, kendi kumaşını ister.",
        ],
        difficulty: "kolay",
    },
    {
        id: 37,
        sav: "Barığ otur tutsa yokka sanmas.",
        meaning: "Elinde olan şey küçük de olsa yok sayılmaz.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Az da olsa kişinin sahipliği değer taşır",
        options: [
            "Az şey tutmak, hiç tutmamaktan iyidir.",
            "Küçük şeylere sahip olmak yok sayılmalıdır.",
            "Oturarak tutulan şey değerli değildir.",
            "Elinde olan şey küçük de olsa yok sayılmaz.",
        ],
        difficulty: "kolay",
    },
    {
        id: 38,
        sav: " Beş parmak bir bolmas.",
        meaning: "Beş parmak bir olmaz",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "İnsanlar birbirinden farklıdır.",
        options: [
            "Birlik, parmakların gücünden gelir.",
            "Beş parmak bir olmaz",
            "Her parmak bir işe yarar.",
            "Parmaklar bir olunca iş kolaylaşır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 39,
        sav: "Bilmiş yek bilmedhüg kişiden yeg.",
        meaning: "Tanıdık şeytan, tanınmayan kişiden iyidir.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            " Tanınan kötü, bilinmeyen kötüden daha az tehlikelidir.",
        options: [
            "Tanıdık şeytan, tanınmayan kişiden iyidir.",
            "Şeytanı tanımak bilgeliktir.",
            "Bilmediğin adam şeytandan iyidir.",
            "Tanınan kötülük, belirsizlikten iyidir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 40,
        sav: "Birer birer ming bolur.",
        meaning: "Birer birer bin olur.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Küçük birikimler zamanla büyür.",
        options: [
            "Bin sayısı birden daha büyüktür.",
            "Küçük adımlar büyük sonuçlar doğurur.",
            "Birer birer bin olur.",
            "Bir, binin yarısıdır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 41,
        sav: "Bir karga birle kış kelmes.",
        meaning: " Bir karga ile kış gelmez.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Tek belirtiyle hüküm verilmez; bir işaret her şeyi göstermez.",
        options: [
            "Kış, kargaların gelmesiyle başlar.",
            "Kışın gelmesi tek işarete bağlı değildir.",
            "Bir karga sesi tüm kışı haber verir.",
            " Bir karga ile kış gelmez.",
        ],
        difficulty: "kolay",
    },
    {
        id: 42,
        sav: "Bir tilkü terisin ikile soymas.",
        meaning: "Bir tilkinin derisi iki kez soyulmaz.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Bir kişiden bir şeyi ancak bir kez alabilirsin; sömürü tekrar etmez.",
        options: [
            "Tilki derisi çok değerlidir.",
            "Bir tilkinin derisi iki kez soyulmaz.",
            "Sömürü, bir yere kadar yapılabilir.",
            "Tilkinin derisini iki kez yüzmek hiledir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 43,
        sav: "Bir toyın başı ağrısa kamuğ toyın başı agrımas.",
        meaning: "Bir rahibin başı ağrırsa tüm rahiplerin başı ağrımaz.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Bir kişinin sorunu herkesi bağlamaz.",
        options: [
            "Bir rahibin başı ağrırsa tüm rahiplerin başı ağrımaz.",
            "Rahip baş ağrısı herkese yayılır.",
            "Toplulukta tek kişinin derdi önemsizdir.",
            "Rahip başı ağrısı bulaşıcıdır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 44,
        sav: "Boldaçı buzagu öküz ara belgülüğ.",
        meaning: "Öküz olacak buzağı bellidir.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Birinin gelecekte ne olacağı küçükken anlaşılır.",
        options: [
            "Buzağının öküz olması beklenen bir şeydir.",
            "Gelecek, küçükken belli olur.",
            "Öküz olacak buzağı bellidir.",
            "Öküz, buzağının geleceğini bilir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 45,
        sav: "Bodgaksız sirke bolmas.",
        meaning: " Şarap olmadan sirke olmaz.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            " Her şeyin nedeni vardır; sonuç sebepsiz olmaz.",
        options: [
            "Sirke, şarabın değerini artırır.",
            "Her sonuç bir başlangıçtan doğar.",
            "Sirke, şarabın bozulmuş halidir.",
            " Şarap olmadan sirke olmaz.",
        ],
        difficulty: "kolay",
    },
    {
        id: 46,
        sav: "Boşlaglansa boxuklanır.",
        meaning: "Kızan adamın eli ayağı bağlanır.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Öfke insanı kısıtlar; aceleyle hata yapılır.",
        options: [
            "Kızan adamın eli ayağı bağlanır.",
            "Öfke, kişiyi sakinleştirir.",
            "Boxuklanmak siniri artırır.",
            "Kızgınlıkta hata yapılmaz.",
        ],
        difficulty: "kolay",
    },
    {
        id: 47,
        sav: "Boş nenğe idhi bolmas.",
        meaning: "Sahipsiz bırakılan şey değerini kaybeder.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "İlgi gösterilmeyen şey herkesin olur.",
        options: [
            "Değerli şeylerin sahibi olmaz.",
            "Sahipsiz malı herkes ister.",
            "Boş şeylerin sahibi bellidir.",
            "Sahipsiz bırakılan şey değerini kaybeder.",
        ],
        difficulty: "kolay",
    },
    {
        id: 48,
        sav: "Börü komşın yemez.",
        meaning: " Kurt komşusunu yemez.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            " Yakın olanlar birbirine zarar vermez.",
        options: [
            "Kurt, yakınındaki avı seçmez.",
            "Komşuluk, kurdun bile kuralıdır.",
            "Komşuluk, kurdu uysal yapar.",
            " Kurt komşusunu yemez.",
        ],
        difficulty: "kolay",
    },
    {
        id: 49,
        sav: "Börininğ ortak, kuzgununğ yıgaç başında.",
        meaning: "Kurt avını yer, kuzgun ağacın tepesinde ortak olur.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Bazı kişiler emeği olmayana konmaya çalışır.",
        options: [
            "Kurt avını yer, kuzgun ağacın tepesinde ortak olur.",
            "Kuzgun, kurdun avına ortak olur.",
            "Kuzgun, ağacın başında av bekler.",
            "Emeği olmayan, pay sahibi olmaya çalışır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 50,
        sav: "Bu kök kirsün kızıl çıksun.",
        meaning: "Bu mavi girsin, kırmızı çıksın.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Eski Türkçe’de bir tür beddua; “zor durumda kalsın” anlamında.",
        options: [
            "Mavi ve kırmızı zıt renklerdir.",
            "Mavi, zorluğun rengi, kırmızı ise rahatlıktır.",
            "Renklerin değişimi kaderdir.",
            "Bu mavi girsin, kırmızı çıksın.",
        ],
        difficulty: "kolay",
    },
    {
        id: 51,
        sav: "Buşmasar boz kuş tutar; ewmeser ürünğ kuş tutar.",
        meaning: "Acele etmeyen boz kuşu tutar; telaş etmeyen beyaz kuşu tutar.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Sakin davranan en iyisini elde eder.",
        options: [
            "Acele eden, kuşların en iyisini seçer.",
            "Acele etmeyen boz kuşu tutar; telaş etmeyen beyaz kuşu tutar.",
            "Sakinlik, iyi sonuçlar getirir.",
            "Boz kuş telaşlananı sever.",
        ],
        difficulty: "kolay",
    },
    {
        id: 52,
        sav: "Bütün ümlüğ kança kolsa olturur.",
        meaning: " Donu sağlam olan istediği yere oturur.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Dayanağı olan kişi özgüvenlidir.",
        options: [
            "Sağlam giysi rahatlık verir.",
            "Donu olmayan oturamaz.",
            " Donu sağlam olan istediği yere oturur.",
            "Özgüven, dayanağın sonucudur.",
        ],
        difficulty: "kolay",
    },
    {
        id: 53,
        sav: "Çaxşak üze ot bolmas, çakrak bile uwut bolmas.",
        meaning: "Dağın tepesinde ot olmaz; kelde utanma olmaz.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Her şeyin doğası bellidir; bazı şeyler mümkün değildir.",
        options: [
            "Kel kişi utanmayı bilmez.",
            "Her şeyin yeri ve doğası bellidir.",
            "Utanmak, dağın tepesinde ot gibi nadirdir.",
            "Dağın tepesinde ot olmaz; kelde utanma olmaz.",
        ],
        difficulty: "kolay",
    },
    {
        id: 54,
        sav: "Çakmak çakılsa ot bolur.",
        meaning: "Çakmak çakılırsa kıvılcım çıkar.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Sebep olursa sonuç doğar.",
        options: [
            "Çakmak çakılırsa kıvılcım çıkar.",
            "Kıvılcım, çakmağın gücüdür.",
            "Her eylemin bir tepkisi vardır.",
            "Çakmak, ateşin kaynağıdır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 55,
        sav: "Egir bolsa er ölmes.",
        meaning: "Eyer sağlam olursa yiğit ölmez.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "İyi donanıma sahip olan zarar görmez.",
        options: [
            "Yiğidin eyeri, can yeleğidir.",
            "Eyer sağlam olursa yiğit ölmez.",
            "Eyer, yiğidi ölümden korur.",
            "İyi hazırlık, felaketi önler.",
        ],
        difficulty: "kolay",
    },
    {
        id: 56,
        sav: "Endik uma ewlikni ağırlar.",
        meaning: "Karga yavrusuna evi süslü görünür.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            " Herkes kendi sahip olduğuna değer verir.",
        options: [
            "Karga yavrusuna evi süslü görünür.",
            "Karga yavrusu evini sever.",
            "Herkesin kendi evi en güzelidir.",
            "Yavru karganın evi temiz olur.",
        ],
        difficulty: "kolay",
    },
    {
        id: 57,
        sav: "Erkek at ewde osmaz.",
        meaning: "Erkek at evde büyümez.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            " İnsan zorlukla gelişir; rahat ortam güçlendirmez.",
        options: [
            "Ev, atın büyümesine engeldir.",
            "Gelişim için zorluk ve dışarısı gerekir.",
            "Erkek at evde büyümez.",
            "Evde büyüyen at, uysal olur.",
        ],
        difficulty: "kolay",
    },
    {
        id: 58,
        sav: "Er öntürse ermes.",
        meaning: "Acele eden adam hedefine ulaşmaz.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            " Acelenin sonu zarardır.",
        options: [
            "Hedefe ulaşmak sabır işidir.",
            "Acele etmek erdemdir.",
            "Hızlı koşanlar hedefi geçer.",
            "Acele eden adam hedefine ulaşmaz.",
        ],
        difficulty: "kolay",
    },
    {
        id: 59,
        sav: "Er öşürse süte tüşer.",
        meaning: " Acele eden sinek süte düşer.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Acele eden başına iş açar.",
        options: [
            "Süt, sineği çeker.",
            " Acele eden sinek süte düşer.",
            "Acelecilik, istenmeyen sonuçlar doğurur.",
            "Sinek, aceleyle sütü bozar.",
        ],
        difficulty: "kolay",
    },
    {
        id: 60,
        sav: "Ew egisi toklı bolsar misafir tez barır.",
        meaning: "Ev sahibi misafiri iyi doyurursa misafir çabuk gider.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Bolluk bazen insanı rahatlatır ve gitmek ister.",
        options: [
            "Ev sahibi misafiri iyi doyurursa misafir çabuk gider.",
            "Misafir doyarsa gitmek istemez.",
            "Misafir tok olunca teşekkür eder.",
            "Bolluk, bazen uzaklaşma getirir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 61,
        sav: "Egir bolsa er ölmes.",
        meaning: "Eyer sağlam olursa yiğit ölmez.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Dayanak ve donanım güçlü olursa insan zarar görmez.",
        options: [
            "Sağlam eyer, yiğidin hayat sigortasıdır.",
            "Yiğidin canı eyerin sağlamlığından gelir.",
            "Eyer sağlam olursa yiğit ölmez.",
            "Güvenilir destek hayat kurtarır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 62,
        sav: "Egilük könglük bile bolur.",
        meaning: "Eğrilik gönülde olur.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Kötülük insanın içinde başlar.",
        options: [
            "Kötülük, gönül rahatlığı getirmez.",
            "Eğrilik, gönlün aynasıdır.",
            "Eğrilik gönülde olur.",
            "Her şey insanın niyetinde başlar.",
        ],
        difficulty: "kolay",
    },
    {
        id: 63,
        sav: "Ewge erta barsa erta olturur.",
        meaning: "Eve erken gelen erken oturur.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Erken davranan avantaj sağlar.",
        options: [
            "Eve erken gelen erken oturur.",
            "Erken gelen, yorulmadan oturur.",
            "Erken oturmak erken gitmek demektir.",
            "İlk gelen ilk hakkı alır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 64,
        sav: "Erlig bolgan alplığ bolur.",
        meaning: "İlgilenilen şey değer kazanır.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Emek verilen şey kıymetlidir.",
        options: [
            "Değer, alpın ilgisine bağlıdır.",
            "İlgilenilen şey değer kazanır.",
            "Alp, ilgiyle değer bulur.",
            "Emek, her şeye kıymet katar.",
        ],
        difficulty: "kolay",
    },
    {
        id: 65,
        sav: "Emikliğ uragut kösekçi bolur.",
        meaning: "Uzun süre emzirilen kadın çömlekçi olur.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Küçük alışkanlıklar mesleğe dönüşür; insan ne görürse onu yapar.",
        options: [
            "Çömlekçilik, uzun emzirmenin sonucudur.",
            "Alışkanlıklar meslekleri şekillendirir.",
            "Kadınlar uzun süre emzirirse çömlek yapar.",
            "Uzun süre emzirilen kadın çömlekçi olur.",
        ],
        difficulty: "kolay",
    },
    {
        id: 66,
        sav: "Endik uma ewlik görünür.",
        meaning: "Kargaya yavrusu güzel görünür.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Herkes kendi sahip olduğuna değer biçer.",
        options: [
            "Karga yavrusunu başkası da beğenir.",
            "Güzellik bakanın gözündedir.",
            "Kargaya yavrusu güzel görünür.",
            "Yavru karga çok güzeldir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 67,
        sav: "Eşek yegse otın bilmes.",
        meaning: "Eşek yediği otu düşünmez.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Nankör kişi gördüğü iyiliği hatırlamaz.",
        options: [
            "Eşek yediği otu düşünmez.",
            "Eşek otu değil, yolu düşünür.",
            "Nankörlük, verilen değeri unutmaktır.",
            "Ot yemek, eşeğin işidir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 68,
        sav: "Erdemsiz kut çeltirür.",
        meaning: "Erdemsiz kişiye verilen devlet (talih) dengesiz olur.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Değersiz kişiye güç verilirse mutlaka bozulma olur.",
        options: [
            "Talih, erdemsiz kişiye yaramaz.",
            "Erdemsiz kişi talihini kaybeder.",
            "Erdemsiz kişiye verilen devlet (talih) dengesiz olur.",
            "Devlet, erdemsizleri yüceltir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 69,
        sav: "Er alp küçin sanar; korkak alın sanar.",
        meaning: "Yiğit gücüne, korkak hilesine güvenir.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Herkes kendince yol seçer; korkak kurnazlık arar.",
        options: [
            "Yiğit gücüne, korkak hilesine güvenir.",
            "Korkak olan gücüne güvenmez.",
            "Herkes kendi yolunu kendi çizer.",
            "Yiğit hileyi, korkak gücü sever.",
        ],
        difficulty: "kolay",
    },
    {
        id: 70,
        sav: "Eşek yese otın sanmas.",
        meaning: "Eşek yediği otu bilmez.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Nankör insan nimetin değerini anlamaz.",
        options: [
            "Eşek, otun değerini bilemez.",
            "Nimetin kadrini nankör anlamaz.",
            "Ot yemek, eşeğin görevidir.",
            "Eşek yediği otu bilmez.",
        ],
        difficulty: "kolay",
    },
    {
        id: 71,
        sav: "Erkeç eti em bolur, eçkü eti yel bolur.",
        meaning: "Koç eti besler, keçi eti rüzgâr olur.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Kaliteli şey fayda sağlar; değersiz olan pek işe yaramaz.",
        options: [
            "Koç eti yiyen rüzgâr olur.",
            "Faydalı şey kalıcı, değersiz şey geçicidir.",
            "Koç eti besler, keçi eti rüzgâr olur.",
            "Keçi eti hastalıklara iyi gelir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 72,
        sav: "Elçi söz dinür, hükm berülmes.",
        meaning: "Elçi sözü dinlenir ama hüküm verilmez.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Aracının sözü değerlidir ama belirleyici değildir.",
        options: [
            "Elçinin sözü hüküm yerine geçer.",
            "Elçi sözü dinlenir ama hüküm verilmez.",
            "Hüküm, elçiye verilmelidir.",
            "Aracı sadece dinlenir, karar veremez.",
        ],
        difficulty: "kolay",
    },
    {
        id: 73,
        sav: "Bir söz erni yola koyar, bir söz erni yoldın ayırur.",
        meaning: "Bir söz adamı yola getirir, bir söz yoldan çıkarır.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Sözün etkisi çok büyüktür.",
        options: [
            "Bir söz adamı yola getirir, bir söz yoldan çıkarır.",
            "Yol, sözle bulunur, sözle kaybedilir.",
            "Söz, insanı hem iyileştirir hem bozar.",
            "İnsan, sözün etkisinde kalır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 74,
        sav: "Ernğenge eliğ karı böz üm tikemes.",
        meaning: "Acemi kadının eline ince bez verilmez.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "İş ehline verilmelidir.",
        options: [
            "İnce bez, acemi kadını yorar.",
            "Acemi kadının eline ince bez verilmez.",
            "İş, yetkin olana bırakılmalıdır.",
            "Acemi kadın her bezi diker.",
        ],
        difficulty: "kolay",
    },
    {
        id: 75,
        sav: "İyilik kılgan iyilik bulur.",
        meaning: "İyilik eden iyilik bulur.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Ne ekersen onu biçersin.",
        options: [
            "İyilik, bulanı iyileştirir.",
            "İyilik yapmak buluş gerektirir.",
            "İyilik eden iyilik bulur.",
            "Herkes yaptığının karşılığını alır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 76,
        sav: "Ersek erge tegmes, ewek ewge tegmes.",
        meaning: "Acele eden kadın ev sahibi olmaz; acele eden erkek yiğit olmaz.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Acelenin sonu başarı getirmez.",
        options: [
            "Acele eden kadın ev sahibi olmaz; acele eden erkek yiğit olmaz.",
            "Acele eden kişi başarı elde edemez.",
            "Yiğitlik acele etmeyi gerektirir.",
            "Ev sahibi olmak sabır ister.",
        ],
        difficulty: "kolay",
    },
    {
        id: 77,
        sav: "Er sözü bir, edher köki üç.",
        meaning: "Yiğidin sözü birdir; hilekârın üç türlüsüdür.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Dürüst insan nettir; hilekârın bin türlü oyunu vardır.",
        options: [
            "Hilekârın sözü, yiğidin sözünden güçlüdür.",
            "Yiğidin sözü birdir; hilekârın üç türlüsüdür.",
            "Dürüstlük tektir, yalanın çeşidi çoktur.",
            "Söz birliği, erdemliliktir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 78,
        sav: "Yalğançı özine inanmamış.",
        meaning: "Yalancı kişi kendine bile inanmaz.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Yalan söyleyen güvenini tamamen yitirir.",
        options: [
            "Yalancı, başkalarına inanmayı sever.",
            "İnanmamak, yalan söylemeye neden olur.",
            "Kendine inanmayan, yalancıdır.",
            "Yalancı kişi kendine bile inanmaz.",
        ],
        difficulty: "kolay",
    },
    {
        id: 79,
        sav: "İki er sir tutar, üç er tutmas.",
        meaning: "İki kişinin sırrı olur; üç kişinin olmaz.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Sır kalabalıkla bozulur.",
        options: [
            "İki kişinin sırrı olur; üç kişinin olmaz.",
            "Sır, üç kişiden fazlasına söylenmez.",
            "Kalabalık, sırrın düşmanıdır.",
            "Sır tutmak, iki kişinin işidir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 80,
        sav: "Eşyek ayur: başım bolsa sundurida suw içgeymen.",
        meaning: "Eşek der ki: “Başım olsa, su içmek için tas gerekmez.”",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Kendini abartan, haddini bilmeyen kişiler vardır.",
        options: [
            "Eşek tası olmadan su içmez.",
            "Eşek der ki: “Başım olsa, su içmek için tas gerekmez.”",
            "Kibirli kişi, yetkisini abartır.",
            "Suyun tadı tastan gelir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 81,
        sav: "Kötü yagı kişini edgüke tegürür.",
        meaning: "Kötü düşman, iyi dosta muhtaç eder.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Düşman kötülüğü, dostun değerini artırır.",
        options: [
            "Düşman kötülüğü, dostun değerini artırır.",
            "Kötü düşman, iyi dosta muhtaç eder.",
            "Dost, kötü düşmanı uzaklaştırır.",
            "Kötü düşman iyi dost kazandırır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 82,
        sav: "Yarım kılavuz erni yoldın urur.",
        meaning: "Yarım hekim candan eder, yarım hoca dinden eder.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Bilgisiz rehber zarar verir; işin ehli olmayan tehlikelidir.",
        options: [
            "Rehberin yarımı, yolcuyu yarı yolda bırakır.",
            "Yarım hekim candan eder, yarım hoca dinden eder.",
            "Bilgisiz lider, felakete yol açar.",
            "Kılavuz, yolcuyu yoldan çıkarmaz.",
        ],
        difficulty: "kolay",
    },
    {
        id: 83,
        sav: "Kişi malı kişiğe yük bolur.",
        meaning: "Başkasının malı başkasına yük olur.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Sahip olmadığın şey seni mutlu etmez, yük getirir.",
        options: [
            "Başkasının malı başkasına yük olur.",
            "Kendi malın yük, başkasının malı hediyedir.",
            "Yük, malın asıl sahibine aittir.",
            "Sahip olmadığın şey sorumluluk getirir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 84,
        sav: "İşlig er yorulmas.",
        meaning: "Çalışkan kişi yorulmaz.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "İşine alışkın olan işten şikâyet etmez.",
        options: [
            "İş, yorgunluğu alıp götürür.",
            "Çalışkan kişi yorulmaz.",
            "Yorulan adam çalışmayı bırakır.",
            "Çalışkanlık, yorgunluk hissini azaltır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 85,
        sav: "Inğan ınğrasa butu bozlar.",
        meaning: "Boynuz kırılırsa ayak ağrır.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Bir yerdeki sorun başka yeri de etkiler.",
        options: [
            "Boynuzun kırılması, ayakları güçlendirir.",
            "Boynuz kırılırsa ayak ağrır.",
            "Vücuttaki sorunlar birbirini etkiler.",
            "Boynuz ve ayak ayrı şeylerdir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 86,
        sav: "İgliğ turuğı adh bolur.",
        meaning: "Bilgili kişi önünü görür.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Bilgi, ileriyi görmeyi sağlar.",
        options: [
            "Bilgili kişi önünü görür.",
            "Bilgi, ayakta durmayı sağlar.",
            "Önünü gören, bilge olmaz.",
            "Bilgili kişi durduğu yeri bilir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 87,
        sav: "Til yarası yime yimiş.",
        meaning: "Dil yarası kolay iyileşmez.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Sözün verdiği zarar kalıcıdır.",
        options: [
            "Dil yarası, et yarasından daha derindir.",
            "Sözün yarası, iz bırakır.",
            "Dil yarası hemen yenebilir.",
            "Dil yarası kolay iyileşmez.",
        ],
        difficulty: "kolay",
    },
    {
        id: 88,
        sav: "Edgü kişinğ itinğ yimeg bolur.",
        meaning: "Dostun yavrusu bile sevilir.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Dostun küçük olanı bile kıymetlidir.",
        options: [
            "Dostluk, yavrularla başlar.",
            "Dostun sevgisi yavrulara yansır.",
            "Dostun köpeği bile sevilmelidir.",
            "Dostun yavrusu bile sevilir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 89,
        sav: "İyi yurıg yorın uzatmas.",
        meaning: "İyi yolcu yolu uzatmaz.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Tecrübeli kişinin yolculuğu kolay olur.",
        options: [
            "İyi yolcu yolu uzatmaz.",
            "Yolcu yolu uzatmak ister.",
            "Tecrübe, işi kolaylaştırır.",
            "İyi yolcu, yolu kısaltır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 90,
        sav: "İgliğ kişi işi iglig bolur.",
        meaning: "Eli düzgün olanın işi düzgün olur.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Usta kişinin işi yolunda gider.",
        options: [
            "Usta işi, düzgün elden çıkar.",
            "Eli düzgün olanın işi düzgün olur.",
            "Elin düzgünlüğü işin sonucunu belirler.",
            "Düzgün el, düzgün iş demektir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 91,
        sav: "İki bogra igeşür, orta kökegün yancılur.",
        meaning: "İki deve kavga ederse ortadaki eşek ezilir.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Güçlülerin çatışması zayıfa zarar verir.",
        options: [
            "Deve kavgası eşeği eğlendirir.",
            "Büyüklerin mücadelesi zayıflara zarar verir.",
            "Eşek, deve kavgasında yancı olur.",
            "İki deve kavga ederse ortadaki eşek ezilir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 92,
        sav: "İki er uruşısa üçünçi arada ölür.",
        meaning: "İki kişi kavga ederse aradaki üçüncü zarar görür.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Büyüklerin kavgasından küçükler etkilenir.",
        options: [
            "Arada kalan kişi kavgayı ayırır.",
            "Üçüncü kişi kavgayı başlatır.",
            "İki kişinin kavgası herkesi etkiler.",
            "İki kişi kavga ederse aradaki üçüncü zarar görür.",
        ],
        difficulty: "kolay",
    },
    {
        id: 93,
        sav: "İki kişi sözlese üçünçi artuk.",
        meaning: "İki kişinin konuşmasına üçüncü fazladır.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Her mesele herkesin önünde konuşulmaz.",
        options: [
            "İki kişinin konuşmasına üçüncü fazladır.",
            "Üçüncü kişi konuşmaya renk katar.",
            "Üç kişi, iki kişiden daha çok konuşur.",
            "Gizlilik, az kişiyle mümkündür.",
        ],
        difficulty: "kolay",
    },
    {
        id: 94,
        sav: "İzlik bolsa er öldimes, içlik bolsa at yağrımas.",
        meaning: "İzi (rotası) belli olan adam ölmez, içliği (yemliği) olan at zayıflamaz.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Düzen, plan ve hazırlık güven sağlar.",
        options: [
            "Rota ve yem, yaşam güvencesidir.",
            "İzi (rotası) belli olan adam ölmez, içliği (yemliği) olan at zayıflamaz.",
            "Plansızlık ölüme, açlık zayıflığa yol açar.",
            "Atın zayıflığı içliğin yokluğundandır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 95,
        sav: "İylegen igide kelür.",
        meaning: "Yaptığın kötülük sana geri döner.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Ne ekersen onu biçersin.",
        options: [
            "Kötülük yapmak, hastalık getirir.",
            "Geri dönen şey iyiliktir.",
            "İyilik ve kötülük dönüp dolaşır.",
            "Yaptığın kötülük sana geri döner.",
        ],
        difficulty: "kolay",
    },
    {
        id: 96,
        sav: "Kadaş temiş kaymaduk, kadhım temiş kaymış.",
        meaning: "“Kardeş yapmaz” deneni yapmadık; “kadım (karım) yapar” deneni yaptı.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Beklenmeyenden beklenen olur; hayat şaşırtıcıdır.",
        options: [
            "Kadınlar, erkeklerden daha sürprizlidir.",
            "Beklenen gerçekleşmez, beklenmeyen olur.",
            "“Kardeş yapmaz” deneni yapmadık; “kadım (karım) yapar” deneni yaptı.",
            "Kardeş, kadından daha güvenilirdir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 97,
        sav: "Kagun karma bolsa idhisi ikki eligen tegir.",
        meaning: "Kavun karışık ise kokusu iki ele gelir.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Kalitesiz şey kendini belli eder.",
        options: [
            "Kavun kokusu karışıktır.",
            "Kavun karışık ise kokusu iki ele gelir.",
            "Kalitesizlik gizlenemez.",
            "İki el, kavunun kokusunu bilir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 98,
        sav: "Kalın bulutuğ tügi karanğku ışığ urunç açar.",
        meaning: "Kalın bulut bile karanlığı biraz ışıkla yener.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Küçük bir umut, karanlığı azaltır.",
        options: [
            "Işık, her zaman bulutları dağıtır.",
            "Kalın bulut bile karanlığı biraz ışıkla yener.",
            "Umutsuzluk, küçük bir ışıkla gider.",
            "Bulut, ışığı karanlıkta saklar.",
        ],
        difficulty: "kolay",
    },
    {
        id: 99,
        sav: "Kalın kaz kılavuzsuz bolmas.",
        meaning: "Büyük kaz bile kılavuzsuz olmaz.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "En güçlü olan bile yol göstericiye ihtiyaç duyar.",
        options: [
            "Kazlar kılavuzsuz uçamaz.",
            "Büyük kaz bile kılavuzsuz olmaz.",
            "Her büyüklüğün bir rehbere ihtiyacı vardır.",
            "Kılavuz, en büyük kaza lazımdır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 100,
        sav: "Kalın kolan cufgasız bolmas.",
        meaning: "Kalın kement düğümsüz olmaz.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Her şey bir bağa, düzene ve tutarlılığa",
        options: [
            "Kement ne kadar kalınsa düğüm o kadar küçüktür.",
            "Düzen ve sağlamlık şarttır.",
            "Düğümsüz kement işe yaramaz.",
            "Kalın kement düğümsüz olmaz.",
        ],
        difficulty: "kolay",
    },
    {
        id: 101,
        sav: "Kalın kaz, kılavuzsuz bolmas.",
        meaning: "Büyük kaz bile kılavuzsuz olmaz.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "En güçlü olan bile yol göstericiye muhtaçtır.",
        options: [
            "Kılavuz, büyük kazı yönlendirir.",
            "Büyük kaz bile kılavuzsuz olmaz.",
            "Herkes bir yol göstericiye muhtaçtır.",
            "Kaz, kılavuzsuz uçmayı reddeder.",
        ],
        difficulty: "kolay",
    },
    {
        id: 102,
        sav: "Kalın kolan cufgasız bolmas.",
        meaning: "Kalın kement düğümsüz olmaz.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Her şeyin sağlam bir bağı ve düzeni olmalıdır.",
        options: [
            "Kementler düğümle sağlamlaşır.",
            "Kalın kement düğümsüz olmaz.",
            "Düzen, bağımsızlığı getirir.",
            "Kement, kalın olursa düğüm gerektirmez.",
        ],
        difficulty: "kolay",
    },
    {
        id: 103,
        sav: "Kanğdaş kuma urur, iğdiş örü tartar.",
        meaning: "Akraba cariyeyi döver, iğdiş (hadım) sürüyü çeker.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Herkes kendi görevini yapar; toplumun düzeni iş bölümüne dayanır.",
        options: [
            "Akraba ve hadım aynı işi yapar.",
            "Akraba cariyeyi döver, iğdiş (hadım) sürüyü çeker.",
            "Toplum, görev dağılımıyla işler.",
            "Akraba dövüşür, hadım kazanır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 104,
        sav: "Kang bolmasa kanç tutmas.",
        meaning: "Kök (kökensizlik) olmazsa güç tutulmaz.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Temeli olmayan şey ayakta duramaz.",
        options: [
            "Kökü olmayan şey güçlüdür.",
            "Gücün kaynağı temeldir.",
            "Kök, gücü tutar.",
            "Kök (kökensizlik) olmazsa güç tutulmaz.",
        ],
        difficulty: "kolay",
    },
    {
        id: 105,
        sav: "Kan ışı bolsa katun ışı kalır.",
        meaning: "Bey çalışırsa hatunun işi kalır.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Önder iş yaparsa geridekiler rahatlar; liderliğin etkisi büyüktür.",
        options: [
            "Hatun işi, bey işinden daha önemlidir.",
            "Liderin eylemi, altındakileri rahatlatır.",
            "Bey çalışırken hatun dinlenir.",
            "Bey çalışırsa hatunun işi kalır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 106,
        sav: "Kara bulutu yel, rüşvet el açar.",
        meaning: "Kara bulutu rüzgâr dağıtır, rüşvet ise eli açtırır.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Rüşvet insanı kötülüğe açık hâle getirir; çıkarcı dünya eleştirisi.",
        options: [
            "Rüzgâr, rüşveti yok eder.",
            "Kara bulutu rüzgâr dağıtır, rüşvet ise eli açtırır.",
            "Rüşvet, kötülüğe yol açar.",
            "Kara bulut ve rüşvet aynıdır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 107,
        sav: "Karanguluk sarı boldı.",
        meaning: "Karanlık aydınlığa döndü.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Zor günlerin sonu iyiliktir.",
        options: [
            "Sarı renk karanlığı aydınlatır.",
            "Karanlık aydınlığa döndü.",
            "Zorluklar sona erer.",
            "Karanlık, sarıdan sonra gelir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 108,
        sav: "Kavıgsız ot közün quamaz.",
        meaning: "Kül olmayan ateş közünü saklamaz.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Dış görünüş içteki hâli belli eder; gizli olan eninde sonunda ortaya çıkar.",
        options: [
            "Kül, ateşin izini kapatır.",
            "Kül olmayan ateş közünü saklamaz.",
            "Gizli olan açığa çıkar.",
            "Köz, küt olmadan saklanır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 109,
        sav: "Kek kören keregü yüdhti.",
        meaning: "Alay eden, ihtiyaç duyduğuna mahcup olur.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Küçümsediğin şeye bir gün muhtaç olursun.",
        options: [
            "Alay, mahcubiyet getirmez.",
            "Alay eden, ihtiyaç duyduğuna mahcup olur.",
            "Muhtaç olmak, alay etmeye neden olur.",
            "Küçümsemek, muhtaçlığa yol açar.",
        ],
        difficulty: "kolay",
    },
    {
        id: 110,
        sav: "Kelgen kişi kutlug.",
        meaning: "Gelen kişi bereket getirir.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Misafir uğurludur; misafirlik kültürünün yansıması.",
        options: [
            "Misafir şanssızdır.",
            "Bereket, gelen kişiden önce gelir.",
            "Gelen kişi uğur getirir.",
            "Gelen kişi bereket getirir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 111,
        sav: "Kadhınğ kasınğa.",
        meaning: "Kadının öfkesi sert olur.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Kadının kızgınlığı hafife alınmaz; uyarı niteliğinde.",
        options: [
            "Kadın, öfkesini gizler.",
            "Sert öfke kadına yakışmaz.",
            "Kadının öfkesi serttir.",
            "Kadının öfkesi sert olur.",
        ],
        difficulty: "kolay",
    },
    {
        id: 112,
        sav: "Kadhınğ kasınğa söküt sülinke.",
        meaning: "Kadının öfkesinden söğüt dalları bile titrer.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Kadın öfkelendiğinde etkisi herkesçe hissedilir.",
        options: [
            "Kadının öfkesi herkese yayılır.",
            "Söğüt dalları kadınları sakinleştirir.",
            "Kadının öfkesinden söğüt dalları bile titrer.",
            "Öfke, doğayı etkilemez.",
        ],
        difficulty: "kolay",
    },
    {
        id: 113,
        sav: "Kelin kirtisi özge bolur.",
        meaning: "Gelinin görüşü başkadır.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Yeni gelen kişi her şeyi farklı görür.",
        options: [
            "Gelinin görüşü başkadır.",
            "Gelin, her şeyi olduğu gibi görür.",
            "Yeni gelen, farklı bakış açısı getirir.",
            "Gelin, görüşünü değiştirmelidir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 114,
        sav: "Kem kişi keninge ökünür.",
        meaning: "Kötü kişi özüne değil, başkasına sitem eder.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Hatalı kimse suçu başkasında arar.",
        options: [
            "Kötü kişi sürekli kendini eleştirir.",
            "Kötü kişi özüne değil, başkasına sitem eder.",
            "Suçu başkasına atmak kötülerin işidir.",
            "Kötü kişi sitemi hak eder.",
        ],
        difficulty: "kolay",
    },
    {
        id: 115,
        sav: "Kek kördi keregü yüdhti.",
        meaning: "Alay eden, gün gelir muhtaç olur.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Küçümsediğin şeye bir gün muhtaç olursun.",
        options: [
            "Muhtaç olan alay etmez.",
            "Alay eden, gün gelir muhtaç olur.",
            "Küçümsenen şeye muhtaç olmak mahcubiyettir.",
            "Muhtaçlık alay konusu olur.",
        ],
        difficulty: "kolay",
    },
    {
        id: 116,
        sav: "Keriğ körse yükin ısırır.",
        meaning: "Eşek gördüğü yükü ısırır.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Kötü niyetli, kendi zararına bile olsa kötülük eder.",
        options: [
            "Eşek gördüğü yükü ısırır.",
            "Eşek, yükünü severek taşır.",
            "Kötü niyetli, kendi zararına hareket eder.",
            "Yük, eşeği ısırır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 117,
        sav: "Keriş yagrı ogulka kalır.",
        meaning: "Sert ağaç dalı oğlanın elinde kalır.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Zor şey zayıf ellere uymaz; iş güç sahibine göredir.",
        options: [
            "Zor işler, zayıf ellere uygun değildir.",
            "Oğlan, sert dalı yumuşatır.",
            "Sert dal, oğlanı güçlendirir.",
            "Sert ağaç dalı oğlanın elinde kalır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 118,
        sav: "Kişi bile bilig bile.",
        meaning: "İnsan insanla, bilgi bilgiyle olur.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "İnsan ilişkilerle; bilgi bilgiyle çoğalır.",
        options: [
            "İnsan bilgiyi, bilgi insanı çoğaltır.",
            "İnsan ilişkileri ve bilgi gelişimin temelidir.",
            "Bilgi, insanı yalnız bırakır.",
            "İnsan insanla, bilgi bilgiyle olur.",
        ],
        difficulty: "kolay",
    },
    {
        id: 119,
        sav: "Kılıç tatıksa ış yunçır; er tatıksa et tıncır.",
        meaning: "Kılıç bilenirse keskin olur; insan terbiye edilirse yumuşar.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Emek verilen şey gelişir; eğitim insanı olgunlaştırır.",
        options: [
            "Kılıç bilenirse keskin olur; insan terbiye edilirse yumuşar.",
            "Bilenmek kılıcı, terbiye insanı sertleştirir.",
            "Gelişim ve eğitim olgunlaştırır.",
            "Kılıç ve insan aynıdır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 120,
        sav: "Kırınmış erge yük bolmas.",
        meaning: "Olanı biteni bilen adama yük olmayız.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "",
        options: [
            "Bilgi, yükü hafifletir.",
            "Olanı biteni bilen adama yük olmayız.",
            "Tecrübeli kişi, zor işten yılmaz.",
            "Yük olmak, bilmemekten gelir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 121,
        sav: "Kız köni bolsa erkeç bolur.",
        meaning: "Kız doğru olursa erkek kardeşine bile örnek olur.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Dürüst insan çevresini etkiler.",
        options: [
            "Doğru kız, erkek kardeşini sever.",
            "Dürüstlük, çevreyi olumlu etkiler.",
            "Erkek kardeş, kızdan örnek almaz.",
            "Kız doğru olursa erkek kardeşine bile örnek olur.",
        ],
        difficulty: "kolay",
    },
    {
        id: 122,
        sav: "Kızıl tuşka kök yama yakışmas.",
        meaning: "Kırmızı elbiseye mavi yama yakışmaz.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Her şey kendi türüyle uyumludur.",
        options: [
            "Yama, elbisenin rengini değiştirir.",
            "Uyumsuzluk, görünüşü bozar.",
            "Kırmızı ve mavi birbirine yakışır.",
            "Kırmızı elbiseye mavi yama yakışmaz.",
        ],
        difficulty: "kolay",
    },
    {
        id: 123,
        sav: "Kırk yaşka kirse kişi könil bilmes.",
        meaning: "Kırk yaşına gelen insan gönlün ne istediğini bilmez olur.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Yaş ilerledikçe kararsızlık artabilir.",
        options: [
            "Kırk yaş, bilgelik yaşıdır.",
            "Kırk yaşına gelen insan gönlün ne istediğini bilmez olur.",
            "Yaşlılık, kararsızlığı artırır.",
            "Gönül, kırk yaşında her şeyi bilir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 124,
        sav: "Kız kişi sawı yorıglı bolmas.",
        meaning: "Kızın dedikodusu bitmez.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Toplumda kadınlar hakkında çok konuşulur algısı.",
        options: [
            "Dedikodu, kızların işidir.",
            "Kızın dedikodusu bitmez.",
            "Kadınlar hakkında çok konuşulur.",
            "Kız dedikodusu asla yapılmamalıdır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 125,
        sav: "Kizlençü kelinde.",
        meaning: "Kız utangaçlığı gelinin ilk hâlindedir.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Yeni evlenen kişi başlangıçta çekingen olur.",
        options: [
            "Utangaçlık, gizlenmesi gereken bir kusurdur.",
            "Gelinlik, kızın güzelliğini gizler.",
            "Kız çocuğunun utangaçlığı anne karnında başlar.",
            "Kız utangaçlığı gelinin ilk hâlindedir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 126,
        sav: "Kız özi ökünür, çağı bilmez.",
        meaning: "Kız kendi pişman olur, zamanı bilmez.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Gençler aceleyle karar verir, sonra pişman olur.",
        options: [
            "Gençler pişmanlık nedir bilmez.",
            "Kız kendi pişman olur, zamanı bilmez.",
            "Pişmanlık, acele kararların sonucudur.",
            "Zamanı bilmek, pişmanlığı önler.",
        ],
        difficulty: "kolay",
    },
    {
        id: 127,
        sav: "Kiminğ bile kaş bolsa yaşın yakmaz.",
        meaning: "Yanında kaşığı olanın yemeği yanmaz.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Hazırlıklı olan zarar görmez.",
        options: [
            "Kaşık, yemeği yanmaktan korur.",
            "Yanında kaşığı olanın yemeği yanmaz.",
            "Tedbirli olmak felaketi önler.",
            "Yanmak, kaşıkla engellenir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 128,
        sav: "Kişi adın kişi tuşamas.",
        meaning: "İnsan adını boş yere anmaz.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "İtibar önemlidir; kişi adının kirlenmesini istemez.",
        options: [
            "Ad, kişiyi boş yere anar.",
            "İnsan adını boş yere anmaz.",
            "İtibar, kişinin adı kadardır.",
            "İnsan, adının kıymetini bilir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 129,
        sav: "Kişi sözleşse ödlek bolmas.",
        meaning: "İnsan konuşursa korkak olmaz.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Derdini söylemek cesaret verir.",
        options: [
            "Korkak olan kişi çok konuşur.",
            "İnsan konuşursa korkak olmaz.",
            "Konuşmak, cesaretin ilk adımıdır.",
            "Sözleşen kişi, ödleklerden korkar.",
        ],
        difficulty: "kolay",
    },
    {
        id: 130,
        sav: "Kişi tili men özüni tiriltir.",
        meaning: "İnsan diliyle kendini yaşatır.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Sözün gücü insanın hayatını etkiler.",
        options: [
            "Sözün gücü hayatı geri getirir.",
            "İnsan diliyle kendini yaşatır.",
            "Dil, insanın yaşam kaynağıdır.",
            "İnsan, dili sayesinde ölmez.",
        ],
        difficulty: "kolay",
    },
    {
        id: 131,
        sav: "Kişi eti tiriğle tatır.",
        meaning: "İnsan etinin tadı sağlığında bulunur.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Fırsat zamanında değerlendirilir. (Eski bir mecaz)",
        options: [
            "Eti taze olan insan tatlıdır.",
            "Taze et yenmez, taze fırsat kaçmaz.",
            "İnsan etinin tadı sağlığında bulunur.",
            "Fırsatlar zamanında kullanılmalıdır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 132,
        sav: "Kişi suwın içse yirkin bilir.",
        meaning: "İnsan içtiği suyun yerini tanır.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "İnsan gördüğü iyiliği unutmamalıdır.",
        options: [
            "İçilen suyun yeri unutulmaz.",
            "İnsan içtiği suyun yerini tanır.",
            "İyilik, nankörlükle karşılık bulmaz.",
            "Su, insanı yerini bilmeye çağırır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 133,
        sav: "Kizdeki kiz yapar.",
        meaning: "Kız ev işini öğrenir.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Genç, yaptıkça ustalaşır.",
        options: [
            "Kız ev işini öğrenir.",
            "Ev işi kızları geliştirir.",
            "İş, zamanla ustalık getirir.",
            "Kız, ev işini annesinden öğrenir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 134,
        sav: "Kizlençü kelinde.",
        meaning: "Gelinin utangaçlığı kızlık hâlindendir.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Yeni evli olan önce çekingen davranır.",
        options: [
            "Utangaçlık, gelinin ilk adımıdır.",
            "Gelin utangaç olursa evlenmez.",
            "Gelinin utangaçlığı kızlık hâlindendir.",
            "Kızlık utangaçlığı çabuk geçer.",
        ],
        difficulty: "kolay",
    },
    {
        id: 135,
        sav: "Kişi ögsi özi bilmes.",
        meaning: "İnsan küçüldüğünü kendisi bilmez.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "İnsan kendi kusurunu fark etmekte zorlanır.",
        options: [
            "İnsan kendi kusurunu göremez.",
            "Küçülmek, insanın kendisini tanımasıdır.",
            "Övülen insan küçülmez.",
            "İnsan küçüldüğünü kendisi bilmez.",
        ],
        difficulty: "kolay",
    },
    {
        id: 136,
        sav: "Kolan kuduğka tüşse kurbaka aygır bolur.",
        meaning: "Kement kuyuya düşerse kurbağa bile aygır olur.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Boş kalan fırsatı değersiz biri bile kullanır.",
        options: [
            "Kuyudaki kurbağa kendini aygır sanır.",
            "Kement kuyuya düşerse kurbağa bile aygır olur.",
            "Fırsat, değersizleri yükseltir.",
            "Kuyu, kement ve kurbağayı birleştirir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 137,
        sav: "Kögelek kölünce köz yiter.",
        meaning: "Göl derinleşince göz kaybolur.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Bir şey büyüdükçe küçük detaylar kaybolur.",
        options: [
            "Göz, derinliği kaybeder.",
            "Göl derinleşince göz kaybolur.",
            "Büyük resimde detaylar kaybolur.",
            "Göl ne kadar derin, o kadar göz ister.",
        ],
        difficulty: "kolay",
    },
    {
        id: 138,
        sav: "Kögürmiş kişi barça şeyke inür.",
        meaning: "Korkmuş insan her şeyden çekinir.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Korku, kişinin hayatını sınırlayan güçlü bir duygudur.",
        options: [
            "Korku, insanı hareket ettirmez.",
            "Korkmuş insan her şeyden çekinir.",
            "Çekinmek, korkunun sonucudur.",
            "Korkmuş kişi her şeye güvenir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 139,
        sav: "Kögsi yawlak bolur.",
        meaning: "Göğsü dar olan kötü olur.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Kötü niyetli insanın iç dünyası",
        options: [
            "Göğsü dar olan kötü olur.",
            "Dar göğüs, kötü niyet getirir.",
            "Kötü niyetli insanın içi huzursuzdur.",
            "Kötülük göğü daraltır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 140,
        sav: "Könilik barsa, könilik kelür.",
        meaning: "Doğruluk giderse doğruluk geri gelir.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Doğru davranan sonunda kazanır; doğruluk kalıcıdır.",
        options: [
            "Giden doğruluk geri gelmez.",
            "Doğruluk giderse doğruluk geri gelir.",
            "Dürüstlük, kalıcı bir erdemdir.",
            "Doğruluk, gidişiyle gelir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 141,
        sav: "Köni barır keyikning közinde adhin başı yok.",
        meaning: "Doğru yürüyen ceylanın gözünde avcının başı görünmez.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Doğru olan, tehlikeyi bile fark etmez; doğruluk insana cesaret verir.",
        options: [
            "Ceylan doğru yürümez.",
            "Doğru yürüyen ceylanın gözünde avcının başı görünmez.",
            "Doğru, tehlikeyi görmezden gelir.",
            "Ceylanın gözü avcıyı korkutur.",
        ],
        difficulty: "kolay",
    },
    {
        id: 142,
        sav: "Köni kişi köngülüg bolur.",
        meaning: "Doğru kişi gönüllü olur.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Dürüst insan istekle, içtenlikle davranır.",
        options: [
            "Gönüllülük doğru kişiyi gösterir.",
            "Doğru kişi gönüllü olur.",
            "Dürüstlük, içtenliği gerektirir.",
            "Gönlü olmayan doğru konuşmaz.",
        ],
        difficulty: "kolay",
    },
    {
        id: 143,
        sav: "Köni sözüg kişi eşider.",
        meaning: "Doğru sözü herkes işitir.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Gerçek her zaman duyulur ve değer bulur.",
        options: [
            "Doğru sözü herkes işitir.",
            "Gerçek, her zaman kabul görür.",
            "Herkes doğru sözü dinlemek istemez.",
            "İşiten kişi, doğru sözü bilir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 144,
        sav: "Kösünğüge köğ tüşdi.",
        meaning: "Tembelin başına gök düştü.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Tembel, ufak bir meselede bile büyük felaket koparır.",
        options: [
            "Gök, tembellerin başına düşmez.",
            "Tembelin başına gök düştü.",
            "Tembel, gök düşmesini bekler.",
            "Tembel, felaketle karşılaşırsa abartır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 145,
        sav: "Kötürüg kişi özin bilmez.",
        meaning: "Kendini bilmez insan taşkın davranır.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Bilgisiz kişi haddini bilmez.",
        options: [
            "Kendini bilmez insan taşkın davranır.",
            "Taşkın davranışlar bilgiyi artırır.",
            "İnsan kendini bilirse yükselir.",
            "Bilgisiz kişi haddini aşar.",
        ],
        difficulty: "kolay",
    },
    {
        id: 146,
        sav: "Kök kopsa köz kalur.",
        meaning: "Kül uçsa köz kalır.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Asıl değer, geçici şeyler gidince ortaya çıkar.",
        options: [
            "Kül uçsa köz kalır.",
            "Kül, gözden daha değerlidir.",
            "Köz, külün gitmesiyle kaybolur.",
            "Geçici olan gider, kalıcı değer kalır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 147,
        sav: "Köksüz er kök tegürmes.",
        meaning: "Temelsiz adam göğe ulaşamaz.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Temeli olmayan kişi yükselemez.",
        options: [
            "Göğe ulaşmak, temel gerektirir.",
            "Temelsiz adam göğe ulaşamaz.",
            "Kök, adamı göğe çıkarır.",
            "Temel atamayan göğe değmez.",
        ],
        difficulty: "kolay",
    },
    {
        id: 148,
        sav: "Kurtga büdhik bilmes, yerim tar der.",
        meaning: "Kurbağa kuyuyu bilmez, “yerim dar” der.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Küçük dünyası olan, ufkunu dar sanır.",
        options: [
            "Kurbağa, kuyunun darlığından şikayet eder.",
            "Kurbağa kuyuyu bilse bile darlık ister.",
            "Dar görüşlü, kendi sınırlarını evren sanır.",
            "Kurbağa kuyuyu bilmez, “yerim dar” der.",
        ],
        difficulty: "kolay",
    },
    {
        id: 149,
        sav: "Kuruğ yıgaç eğilmes, kurmış kiriş tügülmes.",
        meaning: "Kuru ağaç eğilmez, kurumuş yay kopmaz.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Eski şey değişmez; katı olan bükülmez.",
        options: [
            "Kuru ağaç eğilmez, kurumuş yay kopmaz.",
            "Yay kirişi kurumuşsa eğilir.",
            "Kuru ağaç kolayca eğilir.",
            "Sertleşen şey değişime direnir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 150,
        sav: "Kuğu ötrü tegir.",
        meaning: "Kuğu gibi akar.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Zarafet ve akıcılık anlatır.",
        options: [
            "Kuğu, akarken görünmez.",
            "Kuğu gibi akar.",
            "Akıcılık ve zarafet önemlidir.",
            "Zarafet, suyun akışından gelir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 151,
        sav: "Kuş sözü ögke yük bolur.",
        meaning: "Boş söz gönle yük olur.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Dedikodu ve gereksiz söz insanı yorar.",
        options: [
            "Kuşun sözü gönlü yormaz.",
            "Boş söz gönle yük olur.",
            "Gereksiz konuşma insanı üzer.",
            "Gönül, kuşun sözünü dinler.",
        ],
        difficulty: "kolay",
    },
    {
        id: 152,
        sav: "Kuşluk ötrü kişi yorulmas.",
        meaning: "Kuşluk vaktinde kalkana yorgunluk olmaz.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Erken kalkan işini rahat görür.",
        options: [
            "Erken kalkmak enerji verir.",
            "Kuşluk vakti yorulmak için erkendir.",
            "Kuşluk vaktinde kalkana yorgunluk olmaz.",
            "Yorulmak, kuşluk vaktiyle başlar.",
        ],
        difficulty: "kolay",
    },
    {
        id: 153,
        sav: "Kutsuz kişi küçke irse yirkinür.",
        meaning: "Uğursuz kişi güç elde ederse korkutur.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Kötü niyetli insana güç vermek tehlikelidir.",
        options: [
            "Güç, uğursuzu normalleştirir.",
            "Uğursuz kişi güç elde ederse korkutur.",
            "Kötüye verilen güç tehlikelidir.",
            "Uğursuz, gücü çirkinleştirir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 154,
        sav: "Kuş yawuzı sagzıgan, yıgaç yawuzı azgan, yer yawuzı kazgan, budun yawuzı Barsgan.",
        meaning: "Kuşların kötüsü saksağan, ağaçların kötüsü azgan, yerin kötüsü kazgan, halkın kötüsü Barsgan’dır.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Kötülük her varlıkta farklıdır; her şeyin bir “kötü” örneği vardır.",
        options: [
            "Kuşların kötüsü saksağan, ağaçların kötüsü azgan, yerin kötüsü kazgan, halkın kötüsü Barsgan’dır.",
            "Barsgan, en kötü halktır.",
            "Saksağan, kuşların en iyisidir.",
            "Kötülük her yerde ve her şeyde vardır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 155,
        sav: "Kutsuz kişi yirde yatsa gökden tolmaz.",
        meaning: "Uğursuz kişi yerde yatarsa gökten örtülmez.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Bazı insanların şansı olmaz; nereye gitse kötü gider.",
        options: [
            "Şanssızlık, her durumda takip eder.",
            "Uğursuz kişi yerde yatarsa gökten örtülmez.",
            "Gök, uğursuzu her zaman örter.",
            "Yerde yatmak, uğursuzluk getirir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 156,
        sav: "Kutsuz kudhuğka kirse kum yağar.",
        meaning: "Uğursuz kuyuya girse kum yağar.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Şanssız kişi nereye gitse orası da kötüleşir.",
        options: [
            "Şanssızlık, etrafı da bozar.",
            "Uğursuz kuyuya girse kum yağar.",
            "Kuyu, uğursuzdan kum ister.",
            "Kum yağması bereket getirir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 157,
        sav: "Kudhuğda suw bar ıt burnı tegmes.",
        meaning: "Kuyuda su vardır ama köpeğin burnu değmez.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "İmkân var ama ulaşamayan için yok gibidir.",
        options: [
            "Köpek, kuyudaki suya ulaşamaz.",
            "Kuyuda su vardır ama köpeğin burnu değmez.",
            "İmkânlar herkesin erişimine açık değildir.",
            "Su, köpeğin burnuna değmek istemez.",
        ],
        difficulty: "kolay",
    },
    {
        id: 158,
        sav: "Kün bolsa kölge bolur.",
        meaning: "Güneş olursa gölge olur.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Her şey birbiriyle bağlantılıdır; sebep varsa sonuç doğar.",
        options: [
            "Güneş olursa gölge olur.",
            "Gölge, güneşin dostudur.",
            "Her olay bir tepki doğurur.",
            "Güneş varken gölge olmaz.",
        ],
        difficulty: "kolay",
    },
    {
        id: 159,
        sav: "Kün tutaçı künke ötrü bolur.",
        meaning: "Güneşi tutan güneş gibi olur.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Güçlü ile yakın olan güçlenir.",
        options: [
            "Güneş, kendini tutanı yakar.",
            "Güneşi tutan güneş gibi olur.",
            "Güçlü ile beraber olmak güç verir.",
            "Güneşi tutmak imkansızdır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 160,
        sav: "Küçe yoksa kök bolmas.",
        meaning: "Güç yoksa gök fethedilmez.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Büyük işler büyük güç gerektirir.",
        options: [
            "Güçsüzlük, büyük hedeflere engeldir.",
            "Göğe ulaşmak, sadece güçle mümkündür.",
            "Güç yoksa gök fethedilmez.",
            "Güç, gök yüzünden gelir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 161,
        sav: "Kün içre köz, köz içre kün bolmas.",
        meaning: "Güneşin içinde ateş, ateşin içinde güneş olmaz.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Her şeyin yeri ayrıdır; karışık düzen işlemez.",
        options: [
            "Ateş ve güneş karıştırılmalıdır.",
            "Güneşin içinde ateş, ateşin içinde güneş olmaz.",
            "Her şey kendi yerindedir, düzen önemlidir.",
            "Köz, künün içindedir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 162,
        sav: "Kün kölige sığmas.",
        meaning: "Güneş gölgeye sığmaz.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Büyük olan küçük yere sığmaz; büyük işler dar kalıplara uymaz.",
        options: [
            "Gölge, güneşi içine alır.",
            "Güneş gölgeye sığmaz.",
            "Güneş, gölgeyi sever.",
            "Büyük şeyler, dar kalıplara uymaz.",
        ],
        difficulty: "kolay",
    },
    {
        id: 163,
        sav: "Kün udhı kölge bolur.",
        meaning: "Güneş batınca gölge olur.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Her şeyin vakti geçer; çevre koşulları davranışı değiştirir.",
        options: [
            "Gölge, güneşi takip eder.",
            "Güneş batınca gölge olur.",
            "Batmak, gölgeyi yok eder.",
            "Koşullar değişince davranış değişir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 164,
        sav: "Künininğ küline tegü yagı.",
        meaning: "Güneşin külüne değen düşman olur.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Büyük kişiye dokunan kişinin hali kötü olur.",
        options: [
            "Kül, düşmanlığı sona erdirir.",
            "Güneşin külüne değen düşman olur.",
            "Düşman, külü sever.",
            "Büyük güce yaklaşan zarar görür.",
        ],
        difficulty: "kolay",
    },
    {
        id: 165,
        sav: "Kör kişi köngül bilmes.",
        meaning: "Kör kişi gönlü anlamaz.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Basiret sahibi olmayan kişi iyiyi kötüyü ayıramaz.",
        options: [
            "Gönlü anlamayan kördür.",
            "Kör kişi gönlü anlamaz.",
            "Basiret sahibi olmayan, iyi ve kötüyü ayırt edemez.",
            "Gönül, körlüğü engeller.",
        ],
        difficulty: "kolay",
    },
    {
        id: 166,
        sav: "Köreksiz kök ötrü bolmas.",
        meaning: "Küreksiz tekne ilerlemez.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Araç olmadan iş olmaz.",
        options: [
            "Kürek, tekneyi yorar.",
            "Küreksiz tekne ilerlemez.",
            "Küreksiz tekne, göğe ulaşır.",
            "Araç ve gereç olmadan iş yapılmaz.",
        ],
        difficulty: "kolay",
    },
    {
        id: 167,
        sav: "Köp söz erni urur.",
        meaning: "Çok söz adamı yorar.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Gereksiz konuşma zarar getirir.",
        options: [
            "Çok konuşmak insanı geliştirir.",
            "Çok söz adamı yorar.",
            "Fazla laf, huzursuzluk getirir.",
            "Söz, adamı yormaz, dinlendirir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 168,
        sav: "Köp küçke küç bolur.",
        meaning: "Çok güç güce güç katar.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Güç arttıkça etkisi de artar.",
        options: [
            "Güç, çokluğu engeller.",
            "Çok güç güce güç katar.",
            "Çok güç, tek gücü yener.",
            "Güç arttıkça etkisi çoğalır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 169,
        sav: "Neçeme obrak kedhuk erse yagmurka yarar.",
        meaning: "Ne kadar set varsa, yağmur o kadar yarar sağlar.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Engeller bazen faydalıdır; zorluk geliştirebilir.",
        options: [
            "Yağmur, setleri yıkar.",
            "Ne kadar set varsa, yağmur o kadar yarar sağlar.",
            "Set, yağmuru engeller.",
            "Zorluklar ve engeller fayda sağlar.",
        ],
        difficulty: "kolay",
    },
    {
        id: 170,
        sav: "Oglan ötrü öngre körklüg.",
        meaning: "Oğlan ileriye doğru güzeldir.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Genç ilerledikçe güzelleşir; umut gençtedir.",
        options: [
            "Oğlanın güzelliği şimdidedir.",
            "Oğlan ileriye doğru güzeldir.",
            "İleride güzelleşmek, oğlana yakışmaz.",
            "Gençlik, gelecekle güzelleşir.",
        ],
        difficulty: "kolay",
    },
{
        id: 171,
        sav: "Oglan tınmaz, er bolur.",
        meaning: "Uslanmaz çocuk adam olur.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Yaramaz çocuklar ileride güçlü birey olabilir.",
        options: [
            "Yaramazlık, olgunlaşmayı engeller.",
            "Uslanmaz çocuk adam olur.",
            "Zor çocuklar iyi bireyler olur.",
            "Çocuk, adam olunca uslanır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 172,
        sav: "Oglan ata tapınmaz.",
        meaning: "Çocuk babaya tapınmaz.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Çocuk, babasını taklit etmezse yanlış yola sapabilir.",
        options: [
            "Baba, çocuğa tapınmalıdır.",
            "Çocuk babaya tapınmaz.",
            "Çocuk, babadan bağımsız büyür.",
            "Çocuk, babasını taklit etmelidir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 173,
        sav: "Oglan küçin bilmes.",
        meaning: "Çocuk gücünü bilmez.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Çocuklar kendilerini tanımakta zayıftır.",
        options: [
            "Gücünü bilen çocuktur.",
            "Çocuk gücünü bilse de kullanmaz.",
            "Çocuk gücünü bilmez.",
            "Çocuklar, kendi yeteneklerini tanıyamaz.",
        ],
        difficulty: "kolay",
    },
    {
        id: 174,
        sav: "Oglan ışı ış bolmas, oğlak müngüzi sap bolmas.",
        meaning: "Çocuğun işi iş sayılmaz; oğlağın boynuzu sopa olmaz.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Bazı şeyler olgunlaşmadan işe yaramaz.",
        options: [
            "Oğlak boynuzu en iyi sopadır.",
            "Çocuğun işi, boynuzdan değerlidir.",
            "Çocuğun işi iş sayılmaz; oğlağın boynuzu sopa olmaz.",
            "Olgunlaşmadan hiçbir şey fayda vermez.",
        ],
        difficulty: "kolay",
    },
    {
        id: 175,
        sav: "Oglanın atası bolsa öginür.",
        meaning: "Çocuğun babası olsa över.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Anne baba çocuğunu her zaman över, beğenir.",
        options: [
            "Övünmek, babanın işidir.",
            "Babası olmayan övülmez.",
            "Çocuğun babası olsa över.",
            "Aile, çocuğunu her zaman destekler.",
        ],
        difficulty: "kolay",
    },
    {
        id: 176,
        sav: "Ol kişi özin yime bilmes.",
        meaning: "O kişi kendini bile bilmez.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "İnsan bazen en çok kendini yanlış tanır.",
        options: [
            "O kişi kendini bile bilmez.",
            "Kendini tanımak zor bir iştir.",
            "İnsan, kendini en iyi bilendir.",
            "Bilmek, o kişinin özelliğidir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 177,
        sav: "Olğur kişi ögür bolmas.",
        meaning: "Olgun kişi öfkeli olmaz.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Olgun insan sakin olur, gereksiz tartışmaz.",
        options: [
            "Öfke, olgunluğu gösterir.",
            "Olgun kişi öfkeli olmaz.",
            "Olgunluk, sakinliği getirir.",
            "Öfkeli kişi olgunlaşır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 178,
        sav: "Otağka öpkelep süge sözlemedük.",
        meaning: "Çadıra kızıp süvariye söz söylemedik.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Öfkeyi yanlış yere yöneltmemek gerekir.",
        options: [
            "Süvari çadıra kızar.",
            "Çadıra kızmak, süvariye hakarettir.",
            "Çadıra kızıp süvariye söz söylemedik.",
            "Öfke, doğru hedefe yöneltilmelidir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 179,
        sav: "Otı bar kişi köz körmes.",
        meaning: "Ateşi olan kişi kıvılcımı görmez.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Büyük sorunları olan küçük şeyleri fark etmez.",
        options: [
            "Ateşi olan kişi kıvılcımı görmez.",
            "Ateşin kıvılcımı görülmez.",
            "Kıvılcımı gören ateşi unutur.",
            "Büyük dertler, küçük sorunları unutturur.",
        ],
        difficulty: "kolay",
    },
    {
        id: 180,
        sav: "Öç karu bolsa öçke bolur.",
        meaning: "Kin kara olursa kine döner.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Kötü duygu büyürse kötülük getirir.",
        options: [
            "Kin, rengi kara yapar.",
            "Kin kara olursa kine döner.",
            "Kara kin, hemen geçer.",
            "Kötü duygular büyüdükçe zarar verir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 181,
        sav: "Öçke bolgan erkeç kişi söz tutmas.",
        meaning: "Öfkeli kişi söz dinlemez.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Öfke insanın muhakemesini kapatır.",
        options: [
            "Öfke, akıl sağlığını açar.",
            "Söz dinlemek, öfkeyi azaltır.",
            "Öfkeli kişi söz dinlemez.",
            "Muhakeme, öfkeyle kaybolur.",
        ],
        difficulty: "kolay",
    },
    {
        id: 182,
        sav: "Ödlek er kişi özin bilmes.",
        meaning: "Korkak insan kendini bilmez.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Korku, insanı gerçeklerden uzaklaştırır.",
        options: [
            "Kendini bilen korkmaz.",
            "Korkaklık, kendini bilmektir.",
            "Korkak insan kendini bilmez.",
            "Korku, insanın gerçekliğini görmesini engeller.",
        ],
        difficulty: "kolay",
    },
    {
        id: 183,
        sav: "Ögden söz çıksa ödke tegürür.",
        meaning: "Bilgiden söz çıkarsa kalbe dokunur.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Bilge söz insanı etkiler.",
        options: [
            "Söz, kalbe bilgiden önce ulaşır.",
            "Kalp, bilgiden rahatsız olur.",
            "Bilgiden söz çıkarsa kalbe dokunur.",
            "Bilgece sözler, insanı derinden etkiler.",
        ],
        difficulty: "kolay",
    },
    {
        id: 184,
        sav: "Ögsi kişi ögdin yıgranur.",
        meaning: "Bilgisiz insan bilgiden rahatsız olur.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Cahiller doğru bilgiyi sevmez.",
        options: [
            "Bilgisizlik, bilgiyi çeker.",
            "Bilgisiz kişi bilgiyi arar.",
            "Bilgisiz insan bilgiden rahatsız olur.",
            "Cahillik, doğruyu sevmez.",
        ],
        difficulty: "kolay",
    },
    {
        id: 185,
        sav: "Ögrünçlüg kişi sözlemez.",
        meaning: "Çekingen kişi konuşmaz.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Utangaçlık insanı geri çeker.",
        options: [
            "Konuşmak, çekingenliği yener.",
            "Çekingen kişi konuşmaz.",
            "Utangaçlık, kendini ifade etmeyi zorlaştırır.",
            "Çekingen, çok konuşur.",
        ],
        difficulty: "kolay",
    },
    {
        id: 186,
        sav: "Öküş söz kişi könglin sürer.",
        meaning: "Çok söz insanın gönlünü bozar.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Gereksiz konuşmak huzursuzluk getirir.",
        options: [
            "Gönül, çok söz ister.",
            "Çok söz, gönlü sürer.",
            "Çok söz insanın gönlünü bozar.",
            "Fazla konuşma huzur kaçırır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 187,
        sav: "Öküş kişi bir könglü barça köngülge yarar.",
        meaning: "Çok kişinin gönlü bir gönüle yarar.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Bir kişinin memnun edilmesi, kalabalığın memnuniyetinden değerlidir.",
        options: [
            "Bir gönül, çok kişiyi rahatlatır.",
            "Çok gönül bir kişiyi mutlu eder.",
            "Çok kişinin gönlü bir gönüle yarar.",
            "Azın memnuniyeti, çoğunluğunkinden değerlidir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 188,
        sav: "Öküş aş açka yarar.",
        meaning: "Çok yemek aça yarar.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Bolluk, ihtiyacı olana faydalıdır.",
        options: [
            "Yemek, aç kalmayı önler.",
            "Aç, çok yemeği sevmez.",
            "Çok yemek aça yarar.",
            "Bolluk, ihtiyacı olana fayda sağlar.",
        ],
        difficulty: "kolay",
    },
    {
        id: 189,
        sav: "Öl körki ölüm ermes.",
        meaning: "Güzellik ölüm değildir.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Güzel görünen şey tehlikeli olmayabilir.",
        options: [
            "Ölüm, güzelliği getirir.",
            "Güzellik, ölümden korkar.",
            "Güzel görünen, tehlikeli olabilir.",
            "Güzellik ölüm değildir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 190,
        sav: "Ölümke ökünç yaramas.",
        meaning: "Ölümde pişmanlık işe yaramaz.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Geri dönüşü olmayan şeylerde üzülmek fayda etmez.",
        options: [
            "Pişmanlık, ölümü engeller.",
            "Ölüm, pişmanlığı getirir.",
            "Ölümde pişmanlık işe yaramaz.",
            "Geri dönülmez durumlarda üzülmek faydasızdır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 191,
        sav: "Ölür er ölmeklig bolur.",
        meaning: "Ölecek olan insan ölür.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Kaçınılmaz olan engellenemez.",
        options: [
            "İnsan, ölmek istemez.",
            "Ölüm, insanı öldürür.",
            "Ölecek olan insan ölür.",
            "Kaçınılmaz olan gerçekleşir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 192,
        sav: "Önki söz öküş bolsa artukça yaramas.",
        meaning: "İlk söz çok olursa fazlası işe yaramaz.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Fazla konuşmak değeri düşürür.",
        options: [
            "Çok söz, ilk sözden iyidir.",
            "İlk söz her zaman az olmalıdır.",
            "İlk söz çok olursa fazlası işe yaramaz.",
            "Konuşmanın fazlası değer kaybettirir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 193,
        sav: "Ördeksüz köl bolmas.",
        meaning: "Ördeksiz göl olmaz.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Bir yerin doğal olanları eksikse o yer eksiktir.",
        options: [
            "Ördekler, gölü eksiksiz yapar.",
            "Göl, ördeksiz de güzeldir.",
            "Ördeksiz göl olmaz.",
            "Her ortamın kendine özgü parçaları vardır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 194,
        sav: "Örüng atlıg kişi közke yaramas.",
        meaning: "Beyaz atlı kişi göze görünmez.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Gösterişli olan bazen fark edilmeyebilir.",
        options: [
            "Beyaz atlı her zaman görünür.",
            "Beyaz atlılar göze batar.",
            "Beyaz atlı kişi göze görünmez.",
            "Gösteriş, fark edilmeyi engeller.",
        ],
        difficulty: "kolay",
    },
    {
        id: 195,
        sav: "Ötük barça adın bilir.",
        meaning: "Ayakkabı her şeyi bilir.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Çok gezen çok bilir.",
        options: [
            "Ayakkabı, her şeyi söylemez.",
            "Ayakkabı bilgisi gereksizdir.",
            "Ayakkabı her şeyi bilir.",
            "Çok gezen, çok şey öğrenir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 196,
        sav: "Öz kişi özi bilmes.",
        meaning: "İnsanı en çok kendisi bilmez.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "İnsan kendi kusurunu göremez.",
        options: [
            "Kendini bilen, öz kişidir.",
            "Öz kişi, başkasını bilmez.",
            "İnsanı en çok kendisi bilmez.",
            "İnsan, kendini tanımakta zorlanır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 197,
        sav: "Öz sözli kişi köngleklig bolur.",
        meaning: "Doğru sözlü insan gönüllüdür.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Dürüst insan güven verir.",
        options: [
            "Gönüllü, sözü doğru söyler.",
            "Sözlü olmak gönüllü olmak demektir.",
            "Doğru sözlü insan gönüllüdür.",
            "Dürüstlük, güven ve içtenlik getirir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 198,
        sav: "Özke öç tutma, öç seni tutar.",
        meaning: "Kine tutunma; kin seni tutar.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Kin insanı tüketir.",
        options: [
            "Kin tutmak insana güç verir.",
            "Kin, kişiyi serbest bırakır.",
            "Kine tutunma; kin seni tutar.",
            "Kötü duygular, kişiyi esir alır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 199,
        sav: "Özgin kişi özlek bilmes.",
        meaning: "Başkasına özenen kişi kendini bilmez.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Taklit eden kişi kim olduğunu unutmaya başlar.",
        options: [
            "Özlenen kişi, özünü bilir.",
            "Başkasına özenmek, özü bilmektir.",
            "Başkasına özenen kişi kendini bilmez.",
            "Taklit, kişinin özünü kaybettirir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 200,
        sav: "Özlüg kişi sözlüg bolur.",
        meaning: "Özlü insan sözlü olur.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Adam gibi olan adam gibi konuşur.",
        options: [
            "Sözlü olmak, özlü olmayı engeller.",
            "Öz, sözden önemlidir.",
            "Özlü insan sözlü olur.",
            "Dürüst ve nitelikli insan iyi konuşur.",
        ],
        difficulty: "kolay",
    },
    {
        id: 201,
        sav: "Sabınç birle sözüg tutsa kişi, sakınç birle turur.",
        meaning: "İnsan sözünü sabırla tutarsa, sıkıntıya dayanır.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Sabırlı insan güçlükleri aşar.",
        options: [
            "Sözü tutmak sıkıntı getirir.",
            "Sabır, sıkıntıya dayanmanın anahtarıdır.",
            "İnsan sözünü sabırla tutarsa, sıkıntıya dayanır.",
            "Sabır, sözü tutmayı kolaylaştırır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 202,
        sav: "Sabırsuz kişi küç tutmas.",
        meaning: "Sabırsız insan güç tutamaz.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Sabır olmadan başarı gelmez.",
        options: [
            "Güç, sabırsızlığı gerektirir.",
            "Sabırsızlık, gücü artırır.",
            "Sabırsız insan güç tutamaz.",
            "Başarı için sabır şarttır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 203,
        sav: "Saçınglıg kişi örüñ olur.",
        meaning: "Saçını (malını) dağıtan kişi yoksul olur.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Savurganlık insanı fakir eder.",
        options: [
            "Saçını dağıtan yoksulluktan kaçar.",
            "Mal dağıtmak zenginlik getirir.",
            "Saçını (malını) dağıtan kişi yoksul olur.",
            "Savurganlık fakirleştirir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 204,
        sav: "Sakınçsız kişi köñül bilmes.",
        meaning: "Sıkıntı görmemiş kişi gönül anlamaz.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Zorluk yaşamayan empati kuramaz.",
        options: [
            "Gönül, sıkıntısız da anlaşılır.",
            "Sıkıntısız kişi gönüllüdür.",
            "Sıkıntı görmemiş kişi gönül anlamaz.",
            "Tecrübesizlik, empati kurmayı zorlaştırır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 205,
        sav: "Sakınç erkeç kişi söz tutmas.",
        meaning: "Dertli kişi söz dinlemez.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Sorun yaşayan insan nasihati zor kabul eder.",
        options: [
            "Dert, söz dinlemeyi artırır.",
            "Söz tutmak, dertleri çözer.",
            "Dertli kişi söz dinlemez.",
            "Sorunlu kişi nasihati reddeder.",
        ],
        difficulty: "kolay",
    },
    {
        id: 206,
        sav: "Sakınç kişi sakınç bile bilür.",
        meaning: "Sıkıntı yaşayan, sıkıntıyı anlayarak bilir.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Acıyı çeken kişi başkasının acısını anlar.",
        options: [
            "Sıkıntıyı bilmek, sıkıntıyı engeller.",
            "Anlamak için sıkıntı çekmek gerekmez.",
            "Sıkıntı yaşayan, sıkıntıyı anlayarak bilir.",
            "Acıyı çeken, empati kurabilir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 207,
        sav: "Salık körklüg bolur.",
        meaning: "Sağlık güzelliktir.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Asıl güzellik sağlıktır.",
        options: [
            "Güzellik, sağlığın anahtarıdır.",
            "Sağlık, güzelliği bozar.",
            "Sağlık güzelliktir.",
            "Asıl değer sağlıkta gizlidir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 208,
        sav: "Samur yağun saksağan yeğ.",
        meaning: "Samurun yağı saksağandan iyidir.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Değerli olan her durumda daha iyidir.",
        options: [
            "Saksağan, samurdan daha değerlidir.",
            "Yağ, saksağanı iyileştirir.",
            "Samurun yağı saksağandan iyidir.",
            "Değerli olan her zaman üstündür.",
        ],
        difficulty: "kolay",
    },
    {
        id: 209,
        sav: "Sançuk kişi söz tutmas.",
        meaning: "Aceleci kişi söz dinlemez.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Acele eden akıllı davranamaz.",
        options: [
            "Söz, aceleciyi yavaşlatır.",
            "Aceleci kişi sözü iyi dinler.",
            "Aceleci kişi söz dinlemez.",
            "Acele, söz dinlemeyi zorlaştırır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 210,
        sav: "Sansa kişi sandın bilür.",
        meaning: "Soran kişi sandığını (bilgiyi) bilir.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Soru sormak öğrenmenin temelidir.",
        options: [
            "Sanılan, sorarak öğrenilmez.",
            "Bilgi, sormayı engeller.",
            "Soran kişi sandığını (bilgiyi) bilir.",
            "Soru sormak, bilgiye ulaşmanın yoludur.",
        ],
        difficulty: "kolay",
    },
    {
        id: 211,
        sav: "Sapug kişi sapug sözlemes.",
        meaning: "Temiz kişi kirli söz söylemez.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Karakteri düzgün olan kötü konuşmaz.",
        options: [
            "Kirli söz, temiz kişiye yakışır.",
            "Temiz kişi çok konuşur.",
            "Temiz kişi kirli söz söylemez.",
            "Karakter, konuşmayı belirler.",
        ],
        difficulty: "kolay",
    },
    {
        id: 212,
        sav: "Sarıg altun suwda çümez.",
        meaning: "Saf altın suda batmaz.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Gerçek değer kaybolmaz.",
        options: [
            "Altın suda çürür.",
            "Değerli olan korunur.",
            "Gerçek değer, zamanla kaybolur.",
            "Saf altın suda batmaz.",
        ],
        difficulty: "kolay",
    },
    {
        id: 213,
        sav: "Saru erçe saru bolur, kara erçe kara bolur.",
        meaning: "Sarı ile olan sararır, kara ile olan kararır.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "İnsan arkadaşından etkilenir.",
        options: [
            "Renkler, arkadaşlığı belirler.",
            "Kara ve sarı birbirini değiştirmez.",
            "Sarı ile olan sararır, kara ile olan kararır.",
            "Çevre, insanı etkiler.",
        ],
        difficulty: "kolay",
    },
    {
        id: 214,
        sav: "Sav köñülde tutsa tili barça bilür.",
        meaning: "Söz gönülde tutulursa, dili olan herkes anlar.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "İçten gelen söz etkilidir.",
        options: [
            "Gönülde tutulan söz anlaşılmaz.",
            "Dil, gönüldeki sözü bozar.",
            "Söz gönülde tutulursa, dili olan herkes anlar.",
            "İçtenlik, sözün etkisini artırır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 215,
        sav: "Savsız kişi sav bilmes.",
        meaning: "Sözü olmayan söz bilmez.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Bilgisi olmayan konuşamaz.",
        options: [
            "Söz bilmek, çok konuşmayı gerektirir.",
            "Sözsüz kişi, çok şey bilir.",
            "Sözü olmayan söz bilmez.",
            "Bilgisizlik, konuşmayı engeller.",
        ],
        difficulty: "kolay",
    },
    {
        id: 216,
        sav: "Savçı kişi savçı bolur.",
        meaning: "Söz ustası söz ustası olur.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Ustalık çalışarak kazanılır.",
        options: [
            "Ustalık, doğuştan gelir.",
            "Söz ustası, başkasını dinlemez.",
            "Söz ustası söz ustası olur.",
            "Tecrübe, ustalaşmayı sağlar.",
        ],
        difficulty: "kolay",
    },
    {
        id: 217,
        sav: "Sawsuz kişi iç sözün bilmes.",
        meaning: "Sözü olmayan kişi işin özünü bilmez.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Anlamayan yorum yapamaz.",
        options: [
            "İç söz, dış sözden bağımsızdır.",
            "İşin özü, sözsüz bilinir.",
            "Sözü olmayan kişi işin özünü bilmez.",
            "Yorum yapamayan, derinliği kavrayamaz.",
        ],
        difficulty: "kolay",
    },
    {
        id: 218,
        sav: "Sayu kişi saŋa yarar.",
        meaning: "Düşünen kişi sana yarar.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Akıllı insanlar faydalıdır.",
        options: [
            "Sana yarayan kişi düşünmez.",
            "Düşünmek, yararsızdır.",
            "Düşünen kişi sana yarar.",
            "Akıl, fayda getirir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 219,
        sav: "Sazlık yerke kaz yarar.",
        meaning: "Bataklık yere kaz yakışır.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Her şey kendi ortamında güzeldir.",
        options: [
            "Kaz, sazlığı sevmez.",
            "Bataklık, kazı batırır.",
            "Bataklık yere kaz yakışır.",
            "Her şey kendi ortamında değerlidir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 220,
        sav: "Seçük kişi küç tutmas.",
        meaning: "Zayıf kişi güç tutamaz.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Güçsüz olan büyük sorumluluk taşıyamaz.",
        options: [
            "Güç, zayıfı sever.",
            "Zayıf, güçlüden daha dayanıklıdır.",
            "Zayıf kişi güç tutamaz.",
            "Güçsüzlük, büyük sorumluluklara engeldir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 221,
        sav: "Selüksüz kişi söz tutmas.",
        meaning: "Terbiyesiz kişi söz dinlemez.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Görgüsü olmayan insan öğüt kabul etmez.",
        options: [
            "Söz dinlemek, görgü gerektirmez.",
            "Terbiyesiz, en çok söz dinleyendir.",
            "Terbiyesiz kişi söz dinlemez.",
            "Terbiyesizlik, öğüt kabul etmeyi engeller.",
        ],
        difficulty: "kolay",
    },
    {
        id: 222,
        sav: "Semüz kişi ögdi sözlemes.",
        meaning: "Şişman (rahat) kişi öfkeyle konuşmaz.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Rahatı yerinde olan insan kolay kolay sinirlenmez.",
        options: [
            "Şişman kişi öfkeli olur.",
            "Öfkeyle konuşmak şişmanlatır.",
            "Şişman (rahat) kişi öfkeyle konuşmaz.",
            "Rahatlık, sinirlenmeyi azaltır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 223,
        sav: "Sığ kişi söz bilmes.",
        meaning: "Sığ insan söz anlamaz.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Derinliği olmayan insan düşünceleri kavrayamaz.",
        options: [
            "Söz, sığ insanı derinleştirir.",
            "Sığ kişi çok söz bilir.",
            "Sığ insan söz anlamaz.",
            "Derinlik olmayan, düşünceyi kavrayamaz.",
        ],
        difficulty: "kolay",
    },
    {
        id: 224,
        sav: "Sıluk kişi köni bolmas.",
        meaning: "Kaygan insan doğru olmaz.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Güvenilmez kişiye güven olmaz.",
        options: [
            "Kaygan kişi, doğruyu söyler.",
            "Doğruluk, kayganlığı artırır.",
            "Kaygan insan doğru olmaz.",
            "Güvenilmezlik, dürüstlüğü engeller.",
        ],
        difficulty: "kolay",
    },
    {
        id: 225,
        sav: "Sırlıg taşka tarluk bolur.",
        meaning: "Sırlı taş bile zamanla aşınır.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Hiçbir şey zamana dayanmaz.",
        options: [
            "Taşın sırrı aşınmaz.",
            "Zaman, taşın sırrını ortaya çıkarır.",
            "Sırlı taş bile zamanla aşınır.",
            "Her şey geçicidir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 226,
        sav: "Sök kişi küç tutmas.",
        meaning: "Kırık dökük insan güç tutamaz.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Düzenli olmayan kişi sorumluluk taşıyamaz.",
        options: [
            "Güç, kırık dökükleri sever.",
            "Kırık dökük insan güçlüdür.",
            "Kırık dökük insan güç tutamaz.",
            "Düzenli olmayan, sorumluluk alamaz.",
        ],
        difficulty: "kolay",
    },
    {
        id: 227,
        sav: "Söz kişi könglin açar.",
        meaning: "Söz insanın gönlünü açar.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Güzel söz kalbi yumuşatır.",
        options: [
            "Gönül, sözle kapanır.",
            "Söz, insanı yorar.",
            "Söz insanın gönlünü açar.",
            "Güzel söz, kalbi yumuşatır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 228,
        sav: "Söz köngülde tursa köl irür.",
        meaning: "Söz gönülde durursa su gibi akar.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "İçten gelen söz etkileyici olur.",
        options: [
            "Gönül, sözü tutar.",
            "Su gibi akan söz değersizdir.",
            "Söz gönülde durursa su gibi akar.",
            "İçten gelen söz akıcı ve etkilidir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 229,
        sav: "Sözlük kişi özin tutar.",
        meaning: "Söz sahibi kişi kendini tutar.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Bilgili insan davranışlarına dikkat eder.",
        options: [
            "Söz sahibi olmak, kontrolü kaybettirir.",
            "Kendini tutmak, sözü engeller.",
            "Söz sahibi kişi kendini tutar.",
            "Bilgili insan kontrollü davranır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 230,
        sav: "Soğ kişi söz bilmes.",
        meaning: "Soğuk kişi söz bilmez.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "İlgisiz insan anlamaz.",
        options: [
            "Söz, soğuk kişiyi ısıtır.",
            "Soğuk kişi çok söz bilir.",
            "Soğuk kişi söz bilmez.",
            "İlgisiz insan, anlamayı reddeder.",
        ],
        difficulty: "kolay",
    },
    {
        id: 231,
        sav: "Soğuk su tışka yarar.",
        meaning: "Soğuk su dışa yarar.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Bazı şeyler sadece dıştan işe yarar (mecazi).",
        options: [
            "Soğuk su içe yarar.",
            "Dışarıya yarayan soğuktur.",
            "Soğuk su dışa yarar.",
            "Bazı şeyler sadece yüzeyde etkilidir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 232,
        sav: "Sög tutsa kişi küç irür.",
        meaning: "Sözünü tutan kişi güç bulur.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Verdiği sözü yerine getiren insan güçlüdür.",
        options: [
            "Güç, söz tutmayı engeller.",
            "Söz tutmak, güçten kaçmaktır.",
            "Sözünü tutan kişi güç bulur.",
            "Dürüstlük, insanı güçlendirir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 233,
        sav: "Sög könglin yarar.",
        meaning: "Söz gönle yarar.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Güzel söz insana iyi gelir.",
        options: [
            "Söz, gönlü yorar.",
            "Gönül, sözle yarılır.",
            "Söz gönle yarar.",
            "Güzel söz, insana iyi hissettirir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 234,
        sav: "Sökünç kişi ötrü turmas.",
        meaning: "Kırılgan kişi düzgün duramaz.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Hassas insan zor dayanır.",
        options: [
            "Kırılganlık, gücü artırır.",
            "Düzgün duran, kırılmaz.",
            "Kırılgan kişi düzgün duramaz.",
            "Hassas insanlar ayakta durmakta zorlanır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 235,
        sav: "Sözsiz kişi söz tutmas.",
        meaning: "Sözü olmayan söz tutmaz.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Boş insan başkasının sözünden anlamaz.",
        options: [
            "Sözü olmayan söz dinler.",
            "Söz, sözsüzlüğü engeller.",
            "Sözü olmayan söz tutmaz.",
            "Boş insan, öğüt alamaz.",
        ],
        difficulty: "kolay",
    },
    {
        id: 236,
        sav: "Süzük kişi küç tutmas.",
        meaning: "Pısırık insan güç tutamaz.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Cesaretsiz kişiye sorumluluk verilmez.",
        options: [
            "Pısırık, gücü sever.",
            "Güç, pısırığı büyütür.",
            "Pısırık insan güç tutamaz.",
            "Cesaret, sorumluluk için gereklidir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 237,
        sav: "Süzüg kişi köngül bilmes.",
        meaning: "Cılız insan gönül bilmez.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Hayat görmemiş kişi duyguyu anlamaz.",
        options: [
            "Gönül, cılızlığı engeller.",
            "Cılız insan gönüllüdür.",
            "Cılız insan gönül bilmez.",
            "Hayat tecrübesi olmayan, duyguları anlayamaz.",
        ],
        difficulty: "kolay",
    },
    {
        id: 238,
        sav: "Sü yirde saklanur.",
        meaning: "Su yerde saklanır.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Gerçek değer bazen gizlidir.",
        options: [
            "Su, yerin üstünde akar.",
            "Yer, suyu açığa çıkarır.",
            "Su yerde saklanır.",
            "Gerçek değer, gizlide saklıdır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 239,
        sav: "Sük özelür, söz uzarur.",
        meaning: "Sessizlik kısa sürer, söz uzar.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Konuşma başladığında uzun sürer.",
        options: [
            "Söz, sessizliği uzatır.",
            "Sessizlik, sözden daha uzundur.",
            "Sessizlik kısa sürer, söz uzar.",
            "Konuşma başladığında devam eder.",
        ],
        difficulty: "kolay",
    },
    {
        id: 240,
        sav: "Süleşke barçıg kişi barır.",
        meaning: "Kavgaya herkes gider.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Tartışmaya herkes katılır; huzur zor korunur.",
        options: [
            "Kavga, az kişiyle yapılır.",
            "Barış, kavgaya gider.",
            "Kavgaya herkes gider.",
            "Tartışmaya herkesin ilgisi vardır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 241,
        sav: "Süleş süsi ötrü bolur.",
        meaning: "Kavga, kavganın sesiyle olur.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Gürültü çoğu zaman kavgayı büyütür.",
        options: [
            "Kavganın sesi, kavgayı bitirir.",
            "Savaş, sessiz olur.",
            "Kavga, kavganın sesiyle olur.",
            "Gürültü, çatışmayı büyütür.",
        ],
        difficulty: "kolay",
    },
    {
        id: 242,
        sav: "Süngüsi kökçe bolur.",
        meaning: "Mızrağı göğe doğru olur.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Güçlü kişi hedefini yüksekte tutar.",
        options: [
            "Mızrak, yere doğru olmalıdır.",
            "Gök, mızrağı çeker.",
            "Mızrağı göğe doğru olur.",
            "Güçlü olan yüksek hedefler koyar.",
        ],
        difficulty: "kolay",
    },
    {
        id: 243,
        sav: "Sürüsüz kişi yaragsız bolur.",
        meaning: "Sürüsü olmayan silahsız sayılır.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Mal, kişiye güç verir.",
        options: [
            "Silah, sürüden önemlidir.",
            "Sürü, silahsız kişiyi korur.",
            "Sürüsü olmayan silahsız sayılır.",
            "Mal ve mülk, kişiye güç verir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 244,
        sav: "Süzük öküşke yarar.",
        meaning: "İnce olan çok şeye yarar.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Zarif olan, birçok alanda işe yarar.",
        options: [
            "İnce olan az şeye yarar.",
            "Çok olan, inceye yarar.",
            "İnce olan çok şeye yarar.",
            "Zarafet ve incelik çok yönlüdür.",
        ],
        difficulty: "kolay",
    },
    {
        id: 245,
        sav: "Sözünç kişi söz bilmes.",
        meaning: "Çok konuşan söz anlamaz.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Çok konuşan, genelde derin anlamı kavrayamaz.",
        options: [
            "Çok konuşmak, sözü bilmektir.",
            "Sözü anlamak, konuşmayı gerektirir.",
            "Çok konuşan söz anlamaz.",
            "Fazla laf, anlamayı engeller.",
        ],
        difficulty: "kolay",
    },
    {
        id: 246,
        sav: "Tabgaç kölinde tazı bolur.",
        meaning: "Çin gölünde tazı olur.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Her bölgenin kendine özgü özellikleri vardır.",
        options: [
            "Tazı, Çin gölünü sevmez.",
            "Göl, tazıyı boğar.",
            "Çin gölünde tazı olur.",
            "Her bölgenin kendine has özellikleri vardır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 247,
        sav: "Tamak köngülke yarar.",
        meaning: "Yemek gönle yarar.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "İkram, kalpleri yumuşatır.",
        options: [
            "Gönül, yemekten uzaktır.",
            "Yemek, gönlü bozar.",
            "Yemek gönle yarar.",
            "Yiyecek, kalbi yumuşatır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 248,
        sav: "Tamaklıg kişi yaragsız bolmas.",
        meaning: "Tok olan kişi silahsız olmaz.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "İmkânı olan, hazırlıklı olur.",
        options: [
            "Tok olmak, silahsız olmaktır.",
            "Silahsız kişi toktur.",
            "Tok olan kişi silahsız olmaz.",
            "İmkan sahibi olan hazırlıklıdır.",
        ],
        difficulty: "kolay",
    },
    {
        id: 249,
        sav: "Tanuda uluş bolur.",
        meaning: "Sabah vakti bereket olur.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Erken kalkan kazanç sağlar.",
        options: [
            "Sabah, bereketsizdir.",
            "Bereket, gündüz olur.",
            "Sabah vakti bereket olur.",
            "Erken uyanmak, kazanç getirir.",
        ],
        difficulty: "kolay",
    },
    {
        id: 250,
        sav: "Tanuk kişi söz bilür.",
        meaning: "Tanık kişi sözü bilir.",
        // ✨ YENİ ALAN EKLENDİ
        fullMeaning:
            "Olayı gören doğruyu söyler.",
        options: [
            "Tanık, sözü bozabilir.",
            "Sözü bilen tanık olmaz.",
            "Tanık kişi sözü bilir.",
            "Olayı gören doğruyu anlar.",
        ],
        difficulty: "kolay",
    },
];
const carkSavlari = [
    { sav: "Tapınçlıg kişi könglüg bolur.", meaning: "Saygılı kişi gönüllü olur." },
    { sav: "Tarug kölke kaz yarar.", meaning: "Sığ göle kaz yakışır." },
    { sav: "Taş üze tamak bolmas.", meaning: "Taş üstünde yemek olmaz." },
    { sav: "Taş kötermiş kişi yorığ bolur.", meaning: "Taş kaldırmış kişi yorgun olur." },
    { sav: "Taş kötermiş kişi küç tutar.", meaning: "Taş kaldıran kişi güç kazanır." },
    { sav: "Taş oğlan tüpke yarar.", meaning: "Sert çocuk temel olur." },
    { sav: "Teŋri küç birtüg.", meaning: "Tanrı güç verdi." },
    { sav: "Tengri bilse kişi ne kılsın.", meaning: "Tanrı bilirse insan ne yapabilir?" },
    { sav: "Tenri adın bilür.", meaning: "Tanrı adını bilir." },
    { sav: "Tengri boldurdukça kişi bolur.", meaning: "Tanrı diledikçe insan olur." },
    { sav: "Tengri yagı berser kişi ne kılsar.", meaning: "Tanrı düşman verirse insan ne yapabilir?" },
    { sav: "Tengri bolmasa kişi ne bolur.", meaning: "Tanrı olmasa insan ne olur?" },
    { sav: "Tengri birdükçe tegir.", meaning: "Tanrı verdikçe yürünür." },
    { sav: "Teŋri ıdısın boltum.", meaning: "Tanrı’nın lütfuna erdim." },
    { sav: "Teŋride bolmış kişi tirig bolur.", meaning: "Tanrı’da olan kişi diri olur." },
    { sav: "Tidmiş kişi söz bilmes.", meaning: "Kocamış (yaşlı) kişi söz bilmez." },
    { sav: "Til kişi tili bile ölür.", meaning: "Dilsiz kişi diliyle ölür." },
    { sav: "Til başı tışıglıg.", meaning: "Dilin başı dışarıdadır." },
    { sav: "Tilke açlık yaramas.", meaning: "Dile açlık yarar sağlamaz." },
    { sav: "Tınlıg kişi tilsiz bolmas.", meaning: "Canlı insan dilsiz olmaz." },
    { sav: "Tınsız kişi köngül bilmes.", meaning: "Soluksuz (bitkin) kişi gönül anlamaz." },
    { sav: "Tok kişi tamak bilmes.", meaning: "Tok kişi yemeğin değerini bilmez." },
    { sav: "Tok tüşse tamak yagmaz.", meaning: "Tok düşerse yemeğe değer vermez." },
    { sav: "Toprakka işledüg kişi küçlenür.", meaning: "Toprakta çalışan kişi güçlenir." },
    { sav: "Törüsüz kişi törü bilmes.", meaning: "Terbiyesiz kişi töre bilmez." },
    { sav: "Törü kişi söz tutar.", meaning: "Töreli (görgülü) kişi söz tutar." },
    { sav: "Törü bilse kişige yarar.", meaning: "Töreyi bilen insana yarar sağlar." },
    { sav: "Töz kişi özin bilür.", meaning: "Asil insan kendini bilir." },
    { sav: "Uçmak kişi uçmağ bolur.", meaning: "Cennet olan kişi cennet gibi olur." },
    { sav: "Udugsuz kişi udh bilmes.", meaning: "Uyumsuz kişi zaman bilmez." },
    { sav: "Ulaglıg kişi yol bilür.", meaning: "Binekliyi olan yol bilir." },
    { sav: "Ulag bolur, yol bolmas.", meaning: "Binek olur, yol olmaz." },
    { sav: "Uluğ kişi uluğlugın bilür.", meaning: "Büyük insan büyüklüğünü bilir." }
];

let debugMode = false; // Varsayılan olarak kapalı


const gameState = {
    currentSet: [],
    currentQuestionIndex: 0,
    correctAnswersInSet: 0,
    totalStars: 0,
    wheelRights: 0,
    currentSetStartIndex: 0,
    totalTrophies: 0,
    currentTitle: "-",
    availableCarkSavlari: [],
    currentStreak: 0,      
    questionStartTime: 0   
};

const titles = [
    { trophies: 0, name: "-", icon: "🏆", description: "Henüz ünvan kazanmadınız" },
    { trophies: 1, name: "Kopuzcu", icon: "🎵", description: "Kültür yolunun ilk adımı." },
    { trophies: 2, name: "Otağ Sakini", icon: "⚔️", description: "Yazılı kültürü temsil eder." },
    { trophies: 3, name: "Katip", icon: "📜", description: "Devlet bilinci sahibi." },
    { trophies: 4, name: "Has Hacip", icon: "✒️", description: "Derin felsefeye hakim." },
    { trophies: 5, name: "Kaşgarlı Mahmut", icon: "📚", description: "Zirve! Türk dilinin piri." },
];

function analizKaydet(savAdi, durum, sureMs) {
    const sureSaniye = (sureMs / 1000).toFixed(2);
    
    const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSf1qCe8tFmsctfauDSS1Ky7GkB_zrhhzbQz-fVU50XXON_qmg/formResponse"; 
    
    const urlParams = new URLSearchParams();
    urlParams.append("entry.1651670903", savAdi);
    urlParams.append("entry.1364601985", durum);
    urlParams.append("entry.615675938", sureSaniye);

    fetch(formURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: urlParams.toString()
    })
    .then(() => console.log("Bulut kaydı denendi: " + savAdi))
    .catch(e => console.error("Bağlantı hatası:", e));

    let yerelVeriler = JSON.parse(localStorage.getItem("savHataAnalizi")) || [];
    
    yerelVeriler.push({
        sav: savAdi,
        durum: durum,
        sure: sureSaniye,
        tarih: new Date().toLocaleTimeString()
    });

    if (yerelVeriler.length > 100) {
        yerelVeriler = yerelVeriler.slice(-100);
    }

    localStorage.setItem("savHataAnalizi", JSON.stringify(yerelVeriler));
}

// 📊 JÜRİ PANELİ
function juriRaporu() {
    const veriler = JSON.parse(localStorage.getItem("savHataAnalizi"));
    if (!veriler || veriler.length === 0) {
        console.warn("Henüz veri toplanmadı. Lütfen birkaç soru çözün.");
        return;
    }
    
    console.log("%c--- BİLİŞSEL ÖĞRENME VE TEPKİ SÜRESİ ANALİZİ ---", "color: #C9A961; font-weight: bold; font-size: 16px; background: #222; padding: 10px;");
    
    // İstatistikler
    const toplam = veriler.length;
    const dogrular = veriler.filter(v => v.durum === "Dogru");
    
    let ortSure = 0;
    if(dogrular.length > 0) {
        ortSure = dogrular.reduce((acc, curr) => acc + parseFloat(curr.sure), 0) / dogrular.length;
    }
    
    console.log(`📌 Toplam Veri: ${toplam}`);
    console.log(`✅ Doğru Sayısı: ${dogrular.length}`);
    console.log(`⚡ Ortalama Doğru Cevap Süresi: ${ortSure.toFixed(2)} saniye`);
    console.log(`(Not: 2sn altı 'Otomatikleşmiş Bilgi', 5sn üstü 'İşlemleme Süreci' olarak yorumlanır.)`);
    
    console.table(veriler.slice(-15)); // Son 15 hareketi tablo yap
}
window.juriRaporu = juriRaporu;

function sesliOku(metin) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); 

        // Gelişmiş Alfabe Dönüştürücü (Fonetik Yama)
        let telaffuzMetni = metin.toLowerCase()
            .replace(/q/g, "k")    // q -> k
            .replace(/w/g, "v")    // w -> v
            .replace(/x/g, "ks")   // x -> ks
            .replace(/ŋ/g, "n")    // sağır n
            .replace(/ñ/g, "n");

        const utterance = new SpeechSynthesisUtterance(telaffuzMetni);
        const voices = window.speechSynthesis.getVoices();
        
        // En net Türkçe sesi seçmeye çalış
        let secilenSes = voices.find(v => v.lang.includes('tr') && v.name.includes('Google')) || 
                         voices.find(v => v.lang.includes('tr'));

        if (secilenSes) utterance.voice = secilenSes;

        utterance.lang = 'tr-TR'; 
        utterance.rate = 0.8; // Daha tane tane okuma için hızı biraz daha düşürdüm
        window.speechSynthesis.speak(utterance);
    }
}

if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
    };
}


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function loadGameState() {
    const saved = localStorage.getItem("unutulanSavlarGameState");
    if (saved) {
        const parsedState = JSON.parse(saved);
        Object.assign(gameState, parsedState);
    }
    
    if (!gameState.availableCarkSavlari || gameState.availableCarkSavlari.length === 0) {
        gameState.availableCarkSavlari = [...carkSavlari];
        shuffleArray(gameState.availableCarkSavlari);
    }
}

function saveGameState() {
    localStorage.setItem("unutulanSavlarGameState", JSON.stringify(gameState));
}

function getCurrentTitle(trophyCount) {
    for (let i = titles.length - 1; i >= 0; i--) {
        if (trophyCount >= titles[i].trophies) {
            return titles[i];
        }
    }
    return titles[0];
}

function showScreen(screenId) {
    document.querySelectorAll(".screen").forEach((screen) => {
        screen.classList.remove("active");
    });
    document.getElementById(screenId).classList.add("active");
}

function startGame() {
    loadGameState();
    loadNewSet();
    showScreen("gameScreen");
}

function loadNewSet() {
    const startIndex = gameState.currentSetStartIndex;

    let safeStartIndex = startIndex % savlarData.length;
    
    const endIndex = Math.min(safeStartIndex + 10, savlarData.length);

    if (savlarData.length > 0) {
        gameState.currentSet = savlarData.slice(safeStartIndex, endIndex);
        
        // Liste sonuna geldiysek ve 10'a tamamlamak gerekiyorsa başa dön
        if(gameState.currentSet.length < 10 && savlarData.length >= 10) {
             const needed = 10 - gameState.currentSet.length;
             gameState.currentSet = gameState.currentSet.concat(savlarData.slice(0, needed));
        }
    }
    
    shuffleArray(gameState.currentSet);

    gameState.currentQuestionIndex = 0;
    gameState.correctAnswersInSet = 0;


    displayQuestion();
    updateStats();
}

function displayQuestion() {
    if (gameState.currentSet.length === 0) return;

    const question = gameState.currentSet[gameState.currentQuestionIndex];
    const qTextElement = document.getElementById("questionText");
    
    qTextElement.innerHTML = ""; 
    qTextElement.textContent = question.sav;

    const speakBtn = document.createElement("span"); 
    speakBtn.id = "speakBtn";
    speakBtn.innerHTML = " 🔊"; 
    speakBtn.style.cursor = "pointer";
    speakBtn.style.marginLeft = "10px";
    speakBtn.onclick = (e) => {
        e.stopPropagation();
        sesliOku(question.sav);
    };
    qTextElement.appendChild(speakBtn);

    const fullMeaningDisplay = document.getElementById("fullMeaningDisplay");
    if (fullMeaningDisplay) fullMeaningDisplay.classList.add("hidden");

    const optionsContainer = document.getElementById("optionsContainer");
    optionsContainer.innerHTML = "";

    question.options.forEach((option) => {
        const button = document.createElement("button");
        button.className = "option-btn";

        let gosterilecekMetin = option;
        if (typeof debugMode !== 'undefined' && debugMode === true) {
            if (option === question.meaning) {
                gosterilecekMetin += " ★";
            }
        }
        
        button.textContent = gosterilecekMetin;
        button.onclick = () => checkAnswer(option, button);
        optionsContainer.appendChild(button);
    });

    gameState.questionStartTime = Date.now();
    updateStats();
}

function displayQuestion() {
    if (gameState.currentSet.length === 0) return;

    const question = gameState.currentSet[gameState.currentQuestionIndex];
    const qTextElement = document.getElementById("questionText");
    
    qTextElement.innerHTML = ""; 
    qTextElement.textContent = question.sav;

    const speakBtn = document.createElement("span"); 
    speakBtn.id = "speakBtn";
    speakBtn.innerHTML = " 🔊"; 
    speakBtn.style.cursor = "pointer";
    speakBtn.style.marginLeft = "10px";
    speakBtn.onclick = (e) => {
        e.stopPropagation();
        sesliOku(question.sav);
    };
    qTextElement.appendChild(speakBtn);

    const fullMeaningDisplay = document.getElementById("fullMeaningDisplay");
    if (fullMeaningDisplay) fullMeaningDisplay.classList.add("hidden");


    const optionsContainer = document.getElementById("optionsContainer");
    optionsContainer.innerHTML = "";

    question.options.forEach((option) => {
        const button = document.createElement("button");
        button.className = "option-btn";
        

        let gosterilecekMetin = option;
        if (typeof debugMode !== 'undefined' && debugMode === true) {
            if (option === question.meaning) {
                gosterilecekMetin += " ★";
            }
        }
        
        button.textContent = gosterilecekMetin;
        button.onclick = () => checkAnswer(option, button);
        optionsContainer.appendChild(button);
    });

    gameState.questionStartTime = Date.now();
    updateStats();
}

function nextQuestion() {
    const fullMeaningDisplay = document.getElementById("fullMeaningDisplay");
    if (fullMeaningDisplay) fullMeaningDisplay.classList.add("hidden");

    if (gameState.correctAnswersInSet === 10) {
        // Set Bitti
        gameState.totalStars++;
        gameState.wheelRights++;

        let message = "10 savı doğru bildiniz!";
        let modalTitle = "Set Tamamlandı!";
        let modalIcon = "★";

        if (gameState.totalStars % 5 === 0) {
            gameState.totalTrophies = Math.floor(gameState.totalStars / 5);
            const newTitle = getCurrentTitle(gameState.totalTrophies);
            gameState.currentTitle = newTitle.name;
            
            modalIcon = newTitle.icon;
            modalTitle = "Yeni Ünvan!";
            
            // HTML kullanmadan, düz satır atlama (\n) ile açıklamayı ekledik
            message = '"' + newTitle.name + '" ünvanını kazandınız!\n\n' + newTitle.description;
        }

        saveGameState();
        showModal(modalIcon, modalTitle, message);

        gameState.currentSetStartIndex = (gameState.currentSetStartIndex + 10) % savlarData.length;
        saveGameState();

        setTimeout(() => {
            loadNewSet();
        }, 500);
    } else {
        gameState.currentQuestionIndex++;
        displayQuestion();
    }
}

function nextQuestion() {
    const fullMeaningDisplay = document.getElementById("fullMeaningDisplay");
    if (fullMeaningDisplay) fullMeaningDisplay.classList.add("hidden");

    if (gameState.correctAnswersInSet === 10) {
        // Set Bitti
        gameState.totalStars++;
        gameState.wheelRights++;

        let message = `10 savı doğru bildiniz!`;
        let modalTitle = "Set Tamamlandı!";
        let modalIcon = "★";

        if (gameState.totalStars % 5 === 0) {
            gameState.totalTrophies = Math.floor(gameState.totalStars / 5);
            const newTitle = getCurrentTitle(gameState.totalTrophies);
            gameState.currentTitle = newTitle.name;
            modalIcon = newTitle.icon;
            modalTitle = "Yeni Ünvan!";
            message = `${newTitle.name} ünvanını kazandınız!`;
        }

        saveGameState();
        showModal(modalIcon, modalTitle, message);

        gameState.currentSetStartIndex = (gameState.currentSetStartIndex + 10) % savlarData.length;
        saveGameState();

        setTimeout(() => {
            loadNewSet();
        }, 500);
    } else {
        gameState.currentQuestionIndex++;
        displayQuestion();
    }
}

// Cevap Kontrolü
function checkAnswer(selectedOption, button) {
    const question = gameState.currentSet[gameState.currentQuestionIndex];
    const allButtons = document.querySelectorAll(".option-btn");
    
    //SÜRE HESAPLA
    const endTime = Date.now();
    const duration = endTime - gameState.questionStartTime;

    allButtons.forEach((btn) => (btn.disabled = true));

    if (selectedOption === question.meaning) {
        // --- DOĞRU CEVAP ---
        button.classList.add("correct");
        gameState.correctAnswersInSet++;
        gameState.currentStreak++; 

        // Veriyi Kaydet
        analizKaydet(question.sav, "Dogru", duration);

        const fullMeaningDisplay = document.getElementById("fullMeaningDisplay");
        const fullMeaningText = document.getElementById("fullMeaningText");

        if (fullMeaningDisplay && fullMeaningText) {
            fullMeaningText.textContent = question.fullMeaning || question.meaning;
            fullMeaningDisplay.classList.remove("hidden");
            
            fullMeaningDisplay.scrollIntoView({ behavior: 'smooth', block: 'start' });

            let nextBtn = fullMeaningDisplay.querySelector("#nextQuestionBtn");
            if (!nextBtn) {
                nextBtn = document.createElement("button");
                nextBtn.id = "nextQuestionBtn";
                nextBtn.className = "btn-primary next-question-btn";
                fullMeaningDisplay.appendChild(nextBtn);
            }
            
            nextBtn.textContent = gameState.correctAnswersInSet === 10 ? "Seti Bitir" : "Sonraki Sav";
            nextBtn.onclick = nextQuestion;
        }
    } else {
        // --- YANLIŞ CEVAP ---
        button.classList.add("incorrect");
        gameState.currentStreak = 0; 

        // Veriyi Kaydet
        analizKaydet(question.sav, "Yanlis", duration);

        allButtons.forEach((btn) => {
            if (btn.textContent === question.meaning) {
                btn.classList.add("correct");
            }
        });

        setTimeout(() => {
            showModal("✕", "Yanlış Cevap", `Doğru cevap: "${question.meaning}". Seri bozuldu, seti tekrar ediyoruz.`);
            setTimeout(() => {
                shuffleArray(gameState.currentSet);
                gameState.currentQuestionIndex = 0;
                gameState.correctAnswersInSet = 0;
                gameState.currentStreak = 0;
                displayQuestion();
            }, 1000);
        }, 1200);
    }
    updateStats();
}

function updateStats() {
    document.getElementById("starCount").textContent = gameState.totalStars;
    document.getElementById("questionProgress").textContent = `${gameState.correctAnswersInSet}/10`;
    document.getElementById("wheelRights").textContent = gameState.wheelRights;
    document.getElementById("trophyCount").textContent = gameState.totalTrophies;

    const currentTitle = getCurrentTitle(gameState.totalTrophies);
    document.getElementById("titleText").textContent = currentTitle.name;
    document.getElementById("trophyIcon").textContent = currentTitle.icon;

    const wheelButton = document.getElementById("wheelButton");
    if(wheelButton) wheelButton.disabled = gameState.wheelRights === 0;

    // SERİ (STREAK) GÖSTERGESİ
    let streakElem = document.getElementById("streakDisplay");
    
    if (!streakElem) {
        const starIcon = document.querySelector(".star-icon");
        if(starIcon) {
            const parentCard = starIcon.closest(".stat-card"); 
            if(parentCard) {
                streakElem = document.createElement("div");
                streakElem.id = "streakDisplay";
                streakElem.style.position = "absolute"; 
                streakElem.style.top = "-10px";
                streakElem.style.right = "-10px";
                streakElem.style.background = "#FF4500";
                streakElem.style.color = "#fff";
                streakElem.style.borderRadius = "50%";
                streakElem.style.padding = "5px 8px";
                streakElem.style.fontSize = "12px";
                streakElem.style.fontWeight = "bold";
                streakElem.style.boxShadow = "0 2px 4px rgba(0,0,0,0.3)";
                streakElem.style.zIndex = "10";
                streakElem.style.display = "none"; 
                
                parentCard.style.position = "relative";
                parentCard.appendChild(streakElem);
            }
        }
    }
    
    if(streakElem) {
         if(gameState.currentStreak > 1) {
             streakElem.textContent = `🔥${gameState.currentStreak}`;
             streakElem.style.display = "block";
             streakElem.style.transform = "scale(1.2)";
             setTimeout(() => streakElem.style.transform = "scale(1)", 200);
         } else {
             streakElem.style.display = "none";
         }
    }

    const progressFill = document.getElementById("progressFill");
    if(progressFill) {
        const percentage = (gameState.correctAnswersInSet / 10) * 100;
        progressFill.style.width = `${percentage}%`;
    }
    saveGameState();
}

function showModal(icon, title, message) {
    document.getElementById("modalIcon").textContent = icon;
    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalMessage").textContent = message;
    document.getElementById("resultModal").classList.remove("hidden");
}

function closeModal() {
    document.getElementById("resultModal").classList.add("hidden");
}

function openWheel() {
    if (gameState.wheelRights > 0) {
        showScreen("wheelScreen");
        drawWheel();
        document.getElementById("wheelResult").classList.add("hidden");
        document.getElementById("spinButton").disabled = false;
    }
}

function drawWheel() {
    const canvas = document.getElementById("wheelCanvas");
    if(!canvas) return;
    const ctx = canvas.getContext("2d");
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 180;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const slices = 8;
    const sliceAngle = (2 * Math.PI) / slices;
    const colors = ["#6B4423", "#4A90A4", "#C9A961", "#A0522D", "#D4B896", "#6B4423", "#4A90A4", "#C9A961"];

    for (let i = 0; i < slices; i++) {
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, i * sliceAngle, (i + 1) * sliceAngle);
        ctx.closePath();
        ctx.fillStyle = colors[i];
        ctx.fill();
        ctx.strokeStyle = "#FFF8E7";
        ctx.lineWidth = 3;
        ctx.stroke();

        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate((i + 0.5) * sliceAngle);
        ctx.fillStyle = "#FFF8E7";
        ctx.font = "bold 20px Spectral";
        ctx.fillText((i + 1).toString(), radius - 40, 10);
        ctx.restore();
    }

    ctx.beginPath();
    ctx.arc(centerX, centerY, 30, 0, 2 * Math.PI);
    ctx.fillStyle = "#3E2723";
    ctx.fill();
    ctx.strokeStyle = "#C9A961";
    ctx.lineWidth = 4;
    ctx.stroke();
}

function spinWheel() {
    document.getElementById("spinButton").disabled = true;
    const canvas = document.getElementById("wheelCanvas");
    const randomRotation = 360 * 5 + Math.random() * 360;

    canvas.style.transition = "transform 4s cubic-bezier(0.25, 0.1, 0.25, 1)";
    canvas.style.transform = `rotate(${randomRotation}deg)`;

    if (!gameState.availableCarkSavlari || gameState.availableCarkSavlari.length === 0) {
        gameState.availableCarkSavlari = [...carkSavlari];
        shuffleArray(gameState.availableCarkSavlari);
    }

    const randomIndex = Math.floor(Math.random() * gameState.availableCarkSavlari.length);
    const randomSav = gameState.availableCarkSavlari.splice(randomIndex, 1)[0];

    setTimeout(() => {
        document.getElementById("resultText").textContent = randomSav.sav;
        document.getElementById("resultMeaning").textContent = `Anlamı: ${randomSav.meaning}`;
        document.getElementById("wheelResult").classList.remove("hidden");
        gameState.wheelRights--;
        saveGameState();
        updateStats();

        canvas.style.transition = "none";
        canvas.style.transform = "rotate(0deg)";
    }, 4000);
}

function closeWheel() {
    showScreen("gameScreen");
}

window.addEventListener("load", () => {
    console.log("Unutulan Savlar: Pro Sürümü Yüklendi!");
    loadGameState();
    
    // HTML onclick'leri için global erişim
    window.startGame = startGame;
    window.checkAnswer = checkAnswer;
    window.openWheel = openWheel;
    window.closeWheel = closeWheel;
    window.spinWheel = spinWheel;
    window.closeModal = closeModal;
    window.nextQuestion = nextQuestion;
    window.juriRaporu = juriRaporu; // Konsol erişimi için önemli
});

// Konsola "hileAc()" yazınca çalışır
function hileAc() {
    debugMode = !debugMode;
    console.log(debugMode ? "Hile Modu: AKTİF (Doğru cevaplar yıldızla işaretlendi)" : "Hile Modu: KAPALI");
    displayQuestion(); // Ekranı güncelle
}
window.hileAc = hileAc; // Konsoldan erişim için
