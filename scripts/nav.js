$(window).on('resize', function() {
    // Narrowest screens:
    if (window.matchMedia('(max-width: 910px)').matches) {
        $('#hamburger-menu').removeClass('accessible-hidden');
        $('#nav-menu').addClass('accessible-hidden');
    }
    if (window.matchMedia('(min-width: 910px)').matches) {
        $('#hamburger-menu').addClass('accessible-hidden');
        $('#nav-menu').removeClass('accessible-hidden');
    }
});

$(document).ready(function() {
    // Narrowest screens:
    if (window.matchMedia('(max-width: 910px)').matches) {
        $('#hamburger-menu').removeClass('accessible-hidden');
        $('#nav-menu').addClass('accessible-hidden');
    }
  });

$('#hamburger-menu').click(function() {
    if ($('#nav-menu').hasClass('accessible-hidden')) {
        $('#nav-menu').removeClass('accessible-hidden');
    } else {
        $('#nav-menu').addClass('accessible-hidden');
    }
})
