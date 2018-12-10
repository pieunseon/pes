$(document).ready(function(){
	$('.tabmenu').first().css('border-bottom-color','white');

	function displayContent(index){
		$('.content').css('display','none');
		$('.content').eq(index).css('display','block');   //0부터 시작
		$('.tabmenu').css('border-bottom-color','black');
		$('.tabmenu').eq(index).css('border-bottom-color','white');

	}

	
	var index = 0;  //0부터 시작
	$('#next').click(function(){
		 index++;
		 if(index > 2)
		 index = 0;

		 displayContent(index);
	});


	$('#prev').click(function(){
		index--;
		if(index < 0 )
		index = 2;

		displayContent(index);
	});

 displayContent(0);
});