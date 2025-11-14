document.addEventListener("DOMContentLoaded", () => {
  const btnConectar = document.getElementById("btnConectar");

  // Cada perfil deve ter uma chave única (exemplo: "conectado_ana")
  const storageKey = "conectado_ana";

  // Funções de estado
  function setPadrao() {
    btnConectar.textContent = "🤝 Conectar";
    btnConectar.style.backgroundColor = "#007BFF";
  }

  function setConectado() {
    btnConectar.textContent = "✅ Conectado";
    btnConectar.style.backgroundColor = "#28a745";
  }

  // Inicializa o botão no estado certo
  function inicializar() {
    const salvo = localStorage.getItem(storageKey);
    if (salvo === "true") {
      setConectado();
    } else {
      setPadrao();
    }
  }

  // Clique no botão
  btnConectar.addEventListener("click", () => {
    const conectado = localStorage.getItem(storageKey) === "true";

    if (!conectado) {
      Swal.fire({
        title: "Conectado com sucesso!",
        text: "Você agora está conectado(a) com este perfil.",
        icon: "success",
        confirmButtonColor: "#1e64e0"
      }).then(() => {
        localStorage.setItem(storageKey, "true");
        setConectado();
      });
    } else {
      Swal.fire({
        title: "Desconectado!",
        text: "Você cancelou a conexão com este perfil.",
        icon: "info",
        confirmButtonColor: "#1e64e0"
      }).then(() => {
        localStorage.setItem(storageKey, "false");
        setPadrao();
      });
    }
  });

  inicializar();
});
