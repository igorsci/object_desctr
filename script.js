/**
* 1) Write a function called displayFullName using object destructing for the parameters
* and the return of the function should be "Hi my name is [your name]"
*/



/// my soltuion 

// function displayFullName ({name, lastName}){
//     console.log(`Hi my name is ${name} ${lastName}`)
// }
// let obj = {
//     name :"igor",
//     lastName : 'Mitevski'
// }

// console.log(displayFullName(obj));


function someFunc() {
    let evens = [2,4,6]
    let odds = [1,3,5]
    return [evens, odds]
}
let arrOfEvensAndOdds = someFunc()
let evens, odds
for (const arr of arrOfEvensAndOdds) {
    if(arr[0] % 2 === 0) {
        evens = arr
    } else {
        odds = arr
    }
}
evens
odds

let [,betterEvens] = someFunc()
betterEvens


/**
 * 2) Get the second, fourth and seventh value of the array by using destructing
 */
let array = [1,'GetMe',"run", 'GetMe', 666, 'GetRich', 'GetMe', 'DontGetMe', true, () => {}]
let         [ ,second,     , fourth ,    ,           , seventh,            ,               ] = array
second
fourth
const [,x,,y,,,z,,,,] = array
x
y
z
seventh
/**
 * 3) Using destructing get the value 'GetMe' from our object
 */

 
let obj = {
    myProp: 'GetMe',
    mySecProp: 'DontGetMe'
}


// my solution 1

// let {myProp} = obj
// console.log(myProp);



let obj2 = {
    myProp: 'DontGetMe',
    mySecProp: 'DontGetMe',
    myThirdProp: {
        myProp: 'GetMe'
    }
}


// my solution 2


// let {myProp}=obj2.myThirdProp

// console.log(myProp);

// ovde so obj3 pri deklariranje dava nekoja greska pa ja prepraviv deklaracijata za toa stoi object namesto obj3 :)))

let object = {
    myProp: 'DontGetMe',
    mySecProp: 'DontGetMe',
    myThirdProp: {
        myProp: ['DontGetMe','DontGetMe','GetMe']
    }
}


// // my solution 3

// let {myProp:[,,get]}=object.myThirdProp
// console.log(get);



let obj4 = {
    myProp: 'DontGetMe',
    mySecProp: 'GetMe',
    myThirdProp: {
        myProp: ['DontGetMe','DontGetMe','GetMe']
    },
    myFifthProp: {
        myProp: 'DontGetMe',
        mySecProp: ['DontGetMe','DontGetMe','DontGetMe'],
        myThirdProp: 'GetMe'
    }
}

// my solution 

let {
    mySecProp: getMe1,
    myThirdProp: {
        myProp: [,,getMe2]
    },
    myFifthProp: {
        myThirdProp:getMe3
    }
} = obj4

console.log(getMe1,getMe2,getMe3);