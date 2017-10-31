// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require_tree .
//= require jquery3
//= require popper
//= require bootstrap-sprockets



$(document).ready(function(){
        $(".idea-description").hide();
        $(".show_hide").show();
        $(".hide_show").hide();

    $('.show_hide').click(function(){
    $(this).parent().find('.idea-description').slideToggle();
         $(this).parent().find(".show_hide").hide();
        $(this).parent().find(".hide_show").show();
    });

 $('.hide_show').click(function(){
    $(this).parent().find('.idea-description').slideToggle();
         $(this).parent().find(".show_hide").show();
        $(this).parent().find(".hide_show").hide();

    });

});
