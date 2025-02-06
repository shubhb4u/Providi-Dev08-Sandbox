$(function() {

	/*Add sticky to the header*/
	$(window).scroll(function(){
		if ($(this).scrollTop() > 36) {
			$('.q-header-bottom').addClass('stuck');
			$('.q-body').addClass('stuck-header');
		} else {
			$('.q-header-bottom').removeClass('stuck');
			$('.q-body').removeClass('stuck-header');
		}
	});

	/*user login drop-down*/
	$('.q-header-login-dropdown').on('click', function(){
		$('.q-header-menu').find('.q-menu-drop-down').each(function(){
			if($(this).hasClass('open')){
				$(this).removeClass('open');
			}
		});

		if($('.q-header-login-dropdown').hasClass('open')){
			$('.q-header-login-dropdown').removeClass('open');
		}
		else{
			$('.q-header-login-dropdown').addClass('open');
		}

		/*q-sign-recommend*/
		if(($('.q-sign-recommend').length) && ($('.q-sign-recommend').hasClass('open'))){
			$('.q-sign-recommend').removeClass('open');
		}


	});

	/*Search icon click*/
	$('.q-search-icon-sm').on('click', function(){
		if($(this).parent().hasClass('sm-open')){
			$(this).parent().removeClass('sm-open');
		}
		else{
			$(this).parent().addClass('sm-open');
		}
	});

	/*nav drop-down menu*/
	$('.q-menu-item').find(' > a').on('click', function(){
		closeMenuItems();
		if($(this).parent().hasClass('q-menu-drop-down')){
			closeMenuItems();
			$(this).parent().addClass('open');
		}
	});

	/*Closing menu when click outside*/
	$(document).on('click', function(e){
		if( $(e.target).closest(".open").length > 0 ) {
			return false;
		}
		closeMenuItems();
	});

	/*Closing when hover other menu*/
	$('.q-menu-item').on('mouseover', function(){
		if(!($(this).hasClass('open'))){
			closeMenuItems();
		}

	});

	/*Close Menu Items*/
	function closeMenuItems(){
		$('.q-header-menu').find('.q-menu-drop-down').each(function(){
			if($(this).hasClass('open')){
				$(this).removeClass('open');
			}
		});
		$('.q-header-top').find('div.open').each(function(){
			$(this).removeClass('open');
		});
		if($('.q-listing-filter').length){
			$('.q-filter').each(function(){
				$(this).removeClass('open');
			});
		}
	}


	/*Mobile Menu Click*/
	$('.q-mobile-menu').on('click', function () {
		if($(this).parent().hasClass('sm-open')){
			$(this).parent().removeClass('sm-open');
		}
		else{
			$(this).parent().addClass('sm-open');
		}
	});

	/*Mobile Menu Back to main menu*/
	$('.menu-back').on('click', function () {
		if($(this).parent().parent().hasClass('open')){
			$(this).parent().parent().removeClass('open');
		}
		else{
			$(this).parent().parent().addClass('open');
		}
	});


	/*Footer menu click on mobile*/
	$('.q-footer-col > h4').on('click', function () {
		if($(this).parent().hasClass('sm-open')){
			$(this).parent().removeClass('sm-open');
		}
		else{
			$(this).parent().addClass('sm-open');
		}
	});


	/*Custom code required for splide slider*/
	if ($('.splide:not(.one-slide)').length) {
		$('.splide:not(.one-slide)').each(function () {
			var override = $(this).attr('data-splide');
			if (typeof override === 'string') {
				$(this).attr('data-splide', override.replace(/'/g, '"'));
			}
		});
		if (window.NodeList && !NodeList.prototype.forEach) {
			NodeList.prototype.forEach = Array.prototype.forEach;
		}
		/* --- end polyfill */
		$('.splide:not(.one-slide)').each(function () {
			var type = $(this).hasClass('st-tabs') ? 'tabs' : $(this).hasClass('hg-promo') ? 'promo' : 'standard';
			var checkStatic = $(this).hasClass('get-static');
			// options
			var opt = {
				autoWidth: true,
				autoHeight: true,
				focus: 'center',
				trimSpace: 'move',
				pagination: 'withArrows'
			};

			switch (type) {
				case 'promo':
					opt.focus = 0;
					opt.trimSpace = false;
					opt.breakpoints = {
						768: {
							focus: 'center',
							trimSpace: 'move'
						}
					};
					break;
				case 'tabs':
					opt.focus = 0;
					opt.trimSpace = true;
					opt.pagination = false;
					break;
			}

			var splide = new Splide(this, opt);

			splide.on('arrows:mounted', function(p){
				$(p).addClass('is-disabled');
				if (checkStatic) {
					getStatic(splide.root, splide.Components.Elements.slides);
				}
			});

			splide.mount();

			splide.on('arrows:updated', function(p, n, pi, ni){
				$(p).removeClass('is-disabled');
				$(n).removeClass('is-disabled');
				if (pi === -1) {
					$(p).addClass('is-disabled');
				} else if (ni === -1) {
					$(n).addClass('is-disabled');
				}
			});
		});
		$(window).on('resize', function () {
			$('.splide.get-static').each(function(){
				getStatic(this, $(this).find('.splide__slide'));
			});
		});

		function getStatic(slider, slides) {
			var w = 0;
			var ww = $(slider).width();
			var xs = window.innerWidth < 768;
			var wSaved = $(slider).attr('data-w');
			if (!xs && !wSaved) {
				$(slides).each(function(){
					w += $(this).outerWidth(true);
				});
			}
			if (!wSaved && w > 0) {
				$(slider).attr('data-w', w);
			} else if (wSaved && w === 0) {
				w = parseInt(wSaved, 10);
			}
			if (!xs && w < ww) {
				$(slider).addClass('is-static');
			} else {
				$(slider).removeClass('is-static');
			}
			return true;
		}

	}

	/*Product listing page filter*/
	$('.q-filter-label').on('click', function () {
		closeMenuItems();
		if($(this).parent().hasClass('open')){
			$(this).parent().removeClass('open');
		}
		else{
			$(this).parent().addClass('open')
		}
	});

	/*Cart Change Term Click*/
	$('#q-change-term').on('click', function () {
		closeMenuItems();
		if($(this).parent().hasClass('open')){
			$(this).parent().removeClass('open');
		}
		else{
			$(this).parent().addClass('open')
		}
	});
	$('.q-terms-close').on('click', function () {
		closeMenuItems();
		if($(this).parent().parent().hasClass('open')){
			$(this).parent().parent().removeClass('open');
		}
		else{
			$(this).parent().parent().addClass('open')
		}
	});

});