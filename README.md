### Portfolio website for Chris Heuberger: [chrisheuberger.com](https://www.chrisheuberger.com)

Built with [Jekyll](https://jekyllrb.com/) and using [Cloudflare Pages](https://developers.cloudflare.com/pages) instead of [GitHub Pages](https://pages.github.com/) for better [performance](https://www.youtube.com/watch?v=TteAQq25_Ns). Migration guide [here](https://developers.cloudflare.com/pages/migrations/migrating-jekyll-from-github-pages/) for reference.

Current Version: 2

### Local Development

To update gems:
```
bundle update jekyll
```

To build the site:
```
bundle exec jekyll build
```

To run a local server:
```
bundle exec jekyll serve
```

view compiled site at
```
http://localhost:4000
```

Deploy by pushing to the `master` branch.

### Prep Images and Videos

ImageOptim for images

For videos, use MPEG and WebM: https://web.dev/efficient-animated-content/

Convert MOV to MPEG: https://www.videoconverter.com/convert-mov-to-mpeg.html  
Convert MOV to WebM: https://cloudconvert.com/mov-to-webm  
Convert GIFs to MPEG (limit of 10 per day): https://convertio.co/gif-mpeg/  
Convert GIFs to MPEG: https://miconv.com/convert-gif-to-mpeg/  
Convert GIFs to WebM: https://ezgif.com/gif-to-webm

Or use [FFMEG](https://ffmpeg.org/) to convert GIFs to MPEG and WebM:
```
ffmpeg -i XXX.gif XXX.mp4
ffmpeg -i XXX.gif -c vp9 -b:v 0 -crf 41 XXX.webm
```

### Use AWS Cloudfront for Images

log in to [AWS console](https://console.aws.amazon.com/)

Services > S3
chrisheuberger.com
Create folder  
upload images  

for image URL, add key:  
```
portland-summer-2018/IMG_9492.jpeg
```

as slug on domain:
```
https://d1snbyjv506jvs.cloudfront.net/
```

to get:
```
https://d1snbyjv506jvs.cloudfront.net/portland-summer-2018/IMG_9492.jpeg
```

for all images

### Deployment

push to `master` branch
