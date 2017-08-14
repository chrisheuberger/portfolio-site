### Generate Markup from Directory

1. List contents of image directory in a text file:

        $ ls > directory-list.txt

 [https://ss64.com/bash/](https://ss64.com/bash/)

2. Turn list into array.

3. Go to [http://rubyfiddle.com/](http://rubyfiddle.com/) and use something like this to generate markup:  

        dir_array = [
          "test-1.jpg",
          "test-2.jpg",
          "test-3.jpg"
        ]
        
        dir_array.each { |x| puts "
          <li>#{x}</li>
          <p>test</p>
        " }
