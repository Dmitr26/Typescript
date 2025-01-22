"use strict";
// 1. 
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getFirstWord(a) {
    return a.split(/ +/)[0].length;
}
function getUserNamings(a) {
    return {
        fullname: a.name + " " + a.surname,
        initials: a.name[0] + "." + a.surname[0]
    };
}
function getAllProductNames(a) {
    var _a;
    return ((_a = a === null || a === void 0 ? void 0 : a.products) === null || _a === void 0 ? void 0 : _a.map(prod => prod === null || prod === void 0 ? void 0 : prod.name)) || [];
}
function hey(a) {
    return "hey! i'm " + a.name();
}
hey({ name: () => "roman", cuteness: 100 });
hey({ name: () => "vasyl", coolness: 100 });
// 4.2
class Animal {
    constructor(name) {
        this.callMe = '';
        this.callMe = name;
    }
    name() {
        return this.callMe;
    }
}
class Cat extends Animal {
    constructor(name, fat) {
        super(name);
        this.fat = fat;
    }
}
class Dog extends Animal {
    constructor(name, collarNumber) {
        super(name);
        this.collarNumber = collarNumber;
    }
}
function heyHey(abstractPet) {
    return "hey! i'm " + abstractPet.name();
}
let a = new Cat("snizhok", true);
let b = new Dog("sirko", 333);
heyHey(a);
heyHey(b);
function heyHeyHey(a) {
    return "hey! i'm " + a.name()
        + (a.type === "cat" ? ("cuteness: " + a.cuteness) : ("coolness: " + a.coolness));
}
heyHeyHey({ name: () => "snizhok", type: "cat", cuteness: 100 });
heyHeyHey({ name: () => "sirko", type: "dog", coolness: 100 });
function stringEntries(a) {
    return Array.isArray(a) ? a : Object.keys(a);
}
// 6.
function world(a) {
    return __awaiter(this, void 0, void 0, function* () {
        return "*".repeat(a);
    });
}
const hello = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield world(10);
});
hello().then(r => console.log(r)).catch(e => console.log("fail"));
function summ(a) {
    const x = Object.keys(a).map((k) => {
        const elem = a[k];
        if (typeof elem === 'undefined' || typeof elem.cvalue === 'undefined')
            return 2021;
        // undefined -> 'undefined'
        // added '|| typeof elem.cvalue === 'undefined''        
        if (typeof elem.cvalue === 'string')
            return +elem.cvalue || 2021;
        // 'String' -> 'string'
        // '2021' -> 2021
        if (typeof elem.cvalue === 'object')
            return summ(elem.cvalue);
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
let testObject = {
    hello: { cvalue: 1 },
    world: {
        cvalue: { yay: { cvalue: "2" } }
    }
};
console.log(summ(testObject));
