
//select
$('.select__header').on('click',function(){
   var btn = $(this);
   var select = btn.closest('.select');
   var selectS = select.closest('.nav').find('.select');
   if(select.hasClass('nav__item') && !select.hasClass('open')){
      $(selectS).each(function(){
         $(this).removeClass('open');
         $(this).find('.select__body').fadeOut();
      })
   }
   select.toggleClass('open');
   if(select.hasClass('open')){
      select.find('.select__body').fadeIn();
   }else{
      select.find('.select__body').fadeOut();
   }
})

   //нажатие вне селекта
   $(document).on('click', function (e) {
      if (!$(e.target).closest(".select__body").length && !$(e.target).closest(".select__header").length) {
         $('.select.open').find('.select__body').fadeOut();
         $('.select.open').removeClass('open');
      }
      e.stopPropagation();
   });
   //нажатие вне селекта

//select end
