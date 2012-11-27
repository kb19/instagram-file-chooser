<script type="text/javascript">
var secondlevelDomain = window.location.hostname.split('.')[window.location.hostname.split('.').length - 2];
var firstLevelDomain = window.location.hostname.split('.')[window.location.hostname.split('.').length - 1];
document.domain = secondlevelDomain + '.' + firstLevelDomain;
$(document).ready(function() {
  $('.scrollable').scrollable();
  $('#next').click(function() {
    var max_id = $('img').last().attr('id');
    $.post('next.php', { max_id : max_id, count : 15 }, 
      function(response) {
        if (response) {
          var api = $(".scrollable").data("scrollable");
          api.addItem(response);
        }
      }
    );
  });
  $('img').live('click', function() {
    var imgID = $(this).attr('id');
    var imgURL = $(this).attr('img');
    $.post('upload.php', { imgID : imgID, imgURL : imgURL },
      function(response) {
        if (response) {
          window.opener.FileUploaded("Instagram Image", response);
          self.close();
        }
      }
    );
  });
  $('#logout').click(function() {
    $('#logout').html('<iframe src="https://instagram.com/accounts/logout/" width="0" height="0">'); 
    $('#logout').hide();
    $.post('logout.php', null,
      function(response) {
        window.location = "https://instagram.com/accounts/login/?next=/oauth/authorize/%3Fclient_id%3D39143e5aa06f41d2a3c52775ed996734%26redirect_uri%3Dhttp%3A//instagram.canvaspop.com/callback.php%26response_type%3Dcode";
      }
    );
  });
});
</script>