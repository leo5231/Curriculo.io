function selecionarTemplate(template) {
      localStorage.setItem('templateSelecionado', template);
      window.location.href = 'criacao.html'; // redireciona para a página de criação
    }