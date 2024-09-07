
function pesquisar (){
    // pegando o id do html
let section = document.getElementById("resultados-pesquisa")
// criando variavel com informações do click de pesquisa
let campoPesquisa = document.getElementById("campo-pesquisa").value
// se não houver pesquisa , não aparece nada
if (!campoPesquisa){
    section.innerHTML = "<p> adicione a pesquisa </p>"
    return
}
// deixar campoPesquisa com letra minuscula
campoPesquisa = campoPesquisa.toLowerCase()
console.log (campoPesquisa);
let resultados  = "";
let titulo      = "";
let dev         = "";  
let tags        = "";

// para cada dado da lista de dados adiciona um sction no html
for (let dado of dados)  
    {
        titulo  = dado.titulo.toLowerCase();
        dev     = dado.dev.toLowerCase ();
        tags    = dado.tags.toLowerCase ();
        // se eu pesquisar um titolo dos meus dados , mostrar dados
        if (titulo.includes(campoPesquisa) || dev.includes(campoPesquisa)
        || tags.includes (campoPesquisa)){
// adicionando conteudo dentro do html
        resultados += `
    <div class="item-resultado">
                <h2>
                    <a  href= ${dado.link} target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta"> ${dado.descrição}
                </p>
                <a  href= ${dado.youtube} target="_blank">
                   ${dado.dev}
                </a>
            </div> 
` }
if (!resultados){
    resultados = "<p>Nenhum item foi encontrado</p>"
}
}
// mostrar hmtl na tela
section.innerHTML = resultados;
}
