(function monitorFullscreen() {
  const CHECK_INTERVAL = 1000;

  function isFullscreen() {
    return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
  }

  function findButtonInShadowRoots(root = document, selector = '.fullscreen-icon') {
    if (root.querySelector(selector)) {
      return root.querySelector(selector);
    }

    const elements = root.querySelectorAll('*');
    for (const el of elements) {
      if (el.shadowRoot) {
        const found = findButtonInShadowRoots(el.shadowRoot, selector);
        if (found) return found;
      }
    }

    return null;
  }

  function tryEnterFullscreen() {
    const video = document.querySelector('video');
    const fullscreenButton = findButtonInShadowRoots();

    if (!video || !fullscreenButton) {
      console.log('Waiting for video or fullscreen button...');
      return;
    }

    if (!isFullscreen()) {
      console.log('Clicking fullscreen button');
      fullscreenButton.click();
    } else {
      console.log('Already in fullscreen');
    }
  }

  setInterval(tryEnterFullscreen, CHECK_INTERVAL);
})();
