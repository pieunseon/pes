$(document).ready(function(){
     
     var answer = randomArr();
     console.log(answer);

     var arr = [];
    // 배열은 2개. 원소는 3개씩 있음. 
    
    function getStrike(arr1,arr2){
       var strike = 0 ;                     //스트라이크의 갯수를 저장하는 지역변수 선언
        for(var i=0; i<arr1.length; i++){
            if(arr1[i] == arr2[i])          //숫자의 배열 위치가 같은지 비교
            strike++;
        }
       return strike;        //strike는 배열의 0번지, 1번지, 2번지만 비교하면 됨.  
       // >>반복문 1개만 있으면됨. >>값을 알려주고 저장하기 위해서 return 이필요함
 
    }

    function getBall(arr1,arr2){  //Ball은 i 배열안에 있는 숫자와 j배열안에 있는 모든 숫자와 비교 해야 됨. 9번비교  >>반복문 2개필요함 
        var ball = 0;
        for(var i =0; i<arr1.length; i++){
            for(var j=0; j<arr2.length; j++){
               // if(i == j) continue;      //같은위치(스트라이크)이면 비교 안하고 넘어감.
               //Short Circuit  Evaluation 
                if(i != j && arr1[i] == arr2[j] )      //두 값이 같지만 위치가 다름. 
                //i !=j   >>  같은 위치인지 
                //arr[i] == arr2[j]  >>같은 값인지 
                ball++;    
            }
        }
        return ball;
    }

///////////////////// 상자 3개, 9개 만들기 /////////////////////////
    var str = new String();    
    for (var i=1; i<=9; i++){
        str += '<input type="text" class="box" value="'+i+'" readonly>';  
    } 
       
        $('#boxes').html(str);   
    
        var str2 = new String();  
        
        for (var i=1; i<=3; i++){
            str2 += '<input type="text" class="box" readonly>';
        }  
        str2 += '<button id ="confirm" type="button">확인</button>' 
        str2 += '<button id ="reset" type="reset">새 게임</button>' 
       
        $('#boxes').html(str);
        $('#input').html(str2);



/////////////숫자 상자 클릭했을때 빈 상자로 숫자가 3개까지 들어가게만들기///////////////////


    $('#boxes>.box').click(function(){

        var selectedCnt = $('.selected').length;
        if(selectedCnt < 3 || $(this).prop('class').indexOf('selected') != -1 ) { 

             if($(this).hasClass('selected')){   
                arr.splice(arr.indexOf($(this).val()),1);   
             }else{
                arr.push($(this).val());
             }

            matchArr();

            $(this).toggleClass('selected');  
            }else{

            alert('3개만 선택 가능합니다.');
            }
    });

      function matchArr(){
          var cnt = 0;
         
    for(cnt = 0; cnt <6; cnt++){
        if(cnt < arr.length)
        $('#input>.box').eq(cnt).val(arr[cnt]);
        else
        $('#input>.box').eq(cnt).val('');
    }
 }
    $('#confirm').click(function(){

        if(arr.length != 3){
            alert('3개를 선택해야합니다.');
            return;
        }


        var strike = getStrike(answer,arr); //스트라이크의 갯수를 저장하는 전역변수 선언
        var ball = getBall(answer, arr);
   
        if(strike == 0 && ball ==0)
            alert('30');
        else if(strike == 3)
            alert('3S.스트라이크 입니다.');
        else if(strike == 0)
            alert(ball+'B');
        else if (ball == 0)
            alert(strike + 'S');
        else
            alert(strike + 'S' + ball+'B');

    });


    function randomArr(arr){   //랜덤한 수가 저장되어있는 배열 (중복 피하기 위해)
        var cnt = 0;
        var ranArr = new Array();
        while(cnt<3){
            var tmp = random(1,9);   //1~9까지 랜덤한 수를 만든다.
            console.log(tmp);
            if(ranArr.indexOf(tmp)== -1){      //tmp의 값이 배열에 있는지 확인.  -1 >> 없다.
                ranArr.push(tmp);
                cnt++;
                console.log(ranArr);
            }
        }

        return ranArr;
    };

    function random(min,max){
        return parseInt(Math.random()*(max-min+1)+min);  
        //Math.random()* 이라는 함수 속성에 실수를 포함하고 있기 때문에 실수를 정수로 변환
    };

    $('#reset').click(function(){
        arr  = new Array();
        $('.selected').Class('selected');
        answer = randomArr();
        console.log(answer);    //새 게임 누르면 새로 주어지는 컴퓨터 숫자 
         alert('새 게임을 시작합니다');
    });
 });

            