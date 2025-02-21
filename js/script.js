document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Formulário enviado com sucesso!');
    this.reset();
});