/*!
 * staticgmap - jQuery Plugin
 * version: 1.0.1 (06/08/2012)
 * @requires jQuery v1.6 or later
 *
 * Examples at http://tools.s2studio.co.uk/staticgmap
 * License: http://tools.s2studio.co.uk/staticgmap/#license
 *
 * Copyright 2012 Sarunas Savicianskas - sarunas@s2studio.co.uk
 *
 */


(function( $ ) {
    
    var methods = {
        init : function( options ) {
            // Create some defaults, extending them with any options that were provided
            var settings = $.extend( {
              'width'   : 300,
              'height'  : 250,
              'zoom'    : 14,
              'maptype' : 'hybrid', // roadmap, satellite, terrain, hybrid
              'address' : 'London, UK', // address or coordinates
              'atlText' : ''
            }, options);

            return this.each(function(){
                var $this = $(this),
                data = $this.data('staticgmap'),
                staticgmap = $('<img />', {
                    'class' : 'staticgmap',
                    src     : 'http://maps.google.com/maps/api/staticmap?zoom=' 
                        + settings.zoom + '&size=' + settings.width + 'x' 
                        + settings.height + '&maptype=' + settings.maptype 
                        + '&markers=size:normal|color:blue|' 
                        + settings.address + '&sensor=false',
                    css     : {
                            'height'   : settings.height + 'px',
                            'width'    : settings.width + 'px'
                    },
                    alt     : settings.altText
                });

                // If the plugin hasn't been initialized yet
                if ( ! data ) {
                    $(this).data('staticgmap', staticgmap);
                }
                
                $(this).data('defaultvalue', $(this).html());
                $(this).html(staticgmap);
            });
        },
        destroy : function( ) {
            return this.each(function(){
                var $this = $(this),
                data = $this.data('staticgmap');

                // Namespacing FTW
                $(window).unbind('.staticgmap');
                $this.removeData('staticgmap');
                
                $(this).html($(this).data('defaultvalue'));
            })
        },
        update : function( options ) { 
            // Create some defaults, extending them with any options that were provided
            var settings = $.extend( {}, $(this).options, options);

            return this.each(function(){
                var $this = $(this),
                staticgmap = $('<img />', {
                    'class' : 'staticgmap',
                    src     : 'http://maps.google.com/maps/api/staticmap?zoom=' 
                        + settings.zoom + '&size=' + settings.width + 'x' 
                        + settings.height + '&maptype=' + settings.maptype 
                        + '&markers=size:normal|color:blue|' 
                        + settings.address + '&sensor=false',
                    css     : {
                        'height'   : settings.height + 'px',
                        'width'    : settings.width + 'px'
                    },
                    alt     : settings.altText
                });
                
                // update current static maps with updated ones
                $(this).data('staticgmap', staticgmap);
                $(this).html(staticgmap);
            });
        }
    };    
    
    $.fn.staticgmap = function( method ) {
        if ( methods[method] ) {
            return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
           return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.staticgmap' );
        }
    };
})( jQuery );