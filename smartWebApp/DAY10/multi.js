/*for(i=2; i<=9; i++){
	window.document.write(i, "단<br>");
	for(j = 1; j<=9; j++){
	window.document.write(i,"X",j, "=",i*j, "<br>");
	}
}
*/


//body 태그 안의 내용들이 구성된 후(화면이 출력된 후) 실행 될 fucntion(){}안에 있는 코드들이 실행됨
/*
window.onload = function(){
	printMulti();
	alert('Hello');
}
*/



function printMulti(){
	//구구단 전체를 출력하는 함수
	for(var i =2; i<=9; i++){

		multi(i);
}
}

printMulti();  //함수선언 앞, 뒤에 작성해도 출력됨 

// a단을 출력하는 함수

function multi(a){
	console.log(a+"단");
	for(var i =1; i<=9; i++){
		printMul(a,i);
	}
}

//a* i를 출력하는 함수 
function printMul(a,i){
	var res = a*i;
	var str = ""+ a + "x" +i + "=" + res;
	console.log(str);

}

var array = {name:"홍길동", age:21, address:'청주시'};
//key : 배열 array의 각 키값인 name, age, address를 가져온다. 

for(var key in array){
	console.log(key + ":"+ array[key])
}


console.log(array['name']);
console.log(array['age']);


var array1 = [1,"123",456];
var array2 = [789,"1234","456"];

console.log("concat()함수 예제");
//concat함수는 배열 2개를 하나로 합쳐 새로운 배열을 만들어 돌려준다. 
console.log(array1.concat(array2));
console.log(array1);
console.log("push()함수예제");
console.log(array1.push(000));                //push는 method임 
console.log("배열의 길이:" + array1.length);  //length 는 속성임
console.log("join()함수 예제");
//join : 배열을 구분자를 이용하여 하나의 문자열로 생성 
console.log(array1.join(","));
console.log("splice()함수 예제");
//splice: 배열을 해당하는 번지부터 잘라내기를 하여 잘라진 부분을 반환하고 원본은 수정됨
console.log(array1.splice(1));
console.log(array1);
//splice: 배열을 해당하는 번지부터 잘라내기를 하여 잘라진 부분을 반환하고 원본은 수정안됨
console.log("splice()함수 예제");
console.log(array2.slice(1));
console.log(array2);
console.log("reverse()함수예제");
console.log(array2.reverse());
console.log("sort()함수예제");
//모든 배열 원소들을 문자열 만든 후 비교하여 정렬 
console.log(array2.sort());
console.log("문자열 비교");
console.log("a>b : "+ ('a' >'b'));
console.log("a>b : "+ ('a' >'aa'));
console.log("a>b : "+ ('a' >'A'));
console.log("123>7 : "+ ('123' >'7'));      //숫자가 아니라 문자열로 인식하기 때문에 false 로 나옴 

