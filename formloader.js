/**
 * jQuery formloader plugin
 *
 *
 * @package      jQuery
 * @author      Remi Heens | www.remiheens.fr | jquery@remiheens.fr
 * @copyright   Copyright (c) 2013, Remi Heens.
 * @license      http://creativecommons.org/licenses/by-nc/3.0/
 * @link      http://www.remiheens.fr
 * @version      Version 0.2
 *
 */

(function($) {
    $.fn.formloader = function(show,params) {
    
    	var settings = $.extend( {
        	image:'./loading.gif',
        	height:50,
        	width:50,
        	css : { 
        		'background-color' : '#FFFFFF',
        		'opacity': 0.7 
        	}
        }, params);
        
        return this.each(function(i,el) {

        	if(show == true)
        	{
	       	 	var pos = $(el).offset();
				var top = pos.top;
				var left = pos.left;
				var div = $('<div/>');
				div.attr('id',$(el).attr('class')+'-'+$(el).attr('id'));
				div.attr('style','float:right;width:'+$(el).outerWidth()+'px;height:'+$(el).outerHeight()+'px;position:absolute;top:'+top+'px;left:'+left+'px;');	
				div.css(settings.css);

				top = ($(el).outerHeight()/2) - (settings.height/2);
				left = ($(el).outerWidth()/2) - (settings.width/2);
				div.html('<img src="'+settings.image+'" style="float:right;position:absolute;top:'+top+'px;left:'+left+'px;" width="'+settings.width+'" height="'+settings.height+'" />');
				$(el).after(div);
        		
        	}
        	else
        	{
	        	$('#'+$(el).attr('class')+'-'+$(el).attr('id')).remove();
	        	$(el).animate({opacity: 1},100);
        	}
	        
		});
    };
})(jQuery);