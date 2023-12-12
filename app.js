
// app.js
// Configure o Firebase com as suas credenciais
const firebaseConfig = {
apiKey: "AIzaSyC-wR1s58dO2M9sAUPO5pG1ZK0MR8NrAWQ",
authDomain: "eeegame-aeb64.firebaseapp.com",
projectId: "eeegame-aeb64",
storageBucket: "eeegame-aeb64.appspot.com",
messagingSenderId: "119448747040",
appId: "1:119448747040:web:846725d692943062c39045",
measurementId: "G-DK6WKFGMMY"
};

firebase.initializeApp(firebaseConfig);

// Referência para o Realtime Database
const database = firebase.database();
const usuariosRef = database.ref("/usuarios");

// Função para criar quadrados de usuários na tela
function criarQuadrados(usuarios) {
const gameContainer = document.getElementById("game-container");
gameContainer.innerHTML = ""; // Limpar o conteúdo existente

for (const usuarioId in usuarios) {
const usuario = usuarios[usuarioId];
const square = document.createElement("div");
square.className = "user-square";
square.style.left = usuario.posicao.x + "px";
square.style.top = usuario.posicao.y + "px";
gameContainer.appendChild(square);
}
}

// Função para atualizar a tela quando os dados mudam no banco de dados
function atualizarTela(snapshot) {
const usuarios = snapshot.val();
criarQuadrados(usuarios);
}

// Adicione um ouvinte para os dados do banco de dados
usuariosRef.on("value", atualizarTela);
