;(function ( $, window, document, undefined ) {
    // Create the defaults
    var pluginName = "Masonry",
    defaults = {
        desktop : [
            [[0,0],[4,4]],
            [[0,4],[2,2]],
            [[2,4],[2,2]],
            [[4,0],[2,2]],
            [[6,0],[2,2]],
            [[4,2],[4,4]],
            [[8,0],[3,3]],
            [[8,3],[3,3]],
            [[11,0],[2,4]],
            [[11,2],[2,2]],
            [[13,2],[2,2]],
            [[11,4],[2,4]]
        ],
        smartphone : [
            [[0,0],[6,6]],
            [[6,0],[6,6]],
            [[12,0],[6,6]],
            [[18,0],[6,6]],
            [[24,0],[6,6]],
            [[30,0],[6,6]],
            [[36,0],[6,6]],
            [[42,0],[6,6]],
            [[48,0],[6,6]],
            [[54,0],[6,6]],
            [[60,0],[6,6]],
            [[66,0],[6,6]]
        ],
        tablet : [
            [[0,0],[6,5]],
            [[5,0],[3,3]],
            [[5,3],[3,3]],
            [[8,0],[6,5]],
            [[13,0],[3,3]],
            [[13,3],[3,3]],
            [[16,0],[6,5]],
            [[21,0],[3,3]],
            [[21,3],[3,3]],
            [[24,0],[6,5]],
            [[29,0],[3,3]],
            [[29,3],[3,3]]
        ],
        start: function() {},
        stop: function() {},
    };

    function Plugin ( element, options ) {
        this.element = element;
        this.settings = $.extend( {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function () {
            // Detect device width set layout.
            var buildMasonry = function (obj) {
                  
                obj.settings['start'].call(this);
                  
                var full_width = $(obj.element).width()-10;
                  
                var layout = obj.settings['desktop']
                  
                if ( full_width <= 800 ) { var layout = obj._defaults['tablet'] } 
                if ( full_width <= 400 ) { var layout = obj._defaults['smartphone'] }

                var nodes = obj.element.children;
                var base_width = Math.round(full_width/6);
                var base_height = Math.round((base_width/4)*3);
                var gutter = parseInt('10');

                for(i=0; i<nodes.length; i++) {
                    var node = nodes[i];
                    var style = "";
                    style += "position: absolute; border: none;";
                    style += "top:"+(layout[i][0][0]*base_height+gutter)+"px;"
                    style += "left:"+(layout[i][0][1]*base_width+gutter)+"px;";
                    style += "width:"+(layout[i][1][0]*base_width-gutter)+"px;";
                    style += "height:"+(layout[i][1][1]*base_height-gutter)+"px;";
                   
                    nodes[i].setAttribute("style",style);
                     
                    var parent = obj.element;
                    var a = layout[i][0][0]*base_height;
                    var b = layout[i][1][1]*base_height+layout[i][0][0]*base_height;
                    parent.setAttribute("style","height:"+b+"px;");
                }
            }
            function resizeEvent(obj) {
                var doit;
                $(window).bind('resize', function(e) {
                    clearTimeout(doit);
                    doit = setTimeout(function() { buildMasonry(obj) } , 5)
                });
            }
            resizeEvent(this);
            buildMasonry(this); 
            this.settings['stop'].call(this);
        },
    };
    $.fn[ pluginName ] = function ( options ) {
        this.each(function() {
            if ( !$.data( this, "plugin_" + pluginName ) ) {
                $.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
            }
        });
        // chain jQuery functions
        return this;
    };
})( jQuery, window, document );
