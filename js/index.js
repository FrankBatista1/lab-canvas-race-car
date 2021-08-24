window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d")
    const image = {}
    image.addEventListener('load', e => {
      ctx.drawImage("/images/road.png", 33, 71, 104, 124, 21, 20, 87, 104);
    });
  }
};
