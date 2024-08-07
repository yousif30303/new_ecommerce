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
    let $deal_price = $("#deal-price")
    $deal_price_amount = parseInt($deal_price.text())
    //$product_price = parseInt($product_price.text()).toFixed(2)

    //let $qty_input = $(".qty .qty_input")
    //let qty_value = Number($qty_input.val())
    
    $qty_up.click(function(e){
        let $qty_input = $(`.qty_input[data-id=${$(this).data("id")}]`)
        let qty_value = Number($qty_input.val())
        let $product_price = $(`.product_price[data-id=${$(this).data("id")}]`);
        if(qty_value < 10){
            $.ajax({url:"partials/ajax.php",type:"post",data:{itemid:$(this).data("id")} , success:function(result){
                qty_value ++
                let obj = JSON.parse(result);
                let item_price = obj[0]['item_price'];
                let final_price = item_price * qty_value
                $deal_price_amount = $deal_price_amount  + final_price - item_price;
                $deal_price.text($deal_price_amount);
                $qty_input.val(qty_value)
                $product_price.text(final_price)
            }})
        }
    })
    $qty_down.click(function(e){
        let $qty_input = $(`.qty_input[data-id=${$(this).data("id")}]`)
        let qty_value = Number($qty_input.val())
        let $product_price = $(`.product_price[data-id=${$(this).data("id")}]`);
        if(qty_value>0){
            $.ajax({url:"partials/ajax.php",type:"post",data:{itemid:$(this).data("id")} , success:function(result){
                qty_value --
                let obj = JSON.parse(result);
                let item_price = obj[0]['item_price'];
                let final_price = item_price * qty_value
                console.log(item_price);
                $deal_price_amount = $deal_price_amount - item_price ;
                $deal_price.text($deal_price_amount);
                $qty_input.val(qty_value)
                $product_price.text(final_price)
            }})
        }
    })
    
});