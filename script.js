const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");


import questions from "./assets/js/questions.js";

let currentIndex = 0;
let questionsCorrect = 0;

btnRestart.onclick = () => {
  content.style.display = "flex";
  contentFinish.style.display = "none";

  currentIndex = 0;
  questionsCorrect = 0;
  loadQuestion();
};

function nextQuestion(e) {
  if (e.target.getAttribute("data-correct") === "true") {
    questionsCorrect++;
  }

  if (currentIndex < questions.length - 1) {
    currentIndex++;
    loadQuestion();
  } else {
    finish();
  }
}

function finish() {
  textFinish.innerHTML = `você acertou ${questionsCorrect} de ${questions.length}`;
  content.style.display = "none";
  contentFinish.style.display = "flex";
}

function loadQuestion() {
  spnQtd.innerHTML = `${currentIndex + 1}/${questions.length}`;
  const item = questions[currentIndex];
  answers.innerHTML = "";
  question.innerHTML = item.question;

  item.answers.forEach((answer) => {
    const div = document.createElement("div");

    div.innerHTML = `
    <button class="answer" data-correct="${answer.correct}">
      ${answer.option}
    </button>
    `;

    answers.appendChild(div);
  });

  document.querySelectorAll(".answer").forEach((item) => {
    item.addEventListener("click", nextQuestion);
  });
}

loadQuestion();

function verificarSeAcertou (nQuestao, resposta){

  let numeroDaQuestao = nQuestao.value
  console.log("Questão " + numeroDaQuestao)

  let respostaEscolhida = resposta.textContent
  console.log("RespU " + respostaEscolhida)

  let certa = questoes[numeroDaQuestao].correta
  console.log("RespC " + certa)

  if(respostaEscolhida == certa){
    pontos += 10
  }else{
    console.log("Resposta Errada")
  }


  placar = prontos
  instrucoes.textContent = "Pontos " + placar

  bloquearAlternativas()

  setTimeout(function(){
      proxima = numeroDaQuestao+1

      if(proxima > totalDeQuestoes) {
        console.log("Fim do jogo!")
        fimDoJogo()
      } else {
        proximaQuestao(proxima)
      }
  }, 250)
  desbloquearAlternativas()
}