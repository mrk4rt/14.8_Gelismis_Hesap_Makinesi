// Değişkenleri tanımlama
let num1, num2, result;
let operation;
let repeat = true;  // Döngünün devam etmesi için başlangıç değeri

do {
    // Kullanıcıdan geçerli bir sayı alma
    do {
        num1 = prompt("İlk sayıyı girin:");
        if (isNaN(num1) || num1.trim() === "") { // Harf ve boşluk kontrolü
            alert("Lütfen geçerli bir sayı girin!");
        } else {
            num1 = parseFloat(num1); // Geçerli bir sayı ise parse et
        }
    } while (isNaN(num1));

    do {
        num2 = prompt("İkinci sayıyı girin:");
        if (isNaN(num2) || num2.trim() === "") { // Harf ve boşluk kontrolü
            alert("Lütfen geçerli bir sayı girin!");
        } else {
            num2 = parseFloat(num2); // Geçerli bir sayı ise parse et
        }
    } while (isNaN(num2));

    operation = prompt("Bir işlem seçin (+, -, *, /, %):");

    // İşlem seçimi ve hesaplama
    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                alert("Hata: Sıfıra bölme hatası!");
                continue; // Döngünün başına geri dön
            }
            result = num1 / num2;
            break;
        case "%":
            if (num2 === 0) {
                alert("Hata: Sıfıra bölme hatası!");
                continue; // Döngünün başına geri dön
            }
            result = num1 % num2;
            break;
        default:
            alert("Hata: Geçersiz işlem seçimi!");
            continue; // Döngünün başına geri dön
    }

    // Sonucu gösterme
    alert("Sonuç: " + result);

    // Tekrar işlem yapma isteği
    let userResponse = prompt("Tekrar işlem yapmak ister misiniz? (Evet/Hayır)").toLowerCase();
    repeat = (userResponse === "evet");

} while (repeat);
