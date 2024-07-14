const prompt = require('prompt-sync')({ sigint: true });
const num = prompt('Input bilangan: ');

if (isNaN(num)) {
    console.log("Tidak bisa input selain bilangan");
} else if (num < 0) {
    console.log("Tidak bisa input bilangan negatif");
} else if (num % 2 !== 0) {
    console.log("Tidak bisa input bilangan ganjil");
} else {
    console.log(Math.sqrt(num));
}
