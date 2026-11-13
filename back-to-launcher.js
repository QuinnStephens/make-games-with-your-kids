// Every game loads this with <script src="../back-to-launcher.js"></script>.
// It gives every game the same way back to the game menu:
//   - Escape on a keyboard
//   - Hold Select + Start on a controller for 1 second
//   - The little "Menu" button in the top left corner (for phones and tablets)
// If a game needs the Escape key for itself, add data-no-escape to the script tag.
(() => {
  const MENU_URL = '../';
  const HOLD_MS = 1000;
  const script = document.currentScript;
  const useEscape = !script?.hasAttribute('data-no-escape');
  const goHome = () => { location.href = MENU_URL; };

  let since = null;
  function tick(now) {
    const pads = navigator.getGamepads ? [...navigator.getGamepads()].filter(Boolean) : [];
    const combo = pads.some((p) => p.buttons[8]?.pressed && p.buttons[9]?.pressed);
    if (combo) {
      since = since ?? now;
      if (now - since >= HOLD_MS) return goHome();
    } else {
      since = null;
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  if (useEscape) addEventListener('keydown', (e) => { if (e.key === 'Escape') goHome(); });

  addEventListener('DOMContentLoaded', () => {
    const b = document.createElement('a');
    b.href = MENU_URL;
    b.textContent = '← Menu';
    b.setAttribute('aria-label', 'Back to the game menu');
    b.style.cssText = 'position:fixed;top:10px;left:10px;z-index:1000;padding:6px 14px;border-radius:999px;' +
      'background:rgba(255,255,255,.85);color:#221e3c;font:600 16px system-ui,sans-serif;text-decoration:none;' +
      'border:3px solid #221e3c;';
    document.body.appendChild(b);
  });
})();
