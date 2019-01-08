$(document).ready(function(){
    var pointCnt = 0;           //현재 .이 눌렸는지 안 눌렸는지 
    var op = '+';              //눌린 연산자를 저장하는 변수 . null로 초기화
    var isPushOp =false;       //연산자가 눌린적이 있는지 없는지 확인하는 변수 
    var input = $('input');   //$(input)을 매번 사용하는 대신 전역으로 선언
    var num1 = 0;             //0으로 초기화 


    $('.num').click(function(){       
        var val = $(this).text();    // div 태그이기 때문에 text로 값을 가져와야함
        //연산자가 눌린 다음에 숫자를 누른 경우 
        if(isPushOp){
            input.val('0');   //input창의 값을 초기화 
            isPushOp =false;        //연산자가 아니라 숫자가 눌렸기 때문에 false 로............??????????????
        }

        if(val == "."){    // .한번만 나오게 
            if(pointCnt != 0) return;    //.이 처음 눌린게 아니면 작업을 종료하여 .이 input창에 안 찍히도록한다.
            pointCnt++;     //.이 처음 눌리면 .이 눌린 횟수를 1로 만든다.

        }
        //눌린 키와 input창에 있는 값을 이어 붙여서 출력하기
        if(input.val() == '0')
        input.val(val);
        else
        input.val(input.val()+val);     //input태그의 value 값을 val로 지정하기...................??????????????
    });  

    //연산자 버튼(op)누르면 input창에 출력된 숫자 없애기
    $('.op').click(function(){
          
        var tmp = parseFloat(input.val());   //parseFloat ?????????????????

        if(!isPushOp || op == '='){    //이전 연산자가 = 과 같으면 예외처리
            switch(op){
                case '+':num1 = num1 + tmp; break;
                case '-':num1 = num1 - tmp; break;
                case 'X':num1 = num1 * tmp; break;
                case '/':num1 = num1 / tmp; break;
                case '=':num1 = tmp; break;
            }
            op = $(this).text();    // ???
            input.val(num1);
        }
        isPushOp = true; // ???
        console.log(num1);
    });
});