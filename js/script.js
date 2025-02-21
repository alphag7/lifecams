// Simulação de autenticação (usuário: admin, senha: 1234)
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === '1234') {
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'membros.html';
    } else {
        alert('Usuário ou senha incorretos!');
    }
});

// Verifica se está logado
if (window.location.pathname.includes('membros.html')) {
    if (localStorage.getItem('isLoggedIn') !== 'true') {
        window.location.href = 'login.html';
    }
}

// Função de logout
function logout() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'login.html';
}