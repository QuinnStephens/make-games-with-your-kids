# Step 6: Play on a TV with a controller

Your games are websites, so anything that can show a web page on your TV can play them. Every game in this kit (and every game Claude makes from it) works with a game controller: the stick or d-pad to move, A to start or pick, and holding Select + Start to go back to the menu.

Here are the ways to do it, from quickest to most polished. Try the first one that matches what you already have.

| Option | What you need | How quick | How good |
| --- | --- | --- | --- |
| [A laptop and an HDMI cable](#a-laptop-and-an-hdmi-cable) | Any laptop with an HDMI port (or an adapter) | 5 minutes | Great, no delay |
| [Cast from a computer](#cast-from-a-computer) | Chromecast, Google TV, or an Apple TV / AirPlay TV | 5 minutes | OK, slight delay |
| [An iPad or iPhone with AirPlay](#an-ipad-or-iphone-with-airplay) | iPad or iPhone, Apple TV or AirPlay TV | 10 minutes | OK, slight delay |
| [A Steam Deck plugged into the TV](#a-steam-deck-plugged-into-the-tv) | Steam Deck and a USB-C to HDMI adapter or dock | 20 minutes, once | The best: feels like a real console |
| [The TV's own browser](#the-tvs-own-browser-or-a-streaming-stick) | A smart TV, Fire TV or Android TV | Varies | Hit or miss |

## First: connect a controller

Most modern controllers work: Xbox controllers, PlayStation 4 and 5 controllers, Nintendo Switch Pro controllers, and many cheaper ones.

- **Plugged in with a USB cable** is the easiest. It just works on Windows, Mac and Chromebooks.
- **Bluetooth (wireless)**: put the controller in pairing mode, then pair it in your computer's or tablet's Bluetooth settings like you would headphones.
  - Xbox: hold the small pairing button on top until the Xbox logo flashes fast.
  - PlayStation: hold **PS** and **Share** (or **Create** on a PS5 controller) until the light flashes.
  - Switch Pro: hold the small pairing button on top until the lights move back and forth.

**Press a button once the game is open.** Web browsers don't tell a web page about a controller until you press something on it, so the first press "wakes it up". If nothing happens, press A again.

Chrome and Edge are the most reliable browsers for controllers. Safari works with Xbox and PlayStation controllers too.

## A laptop and an HDMI cable

The simplest option, and there's no delay between pressing a button and seeing it happen.

1. Plug an HDMI cable from your laptop into the TV. Newer laptops may need a USB-C to HDMI adapter.
2. Switch the TV to that HDMI input with its remote.
3. If the TV just shows your desktop background, or the screen looks squashed, set the display to **mirror** or **duplicate** your laptop screen. On Windows, press **Windows key + P** and choose **Duplicate**. On a Mac, open **System Settings**, then **Displays**, and choose to mirror.
4. Open your games website, connect the controller, and press **F** on the keyboard to go full screen.

## Cast from a computer

If your TV has a Chromecast, Google TV or Apple TV, or is an AirPlay-compatible TV, you can send a browser tab or your whole screen to it without any cables. The controller connects to the computer, not the TV.

There's a small delay (often a fraction of a second) between pressing a button and seeing it on the TV. That's fine for calm games like Find the Bunnies, but it can make fast games feel sluggish.

**With Chromecast or Google TV (using Chrome):**

1. Make sure the computer and the TV are on the same Wi-Fi.
2. Open your games website in Chrome.
3. Open Chrome's menu (the three dots at the top right), then **Cast** (it may be under **Save, share and cast**).
4. Pick your TV. To send the whole screen instead of one tab, use the **Sources** menu in the cast box and choose **Cast screen**.
5. Connect the controller to the computer and press **F** to go full screen.

**With an Apple TV or AirPlay TV (using a Mac):**

1. Make sure the Mac and the TV are on the same Wi-Fi.
2. Click **Control Center** at the top right of the screen, then **Screen Mirroring**, and pick your TV.
3. Open your games website, connect the controller to the Mac, and press **F** to go full screen.

## An iPad or iPhone with AirPlay

iPads and iPhones work with Xbox and PlayStation controllers, and Safari passes the controller through to the game. This is handy when you don't want a laptop in the living room.

1. Pair the controller in **Settings**, then **Bluetooth**.
2. Open your games website in Safari. (Tip: use **Share**, then **Add to Home Screen**, so it opens without the address bar.)
3. Open **Control Center** (swipe down from the top right corner), tap **Screen Mirroring**, and pick your Apple TV or AirPlay TV.
4. Turn the iPad sideways, open a game, and press A.

As with casting, there's a small delay.

## A Steam Deck plugged into the TV

This is how we play our games at home, and it's the best experience: the games show up in your Steam library next to your other games, open full screen with nothing else on the screen, and the controller works perfectly. It takes about 20 minutes to set up the first time. After that, it's one button.

You'll need a **USB-C to HDMI adapter** or a **Steam Deck dock**. Plug the Deck into it and the HDMI cable into the TV, and the Deck shows its picture on the TV by itself. You can play with the Deck's own controls, or pair a separate controller in the Deck's **Settings**, then **Bluetooth**.

### 1. Get Google Chrome on the Deck

1. Press the **Steam** button, choose **Power**, then **Switch to Desktop**.
2. Open **Discover** (the shopping bag icon on the taskbar), search for **Google Chrome**, and click **Install**.

### 2. Add your games as a "game" in Steam

Still in Desktop Mode:

1. Open **Steam**, then from the menu at the top choose **Games**, then **Add a Non-Steam Game to My Library**.
2. Tick **Google Chrome** in the list and click **Add Selected Programs**.
   - If Google Chrome isn't in the list, it's probably already in your library (Steam hides programs you've already added). In that case, click **Browse...**, change the file type filter to **All Files**, choose `/usr/bin/flatpak`, and add that instead.
3. In your Steam library, right-click the new entry and choose **Properties**.
4. Change its name to something like "Our Family Games".
5. Look at **Launch Options**. When you add Chrome from the list, Steam fills in a long line that starts with `run --branch=stable` and includes `com.google.Chrome`. (If you added `/usr/bin/flatpak` instead, copy that line from your existing Google Chrome entry's Properties.) Add this to the **end** of that line, with a space before it, and with your own website's address:

   ```
   --kiosk --autoplay-policy=no-user-gesture-required https://our-family-games.pages.dev
   ```

   `--kiosk` opens the website full screen with no address bar or tabs, so it feels like a game. `--autoplay-policy=no-user-gesture-required` lets the games play sounds right away.

### 3. Set the controls

1. Switch back to **Gaming Mode** (there's a **Return to Gaming Mode** icon on the desktop).
2. Find "Our Family Games" in your library, select it, and press the controller icon on its page to open its controller settings.
3. Choose the **Gamepad** layout, not the **Web Browser** layout. This sends the Deck's buttons to the game as a real controller instead of pretending to be a mouse and keyboard.

### 4. Play

Launch it like any other game. To quit, press the **Steam** button and choose **Exit Game**. Any new games you add to your site show up in the menu automatically, with nothing to change on the Deck.

> **Tip:** you can add a single game the same way. Use its address, like `https://our-family-games.pages.dev/catch-the-stars/`, and give it its own name in Steam.

## The TV's own browser, or a streaming stick

Many smart TVs have a web browser, and so do Fire TV sticks (the **Silk** browser), Android TV and Google TV boxes, and Xbox consoles (**Microsoft Edge**). It's worth a try, since there's nothing to plug in. Open the browser, type in your games website, pair a Bluetooth controller with the TV or stick, and press A in a game.

Be ready for it not to work, though. Many TV browsers only understand the TV remote and ignore game controllers, and some are too slow for games. If the menu doesn't respond to the controller, use one of the other options.

## If something isn't working

- **The controller does nothing:** press A once after the game has opened. Check the controller is connected to the device that has the browser open (the laptop, iPad or Deck), not to the TV.
- **The buttons are mixed up on a Steam Deck:** check you picked the **Gamepad** controller layout in step 3.
- **The game doesn't fill the TV:** press **F** on a keyboard. On a Steam Deck, make sure `--kiosk` is in the Launch Options.
- **There's no sound on the Steam Deck until you press something:** check `--autoplay-policy=no-user-gesture-required` is in the Launch Options.
- **Everything is a little delayed:** that's casting or screen mirroring. A cable (laptop or Steam Deck) has no delay.
