// ==========================================================================
// OmniComp · Lógica Interativa do Minicurso Multimodal
// ==========================================================================

// 1. Armazenamento local e Acessibilidade
function lerPreferencia(chave, padrao) {
  try {
    var val = localStorage.getItem(chave);
    return val !== null ? val : padrao;
  } catch (e) {
    return padrao;
  }
}

function salvarPreferencia(chave, valor) {
  try {
    localStorage.setItem(chave, valor);
  } catch (e) {}
}

var raiz = document.documentElement;

// Redimensionamento de Texto
var niveisFonte = [100, 112.5, 125, 137.5];
var indiceFonte = parseInt(lerPreferencia('omni_fonte', '0'), 10);

function aplicarFonte() {
  raiz.style.fontSize = niveisFonte[indiceFonte] + '%';
  salvarPreferencia('omni_fonte', indiceFonte);
}

document.querySelectorAll('[data-fonte-acao]').forEach(function(btn) {
  btn.addEventListener('click', function() {
    var acao = btn.getAttribute('data-fonte-acao');
    if (acao === 'aumentar') {
      indiceFonte = Math.min(indiceFonte + 1, niveisFonte.length - 1);
    } else if (acao === 'diminuir') {
      indiceFonte = Math.max(indiceFonte - 1, 0);
    } else {
      indiceFonte = 0;
    }
    aplicarFonte();
  });
});
aplicarFonte();

// Alto Contraste
var btnContraste = document.getElementById('btn-contraste-global');
function aplicarContraste(ativo) {
  if (ativo) {
    raiz.setAttribute('data-contraste', 'alto');
  } else {
    raiz.removeAttribute('data-contraste');
  }
  if (btnContraste) {
    btnContraste.setAttribute('aria-pressed', ativo ? 'true' : 'false');
  }
  salvarPreferencia('omni_contraste', ativo ? '1' : '0');
}

if (btnContraste) {
  btnContraste.addEventListener('click', function() {
    var estadoAtual = raiz.getAttribute('data-contraste') === 'alto';
    aplicarContraste(!estadoAtual);
  });
  aplicarContraste(lerPreferencia('omni_contraste', '0') === '1');
}

// 2. Player de Vídeo Dinâmico (Permite ao aluno colar o link do seu próprio vídeo)
var btnAtualizarVideo = document.getElementById('btn-atualizar-video');
var inputVideoUrl = document.getElementById('input-video-url');
var iframeVideo = document.getElementById('video-player-frame');

function extrairYoutubeId(url) {
  if (!url) return '';
  var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  var match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : url;
}

if (btnAtualizarVideo && inputVideoUrl && iframeVideo) {
  // Carrega vídeo salvo ou usa o vídeo padrão de instrução
  var videoSalvo = lerPreferencia('omni_youtube_id', '');
  if (videoSalvo) {
    iframeVideo.src = 'https://www.youtube-nocookie.com/embed/' + videoSalvo;
    inputVideoUrl.value = 'https://youtu.be/' + videoSalvo;
  }

  btnAtualizarVideo.addEventListener('click', function() {
    var raw = inputVideoUrl.value.trim();
    if (!raw) {
      alert('Por favor, digite ou cole o link do seu vídeo do YouTube da 1ª VA.');
      return;
    }
    var videoId = extrairYoutubeId(raw);
    if (videoId) {
      iframeVideo.src = 'https://www.youtube-nocookie.com/embed/' + videoId;
      salvarPreferencia('omni_youtube_id', videoId);
      alert('Vídeo atualizado com sucesso no seu player!');
    } else {
      alert('Não foi possível identificar o ID do vídeo. Verifique o link.');
    }
  });
}

// 3. Avaliação Interativa Integrada da 1ª VA (10 Questões com Feedback Imediato)
var questoesAvaliacao = [
  {
    pergunta: "1. De acordo com a Teoria Cognitiva da Aprendizagem Multimídia de Richard Mayer, por que o ser humano aprende melhor com palavras e imagens do que apenas com palavras?",
    opcoes: [
      "Porque o cérebro possui canais separados e independentes para processar informações visuais e auditivas.",
      "Porque o canal visual tem capacidade de memória infinita.",
      "Porque a leitura de textos escritos não utiliza o processador auditivo.",
      "Porque imagens eliminam completamente a necessidade de raciocínio verbal."
    ],
    correta: 0,
    explicacao: "Correto! O princípio fundamental de Mayer e Paivio (Dupla Codificação) postula que processamos informação por dois canais sensoriais distintos (pictórico e fonológico), permitindo integração sinérgica sem sobrecarregar um único canal."
  },
  {
    pergunta: "2. O Princípio da Redundância de Mayer adverte contra qual prática comum no ensino de Computação?",
    opcoes: [
      "Apresentar um diagrama de memória e explicá-lo apenas por narração oral.",
      "Exibir um slide com bloco de código extenso e ler em voz alta exatamente as mesmas palavras do slide.",
      "Dividir o conteúdo de algoritmos em múltiplos capítulos curtos.",
      "Usar cores de destaque para evidenciar o ponteiro de execução."
    ],
    correta: 1,
    explicacao: "Exato! Projetar texto longo na tela e ler exatamente as mesmas palavras cria redundância prejudicial: o texto escrito e a fala competem pelo mesmo canal fonológico na memória de trabalho."
  },
  {
    pergunta: "3. Na representação de Estruturas de Dados Lineares (Pilha vs. Fila), qual é o papel pedagógico ideal do TEXTO?",
    opcoes: [
      "Substituir completamente a imagem e o vídeo com descrições gráficas por escrito.",
      "Fornecer as regras formais invariantes (LIFO/FIFO), assinaturas de métodos (push, pop) e complexidade assintótica O(1).",
      "Descrever as cores e as posições em pixels dos nós de memória.",
      "Contar histórias longas e piadas para descontrair a aula."
    ],
    correta: 1,
    explicacao: "Perfeito! O texto é a mídia ideal para formalização, regras estritas de contrato de métodos, definições matemáticas e complexidade de tempo O(1)."
  },
  {
    pergunta: "4. Qual é a principal contribuição pedagógica da IMAGEM (elaborada no Canva) ao ensinar Pilhas e Filas?",
    opcoes: [
      "Tornar o material visualmente bonito através de decorações e ilustrações 3D genéricas.",
      "Estabelecer a relação espacial e a arquitetura dos nós em memória (topo único na Pilha vs. início/fim na Fila).",
      "Substituir a necessidade de explicar o algoritmo.",
      "Exibir o código-fonte em imagem sem texto selecionável."
    ],
    correta: 1,
    explicacao: "Excelente! Diagramas vetoriais constroem modelos espaciais de memória instantâneos, permitindo que o aluno veja a topologia da estrutura (como o recipiente vertical da Pilha com o ponteiro Top)."
  },
  {
    pergunta: "5. No Audacity, qual é o objetivo pedagógico de adicionar um efeito sonoro sutil (ex: um 'pop' suave) na inserção de um elemento na Pilha?",
    opcoes: [
      "Assustar o estudante para garantir que ele não durma.",
      "Aplicar o Princípio da Sinalização (Cueing), ancorando a atenção auditiva no instante exato da mudança de estado.",
      "Preencher o silêncio para a aula parecer mais dinâmica.",
      "Aumentar o volume da aula sem precisar de microfone."
    ],
    correta: 1,
    explicacao: "Correto! Efeitos sonoros breves e intencionais funcionam como gatilhos de atenção (sinalização acústica), destacando a transição de estado sem poluir a cognição."
  },
  {
    pergunta: "6. Qual procedimento no Audacity é essencial antes de exportar a locução de um podcast didático?",
    opcoes: [
      "Aumentar os agudos ao máximo para dar voz de robô.",
      "Obter o Perfil de Ruído em um trecho silencioso e aplicar a Redução de Ruído, seguida de Normalização em -1.0 dB.",
      "Adicionar eco constante em todas as falas para criar suspense.",
      "Gravar com o ganho no volume máximo gerando saturação vermelha."
    ],
    correta: 1,
    explicacao: "Correto! Capturar o ruído de fundo da sala para eliminá-lo e normalizar os picos de volume a -1.0 dB assegura um áudio cristalino e confortável aos ouvidos do aprendiz."
  },
  {
    pergunta: "7. Como os Assistentes de IA (ChatGPT, Claude, Gemini) devem ser utilizados na preparação de materiais multimídia em Computação?",
    opcoes: [
      "Para terceirizar o pensamento crítico, copiando e colando respostas sem qualquer revisão.",
      "Como parceiros de co-criação: gerando analogias do cotidiano, identificando termos obscuros e estruturando roteiros balanceados.",
      "Apenas para desenhar os diagramas de memória finais sem intervenção humana.",
      "Para substituir o professor em sala de aula de forma automática."
    ],
    correta: 1,
    explicacao: "Isso mesmo! A IA é um excelente amplificador pedagógico para brainstorm de analogias, detecção de lacunas explicativas e refinamento de roteiros instrucionais."
  },
  {
    pergunta: "8. O Princípio da Coerência de Mayer orienta o educador a:",
    opcoes: [
      "Adicionar músicas empolgantes de fundo e gifs engraçados para aumentar o engajamento.",
      "Eliminar qualquer elemento, imagem decorativa ou som supérfluo que não contribua diretamente para o objetivo de aprendizagem.",
      "Usar o máximo de palavras técnicas sofisticadas possíveis.",
      "Fazer vídeos de pelo menos 2 horas de duração ininterrupta."
    ],
    correta: 1,
    explicacao: "Exatamente! Qualquer elemento puramente decorativo ou ruído sonoro concorre por recursos limitados da memória de trabalho, prejudicando a retenção do conceito principal."
  },
  {
    pergunta: "9. De acordo com o Princípio da Contiguidade Espacial, onde devemos posicionar legendas explicativas de um código ou diagrama?",
    opcoes: [
      "Em um anexo separado ao final do arquivo.",
      "Fisicamente próximas aos elementos gráficos ou linhas de código a que se referem.",
      "Sempre centralizadas no cabeçalho superior da página.",
      "Ocultas dentro de links que abrem outras páginas."
    ],
    correta: 1,
    explicacao: "Correto! A proximidade física entre palavra e ilustração reduz a necessidade de o estudante alternar constantemente o foco do olhar (split-attention effect)."
  },
  {
    pergunta: "10. No Protocolo 4C de Revisão Pedagógica, o que significa avaliar a 'Complementaridade'?",
    opcoes: [
      "Verificar se o material tem mais de 100 páginas.",
      "Garantir que cada mídia utilizada cumpra uma função exclusiva e sinérgica, de modo que nenhuma simplesmente repita a outra.",
      "Confirmar se todos os alunos tiraram nota 10 na primeira tentativa.",
      "Checar se todos os botões do site são azuis."
    ],
    correta: 1,
    explicacao: "Perfeito! A verdadeira multimodalidade ocorre quando texto, imagem, áudio e vídeo colaboram sem redundância, cada qual explorando sua força cognitiva específica."
  }
];

var indiceQuestao = 0;
var acertos = 0;

var elPergunta = document.getElementById('quiz-pergunta-txt');
var elOpcoes = document.getElementById('quiz-opcoes-lista');
var elFeedback = document.getElementById('quiz-feedback-box');
var elProgresso = document.getElementById('quiz-progresso-txt');
var btnProxima = document.getElementById('btn-quiz-proxima');

function carregarQuestao() {
  var q = questoesAvaliacao[indiceQuestao];
  elPergunta.textContent = q.pergunta;
  elProgresso.textContent = 'Questão ' + (indiceQuestao + 1) + ' de ' + questoesAvaliacao.length;
  elOpcoes.innerHTML = '';
  elFeedback.className = 'quiz-feedback';
  elFeedback.textContent = '';
  btnProxima.style.display = 'none';

  q.opcoes.forEach(function(opcao, idx) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'quiz-opcao-btn';
    btn.innerHTML = '<strong>' + String.fromCharCode(65 + idx) + ')</strong> ' + opcao;

    btn.addEventListener('click', function() {
      var botoes = elOpcoes.querySelectorAll('button');
      botoes.forEach(function(b) { b.disabled = true; });

      if (idx === q.correta) {
        btn.classList.add('correta');
        elFeedback.className = 'quiz-feedback visivel';
        elFeedback.style.borderColor = 'var(--accent-emerald)';
        elFeedback.innerHTML = '<strong>✔ Parabéns!</strong> ' + q.explicacao;
        acertos++;
      } else {
        btn.classList.add('incorreta');
        botoes[q.correta].classList.add('correta');
        elFeedback.className = 'quiz-feedback visivel';
        elFeedback.style.borderColor = 'var(--accent-rose)';
        elFeedback.innerHTML = '<strong>✖ Não foi dessa vez.</strong> ' + q.explicacao;
      }

      btnProxima.style.display = 'inline-flex';
      if (indiceQuestao === questoesAvaliacao.length - 1) {
        btnProxima.textContent = 'Ver Resultado Final';
      } else {
        btnProxima.textContent = 'Próxima Questão →';
      }
    });

    elOpcoes.appendChild(btn);
  });
}

if (btnProxima) {
  btnProxima.addEventListener('click', function() {
    if (indiceQuestao < questoesAvaliacao.length - 1) {
      indiceQuestao++;
      carregarQuestao();
    } else {
      // Exibe Resultado Final
      elPergunta.textContent = 'Avaliação Concluída com Sucesso!';
      elProgresso.textContent = 'Pontuação: ' + acertos + ' de ' + questoesAvaliacao.length + ' acertos (' + (acertos * 10) + '%)';
      elOpcoes.innerHTML = '<div style="padding: 20px; background: rgba(14, 165, 233, 0.1); border-radius: 10px; border: 1px solid var(--border-color);">' +
        '<p style="font-size: 1.15rem; margin-bottom: 12px;"><strong>Feedback Geral:</strong> ' +
        (acertos >= 8 ? 'Excelente domínio dos princípios de Richard Mayer, ferramentas (Canva, Audacity, IA) e representação multimodal em Computação!' : 'Bom progresso! Recomendamos revisar os capítulos do E-book e praticar no Simulador de Pilhas/Filas para reforçar os conceitos.') +
        '</p>' +
        '<button type="button" class="btn-omni btn-omni--primary" onclick="reiniciarQuiz()">Refazer Avaliação</button>' +
        '</div>';
      elFeedback.className = 'quiz-feedback';
      btnProxima.style.display = 'none';
    }
  });
}

window.reiniciarQuiz = function() {
  indiceQuestao = 0;
  acertos = 0;
  carregarQuestao();
};

if (elPergunta) {
  carregarQuestao();
}

// 4. Checklist Interativo de Auditoria 4C (Calcula a nota de qualidade do material)
var checks4C = document.querySelectorAll('.checklist-item input[type="checkbox"]');
var elPlacar4C = document.getElementById('placar-4c');

function calcularNota4C() {
  if (!elPlacar4C) return;
  var marcados = 0;
  checks4C.forEach(function(c) {
    if (c.checked) marcados++;
  });
  var total = checks4C.length;
  var porcentagem = Math.round((marcados / total) * 100);
  elPlacar4C.textContent = porcentagem + '% de Conformidade Pedagógica (' + marcados + ' de ' + total + ' itens verificados)';
}

checks4C.forEach(function(c) {
  c.addEventListener('change', calcularNota4C);
});
calcularNota4C();

// 5. Botão Copiar Prompt com Feedback Acessível
document.querySelectorAll('.btn-copiar-prompt').forEach(function(btn) {
  btn.addEventListener('click', function() {
    var alvoId = btn.getAttribute('data-alvo');
    var el = document.getElementById(alvoId);
    if (!el) return;
    var texto = el.innerText;
    var aviso = btn.nextElementSibling;

    navigator.clipboard.writeText(texto).then(function() {
      if (aviso) aviso.textContent = 'Prompt copiado! Cole no ChatGPT, Claude ou Gemini.';
      setTimeout(function() { if (aviso) aviso.textContent = ''; }, 4500);
    });
  });
});
