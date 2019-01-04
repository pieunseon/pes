$(document).ready(function(){
    //var swiper = new Swiper('.subtitle swiper-container');

    var swiper = new Swiper('.main.swiper-container',
        {navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }},);
     var titleSwiper = new Swiper('.title.swiper-container', {
        slidesPerView: 'auto',       //글자수에 맞춰서 메뉴글자 배치
        centeredSlides: true,
        spaceBetween: 30,
        slideToClickedSlide:true,     //메뉴 클릭하면 해당 페이지로 바로 이동
            
    });
    swiper.controller.control = titleSwiper;
    titleSwiper.controller.control = swiper;   //메뉴와 화면바뀌는 내용 같도록 연결
    $('.carousel').carousel('pause')    //클릭할때만 이미지 넘어가게(자동으로 넘거 가는것 멈추기)

    new daum.roughmap.Lander({
        "timestamp": "1546584204286",
        "key": "rn7p",
        "mapWidth": "800",
        "mapHeight": "300"
    }).render();
});
