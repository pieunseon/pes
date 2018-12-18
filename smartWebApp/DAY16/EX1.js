$(document).ready(function(){

	 // 1)input창에 입력된 문자열들을 받아와서 문자열이 빈 문자열이 아니면 배열에 저장
	$('input[type = "checkbox"]').click(function(){
		var arr = new Array;
		
		$('input[type=text]').each(function(){     
			//input창에 있는 값을 각각하나씩 읽어옴. 
			//이벤트함수 마다 this가 있을경우 각각 다른 this를 의미한다. 
			//click함수에 있는 this와 each함수에 있는 this는 다른 객체를 의미함

			var text =$(this).val();
			$(this).val('');     //값을 초기화
			
			if(text !='')
			 arr.push(text);  //push : text(문자열)을 배열에 저장함

	 });

	  // 2)클릭한 체크박스에 value를 가져옴
      var check =$(this);          

		// 3)배열에 해당 체크박스의 value가 있는지를 확인합니다.
        var isContain = arr.indexOf(check.val());
	  // 4)checkbox의 value가 배열에 없고 배열의 길이가 2이면 해당 checkbox의 check를 비활성화 (input창의 내용이 꽉 차있음,더이상 추가되지 않게함)
      if(isContain < 0 && arr.length == 2){
				check.prop('checked','');
	} 

	 // 5)길이가 2가 아니면 해당 배열에 추가 하고 해당 checkbox의 check를 활성화 함(자동으로 됨)
      else if(isContain < 0 && arr.length != 2) {
				arr.push(check.val());
				check.prop('checked','checked');
			}
	 // 6)checkbox의 value가 배열에 있으면 (미리 체크되어 있는 상태) 배열에서 해당 문자열을 제거
     else { 
			 arr.splice(isContain,1);                 //isContain: 해당 문자열의 위치를 저장함???????????
			 check.prop('checked','');  
		 }
	 // 7)배열에 있는 문자열을 input창에 하나씩 넣어줌
   for (var i = 0; i<arr.length; i++){
		 $('input[type=text]').eq(i).val(arr[i]);
	 }

 });
});

	/*
	$('input[type = "checkbox"]').click(function(){    //input type의 객체[속성]을 가져옴
		
		var input = $('input[type = "text"]');   // 이벤트 동작 = 값이 동일 하기 때문에 this. val(): value값 가져옴 
		var check = $(this);
		
		$('input[type = "checkbox"]').not(this).prop('checked','');		
		//선택되지 않은 체크박스를 체크해제한다.
		//체크된 메뉴를 다시 체크하여 체크를 해제하는 경우는 체크의 value와 input 의 value가 같다. 
		//.prop('checked','');   체크설정해제    .prop('checked','checked');  체크설정 

		if(input.val() == check.val()){
			input.val('');
		} else {
      input.val(check.val()); 
		} 
	});
	
*/
 




