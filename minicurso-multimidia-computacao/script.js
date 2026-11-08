// Lê e grava preferências sem quebrar a página se o navegador bloquear o armazenamento local
function lerPreferencia(chave) {
  try { return localStorage.getItem(chave); } catch (e) { return null; }
}
function salvarPreferencia(chave, valor) {
  try { localStorage.setItem(chave, valor); } catch (e) { /* ignora */ }
}

var raiz = document.documentElement;

// ===== Tamanho do texto (A− / A / A+) =====
var TAMANHOS = [100, 112.5, 125, 137.5, 150];
var nivelFonte = parseInt(lerPreferencia("nivelFonte"), 10) || 0;

function aplicarFonte() {
  raiz.style.fontSize = TAMANHOS[nivelFonte] + "%";
  salvarPreferencia("nivelFonte", nivelFonte);
}

document.querySelectorAll("[data-fonte]").forEach(function (botao) {
  botao.addEventListener("click", function () {
    var passo = parseInt(botao.dataset.fonte, 10);
    nivelFonte = passo === 0 ? 0 : Math.min(Math.max(nivelFonte + passo, 0), TAMANHOS.length - 1);
    aplicarFonte();
  });
});
aplicarFonte();

// ===== Alto contraste =====
var botaoContraste = document.getElementById("btn-contraste");

function aplicarContraste(ativo) {
  if (ativo) raiz.setAttribute("data-contraste", "alto");
  else raiz.removeAttribute("data-contraste");
  if (botaoContraste) {
    botaoContraste.setAttribute("aria-pressed", ativo ? "true" : "false");
  }
  salvarPreferencia("altoContraste", ativo ? "1" : "0");
}

if (botaoContraste) {
  botaoContraste.addEventListener("click", function () {
    aplicarContraste(botaoContraste.getAttribute("aria-pressed") !== "true");
  });
  aplicarContraste(lerPreferencia("altoContraste") === "1");
}

// ===== Menu em telas pequenas =====
var botaoMenu = document.querySelector(".menu-toggle");
var menu = document.getElementById("menu");

function fecharMenu() {
  if (menu) menu.classList.remove("aberto");
  if (botaoMenu) botaoMenu.setAttribute("aria-expanded", "false");
}

if (botaoMenu && menu) {
  botaoMenu.addEventListener("click", function () {
    var aberto = menu.classList.toggle("aberto");
    botaoMenu.setAttribute("aria-expanded", aberto ? "true" : "false");
  });

  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", fecharMenu);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && menu.classList.contains("aberto")) {
      fecharMenu();
      botaoMenu.focus();
    }
  });
}

// ===== Destaca no menu a seção que está na tela =====
if (menu) {
  var linksMenu = menu.querySelectorAll("a");

  if ("IntersectionObserver" in window) {
    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (!entrada.isIntersecting) return;
        linksMenu.forEach(function (link) {
          if (link.getAttribute("href") === "#" + entrada.target.id) {
            link.setAttribute("aria-current", "true");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      });
    }, { rootMargin: "-30% 0px -60% 0px" });

    document.querySelectorAll("main section[id]").forEach(function (secao) {
      observador.observe(secao);
    });
  }
}

// Ao seguir um link interno, move o foco para o elemento acessível
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener("click", function () {
    var alvo = document.querySelector(link.getAttribute("href"));
    if (!alvo) return;
    var titulo = alvo.querySelector("h1, h2") || alvo;
    if (!titulo.hasAttribute("tabindex")) titulo.setAttribute("tabindex", "-1");
    setTimeout(function () { titulo.focus({ preventScroll: true }); }, 350);
  });
});

// ===== Botões "Copiar prompt" =====
document.querySelectorAll(".botao-copiar").forEach(function (botao) {
  botao.addEventListener("click", function () {
    var alvoId = botao.dataset.alvo;
    var el = document.getElementById(alvoId);
    if (!el) return;
    var texto = el.innerText;
    var aviso = botao.nextElementSibling;

    navigator.clipboard.writeText(texto).then(
      function () {
        if (aviso) aviso.textContent = "Copiado com sucesso! Cole no seu assistente de IA.";
      },
      function () {
        if (aviso) aviso.textContent = "Não foi possível copiar automaticamente. Selecione manualmente.";
      }
    );

    setTimeout(function () {
      if (aviso) aviso.textContent = "";
    }, 4000);
  });
});
