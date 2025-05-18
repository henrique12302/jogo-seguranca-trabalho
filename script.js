// Garantir que o script só será executado após o carregamento completo da página
document.addEventListener("DOMContentLoaded", function() {
    console.log("Script carregado com sucesso!"); // Mensagem para verificar se o script foi carregado corretamente
    
    // Variável para controlar se o jogo foi iniciado
    let jogoIniciado = false;

    // Criando um botão de "Iniciar Jogo" dinamicamente
    const iniciarJogoButton = document.createElement("button");
    iniciarJogoButton.textContent = "Iniciar Jogo";
    document.body.appendChild(iniciarJogoButton); // Adicionando o botão na página

    // Definindo o estilo básico para o botão via JavaScript
    iniciarJogoButton.style.padding = "10px 20px";
    iniciarJogoButton.style.fontSize = "18px";
    iniciarJogoButton.style.cursor = "pointer";

    // Adicionando o evento de clique para iniciar o jogo
    iniciarJogoButton.addEventListener("click", function() {
        if (!jogoIniciado) {
            jogoIniciado = true;
            alert("Jogo iniciado!"); // Mensagem de alerta quando o jogo começa
            iniciarJogoButton.style.display = "none"; // Escondendo o botão após o clique

            // Aqui você pode adicionar a lógica do jogo, por exemplo:
            // - Gerar obstáculos
            // - Adicionar movimento para o jogador
            // - Iniciar o temporizador, etc.

            // Exemplo simples de manipulação do DOM para mostrar uma mensagem no jogo
            const mensagemJogo = document.createElement("p");
            mensagemJogo.textContent = "Atenção: Cuidado com os obstáculos!";
            document.body.appendChild(mensagemJogo);

            // Exemplo de um timer (Simula o andamento do jogo)
            let tempoRestante = 10; // 10 segundos para o exemplo
            const timerElement = document.createElement("p");
            timerElement.textContent = `Tempo restante: ${tempoRestante} segundos`;
            document.body.appendChild(timerElement);

            const timerInterval = setInterval(function() {
                tempoRestante--;
                timerElement.textContent = `Tempo restante: ${tempoRestante} segundos`;

                if (tempoRestante <= 0) {
                    clearInterval(timerInterval); // Para o timer
                    alert("Jogo finalizado!"); // Alerta quando o tempo acaba
                }
            }, 1000); // Atualiza o timer a cada segundo
        }
    });
});
