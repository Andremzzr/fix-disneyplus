(function () {
    function stayFullscreen() {
      const player = document.querySelector("video");
      if (!document.fullscreenElement && player && !player.paused) {
        console.log("Re-entering fullscreen...");
        document.documentElement.requestFullscreen();
      }
    }
  
    setInterval(stayFullscreen, 1000);
  })();
  