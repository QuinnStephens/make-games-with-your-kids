# Step 2: Put it online

In this step you'll connect your GitHub repository to Cloudflare Pages, a free service that turns it into a real website. When you're done, you'll have a web address like `our-family-games.pages.dev` that anyone in the family can open on a computer, phone, tablet or Steam Deck.

You only do this once. After that, every time your games change on GitHub, the website updates by itself within a minute or two.

> **Heads up:** Cloudflare changes its dashboard from time to time, so the buttons might not look exactly like this. Look for the words in **bold** and you'll be fine.

## Sign up for Cloudflare

1. Go to [dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up).
2. Type your email address and make up a password, then click **Sign up**.
3. Cloudflare emails you a link to confirm your address. Click it.
4. Cloudflare may ask what you want to do first, or offer to set up a domain name. You don't need any of that. Skip ahead or look for the menu on the left side of the screen.

## Create your website

1. In the menu on the left, click **Workers & Pages** (it may be inside a section called **Compute**).
2. Click **Create application** (or **Create**).
3. Choose **Pages**. Cloudflare may show a "Workers" option first; if you see a link that says something like **Looking to deploy Pages? Get started**, click that.
4. Click **Connect to Git** (it may say **Import an existing Git repository**).
5. Cloudflare asks to connect to your GitHub account. Click **Connect GitHub** and sign in to GitHub if asked.
6. GitHub asks which repositories Cloudflare can see. Pick **Only select repositories**, choose your games repository (for example `our-family-games`), then click **Install & Authorize**.
7. Back in Cloudflare, click your repository in the list, then **Begin setup**.

## Fill in the settings

| Setting | What to put |
| --- | --- |
| **Project name** | This becomes your web address. `our-family-games` gives you `our-family-games.pages.dev`. Lowercase letters, numbers and dashes only. |
| **Production branch** | `main` (it's probably already picked). |
| **Framework preset** | **None** |
| **Build command** | Leave it empty. |
| **Build output directory** | `/` (just a forward slash) |

Leave everything else as it is, and click **Save and Deploy**.

Cloudflare takes a minute to set things up. When it says it's done, it shows a link ending in `.pages.dev`. Click it, and you should see your game menu with Catch the Stars and Find the Bunnies. Try them out!

> The very first time, the link can take a few minutes to start working. If you see an error page, wait a bit and refresh.

## Share it with the family

That `.pages.dev` address is your website. Bookmark it, text it to the grandparents, or open it on a tablet and use "Add to Home Screen" so it feels like an app.

**A note on privacy:** anyone who has the link can open your site, but it isn't listed anywhere, so people won't stumble onto it unless you share it. Don't put anything on the site you wouldn't want a stranger to see, like your kids' full names or your home town.

## Preview links: try before you share

Here's a nice bonus. When Claude makes a change, it doesn't touch your real website right away. It puts the change on a **branch** (a side copy), and Cloudflare automatically builds a separate **preview** website just for that branch. You can play the new version on the preview link, and only when you're happy does it go on your real site. You'll see how this works in the next step.

**Next: [Step 3: Make a game with Claude](3-make-a-game-with-claude.md)**
