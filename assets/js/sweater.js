$(function () {

    var data = [
        { "name": "Yasmina Alaoui" },
        { "name": "Pedro Almodóvar" },
        { "name": "Karel Appel" },
        { "name": "Ron Arad" },
        { "name": "Pablo Atchugarry" },
        { "name": "Georg Baselitz" },
        { "name": "Jean Charles Blais" },
        { "name": "Mel Bochner" },
        { "name": "Fernando Botero" },
        { "name": "Andre Brasilier" },
        { "name": "Georg Baselitz" },
        { "name": "Jean Charles Blais" },
        { "name": "Mel Bochner" },
        { "name": "Mel Bochner" },
        { "name": "Fernando Botero" },
        { "name": "Andre Brasilier" },
        { "name": "Jean Charles Blais" },
        { "name": "Mel Bochner" },
        { "name": "Fernando Botero" },
        { "name": "Andre Brasilier" },
        { "name": "Andre Brasilier" },
        { "name": "Mel Bochner" },
        { "name": "Andre Brasilier" },
        { "name": "Georg Baselitz" },
        { "name": "Pablo Atchugarry" },
        { "name": "Jean Charles Blais" },
        { "name": "Georg Baselitz" },
        { "name": "Georg Baselitz" },
        { "name": "Fernando Botero" },
        { "name": "Pedro Almodóvar" },
        { "name": "Yasmina Alaoui" },
        { "name": "Pedro Almodóvar" },
        { "name": "Karel Appel" },
        { "name": "Ron Arad" },
        { "name": "Pablo Atchugarry" },
        { "name": "Georg Baselitz" },
        { "name": "Jean Charles Blais" },
        { "name": "Mel Bochner" },
        { "name": "Fernando Botero" },
        { "name": "Andre Brasilier" },
        { "name": "Georg Baselitz" },
        { "name": "Jean Charles Blais" },
        { "name": "Mel Bochner" },
        { "name": "Fernando Botero" },
        { "name": "Andre Brasilier" },
    ];

    var tab = "#represented";

    var current = 0;

    var size = 15

    $(document).on('click', '#sweaterTab a', function () {
        tab = $(this).attr('data-bs-target');
        current = 0;
    });


    $(window).on('scroll', function () {
        if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
            current += size;
            switch (tab) {
                case "#represented":
                    renderRepresentedContent()
                    break;
                case "#works":
                    renderWorksContent()
                    break;
            }
        }
    });

    function renderWorksContent() {

        var currentData = data.slice(current, current + size);

        $.each(currentData, function (index, value) {
            var content = "";
            var aos = "aos-init";
            if (current) {
                aos += "aos-init aos-animate";
            }
            content += '<div class="col-6 col-md-4 artist-block ' + aos + '" data-aos="fade-up" data-aos-duration="2500">';
            content += '<div class="img-hover-zoom img-hover-zoom--xyz position-relative">';
            content += '<a href="javascript:;">';
            content += '<img class="img-fluid position-relative img-filter ls-is-cached lazyloaded" src="/assets/images/small/' + index % 10 + '.jpg"/>';
            content += '</a>';
            content += '<div class="position-absolute text-nowrap">';
            content += '<div class="artist">';
            content += '<a href="javascript:;">' + value.name + '</a>';
            content += '</div>';
            content += '</div>';
            content += '</div>';
            content += '</div>';
            $("#works .text-center").append(content);
        })

    }

    function renderRepresentedContent() {

        var currentData = data.slice(current, current + size);

        $.each(currentData, function (index, value) {
            var content = "";
            var aos = "aos-init";
            if (current) {
                aos += "aos-init aos-animate";
            }
            content += '<div class="col-6 col-md-4 artist-block ' + aos + '" data-aos="fade-up" data-aos-duration="2500">';
            content += '<div class="img-hover-zoom img-hover-zoom--xyz position-relative">';
            content += '<a href="javascript:;">';
            content += '<img class="img-fluid position-relative img-filter ls-is-cached lazyloaded" src="/assets/images/small/' + index % 10 + '.jpg"/>';
            content += '</a>';
            content += '<div class="position-absolute text-nowrap">';
            content += '<div class="artist">';
            content += '<a href="javascript:;">' + value.name + '</a>';
            content += '</div>';
            content += '</div>';
            content += '</div>';
            content += '</div>';
            $("#represented .text-center").append(content);
        })
    }

    function renderListContent() {
        var content = "";
        $.each(data, function (index, value) {
            content += '<div class="col-6 col-md-3 animate__animated animate__fadeInUp animate__slower">';
            content += '<div class="py-3 text-uppercase">';
            content += '<a class="list-name" href="javascript:;">' + value.name + '</a>';
            content += '</div>';
            content += '</div>';
        })
        $("#list .text-center").html(content);
    }

    renderRepresentedContent();
    renderWorksContent();
    renderListContent();

})