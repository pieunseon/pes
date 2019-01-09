$(document).ready(function(){
    var pointCnt = 0;           //현재 .이 눌렸는지 안 눌렸는지 
    var op = '+';              //눌린 연산자를 저장하는 변수 . null로 초기화
    var isPushOp =false;       //연산자가 눌린적이 있는지 없는지 확인하는 변수 
    var input = $('#dataNum');   //$(input)을 매번 사용하는 대신 전역으로 선언
    var num1 = 0;               //0으로 초기화 
    var str="";        //저장되어 있는 값(최종 문자열)
    var strTmp="";     //임시문자열 >> =을 제외한 연산자를 연속해서 누르면 
                       //마지막에 누른 연산자가 출력되야하기 때문에 연산자를 누른 후 다음 숫자가 눌리기 전까지의 문자열을 임시문자열에 저장하고 
                       //이후 숫자가 누르면 해당 문자열을 최종 문자열에 저장




    //숫자가 눌렸을때                   
    $('.num').click(function(){       
        var val = $(this).text();    // 현재누른 버튼의 숫자. div 태그이기 때문에 text로 값을 가져와야함
        //연산자가 눌린 다음에 숫자를 누른 경우 
        if(isPushOp){
            input.val('0');          //input창의 값을 초기화 
            isPushOp =false;        
        }

        if(val == "."){                     // .한번만 나오게 
            if(pointCnt != 0) return;    //.이 처음 눌린게 아니면 작업을 종료하여 .이 input창에 안 찍히도록한다.
            pointCnt++;                  //.이 처음 눌리면 .이 눌린 횟수를 1로 만든다.

        }
        //alert(input.val())

        //누른 숫자를 인풋창에 출력(핵심)
        if(input.val() == '0')  //input에 저장된 기본 value값이 0이면 그 다음에 눌린 버튼으로 덮어쓰기한다. 
        input.val(val);
        else
        input.val(input.val()+val);     //눌린키와 input창에 있는 값을 이어 붙여서 출력하기 

        //인풋창에 수식을 출력하기 위한 코드
        str = strTmp; //숫자 + 연산자(1+) 다음에 숫자 누르면 숫자 + 연산자 까지 출력해야될 문자열로 고정 
    });  



    //연산자 버튼이 눌렸을때 
    //연산자 버튼(op)누르면 input창에 출력된 숫자 없애기
    $('.op').click(function(){
        pointCnt=0;   //연산자가 눌리면 실수끼리 연산가능하게 함

        var tmp = parseFloat(input.val());  
        //지금 누른 연산자가 아닌 이전에 저장된 연산자의 연산결과를 계산(핵심)
        //1+2* 순으로 선택하면 곱하기를 누르는 순간 1+2의 결과가 계산되어야 한다. 
        if(!isPushOp || op == '='){    //이전 연산자가 = 과 같으면 예외처리
            switch(op){
                case '+':num1 = num1 + tmp; break;
                case '-':num1 = num1 - tmp; break;
                case 'X':num1 = num1 * tmp; break;
                case '/':num1 = num1 / tmp; break;
                case '=':num1 = tmp; break;
            }
              input.val(num1);   
            //인풋창에 수식을 출력하기 위한 코드
              str = str + tmp;    //str >> 1+2 까지 저장.   예: str(1+2) = str (1+)+ tmp(2)
        }

        op = $(this).text(); //연산자가 두번이상 눌렸을때 마지막에 눌린 연산자가 덮어쓰기 해서 기존에 눌린 연산자가 실행되지 않게 하기 위해 click함수 밖으로 빼냄
       
        
        //인풋창에 수식을 출력하기 위한 코드
        strTmp = str+ op; 
        
        if(op == '='){ // 연산자 = 이 눌리면 input창에 출력된 문자열 초기화
            str="";
            strTmp="";
        } 
         $('#dataStr').val(strTmp);

          isPushOp = true;  
    });
});