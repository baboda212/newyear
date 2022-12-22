let num = 0;
setInterval (function(){
    num++;
    if(num >= 3) {
        num = 0;
    };
    let imgTag = document.getElementById('photo');
    imgTag.setAttribute('src', `images/img${num}.jpg`);
},5000);

let yearEl = document.getElementById('year');//년
let monthEl = document.getElementById('month');//월
let dateEl = document.getElementById('date');//일
//시간객체 생성
let d = new Date();
//년, 월, 일
let year = d.getFullYear();
let month = d.getMonth() + 1; //보정값 +1
//console.log(month);
let date = d.getDate();
console.log(year,month,date);
//년, 월,일 출력
yearEl.textContent= year;
monthEl.textContent= month;
dateEl.textContent= date;

function len_chk(){  
    let frm = document.review_box.desc; 
      
    if(frm.value.length > 510){  
         alert("글자수는 한글255자로 제한됩니다.!");  
         frm.value = frm.value.substring(0,510);  
         frm.focus();  
    } 
  
  }; 