var width = $(window).width()
window.onscroll = function () {
    if (width >= 1000) {
        if (
            document.body.scrollTop > 80 ||
            document.documentElement.scrollTop > 80
        ) {
            $('#header').css('background', '#fff')
            $('#header').css('color', '#000')
            $('#header').css('box-shadow', '0px 0px 20px rgba(0,0,0,0.09)')
            $('#header').css('padding', '4vh 4vw')
            $('#navigation a').hover(
                function () {
                    $(this).css('border-bottom', '2px solid rgb(6, 220, 248)')
                },
                function () {
                    $(this).css('border-bottom', '2px solid transparent')
                }
            )
        } else {
            $('#header').css('background', 'transparent')
            $('#header').css('color', '#fff')
            $('#header').css('box-shadow', '0px 0px 0px rgba(0,0,0,0)')
            $('#header').css('padding', '6vh 4vw')
            $('#navigation a').hover(
                function () {
                    $(this).css('border-bottom', '2px solid #fff')
                },
                function () {
                    $(this).css('border-bottom', '2px solid transparent')
                }
            )
        }
    }
}

// Zoom in package image
$('.product-img--main')
    // tile mouse actions
    .on('mouseover', function () {
        $(this)
            .children('.product-img--main__image')
            .css({ transform: 'scale(' + $(this).attr('data-scale') + ')' })
    })
    .on('mouseout', function () {
        $(this)
            .children('.product-img--main__image')
            .css({ transform: 'scale(1)' })
    })
    .on('mousemove', function (e) {
        $(this)
            .children('.product-img--main__image')
            .css({
                'transform-origin':
                    ((e.pageX - $(this).offset().left) / $(this).width()) *
                        100 +
                    '% ' +
                    ((e.pageY - $(this).offset().top) / $(this).height()) *
                        100 +
                    '%',
            })
    })
    // tiles set up
    .each(function () {
        $(this)
            // add a image container
            .append('<div class="product-img--main__image"></div>')
            // set up a background image for each tile based on data-image attribute
            .children('.product-img--main__image')
            .css({
                'background-image': 'url(' + $(this).attr('data-image') + ')',
            })
    })

function play(video) {
    video.play()
}

function pause(video) {
    video.pause()
    video.currentTime = 0
}

function mouseout(video) {
    video.currentTime = 0
}

function show(element) {
    var id = element.attr('ref-id')
    var children = document.getElementById(id).parentElement.children
    for (const child of children) {
        if (child.id == id) {
            $('#' + child.id).removeClass('hidden-display')
        } else {
            $('#' + child.id).addClass('hidden-display')
        }
    }

    var imgLink = 'assets/ads/bg-' + id + '.png'
    $('#project-right-panel').css(
        'background',
        `linear-gradient(0deg,rgba(65, 65, 65, 0.8),rgba(65, 65, 65, 0.8)), url('${imgLink}') center center`
    )
}

function magnify(imglink) {
    $('#img_here').css('background', `url('${imglink}') center center`)
    $('#magnify').css('display', 'flex')
    $('#magnify').addClass('animated fadeIn')
    setTimeout(function () {
        $('#magnify').removeClass('animated fadeIn')
    }, 800)
}

function closemagnify() {
    $('#magnify').addClass('animated fadeOut')
    setTimeout(function () {
        $('#magnify').css('display', 'none')
        $('#magnify').removeClass('animated fadeOut')
        $('#img_here').css('background', `url('') center center`)
    }, 800)
}

setTimeout(function () {
    $('#loading').addClass('animated fadeOut')
    setTimeout(function () {
        $('#loading').removeClass('animated fadeOut')
        $('#loading').css('display', 'none')
    }, 800)
}, 1650)

$(document).ready(function () {
    $('a').on('click', function (event) {
        if (this.hash !== '' && $(this.hash).offset()) {
            event.preventDefault()
            var hash = this.hash
            $('body,html').animate(
                {
                    scrollTop: $(hash).offset().top,
                },
                1800,
                function () {
                    window.location.hash = hash
                }
            )
        }
    })
})
