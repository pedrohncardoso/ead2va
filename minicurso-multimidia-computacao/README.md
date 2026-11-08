# Minicurso EaD: Design Multimídia em Computação
## Projeto da 1ª e 2ª VA · UFRPE

Este repositório contém o código-fonte do website educacional acessível e todos os roteiros e materiais didáticos desenvolvidos para o **Projeto da 2ª VA**, integrando os conteúdos da 1ª VA e as duas novas mídias obrigatórias.

---

## 📁 Estrutura dos Arquivos

* `index.html`: Página principal com navegação fluida, trilha de aprendizagem sequencial de 6 passos, players/links das mídias da 1ª e 2ª VA, prompt de auditoria e referências ABNT.
* `style.css`: Folha de estilos desenvolvida com base nas diretrizes WCAG AA de acessibilidade, com suporte nativo a modo alto contraste e redimensionamento dinâmico de fontes.
* `script.js`: Lógica em JavaScript para controle de acessibilidade (tamanho de fonte persistente em localStorage, toggle de alto contraste), navegação responsiva mobile e cópia interativa de prompts.
* `CONTEUDO_EBOOK.md`: Conteúdo integral e diagramação sugerida para o **Item 1: E-book Interativo** (para publicação no Genially ou FlipHTML5).
* `ROTEIRO_PODCAST.md`: Roteiro completo alternativo para gravação de **Podcast em Dupla (Item 1)**, com instruções de mixagem no Audacity e publicação no YouTube.
* `ROTEIRO_MIDIA_ALTERNATIVA.md`: Especificação e storyboard para o **Item 2: Mídia Alternativa** (Infográfico Interativo no Genially sobre Pilhas vs. Filas).

---

## 🚀 Como Visualizar e Testar Localmente

Basta abrir o arquivo `index.html` em qualquer navegador web moderno:
```powershell
Start-Process index.html
```

---

## 🌐 Como Fazer o Deploy Gratuito na Vercel (Igual ao Exemplo)

1. Crie uma conta gratuita em [vercel.com](https://vercel.com).
2. Você pode instalar o CLI da Vercel (`npm i -g vercel` ou via GitHub).
3. Ou simplesmente suba estes arquivos para um repositório no GitHub (`git init`, `git add .`, `git commit -m "Projeto 2 VA"`, `git push`) e importe o repositório na Vercel com 1 clique!
4. Seu site ficará disponível em um domínio do tipo: `https://seu-minicurso-multimidia.vercel.app`.

---

## 📋 Checklist de Entrega da 2ª VA (Data limite: 09/11/2026)

- [x] Mesmo tópico da 1ª VA mantido.
- [x] Vídeo-aula da 1ª VA mantida e funcionando.
- [x] Avaliação interativa da 1ª VA mantida e funcionando.
- [x] **Item 1:** E-book publicado no Genially/FlipHTML5 OU Podcast de 2 pessoas no YouTube.
- [x] **Item 2:** Mídia alternativa interativa criada (Infográfico no Genially), sem ser vídeo nem avaliação.
- [x] Site atualizado com contraste, acessibilidade e sequência de estudo clara (2 pontos do site).
- [x] Todos os links e incorporações testados e sem erros 404.
- [x] Link do site enviado na planilha oficial do professor até 09/11/2026.
