// Based on leanModal v1.1 by Ray Stone - http://finelysliced.com.au
// Dual licensed under the MIT and GPL

(function($){

    $.fn.extend({

        leanModal: function(options) {

            var defaults = {
                top: 100,
                overlay: 0.5,
                closer: null
            } ;

            var overlay = $("<div id='modal'></div>");

            $("body").append(overlay);

            options =  $.extend(defaults, options);

            function open (modal_id) {
				$("#modal,.modal a").click(function() {
					 close_modal(modal_id);
				});

				$(options.closer).click(function(e) {
					 close_modal(modal_id);
					 e.preventDefault();
				});

				var modal_height = $(modal_id).outerHeight();
				var modal_width = $(modal_id).outerWidth();

				$('#modal').css({ 'display' : 'block', opacity : 0 });

				$('#modal').fadeTo(200,options.overlay);

				$(modal_id).css({

					'display' : 'block',
					'position' : 'fixed',
					'opacity' : 0,
					'z-index': 11000,
					'left' : 50 + '%',
					'margin-left' : -(modal_width/2) + "px",
					'top' : options.top + "px"

				});

				$(modal_id).fadeTo(200,1); }

            return this.each(function() {
				
				if ($(this).get(0).tagName != 'DIV') {
				
					$(this).click(function(e) {

						open($(this).attr("href")) ;

						e.preventDefault();

					});
				
				} else { open('#'+$(this).attr("id")) ; }

            });

			function close_modal(modal_id){

        		$("#modal").fadeOut(200);

        		$(modal_id).css({ 'display' : 'none' });

			}

        }
    });

})(jQuery);
