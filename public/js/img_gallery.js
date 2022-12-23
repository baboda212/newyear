/* 슬라이드 배너 */
let num = 0;
setInterval (function(){
    num++;
    if(num >= 3) {
        num = 0;
    };
    let imgTag = document.getElementById('photo');
    imgTag.setAttribute('src', `images/img${num}.jpg`);
},5000);

/* 날짜 함수 */
$(function(){
    function nowDate(){
        Number.prototype.pad = function (digits) {
            for (var n = this.toString(); n.length < digits; n = 0 + n);
            return n;
          };
          let now = new Date();
          let yr = now.getFullYear();
          let mo = now.getMonth();
          let dnum = now.getDate();
          let months = [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
          ];
          let month = months[mo];
          let dNum = dnum.pad(2);
      
          let dateValue = document.querySelector(".input_value");
          dateValue.value = `${yr}.${month}.${dNum}`;
      
    }
    
    nowDate();
});

    


/* 글자수 제한 */
function len_chk(){  
    let frm = document.review_box.desc; 
      
    if(frm.value.length > 510){  
         alert("글자수는 한글255자로 제한됩니다.!");  
         frm.value = frm.value.substring(0,510);  
         frm.focus();  
    } 
  
  }; 