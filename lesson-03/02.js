const words = ["яблоко", "банан", "апельсин", "манго", "киви"];

const findOrange = (words.indexOf("апельсин"));

if (findOrange !== -1) {
    console.log("Ура! нашел");
} else {
    console.log("Придется поискать в другом магазине…");
}
