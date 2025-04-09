const sites = {
  "Google Play": {
   "errorMsg": "the requested URL was not found on this server",
   "errorType": "message",
   "url": "https://play.google.com/store/apps/developer?id={}",
   "urlMain": "https://play.google.com",
   "username_claimed": "GitHub"
 },
 "YouTube": {
   "errorType": "status_code",
   "url": "https://www.youtube.com/@{}",
   "urlMain": "https://www.youtube.com/",
   "username_claimed": "youtube"
 },
 "Instagram": {
   "errorType": "status_code",
   "url": "https://instagram.com/{}",
   "urlMain": "https://instagram.com/",
   "urlProbe": "https://imginn.com/{}",
   "username_claimed": "instagram"
 },
 "Twitter": {
   "errorMsg": [
     "<div class=\"error-panel\"><span>User ",
     "<title>429 Too Many Requests</title>"
   ],
   "errorType": "message",
   "regexCheck": "^[a-zA-Z0-9_]{1,15}$",
   "url": "https://x.com/{}",
   "urlMain": "https://x.com/",
    "urlProbe": "https://nitter.privacydev.net/{}",
   "username_claimed": "blue"
 },
  "Facebook": {
       "errorType": "status_code",
       "url": "https://www.facebook.com/{}",
       "urlMain": "https://www.facebook.com/",
       "username_claimed": "facebook"
     },
   "Reddit": {
     "errorMsg": "Sorry, nobody on Reddit goes by that name.",
     "errorType": "message",
     "headers": {
       "accept-language": "en-US,en;q=0.9"
     },
     "url": "https://www.reddit.com/user/{}",
     "urlMain": "https://www.reddit.com/",
     "username_claimed": "blue"
   },
  "TikTok": {
     "errorType": "status_code",
     "url": "https://www.tiktok.com/@{}",
     "urlMain": "https://www.tiktok.com/",
     "username_claimed": "tiktok"
  },
   "LinkedIn": {
   "errorType": "status_code",
   "regexCheck": "^[a-zA-Z0-9]{3,100}$",
   "request_method": "GET",
   "url": "https://linkedin.com/in/{}",
   "urlMain": "https://linkedin.com",
   "username_claimed": "paulpfeister"
 },
  "Twitch": {
     "errorType": "status_code",
     "url": "https://www.twitch.tv/{}",
      "urlMain": "https://www.twitch.tv/",
     "username_claimed": "blue"
   },
 "Spotify": {
       "errorType": "status_code",
       "url": "https://open.spotify.com/user/{}",
       "urlMain": "https://open.spotify.com/",
       "username_claimed": "blue"
  },
   "Discord": {
     "errorType": "message",
     "url": "https://discord.com",
     "urlMain": "https://discord.com/",
     "urlProbe": "https://discord.com/api/v9/unique-username/username-attempt-unauthed",
     "errorMsg": [
       "{\"taken\":false}",
       "The resource is being rate limited"
     ],
     "request_method": "POST",
     "request_payload": {
       "username": "{}"
     },
     "headers": {
       "Content-Type": "application/json"
     },
     "username_claimed": "blue"
   },
   "GitHub": {
     "errorType": "status_code",
     "regexCheck": "^[a-zA-Z0-9](?:[a-zA-Z0-9]|-(?=[a-zA-Z0-9])){0,38}$",
     "url": "https://www.github.com/{}",
     "urlMain": "https://www.github.com/",
     "username_claimed": "blue"
   },
 "Codeforces": {
     "errorType": "status_code",
     "url": "https://codeforces.com/profile/{}",
     "urlMain": "https://codeforces.com/",
     "urlProbe": "https://codeforces.com/api/user.info?handles={}",
     "username_claimed": "tourist"
   },
  "HackerNews": {
     "__comment__": "First errMsg invalid, second errMsg rate limited. Not ideal. Adjust for better rate limit filtering.",
     "errorMsg": [
       "No such user.",
       "Sorry."
     ],
     "errorType": "message",
     "url": "https://news.ycombinator.com/user?id={}",
     "urlMain": "https://news.ycombinator.com/",
     "username_claimed": "blue"
   },
"Codecademy": {
     "errorMsg": "This profile could not be found",
     "errorType": "message",
     "url": "https://www.codecademy.com/profiles/{}",
     "urlMain": "https://www.codecademy.com/",
     "username_claimed": "blue"
   },
"BitBucket": {
     "errorType": "status_code",
     "regexCheck": "^[a-zA-Z0-9-_]{1,30}$",
     "url": "https://bitbucket.org/{}/",
     "urlMain": "https://bitbucket.org/",
     "username_claimed": "white"
   },
   "GitLab": {
     "errorMsg": "[]",
     "errorType": "message",
     "url": "https://gitlab.com/{}",
     "urlMain": "https://gitlab.com/",
     "urlProbe": "https://gitlab.com/api/v4/users?username={}",
     "username_claimed": "blue"
   },
  "StackOverflow": {
     "errorType": "status_code",
     "url": "https://stackoverflow.com/users/{}",
      "urlMain": "https://stackoverflow.com/",
     "username_claimed": "blue"
 },
 "FreeCodeCamp": {
       "errorType": "status_code",
       "url": "https://www.freecodecamp.org/{}",
       "urlMain": "https://www.freecodecamp.org/",
       "urlProbe": "https://api.freecodecamp.org/api/users/get-public-profile?username={}",
       "username_claimed": "naveennamani"
   },
  "CodePen": {
       "errorType": "status_code",
       "url": "https://codepen.io/{}",
       "urlMain": "https://codepen.io/",
        "username_claimed": "blue"
 },
   "HackerRank": {
     "errorMsg": "Something went wrong",
     "errorType": "message",
     "regexCheck": "^[^.]*?$",
     "url": "https://hackerrank.com/{}",
     "urlMain": "https://hackerrank.com/",
     "username_claimed": "satznova"
   },
   "LeetCode": {
     "errorType": "status_code",
     "url": "https://leetcode.com/{}",
     "urlMain": "https://leetcode.com/",
     "username_claimed": "blue"
   },
  "TryHackMe": {
       "errorMsg": "{\"success\":false}",
       "errorType": "message",
       "regexCheck": "^[a-zA-Z0-9.]{1,16}$",
       "url": "https://tryhackme.com/p/{}",
       "urlMain": "https://tryhackme.com/",
       "urlProbe": "https://tryhackme.com/api/user/exist/{}",
       "username_claimed": "ashu"
     },
 "Codechef": {
     "errorType": "response_url",
     "errorUrl": "https://www.codechef.com/",
     "url": "https://www.codechef.com/users/{}",
     "urlMain": "https://www.codechef.com/",
     "username_claimed": "blue"
   },
//      "Gitea": {
//        "errorType": "status_code",
//        "url": "https://gitea.com/{}",
//        "urlMain": "https://gitea.com/",
//        "username_claimed": "xorm"
//    },
//    "BugCrowd": {
//      "errorType": "status_code",
//      "url": "https://bugcrowd.com/{}",
//      "urlMain": "https://bugcrowd.com/",
//      "username_claimed": "ppfeister"
//    },
//      "Dribbble": {
//      "errorMsg": "Whoops, that page is gone.",
//      "errorType": "message",
//      "regexCheck": "^[a-zA-Z][a-zA-Z0-9_-]*$",
//      "url": "https://dribbble.com/{}",
//      "urlMain": "https://dribbble.com/",
//      "username_claimed": "blue"
//    },
//   "Behance": {
//      "errorType": "status_code",
//      "url": "https://www.behance.net/{}",
//      "urlMain": "https://www.behance.net/",
//      "username_claimed": "blue"
//    },
//    "ArtStation": {
//        "errorType": "status_code",
//        "url": "https://www.artstation.com/{}",
//        "urlMain": "https://www.artstation.com/",
//        "username_claimed": "Blue"
//    },
//      "Medium": {
//      "errorMsg": "<body",
//      "errorType": "message",
//      "url": "https://medium.com/@{}",
//      "urlMain": "https://medium.com/",
//      "urlProbe": "https://medium.com/feed/@{}",
//      "username_claimed": "blue"
//    },
//    "Pinterest": {
//        "errorType": "status_code",
//        "url": "https://www.pinterest.com/{}",
//        "urlMain": "https://www.pinterest.com/",
//        "username_claimed": "pinterest"
//     },
//    "Tumblr": {
//       "errorType": "status_code",
//       "url": "https://www.tumblr.com/{}",
//       "urlMain": "https://www.tumblr.com/",
//       "username_claimed": "blue"
//    },
//  "Telegram": {
//      "errorMsg": [
//        "<title>Telegram Messenger</title>",
//        "If you have <strong>Telegram</strong>, you can contact <a class=\"tgme_username_link\" href=\"tg://resolve?domain="
//      ],
//      "errorType": "message",
//      "regexCheck": "^[a-zA-Z0-9_]{3,32}[^_]$",
//      "url": "https://t.me/{}",
//      "urlMain": "https://t.me/",
//      "username_claimed": "blue"
//    },
//   "Imgur": {
//      "errorType": "status_code",
//      "url": "https://imgur.com/user/{}",
//      "urlMain": "https://imgur.com/",
//      "urlProbe": "https://api.imgur.com/account/v1/accounts/{}?client_id=546c25a59c58ad7",
//      "username_claimed": "blue"
//    },
//    "Vimeo": {
//      "errorType": "status_code",
//      "url": "https://vimeo.com/{}",
//      "urlMain": "https://vimeo.com/",
//      "username_claimed": "blue"
//    },
//  "Patreon": {
//      "errorType": "status_code",
//      "url": "https://www.patreon.com/{}",
//      "urlMain": "https://www.patreon.com/",
//      "username_claimed": "blue"
//    },
//  "GoodReads": {
//      "errorType": "status_code",
//      "url": "https://www.goodreads.com/{}",
//      "urlMain": "https://www.goodreads.com/",
//      "username_claimed": "blue"
//    },
//  "Wikipedia": {
//      "errorMsg": "centralauth-admin-nonexistent:",
//      "errorType": "message",
//      "url": "https://en.wikipedia.org/wiki/Special:CentralAuth/{}?uselang=qqx",
//      "urlMain": "https://www.wikipedia.org/",
//      "username_claimed": "Hoadlck"
//    },
//   "Kick": {
//        "__comment__": "Cloudflare. Only viable when proxied.",
//        "errorType": "status_code",
//        "url": "https://kick.com/{}",
//        "urlMain": "https://kick.com/",
//        "urlProbe": "https://kick.com/api/v2/channels/{}",
//        "username_claimed": "blue"
//    },
//      "MyAnimeList": {
//        "errorType": "status_code",
//        "url": "https://myanimelist.net/profile/{}",
//        "urlMain": "https://myanimelist.net/",
//        "username_claimed": "blue"
//     },
//    "Unsplash": {
//      "errorType": "status_code",
//      "regexCheck": "^[a-z0-9_]{1,60}$",
//      "url": "https://unsplash.com/@{}",
//      "urlMain": "https://unsplash.com/",
//      "username_claimed": "jenny"
//    },
//  "Flickr": {
//      "errorType": "status_code",
//      "url": "https://www.flickr.com/people/{}",
//      "urlMain": "https://www.flickr.com/",
//      "username_claimed": "blue"
//    },
//     "DailyMotion": {
//        "errorType": "status_code",
//        "url": "https://www.dailymotion.com/{}",
//        "urlMain": "https://www.dailymotion.com/",
//        "username_claimed": "blue"
//     },
//   "Last.fm": {
//      "errorType": "status_code",
//      "url": "https://last.fm/user/{}",
//      "urlMain": "https://last.fm/",
//      "username_claimed": "blue"
//   },
//  "Pastebin": {
//      "errorMsg": "Not Found (#404)",
//      "errorType": "message",
//      "url": "https://pastebin.com/u/{}",
//      "urlMain": "https://pastebin.com/",
//      "username_claimed": "blue"
//    },
//   "MixCloud": {
//        "errorType": "status_code",
//        "url": "https://www.mixcloud.com/{}/",
//        "urlMain": "https://www.mixcloud.com/",
//        "urlProbe": "https://api.mixcloud.com/{}/",
//        "username_claimed": "jenny"
//   },
//   "Trakt": {
//      "errorType": "status_code",
//      "regexCheck": "^[^.]*$",
//      "url": "https://www.trakt.tv/users/{}",
//      "urlMain": "https://www.trakt.tv/",
//      "username_claimed": "blue"
//    },
//      "LiveJournal": {
//      "errorType": "status_code",
//      "regexCheck": "^[a-zA-Z][a-zA-Z0-9_-]*$",
//      "url": "https://{}.livejournal.com",
//      "urlMain": "https://www.livejournal.com/",
//      "username_claimed": "blue"
//   },
//      "Blogger": {
//      "errorType": "status_code",
//      "regexCheck": "^[a-zA-Z][a-zA-Z0-9_-]*$",
//      "url": "https://{}.blogspot.com",
//      "urlMain": "https://www.blogger.com/",
//      "username_claimed": "blue"
//   },
//   "Duolingo": {
//      "errorMsg": "{\"users\":[]}",
//      "errorType": "message",
//      "url": "https://www.duolingo.com/profile/{}",
//      "urlMain": "https://duolingo.com/",
//      "urlProbe": "https://www.duolingo.com/2017-06-30/users?username={}",
//      "username_claimed": "blue"
//    },
//       "WordPress": {
//      "errorType": "response_url",
//      "errorUrl": "wordpress.com/typo/?subdomain=",
//      "regexCheck": "^[a-zA-Z][a-zA-Z0-9_-]*$",
//      "url": "https://{}.wordpress.com/",
//      "urlMain": "https://wordpress.com",
//      "username_claimed": "blue"
//    },
//      "Wattpad": {
//      "errorType": "status_code",
//      "url": "https://www.wattpad.com/user/{}",
//      "urlMain": "https://www.wattpad.com/",
//      "urlProbe": "https://www.wattpad.com/api/v3/users/{}/",
//      "username_claimed": "Dogstho7951"
//   },
//        "Archive of Our Own": {
//      "errorType": "status_code",
//      "regexCheck": "^[^.]*?$",
//      "url": "https://archiveofourown.org/users/{}",
//      "urlMain": "https://archiveofourown.org/",
//      "username_claimed": "test"
//    },
//   "Itch.io": {
//    "errorType": "status_code",
//    "regexCheck": "^[\\w@-]+?$",
//    "url": "https://{}.itch.io/",
//    "urlMain": "https://itch.io/",
//    "username_claimed": "blue"
//  },
//   "Keybase": {
//        "errorType": "status_code",
//        "url": "https://keybase.io/{}",
//        "urlMain": "https://keybase.io/",
//        "username_claimed": "blue"
//   },
//     "MyMiniFactory": {
//        "errorType": "status_code",
//        "url": "https://www.myminifactory.com/users/{}",
//        "urlMain": "https://www.myminifactory.com/",
//        "username_claimed": "blue"
//    },
//        "Hugging Face": {
//      "errorType": "status_code",
//      "url": "https://huggingface.co/{}",
//      "urlMain": "https://huggingface.co/",
//      "username_claimed": "Pasanlaksitha"
//    },
//    "Rate Your Music": {
//      "errorType": "status_code",
//      "url": "https://rateyourmusic.com/~{}",
//      "urlMain": "https://rateyourmusic.com/",
//      "username_claimed": "blue"
//    },
//     "Replit.com": {
//      "errorType": "status_code",
//      "url": "https://replit.com/@{}",
//      "urlMain": "https://replit.com/",
//      "username_claimed": "blue"
//    },
//    "Disqus": {
//      "errorType": "status_code",
//      "url": "https://disqus.com/{}",
//      "urlMain": "https://disqus.com/",
//      "username_claimed": "blue"
//    },
//     "Speedrun.com": {
//        "errorType": "status_code",
//        "url": "https://speedrun.com/users/{}",
//        "urlMain": "https://speedrun.com/",
//        "username_claimed": "example"
//    },
//       "ProductHunt": {
//      "errorType": "status_code",
//      "url": "https://www.producthunt.com/@{}",
//      "urlMain": "https://www.producthunt.com/",
//      "username_claimed": "jenny"
//    },
//     "Trello": {
//      "errorMsg": "model not found",
//      "errorType": "message",
//      "url": "https://trello.com/{}",
//      "urlMain": "https://trello.com/",
//      "urlProbe": "https://trello.com/1/Members/{}",
//      "username_claimed": "blue"
//    },
//    "Docker Hub": {
//        "errorType": "status_code",
//        "url": "https://hub.docker.com/u/{}/",
//        "urlMain": "https://hub.docker.com/",
//        "urlProbe": "https://hub.docker.com/v2/users/{}/",
//        "username_claimed": "blue"
//    },
//     "Sketchfab": {
//        "errorType": "status_code",
//        "url": "https://sketchfab.com/{}",
//        "urlMain": "https://sketchfab.com/",
//        "username_claimed": "blue"
//    },
//      "Academia.edu": {
//        "errorType": "status_code",
//        "regexCheck": "^[^.]*$",
//        "url": "https://independent.academia.edu/{}",
//        "urlMain": "https://www.academia.edu/",
//        "username_claimed": "blue"
//      },
//      "Bandcamp": {
//      "errorType": "status_code",
//      "url": "https://www.bandcamp.com/{}",
//      "urlMain": "https://www.bandcamp.com/",
//      "username_claimed": "blue"
//      },
//       "Pornhub": {
//        "errorType": "status_code",
//        "isNSFW": true,
//        "url": "https://pornhub.com/users/{}",
//        "urlMain": "https://pornhub.com/",
//        "username_claimed": "blue"
//    },
//     "Giphy": {
//        "errorType": "message",
//        "errorMsg": "<title> GIFs - Find & Share on GIPHY</title>",
//        "url": "https://giphy.com/{}",
//        "urlMain": "https://giphy.com/",
//        "username_claimed": "red"
//      },
//    "Gumroad": {
//        "errorMsg": "Page not found (404) - Gumroad",
//        "errorType": "message",
//        "regexCheck": "^[^.]*?$",
//        "url": "https://www.gumroad.com/{}",
//        "urlMain": "https://www.gumroad.com/",
//        "username_claimed": "blue"
//    },
//     "Newgrounds": {
//      "errorType": "status_code",
//      "regexCheck": "^[a-zA-Z][a-zA-Z0-9_-]*$",
//      "url": "https://{}.newgrounds.com",
//      "urlMain": "https://newgrounds.com",
//      "username_claimed": "blue"
//    },
//      "SourceForge": {
//      "errorType": "status_code",
//      "url": "https://sourceforge.net/u/{}",
//      "urlMain": "https://sourceforge.net/",
//      "username_claimed": "blue"
//    },
//     "SlideShare": {
//        "errorType": "message",
//        "errorMsg": "<title>Username available</title>",
//        "url": "https://slideshare.net/{}",
//        "urlMain": "https://slideshare.net/",
//        "username_claimed": "blue"
//   },
//   "IndieHackers": {
//      "errorType": "status_code",
//      "url": "https://www.indiehackers.com/{}",
//      "urlMain": "https://www.indiehackers.com",
//      "username_claimed": "blue"
//    },
//     "Instructables": {
//      "errorType": "status_code",
//      "url": "https://www.instructables.com/member/{}",
//      "urlMain": "https://www.instructables.com/",
//      "urlProbe": "https://www.instructables.com/json-api/showAuthorExists?screenName={}",
//      "username_claimed": "blue"
//    },
//      "BiggerPockets": {
//      "errorType": "status_code",
//      "url": "https://www.biggerpockets.com/users/{}",
//      "urlMain": "https://www.biggerpockets.com/",
//      "username_claimed": "blue"
//    },
//   "Houzz": {
//      "errorType": "status_code",
//      "url": "https://houzz.com/user/{}",
//      "urlMain": "https://houzz.com/",
//      "username_claimed": "blue"
//    },
//  "Rumble": {
//       "errorType": "status_code",
//       "url": "https://rumble.com/user/{}",
//       "urlMain": "https://rumble.com/",
//       "username_claimed": "John"
//   },
//    "Lichess": {
//      "errorType": "status_code",
//      "url": "https://lichess.org/@/{}",
//      "urlMain": "https://lichess.org",
//      "username_claimed": "john"
//    },
//       "ReverbNation": {
//      "errorMsg": "Sorry, we couldn't find that page",
//      "errorType": "message",
//      "url": "https://www.reverbnation.com/{}",
//      "urlMain": "https://www.reverbnation.com/",
//      "username_claimed": "blue"
//   },
//  "Splice": {
//      "errorType": "status_code",
//      "url": "https://splice.com/{}",
//      "urlMain": "https://splice.com/",
//      "username_claimed": "splice"
//   },
//   "Last.fm": {
//       "errorType": "status_code",
//       "url": "https://last.fm/user/{}",
//       "urlMain": "https://last.fm/",
//       "username_claimed": "blue"
//     },
//  "Snapchat": {
//        "errorType": "status_code",
//        "regexCheck": "^[a-z][a-z-_.]{3,15}",
//        "request_method": "GET",
//        "url": "https://www.snapchat.com/add/{}",
//        "urlMain": "https://www.snapchat.com",
//        "username_claimed": "teamsnapchat"
//  },
//     "RuneScape": {
//        "errorMsg": "{\"error\":\"NO_PROFILE\",\"loggedIn\":\"false\"}",
//        "errorType": "message",
//        "regexCheck": "^(?! )[\\w -]{1,12}(?<! )$",
//        "url": "https://apps.runescape.com/runemetrics/app/overview/player/{}",
//        "urlMain": "https://www.runescape.com/",
//        "urlProbe": "https://apps.runescape.com/runemetrics/profile/profile?user={}",
//        "username_claimed": "L33"
//    },
//      "Osu!": {
//        "errorType": "status_code",
//        "url": "https://osu.ppy.sh/users/{}",
//        "urlMain": "https://osu.ppy.sh/",
//        "username_claimed": "blue"
//    },
//  "YandexMusic": {
//        "__comment__": "The first and third errorMsg relate to geo-restrictions and bot detection/captchas.",
//        "errorMsg": [
//          "\u041e\u0448\u0438\u0431\u043a\u0430 404",
//          "<meta name=\"description\" content=\"\u041e\u0442\u043a\u0440\u044b\u0432\u0430\u0439\u0442\u0435 \u043d\u043e\u0432\u0443\u044e \u043c\u0443\u0437\u044b\u043a\u0443 \u043a\u0430\u0436\u0434\u044b\u0439 \u0434\u0435\u043d\u044c.",
//          "<input type=\"submit\" class=\"CheckboxCaptcha-Button\""
//        ],
//        "errorType": "message",
//        "url": "https://music.yandex/users/{}/playlists",
//        "urlMain": "https://music.yandex",
//        "username_claimed": "ya.playlist"
//    },
//  "Bluesky": {
//        "errorType": "status_code",
//        "url": "https://bsky.app/profile/{}.bsky.social",
//        "urlProbe": "https://public.api.bsky.app/xrpc/app.bsky.actor.getProfile?actor={}.bsky.social",
//        "urlMain": "https://bsky.app/",
//        "username_claimed": "mcuban"
//    },
//  "Minecraft": {
//      "errorCode": 204,
//      "errorType": "status_code",
//      "url": "https://api.mojang.com/users/profiles/minecraft/{}",
//      "urlMain": "https://minecraft.net/",
//      "username_claimed": "blue"
//    },
//    "Roblox": {
//      "errorMsg": "Page cannot be found or no longer exists",
//      "errorType": "message",
//      "url": "https://www.roblox.com/user.aspx?username={}",
//      "urlMain": "https://www.roblox.com/",
//      "username_claimed": "bluewolfekiller"
//    },
//     "Trakt": {
//      "errorType": "status_code",
//      "regexCheck": "^[^.]*$",
//      "url": "https://www.trakt.tv/users/{}",
//      "urlMain": "https://www.trakt.tv/",
//      "username_claimed": "blue"
//    },
//    "WordPressOrg": {
//    "errorType": "response_url",
//    "errorUrl": "https://wordpress.org"
//  },
//  "akniga": {
//      "errorType": "status_code",
//      "url": "https://akniga.org/profile/{}",
//      "urlMain": "https://akniga.org/profile/blue/",
//      "username_claimed": "blue"
//    },
//  "authorSTREAM": {
//      "errorType": "status_code",
//      "url": "http://www.authorstream.com/{}/",
//      "urlMain": "http://www.authorstream.com/",
//      "username_claimed": "blue"
//    },
//    "babyblogRU": {
//      "errorType": "response_url",
//      "errorUrl": "https://www.babyblog.ru/",
//      "url": "https://www.babyblog.ru/user/{}",
//      "urlMain": "https://www.babyblog.ru/",
//      "username_claimed": "blue"
//    },
//    "chaos.social": {
//      "errorType": "status_code",
//      "url": "https://chaos.social/@{}",
//      "urlMain": "https://chaos.social/",
//      "username_claimed": "rixx"
//    },
//    "couchsurfing": {
//      "errorType": "status_code",
//      "url": "https://www.couchsurfing.com/people/{}",
//      "urlMain": "https://www.couchsurfing.com/",
//      "username_claimed": "blue"
//    },
//   "d3RU": {
//      "errorType": "status_code",
//      "url": "https://d3.ru/user/{}/posts",
//      "urlMain": "https://d3.ru/",
//      "username_claimed": "blue"
//    },
//    "dailykos": {
//      "errorMsg": "{\"result\":true,\"message\":null}",
//      "errorType": "message",
//      "url": "https://www.dailykos.com/user/{}",
//      "urlMain": "https://www.dailykos.com",
//      "urlProbe": "https://www.dailykos.com/signup/check_nickname?nickname={}",
//      "username_claimed": "blue"
//    },
//    "datingRU": {
//      "errorType": "status_code",
//      "url": "http://dating.ru/{}",
//      "urlMain": "http://dating.ru",
//      "username_claimed": "blue"
//    },
//    "devRant": {
//      "errorType": "response_url",
//      "errorUrl": "https://devrant.com/",
//      "url": "https://devrant.com/users/{}",
//      "urlMain": "https://devrant.com/",
//      "username_claimed": "blue"
//    },
//    "drive2": {
//      "errorType": "status_code",
//      "url": "https://www.drive2.ru/users/{}",
//      "urlMain": "https://www.drive2.ru/",
//      "username_claimed": "blue"
//    }
}

export default sites;