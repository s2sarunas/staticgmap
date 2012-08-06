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
 */(function($){var d={init:function(b){var c=$.extend({'width':300,'height':250,'zoom':14,'maptype':'hybrid','address':'London, UK','atlText':''},b);return this.each(function(){var a=$(this),data=a.data('staticgmap'),staticgmap=$('<img />',{'class':'staticgmap',src:'http://maps.google.com/maps/api/staticmap?zoom='+c.zoom+'&size='+c.width+'x'+c.height+'&maptype='+c.maptype+'&markers=size:normal|color:blue|'+c.address+'&sensor=false',css:{'height':c.height+'px','width':c.width+'px'},alt:c.altText});if(!data){$(this).data('staticgmap',staticgmap)}$(this).data('defaultvalue',$(this).html());$(this).html(staticgmap)})},destroy:function(){return this.each(function(){var a=$(this),data=a.data('staticgmap');$(window).unbind('.staticgmap');a.removeData('staticgmap');$(this).html($(this).data('defaultvalue'))})},update:function(b){var c=$.extend({},$(this).options,b);return this.each(function(){var a=$(this),staticgmap=$('<img />',{'class':'staticgmap',src:'http://maps.google.com/maps/api/staticmap?zoom='+c.zoom+'&size='+c.width+'x'+c.height+'&maptype='+c.maptype+'&markers=size:normal|color:blue|'+c.address+'&sensor=false',css:{'height':c.height+'px','width':c.width+'px'},alt:c.altText});$(this).data('staticgmap',staticgmap);$(this).html(staticgmap)})}};$.fn.staticgmap=function(a){if(d[a]){return d[a].apply(this,Array.prototype.slice.call(arguments,1))}else if(typeof a==='object'||!a){return d.init.apply(this,arguments)}else{$.error('Method '+a+' does not exist on jQuery.staticgmap')}}})(jQuery);