 $(document).ready(function() {
	 
    $('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = $(this).attr('href');
 
        // Show/Hide Tabs
        $('.tabs ' + currentAttrValue).show().siblings().hide();
 
        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    });
	
	
	/*============================ filter ===============================*/
	$(".dropdown dt a").on('click', function() {
	  $(this).parent().parent().find("dd ul").slideToggle('fast');
	  $(this).find(".fa-angle-down").toggleClass('rotate180');
	});

	$(".dropdown dd ul li a").on('click', function() {
	  $(".dropdown dd ul").hide();
	});

	function getSelectedValue(id) {
	  return $("#" + id).find("dt a span.value").html();
	}

	$(document).bind('click', function(e) {
	  var $clicked = $(e.target);
	  if (!$clicked.parents().hasClass("dropdown")) $(".dropdown dd ul").hide();
	});

	$(".filter-choose").on('click', function(){
		$(this).toggleClass('filter-check');
		return false;
	});	
	
	$(".filter-reset").on('click', function(){
		$(this).parent().find(".filter-choose").removeClass('filter-check');
		$(this).addClass("text-yellow");
		return false;
	});



});