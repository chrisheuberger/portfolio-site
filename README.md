### Portfolio website for Chris Heuberger: [chrisheuberger.com](https://www.chrisheuberger.com)

Built with [Jekyll](https://jekyllrb.com/) and using [Cloudflare Pages](https://developers.cloudflare.com/pages) instead of [GitHub Pages](https://pages.github.com/) for better [performance](https://www.youtube.com/watch?v=TteAQq25_Ns). Migration guide [here](https://developers.cloudflare.com/pages/migrations/migrating-jekyll-from-github-pages/) for reference.

### Local Development

set Ruby version:
```
rvm list  
rvm use ruby-2.5.5
```

To install gems:
```
bundle install
```

To build the site:
```
<bundle exec> jekyll build
```

To run a local server:
```
<bundle exec> jekyll serve
```

view compiled site at
```
http://localhost:4000
```

### Prep Images and Videos

ImageOptim for images

For videos, use MPEG and WebM: https://web.dev/efficient-animated-content/

Convert MOV to MPEG: https://www.videoconverter.com/convert-mov-to-mpeg.html  
Convert MOV to WebM: https://cloudconvert.com/mov-to-webm  
Convert MP4 to WebM: https://cloudconvert.com/mp4-to-webm  
Convert GIFs to MP4: https://cloudconvert.com/gif-to-mp4  
Convert GIFs to WebM: https://ezgif.com/gif-to-webm

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
