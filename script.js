console.log('hello ES6')

// difference between var and let

// var is hoisted -> moved to the top
console.log(num)
var num = 23

// let is not hoisted
// console.log(str)
// let str = 'hello'

// var can be redeclared - let cannot 
// var user = 'foo'
// var user = 'bar'
// console.log(user)

// scoping
// var is function scoped
var message = 'hello from global scope'
function localScope() {
	var greeting = 'hello from local scope'
	return greeting
}

console.log(localScope())
// console.log(greeting) // -> Reference Error

// var is not scoped to this block -> block means any part
// wrapped with curly brackets 
if (true) {
	var city = 'Berlin'
}

console.log(city)

// scoping of let -> block scoped

// function run() {
// 	let result = 42
// }

// also scoped to this block
if (true) {
	let result = 42
}

// console.log(result) -> Reference Error
console.clear()
const password = '123'
let user;
// if (password === '123') {
// 	user = 'authenticated'
// } else {
// 	user = 'unauthenticated'
// }

console.log(user)

// ternary operator

// <condition> ? <do either this> : <or this>
// <if this is true> ? <then do this> : <else do that>
console.log(password === '123' ? 'authenticated' : 'unauthenticated')
user = password === '123' ? 'authenticated' : 'unauthenticated'

// this does not work - we need the else part
// const msg = user === 'authenticated' ? 'welcome' -> Error
console.clear()
const number = 42

// object shorthand
console.log({ user })
// just a shorthand version of this: {user: user}
console.log({ number })

console.clear()

// Destructuring
const person = {
	username: 'foo',
	email: 'foo@gamil.com',
	age: 30,
	address: {
		street: 'Friedrichstr.',
		place: 'Berlin'
	}
}

// now we need 3 variables 
// const name = person.username
// const email = person.email
// const age = person.age

// console.log(name, email, age)
// using object destructuring

// you can alias a variable by using the colon -> username: name
// or access nested objects like this: address: { place, street }
const { address: { place, street }, username: name, email, age } = person
console.log(name, email, age, place, street)

const root = {
	first: 'foo',
	middle: 'bar',
	last: 'baz'
}

// write a function that gets the object and returns a string like 
// 'firstname middlename lastname' using destructuring


// function display(user) {
// 	// destructure
// 	const { first, middle, last } = user
// 	return `${first} ${middle} ${last}`
// }

// we can also destructure directly in the parameter
function display({ first, middle, last }) {
	// destructure
	return `${first} ${middle} ${last}`
}

console.log(display(root))

// Array destructuring

const numbers = [10, 20, 30, 40, 50]
const [a, second, third, , last] = numbers
console.log(a, second, third, last)

// we can set a default value
const nums = [2, 4, 6, 8]
// t = 11 sets a default value for the variable t
const [x, y, z, t = 11, f] = nums
console.log(t, f)
console.clear()
// you can also destructure from a string, not very common though
const [firstChar, secondChar] = 'hello'
console.log(firstChar)

console.clear()

// spread operator
const array = ['a', 'b']
const copy = [...array]
console.log(copy)

const nmbrs = [23, 42, 13]

// we use spread to pass the content of the array to Math.max()
console.log(Math.max(...nmbrs))

const list1 = [2, 4, 6]
const list2 = [3, 6, 9]
const newList = [...list1, ...list2]
console.log(newList)

console.clear()

// spread as 'rest' operator
function sum(...nums) {
	console.log(nums)
	return nums.reduce(function (sum, val) {
		return sum + val
	})
}
const res = sum(2, 4, 43, 54, 45, 65)
console.log(res)


// Objects


// Exercise 


// const car = {
// 	make: 'Volvo',
// 	year: 1995,
// 	engine: {
// 		fuel: 'petrol',
// 		hp: 80
// 	}
// }



// extract the make and year from the car in one line
// const { make: m, year } = car
// console.log(m, year)

// // extract the fuel and hp from the car in one line

// const { engine: { fuel, hp } } = car
// // const {fuel, hp} = car.engine
// console.log(fuel, hp);


// // Arrays

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// const [zero, one] = numbers
// // Extract the first two values

// console.log(zero, one); // 0 1

// // Extract all the values but the first one from the array
// const [, ...greaterThan0] = numbers
// console.log(greaterThan0); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]


// // Strings

// const str = "Hello World!"

// // Using the spread, return an array of all characters in `str` upperCased and reversed
// const reversedUppercase = [...str.toUpperCase()].reverse()
// console.log(reversedUppercase); // [ '!', 'D', 'L', 'R', 'O', 'W', ' ', 'O', 'L', 'L', 'E', 'H' ]
// console.log('hello');

// 


// Arrow functions

const array1 = [1, 4, 9, 16];

// pass a function to map
// const map1 = array1.map(function (x) {
// 	return x * 2
// });

const map1 = array1.map(x => x * 2);
console.log(map1);

// if you want to change this to an arrow function
// we need to a function declaration 
const greet = () => 'hello'

console.log(greet())

console.clear()

// Promises - a JS object that represents the eventual completion 
// or failure of an asynchronous operation

// a promise can have 3 states 1. resolved - executed correctly 
// 2. rejected - we have a failure 3. pending - not clear yet what will be 
// the result

function createRandomNumber(min, max) {
	return new Promise(function (resolve, reject) {
		if (min === 1) {
			return reject(new Error('invalid argument'))
		}
		setTimeout(function () {
			resolve(Math.floor(Math.random() * (max - min + 1) + min))
		}, 3000)
	})
}


function createAnotherRandomNumber(min, max) {
	return new Promise(function (resolve, reject) {
		if (min === 1) {
			return reject(new Error('invalid argument'))
		}
		setTimeout(function () {
			resolve(Math.floor(Math.random() * (max - min + 1) + min))
		}, 5000)
	})
}

// how to use a function that returns a promise - using .then()
// createRandomNumber(1)
// 	.then(function (result) {
// 		console.log(result)
// 	})
// 	.catch(function (error) {
// 		console.log(error)
// 	})
// 	.finally(function () {
// 		console.log('this is executed always')
// 	})

// using async await
// IIFE immediately invoked function expression
(async function getNumber() {
	// for error handling we add a try catch structure
	try {
		const result = await createRandomNumber(1, 7)
		const result2 = await createAnotherRandomNumber(1, 7)
		console.log(result)
	} catch (error) {
		console.log(error.message)
	} finally {
		console.log('this is executed always')
	}
})()

// getNumber()

// Promise.all - wait for multiple async functions that return promises
// Promise.all([
// 	createRandomNumber(3, 7),
// 	createAnotherRandomNumber(2, 10)
// ])
// 	.then(result => console.log(result))
// 	.catch(err => console.log(err))


// this would nest two calls of async functions and execute the 2nd 
// only when the 1st is finished

// createRandomNumber(2, 10)
// 	.then(function (firstResult) {

// 		console.log(firstResult)
// 		// console.log('hello the result is here now')
// 		createAnotherRandomNumber(2, 10)
// 			.then(function (result) {
// 				console.log(result)
// 			})
// 	})
// 	.catch(function (error) {
// 		console.log(error)
// 	})