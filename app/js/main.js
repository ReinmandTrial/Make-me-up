// const { default: Swiper } = require("swiper");

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
new Swiper ('.swiper-container', {
   // навигация, кнопки.swiper-container--second
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },  
      pagination: {
         el: '.swiper-pagination',
         type: 'bullets',
      },
      mousewheel: { 
         sensitivity: 1,
      },
      breakpoints: {
         769: {
            spaceBetween: 20,
        },
        576: {
           slidesPerView: 'auto',
        },
         320: {
            slidesPerView: 2,
            spaceBetween: 8,
        }
      },
     autoHeight: true, 
     slidesPerView: 3, 
     watchOverflow: true, 
     loop: true

});

new Swiper ('.recommendation-container', {
   navigation: {
      prevEl: '.blog__swiper-btn-next',
      nextEl: '.blog__swiper-btn-prev',
   },   
   pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
   },
   mousewheel: { 
      sensitivity: 1,
   },
   breakpoints: {
      769: {
         spaceBetween: 20,
     },
     576: {
        slidesPerView: 'auto',
     },
      320: {
         slidesPerView: 2,
         spaceBetween: 8,
     }
   },
   slidesPerView: 4, 
   watchOverflow: true, 
   spaceBetween: 20, 
   loop: true,
   mousewheelControl: false,   
})


new Swiper ('.blog__slider', {
   navigation: {
      prevEl: '.blog__swiper-btn-next',
      nextEl: '.blog__swiper-btn-prev',
   },    
   pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
   },
   mousewheel: { 
      sensitivity: 1,
   },
   // autoHeight: true, 
   slidesPerView: 3, 
   watchOverflow: true, 
   spaceBetween: 20, 
   loop: true,
   mousewheelControl: false,     
   breakpoints:{
      768:{
         slidesPerView: 3
      },
      320: {
            slidesPerView: 1
      }
   } 
})
new Swiper ('.swiper-container--second', {
   // навигация, кнопки
      navigation: {
         nextEl: '.swiper-button-next--second',
         prevEl: '.swiper-button-prev--second',
      },  
      pagination: {
         el: '.swiper-pagination',
         type: 'bullets',
      },
      mousewheel: { 
         sensitivity: 1,
      },
      autoHeight: true, 
      slidesPerView: 3, 
      watchOverflow: true, 
      spaceBetween: 20, 
      loop: true,     
      breakpoints:{
         768:{
            slidesPerView: 3
         },
         320: {
               slidesPerView: 1
         }
      } 
});
new Swiper ('.photogallery__swiper-container', {
   navigation: {
      nextEl: '.blog__swiper-btn-next',
      prevEl: '.blog__swiper-btn-prev',
   },
   mousewheel: { 
      sensitivity: 1,
   },    
   pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
   },
   autoHeight: true, 
   slidesPerView: 'auto', 
   watchOverflow: true, 
   spaceBetween: 20, 
   // loop: true
   breakpoints:{ 
      576: {
         slidesPerView: 'auto'
      },
      435: {
         slidesPerView: 4
      },
      375: {
         slidesPerView: 3.5,
         spaceBetween: 10
      },
      320: {
         slidesPerView: 3,
         spaceBetween: 15
      }
   }
});
new Swiper ('.catalog__pagination-slider', {
     navigation: {
       nextEl: '.catalog__swiper-button-next',
       prevEl: '.catalog__swiper-button-prev',
     },
     mousewheel: { 
       sensitivity: 1,
     },
     autoHeight: true, 
     slidesPerView: 3, 
     spaceBetween: 14, 
});
new Swiper ('.search__noresult-swiper-container', {
   // навигация, кнопки
     navigation: {
       nextEl: '.search__noresult-swiper-button-next',
       prevEl: '.search__noresult-swiper-button-prev',
     },  
     mousewheel: { 
       sensitivity: 1,
     },
     autoHeight: true, 
     spaceBetween: 20, 
     slidesPerView: 4,  
});

//popup
   //popup open
   $('.btn-popup').on('click',function(){
      var btn = $(this);
      var popups = $('body').find('popup');
      $(popups).each(function(){
         $(this).fadeOut();
      })
      if(btn.hasClass('btn-search')){
         $('.popup-search').fadeIn();
      }
   })
   //popup open end
   //popup close
   $('.popup-close').on('click',function(){
      $(this).closest('.popup').fadeOut();
      if($(this).closest('.popup').hasClass('popup-search')){
         $(this).closest('.popup').find('.popup-search__input').val('');
         //test
            $(this).closest('.popup').find('.popup-search__block').removeClass('open');
            $(this).closest('.popup').find('.popup-search__block').find('.popup-search__body').fadeOut();
         //test end
      }
   })
   
   $(document).on('click', function (e) {
      if (!$(e.target).closest(".btn-popup").length && !$(e.target).closest(".popup__content").length) {
         $('.popup').fadeOut();
      }
      e.stopPropagation();
   });
   //popup close end
   //popup search test
      $($('.popup-search').find('.icon-search')).on('click',function(){
         $(this).closest('.popup-search__block').addClass('open');
         $(this).closest('.popup-search__block').find('.popup-search__body').fadeIn();
      })
   //popup search text end
//popup end

//page pagination
      $('.pagin__cart').on('click',function(){
         var btn = $(this);
         var block = btn.closest('.pagin__block');
         var btns = block.find('.pagin__cart');

         $(btns).each(function(){
            $(this).removeClass('active');
         })

         btn.addClass('active');
      })
//page pagination end

//toggle block
$('.toggle-btn').on('click',function(){
   var btn = $(this);
   var block = btn.closest('.toggle-block');
   var body = block.find('.toggle-body');
   var icon = block.find('.icon');

   block.toggleClass('open');
   icon.toggleClass('open');
})
//toggle block end

//slider

$(document).ready(function () {
   if ($('body').find('div').hasClass('filter__slider')) {
       // alert();
       var slider = $('.slider');

       noUiSlider.create(slider[0], {
           start: [0, 8],
           connect: true,
           range: {
               'min': 0,
               'max': 8
           }
       });
       
   }
})
//slider end

//burger mobile 
   $('.btn-burger').on('click',function(){
      $('.nav__burger').addClass('open');
      $('.nav__burger-bg').fadeIn();
   })
   $('.btn-burger-close').on('click',function(){
      $('.nav__burger').removeClass('open');
      $('.nav__burger-bg').fadeOut();
   })
   
   $(document).on('click', function (e) {
      if (!$(e.target).closest(".nav__burger").length && !$(e.target).closest(".btn-burger").length) {
         $('.nav__burger').removeClass('open');
         $('.nav__burger-bg').fadeOut();
      }
      e.stopPropagation();
   });
//burger mobile end 

$('.btn-favorites').on('click',function(){
   $('.favorites').fadeIn();
   $('.favorites').addClass('open');
})
$('.btn-favorites__close').on('click',function(){
   $(this).closest('.favorites').fadeOut();
   $(this).closest('.favorites').removeClass('open');
})
$(document).on('click', function (e) {
   if (!$(e.target).closest(".btn-favorites").length && !$(e.target).closest(".favorites__body").length) {
      $('.favorites').fadeOut();
      $('.favorites').removeClass('open');
   }
   e.stopPropagation();
});


// amount 
   $('.amount__plus').on('click',function(){
      var btn = $(this);
      var Block = btn.closest('.amount');
      var kol = Block.find('.amount__input').val();
      if(kol<= 100){
         kol++;
      }
      Block.find('.amount__input').val(kol);
   })
   $('.amount__minus').on('click',function(){
      var btn = $(this);
      var Block = btn.closest('.amount');
      var kol = Block.find('.amount__input').val();
      if(kol > 0){
         kol--;
      }
      Block.find('.amount__input').val(kol);
   })
//amount end 


//плавная прокрутка
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
