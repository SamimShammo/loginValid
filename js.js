

const submit = () =>{
    const email = document.getElementById('inputEmail3').value;
    let text = document.getElementById("p01").value;
    let pattern = /(?=.{8,})/;
   
    
       if(text == 'web@gmai.com' && email == 'web@gmai.com'){
        
        if(text.match(pattern)){
         
          
          location.href = 'https://www.w3schools.com/js/js_regexp.asp';
          return true;
         
      
      }
      else{
          alert('please type your email')
      }
  
      }
      else if(text == 'web@gmai.com'){
          alert('please type your email ')
  
      }
      else if(email == 'web@gmai.com'){
          alert('Password is invalid pleas type correct password')
  
      }
      else{
          alert('Password is invalid pleas type correct password')
      }
  
    email.value = '';
    text.value = '';
   
}
