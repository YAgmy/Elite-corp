$(function() {
    // Adjust slider hieght

    let windowH = $(window).height();
        upperH = $(".upperbar").innerHeight();
        navH = $(".navbar").innerHeight();

    $(".slider, .carousel-item").height(windowH - (upperH + navH));



    // featured work shuffle:
    $(".featured-work ul li").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
        
        
        if ($(this).data("class") === 'all') {
            $(".shuffle-imgs .col-md").css('opacity', 1)
        }
        else {
            $(".shuffle-imgs .col-md").css("opacity", ".08");

            $($(this).data('class')).parent().css("opacity", 1);
        }
    });
})