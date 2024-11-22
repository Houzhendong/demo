$(function () {
    var topData = [
        {"title": "30 Years – 30 Artists", "desc": "15 November - 13 December 2024", "city": "Geneva"},
        {"title": "Crowds", "desc": "14 November - 04 January 2025", "city": "Madrid"},
        {"title": "Twisted Bodies", "desc": "07 November - 07 December 2024", "city": "New York"},
        {"title": "Pierre Dunoyer, 'Object of Thought: Tableaux 1986 – 2008'", "desc": "06 - 27 November 2024", "city": "Dubai"},
    ];
    var upcomingData = {
        "header": "Upcoming Exhibitions",
        "data" : [
            {"title": "Unveiling Masters in the City", "desc": "03 December - 02 January 2025", "city": "Miami"},
        ]
    };
    var pastData = {
        "header": "Past Exhibitions",
        "data" : [
            {"title": "Transatlantic: Figurations of the 80s", "desc": "15 October - 14 November 2024", "city": "Paris"},
            {"title": "Manolo Valdés, Domesticity", "desc": "09 - 31 October 2024", "city": "Dubai Atlantis The Royal"},
            {"title": "Gustavo Nazareno, Orixás: Personal Tales on Portraiture", "desc": "08 October - 09 November 2024", "city": "London"},
            {"title": "The Collector 1994", "desc": "20 September - 20 October 2024", "city": "Singapore"},
            {"title": "Adrián Navarro, Paraísos", "desc": "12 September - 23 October 2024", "city": "Madrid"},
            {"title": "Timeless Expressions: Korean Art", "desc": "04 - 30 September 2024", "city": "Seoul"},
            {"title": "The Monaco Masters Show: La Côte d’Azur, terre d’inspiration", "desc": "03 July - 31 August 2024", "city": "Monaco"},
            {"title": "Summer Vibes", "desc": "20 June - 31 August 2024", "city": "Madrid"},
            {"title": "Transatlantic: Figurations of the 80s", "desc": "15 October - 14 November 2024", "city": "Paris"},
            {"title": "Manolo Valdés, Domesticity", "desc": "09 - 31 October 2024", "city": "Dubai Atlantis The Royal"},
            {"title": "Gustavo Nazareno, Orixás: Personal Tales on Portraiture", "desc": "08 October - 09 November 2024", "city": "London"},
            {"title": "The Collector 1994", "desc": "20 September - 20 October 2024", "city": "Singapore"},
            {"title": "Adrián Navarro, Paraísos", "desc": "12 September - 23 October 2024", "city": "Madrid"},
            {"title": "Timeless Expressions: Korean Art", "desc": "04 - 30 September 2024", "city": "Seoul"},
            {"title": "The Monaco Masters Show: La Côte d’Azur, terre d’inspiration", "desc": "03 July - 31 August 2024", "city": "Monaco"},
            {"title": "Summer Vibes", "desc": "20 June - 31 August 2024", "city": "Madrid"},
        ]
    };
    var archiveData = {
        "header": "Archive, selected exhibitions",
        "data" : [
            {"title": "Masters & Contemporary Miami 2019", "desc": "13 - 28 December 2019", "city": "Miami"},
            {"title": "Lita Cabellut, The Echo of the Masters", "desc": "15 November - 01 December 2019", "city": "Singapore"},
            {"title": "Hartung. Mathieu. Helton.", "desc": "08 - 24 November 2019", "city": "New York"},
            {"title": "Andy Denzler, Paintings of Disruption", "desc": "08 - 30 November 2019", "city": "Seoul"},
            {"title": "Manolo Valdés", "desc": "25 October - 15 November 2019", "city": "London"},
            {"title": "More than Words", "desc": "16 - 30 October 2019", "city": "Dubai"},
            {"title": "The Monaco Masters Show: La Côte d’Azur, terre d’inspiration", "desc": "03 July - 31 August 2024", "city": "Monaco"},
            {"title": "Summer Vibes", "desc": "20 June - 31 August 2024", "city": "Madrid"},
            {"title": "Transatlantic: Figurations of the 80s", "desc": "15 October - 14 November 2024", "city": "Paris"},
            {"title": "Manolo Valdés, Domesticity", "desc": "09 - 31 October 2024", "city": "Dubai Atlantis The Royal"},
            {"title": "Gustavo Nazareno, Orixás: Personal Tales on Portraiture", "desc": "08 October - 09 November 2024", "city": "London"},
            {"title": "The Collector 1994", "desc": "20 September - 20 October 2024", "city": "Singapore"},
            {"title": "Adrián Navarro, Paraísos", "desc": "12 September - 23 October 2024", "city": "Madrid"},
            {"title": "Timeless Expressions: Korean Art", "desc": "04 - 30 September 2024", "city": "Seoul"},
            {"title": "The Monaco Masters Show: La Côte d’Azur, terre d’inspiration", "desc": "03 July - 31 August 2024", "city": "Monaco"},
            {"title": "Summer Vibes", "desc": "20 June - 31 August 2024", "city": "Madrid"},
        ]
    }

    function renderTopContent() {
        var content = "";
        $.each(topData, function(index, value) {
            content += '<div class="col-md-6 pb-md-5">';
            content += '<a href="javascript:;">';
            content += '<img class="img-fluid size-photo-event w-100 ls-is-cached lazyloaded" src="/assets/images/large/'+ index%5 +'.jpg"/>';
            content += '</a>';
            content += '</div>';
            content += '<div class="col-md-6 pb-5 text-center">';
            content += '<a href="javascript:; ">';
            content += '<h3 style="color:#212529">'+ value.title +'</h3>';
            content += '</a>';
            content += '<div class="py-2">';
            content += '<div class="event_date text-center" style="font-size: 16px">'+ value.desc +'</div>';
            content += '</div>';
            content += '<div class="pb-1 event_date  d-block">'+ value.city +'</div>';
            content += '</div>';
        })
        $("#bottomTopContent").html(content);
    }

    function renderUpcomingContent() {
        var content = "";
        content += '<h3 class="col-12 py-2 text-left">'+ upcomingData.header +'</h3>';
        $.each(upcomingData.data, function(index, value) {
            content += '<div class="col-md-3 pb-2">';
            content += '<a href="javascript:;">';
            content += '<img class="img-fluid ls-is-cached lazyloaded" src="/assets/images/small/'+ index%10 +'.jpg"/>';
            content += '</a>';
            content += '<a href="javascript:;">';
            content += '<div class="py-2  d-block " style="color:#212529">'+ value.title +'</div>';
            content += '</a>';
            content += '<div class="pb-1 event_date  d-block">'+ value.desc +'</div>';
            content += '<div class="pb-1 event_date  d-block">'+ value.city +'</div>';
            content += '</div>';
        })
        $("#bottomUpcomingContent").html(content);
    }

    function renderPastContent() {
        var content = "";
        content += '<h3 class="col-12 py-2 text-left">'+ pastData.header +'</h3>';
        $.each(pastData.data, function (index, value) {
            content += '<div class="col-md-3 pb-4">';
            content += '<a href="javascript:;">';
            content += '<img class="img-fluid ls-is-cached lazyloaded" src="/assets/images/small/' + index % 10 + '.jpg"/>';
            content += '</a>';
            content += '<a href="javascript:;">';
            content += '<div class="py-2  d-block " style="color:#212529">' + value.title + '</div>';
            content += '</a>';
            content += '<div class="pb-1 event_date  d-block">' + value.desc + '</div>';
            content += '<div class="pb-1 event_date  d-block">' + value.city + '</div>';
            content += '</div>';
        })
        $("#bottomPastContent").html(content);
    }

    function renderArchiveContent() {
        var content = "";
        content += '<h3 class="col-12 py-2 text-left">'+ archiveData.header +'</h3>';
        $.each(archiveData.data, function (index, value) {
            content += '<div class="col-md-12 pb-4">';
            content += '<a href="javascript:;">';
            content += '<div class="py-2  d-block " style="color:#212529">' + value.title + '</div>';
            content += '</a>';
            content += '<div class="pb-1 event_date  d-block">' + value.desc + '</div>';
            content += '<div class="pb-1 event_date  d-block">' + value.city + '</div>';
            content += '</div>';
        })
        $("#bottomArchiveContent").html(content);
    }

    renderArchiveContent();
    renderPastContent();
    renderUpcomingContent();
    renderTopContent();
})