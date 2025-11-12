let respostas = [];
let perguntas = [
  "Qual é o seu nome completo?",
  "Qual é a sua formação acadêmica?",
  "Possui alguma especialização ou curso complementar?",
  "Descreva brevemente sua experiência profissional.",
  "Quais são suas principais habilidades técnicas?",
  "Quais são suas soft skills (habilidades comportamentais)?",
  "Qual é o seu objetivo profissional?"
];

let contador = 0;
const pergunta = document.getElementById("pergunta");
const divResp = document.getElementById("inputResposta");

function trocaPergunta(event) {
  // Evita reload ao apertar "Enter"
  if (event) event.preventDefault();

  const input = document.getElementById("txtInput");
  const resp = input.value.trim();

  if (!resp) {
    Swal.fire({
      title: "Ops!",
      text: "Por favor, preencha sua resposta antes de continuar.",
      icon: "warning",
      confirmButtonColor: "#1e64e0"
    });
    return;
  }

  respostas.push(resp);
  input.value = "";
  contador++;

  if (contador < perguntas.length) {
    pergunta.textContent = perguntas[contador];
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  pergunta.textContent = "🎉 Currículo completo!";
  
  divResp.innerHTML = `
    <h3>Resumo das suas informações:</h3>
    <div class="resumo-curriculo">
      ${respostas.map((r, i) => `
        <p><strong>${perguntas[i]}</strong><br>${r}</p>
      `).join("")}
    </div>
    <button class="btn-refazer" onclick="window.location.reload()">Refazer</button>
  `;

  Swal.fire({
    title: "Currículo criado com sucesso!",
    text: "Suas informações foram registradas.",
    icon: "success",
    confirmButtonColor: "#1e64e0"
  });
}
