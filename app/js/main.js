// const { default: Swiper } = require("swiper");

// const { each } = require("jquery");

//select
$('.select__header').on('click', function () {
	var btn = $(this);
	var select = btn.closest('.select');
	var selectS = select.closest('.nav').find('.select');
	var selectBlock = select.parent();
	var selectBlockItem = selectBlock.find('.select');

	if(selectBlock.hasClass('js-select-block')){
		$(selectBlockItem).each(function(){
			$(this).removeClass('open');
			$(this).find('.select__body').fadeOut();
		})
	}

	if (select.hasClass('nav__item') && !select.hasClass('open')) {
		$(selectS).each(function () {
			$(this).removeClass('open');
			$(this).find('.select__body').fadeOut();
		})
	}
	select.toggleClass('open');
	if (select.hasClass('open')) {
		select.find('.select__body').fadeIn();
	} else {
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
new Swiper('.swiper-container', {
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

new Swiper('.recommendation-container', {
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


new Swiper('.blog__slider', {
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
	breakpoints: {
		768: {
			slidesPerView: 3
		},
		320: {
			slidesPerView: 1
		}
	}
})
new Swiper('.swiper-container--second', {
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
	breakpoints: {
		768: {
			slidesPerView: 3
		},
		320: {
			slidesPerView: 1
		}
	}
});
new Swiper('.photogallery__swiper-container', {
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
	breakpoints: {
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
new Swiper('.catalog__pagination-slider', {
	navigation: {
		nextEl: '.catalog__swiper-button-next',
		prevEl: '.catalog__swiper-button-prev',
	},
	mousewheel: {
		sensitivity: 1,
	},
	// autoHeight: true,
	slidesPerView: 3,
	spaceBetween: 14,
});
new Swiper('.search__noresult-swiper-container', {
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
	slidesPerView: 5,

	breakpoints: {
		991: {
			slidesPerView: 4,
		},
		576: {
			slidesPerView: 3,
		},
		320: {
			slidesPerView: 2,
			spaceBetween: 10
		},
	}
});
new Swiper('.prodact-slider__container', {
	// навигация, кнопки
	navigation: {
		nextEl: '.prodact-slider__button-next',
		prevEl: '.prodact-slider__button-prev',
	},
	mousewheel: {
		sensitivity: 1,
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
	},
	autoHeight: true,
	spaceBetween: 20,
	slidesPerView: 5,

	breakpoints: {
		991: {
			slidesPerView: 5,
		},
		576: {
			slidesPerView: 3,
		},
		320: {
			slidesPerView: 2,
			spaceBetween: 10
		},
	}
});
new Swiper('.prodact-slider__container-second', {
	// навигация, кнопки
	navigation: {
		nextEl: '.prodact-slider-second__button-next',
		prevEl: '.prodact-slider-second__button-prev',
	},
	mousewheel: {
		sensitivity: 1,
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
	},
	autoHeight: true,
	spaceBetween: 20,
	slidesPerView: 5,

	breakpoints: {
		991: {
			slidesPerView: 4,
		},
		768: {
			slidesPerView: 3,
		},
		576: {
			slidesPerView: 2,
		},
		320: {
			slidesPerView: 1,
			spaceBetween: 10
		},
	}
});

var galleryImg = [];
$('.gallery-slider img').each(function(){
	var src = $(this).attr('src');
	galleryImg.push(src);
})
new Swiper('.gallery-slider', {
	// навигация, кнопки
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	mousewheel: false,
	slidesPerView: 1,
	loop:true,
	pagination: {
      el: '#swiper-pagination',
			clickable: true,
        renderBullet: function (index, className) {
          return '<div class="' + className + '"><img src="' + galleryImg[index] + '" alt=""></div>';
        },
    },

	breakpoints: {
		768: {
			navigation: true,
		},
		320: {
			navigation: false
		},
	}
});
$(".js-scroll").mCustomScrollbar();
//popup
//popup open
$('.btn-popup').on('click', function () {
	var btn = $(this);
	var popups = $('body').find('popup');
	$(popups).each(function () {
		$(this).fadeOut();
	})
})
//popup open end
//popup close
$('.popup-close').on('click', function () {
	$(this).closest('.popup').fadeOut();
})

$(document).on('click', function (e) {
	if (!$(e.target).closest(".btn-popup").length && !$(e.target).closest(".popup__content").length) {
		$('.popup').fadeOut();
	}
	e.stopPropagation();
});
//popup close end

// // sorting popup start
// $('.catalog__sort-btn').on('click', function () {
// 	$(this).find('.catalog__sort-mobile').addClass(open)
// });
// // sorting popup end


//search test
$('.btn-search').on('click', function () {
	$(this).closest('.header__body').toggleClass('search-open');

})
$(document).on('click', function (e) {
	if (!$(e.target).closest(".btn-search").length) {
		$('.header__body').removeClass('search-open');
	}
	e.stopPropagation();
});
//search text end
//popup end

//page pagination
$('.pagin__cart').on('click', function () {
	var btn = $(this);
	var block = btn.closest('.pagin__block');
	var btns = block.find('.pagin__cart');

	$(btns).each(function () {
		$(this).removeClass('active');
	})

	btn.addClass('active');
})
//page pagination end

//toggle block
$('.toggle-btn').on('click', function () {
	var btn = $(this);
	var block = btn.closest('.toggle-block');
	var body = block.find('.toggle-body');
	var icon = block.find('.toggle-icon');

	block.toggleClass('open');
	icon.toggleClass('open');
})
//toggle block end

// accordion start
$(document).ready(function () {
	$('.accordion__head').click(function (event) {
		$(this).closest('.accordion').toggleClass('open');
		$(this).closest('.accordion').find('.accordion__body').slideToggle(300)
	});
});
// accordion end


//slider

$(document).ready(function () {
	if ($('body').find('div').hasClass('filter__slider')) {
		// alert();
		var slider = document.getElementById('slider');

		noUiSlider.create(slider, {
			start: [4, 8],
			connect: true,
			range: {
				'min': 4,
				'max': 8
			}
		});
		var dateValues = [
			document.getElementById('slider-lower'),
			document.getElementById('slider-upper')
		];

		slider.noUiSlider.on('update', function (values, handle) {
			dateValues[handle].innerHTML = values[handle];
		});

	}
})
$(document).ready(function () {
	if ($('body').find('div').hasClass('filter__slider')) {
		// alert();
		var slider = document.getElementById('slider-mobile');

		noUiSlider.create(slider, {
			start: [4, 8],
			connect: true,
			range: {
				'min': 4,
				'max': 8
			}
		});
		var dateValues = [
			document.getElementById('slider-lower-mobile'),
			document.getElementById('slider-upper-mobile')
		];

		slider.noUiSlider.on('update', function (values, handle) {
			dateValues[handle].innerHTML = values[handle];
		});

	}
})
//slider end

//burger mobile 
$('.btn-burger').on('click', function () {
	$('.nav__burger').addClass('open');
	$('.nav__burger-bg').fadeIn();
})
$('.btn-burger-close').on('click', function () {
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

$('.btn-favorites').on('click', function () {
	$('.favorites').fadeIn();
	$('.favorites').addClass('open');
})
$('.btn-favorites__close').on('click', function () {
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
$('.amount__plus').on('click', function () {
	var btn = $(this);
	var Block = btn.closest('.amount');
	var kol = Block.find('.amount__input').val();
	if (kol <= 100) {
		kol++;
	}
	Block.find('.amount__input').val(kol);
})
$('.amount__minus').on('click', function () {
	var btn = $(this);
	var Block = btn.closest('.amount');
	var kol = Block.find('.amount__input').val();
	if (kol > 0) {
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

//drop


// amount  prodact-page
$('.prodact-card__plus').on('click', function () {
	var btn = $(this);
	var Block = btn.closest('.prodact-card__amount');
	var kol = Block.find('.prodact-card__input').val();
	if (kol <= 100) {
		kol++;
	}
	Block.find('.prodact-card__input').val(kol);
})
$('.prodact-card__minus').on('click', function () {
	var btn = $(this);
	var Block = btn.closest('.prodact-card__amount');
	var kol = Block.find('.prodact-card__input').val();
	if (kol > 0) {
		kol--;
	}
	Block.find('.prodact-card__input').val(kol);
})
//amount prodact-page end
//catalog block 
$('[data-catalog]').on('click', function () {
	var btn = $(this);
	var id = btn.attr('data-catalog');
	var $block = $('#' + id);
	if ($block.length == 0) return;
	$block.addClass('open');
})
$('.js-catalog-close').on('click', function () {
	$(this).closest('.js-catalog-block').removeClass('open');
})
//catalog block end

//input 
$('.js-input, .js-placeholder').on('click',function(){
	$(this).closest('.js-input-block').find('.js-placeholder').addClass('d-none');
	$(this).closest('.js-input-block').find('.js-input').focus();
})
$(document).on('click', function (e) {
	if (!$(e.target).closest(".js-input").length && !$(e.target).closest(".js-placeholder").length) {
		var body = $('body');
		$(body.find('.js-input-block')).each(function(){
			if($(this).find('.js-input').val() == ''){
				$(this).find('.js-placeholder').removeClass('d-none');
			}
		})
	}
	e.stopPropagation();
});
//input end