// O JavaScript permanece exatamente igual ao anterior
    const preview = document.getElementById("preview");

    // Aplicar o template selecionado
    const templateSelecionado = localStorage.getItem("templateSelecionado") || 'template1';
    aplicarTemplate(templateSelecionado);

    function updatePreview() {
      document.getElementById("preview-nome").textContent = document.getElementById("nome").value || "Seu nome";
      document.getElementById("preview-endereco").textContent = document.getElementById("endereco").value || "Seu endereço";
      document.getElementById("preview-telefone").textContent = document.getElementById("telefone").value || "Seu telefone";
      document.getElementById("preview-idade").textContent = document.getElementById("idade").value ? "Idade: " + document.getElementById("idade").value : "";
      document.getElementById("preview-email").textContent = document.getElementById("email").value || "";
      document.getElementById("preview-resumo").textContent = document.getElementById("resumo").value || "Resumo profissional aparecerá aqui.";
      
      // Formatando habilidades como lista
      const habilidades = document.getElementById("habilidades").value;
      if (habilidades) {
        const habilidadesList = habilidades.split(',').map(item => `• ${item.trim()}`).join('<br>');
        document.getElementById("preview-habilidades").innerHTML = habilidadesList;
      } else {
        document.getElementById("preview-habilidades").innerHTML = "";
      }
    }

    function adicionarFormacao() {
      const container = document.getElementById("formacoes");
      const id = Date.now();
      const novoFormacaoHTML = `
        <div class="entry" id="formacao-${id}">
          <input placeholder="Instituição" oninput="atualizarFormacoes()">
          <input placeholder="Nível (Ex: Superior)" oninput="atualizarFormacoes()">
          <input placeholder="Início" oninput="atualizarFormacoes()">
          <input placeholder="Conclusão" oninput="atualizarFormacoes()">
          <button class="remover-btn" onclick="this.parentElement.remove(); atualizarFormacoes()">Remover</button>
        </div>
      `;
      
      container.insertAdjacentHTML('beforeend', novoFormacaoHTML);
    }

    function atualizarFormacoes() {
      const entradas = document.querySelectorAll("#formacoes .entry");
      const previewContainer = document.getElementById("preview-formacoes");
      previewContainer.innerHTML = "";
      entradas.forEach(entry => {
        const inputs = entry.querySelectorAll("input");
        const [inst, nivel, inicio, fim] = Array.from(inputs).map(i => i.value);
        if (inst || nivel || inicio || fim) {
          previewContainer.innerHTML += `<p><strong>${nivel}</strong> em ${inst} (${inicio} - ${fim})</p>`;
        }
      });
    }

    function adicionarExperiencia() {
      const container = document.getElementById("experiencias");
      const id = Date.now();
      const novaExperienciaHTML = `
        <div class="entry" id="experiencia-${id}">
          <input placeholder="Empresa" oninput="atualizarExperiencias()">
          <input placeholder="Função" oninput="atualizarExperiencias()">
          <input placeholder="Início" oninput="atualizarExperiencias()">
          <input placeholder="Conclusão" oninput="atualizarExperiencias()">
          <textarea placeholder="Resumo das atividades" oninput="atualizarExperiencias()"></textarea>
          <button class="remover-btn" onclick="this.parentElement.remove(); atualizarExperiencias()">Remover</button>
        </div>
      `;
      
      container.insertAdjacentHTML('beforeend', novaExperienciaHTML);
    }

    function atualizarExperiencias() {
      const entradas = document.querySelectorAll("#experiencias .entry");
      const previewContainer = document.getElementById("preview-experiencias");
      previewContainer.innerHTML = "";
      entradas.forEach(entry => {
        const inputs = entry.querySelectorAll("input, textarea");
        const [empresa, funcao, inicio, fim, resumo] = Array.from(inputs).map(i => i.value);
        if (empresa || funcao || inicio || fim || resumo) {
          let experienciaHTML = `<p><strong>${funcao || 'Função não especificada'}</strong>`;
          if (empresa) experienciaHTML += ` em ${empresa}`;
          if (inicio || fim) experienciaHTML += ` (${inicio} - ${fim})`;
          if (resumo) experienciaHTML += `<br>${resumo}`;
          experienciaHTML += `</p>`;
          previewContainer.innerHTML += experienciaHTML;
        }
      });
    }

    function aplicarTemplate(templateName) {
      // Remove todas as classes de template
      preview.classList.remove('template1', 'template2', 'template3');
      // Adiciona a classe do template selecionado
      preview.classList.add(templateName);
      // Salva no localStorage
      localStorage.setItem("templateSelecionado", templateName);
    }

    // Inicializa o preview e adiciona uma primeira entrada vazia
    updatePreview();
    adicionarFormacao();
    adicionarExperiencia();