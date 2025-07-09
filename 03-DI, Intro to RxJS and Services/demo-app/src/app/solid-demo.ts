// // Single Responsibility
// class User2 {
//     firstName: string;
//     lastName: string;
//     address: string;

//     constructor(firstName: string, lastName: string, address: string) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.address = address;
//     }

//     getDetails() {
//         console.log(`${this.firstName} ${this.lastName} is from ${this.address}`);
//     }
// }

// class Wallet {
//     balance: number;
//     currency: string;

//     constructor(balance: number, currency: string) {
//         this.balance = balance;
//         this.currency = currency;
//     }

//     depositMoney() {}

//     withdrawMoney() {}
// }


// // Interface Segregation
// interface Address {
//     str: string,
//     country: string,
// }

// interface WalletDetails {
//     type: string;
//     balance: number;
//     currency: string;
// }

// interface PersonPrivateDetails {
//     firstName: string;
//     lastName: string;
// }

// interface PersonPublicDetails extends PersonPrivateDetails, WalletDetails{
//     adress: Address;
// }

// class Person implements PersonPrivateDetails {
//     firstName: string;
//     lastName: string;

//     constructor(firstName: string, lastName: string) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }


// Dependency Inversion is the RULE
// Dependency Injection -> realization of the rule (Design Pattern)

class Wallet {
    balance = 0;
    currency = 'GBP';

    constructor(balance: number, currency: string) {
        this.balance = balance;
        this.currency = currency;
    }
}

class Car {
    model: string;
    color: string;

    constructor(model: string, color: string;) {
        this.model = model;
        this.color = color;
    }
}

// // Worst practice!
// class User {
//     name: string;
//     wallet: Wallet;
//     car: Car;

//     constructor(name: string, balance: number, currency: string, model: string, carColor: string) {
//         this.name = name;
//         this.wallet = new Wallet(balance, currency);
//         this.car = new Car(model, carColor);
//     }
// }

// Good practice
class User {
    name: string;
    wallet: Wallet;
    car: Car;

    constructor(name: string, wallet: Wallet, car: Car) {
        this.name = name;
        this.wallet = wallet;
        this.car = car;
    }
}

const martinsWallet = new Wallet(500, 'USD');
const martinsCar = new Car('VW', 'grey');

const userMartin = new User('Martin', martinsWallet, martinsCar);


const ivosWallet = new Wallet(400, 'BGN');
const ivosCar = new Car('Mercedes', 'black');

const userIvo = new User('Ivo', ivosWallet, ivosCar);