$(function () {

    AOS.init();
    setContent("main")

    $(function () {

        AOS.init();

        setContent("main")

        $(document).on('click', '#navbarNav .nav-link', function () {
            setContent($(this).data("page"))
        });

        $(document).on('click', '.navbar-brand', function () {
            setContent($(this).data("page"))
        });

        function setContent(page) {
            $("#content").load("./pages/" + page + ".html");
        }
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() >= 50) {
            $('#return-to-top').fadeIn(200);
        } else {
            $('#return-to-top').fadeOut(200);
        }
    });
    $('#return-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });

    $(document).on('click', '#navbarNav .nav-link', function () {
        setContent($(this).data("page"))
    });

    $(document).on('click', '.navbar-brand', function () {
        setContent($(this).data("page"))
    });

    function setContent(page) {
        $("#content").load("./pages/" + page + ".html");
    }
});

