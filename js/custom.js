(function($) {
    $('.mobile-primary-menu a').click(function () {
        if ($('#primary-menu').find('ul.mobile-primary-menu').length > 0) {
            $('ul.mobile-primary-menu').toggleClass("show");
        }
    });

})(jQuery);
