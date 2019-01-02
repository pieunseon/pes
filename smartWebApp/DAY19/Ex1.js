$(document).ready(function(){
	/** prop('속성','값') : 해당 객체의 속성을 값으로 설정 
	 *  prop('속성') :해당 객체의 속성 값을 가져옴 
	 *  css ('속성', '값') : 해당 객체의 css속성을 값으로 설정
	 *  css ('속성') :해당 객체의 css속성의 값을 가져옴
	 *  text('값') :해당 객체의 텍스트값을 설정
	 *  text('') :해당 객체의 텍스트값을 가져옴
	 *  val('값'): 해당 객체의 value값을 설정
	 *  val(): 해당 객체의 value값을 가져옴
	 * */

	 //방법1)
	 /*
	 $('.choice').click(function(){

		if ($(this).prop('checked')){
			$('input[type=checkbox]').prop('checked','checked');
		} else {
			$('input[type=checkbox]').prop('checked','');
		}
 
	});
	 
	 /*
	 방법2)
	 $('.choice').click(function(){
	  if($(this).is(':checked')){
		$('input[type=checkbox]').prop('checked','checked');
	 }
	 else {
		$('input[type=checkbox]').prop('checked','');
	}
*/
	
	//방법3)
	$('.choice').click(function(){
	$('input[type=checkbox]').prop('checked',$(this).prop('checked'));  

	//class가 choice인  모든 checkbox를 checked 속성 값으로 설정한다. (this:class or id )

/*
	방법4) 
	var checked = $(this).prop('checked');
	$('input[type=checkbox]').each.function(){
		$(this).prop('checked',checked);
	}); */
	
	});
});
