(function($){
  $(document).ready(function(){
  //open popup
  $('.popup-trigger,.popup-trigger-small,.popup-trigger-large').on('click', function(event){
    $('.popup').addClass('is-visible');
    if($(event.target).is('.popup-trigger-small')){
      $('.popup-container').css("width","200px");
    }
    else if($(event.target).is('.popup-trigger-large')){
      $('.popup-container').css("width","700px");
    }
    else
    {
      $('.popup-container').css("width","400px");
    }
  });

  //close popup
  $('.popup').on('click', function(event){
    if( $(event.target).is('.popup-close') || $(event.target).is('.popup') ) {
      $('.popup').removeClass('is-visible');
    }
  });
});
})(jQuery);


  // jQuery for popup using jQuery ui

 //  $( "#dialog" ).dialog({
 //    autoOpen: false,
 //    title: 'PopUp',
 //  });
 //  $("button").click(function(){
 //    // console.log("click");
 //    $( "#dialog" ).dialog('open');
 //  });
 //  $('html').bind('click',function(event){
 //    if(
 //     $('#dialog').dialog('isOpen')
 //     && !$(event.target).is('.ui-dialog, button')
 //     )
 //    {
 //     $('#dialog').dialog('close');
 //   }
 // }
 // );
