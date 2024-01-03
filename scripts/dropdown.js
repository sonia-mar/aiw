$('#analysis-up').on('click', function() {
    $('#analysis-container').addClass('accessible-hidden');
    $('#analysis-up').addClass('hidden');
    $('#analysis-down').removeClass('hidden');
});
$('#man-acc-up').on('click', function() {
    $('#man-acc-container').addClass('accessible-hidden');
    $('#man-acc-up').addClass('hidden');
    $('#man-acc-down').removeClass('hidden');
});
$('#analysis-down').on('click', function() {
    $('#analysis-container').removeClass('accessible-hidden');
    $('#analysis-up').removeClass('hidden');
    $('#analysis-down').addClass('hidden');
});
$('#man-acc-down').on('click', function() {
    $('#man-acc-container').removeClass('accessible-hidden');
    $('#man-acc-up').removeClass('hidden');
    $('#man-acc-down').addClass('hidden');
});
