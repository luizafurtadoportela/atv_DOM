// -------- NAO E PERMITIDO O USO DE VARIAVEIS :)
// forneça o documento HTML e apresente aos alunos apenas os comentarios do JS

// Acesse o document e mostre o seu conteudo
console.log(document)

// Apresente os filhos do document
console.log(document.childNodes)

// Apresente o <DOCTYPE> e os seus filhos
console.log(document.childNodes[1].childNodes)

// Acesse o head e mostre o seu conteudo
console.log(document.childNodes[2].childNodes[0].childNodes)

// Apresente a STRING do titulo da pagina presente na aba
console.log(document.childNodes[2].childNodes[0].childNodes[6])

// Apresente a STRING do segundo titulo da pagina
console.log(document.childNodes[2].childNodes[4].childNodes[10])

// -------- E PERMITIDO O USO DE VARIAVEIS A PARTIR DESTE PONTO :)

// Construa a frase Eu amo JavaScript apenas com os conteudos dos elementos presentes na pagina

let eu = document.childNodes[2].childNodes[4].childNodes[13].childNodes[7].innerText

let amo = document.childNodes[2].childNodes[4].childNodes[13].childNodes[3].childNodes[0].innerText

let js = document.childNodes[2].childNodes[4].childNodes[15].childNodes[3].innerText

console.log(eu, amo, js)
