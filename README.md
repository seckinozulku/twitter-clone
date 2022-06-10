## Özet Açıklama
Yapmış olduğumuz twitter-clone projesi için kullanıcı giriş ve tweet atma özelliklerinin implementasyonunu gerçekleştirmeniz beklenmektedir.
## Kurulum
Twitter-clone uygulaması içerisinde, login aksiyonu için birkaç geliştirme yaptım. Son halini push ettim. Twitter uygulamasını ödev için oluşturduğunuz repo ve klasöre dahil etmek için sadece proje dosyalarını (twitter-clone ile gelen .git klasörü olmadan) kopyalayınız.
## Detaylar
* isLoggedIn, yani giriş yapılma durumunu anlayabilmek için kullanılacak boolean değer localStorage içerisinde tutulmaktadır. Çıkış yapma aksiyonu isteğe bağlıdır. Test aşamasında localStorage içerisini temizlemeniz gerekirse remove fonksiyonunu kullanabilirsiniz.
* Kullanıcı bilgileri ve isLoggedIn bilgisi localstorage'a yazılacaktır.
* Login sayfası componenti ve tasarımı projede bulunmaktadır. 
* Sisteme giriş yapabilecek kullanıcılar, public/userData.json dosyasında bulunmaktadır.
* Giriş butonu tıklandığında; fetch ile userData.json dosyasının içeriği okunmalı, bu dosyadaki kullanıcılar ile giriş formundaki bilgiler(username, password) kıyaslanmalı. Girilen username ve password bilgilerini içeren bir kullanıcı var ise giriş yapılmalı. Aksi durumda "kullanıcı bulunamadı" gibi bir hata mesajı gösterilmelidir. 
* Json dosyasından okunan kullanıcı bilgileri içerisinde arama yapabilmek için [buradaki](https://stackoverflow.com/questions/7364150/find-object-by-id-in-an-array-of-javascript-objects) kaynaktan faydalanabilirsiniz.
* Giriş işlemi için localStorage içerisindeki isLoggedIn verisini true yapmak ve user bilgilerini yine localStorage içerisine kaydetmek gerekmektedir.
* LocalStorage kullanımı ile alakalı örnek, proje içerisinde mevcuttur. isLoggedIn değerini başlangıçta false yapmak için kullanılmıştır.
* Giriş sonrası localStorage içindeki isLoggedIn verisi true olduğu için home sayfasına yönlendirme yapılacaktır.
* Index atma aksiyonu için derste oluşturduğumuz tweetData.json içerisindeki 100 adet veri hali hazırda okunup state'e yazılmakta ve Index componentine prop olarak gönderilerek DOM'a aktarılmaktadır. Yeni tweet'in json dosyası içerisinde değişiklik yapması  <ins>beklenmemektedir.</ins> Sadece yeni tweet'i state içerisindeki array'in ilk elemanı olarak atamanız gerekmektedir.
* Javascript unshift, yani bir array'in en önüne eleman ekleyen method'un kullanım detaylarına ulaşmak için [buradaki](https://www.w3schools.com/jsref/jsref_unshift.asp) kaynaktan faydalanabilirsiniz.
* Son olarak; yeni tweet'ler giriş yapan kullanıcının bilgileri ile görüntülenmelidir.

## Opsiyonel Geliştirmeler
Bu liste tamamen isteğe bağlıdır, ödevin kabul kriterlerini etkilememektedir veya ekstra puan sağlamamaktadır. Ödevi erken bitiren, zaman ayırabilecek durumda olan, kendini geliştirmek için self challenge arayan arkadaşlarım, buradaki isterleri de ödevleri içerisine ekleyebilir.
* Çıkış yap aksiyonu
* Login form validation
* ProfilePicture için component oluşturmak ve giriş yapan kullanıcının tweet'lerinde PP kısmını image olarak göstermek
* Atılan yeni tweet'lere tarih bilgisini eklemek. (Derste bu konuyu yetiştiremediğim için tarih ile alakalı işlemleri opsiyonel olarak bırakıyorum. Bir sonraki derste bu konuya da değineceğiz. Tarih ile alakalı bir geliştirme yapmamanız durumunda, yeni atılan tweet'lerin tarih kısmında "invalidDate" yazacaktır. Bu normaldir ve ödevin kabul koşulu değildir.)
