// Seletores de elementos
const grid = document.getElementById('grid');
const addBtn = document.getElementById('add-btn');
const inputNome = document.getElementById('nome');
const inputFrequencia = document.getElementById('frequencia');

// Carregar dados iniciais
let plantas = JSON.parse(localStorage.getItem('plantas_db')) || [];

// Função para adicionar nova planta
function adicionarPlanta() {
    const nome = inputNome.value;
    const frequencia = parseInt(inputFrequencia.value);

    if (!nome || !frequencia) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const novaPlanta = {
        id: Date.now(),
        nome: nome,
        frequencia: frequencia,
        ultimaRega: new Date().toISOString().split('T')[0]
    };

    plantas.push(novaPlanta);
    salvarERenderizar();

    // Limpar campos
    inputNome.value = '';
    inputFrequencia.value = '';
}

// Função para marcar como regada hoje
function registrarRega(id) {
    plantas = plantas.map(p => {
        if (p.id === id) {
            p.ultimaRega = new Date().toISOString().split('T')[0];
        }
        return p;
    });
    salvarERenderizar();
}

// Função para remover planta
function deletarPlanta(id) {
    if (confirm("Deseja remover esta planta?")) {
        plantas = plantas.filter(p => p.id !== id);
        salvarERenderizar();
    }
}

// Persistência e Atualização da UI
function salvarERenderizar() {
    localStorage.setItem('plantas_db', JSON.stringify(plantas));
    render();
}

// Gerar o HTML dos cards
function render() {
    grid.innerHTML = '';

    plantas.forEach(p => {
        const hoje = new Date();
        const ultima = new Date(p.ultimaRega);
        
        // Cálculo de diferença em dias
        const diffInMs = hoje - ultima;
        const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
        
        const urgente = diffInDays >= p.frequencia;

        const card = document.createElement('div');
        card.className = `card ${urgente ? 'needs-water' : ''}`;
        
        card.innerHTML = `
            <button class="btn-delete" onclick="deletarPlanta(${p.id})">&times;</button>
            <span class="status-label" style="color: ${urgente ? 'var(--danger)' : 'var(--primary)'}">
                ${urgente ? '⚠️ Precisa de Água' : '✅ Hidratada'}
            </span>
            <h3>${p.nome}</h3>
            <p>Rega a cada: <strong>${p.frequencia} dias</strong></p>
            <p><small>Última vez: ${p.ultimaRega}</small></p>
            <button class="btn-water" onclick="registrarRega(${p.id})">💧 Regar Agora</button>
        `;
        grid.appendChild(card);
    });
}

// Event Listeners
addBtn.addEventListener('click', adicionarPlanta);

// Renderização inicial
render();