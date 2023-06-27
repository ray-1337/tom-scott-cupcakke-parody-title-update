# Tom Scott / CupcakKe
This is a repository of a YouTube video parody named [**This Video Has x Views (CupcakKe Remix)**](https://youtu.be/RcXtHXsaSYw)

# Installation
- Log in yourself with Google account into [console.cloud.google.com](https://console.cloud.google.com/apis/library)
- Find **YouTube Data API v3** and enable it.
- If it's enabled, go to Credentials tab.
- Click **Create Credentials** and choose **OAuth client ID**
- Choose **Web Application** type.
- Add [https://developers.google.com/oauthplayground/](https://developers.google.com/oauthplayground/) to an **Authorized redirect URIs** section.
- Click **Create**.
- Save the client ID and client secret for later.
- Visit [https://developers.google.com/oauthplayground/](https://developers.google.com/oauthplayground/)
- Click Gear icon, above right.
- Check **Use your own OAuth credentials**.
- Paste your previous saved client ID and client secret.
- Hit **Close**.
- Scroll and choose **YouTube Data API v3**
- Choose **https://www.googleapis.com/auth/youtube** and **https://www.googleapis.com/auth/youtube.upload** scope.
- Click **Authorize APIs.**
- In the prompt screen, choose your YouTube channel and just hit **Continue** if they warned you something.
- After the prompt, you'll be redirected back to the playground and you got this authorization code.
- Click **Exchange authorization code for tokens**.
- Save your **Refresh token** and **Access token** to .env file provided above, inside the string `""`
  - Don't forget to change the `.env.example` to `.env`
  - Also, don't forget to fill your YouTube video ID, and also your previous saved client ID and client secret.
- If everything sets up, install the package by using `npm install`
  - If you have `pnpm` or `yarn` installed, you can use `pnpm install` or `yarn install` for that.
- If the modules are installed, open your terminal, type `node .` and run (ENTER).
  - This performed better with `nodemon` or `pm2`.

# LICENSE
[Unlicense](LICENSE)