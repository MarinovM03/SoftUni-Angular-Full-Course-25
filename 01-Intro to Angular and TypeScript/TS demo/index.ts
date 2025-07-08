let helloMsg: string = 'Hello there!';
let a: number = 4;
let b: unknown = 5;
let x: any = 4;
x = true;

let y: unknown = 15;
y = false;

let isAuthenticated: boolean = false;


const arr: number[] = [1, 2, 3, 4, 5];

console.log(arr.filter((num) => num > 3));

console.log(y);


let z: number | string = 123;
z = 'asd';

console.log(z);


// interface User {
//     name: string; 
//     age: number;  
// }

type User = {
    name: string;
    age: number;
};

const martinUser: User = {
    name: 'Martin',
    age: 23,
}


const users: User[] = [
    {
        name: 'Martin1',
        age: 23,
    },
    {
        name: 'Martin2',
        age: 23,
    },
    {
        name: 'Martin3',
        age: 23,
    }
]

users.forEach(user => {
    console.log(user.name);
})


interface Human {
    firstName: string;
    lastName: string;
    age: number;
}

class Person implements Human {
    firstName: string;
    lastName: string;
    age: number = 20;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getAgeMsg(): string {
        return `This human is ${this.age} years old!`
    }

    getDetails(): void {
        console.log(`Person details: ${this.firstName} ${this.lastName}`);
    }   
}

const ivanPerson = new Person('Martin', 'Marinov');
ivanPerson.getDetails();


class Student extends Person {
    grades: number[] = [6, 5, 5, 4, 3];

    constructor(fName: string, lName: string) {
        super(fName, lName);
    }
}

const MariykaStudent = new Student('Ivan', 'Ivanov');
MariykaStudent.getDetails();



enum PaymentStatus {
    Failed = 100,
    Successful,
    Pending,
}

console.log('------------------');


console.log(PaymentStatus);



function checkPaymentStatus(paymentStatusCode: number): void {
    if (paymentStatusCode === PaymentStatus.Failed) {
        console.log('Transaction Failed!');
    } else if (paymentStatusCode === PaymentStatus.Successful) {
        console.log('Transaction Completed!');
    }
}



function getIdentity<T>(id: T) {
    console.log('The type of the id is ' + typeof id);
}

getIdentity<number>(123);
getIdentity<string>('asdasd');
getIdentity<string[]>(['asdasd', 'adwadw']);