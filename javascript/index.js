// Изучение JavaScript

// Ссылочный тип - object: [] , {} 

const objectA = {
    a: 10,
    b: true
}

const copyOfA = objectA

copyOfA.a = 20
copyOfA.c = 'abc'


console.log(objectA)