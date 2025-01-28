// Player and Coin Positions
const player = document.getElementById('player');
const coin = document.getElementById('coin');
const scoreDisplay = document.getElementById('score');

let score = 0;
const step = 10; // Movement step size

// Function to move the player
function movePlayer(event) {
  const playerRect = player.getBoundingClientRect();
  const containerRect = document.querySelector('.game-container').getBoundingClientRect();

  switch (event.key) {
    case 'ArrowUp':
      if (playerRect.top > containerRect.top) {
        player.style.top = `${player.offsetTop - step}px`;
      }
      break;
    case 'ArrowDown':
      if (playerRect.bottom < containerRect.bottom) {
        player.style.top = `${player.offsetTop + step}px`;
      }
      break;
    case 'ArrowLeft':
      if (playerRect.left > containerRect.left) {
        player.style.left = `${player.offsetLeft - step}px`;
      }
      break;
    case 'ArrowRight':
      if (playerRect.right < containerRect.right) {
        player.style.left = `${player.offsetLeft + step}px`;
      }
      break;
  }

  checkCollision();
}

// Function to check collision with the coin
function checkCollision() {
  const playerRect = player.getBoundingClientRect();
  const coinRect = coin.getBoundingClientRect();

  if (
    playerRect.left < coinRect.right &&
    playerRect.right > coinRect.left &&
    playerRect.top < coinRect.bottom &&
    playerRect.bottom > coinRect.top
  ) {
    score++;
    scoreDisplay.textContent = score;

    // Move the coin to a new random position
    const containerRect = document.querySelector('.game-container').getBoundingClientRect();
    const newTop = Math.random() * (containerRect.height - coin.offsetHeight);
    const newLeft = Math.random() * (containerRect.width - coin.offsetWidth);

    coin.style.top = `${newTop}px`;
    coin.style.left = `${newLeft}px`;
  }
}

// Initial Setup
function setupGame() {
  player.style.top = '90%';
  player.style.left = '50%';

  const containerRect = document.querySelector('.game-container').getBoundingClientRect();
  const coinTop = Math.random() * (containerRect.height - coin.offsetHeight);
  const coinLeft = Math.random() * (containerRect.width - coin.offsetWidth);

  coin.style.top = `${coinTop}px`;
  coin.style.left = `${coinLeft}px`;
}

// Event Listeners
window.addEventListener('keydown', movePlayer);
window.addEventListener('load', setupGame);
