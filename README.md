This code allows you to embed an instagram file chooser into your web page / web app. It sets up a 'login with instagram' button on the main page. When a user clicks it, a new window opens up prompting them to log in with instagram and then displays a 'slider' of all their instagram images. When they click on an instagram image, that image's link is sent back to the parent window to be displayed (or enetered in a form, etc). 

To use this app, you need to create an app/account at <a href="http://instagram.com/developer/">the Instagram API page</a>.

<strong>Important files</strong>
js/main.js:  Contains the javascript code for the plugin. It's split into 2 main sections: main page section (index.php) 
          and the file chooser page section (redirect.php). The main page section just contains a listener for handling 
          the instagram login / pop-up window. The section for the file chooser contains the logic and dom manipulation 
          code for presenting the pictures and handling the ui experience. 
          
templates/img_chooser.html: This is the template that is rendered by the redirect.php script.

lib/instagram.php: InstagramUploader class. Handles rendering the img_chooser.html template as well as connecting to the 
            instagram api via curl requests. On initialization, this class pulls down the first page of instagram 
            pictures from the user's instagram account and sends the information back via JSON.
            It also contains a static function that is used via AJAX to request the next 'page' of user photos.
index.php:  Landing page for the plugin. Contains the 'login with instagram' code.
next.php:   This script calls a static method in the InstagramUploader class that gets the next 'page' of pictures. This 
            script serves as an endpoint for the next page ajax request in main.js.
redirect.php: Creates and initializes an instance of the InstagramUploader class. The client id, client secret and 
            redirect url need to be set here.