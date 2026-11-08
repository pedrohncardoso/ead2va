# MÍDIA ALTERNATIVA (2ª VA - ITEM 2): GUIA DE PRODUÇÃO
## Infográfico Interativo no Genially: "A Matriz Multimodal de Estruturas de Dados"

*Documento de especificação para o Item 2 do Projeto da 2ª VA (Exceto vídeo e avaliação).*

---

### 1. IDENTIFICAÇÃO DO PRODUTO
* **Formato:** Infográfico Interativo / Mapa Visual Dinâmico
* **Plataforma Recomendada:** [Genially](https://genially.com) (Template de Infográfico Interativo / Diagrama)
* **Objetivo de Aprendizagem:** Permitir que o estudante explore ativamente, por meio de cliques em *hotspots*, como as 4 mídias (Texto, Imagem, Áudio e Animação) representam facetas distintas e complementares de uma estrutura de dados de Computação (Pilhas vs. Filas).
* **Por que cumpre os critérios da 2ª VA?**
  * Não é vídeo nem avaliação (atende à restrição obrigatória).
  * É complementar ao vídeo da 1ª VA e ao E-book do Item 1.
  * Altamente interativo, com navegabilidade simples e acessível.

---

### 2. ARQUITETURA VISUAL E STORYBOARD INTERATIVO

O infográfico no Genially terá uma tela principal dividida em duas colunas centrais com nós interativos clicáveis:

#### Coluna Esquerda: A PILHA (LIFO - Last In, First Out)
* **Ícone Central:** Um tubo vertical estilizado com blocos coloridos numerados [1, 2, 3].
* **4 Botões Interativos (Hotspots de Clique):**
  1. 📝 **Hotspot "Ver Texto Formal":**
     * *Ao clicar, abre janela modal:*
       * **Definição:** Uma pilha é uma estrutura linear onde a inserção (`push`) e a remoção (`pop`) ocorrem na mesma extremidade chamada *Topo*.
       * **Regra Fundamental:** LIFO (*Last In, First Out*).
       * **Complexidade:** Inserção $O(1)$, Remoção $O(1)$.
       * **Aplicação Real:** O botão "Desfazer" (Ctrl+Z) de editores de texto e a Pilha de Chamadas de Funções (*Call Stack*).
  2. 🖼️ **Hotspot "Ver Esquema Visual":**
     * *Ao clicar, amplia diagrama feito no Canva:*
       * Mostra a representação de nós de memória. Uma seta destacada em laranja aponta para o elemento do topo (`Top Pointer`). Os nós abaixo estão inacessíveis até que o topo seja desempilhado.
  3. 🎧 **Hotspot "Ouvir Analogia Sonora":**
     * *Ao clicar, reproduz áudio curto (25 seg) ou exibe transcrição sonificada:*
       * Locutor: *"Pense no tubo de batatas Pringles: a última batata que entrou na fábrica é a primeiríssima que você vai comer ao abrir a lata. No Audacity, adicionamos um efeito sonoro de 'pop!' no topo para você fixar que a saída é sempre por cima."*
  4. 🎬 **Hotspot "Ver Dinâmica Temporal":**
     * *Ao clicar, exibe GIF animado:*
       * Demonstra visualmente um bloco entrando pelo topo, o ponteiro subindo de nível, e depois sendo retirado.

---

#### Coluna Direita: A FILA (FIFO - First In, First Out)
* **Ícone Central:** Um duto horizontal com blocos alinhados e setas direcionais da esquerda para a direita.
* **4 Botões Interativos (Hotspots de Clique):**
  1. 📝 **Hotspot "Ver Texto Formal":**
     * *Ao clicar, abre janela modal:*
       * **Definição:** Uma fila é uma estrutura linear onde novas entradas ocorrem no final (`tail`/`enqueue`) e as saídas ocorrem no início (`head`/`dequeue`).
       * **Regra Fundamental:** FIFO (*First In, First Out*).
       * **Complexidade:** Inserção $O(1)$, Remoção $O(1)$.
       * **Aplicação Real:** Fila de impressão do sistema operacional e fila de requisições de servidores web.
  2. 🖼️ **Hotspot "Ver Esquema Visual":**
     * *Ao clicar, amplia diagrama feito no Canva:*
       * Mostra dois ponteiros independentes: `Head` (Início) na esquerda e `Tail` (Fim) na direita, ressaltando a bidirecionalidade dos limites da estrutura.
  3. 🎧 **Hotspot "Ouvir Analogia Sonora":**
     * *Ao clicar, reproduz áudio curto (25 seg):*
       * Locutor: *"Imagine a fila da cantina da universidade: furar fila gera revolta porque a regra universal é justa: quem chegou primeiro é atendido primeiro. No áudio, o ritmo compassado reforça a passagem ordenada."*
  4. 🎬 **Hotspot "Ver Dinâmica Temporal":**
     * *Ao clicar, exibe GIF animado:*
       * Mostra o elemento entrando por trás e o primeiro saindo pela frente, com os ponteiros atualizados.

---

#### Rodapé do Infográfico: O "Auditor 4C" Interativo
* Um botão interativo destacado com ícone de lupa: **"Como Auditar Este Material?"**
* Ao clicar, abre uma tela com um comparativo interativo:
  * **Exemplo com Sobrecarga Cognitiva (Ruim):** Texto minúsculo explicando ponteiros sobreposto a uma imagem poluída com música de rock ao fundo.
  * **Exemplo Multimodal Otimizado (Bom):** Diagrama limpo no Canva, texto enxuto em tópicos, áudio narrativo pausado e complementar.

---

### 3. PASSO A PASSO PARA CONSTRUÇÃO NO GENIALLY (EM 15 MINUTOS)
1. Crie uma conta gratuita em [genially.com](https://genially.com).
2. Clique em **Criar Genially -> Infográficos -> Infográfico de Processo ou Diagrama**.
3. Escolha um template limpo com tema azul ou tecnologia (ex: "Diagrama Circular", "Infográfico Comparativo" ou "Linha do Tempo").
4. Insira os dois títulos: **Pilha (LIFO)** e **Fila (FIFO)**.
5. Adicione elementos interativos do Genially (ícones de olho, documento, fone de ouvido e play).
6. Clique no ícone de "Mãozinha" (Interatividade) em cada elemento e selecione a opção **"Janela" (Window)** ou **"Etiqueta" (Tooltip)**.
7. Cole o conteúdo de texto, insira as imagens feitas no Canva e adicione links ou arquivos de áudio.
8. Clique em **Pronto / Publicar** no canto superior direito, defina como **Público na Web** e copie o link público gerado para inserir no seu site (`index.html`)!
