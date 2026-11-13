# Step 4: Use your kids' drawings

The best part of making games with kids is seeing their own drawings come to life. Claude can take a photo of a drawing on paper, cut the characters out, and put them in the game.

## 1. Draw

Anything works: crayons, markers, pencil, paint. A few things make Claude's job easier:

- **Plain white paper.** Lined or coloured paper works too, but white is easiest to cut out.
- **Thick, dark outlines.** Markers are great. Very light pencil can get lost.
- **One character per page,** or leave space between them, so they're easy to tell apart.
- **Draw things on their own.** A dinosaur on one page and the jungle background on another is easier to use than a dinosaur standing in the jungle. (Claude can still cut a character out of a busy picture, it just might need a few tries.)
- If a drawing app on a tablet is more your kid's thing, that's even easier: save the picture and skip to step 3.

## 2. Take a photo

- Use daylight or a bright room, and avoid your own shadow falling on the paper.
- Hold the phone straight above the drawing so it isn't slanted.
- Fill the photo with the paper.

## 3. Upload it to your repository

1. On your computer, put the photos in a folder called `drawings`.
2. Open your repository on GitHub.
3. Click **Add file** (near the top right of the file list), then **Upload files**.
4. Drag the whole `drawings` folder onto the page. GitHub keeps the folder, so your drawings stay tidy in one place. (Dragging just the photos is fine too.)
5. Click **Commit changes**.

> **On a phone?** The GitHub app doesn't do uploads well. Email or message the photos to yourself and upload them from a computer, or use the GitHub website in your phone's browser and switch to the desktop version.

Give the files names that say what they are, like `dino.jpg` and `chili-pepper.jpg`, so you can tell Claude which is which. (You can rename them on your computer before uploading.)

## 4. Ask Claude to use them

Start a conversation at [claude.ai/code](https://claude.ai/code) with your repository picked, and say which drawing goes where:

> I uploaded drawings to the repository. Use dino.jpg as the player in Dino Snack Time, and chili-pepper.jpg for the chili peppers. Cut them out so the paper doesn't show.

> In Find the Bunnies, swap the bunny for my son's drawing in bunny-drawing.jpg.

Claude cuts the drawings out onto a see-through background, saves them in the game's `assets` folder, and puts them in the game. Then preview, ask for changes ("the dino is too small", "the white edge is still showing around the tail"), and merge, just like in Step 3.

## Things nobody has drawn yet

When a game needs something your kid hasn't drawn, Claude makes a simple placeholder in a similar marker style, and tells you the file name. When your kid draws the real one, upload it and ask Claude to swap it in.

## Swapping a picture yourself

Every game keeps its pictures in its own `assets` folder. For example, Catch the Stars has `catch-the-stars/assets/player.png` and `catch-the-stars/assets/star.png`. If you have a picture that's already cut out (a PNG with a see-through background), you can replace one yourself:

1. Name your picture exactly the same as the one you're replacing, like `star.png`.
2. Open that game's `assets` folder on GitHub, click **Add file**, then **Upload files**, and upload it.
3. Click **Commit changes**. GitHub replaces the old picture with yours.

**Next: [Step 5: Tips and troubleshooting](5-tips-and-troubleshooting.md)**
