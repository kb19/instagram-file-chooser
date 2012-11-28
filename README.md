This code allows you to embed an Instagram file chooser into your web page / web app. It sets up a 'login with Instagram' button on the main page. When a user clicks it, a new window opens up prompting them to log in with instagram and then displays a 'slider' of all their instagram images. When they click on an instagram image, that image's link is sent back to the parent window to be displayed (or enetered in a form, etc). 

To use this app, you need to create an app/account at <a href="http://instagram.com/developer/" target="_">the Instagram API page</a>.

<h3>Explanation</h3>
After a user signs in with Instagram, we hit an endpoint on the Instagram API that gives us the # most recent user photos. With that return 1 'page' of photos to the page, and cache the next 'page' of the slider via an AJAX requqest to next.php. Everytime the 'next' button is clicked, we move to the next (cached) page, and load the page after it. If a user has relatively few photos, this can be a cumbersome way to do it since we could just grab all their photos in one request, but if the user has a tonne of photos that could amount to a lot of unnecessary overhead.

<h3>Application Flow</h3>
index.php -> sign in with Instagram -> redirect.php, render template img_chooser.html -> grab user's pictures, process in main.js -> hit next.php via AJAX to retrieve the next page of pictures.

<h3>Important files</h3>
<h4>lib/instagram.php:</h4>  InstagramUploader class. Handles rendering the img_chooser.html template as well as connecting to the 
            instagram api via curl requests. On initialization, this class pulls down the first page of instagram 
            pictures from the user's instagram account and sends the information back via JSON.
            It also contains a static function that is used via AJAX to request the next 'page' of user photos.
<h4>index.php:</h4>   Landing page for the plugin. Contains the 'login with instagram' code.
<h4>next.php:</h4>    This script calls a static method in the InstagramUploader class that gets the next 'page' of pictures. This 
            script serves as an endpoint for the next page ajax request in main.js.
<h4>redirect.php:</h4>  Creates and initializes an instance of the InstagramUploader class. The client id, client secret and 
            redirect url need to be set here. <strong>*Set Instagram API details here</strong>
            
<h4>js/main.js:</h4>  Contains the javascript code for the plugin. It's split into 2 main sections: main page section (index.php) 
          and the file chooser page section (redirect.php). The main page section just contains a listener for handling 
          the instagram login / pop-up window. The section for the file chooser contains the logic and dom manipulation 
          code for presenting the pictures and handling the ui experience. <strong>*Set Instagram API details here</strong>
          
<h4>templates/img_chooser.html:</h4>  This is the template that is rendered by the redirect.php script.

