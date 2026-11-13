# Notes for Claude

This repository is a family's collection of small browser games, made by a parent and their kids together with Claude. The people asking for changes are usually not programmers, and often a kid is sitting right next to them describing what they want. Keep that in mind in everything you do.

## How the site is put together

- `index.html` is the game menu. It reads the list of games from `games.json`, so it rarely needs changing.
- Each game lives in its own folder (like `catch-the-stars/`) with an `index.html` and an `assets/` folder for its pictures. The game is served at `/<folder>/`.
- `back-to-launcher.js` is shared by every game. It adds a "Menu" button and lets Escape (or holding Select + Start on a controller) go back to the menu.
- There is no build step. Cloudflare Pages serves the files exactly as they are, from the repository root.
- The two example games are good references for structure: settings at the top, pictures loaded from `assets/`, keyboard + controller + touch controls, a title screen, and a simple game loop.

## Adding a new game

1. Make a new folder with a short lowercase name, like `dragon-race/`, with an `index.html` inside. Use relative paths (`assets/dragon.png`, not `/assets/dragon.png`).
2. Add `<script src="../back-to-launcher.js"></script>` to the page.
3. Add the game to `games.json` with a `title`, a short fun `tagline`, the `folder` name, and an `image`: a 16:9 picture in `images/` (a screenshot of the game works well; make one with a headless browser if you can, otherwise draw a simple placeholder).
4. Give the game its own short `README.md`: what it is, how to play, and which pictures in `assets/` can be swapped for drawings.

## How the games should feel

- **Plain and simple.** Plain JavaScript drawing to a `<canvas>`, in a single `index.html` when it fits. No build tools, no npm packages, no frameworks. If a game really needs more (physics, lots of sprites), load one library from a CDN such as jsDelivr, and say why.
- **Made for kids.** Big readable text, forgiving rules, lots of happy feedback (sparkles, sounds, cheers). Nothing scary or punishing unless the kid specifically asks for it. Losing should be gentle and quick to retry.
- **Works everywhere.** Keyboard (arrows and WASD), game controllers (stick, d-pad, A to confirm, Start), and touch/mouse so it plays on a phone or tablet. The canvas fills the window and resizes. F toggles full screen.
- **Use the kids' drawings.** Drawings usually arrive as photos or scans in a `drawings/` folder. Cut them out onto a transparent background (remove the paper, trim the edges) and save them as PNGs in the game's `assets/` folder. Keep the original photos where they are. When the game needs something nobody has drawn yet, make a placeholder in the same style (thick, bright marker lines and simple shapes) and tell the person which file to replace with a real drawing later.
- **Easy to tweak.** Put numbers a family might want to change (speeds, counts, colours) in a "Settings you can play with" block at the top, with a plain-English comment on each.

## Talking to the person

- Explain what you did in plain, friendly language. Avoid jargon; if you must use a technical word, say what it means.
- When you finish a change, tell them how to try it: the change is on its own branch, and once they make a pull request, Cloudflare posts a preview link on it. Merging the pull request puts it on their real site.
- If a request is unclear, make a fun, reasonable guess, build it, and say what you guessed so they can ask for something different. Kids would rather see something on screen than answer questions.
- Before pushing, open the game in a headless browser if you can, play it for a few seconds, and check for errors in the console.
