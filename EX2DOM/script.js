// O aluno deve sortear um bilhete da mega sena, e comparar com os numeros sorteados presentes no HTML (unico arquivo fornecido a ele)
// para bilhetes iguais sorteados, informar que deve ocorrer novamente
// para bilhetes válidos, deve-se contar o numero de acertos e apresentar ao usuario via console

// sorteando um bilhete
let num1, num2, num3, num4, num5, num6;

num1 = Math.ceil(Math.random() * 60);
num2 = Math.ceil(Math.random() * 60);
num3 = Math.ceil(Math.random() * 60);
num4 = Math.ceil(Math.random() * 60);
num5 = Math.ceil(Math.random() * 60);
num6 = Math.ceil(Math.random() * 60);

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);

// verificando se o bilhete e valido

let n1 = document.childNodes[1].childNodes[2].childNodes[3].innerText

let n2 = document.childNodes[1].childNodes[2].childNodes[5].innerText

let n3 = document.childNodes[1].childNodes[2].childNodes[7].innerText

let n4 = document.childNodes[1].childNodes[2].childNodes[9].innerText

let n5 = document.childNodes[1].childNodes[2].childNodes[11].innerText

let n6 = document.childNodes[1].childNodes[2].childNodes[13].innerText

if (num1 == n1 && num2 == n2 && num3 == n3 && num4 == n4 && num5 == n5 && num6 == n6) {
    console.log("Você venceu!")
} else {
    console.log("Não foi desta vez!")
    console.log("Os números do seu bilhete:", num1,num2,num3,num4,num5,num6)
    console.log("Os números da mega-sena são:", n1,n2,n3,n4,n5,n6)
}
