(function () {
    function stayFullscreen() {
      const player = document.querySelector("video");
      if (!document.fullscreenElement && player && !player.paused) {
        document.documentElement.requestFullscreen();
      }
    }
  
    setInterval(stayFullscreen, 1000);
  })();
  