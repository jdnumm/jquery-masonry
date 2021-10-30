# jQuery plugin for responsive and pre defined grid layouts.

There are tons of masonry plugins out there but this one doesn't try to build  the wall with the help of some math, this one use a pre defined Layout.

## Examples
Take a look at the examples. And try to resize your browser to see how Masonry will rebuild the Grid for you.

* [Default](http://jdnuemm.github.io/jquery-masonry/examples/default.html) 
* [Custom Layouts](http://jdnuemm.github.io/jquery-masonry/examples/layout.html)
* [Callbacks](http://jdnuemm.github.io/jquery-masonry/examples/callback.html)

## Basic usage

Load jQuery the plugin and style your grid fallback. 

    <style type="text/css">
        .masonry {
            max-width: 1210px;
            margin: 0px auto;
            position: relative; }

    </style>

    <div class="masonry">   
        <div class="brick"> </div>
        <div class="brick"> </div>
        ...
    </div>

Now you can use Masonry like this.

    $(".masonry").Masonry();

## Callbacks

The two  callback functions: "start" and "stop" are fired before we build the masonry and after the build is complete. You can use this functions for example to hide or redraw your content.

    $(".masonry").Masonry({
        start : function () {
            $('.brick').css('background','#f00'); 
        },
        stop : function () {
            $('.brick').css('background','#000')
        },
    });

### Change the Layout

It is easy to apply your own Layouts but the array must contain at least a value-pair for each of the child’s. By default Masonry use a Grid with 6 Columns and have separate layouts for desktop, tablet and smartphones.

The value pair in the example below means the position of the top-left corner and the width, height of the box.

    $(".masonry").Masonry({
         desktop : [
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
    });

