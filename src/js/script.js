let $header = $('header');

// sliders
$(document).ready(function () {
    $("#left-carousel").owlCarousel({
        animateOut: 'slideOutUp',
        animateIn: 'slideInUp',
        items: 1,
        margin: 0,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        dots: false,
        center: true,
        stagePadding: 0,
        autoWidth: false,

    });

    $("#right-carousel").owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'slideInDown',
        items: 1,
        margin: 0,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        center: true,
        dots: false,
        autoWidth: false,
    });
});

$(document).ready(function () {
    $('#carousel').owlCarousel({
        loop: true,
        nav: true,
        items: 4,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        navText: ["<img src='img/arrow-left.svg'>", "<img src='img/arrow-right.svg'>"],
        responsive: {
            0: {
                items: 1
            },
            640: {
                items: 2
            },
            768: {
                items: 3
            },
            1300: {
                items: 4
            }
        }
    })
});

//append to img svg
console.log($('.section-fourth .owl-carousel .item > img'))
$('.section-fourth .owl-carousel .item > img').wrap('<div class="item-img__wrapper"></div>');
$('.item .item-img__wrapper, .item-product__img-fluid').append($('#action-wrapper').html())

//open video

$(document).on('click', ".btn-play-video", function () {
    let videoWrapper = $($('#video-wrapper').html());
//remove video
    $('body').addClass('video-playing').append(videoWrapper)
    videoWrapper.click(() => {
        $('.video-wrapper').remove()
    });
});


// $(document).on('mouseenter', "header .menu .menu__list .menu__item ", function () {
//     $(this).children('ul').slideDown(200);
// });
//
// $(document).on('mouseout', "header .menu .menu__list .menu__item > *", function () {
//     console.log(this)
//     $(this).find('ul').slideUp(200);
// });
//
// $(document).ready(function () {
//     $(".menu__item").hover(function () {
//         var isHidden = $(".menu__item>ul").is(":hidden");
//         if (isHidden) {
//             $('.menu__item>ul').slideDown();
//         } else {
//             $('.menu__item>ul').slideUp();
//         }
//     });
//     $(".menu__item").on('mouseout', function () {
//         var isHidden = $(".menu__item>ul").is(":hidden");
//         if (isHidden) {
//             $('.menu__item>ul').slideDown();
//         } else {
//             $('.menu__item>ul').slideUp();
//         }
//     })
// });

//open form from Log In

$(document).on('click', '.login__wrapper', function () {
    $('.login-form').removeClass("hide")
});
$(document).on('click', '.login-form .overlay', function (e) {
    e.stopPropagation();
    $('.login-form').addClass("hide")
});

//validation

document.querySelector('.login-form').addEventListener('keyup', handleKeyup);

function handleKeyup(e) {
    const target = e.target;
    if (!target.value) {
        return;
    }
    if (target.value.trim().length > 2) {
        target.nextElementSibling.textContent = ""
    } else {
        target.nextElementSibling.textContent = "The e-mail address entered is invalid."
    }
}

//open search-box

$(document).on('click', 'header .search-icon', function () {
    $('.search-form').toggle(500).find('input').focus();
});

$(document).on('click', '.search-form .close-icon', function () {
    $('.search-form').toggle(700);
});

// button "top"
$(document).on('click', '.scroll-top', function () {
    $('html, body').animate({scrollTop: 0}, 800);
});


$(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
        $('.scroll-top').show(200);
    } else {
        $('.scroll-top').hide(200);

    }
});

//pop-up
$(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
        $('.pop-up-window').show(500).find('.content-box').addClass('zoom-in');
    }
});
$(document).on('click', '.pop-up-window .close-icon', function () {
    $('.pop-up-window').remove();
});

//burger-menu
$(document)
    .on('click', 'header .burger-menu', function () {
        $('.extra-menu').addClass('open');
        $header.toggleClass('open');
    })
    .on('click', '.extra-menu .close-icon, .extra-menu .overlay', function () {
        $('.extra-menu').removeClass('open');
    });

//top menu fixed
let lastScrollTop = 0;
$(window).scroll(function (event) {

    let st = $(this).scrollTop();

    if ($(window).scrollTop() > 100) {
        $header.addClass('scrolled');
    } else {
        $header.removeClass('scrolled');
    }

    if ($(window).scrollTop() > 350) {

        if (st > lastScrollTop) { //down
            $header.removeClass('fixed');
        } else { // upscroll code
            $header.addClass('fixed');
        }
    } else { //remove, if we close to top
        $header.removeClass('fixed');
    }
    lastScrollTop = st;
});

//view-box plus and minus
$(document).on('click', '.view-box .quantity-minus, .view-box .quantity-plus', function () {
    const input = $('.view-box .number-of-product');
    let value = parseInt(input.val()) + $(this).data('value');
    if (value < 0) {
        value = 0;
    }
    input.val(value);

});

//view-box typeof number

$(document).on('keydown keyup', '.view-box .number-of-product', function () {
    console.log();
    const input = $('.view-box .number-of-product');
    input.val(input.val().replace(/[^\d]/g, ''));
});

//close view-box
$(document).on('click', '.view-box .close-icon', function () {
    $('.view-box').remove();
});
$(document).on('click', '.view-box .overlay', function (e) {
    e.stopPropagation();
    $('.view-box').remove();
});

$(document).on('click', '.item-product .show-item', function () {
    const itemProduct = $(this).closest('.item-product');
    const id = itemProduct.data('id');

    productsSectionOne.forEach(itemProduct => {
        if (itemProduct.id === id) {
            const itemProductHtml = $('#item-product').html();
            const $itemProduct = $(itemProductHtml);
            $('body').append($itemProduct);

            $itemProduct.find('.first-col img').attr('src', itemProduct.img);
            $itemProduct.find('.product__title').html(itemProduct.title);
            $itemProduct.find('.product__price').html(itemProduct.price);
            $itemProduct.find('.product__description').html(itemProduct.description);

            return null;
        }
    });
});

//
const productsSectionOne = [
    {
        id: 1,
        img: '/img/shop-img-29-600x803.jpg',
        title: 'CREME Z',
        description: 'An dico accommodare ius, porro mnesarchum pro in. Cetero fierent urbanitas eam id, sed movet voluptua ut. Eu agam malorum nec. Eu has vide putent, dico option nominati no eam. Ea erant impetus consequuntur eos, velit congue vidisse eos ne. Est dicat doming te, inani eruditi iudicabit mei ea. Sed id prima soluta legimus.',
        price: '$46.00',
        type: 'Body Oil',
        stars: 5,

    }, {
        id: 2,
        img: '/img/shop-img-30-600x803.jpg',
        title: 'Balm',
        description: 'An dico accommodare ius, porro mnesarchum pro in. Cetero fierent urbanitas eam id, sed movet voluptua ut. Eu agam malorum nec. Eu has vide putent, dico option nominati no eam. Ea erant impetus consequuntur eos, velit congue vidisse eos ne. Est dicat doming te, inani eruditi iudicabit mei ea. Sed id prima soluta legimus.',
        price: '$25.00',
        type: 'Body Oil',
        stars: 5,

    }, {
        id: 3,
        img: '/img/shop-img-31-600x803.jpg',
        title: 'EASY SPRAY',
        description: 'An dico accommodare ius, porro mnesarchum pro in. Cetero fierent urbanitas eam id, sed movet voluptua ut. Eu agam malorum nec. Eu has vide putent, dico option nominati no eam. Ea erant impetus consequuntur eos, velit congue vidisse eos ne. Est dicat doming te, inani eruditi iudicabit mei ea. Sed id prima soluta legimus.',
        price: '$28.00',
        type: 'Body Oil',
        stars: 5,

    }, {
        id: 4,
        img: '/img/shop-img-63-600x803.jpg',
        title: 'TINT BALM',
        description: 'An dico accommodare ius, porro mnesarchum pro in. Cetero fierent urbanitas eam id, sed movet voluptua ut. Eu agam malorum nec. Eu has vide putent, dico option nominati no eam. Ea erant impetus consequuntur eos, velit congue vidisse eos ne. Est dicat doming te, inani eruditi iudicabit mei ea. Sed id prima soluta legimus.',
        price: '$25.00',
        type: 'Body Oil',
        stars: 5,

    }, {
        id: 5,
        img: '/img/shop-img-18-600x803.jpg',
        title: 'A DREAM',
        description: 'An dico accommodare ius, porro mnesarchum pro in. Cetero fierent urbanitas eam id, sed movet voluptua ut. Eu agam malorum nec. Eu has vide putent, dico option nominati no eam. Ea erant impetus consequuntur eos, velit congue vidisse eos ne. Est dicat doming te, inani eruditi iudicabit mei ea. Sed id prima soluta legimus.',
        price: '$32.00',
        type: 'Body Oil',
        stars: 5,

    }, {
        id: 6,
        img: '/img/shop-img-32-600x803.jpg',
        title: 'LOTION K',
        description: 'An dico accommodare ius, porro mnesarchum pro in. Cetero fierent urbanitas eam id, sed movet voluptua ut. Eu agam malorum nec. Eu has vide putent, dico option nominati no eam. Ea erant impetus consequuntur eos, velit congue vidisse eos ne. Est dicat doming te, inani eruditi iudicabit mei ea. Sed id prima soluta legimus.',
        price: '$52.00',
        type: 'Body Oil',
        stars: 5,

    }, {
        id: 7,
        img: '/img/shop-img-33-600x803.jpg',
        title: 'DROPS FOR EYES',
        description: 'An dico accommodare ius, porro mnesarchum pro in. Cetero fierent urbanitas eam id, sed movet voluptua ut. Eu agam malorum nec. Eu has vide putent, dico option nominati no eam. Ea erant impetus consequuntur eos, velit congue vidisse eos ne. Est dicat doming te, inani eruditi iudicabit mei ea. Sed id prima soluta legimus.',
        price: '$18.00',
        type: 'Body Oil',
        stars: 5,

    }, {
        id: 8,
        img: '/img/shop-img-34-600x803.jpg',
        title: 'LIPSTICK MAT',
        description: 'An dico accommodare ius, porro mnesarchum pro in. Cetero fierent urbanitas eam id, sed movet voluptua ut. Eu agam malorum nec. Eu has vide putent, dico option nominati no eam. Ea erant impetus consequuntur eos, velit congue vidisse eos ne. Est dicat doming te, inani eruditi iudicabit mei ea. Sed id prima soluta legimus.',
        price: '$25.00',
        type: 'Body Oil',
        stars: 5,

    }, {
        id: 9,
        img: '/img/shop-img-18-600x803.jpg',
        title: 'S DREAM',
        description: 'An dico accommodare ius, porro mnesarchum pro in. Cetero fierent urbanitas eam id, sed movet voluptua ut. Eu agam malorum nec. Eu has vide putent, dico option nominati no eam. Ea erant impetus consequuntur eos, velit congue vidisse eos ne. Est dicat doming te, inani eruditi iudicabit mei ea. Sed id prima soluta legimus.',
        price: '$32.00',
        type: 'Body Oil',
        stars: 5,

    }
];
