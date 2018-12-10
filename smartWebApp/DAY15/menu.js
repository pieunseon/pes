$(document).ready(function(){
	$('.tabmenu').first().css('border-bottom-color','white');
	$('.tabmenu').click(function(){
		$('.tabmenu').css('border-bottom-color','black');
			$(this).css('border-bottom-color','white');

			var id = $(this).attr('id');
			var num = getNumber(id,'menu');    //getNumber :숫자를 추출함 
			displayContent(num);

	});
	//주어진 매개변수의 숫자에 맞는 박스를 보여주는 함수

	function displayContent(index){
		$('.content').css('display','none');
		$('#content' +index).css('display','block');
	}

	//문자열이 주어지면 문자열 마지막에 있는 숫자를 가져오기 위한 함수 
	function getNumber(tabmenu,id){
		//menu1 menu 
		var index = tabmenu.indexOf(id);      //id가 주어지면 첫번째 글자의 시작위치
		var length = id.length;               //4번째 부터 숫자를 추출함                 
		
		return tabmenu.substr(index+length);		   // length-1 : 문자열의 마지막 글자를 부분 문자열로 추출해서 가져옴
	}
	displayContent(11);
});