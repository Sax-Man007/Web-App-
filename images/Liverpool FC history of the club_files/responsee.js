jQuery(document).ready(function() {
   //Responsee nav   
  $('.top-nav > ul > li ul').each(function(index, element) {
    var count = $(element).find('li').length;
    var content = '<span class="count-number"> ' + count + '</span>';
    $(element).closest('li').children('a').append(content);
  });
  $('.nav-button').click(function() { 
    $('.top-nav ul').toggleClass('show-menu', 'slow');
  }); 
});