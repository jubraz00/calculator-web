var display=document.getElementById('display-box');
var btn=document.querySelectorAll('.btn button');

for(var i=0; i<btn.length; i++){
          var allBtn=btn[i]

          allBtn.addEventListener('click',function(textValue){
                  var btnvalue = textValue.target.innerText;
                  

                  if(btnvalue==='='){
                    var result=eval(display.value)
                    display.value=result;
                  }
                  else if(btnvalue==='AC'){
                    display.value='';
                  }
                  else{
                    display.value+=btnvalue;
                  }
          });
}

