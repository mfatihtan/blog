type Comment = {
      comment_user_id: string;
      comment_user_name: string;
      comment_id: string;
      comment: string;
};

type Post = {
      head: string;
      image: string;
      description: string;
      body: string;
      tag: string[];
      comments: Comment[];
      likes: string[];
};

type Data = {
      [key: string]: Post;
};

const data: Data = {
      "post1": {
            "head": "Doğa Yürüyüşleri: Neden Yapmalıyız?",
            "image": "https://cdn.pixabay.com/photo/2023/01/24/17/39/mountains-7741714_1280.jpg",
            "description": "Doğa yürüyüşleri, hem fiziksel hem de zihinsel sağlığımız için son derece faydalıdır.",
            "body": "Doğa yürüyüşleri, modern yaşamın stresinden kaçmak ve doğayla yeniden bağ kurmak için mükemmel bir fırsattır. Vücudumuzun ihtiyaç duyduğu egzersizi yaparken, aynı zamanda zihnimizi de dinlendiririz. Doğada geçirilen zaman, endorfin seviyelerini artırır, bu da mutluluk ve genel iyilik hali sağlar. Ayrıca, doğanın sakinleştirici etkisi sayesinde anksiyete ve depresyon gibi zihinsel sağlık sorunlarıyla mücadelede de etkili olabilir.",
            "tag": ["doğa", "sağlık", "yürüyüş"],
            "comments": [
                  {
                        "comment_user_id": "user7",
                        "comment_user_name": "Ali Y.",
                        "comment_id": "comment1",
                        "comment": "Harika bir yazı, doğa yürüyüşleri benim de favorim!"
                  },
                  {
                        "comment_user_id": "user7",
                        "comment_user_name": "Ayşe T.",
                        "comment_id": "comment2",
                        "comment": "Kesinlikle katılıyorum, doğada vakit geçirmek harika."
                  }
            ],
            "likes": ["user1", "user4", "user2", "user3"]
      },
      "post2": {
            "head": "Yoga ile Stresten Kurtulun",
            "image": "https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg",
            "description": "Yoga, stres ve kaygıyı azaltmak için mükemmel bir yöntemdir.",
            "body": "Yoga, sadece fiziksel esneklik ve güç kazanmanızı sağlamakla kalmaz, aynı zamanda zihinsel dinginlik ve denge sağlar. Düzenli yoga pratiği, stresi azaltmada ve genel ruh halini iyileştirmede önemli bir rol oynar. Yoga pozisyonları ve nefes teknikleri, bedeni rahatlatır ve zihni sakinleştirir. Ayrıca, yoga meditasyon ile birleştiğinde, derin bir farkındalık ve huzur hali yaratır, bu da günlük yaşamın zorluklarıyla başa çıkmada yardımcı olur. Çoğumuzun kadim metinler ve bunların sırası, ne anlattığı vs ile ilgili kafası karışık değil mi? Yoga ile ilgili bilenen en eski metin Vedalar, Aryan toplumuna ait,yüksek kast sınıfına hitap eden Sanskrit ilahilerden oluştuğu söyleniyor. Upanishadlar ise daha sonra gelen vedik ilahilerdir  ve  daha alt kastlar için budizmden de etkilenerek harmanlayıp öğrenciye hitap edecek metinleri içermektedir.Bhagavad Gita ise, tanrı Krishna ile savaşçı Arjuna arasındaki diyalogu içeren bir metindir. Buddha da bu zamanda yaşamıştır. Patanjali’nin Yoga Sutraları içlerinde en popüler olanıdır. İyi bir yoga pratiğinin özünü tarifleyen, nefesi, meditasyonu ve gündelik yaşama dair öğütleriyle aydınlanma yolunu anlatan bir metindir. Yogayı sistematize bir şekilde anlatması ile de ünlüdür. Hatha Yoga Pradipika ise, beden ve zihnin fiziksel egzersiz,nefes ve meditasyonla temizlenmesini daha detaylı işler.",
            "tag": ["yoga", "stres", "rahatlama"],
            "comments": [
                  {
                        "comment_user_id": "user4",
                        "comment_user_name": "Mehmet K.",
                        "comment_id": "comment3",
                        "comment": "Yoga ile tanıştıktan sonra hayatım değişti."
                  },
                  {
                        "comment_user_id": "user6",
                        "comment_user_name": "Elif B.",
                        "comment_id": "comment4",
                        "comment": "Yoga yapmaya başlayalı stresim azaldı."
                  }
            ],
            "likes": ["user4", "user5", "user6"]
      },
      "post3": {
            "head": "Sağlıklı Beslenmenin Önemi",
            "image": "https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg",
            "description": "Sağlıklı beslenme, vücut sağlığımız için çok önemlidir.",
            "body": "Sağlıklı beslenme, yaşam kalitesini artırmanın ve uzun vadeli sağlığı korumanın temel taşlarından biridir. Vücudumuzun ihtiyaç duyduğu besinleri dengeli bir şekilde almak, enerji seviyelerimizi yüksek tutar ve hastalıklara karşı direncimizi artırır. Sağlıklı bir diyet, vitaminler, mineraller, proteinler ve sağlıklı yağlar gibi çeşitli besin öğelerini içermelidir. İşlenmiş gıdalardan kaçınmak ve doğal, taze yiyecekleri tercih etmek, sindirim sistemimizin sağlıklı kalmasına ve genel refahımızın artmasına yardımcı olur.",
            "tag": ["beslenme", "sağlık", "diyet"],
            "comments": [
                  {
                        "comment_user_id": "user7",
                        "comment_user_name": "Ahmet D.",
                        "comment_id": "comment1",
                        "comment": "Sağlıklı beslenmek için neler yapmalıyız?"
                  },
                  {
                        "comment_user_id": "user9",
                        "comment_user_name": "Zeynep L.",
                        "comment_id": "comment2",
                        "comment": "Faydalı bilgiler, teşekkürler!"
                  }
            ],
            "likes": ["user7", "user8", "user9"]
      },
      "post4": {
            "head": "Meditasyon ile Zihninizi Dinlendirin",
            "image": "https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg",
            "description": "Meditasyon, zihinsel rahatlama ve odaklanma için harika bir araçtır.",
            "body": "Meditasyon, modern dünyanın getirdiği stres ve kaygıyı azaltmak için etkili bir yöntemdir. Düzenli meditasyon pratiği, zihinsel berraklığı artırır ve iç huzuru sağlar. Meditasyon sırasında odaklanma teknikleri ve derin nefes alıp verme, bedeni ve zihni sakinleştirir. Bu süreç, kişinin kendi iç dünyasına dönerek duygusal dengesini bulmasına yardımcı olur. Meditasyon, aynı zamanda uyku kalitesini iyileştirir ve genel ruh halini pozitif yönde etkiler.",
            "tag": ["meditasyon", "zihinsel sağlık", "rahatlama"],
            "comments": [
                  {
                        "comment_user_id": "user11",
                        "comment_user_name": "Fatma A.",
                        "comment_id": "comment7",
                        "comment": "Meditasyon yapmaya başlayalı daha huzurluyum."
                  },
                  {
                        "comment_user_id": "user10",
                        "comment_user_name": "Hakan E.",
                        "comment_id": "comment8",
                        "comment": "Harika bir yazı, teşekkürler."
                  }
            ],
            "likes": ["user10", "user4", "user11", "user12"]
      },
      "post5": {
            "head": "Kitap Okumanın Faydaları",
            "image": "https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg",
            "description": "Kitap okumak, bilgi dağarcığımızı genişletir ve zihinsel sağlığımızı korur.",
            "body": "Kitap okumak, hem eğitici hem de eğlendirici bir faaliyet olarak zihinsel sağlığımıza birçok fayda sağlar. Düzenli olarak kitap okumak, kelime dağarcığını zenginleştirir ve bilişsel yetenekleri geliştirir. Kitaplar, farklı bakış açıları ve kültürel perspektifler sunarak empati ve anlayış yeteneğimizi artırır. Ayrıca, kitap okuma alışkanlığı, zihni aktif tutar ve yaşa bağlı zihinsel gerilemeyi önlemeye yardımcı olabilir. Kitaplar, aynı zamanda bir kaçış sağlayarak stresi azaltır ve ruh halini iyileştirir.",
            "tag": ["kitap", "okuma", "zihinsel sağlık"],
            "comments": [
                  {
                        "comment_user_id": "user13",
                        "comment_user_name": "Sevil A.",
                        "comment_id": "comment9",
                        "comment": "Kitap okumak benim için bir tutku."
                  },
                  {
                        "comment_user_id": "user15",
                        "comment_user_name": "Cem B.",
                        "comment_id": "comment10",
                        "comment": "Daha fazla kitap önerisi alabilir miyiz?"
                  }
            ],
            "likes": ["user13", "user14", "user15"]
      },
      "post6": {
            "head": "Fotoğrafçılığa Başlangıç Rehberi",
            "image": "https://images.pexels.com/photos/22033622/pexels-photo-22033622/free-photo-of-merhaba.jpeg",
            "description": "Fotoğrafçılığa yeni başlayanlar için ipuçları ve rehberler.",
            "body": "Fotoğrafçılık, anıları ölümsüzleştirmenin ve dünyayı farklı bir bakış açısıyla görmenin harika bir yoludur. Yeni başlayanlar için, doğru ekipmanı seçmek ve temel fotoğrafçılık tekniklerini öğrenmek önemlidir. Işık, kompozisyon ve perspektif gibi unsurları anlamak, kaliteli fotoğraflar çekmenin anahtarıdır. Pratik yaparak ve farklı çekim koşullarında deneyim kazanarak, fotoğrafçılık becerilerinizi geliştirebilirsiniz. Ayrıca, çeşitli fotoğrafçılık türlerini keşfetmek, kendinize en uygun olanı bulmanıza yardımcı olabilir.",
            "tag": ["fotoğrafçılık", "başlangıç", "rehber"],
            "comments": [
                  {
                        "comment_user_id": "user17",
                        "comment_user_name": "Serkan Y.",
                        "comment_id": "comment11",
                        "comment": "Fotoğrafçılık ile ilgilenenler için harika bir kaynak."
                  },
                  {
                        "comment_user_id": "user17",
                        "comment_user_name": "Serkan Y.",
                        "comment_id": "comment12",
                        "comment": "Bu rehber çok işime yaradı, teşekkürler!"
                  }
            ],
            "likes": ["user16", "user17", "user18"]
      },
      "post7": {
            "head": "Dijital Pazarlama Stratejileri",
            "image": "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg",
            "description": "Dijital pazarlama dünyasında başarı için stratejiler ve ipuçları.",
            "body": "Dijital pazarlama, işletmelerin çevrimiçi varlıklarını güçlendirmek ve hedef kitlelerine ulaşmak için kullandıkları bir araçtır. Başarılı bir dijital pazarlama stratejisi, SEO, sosyal medya, içerik pazarlaması ve e-posta pazarlaması gibi çeşitli bileşenleri içerir. SEO, web sitenizin arama motorlarında üst sıralarda yer almasını sağlarken, sosyal medya platformları müşteri etkileşimini artırır. İçerik pazarlaması, hedef kitleniz için değerli ve ilgi çekici içerik oluşturmayı içerir. E-posta pazarlaması ise doğrudan iletişim kurarak müşteri sadakati sağlar.",
            "tag": ["dijital pazarlama", "strateji", "işletme"],
            "comments": [
                  {
                        "comment_user_id": "user21",
                        "comment_user_name": "Kadir T.",
                        "comment_id": "comment13",
                        "comment": "İşletmem için çok faydalı bilgiler içeriyor."
                  },
                  {
                        "comment_user_id": "user19",
                        "comment_user_name": "Melis S.",
                        "comment_id": "comment14",
                        "comment": "Dijital pazarlama ile ilgili daha fazla yazı bekliyoruz!"
                  }
            ],
            "likes": ["user19", "user20", "user21"]
      },
      "post8": {
            "head": "Sürdürülebilir Yaşam Tarzı",
            "image": "",
            "description": "Sürdürülebilir yaşam tarzı benimsemek için ipuçları.",
            "body": "Sürdürülebilir bir yaşam tarzı benimsemek, hem gezegenimizin geleceği hem de kişisel sağlığımız için büyük önem taşır. Günlük alışkanlıklarımızda yapacağımız küçük değişiklikler, büyük etkiler yaratabilir. Enerji tasarrufu sağlamak, su kullanımını azaltmak ve geri dönüşümü teşvik etmek, sürdürülebilir bir yaşam tarzının temel adımlarıdır. Ayrıca, yerel ve organik gıdalar tüketmek, karbon ayak izimizi azaltır ve yerel ekonomileri destekler. Sürdürülebilir yaşam, bilinçli tüketim ve doğaya saygı ile mümkün hale gelir.",
            "tag": ["sürdürülebilir", "çevre", "yaşam tarzı"],
            "comments": [
                  {
                        "comment_user_id": "user22",
                        "comment_user_name": "Derya Z.",
                        "comment_id": "comment15",
                        "comment": "Sürdürülebilir yaşam konusunda daha fazla bilgi almak istiyorum."
                  },
                  {
                        "comment_user_id": "user24",
                        "comment_user_name": "Osman R.",
                        "comment_id": "comment16",
                        "comment": "Çok faydalı bir yazı olmuş, teşekkürler."
                  }
            ],
            "likes": ["user22", "user23", "user24"]
      },
      "post9": {
            "head": "Evde Spor Yapmanın Faydaları",
            "image": "https://images.pexels.com/photos/4498577/pexels-photo-4498577.jpeg",
            "description": "Evde spor yapmak, sağlığımızı korumak için harika bir yoldur.",
            "body": "Evde spor yapmak, zaman ve mekân kısıtlamaları olmaksızın egzersiz yapmanın en pratik yollarından biridir. Spor salonuna gitmek için zaman bulamayanlar veya daha rahat bir ortamda çalışmak isteyenler için idealdir. Evde spor yapmak, çeşitli egzersiz programları ve ekipmanları kullanarak kişisel hedeflerinize ulaşmanızı sağlar. Düzenli egzersiz, fiziksel sağlığınızı korumanıza ve kas kütlenizi artırmanıza yardımcı olurken, aynı zamanda stres seviyelerinizi de düşürür.",
            "tag": ["spor", "evde spor", "sağlık"],
            "comments": [
                  {
                        "comment_user_id": "user2",
                        "comment_user_name": "Yasemin C.",
                        "comment_id": "comment17",
                        "comment": "Evde spor yapmak gerçekten çok rahat."
                  },
                  {
                        "comment_user_id": "user1",
                        "comment_user_name": "Furkan B.",
                        "comment_id": "comment18",
                        "comment": "Evde spor yaparak forma girdim!"
                  }
            ],
            "likes": ["user2", "user1", "user27"]
      },
      "post10": {
            "head": "Kariyer Gelişimi İçin İpuçları",
            "image": "https://images.pexels.com/photos/3778966/pexels-photo-3778966.jpeg",
            "description": "Kariyerinizde başarılı olmanız için ipuçları ve öneriler.",
            "body": "Kariyer gelişimi, iş hayatında başarıya ulaşmak ve profesyonel hedeflere ulaşmak için kritik öneme sahiptir. İyi bir kariyer planı, yeteneklerinizi ve güçlü yönlerinizi belirlemenize yardımcı olur. Kendinizi sürekli olarak geliştirmek, eğitim ve sertifikalarla desteklenmiş bir bilgi birikimi oluşturmak önemlidir. Networking, doğru bağlantılar kurarak kariyer fırsatlarını artırabilir. Ayrıca, iş-yaşam dengesini sağlamak ve stresi yönetmek, uzun vadede başarılı bir kariyer için gereklidir.",
            "tag": ["kariyer", "gelişim", "başarı"],
            "comments": [
                  {
                        "comment_user_id": "user10",
                        "comment_user_name": "Gamze Y.",
                        "comment_id": "comment19",
                        "comment": "Kariyerim için çok faydalı bilgiler."
                  },
                  {
                        "comment_user_id": "user30",
                        "comment_user_name": "Tolga S.",
                        "comment_id": "comment20",
                        "comment": "Kariyerimde nasıl ilerleyeceğim konusunda yeni fikirler edindim."
                  }
            ],
            "likes": ["user10", "user29", "user30"]
      }
};

export default data;  