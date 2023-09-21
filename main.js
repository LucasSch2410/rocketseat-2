//1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert("Hello World!")

//2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
let numberOne = 5
let numberTwo = 3

let sum = numberOne + numberTwo

alert(sum)

//3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".    

let isNumber = 123

if (typeof(isNumber) === 'number') {
    alert("É um número")
}else{
    alert('Não é um número')
}

//4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

let isString = 'String'

if (typeof(isString) === 'string') {
    alert("É uma string")
}else{
    alert('Não é uma string')
}

//5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

let isBoolean = true

if (typeof(isBoolean) === 'boolean') {
    alert("É um booleano")
}else{
    alert('Não é um booleano')
}

//6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

let sub = numberOne - numberTwo

alert(sub)

//7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

let multi = numberOne * numberTwo

alert(multi)

//8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

let div = numberOne / numberTwo

alert(div)

//9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

let isEven = 6

if (isEven % 2 === 0){
    alert("É um número par")
} else {
    alert("Não é um número par")
}


//10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

let isOdd = 7

if (isOdd % 2 === 1){
    alert("É um número impar")
} else {
    alert("Não é um número impar")
}
