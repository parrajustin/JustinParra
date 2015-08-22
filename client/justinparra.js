Router.route('/', function () {
    // render the Home template with a custom data context
    Session.set("currentView", "home");

}); // END ROUTER CONTROLLER

Template.Base.helpers({
    whichView: function () {
        return Session.get('currentView');
    }
}); // END MAIN HELPERS










$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});



// __    __   _______     ___      .______     .___________.   .______    _______     ___   .___________.
//|  |  |  | |   ____|   /   \     |   _  \    |           |   |   _  \  |   ____|   /   \  |           |
//|  |__|  | |  |__     /  ^  \    |  |_)  |   `---|  |----`   |  |_)  | |  |__     /  ^  \ `---|  |----`
//|   __   | |   __|   /  /_\  \   |      /        |  |        |   _  <  |   __|   /  /_\  \    |  |
//|  |  |  | |  |____ /  _____  \  |  |\  \----.   |  |        |  |_)  | |  |____ /  _____  \   |  |
//|__|  |__| |_______/__/     \__\ | _| `._____|   |__|        |______/  |_______/__/     \__\  |__|

// // Second HeartBeat for Server Calls
// Meteor.setInterval( function(){beat()}, 1000);
// function beat() {
// //    resize();
// }
// Quick HeartBeat for working clientside code
Meteor.setInterval(function() {
    beat()
}, 250);

function beat() {
   resize();
}

function resize() {
    var holder = jQuery(window).height();   // return height of browser viewport
    if( !((jQuery(window).height() + "px") == $(".justin-windowsize").css("height")) ) {
        $(".intro-text").css("padding-top", ( (holder / 2) - 70 )+ "px");
        $(".justin-windowsize").css("height", holder + "px");
    }
    fixHeaderBar( scrollY() );
}

function fixHeaderBar( input ) {
    var half = ( jQuery(window).height() / 4 );
    var trans = 0;
    if( input < half )
        trans = 0;
    else if( input > jQuery(window).height() )
        trans = 1;
    else
        trans = ( ( input - half ) / half );

    $('#justin-navbar').css('background-color', 'rgba(0,0,0,' + trans + ')');
    return false;
}

function scrollY() {
    return window.pageYOffset;
}
