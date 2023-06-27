require('dotenv/config');

const { google } = require("googleapis");
const ms = require("ms");

// https://developers.google.com/oauthplayground/
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const refresh_token = process.env.REFRESH_TOKEN;
const access_token = process.env.ACCESS_TOKEN;
const YOUTUBE_VIDEO_ID = process.env.YOUTUBE_VIDEO_ID;
const intervalTime = ms("10m"); // 10m means 10 minutes

async function main() {
  const authClient = new google.auth.OAuth2({clientId, clientSecret});
  authClient.setCredentials({refresh_token, access_token});

  const youtube = google.youtube({auth: authClient, version: "v3"});
  const videoResult = await youtube.videos.list({id: YOUTUBE_VIDEO_ID, part: "snippet,statistics"});
  const {statistics, snippet} = videoResult.data.items[0];

  // customizable
  const newTitle = `This Video Has ${(statistics?.viewCount || 0).toLocaleString()} Views (CupcakKe Remix)`;

  if (snippet.title !== newTitle) {
    snippet.title = newTitle;
    await youtube.videos.update({part: 'snippet', requestBody: { id: YOUTUBE_VIDEO_ID, snippet }});
  };
};

main();

setInterval(() => main(), intervalTime);

console.log("Ready.");