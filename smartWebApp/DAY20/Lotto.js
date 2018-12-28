//html함수
//html() : 해당객체의 html 코드를 가져옴
//html(xx) :해당 객체의 html 코드를 입력

//반복문 사용해서 효율적이고 코드를 줄이는 방법으로 박스를 다수 만들수 있다. 
$(document).ready(function(){

    var str = new String();     //문자열 변수 str을 선언
    for (var i=1; i<=45; i++){
        str += '<input type="text" class="box" value="'+i+'" readonly>';   //value값안에 i값을 넣어준다. ( i=1;i<=45)
    }  // value값에 1~45의 숫자 값이 들어감 
       
        
        console.log(str);
        $('#boxes').html(str);   //객체가 필요함
    
        var str2 = new String();     //문자열 변수 str을 선언
        for (var i=1; i<=6; i++){
            str2 += '<input type="text" class="box" readonly>';
        }  

        
        str2 += '<button id ="reset" type="reset">리셋</button>' //6개의 빈 상자 뒤에 리셋버튼을 이어 붙인다.  
        $('#boxes').html(str);
        $('#input').html(str2);

    $('#boxes>.box').click(function(){
       /* $(this).css('background-color','black');
        $(this).css('color','white');  */



        var selectedCnt = $('.selected').length;
        if(selectedCnt < 6 || $(this).prop('class').indexOf('selected') != -1 ) { 

            //1~45개 상자를 클릭하면 위의 빈 상자 6개 안에 숫자 하나씩 입력되도록 하는 이벤트 함수
            //배열에 클릭한 객체의 value가 없으면 배열에 저장하고 있으면 배열에서 제거 
            //(=해당객체에 selected클래스가 있으면 배열에서 객체의 value를 제거, 없으면 객체의 value를 배열에 추가 )

            // arr.splice(arr.indexOf($(this).val()));   >>,1이 없는 경우.
            // arr = [1,3,4,6]
            // $(this).val() == 3
            // [1]

             if($(this).hasClass('selected')){   //해당객체에 selected클래스가 있으면
                arr.splice(arr.indexOf($(this).val()),1);   //this.val 값을 배열에서 찾아서 넘겨줌
             }else{
                arr.push($(this).val());
             }

            matchArr();

            $(this).toggleClass('selected');   //selected 앞에 . 붙이고 안 붙이고 차이
            }else{
            alert('최대 6개까지 선택 할 수 있습니다.');
            }


        /**
         * selectedCnt 가 6보다 작거나 클릭된 객체의 클래스에 selected가 있으면 클릭된 객체의
         * 클래스 값을 가져와서(문자열) selected라는 문자열이 있는지 없는지 확인해서 있으면.
         * if(selectedCnt < 6 || $(this).prop('class').indexOf('selected') != -1 )
         * => if(selectedCnt < 6 || $(this).hasClass('selected'))
         * hasClass('A') : 해당 객체의클래스 중 A를 포함하면 true를 반환
         *                 포함하지 않으면 false를 반환함.
         */
    });

      //var arr = [1,2,3,4,5,6];
      var arr = [];
      //matchArr();

      function matchArr(){
          var cnt = 0;
          arr.sort (function(a,b){    //sort는 비교함수가 필요함.   오름차순으로 숫자 정렬.  returm b-a는 내림차순으로 정렬
            return a-b; 
          });
        
     /* 방법1) each사용

     $('#input>.box').each(function(){
      if(arr.length > cnt){          //해당하는 값의 위치를 알기 위해 cnt사용   >> cnt 0,1,2 -> var arr = [1,2,3,4,5,6];
         $(this).val(arr[cnt++]);
        }else{
         $(this).val('');  
      }
    });
    
    };  */

    // 방법2) 
    for(cnt = 0; cnt <6; cnt++){
        if(cnt < arr.length)
        $('#input>.box').eq(cnt).val(arr[cnt]);
        else
        $('#input>.box').eq(cnt).val('');
    }
 }

    $('#reset').click(function(){
        arr = new Array();       //배열 값 초기화 
        $('.selected').removeClass('selected');    //selected class제거하기(상자에서 빨간색 제거하기)
    });
 

    //+= 예제

    var str3 = "hello";
    str3 = "My name"   //대입연산자 : 기존 문자위에 덮어쓰기 
    console.log(str3);

    str3 = "hello";
    //str3 = str3 + "My name";
    str3 += "My name";
    console.log(str3);

    var cnt = 7;
    str3 =  '현재 학생수는 ' + cnt + '명입니다' ;
    console.log(str3);
 });


