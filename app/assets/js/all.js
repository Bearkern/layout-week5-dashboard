let current = window.location.pathname.split('/').pop();
if ( current === '' ) {
  current = 'index.html';
}
$('.nav-link').each(function(){
  let href = $(this).attr('href');
  if ( href.indexOf(current) >= 0 ) {
    $(this).addClass('active');
  }
})