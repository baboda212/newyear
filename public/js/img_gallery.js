$(function(){
    setInterval(function(){
        $('.slide div:first-child')
        .fadeIn(1000)
        .next('div')
        .fadeOut(1000)
        .end()
        .appendTo('.slide')
    },5000);
});
let yearEl = document.getElementById('year');//년
let monthEl = document.getElementById('month');//월
let dateEl = document.getElementById('date');//일
//시간객체 생성
let d = new Date();
//년, 월, 일
let year = d.getFullYear();
let month = d.getMonth() + 1; //보정값 +1
console.log(month);
let date = d.getDate();
console.log(month,date);
//년, 월,일 출력
yearEl.innerHTML= year;
monthEl.innerHTML= month;
dateEl.innerHTML= date;