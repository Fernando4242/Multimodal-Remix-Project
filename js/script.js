//Animation on Cards
var dark = false

// $(".card").addClass("animated bounce")
$("#local-one").addClass("animated zoomIn")
$("#local-two").addClass("animated zoomIn")

//Animation on Main Content
$(".main-content").addClass("animated fadeInRight")

// Functions For Articles
function home() {
    $("#local-article").addClass("d-none")
    $("#local-one").addClass("d-none")
    $("#local-two").addClass("d-none")
}

function articleone() {
    $("#local-article").removeClass("d-none")
    $("#local-one").removeClass("d-none")
    $("#local-two").addClass("d-none")
}

function articletwo() {
    $("#local-article").removeClass("d-none")
    $("#local-one").addClass("d-none")
    $("#local-two").removeClass("d-none")
}

//Implement those functions
$(".article-home").on("click", home)
$(".article-one-link").on("click", articleone)
$(".article-two-link").on("click", articletwo)

$("#one-art").on("click", articleone)
$("#two-art").on("click", articletwo)

//Weather API
$(document).ready(() => {
    //WRITE MY NAME IN EACH ARTICLE and MY LIST OF AUTOMATED STUFF HUEHUE CAUSE ITS COOL
    $(".author").text(`By Fernando Portillo, NewsFake`)
    $(".img-author img").attr(`src`, `images/dont_worry_about_this_folder/me.jpg`)
    $(".source").text("Credits")

    function getWeatherJSON() {

        setInterval(() => {
            //GET THE TIME AND DATE
            var today = new Date()
            var h = today.getHours()
            var m = today.getMinutes()
            var s = today.getSeconds()
            dd = "AM"

            //CONVERT TO 12 HOUR
            if (h >= 12) {
                h = h - 12
                dd = "PM"
            } else if (h == 0) {
                h = 12
            }

            //ADDS ZERO WHEN ITS SINGLE DIGIT
            h = checkTime(h);
            m = checkTime(m);
            s = checkTime(s);

            //DISPLAYS HOUR
            $(".hour").text(`${h} : ${m} : ${s} ${dd}`)

        var today = new Date()
        var date = new Date().toDateString()
        var h = today.getHours()

        $(".time").text(date)

        if (6 <= h && h <= 10) {
            //Morning
            console.log("Morning")
            $(".jumbotron").css("background-image", "url(" + "images/jumbo/morning.jpg" + ")")
        } else if (11 <= h && h <= 17) {
            //day
            console.log("Day")
            $(".jumbotron").css("background-image", "url(" + "images/jumbo/day.jpg" + ")")
        } else if (h >= 17) {
            //night
            $(".jumbotron").css("background-image", "url(" + "images/jumbo/night.jpg" + ")")
            console.log("Night")
        }
    })
}

    function checkTime(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    function getImageAd() {
        const width = 900
        const height = 250
        const collectionID = 790642

        const url = `https://source.unsplash.com/collection/${collectionID}/${width}x${height}`
        fetch(url).then((res) => {
            var imageURL = res.url
            $("#headerAd").attr(`src`, `${imageURL}`)
        })
    }


    getImageAd()
    getWeatherJSON()

    $(".social").hover(function () {
        $(this).addClass("animated pulse")
        $(this).css("padding", "30px")
    }, function () {
        $(this).removeClass("animated pulse")
        $(this).css("padding", "20px")
    })

    //LAST MODIFIED 
    var modified = document.lastModified
    $(".last-modified").text(`Last updated ${modified}`)

    //DarkMode
    function DarkMode() {
        if (dark === true) {
            $("#dark-on-off").addClass("btn-dark")
            $("#dark-on-off").removeClass("btn-light")
            $("body").removeClass("dark-mode")
            $("#dark-on-off").text("Dark Mode")
            dark = false
        } else if (dark === false) {
            $("#dark-on-off").addClass("btn-light")
            $("#dark-on-off").removeClass("btn-dark")
            $("body").addClass("dark-mode")
            dark = true
            $("#dark-on-off").text("Light Mode")
        }
    }

    $("#dark-on-off").on("click", DarkMode)
})

//Makes overlay in home page appear or disappear
setInterval(() => {
    var scrolly = window.pageYOffset / 600
    $(".card-img-overlay").css("opacity", `${scrolly}`)
})

//The Sources I Used
function openSource() {
    $("#display-sources").removeClass("d-none")
}

function closeSource() {
    $("#display-sources").addClass("d-none")
}

$(".source").on("click", openSource)
$("#close-source").on("click", closeSource)


//Autoplay or Not Based on Width
var htmlWidth = $(window).width()
var Source = $(".video-gif").attr("src")
var newSrc = Source.slice(0, 42)
console.log(htmlWidth)

if (htmlWidth > 900) {
    Source = $(".video-gif").attr("src", Source + "autoplay=1")
}

if (htmlWidth <= 900) {
    Source = $(".video-gif").attr("src", newSrc)
}