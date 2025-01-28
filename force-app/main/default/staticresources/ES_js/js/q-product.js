/*The JS file to be used on product detail page*/

$(function() {

	var curH1 = $('.q-product-detail-box .q-product-content > h1');
	var curH1Txt = $(curH1).text();
	var tempH1Txt = curH1Txt;
	const defaultDes = $('.q-product-detail-box .q-product-content > p').html();


	$('.q-panel-container > .q-edition-title').on('click', function () {

		if($(this).parent().hasClass('open')){
			/*do nothing?*/
			$(this).parent().removeClass('open');
		}
		else{
			$(this).parent().addClass('open');
			qReplaceProductHeading(this);
			if($(this).parent().find('.q-edition-txt-replace').length){
				qReplaceProductDes(this);
			}
			else{
				qRestProductDes(defaultDes);
			}

		}
	});
	$('.q-panel-arrow').on('click', function () {
		if($(this).parent().hasClass('open')){
			$(this).parent().removeClass('open');
		}
		else{
			$(this).parent().addClass('open');
			qReplaceProductHeading($(this).parent().find('h3'));
			if($(this).parent().find('.q-edition-txt-replace').length){
				qReplaceProductDes($(this).parent().find('h3'));
			}
			else{
				qRestProductDes(defaultDes);
			}
		}
	});

	function qReplaceProductHeading(reptxt){
		var newH1 = $(reptxt).text();
		if(curH1.text() == tempH1Txt){
			$(curH1).text(curH1.text() + ' - ' + newH1);
		}
		else{
			$(curH1).text(tempH1Txt + ' - ' + newH1);
		}
	}
	function qReplaceProductDes(reptxt){
		var temp = $(reptxt).parent().find('.q-edition-txt-replace').html();
		$('.q-product-detail-box .q-product-content > p').html(temp);
	}

	function qRestProductDes(des){
		$('.q-product-detail-box .q-product-content > p').html(des);
	}

	/*Thumbnail*/
	$('.q-thumbnail-video').on('click', function () {
		if($('#q-modal-video').hasClass('open')){
			$('#q-modal-video').removeClass('open');
			$('body').removeClass('scroll-fix');
		}
		else{
			$('#q-modal-video').addClass('open');
			$('body').addClass('scroll-fix');
		}
	});

	$('.q-thumbnail-screenshot').on('click', function () {
		if($('#q-modal-screenshot').hasClass('open')){
			$('#q-modal-screenshot').removeClass('open');
			$('body').removeClass('scroll-fix');
		}
		else{
			$('#q-modal-screenshot').addClass('open');
			$('body').addClass('scroll-fix');
		}
	});
	$('#q-modal-screenshot > .q-modal-close').on('click', function (e) {
		$(this).parent().removeClass('open');
		$('body').removeClass('scroll-fix');
	})

// Pause the product video when close the popup
	var myPlayer;
	/*
	videojs.getPlayer('vjs_video_3').ready(function() {
		// Get a reference to the player
		myPlayer = this;
		// +++ Wait for loadstart +++
		// Listen for the loadstart event
		myPlayer.on('loadstart',function(){
			$('#q-modal-video > .q-modal-close').on('click', function (e) {
				$(this).parent().removeClass('open');
				$('body').removeClass('scroll-fix');
				myPlayer.pause();
			})
		})
	});
	*/

});




