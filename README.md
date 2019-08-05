### Generate Markup from Directory

1. List contents of image directory in a text file:

        $ ls > directory-list.txt
 [https://ss64.com/bash/](https://ss64.com/bash/)

2. Turn list into array.

3. Go to [https://rubyfiddle.com/](http://rubyfiddle.com/) and use something like this to generate markup:  

        dir_array = [
          "test-1.jpg",
          "test-2.jpg",
          "test-3.jpg"
        ]
        
        dir_array.each { |x| puts "
          <li>#{x}</li>
          <p>test</p>
        " }

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

### To Compile Styles

from root directory:  
```
sass --watch stylesheets/scss/index.scss:stylesheets/styles.css
```

or, to build before deploying:
```
sass stylesheets/scss/index.scss stylesheets/styles.css
```
