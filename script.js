document.addEventListener("DOMContentLoaded", function() {
    const carro = document.getElementById("carro");
    const gameContainer = document.getElementById("game-container");

    let carroPosition = 50; // Percentagem (50% = centro)
    let jogoAtivo = true;
    let velocidade = 3;
    let score = 0;

    // Função para movimentar o carro
    function moverCarro() {
        if (carroPosition < 0) carroPosition = 0;
        if (carroPosition > 100) carroPosition = 100;
        carro.style.left = `${carroPosition}%`;
    }

    // Gerar obstáculos
    function gerarObstaculo() {
        const obstacle = document.createElement("div");
        obstacle.classList.add("obstacle");
        obstacle.style.backgroundImage = "url('https://img.freepik.com/fotos-gratis/carro-caminhao-da-construcao-rua_1150-5182.jpg')"; // Imagem do obstáculo
        obstacle.style.left = `${Math.random() * 80}%`; // Coloca obstáculos aleatoriamente, mas com margem
        gameContainer.appendChild(obstacle);
        moveObstaculo(obstacle);
    }

    // Mover obstáculos
    function moveObstaculo(obstacle) {
        const interval = setInterval(() => {
            if (!jogoAtivo) {
                clearInterval(interval);
                return;
            }

            const obstacleTop = parseFloat(window.getComputedStyle(obstacle).top);
            obstacle.style.top = obstacleTop + velocidade + "px";

            // Verificar colisão
            if (obstacleTop >= 500 && obstacleTop <= 580) {
                const obstacleLeft = parseFloat(window.getComputedStyle(obstacle).left);
                if (
                    obstacleLeft >= (carroPosition - 5) * gameContainer.offsetWidth / 100 &&
                    obstacleLeft <= (carroPosition + 5) * gameContainer.offsetWidth / 100
                ) {
                    // Colisão detectada
                    alert("Você perdeu!");
                    jogoAtivo = false;
                    clearInterval(interval);
                    return;
                }
            }

            // Se o obstáculo sair da tela
            if (obstacleTop > gameContainer.offsetHeight) {
                score++;
                gameContainer.removeChild(obstacle);
            }
        }, 20);
    }

    // Detectar toque ou clique para mover o carro
    gameContainer.addEventListener("touchstart", (event) => {
        if (!jogoAtivo) return;

        const touchX = event.touches[0].clientX;
        const centerX = gameContainer.offsetWidth / 2;
        
        if (touchX < centerX) {
            carroPosition -= 5; // Mover carro para a esquerda
        } else {
            carroPosition += 5; // Mover carro para a direita
        }

        moverCarro();
    });

    // Gerar obstáculos a cada 2 segundos
    setInterval(() => {
        if (jogoAtivo) {
            gerarObstaculo();
        }
    }, 2000);

    // Função de reinício após perder
    function reiniciarJogo() {
        score = 0;
        jogoAtivo = true;
        document.location.reload();
    }

    // Começar o jogo
    gerarObstaculo();
});
