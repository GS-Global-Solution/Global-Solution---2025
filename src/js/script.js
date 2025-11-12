function analisar() {
  const area = document.getElementById("area").value;
  const nota = parseFloat(document.getElementById("nota").value);
  const resultado = document.getElementById("resultado");

  if (!area || isNaN(nota)) {
    resultado.innerHTML = "<p>Por favor, selecione a área e informe sua nota.</p>";
    return;
  }

  let diagnostico = "";
  let sugestoes = "";
  let cursos = "";

  if (nota < 4) {
    diagnostico = "Ambiente estável, mas com risco de estagnação.";
    sugestoes = "Técnico de Inovação Local / Consultor de Automação Ética";
    cursos = "Inovação Social / Cultura Digital / Empreendedorismo Sustentável";
  } else if (nota < 7) {
    diagnostico = "Ambiente equilibrado, com adaptação tecnológica saudável.";
    sugestoes = "Curador de Experiências Digitais / Facilitador de Transição de Carreira";
    cursos = "Mediação Digital / Soft Skills / Comunicação Colaborativa";
  } else {
    diagnostico = "Ambiente de alto desafio e rápida transformação.";
    sugestoes = "Designer de Fluxos Humanos / Analista Ético em IA";
    cursos = "Gestão emocional / UX em Saúde / Ética em IA";
  }

  resultado.innerHTML = `
    <h3>Área: ${area.charAt(0).toUpperCase() + area.slice(1)}</h3>
    <p><strong>Nota:</strong> ${nota}</p>
    <p><strong>Diagnóstico:</strong> ${diagnostico}</p>
    <p><strong>Profissões emergentes:</strong> ${sugestoes}</p>
    <p><strong>Cursos sugeridos:</strong> ${cursos}</p>
  `;
}
