# Step 3: Make a game with Claude

This is the fun part. You (and your kid) describe a game, Claude builds it, you play it on a preview link, and when it's good you put it on your site.

You'll use **Claude Code on the web**, which is Claude with the ability to read and change the files in your GitHub repository. It needs a paid Claude plan (Pro or higher).

## One-time setup: connect Claude to GitHub

1. Go to [claude.ai/code](https://claude.ai/code) and sign in to your Claude account (or create one).
2. Claude asks you to connect GitHub. Follow the prompt, and click the button on GitHub's page to **Authorize** it. GitHub sends you back to Claude.
3. If your games repository is **Private** (the choice we suggested in Step 1), Claude also needs the **Claude GitHub App** installed so it can see it. Claude may offer this during setup. If it doesn't, or you skipped it, go to [github.com/apps/claude/installations/new](https://github.com/apps/claude/installations/new), pick your account, choose **Only select repositories**, pick your games repository, and click **Install**.

Claude sets everything else up for you.

## Make your first change

Start small, so you can see how it all fits together before making a whole new game.

1. At [claude.ai/code](https://claude.ai/code), find the repository picker below the message box and choose your games repository.
2. Type a request in the message box. For example:

   > In Catch the Stars, make the stars hearts instead, and make a funny "boing" sound when you catch one.

3. Press Enter and watch. Claude reads the game, makes the change, and explains what it did. This takes a few minutes. You can close the tab and come back; it keeps working.

## Try it on a preview link

Claude puts its changes on a **branch** (a side copy), not on your real site. To try it:

1. When Claude is done, click **Create PR** near the top of the page. (PR stands for pull request: GitHub's way of saying "here's a change, do you want to keep it?") Choose the regular pull request if it asks.
2. Open the pull request on GitHub. Claude shows a link to it, or you can find it on your repository's page under the **Pull requests** tab.
3. After a minute or two, Cloudflare adds a comment to the pull request with a **preview link**. Click it to play the new version.

The preview is a real website, so you can open it on a phone, a tablet or a Steam Deck too.

## Not quite right? Just say so

Go back to your conversation with Claude and keep talking, the way you'd talk to a helpful friend who's good with computers:

> The hearts are too fast for my 5-year-old. Slow them down a lot.

> She wants the hearts to be rainbow colours, and every 10 hearts a unicorn should run across the screen.

Claude updates the same branch, and Cloudflare updates the same preview link. Refresh it to see the change. Go back and forth as many times as you like.

## Happy with it? Put it on your site

1. Open the pull request on GitHub.
2. Click the green **Merge pull request** button, then **Confirm merge**.

That's it. In a minute or two, Cloudflare updates your real website. If a change turns out to be a mistake later, nothing is lost: ask Claude to undo it, and it can bring back any earlier version.

## Make a brand new game

Once you've done a small change, a new game works the same way. Start a new conversation at [claude.ai/code](https://claude.ai/code) with your repository picked, and describe the game. Let your kid do the describing, and type it up for them. Here's an example:

> Make a new game called "Dino Snack Time". You're a little green dinosaur who walks around a jungle eating fruit. Apples make you a tiny bit bigger. If you eat a chili pepper you breathe fire for a few seconds and it's really funny. There's a big friendly volcano in the background that sometimes rumbles. My daughter is 6, so keep it easy and silly.

Claude makes a new folder for the game, adds it to your game menu, and explains how to play. Then try it on the preview link, ask for changes, and merge when you're happy, just like above.

### What makes a good game description

You don't need to get it perfect. Claude fills in the gaps, and you can always change things after you've played it. But these help:

- **Who you are in the game** and what you're trying to do. "You're a cat who has to find her kittens."
- **What's fun or funny** about it. Kids are great at this part.
- **Who's playing.** "My son is 4" tells Claude to keep it simple and forgiving.
- **The pictures.** If your kid has drawn the characters, say so and see [Step 4: Use your kids' drawings](4-use-your-kids-drawings.md).

Start with the smallest version of the idea, play it, then add the next thing. "First just the dinosaur walking around eating apples" works better than describing everything at once.

### How Claude knows what to do

Your repository includes a file called `CLAUDE.md`. Claude reads it at the start of every conversation. It says things like "make games for kids, with big text and nothing scary", "make them work with keyboards, game controllers and touch screens", and "use the kids' drawings". That's why you don't have to explain those things every time. You can edit `CLAUDE.md` (or ask Claude to) to add your own family rules, like "never use the colour orange, my son hates it."

**Next: [Step 4: Use your kids' drawings](4-use-your-kids-drawings.md)**
