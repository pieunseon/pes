$(document).ready(function(){  //여러개 있어도 인식함 (on load는 한 개만 인식함)
  $('.auto-search').click(function(){
		 $('#auto-box').toggleClass('display-block');   
		 //1)auto-search를 클릭하면 auto-box보였다가 안보였다가 toggle하기
		 $('.auto-down').toggleClass('auto-up');
		 //2)auto-down 아이콘을 클릭하면 auto-up 아이콘으로 바꿔주기 
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
	}, 2000);       //2000(2초) : 글자 박스가 바뀌는 주기 
}; 
ticker('.item5','-20px',400);   //400(0.4초) :글자가 올라가는 속도
ticker('.news-content','-20px',600);
  //item5에 마우스hover효과주기 
	$('.item5').hover(function(){
		$('.real-search-box').toggleClass('display-block');
	});




	//뉴스목록 이름 클릭하면 '구독,뉴스 보기'로 아이콘 바뀌기
	$('.api_list>li').hover(function(){
		//$('.api_list>li>a').toggleClass('display-none');
	  $(this).children('a').toggleClass('display-none');   //this 현재 이벤트가 일어나고 있는 객체 
		//$('.api_list>li>div').toggleClass('display-block');
		$(this).children('div').toggleClass('display-block');
	});



 //box5-bottom의 6개 번호중 선택할 박스 번호 의미
	var index = 1;
	function displayBox5(i){                                    // i : 몇번째 박스인지
	$('.box5-bottom').removeClass('display-block');             //6개를 일단 다 안보이게하고 선택한 i번째 박스만 보이게 =>기조네 보였던 박스를 안보이게 하기 위해
	$('.box5-bottom').eq(i-1).addClass('display-block');     
	//eq는 0부터 시작하기 때문에 bottm box를 지우거나 class이름을 다르게해야함

	$('.box5-item2>b').text(i);

	$('.location').removeClass('display-inline-block');             
	$('.location').eq(i-1).addClass('display-inline-block'); 
	
	}

	displayBox5(index+1);


	$('.box5-next').click(function(){   //버튼 누를때 마다 숫자가 1개 씩 증가함
	 index ++;
	 if(index > 6 ) {       //박스가 6개이기 때문에 7번째로 가려고 하면 첫번째로 보내준다.
		 index = 1;
	 }
	 displayBox5(index);
	});

	$('.box5-prev').click(function(){   //버튼 누를때 마다 숫자가 1개 씩 감소함
		index --;
		if(index <= 0 ) {      
			index = 6;
		}
		displayBox5(index);
	 });



 $('.rank-left').click(function(){
 $('.rank-lists').first().css('display','block');             
 $('.rank-lists').last().css('display','none');
 $(this).css('background-color','#f9fafc');
 $('.rank-right').css('background-color','#ffffff');


 });

 $('.rank-right').click(function(){
	$('.rank-lists').last().css('display','block');
	$('.rank-lists').first().css('display','none');
	$(this).css('background-color','#f9fafc');
  $('.rank-left').css('background-color','#ffffff');
 
	});

 $('.rank-lists').first().css('display','block');
 $('.rank-lists').last().css('display','none');


 var selectedMenuCnt = 0;
 var menuArr = [ "dici","newsi","stocki","dealeri","mapi","moviei","musici","booki","webtooni"]
 $('.menu-setting').click(function(){
	 var cnt = 0;

	$('.item2-1').each(function(){
		$(this).prop('class','item2-1');

		cnt ++;
		if(cnt > 5){
			$(this).addClass('display-none');

		}
		});
 });

 $('.menu-close').click(function(){
	 var i =0;
	 if(selectedMenuCnt == 0 ){ 
	$('.item2-1').each(function(){
		$(this).prop('class','item2-1 back-img');
		$(this).addClass(menuArr[i++]);                //???????????????
	});  
 }
 });
});


/*
	 $('.sub-menu-icons').click(function(){
		$(this).toggleClass('menu-close');
		$('.sub-menu').toggleClass('display-block');
		$('.sub-menu-background').toggleClass('display-block');
		
 });
 */


