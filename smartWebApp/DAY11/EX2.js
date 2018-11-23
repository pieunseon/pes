var id = document.getElementById('id');  //id는 고유하기 때문에 Elements 아닌 Element 사용
console.log(id);
console.log(id.value);  //id 라는 객체의 value값을 콘솔에 출력 
console.log(id.classList);   //class가 여러개 들어가 있음

var input = document.getElementsByTagName('input'); 
/** getElementsByTagName은 결과가 무조건 배열에 저장 
 * 검색결과가 0개 또는 1개 이어도 배열에 저장
 * 따라서 해당 객체에 접근하려면 배열 형태로 접근해야한다.
*/

console.log(input);   //배열
 //배열의 속성 value를 찾는데 없으니까 undifined 출력

console.log('id = ' + input[0].value); 
// 첫번째 input 태그에 있는값

console.log('pw = ' + input[1].value);
// 두번째 input 태그에 있는값

console.log('input태그의 갯수 : ' + input.length);
for (var i =0; i <input.length; i++){
	input[i].value = i ;
}


/** 클래스 이름이 input 인 첫번째 객체를 가져오기 때문에 
 * document.getElementsByClassName('input')[0]; 와 같은 결과이다. */

var qs = document.querySelector('.input');
console.log("document.querySelector('.input) 결과");
console.log(qs);
/** 클래스 이름이 input이고 password인 객체를 가져옴 */

qs = document.querySelector('.input.password');
console.log("document.querySelector('.input.password') 결과");
console.log(qs);
/**
 * document.getElement?By???() 과 document.getSelector???()의 차이는 getElement 는 태그와 클래스 
 * id를 섞어서 검색할 수 없는데 querySelector는 섞어서 검색 할 수 있다.
 */