/*
 * Asset Builder has a quirk that allows custom scripts 
 * to load before Bower scripts during concatenation. 
 * To get around this, use one of the following methods.
 *
 * IIFE
 * (function(){ code goes here }());
 *
 * Self-executing anonymous function
 * var foo = function() { code goes here };
 *
 * document.ready (jQuery)
 * $(document).ready(function() { code goes here });
 * $(function() { code goes here });
 *
 * window.onload (Javascript)
 * window.onload = function() { code goes here };
 *
 *
 *
 */

$(document).ready(function() {
        $('[data-toggle="tooltip"]').tooltip();
        $('.land').click(function(event) {
            var estado = $(this).data("title");
            console.log(estado);
            $('.land').removeClass('active');
            $(this).addClass("active");
            if(estado==="Jalisco"){
                var url = "https://jaliscocomovotamos.netlify.com";
                window.open(url,'_blank');
            } else if(estado==="Colima"){
            	var url = "http://ieecolima.org.mx/micandidato2018.html";
                window.open(url,'_blank');
            }
        });
    });
