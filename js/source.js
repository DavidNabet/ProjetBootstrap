$(function() { //charge la page
    $("#first-section header img").mouseenter(function() {
        $(this).removeClass("showBox").addClass("hideBox")
    })

    $("#first-section header img").mouseout(function() {
        $(this).removeClass("hideBox").addClass("showBox")
    })

    let scroll = $(".bounce");
    scroll.css("position", "relative");

    function scrollTextUp() {
        scroll.animate({
            top: "-10px"
        }, 1000, function() {
            scroll.animate({
                top: "10px"
            }, 1000, scrollTextUp())
        })
    }

    scrollTextUp()

    $("#first-section i").click(function(e) {
        e.preventDefault();
        console.log($("#second-section").offset().top);
        $("html, body").animate({
            scrollTop: $("#second-section").offset().top
        }, 2000)
    })

    let randomTab = ["#FCD271", "#F78D3F", "#2BBBD8", "#E7475E", "#E7475E", "#cff09e", "#A593E0"];
    $("#second-section .icon").click(function() {
        $(this).css("background", randomTab[getRandomInt()])
    })

    function getRandomInt() {
        min = Math.ceil(0); //On commernce par zéro
        max = Math.floor(randomTab.length); //On parcourt le tableau (de type number)
        return Math.floor(Math.random() * (max - min)) + min;
    }


    $("#third-section .top-right").mouseenter(function() {
        $(this).removeClass("zoomPas").addClass("zoom")
    })

    $("#third-section .top-right").mouseout(function() {
        $(this).removeClass("zoom").addClass("zoomPas")
    })

    $("#third-section .bottom-left").mouseenter(function() {
        $(this).removeClass("zoomPas").addClass("zoom")
    })

    $("#third-section .bottom-left").mouseout(function() {
        $(this).removeClass("zoom").addClass("zoomPas")
    })

    let randomTabIcon = [];
    $("#second-section i").click(function() {
        // $(this).css("background", randomTabIcon[getRandomInt()])
        $(this).eq(0)
    })

    function getRandomInt() {
        min = Math.ceil(0); //On commeence par zéro
        max = Math.floor(randomTabIcon.length); //On parcourt le tableau (de type number)
        return Math.floor(Math.random() * (max - min)) + min;
    }


})