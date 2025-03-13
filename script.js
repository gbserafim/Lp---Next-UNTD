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
    liderVoluntario: document.getElementById('liderVoluntario').value,
    descricao: document.getElementById('descricao').value || "",
  };

  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbwje97qiDuR5VU4cGRNux6PjTwJVVrj450tVCgsTmjgExC8BPme79y0s5jzF1V_SN50/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
      mode: 'no-cors',
    });

    showAlert('Dados enviados com sucesso!', true);
    this.reset(); // Limpa o formulário
  } catch (error) {
    showAlert(`Erro ao enviar os dados: ${error.message}`, false);
  }
});

function showAlert(message, isSuccess) {
  const alertModal = document.getElementById('alertModal');
  const alertMessage = document.getElementById('alertMessage');
  alertMessage.textContent = message;
  alertMessage.style.color = isSuccess ? 'green' : 'red';
  alertModal.style.display = 'flex';
}

document.getElementById('closeAlert').addEventListener('click', function () {
  document.getElementById('alertModal').style.display = 'none';
});
