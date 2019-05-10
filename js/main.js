$(document).ready(function() {

	$(document).on('scroll resize', function() {
     
     var $d = $(document),
         $w = $(window);
     
     $('#scroll-bar').width(
       ($d.scrollTop() / ($d.height() - $w.height()) * $d.height()) + 'px'
     );

     if ($(window).scrollTop() > 200){
      
        $('.mainTitle').addClass( "mainTitleOutline");
    }
    else {
        $('.mainTitle').removeClass("mainTitleOutline");
    }


     
   });


});



// When the user scrolls the page, execute myFunction 


// Get the header
var header = document.getElementById("topStuff");

// Get the offset position of the navbar



// $(function() {
  
//    $(document).on('scroll resize', function() {
     
//      var $d = $(document),
//          $w = $(window);
     
//      $('div#scroll-bar').width(
//        ($d.scrollTop() / ($d.height() - $w.height()) * $d.height()) + 'px'
//      );
     
//    });
  

// });



$(document).ready(function() {

    var getMax = function() {
        return $(document).height() - $(window).height();
    }

    var getValue = function() {
        return $(window).scrollTop();
    }

    if ('max' in document.createElement('progress')) {
        var progressBar = $('progress');
        
        progressBar.attr({
            max: getMax()
        });

        $(document).on('scroll', function() {
            progressBar.attr({
                value: getValue()
            });
        });

        $(window).resize(function() {
            
            progressBar.attr({
                max: getMax(),
                value: getValue()
            });
        });

    } else {

        var progressBar = $('.progress-bar'),
            max = getMax(),
            value, width;

        var getWidth = function() {
            
            value = getValue();
            width = (value / max) * 100;
            width = width + '%';
            return width;
        }

        var setWidth = function() {
            progressBar.css({
                width: getWidth()
            });
        }

        $(document).on('scroll', setWidth);
        $(window).on('resize', function() {
            
            max = getMax();
            setWidth();
        });
    }
});
