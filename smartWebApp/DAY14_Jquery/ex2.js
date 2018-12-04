/**
 * 1.화면에 글이 출력되어 있는 상태에서 버튼을 클릭하면 출력된 글이 사라지도록작성
 * -클릭이벤트 처리, 글이 사라지도록 처리
 * 
 * 2.화면에 글이 출력되어 있는 상태에서 버튼을 클릭하면 출력된 글이 사라지고
 * 사라진 상태에서 버튼을 클릭하면 글이 다시 출력되도록 작성 
 */

$(document).ready(function(){
	//css속성 display를 none으로 만듦
  $('#btn1').click(function(){
		var display =$('p').css('display');  
		if(display == 'block')
		$('p').css('display','none');    //display라는 속성을 none으로 바꿔라.
		else
		$('p').css('display','block');
	});

  //addClass를 이용하여 클래스를 등록
	$('#btn2').click(function(){
	//$('p').toggleClass('display-none');
		var className = $('p').attr('class');
		console.log(className);
		//indexOf는 문자열에 매개변수 문자열이 있는지 없는지 알려주는 함수로 있으면 해당 매개변수 문자열의
		//첫 글자가 있는 위치를 알려주고 없으면 -1을 알려준다.
		if(className == undefined || className.indexOf('display-none') < 0 )   //0부터 시작하기 때문 
		$('p').addClass('display-none');
		else
		$('p').removeClass('display','none');
	});

	/*
	$('#btn2').click(function(){
		$('p').css('display-none');
		});
	*/

	//hide()를 이용하여 해당 객체를 숨김
			$('#btn3').click(function(){
			$('p').toggle();
	});


});
