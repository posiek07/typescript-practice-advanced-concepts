type Admin = {
    name: string;
    privilages: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;


const el: ElevatedEmployee = {
    name: "Max",
    privilages: ['create server'],
    startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(n1: number, n2: number): number
function add(n1: string, b: string): string
function add(n1: string, b: number): string
function add(n1: number, b: string): string
function add(n1: Combinable, n2: Combinable) {
    if (typeof n1 === 'string' || typeof n2 === 'string') {
        return n1.toString() + n2.toString()
    }
    return n1 + n2
}

const result = add(1, " Smolinski") as string;
result.split(' ')


const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: {title: 'CEO', description: 'My own company'}
}

console.log(fetchedUserData?.job?.title)

const userInput = undefined;

const storedData = userInput ?? 'DEFAULT';

console.log(storedData)

type UnknownEmployee = Employee | Admin;

function printEmpoyeeInformation(emp: UnknownEmployee) {
    console.log("Name " + emp.name);
    if ('privilages' in emp) {
        console.log("Priviliges: " + emp.privilages)
    }
    if ('startDate' in emp) {
        console.log("Start Date: " + emp.startDate)
    }
}


printEmpoyeeInformation({ name: 'Manu', startDate: new Date() });

class Car {
    drive() {
        console.log('driving...')
    }
}

class Truck {
    drive() {
        console.log('driving truck...')
    }
    loadCargo(amount: number) {
        console.log("Loading cargo ..." + amount)
    }
}

type Vehicle = Car | Truck


const v1 = new Car()
const v2 = new Truck()

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2)

interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed
            break
        case 'horse': 
            speed = animal.runningSpeed
    }
    console.log('Moving at speed: ' + speed)
}

moveAnimal({ type: 'bird', flyingSpeed: 10 })

// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
const userInputElement = document.getElementById('user-input') as HTMLInputElement;

userInputElement.value = 'Hi there!'

interface ErrorContainer { // {email: 'Not a valid email', username: 'Must start with low character'}
    [prop: string]: string
}




const errorBag: ErrorContainer = {
    email: 'Not a valid email!',
    username: 'Must start with capital character!'
} 
