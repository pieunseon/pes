$(document).ready(function(){  //여러개 있어도 인식함 (on load는 한 개만 인식함)
  $('.auto-search').click(function(){
		 $('#auto-box').toggleClass('display-block');
		 $('.auto-down').toggleClass('auto-up');
	 });
	 $('.item4').click(function(){
		 $(this).toggleClass('item4-1');
		 $('.sub-menu').toggleClass('display-block');
		 $('.sub-menu-background').toggleClass('display-block');
	});


	$('.menu-close').click(function(){
		$(this).toggleClass('item4-1');
		$('.sub-menu').removeClass('display-block');
		$('.sub-menu-background').removeClass('display-block');
		
 }); 

 function menu(){
	 $(item4).toggleClass('item4-1');
   $('.sub-menu').toggleClass('display-block');
   $('.sub-menu-background').toggleClass('display-block');

 }

/*
 var ticker = function(){
	timer = setTimeout(function(){      //특정시간이 지난후 기능이 적용되는 함수
		$('.item5 li:first').animate( {marginTop: '-20px'}, 400, function(){   //400 = 0.4초뒤에 
			// marginTop: -20px 만큼 위로 올라감
			//this는 item5 class 안에 있는 ul태그안에 있는 첫번째 li태그 객체 
			//detach는 해당 객체를 제거한 후 해당 객체를 리턴한다
			$(this).detach().appendTo('.item5>ul').removeAttr('style');   
			// item5에 있는 ul태그 뒤에 붙이고 스타일을 지워야만 올라가지 않고 제자리에 있음
			});
		ticker();
	}, 2000);       //2000ms가 지난뒤 콜백함수 실행
}; 
ticker(); //마지막에 함수 호출하기 
*/


/**실시간 뉴스 리스트 
var ticker2 = function(){
	timer = setTimeout(function(){    
		$('.news-content li:first').animate( {marginTop: '-10px'}, 400, function(){  
	   $(this).detach().appendTo('.news-content>ul').removeAttr('style');   
		  });
		ticker2();
	}, 2000);       
}; 
ticker2();
});
*/


//부모.append(자식) :부모안에 있는 컨텐츠 뒤에 있는 자식을 붙임
//자식.append(부모): 부모안에 있는 컨텐츠 뒤에 있는 자식을 붙임

//div태그는 ul태그를 감싸는 객체의 선택자명
//h는 margineTop의 높이
//time은 이동하는데 걸리는 시간

var ticker = function(div,h,time){
	timer = setTimeout(function(){    
		$(div +' li:first').animate( {marginTop: h}, time, function(){  
			//$(div +' li:first')  띄어쓰기 중요 
	   $(this).detach().appendTo(div+'>ul').removeAttr('style');   
		  });
		ticker(div,h,time);
	}, 2000);       
}; 
ticker('.item5','-20px',400);
ticker('.news-content','-20px',600);
  //item5에 마우스hover효과주기 
	$('.item5').hover(function(){
		$('.real-search-box').toggleClass('display-block');
	});
});


/*
	 $('.sub-menu-icons').click(function(){
		$(this).toggleClass('menu-close');
		$('.sub-menu').toggleClass('display-block');
		$('.sub-menu-background').toggleClass('display-block');
		
 });
 */

 /*실시간 검색어*/


