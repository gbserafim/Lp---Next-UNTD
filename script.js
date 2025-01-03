document.getElementById('decisionForm').addEventListener('submit', async function (event) {
    event.preventDefault();
  
    const formData = {
      nome: document.getElementById('nome').value,
      decisao: document.getElementById('decisao').value,
      youth: document.getElementById('youth').value,
      idade: document.getElementById('idade').value,
      batizado: document.getElementById('batizado').value,
      telefone: document.getElementById('telefone').value,
      bairro: document.getElementById('bairro').value,
      primeiraVez: document.getElementById('primeiraVez').value,
      eventos: document.getElementById('eventos').value,
      eventoDetalhes: document.getElementById('eventoDetalhes').value || "",
      uGroup: document.getElementById('uGroup').value,
      voluntario: document.getElementById('voluntario').value,
      descricao: document.getElementById('descricao').value || "",
    };
  
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbzjmZpJVqGUC1zinPSbW1Tj8a7UWcnEia8xIiSBk8zEGZS2lyP6i-7W1xY3L6BKyxka/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (result.status === 'success') {
        document.getElementById('response').textContent = 'Dados enviados com sucesso!';
        this.reset(); // Limpa o formulário
      } else {
        document.getElementById('response').textContent = `Erro: ${result.message}`;
      }
    } catch (error) {
      document.getElementById('response').textContent = `Erro ao enviar os dados: ${error.message}`;
    }
  });
  