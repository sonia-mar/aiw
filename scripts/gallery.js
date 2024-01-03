$(document).ready(function() {
    $('#buttonA').addClass('test-clicked');
    $('#buttonB').removeClass('test-clicked');
    $('#buttonC').removeClass('test-clicked');
    $('#buttonD').removeClass('test-clicked');
    $('#buttonE').removeClass('test-clicked');
    $('#buttonF').removeClass('test-clicked');
    $('#testA').removeClass('hidden');
    $('#testB').addClass('hidden');
    $('#testC').addClass('hidden');
    $('#testD').addClass('hidden');
    $('#testE').addClass('hidden');
    $('#testF').addClass('hidden');
  });

$('#buttonA').click(function() {
    $('#buttonA').addClass('test-clicked');
    $('#buttonB').removeClass('test-clicked');
    $('#buttonC').removeClass('test-clicked');
    $('#buttonD').removeClass('test-clicked');
    $('#buttonE').removeClass('test-clicked');
    $('#buttonF').removeClass('test-clicked');
    $('#testA').removeClass('hidden');
    $('#testB').addClass('hidden');
    $('#testC').addClass('hidden');
    $('#testD').addClass('hidden');
    $('#testE').addClass('hidden');
    $('#testF').addClass('hidden');
})

$('#buttonB').click(function() {
    $('#buttonA').removeClass('test-clicked');
    $('#buttonB').addClass('test-clicked');
    $('#buttonC').removeClass('test-clicked');
    $('#buttonD').removeClass('test-clicked');
    $('#buttonE').removeClass('test-clicked');
    $('#buttonF').removeClass('test-clicked');
    $('#testA').addClass('hidden');
    $('#testB').removeClass('hidden');
    $('#testC').addClass('hidden');
    $('#testD').addClass('hidden');
    $('#testE').addClass('hidden');
    $('#testF').addClass('hidden');
})




$('#buttonC').click(function() {
    $('#buttonA').removeClass('test-clicked');
    $('#buttonB').removeClass('test-clicked');
    $('#buttonC').addClass('test-clicked');
    $('#buttonD').removeClass('test-clicked');
    $('#buttonE').removeClass('test-clicked');
    $('#buttonF').removeClass('test-clicked');
    $('#testA').addClass('hidden');
    $('#testB').addClass('hidden');
    $('#testC').removeClass('hidden');
    $('#testD').addClass('hidden');
    $('#testE').addClass('hidden');
    $('#testF').addClass('hidden');
})



$('#buttonD').click(function() {
    $('#buttonA').removeClass('test-clicked');
    $('#buttonB').removeClass('test-clicked');
    $('#buttonC').removeClass('test-clicked');
    $('#buttonD').addClass('test-clicked');
    $('#buttonE').removeClass('test-clicked');
    $('#buttonF').removeClass('test-clicked');
    $('#testA').addClass('hidden');
    $('#testB').addClass('hidden');
    $('#testC').addClass('hidden');
    $('#testD').removeClass('hidden');
    $('#testE').addClass('hidden');
    $('#testF').addClass('hidden');
})



$('#buttonE').click(function() {
    $('#buttonA').removeClass('test-clicked');
    $('#buttonB').removeClass('test-clicked');
    $('#buttonC').removeClass('test-clicked');
    $('#buttonD').removeClass('test-clicked');
    $('#buttonE').addClass('test-clicked');
    $('#buttonF').removeClass('test-clicked');
    $('#testA').addClass('hidden');
    $('#testB').addClass('hidden');
    $('#testC').addClass('hidden');
    $('#testD').addClass('hidden');
    $('#testE').removeClass('hidden');
    $('#testF').addClass('hidden');
})

$('#buttonF').click(function() {
    $('#buttonA').removeClass('test-clicked');
    $('#buttonB').removeClass('test-clicked');
    $('#buttonC').removeClass('test-clicked');
    $('#buttonD').removeClass('test-clicked');
    $('#buttonE').removeClass('test-clicked');
    $('#buttonF').addClass('test-clicked');
    $('#testA').addClass('hidden');
    $('#testB').addClass('hidden');
    $('#testC').addClass('hidden');
    $('#testD').addClass('hidden');
    $('#testE').addClass('hidden');
    $('#testF').removeClass('hidden');
})
