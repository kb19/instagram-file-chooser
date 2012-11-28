$(document).ready(function(){
	/** MAIN PAGE CODE **/
	$('.instagram-signin').on('click', function(){
        var redirect_url    = 'GET VALUE FROM INSTAGRAM API';
        var client_id       = 'GET VALUE FROM INSTAGRAM API';
        var url = 'https://api.instagram.com/oauth/authorize/?client_id=' + client_id + '&redirect_uri=' + redirect_url + '&response_type=code';
        
        window.open(url, "Instagram", "menubar=1,resizable=1,width=1000,height=600");
    });

    /** FILE CHOOSER POP-UP CODE **/
	// Preload one slide
	var url = $('.next').data('nexturl');
	G.requestNextPage(url, false);				

	// Live click listener for the thumbnails
	$('.images img').live('click', function(){
		var $this = $(this);
		 
		// This function exists in the parent window
		window.opener.G.updateInstagramImage($this.data('full'), $this.data('thumb'));
		window.close();
	});	

	// Show the next page
	$('.next').on('click', function(){					
		// Check to see if we are on the last slide
		if (!$('.selected').hasClass('end'))
		{
			// Move the ahead a page
			$('.image-content .images').animate({left: '-=' + G.slideWidth}, G.loadSpeed);

			// We haven't loaded all of the instagram pages 
			// so we need to request the next ones
			if (!$('.images div').hasClass('end'))
			{
				// Request the next slide
				var url = $(this).data('nexturl');
				G.requestNextPage(url, true);										
			}
			else
			{
				// Move the selected class ahead to the next div
				G.moveSelectedAhead();
			}
		}
		else 
		{
			G.checkNavigation();
		}
	});	

	// Show previous page
	$('.prev').on('click', function(){
		var $img_content = $('.image-content .images');
		var left = $img_content.position().left;
		 
		if (left != 0)
		{
			$img_content.animate({left: '+=600'}, G.loadSpeed);

			G.moveSelectedBack();
		}
	});		
});

var G = 
{
	loadSpeed	: 800,
	slideWidth 	: 600,

	moveSelectedBack	: function()
	{
		var $div = $('.selected').prev();
			$('div').removeClass('selected');
			$div.addClass('selected');

		G.checkNavigation();
	},

	moveSelectedAhead	: function()
	{
		var $el = $('.selected').next();
			$('div').removeClass('selected');
			$el.addClass('selected');

		G.checkNavigation();
	},

	checkNavigation		: function()
	{
		// Check if we are on the first page
		if ($('.selected').prev().length == 0)
		{
			$('.prev').attr('disabled', 'true');
		}
		else 
		{
			$('.prev').removeAttr('disabled');
		}

		// Check if we are on the last page
		if ($('.selected').next().length == 0)
		{
			$('.next').attr('disabled', 'true');
		}
		else 
		{
			$('.next').removeAttr('disabled');
		}
	},

	loadNextPage		: function(data, isInit)
	{			
		if (isInit)
		{
			G.moveSelectedAhead();
		}

		// Grab the url for the next page of images
		var url = data.pagination.next_url;	
		
		// Create new div page
		var $div = $("<div>");
		$.each(data.data, function(key, value){		
			// Create the image element 
			var $img = $('<img>');
				$img.attr('src', value.images.thumbnail.url);
				$img.data('full', value.images.standard_resolution.url);
				$img.data('thumb', value.images.thumbnail.url);

			$div.append($img);
		});		

		// Add new page to the slider
		$('.images').append($div);

		// Change the width of the images div since we are 
		// adding another page
		var width = $('.image-content .images').width();
		$('.image-content .images').width(width + G.slideWidth);
		
		// Check to see if we are on the last page
		if (typeof url === 'undefined')
		{
			$div.addClass('end');	
		}
		else
		{
			$('.next').data('nexturl', url);					
		}
	},

	requestNextPage 	: function(url, isInit)
	{	
		if (isInit)
		{
			$('.next').attr('disabled', 'true');
		}

		$.ajax({
			type: "GET",
			url: "next.php",
			data: { url: url },
			dataType: 'json',
			success: function(data)
			{
				G.loadNextPage(data, isInit);

				if (isInit)
				{
					$('.next').removeAttr('disabled');
				}

				G.checkNavigation();
			}
		});
	},

	// For the main page
	updateInstagramImage 	: function(full, thumb)
    {
        $('.instagram-img').attr('src', full);
    }
};	
