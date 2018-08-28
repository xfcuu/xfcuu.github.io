
(function ($) {

    this.init = function () {
        this.login();
    };

    /****************************************************************
     LOGIN
    ****************************************************************/
    this.login = function (e) {
        $("input").focus(function () {
            $(this).siblings("label").hide();
        });
        $("input").blur(function () {
            if ($(this).val() == "") {
                $(this).siblings("label").show();
            }
        });
    };

    this.init();

})(jQuery);

