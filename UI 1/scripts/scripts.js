$( document ).ready(function() {
    $(".top-header-cart").on("click",function() {
    $(".cart-contents").fadeToggle("fast", "swing");
    console.log("Hi1");
    });
    

    $(document).on('click', function(e) {
        var container = $(".cart-complete");
        var ChildCont = $(".cart-complete .cart-contents");
        if (!$(e.target).closest(container).length) {
            ChildCont.hide();
        }
    });
});
