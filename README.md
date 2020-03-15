### Personal Site: [chrisheuberger.com](https://www.chrisheuberger.com)

Built with [Jekyll](https://jekyllrb.com/) and [GitHub Pages](https://pages.github.com/)

Current Version: 2

### Local Development

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

### Use AWS Cloudfront for Images

log in to [AWS console](https://console.aws.amazon.com/)

Services > S3  
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
