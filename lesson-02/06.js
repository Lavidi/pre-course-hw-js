let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let newPassportWithAddress = {
    ...passportWithAddress,
    address: {
        ...passportWithAddress.address,
        city: "Bobryisk"
    }
};
newPassportWithAddress.address.city = "Bobryisk";

console.log(passportWithAddress.address.city);
console.log(newPassportWithAddress.address.city);