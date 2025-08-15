const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é o principal objetivo do Sistema Único de Saúde (SUS)?",
        alternativas: [
            {
                texto: "Garantir o acesso universal e igualitário aos serviços de saúde, bem como promover, proteger e recuperar a saúde, buscando a integralidade da assistência para toda a população brasileira.",
                afirmacao: "Você utiliza uma linguagem mais técnica e formal, alinhada com os termos e conceitos presentes na legislação e nos documentos oficiais do SUS. É a resposta ideal para quem busca uma definição precisa e acadêmica."
            },
            {
                texto:  "Fazer com que toda a população do Brasil tenha direito à saúde de graça, sem discriminação, e que os cuidados de saúde sejam completos, da prevenção até o tratamento.",
                afirmacao: "Você usa uma linguagem mais acessível e direta, traduzindo o conceito do SUS para o cotidiano do cidadão comum. É uma resposta mais fácil de entender para quem não é da área da saúde."
            }    
           
        ]
    },
    {
       
            enunciado: "O que significa o princípio da integralidade no SUS?",
            alternativas: [
                {
                    texto: "Significa que a saúde deve ser vista como um todo. Por exemplo, se uma pessoa precisa de um tratamento, ela deve ser cuidada em todas as etapas, desde a consulta inicial, passando por exames e cirurgias, até a reabilitação, sem interrupções e de forma coordenada.",
                    afirmacao: "Você foca em um exemplo prático para ilustrar o conceito, tornando a explicação mais concreta e fácil de visualizar. É uma resposta perfeita para quem aprende melhor por meio de situações reais."
                },
                {
                    texto:  "Refere-se à oferta de um conjunto de ações e serviços de saúde que atendam às necessidades de cada indivíduo, desde o nível primário de atenção até o de alta complexidade, contemplando a promoção, a prevenção e a recuperação da saúde. ",
                    afirmacao: "Você apresenta a definição de forma mais teórica e conceitual, usando termos específicos como nível primário e alta complexidade, é uma resposta que descreve o princípio de forma abrangente, ideal para um contexto de estudo ou debate mais aprofundado."
                }    
               
            ]
        },
        {
            enunciado: "Qual é a importância da participação da comunidade no SUS?",

            alternativas: [
                {
                    texto: "A participação comunitária é essencial para que a população possa fiscalizar e influenciar as decisões sobre a saúde em sua cidade, garantindo que os serviços atendam às suas necessidades reais. Isso acontece por meio dos Conselhos e Conferências de Saúde.",
                    afirmacao: "Você foca no como e para quê. Ela explica de forma prática o que é a participação comunitária (fiscalizar, influenciar) e onde ela ocorre (Conselhos, Conferências). É uma resposta que ensina o cidadão sobre o papel dele no sistema."
                },
                {
                    texto:    "É um dos princípios doutrinários do SUS, que estabelece o controle social como um mecanismo de exercício da democracia. A participação da comunidade legitima o sistema e promove a corresponsabilidade na gestão da saúde, assegurando que o usuário não seja apenas um paciente, mas um ator político e social.",
               
                    afirmacao: "Você aborda o porquê, explorando o conceito de forma mais profunda. Ela utiliza termos como princípios doutrinários e corresponsabilidade, tratando a participação como um pilar democrático e social do SUS. É uma resposta mais adequada para quem busca entender a base teórica do sistema."
                }    
               
            ]
        },
]
   
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }

}
function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++
    mostraPergunta();
}
function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}



mostraPergunta();