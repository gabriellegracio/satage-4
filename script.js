alert("Vamos começar inserindo dois números!")
let numberOne = prompt("Primeiro número")
let numberTwo = prompt("Segundo número")

let sum = Number(numberOne) + Number(numberTwo )
let sub = Number(numberOne) - Number(numberTwo )
let mult = Number(numberOne) * Number(numberTwo )
let div = Number(numberOne) / Number(numberTwo )
let res = Number(numberOne) % Number(numberTwo )


alert ("soma:" + sum)
alert ("subtração:" + sub)
alert ("multiplicação:" + mult)
alert ("divisão:" + div)
alert ("resto:" + res)

let everage = Number(numberOne) + Number(numberTwo)
let resultSum = everage % 2 ==  0


if (resultSum) {
    alert ("A soma é par")
} else {
    alert ("a soma é impar")
} 

if ( numberOne == numberOne)
{
    alert ("Os números são iguais") }
    else {
        alert ("Os números são diferentes") }
    