$(document).ready(function(){  // => script위치에 상관없이 동작되도록 함. html 구조가 다 잡히고 실행되도록 하는 함수, 여러개 있어도 인식함 (on load는 한 개만 인식함)
  $('.auto-search').click(function(){  //auto-search라는 클래스를 클릭하면 이벤트 일어나게 하는 함수. 
		 $('#auto-box').toggleClass('display-block');   
		 //1)auto-search를 클릭하면 auto-box보였다가 안보였다가 toggle하기
		 $('.auto-down').toggleClass('auto-up');
		 //2)auto-down 아이콘을 클릭하면 auto-up 아이콘으로 추가 했다가 없앴다가.
	 });

	


	/*
	$('.menu-close').click(function(){
		$(this).toggleClass('item4-1');
		$('.sub-menu').removeClass('display-block');
		$('.sub-menu-background').removeClass('display-block');
		
 }); */

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


var ticker = function(div,h,time){  // (div : 선택자), 매개 변수를 만들어서 코드가 중복되지 않고 하나의 함수로 두가지 경우를 모두 호출할 수 있음 
	timer = setTimeout(function(){    // setTime 시간이 지나고 다른 함수를 호출 
		$(div +' li:first').animate( {marginTop: h}, time, function(){   // 지정한 시간이 지난후에 마진 탑을 바꾸고 콜백함수를 호출하기 
			//$(div +' li:first')  띄어쓰기 중요   
	   $(this).detach().appendTo(div+'>ul').removeAttr('style');   //현재 올라간 부분을 떼어서(li) 자식(ul)에 붙이기 (부모 attendTO 자식) 그 다음 스타일 속성을 제거하기. 
		  });
		ticker(div,h,time); //위의 함수기능을 실행하고 나서 ㄴ자기자신을 호출하기
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
	var index = 1;    //index : 1/6 의 숫자.  1로 시작함 
	function displayBox5(i){                                    // 기존 display가 none.  i : 몇번째 박스인지
	$('.box5-bottom').removeClass('display-block');             //6개를 일단 다 안보이게하고 선택한 i번째 박스만 보이게 =>기존에 보였던 박스를 안보이게 하기 위해
	$('.box5-bottom').eq(i-1).addClass('display-block');   //eq는 0부터 시작함  
	//eq는 0부터 시작하기 때문에 bottm box를 지우거나 class이름을 다르게해야함

	$('.box5-item2>b').text(i);  //숫자가 바뀌는 부분 (텍스트는 원하는 숫자로 덮어쓰이는 역할)
	$('.location').removeClass('display-inline-block');             
	$('.location').eq(i-1).addClass('display-inline-block'); 
	
	}

	displayBox5(index+1);  //호출을 해야 위의 함수가 기능이 실행됨
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


//급상승 검색어

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


 var menuArr = ["dici","newsi","stocki","dealeri","mapi","moviei","musici","booki","webtooni"];
  $('.menu-setting').click(function(){
		createCheck();
		var cnt = 0;
		
    $('.item2-1').each(function(){ // each함수로인해 item2-1클래스가 9개 이기때문에 9번실행
			console.log('cnt : '+cnt);
			if(menuArr2.length <= cnt){
				console.log('번호 : '+cnt);
        $(this).prop('class','item2-1');
        if(cnt > 4){
          $(this).addClass('display-none');
        }
			}else{
				$(this).prop('class','item2-1 back-img');
				$(this).addClass(menuArr2[cnt]);

			}
      cnt++;
    });
  
  $('.sub-menu-div input[type=checkbox]').each(function(){
    $(this).removeClass('display-none');
  });
  $('.all-service').addClass('display-none');
  $(this).addClass('display-none');
  $('.ok').removeClass('display-none');
  $('.init').removeClass('display-none');
  $('.cancel').removeClass('display-none');
});
$('.cancel').click(function(){
	initCheck();
	checkMenu();
	selectedMenu = menuArr2.slice();
  $('.all-service').removeClass('display-none');
  $('.menu-setting').removeClass('display-none');
  $('.ok').addClass('display-none');
  $('.init').addClass('display-none');
	$('.cancel').addClass('display-none');
	
  var i = 0;
  if(menuArr2.length == 0){
    $('.item2-1').each(function(){
      $(this).prop('class','item2-1 back-img');
      $(this).addClass(menuArr[i++]);
    });
  }else{
		$('.item2-1').each(function(){
			if(menuArr2.length > i){
			$(this).prop('class','item2-1 back-img');
			$(this).addClass(menuArr2[i++]);
			}else{
				$(this).prop('class','item2-1 display-none');
			}
		});
	}
  $('.sub-menu-div input[type=checkbox]').each(function(){
    $(this).addClass('display-none');
  });
});
$('.menu-close').click(function(){
	selectedMenu = [];
	checkMenu();
  menu();
	closeSubMenu();
	initCheck();
});
$('.item4').click(function(){
	//접기 또는 더보기 버튼을 클릭하면 메뉴에 있는 배열을 임시 배열에 저장한다. 
	selectedMenu = menuArr2.slice();
	menu();
	closeSubMenu();
	initCheck();
	checkMenu();
	displayMenu();
});
  /* 메뉴 설정에서 선택한 메뉴들을 저장하는 배열 */
  var selectedMenu = [];
  /* 실제 네이버에서 뿌려줄 메뉴 */
  var menuArr2=[];
  $('.sub-menu-div input[type="checkbox"]').click(function(){
    // 클릭한 체크박스의 value를 가져옴
    var check = $(this); // 이 this는 전체적인 click 에 발동되는 this이다
    // 배열에 해당 체크박스의 value가 있는지를 확인합니다
    var isContain = selectedMenu.indexOf(check.val())
    var maxSize = 5;
    // 체크박스의 value가 배열에 없고 배열의 길이가 2이면
    // 해당 체크박스의 체크를 비활성화
    if(isContain<0 && selectedMenu.length == maxSize){
      check.prop('checked','');
    }
    // 길이가 2가 아니면 해당 배열에 추가를 해당 체크박스의 체크를 활성화한다
    else if(isContain<0 && selectedMenu.length != maxSize){
      selectedMenu.push(check.val());
      check.prop('checked','checked');
    }
    // 체크박스의 value가 배열에 있으면 배열에서 해당 문자열을 제거
    else{
      selectedMenu.splice(isContain,1);
    }
    // 배열에 있는 문자열을 input창에 하나씩 뿌려줌 
    var cnt = 0;
    $('.item2-1').each(function(){
      if(cnt < selectedMenu.length){
        $(this).prop('class','item2-1 back-img');
        $(this).addClass(selectedMenu[cnt++]);
      }
      else{
        $(this).prop('class','item2-1');
        if(cnt > 4)
          $(this).addClass('display-none');
        cnt++;
      }
    });
  });
$('.ok').click(function(){
	// 선택된메뉴들을 menuArr2에다가 저장
	initCheck();
  menuArr2 = selectedMenu.slice();
  menu();
	closeSubMenu();
	checkMenu();
});

$('.init').click(function(){
	initCheck();
	menuArr2 = [];
	selectedMenu = [];
	alert('초기설정으로 돌아갑니다.');
	menu();
	closeSubMenu();
	checkMenu();
 });
 

function menu(){
  $('.item4').toggleClass('item4-1');
  $('.sub-menu').toggleClass('display-block');
  $('.sub-menu-background').toggleClass('display-block');
}
  // menuArr2에서 저장된 값들만 check가 되도록 하는 함수
  function checkMenu(){
    $('.sub-menu-div input[type="checkbox"]').each(function(){
			$(this).prop('checked','');
      for(var i = 0; i<menuArr2.length; i++){
        if($(this).val() == menuArr2[i]){
          $(this).prop('checked','checked');
        }
      }
    });
  }

  function closeSubMenu(){
    displayMenu();
    $('.sub-menu-div input[type=checkbox]').each(function(){
      $(this).addClass('display-none');
    });
    $('.all-service').removeClass('display-none');
    $('.menu-setting').removeClass('display-none');
    $('.ok').addClass('display-none');
    $('.init').addClass('display-none');
    $('.cancel').addClass('display-none');
  }

function initCheck(){
	$('.sub-menu-div label').each(function(){
    $(this).prop('for','');
	});	
}
function createCheck(){
	var i = 0;
	var checkbox =$('.sub-menu-div input[type =checkbox]');
	$('.sub-menu-div label').each(function(){
		$(this).prop('for',checkbox.eq(i++).prop('id'));
	})
}

function displayMenu(){     //displauy가 세번 사용되서 따로 함수로 빼냄 
	
var i = 0;

//메뉴 선택이 안된 경우 
	if(menuArr2.length == 0){
		//변경전 : <div class="item2-1 "></div>
		//변경전 : <div class="item2-1 back-img newsi"></div>
		//변경후 :<div class="item2-1 back-img dici"></div>
		$('.item2-1').each(function(){   //item 2-1 총 9 개 있음 -> each : 각각 값들을 수정하겠다.
			$(this).prop('class','item2-1 back-img');
			$(this).addClass(menuArr[i++]);    //초기 메뉴9개 값 저장한걸 사용하기 위해 
		})
	}else{       //메뉴 선택을 한 경우 
		$('.item2-1').each(function(){
			if(menuArr2.length > i){  // i : 사용자가 메뉴를 선택한 부분
			$(this).prop('class','item2-1 back-img');
			$(this).addClass(menuArr2[i++]);  
			}else{
				$(this).prop('class','item2-1 display-none');   //사용자가 선택하지 않은 부분은 안보이게 display-none으로 막아줌
			}
		});
	}
}
});
