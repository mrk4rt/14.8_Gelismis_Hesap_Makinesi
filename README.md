
# Gelişmiş Hesap Makinesi

### Amaç

Bu proje, kullanıcıdan işlem türünü ve sayıları alarak temel hesaplama işlemlerini gerçekleştiren bir hesap makinesi simülasyonudur. Kullanıcı, belirli bir işlem yaptıktan sonra devam etmek veya çıkmak isteyip istemediğine karar verir.

### Kullanılan Yapılar

- **Switch-Case**: Kullanıcının işlem seçimine göre yapılacak işlemleri belirlemek için kullanılır.
- **Do-While Döngüsü**: Kullanıcıya her işlemin sonunda tekrar işlem yapma opsiyonu sunar.
- **If-Else**: Hatalı girişleri ve özel durumları yönetmek için kullanılır (örneğin, sıfıra bölme hatası gibi).

---

### Proje Detayları

#### 1. Değişkenler ve İşlevleri

- `num1`: İlk sayı, kullanıcıdan alınır.
- `num2`: İkinci sayı, kullanıcıdan alınır. **Not**: Bölme işlemi için sıfır olmamalıdır.
- `operation`: Kullanıcının seçtiği işlem türünü (`+`, `-`, `*`, `/`, `%`) belirten değişken.
- `result`: İşlem sonucunun depolandığı değişken.
- `repeat`: Kullanıcının işlemi tekrar etmek isteyip istemediğini belirtir. Örneğin, ‘Evet’ veya ‘Hayır’ olarak giriş yapılabilir.

#### 2. İşlem Seçimi ve Switch-Case Kullanımı

- **Amaç**: Kullanıcıdan alınan `operation` değeri ile hangi işlemin yapılacağını belirlemek.
- **Kullanım Şekli**:

  - `+`: `result = num1 + num2`
  - `-`: `result = num1 - num2`
  - `*`: `result = num1 * num2`
  - `/`: `num2` sıfır değilse, `result = num1 / num2`
  - `%`: `num2` sıfır değilse, `result = num1 % num2`

- **Özel Durumlar**:
  - **Sıfıra Bölme Hatası**: Bölme (`/`) veya mod (`%`) işlemleri için `num2` sıfır olduğunda kullanıcıya hata mesajı verilir.

#### 3. Döngü Yapısı ile İşlem Tekrarı

- **Do-While Döngüsü**: Kullanıcıdan alınan `repeat` değeri ile her işlem sonrasında tekrar işlem yapılıp yapılmayacağı sorulur.
- Eğer `repeat` değişkeni “hayır” (veya benzer bir olumsuz cevap) ise döngü sona erer, aksi takdirde işlem tekrarlanır.

#### 4. Hatalı Girişleri Yönetme (If-Else ile Kontrol)

- Geçersiz bir işlem seçimi yapıldığında veya sıfıra bölme durumunda hata mesajı görüntülenir.
- Örnek hata mesajları:
  - **Geçersiz İşlem**: İşlem seçenekleri dışında bir işlem girildiğinde.
  - **Sıfıra Bölme Hatası**: `num2` sıfır olduğunda bölme veya mod işlemi yapılmaya çalışıldığında.

---

### Örnek Kullanım Akışı

1. Kullanıcıdan `num1`, `num2` ve `operation` verileri alınır.
2. Seçilen işlem `switch-case` yapısında değerlendirilir ve sonuç `result` değişkenine atanır.
3. İşlem sonrası kullanıcıya tekrar etmek isteyip istemediği sorulur (`repeat` değişkeni).
4. `repeat` ‘hayır’ değilse döngü tekrarlanır.

---

### Sonuç

Bu hesap makinesi, temel işlemleri switch-case ile seçip, döngü yardımıyla tekrarlayarak kullanıcıya kolaylık sağlamaktadır. Hatalı girişler if-else kontrolleri ile yönetilir, böylece kullanıcıya daha iyi bir deneyim sunar.
"""
