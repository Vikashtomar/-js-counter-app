 let result = document.getElementById("para");

 let count = 0;
 function add(){
   count++;
    result.innerHTML = count;
    console.log("jo")

 }


 function sub(){
   count--;
   if(count < 0){
      count = 0;    

   }
   result.innerHTML = count;
   console.log("hello")

 }
 
 