function reverseString(str) {
    var splitString = str.split("")
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}

function palindrom (cuvant) {
    let verificare = reverseString(cuvant)
    if (cuvant === verificare) {
        return true;
    } else {
        return false;
    }
}

console.log(palindrom('ana'));
