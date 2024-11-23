$(function () {
    var data = [
        {"title": "30 Years – 30 Artists"},
        {"title": "Crowds"},
        {"title": "Twisted Bodies"},
        {"title": "Pierre Dunoyer"},
        {"title": "Masters & Contemporary Miami 2019"},
        {"title": "Lita Cabellut, The Echo of the Masters"},
        {"title": "Hartung. Mathieu. Helton."},
        {"title": "Andy Denzler, Paintings of Disruption"},
        {"title": "Manolo Valdés"},
    ];
    var current = 0;

    var size = 3

    $(window).scroll(function() {
        if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
            current += size;
            renderContent()
        }
    });

    function renderContent() {
        var currentData = data.slice(current, current + size);

        $.each(currentData, function (index, value) {
            var content = "";
            var aos = "aos-init";
            if (current) {
                aos += "aos-init aos-animate";
            }
            content += '<div class="col-12 col-md-6 mt-5 '+ aos +'" data-aos="fade-up" data-aos-duration="2500">';
            content += '<a href="javascript:;">';
            content += '<img class="img-fluid" src="/assets/images/large/'+ index%5 +'.jpg"/>';
            content += '</a>';
            content += '</div>';
            content += '<div class="col-12 align-self-center col-md-6 text-center '+ aos +'" data-aos="fade-up" data-aos-duration="2500">';
            content += '<div class="title pt-3 pb-md-3">VIEWING ROOM</div>';
            content += '<a href="javascript:;">';
            content += '<h2>'+ value.title +'</h2>';
            content += '</a>';
            content += '</div>';
            $("#accessoryContent").append(content);
        })
    }

    renderContent();
})