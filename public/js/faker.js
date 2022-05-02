$('.user-card').click(()=>{
    window.location.href ='http://localhost:5000/datafaker/fakeusers';
});

$('.lead-card').click(()=>{
    window.location.href = 'http://localhost:5000/datafaker/fakeleads';
});

$('.deal-card').click(()=>{
    window.location.href = 'http://localhost:5000/datafaker/fakedeals';
});

$('.link').click(()=>{
    window.location.href = 'http://localhost:5000/datafaker';
})

$( "#fakeuser" ).submit(function( event ) {
    alert( "Handler for .submit() called." );
    event.preventDefault();
});