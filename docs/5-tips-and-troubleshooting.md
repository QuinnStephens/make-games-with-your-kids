# Step 5: Tips and troubleshooting

## Tips for making games with kids

- **Let them drive.** Your job is typing and reading Claude's answers out loud. Their job is deciding what happens. The weirder the idea, the better the game usually is.
- **Play it right away, then change one thing.** Short loops keep kids interested: describe, wait a few minutes, play, laugh, ask for the next thing. Grab a snack while Claude works.
- **Keep sessions short.** Twenty minutes of making and playing is plenty for younger kids. The conversation with Claude stays there for next time.
- **Expect surprises.** Sometimes Claude gets things wrong, or makes something different from what you pictured. That's normal. Describe what you see and what you wanted instead. "The dog runs off the edge of the screen and disappears" is more helpful than "it's broken".
- **Copy ideas from games they love.** "Like Mario, but you're a cat" or "like Hide and Seek, but the seeker is a giant pancake" are great starting points.
- **Every game deserves a title screen.** Kids love seeing their name and their drawing on it. ("Made by Lucy, age 7" is a nice touch, but think about whether you want their name on a public website.)
- **Show it off.** Opening the site on the TV or a Steam Deck, or sending the link to grandparents, makes it feel real.

## Troubleshooting

### My website shows an error, or a blank page

- If you just set up Cloudflare, wait a few minutes and refresh. The first time takes a little while.
- In the Cloudflare dashboard, open **Workers & Pages**, click your project, and look at the latest deployment. If it says **Failed**, click it to see why. Copy the message and ask Claude what it means.
- Check the settings from [Step 2](2-put-it-online.md): the build command should be empty and the build output directory should be `/`.

### I merged a change but my website didn't change

- Wait a minute or two, then refresh the page. On a phone, try closing the tab and opening it again, since browsers sometimes hang on to the old version.
- In Cloudflare, check that the latest deployment finished.

### There's no preview link on my pull request

- Wait a couple of minutes and refresh the pull request page.
- If it never shows up, the preview may still exist. In Cloudflare, open your project under **Workers & Pages**: every branch's preview is listed under its deployments, with a link to visit it.

### Claude can't see my repository

If your repository is private, the Claude GitHub App needs to be installed on it. See the setup section in [Step 3](3-make-a-game-with-claude.md#one-time-setup-connect-claude-to-github).

### A game worked before, and now it doesn't

Tell Claude what happened: "Find the Bunnies used to work, but now the screen is just green". It can look at what changed and fix it, or put the game back the way it was. GitHub keeps every version of every file, so nothing is ever truly lost.

### The game is too hard, too fast, or too slow

Ask Claude! Or, if you'd like to try it yourself: every game has a section near the top called "Settings you can play with", with numbers like `STAR_SPEED = 160`. On GitHub, open the game's `index.html`, click the pencil icon to edit, change a number, and click **Commit changes**. Your site updates in a minute or two.

### The controller doesn't work

- Press a button on the controller after the page has opened. Browsers don't notice a controller until you press something.
- Use the arrows (or the stick) on the menu to make sure the browser sees it. If the menu doesn't move, try a different browser. Chrome and Edge are the most reliable with controllers.

### The game doesn't fill the screen

Press **F** on a keyboard to go full screen. On a phone, turn it sideways, or use "Add to Home Screen" from your browser's share menu.

### I'm stuck on something else

Ask Claude. Describe what you were trying to do, what you clicked, and what you see now (paste any error message). It's good at figuring out where things went wrong, including problems with GitHub and Cloudflare.
