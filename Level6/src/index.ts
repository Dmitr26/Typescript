// 1. 

function getFirstWord(a: string): number {
    return a.split(/ +/)[0].length;
}

// 2.

interface User {
    name: string,
    surname: string
}

interface FullNameAndInitials {
    fullname: string,
    initials: string
}

function getUserNamings(a: User): FullNameAndInitials {
    return {
        fullname: a.name + " " + a.surname,
        initials: a.name[0] + "." + a.surname[0]
    };
}

// 3. 

interface Basket {
    products: {
        name: string;
    }[]
}

function getAllProductNames(a: Basket): string[] {
    return a?.products?.map(prod => prod?.name) || [];
}

// 4.1

interface Friend {
    name: () => string,
    cuteness?: number,
    coolness?: number
}

function hey(a: Friend): string {
    return "hey! i'm " + a.name();
}
hey({ name: () => "roman", cuteness: 100 })
hey({ name: () => "vasyl", coolness: 100 })

// 4.2

class Animal {
    private readonly callMe: string = '';

    constructor(name: string) {
        this.callMe = name;
    }

    name() {
        return this.callMe;
    }
}

class Cat extends Animal {
    fat: boolean

    constructor(name: string, fat: boolean) {
        super(name);
        this.fat = fat;
    }
}

class Dog extends Animal {
    collarNumber: number

    constructor(name: string, collarNumber: number) {
        super(name);
        this.collarNumber = collarNumber;
    }
}

function heyHey(abstractPet: Animal): string {
    return "hey! i'm " + abstractPet.name();
}
let a = new Cat("snizhok", true)
let b = new Dog("sirko", 333)
heyHey(a)
heyHey(b)

// 4.3

interface CatDog {
    name: () => string,
    type: string,
    cuteness?: number,
    coolness?: number
}

function heyHeyHey(a: CatDog): string {
    return "hey! i'm " + a.name()
        + (a.type === "cat" ? ("cuteness: " + a.cuteness) : ("coolness: " + a.coolness))
}
heyHeyHey({ name: () => "snizhok", type: "cat", cuteness: 100 })
heyHeyHey({ name: () => "sirko", type: "dog", coolness: 100 })

// 5.

type ObjectRecord = Record<string, unknown>;

function stringEntries(a: string[] | ObjectRecord): string[] {
    return Array.isArray(a) ? a : Object.keys(a)
}

// 6.

async function world(a: number): Promise<string> {
    return "*".repeat(a)
}
const hello = async () => {
    return await world(10)
}
hello().then(r => console.log(r)).catch(e => console.log("fail"))

// Task №3

interface Options {
    [key: string]: undefined | { cvalue: undefined | Options | string | number }
}

function summ(a: Options): number {
    const x = Object.keys(a).map((k) => {
        const elem = a[k];
        if (!elem?.cvalue) return 2021;
        // (typeof elem === undefined) -> (!elem?.cvalue)    
        if (typeof elem.cvalue === 'string') return +elem.cvalue || 2021;
        // 'String' -> 'string'
        // '2021' -> 2021
        if (typeof elem.cvalue === 'object') return summ(elem.cvalue);
        // (elem.cvalue.isBigObject !== undefined) -> (typeof elem.cvalue === 'object')
        // summ(elem) -> summ(elem.cvalue)
        return elem.cvalue; // Ukrainian 'с' instead of English 'c'
    });
    let sum = 0;
    for (let i = 0; i < x.length; i++) { // x.lenght -> x.length
        sum += x[i]; // x[i].cvalue -> x[i]
    }
    return sum; // summ -> sum
}

let testObject: Options = {
    hello: { cvalue: 1 },
    world: {
        cvalue:
            { yay: { cvalue: "2" } }
    }
}

console.log(summ(testObject));
