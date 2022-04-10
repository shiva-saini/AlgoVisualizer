console.log("Hello Algo!");
// let btn = document.getElementById("btn1");
// // btn.addEventListener('click',linearSearch);
// // function linearSearch(e){
// // console.log("hello world");
// // }
// console.log(btn);

function LinearSearch(e) {
  console.log("button clicked");
  let user = document.getElementById("data");
  let divs = [];

  for (let i = 1; i <= 10;i++) {
    let bx = document.getElementById(`bx${i}`);
    divs.push(bx);
  }

  let found = false;
  divs.forEach(function(ele,ind){
    let bx = ele;
    let delay = ind+1;
 
    let id = setTimeout(()=>{
        
      bx.style.background = "blue";
      if (bx.innerHTML === user.value) {
        bx.style.background = "green";
        
        found = true;
        if(found === true){
      
          let status = document.getElementById('status');
          status.innerHTML = `The element found at index ${ind + 1}`;
          clearTimeout(id);
        }
       
      }

    },delay*500);

    
    

   
   
})



setTimeout(()=>{
  if(found == false){
    let status = document.getElementById('status');
        status.innerHTML = `The element not found`;
  }
},11*500);




}


// $('.box').each(function(){
//   setTimeout(function(x){
//   $(x).css("background-color","lightgoldenrodyellow");
// },(delay++)*500,this);
// });