
// 5.3

// Задание 1
function whatANumber (){
    let input = prompt("Enter a number");
    input = +input
    if (isNaN(input)) {console.log("Упс, кажется, вы ошиблись")}
    else if (input%2 == 0) {console.log("Это четное число")}
    else if (input%2 != 0) {console.log("Это нечетное число")}
   }
  whatANumber()

// Задание 2
let x = []

function whatIsIt(x){
        switch (typeof(x)) {
            case "number":
                console.log('х - число')
                break
            case "string":
                console.log('х - строка')
                break
            case "boolean":
               console.log('х - булев')
               break
            default:
              console.log('Тип х не определен')
        
            }}
whatIsIt(false)

// Задание 3
let e = "Hello"

console.log(((e.split("").reverse())).join(""))

// Задание 4
let q = Math.round(Math.random()*100)
console.log(q)

// Задание 5
let w = [1, 2, 4, 7]

function toDoSomethingWithArray (arg) {
  console.log(arg.length)
  arg.forEach(function(item, i, arr) {
  console.log(item)
})
}
toDoSomethingWithArray(w)

// Задание 6
let s = ["a", "a", "2"]

let theSame = function(arg){
  let r=0
  for (i=1; i < arg.length; i = i + 1) {
    if (arg[i] !== arg[i-1]) {
      r+=1
      }
  }
  if (r==0) {return true}
  else {return false}
  }


console.log(theSame(s))


// Задание 7
let d = [0, 0, 0, 1, 2, 2, 2, 3, "e", null, 4, 5, 6, 7, 8, 9, 0]

let theNums = function(arg){
  let zero=0
  let even=0
  let odd=0
  
    
  for (i=0; i < arg.length; i = i + 1) {
      if (typeof(arg[i]) !== "number" ){continue}
      if (arg[i] == 0) {
        zero+=1
        continue
        }
      if (arg[i]%2==0) {
        even+=1}
      if (arg[i]%2 !== 0) {
        odd+=1}
  }
  return console.log(`Нулей ${zero}, четных ${even}, нечетных ${odd}.`)
  }

theNums(d)

// Задание 8
let testMap = new Map([

  ["apple", "green"],

  ["strawberry", "red"],

  ["blueberry",    "blue"]

])
for (let itm of testMap.keys()){
  console.log(`Ключ - ${itm}, значение - ${testMap.get(itm)}`)
}