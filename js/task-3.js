function checkForSpam(message) {
    // Mesajı küçük harfe dönüştür ve yasaklı kelimeleri kontrol et
    const lowerCaseMessage = message.toLowerCase();
    return lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale");
}


console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
console.log(checkForSpam("Great discounts on SALE items!")); // true
console.log(checkForSpam("Check out our latest updates.")); // false
