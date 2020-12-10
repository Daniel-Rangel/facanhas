const textos = [
    {titulo: "Teste1" , texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur exercitationem quaerat necessitatibus soluta rem, magni dignissimos, minus recusandae."},
    {titulo: "Teste2" , texto: "aqui testando mais um texto, assim ferrando nois 2."},
    {titulo: "Teste3" , texto: "aqui testando mais um texto, assim ferrando nois 3."},
    {titulo: "Teste4" , texto: "aqui testando mais um texto, assim ferrando nois 4."},
    {titulo: "Teste5" , texto: "aqui testando mais um texto, assim ferrando nois 5."},
    {titulo: "Teste6" , texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur exercitationem quaerat necessitatibus soluta rem, magni dignissimos, minus recusandae."}
]

textos.map((num) => {
    let card = document.querySelector('.card').cloneNode(true)

    card.querySelector(".card__titulo").innerHTML = num.titulo
    card.querySelector(".card__texto").innerHTML = num.texto

    //console.log(card)

    document.querySelector('.l-layout').append(card)
})


