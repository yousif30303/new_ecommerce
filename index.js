$(function(){
    $("#banner-area .owl-carousel").owlCarousel({
        dots: true,
        items: 1
    });


    $("#top-sale .owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        responsive : {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000 : {
                items: 5
            }
        }
    });

       // isotope filter
    var $grid = $(".grid").isotope({
        itemSelector : '.grid-item',
        layoutMode : 'fitRows'
    });

     // filter items on button click
     $(".button-group").on("click", "button", function(){
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue});
    })

    $("#new-phones .owl-carousel").owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        responsive : {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000 : {
                items: 5
            }
        }
    });

    $("#blogs .owl-carousel").owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        responsive : {
            0: {
                items: 1
            },
            600: {
                items: 3
            }
        }
    });

    let $qty_up = $(".qty .qty-up");
    let $qty_down = $(".qty .qty-down")
    let $qty_input = $(".qty .qty_input")
    let qty_value = Number($qty_input.val())
    
    $qty_up.click(function(e){
        if(qty_value < 10){
            qty_value ++
            $qty_input.val(qty_value)
        }
    })
    $qty_down.click(function(e){
        if(qty_value>0){
            qty_value --
            $qty_input.val(qty_value)
        }
    })
    
});