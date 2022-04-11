// console.log("Hello Algo!");
// let url = new URL(window.location.href);
// let params = new URLSearchParams(url.search);
// let user = params.get("input");
// console.log(user);

let getall = document.querySelectorAll('.box');
let user = document.getElementById("data");



function LinearSearch(e) {

  if(user.value === ""){
    alert("enter a vlue");
}else{
  getall.forEach(function(ele){
    ele.style.background = 'white';
  })
  
  // console.log("button clicked");
  
  console.log(`user valuse is ${user.value}`)
  

 
 
  if(user.value === "") {
    console.log('please enter a valid value');
  }
  let divs = [];
  for (let i = 1; i <= 10;i++) {
    let bx = document.getElementById(`bx${i}`);
   // bx.innerHTML = `${Math.floor(Math.random() * 10)}`;
    divs.push(bx);
    // bx.style.color = 'white';

  }
  let found = false;
  let index;
  divs.every(function(ele,ind){
    let bx = ele;
    let delay = ind+1;
      setTimeout(()=>{ 
      bx.style.background = "blue";
      if (bx.innerHTML === user.value) {
        bx.style.background = "green";
        index = ind;
        found = true;
        if(found === true){
          let status = document.getElementById('status');
          status.innerHTML = `The element found at index ${ind + 1}`;
        }
      }
    },delay*500);
  if(bx.innerHTML === user.value){
    return false;
  }
 return true;
})
setTimeout(()=>{
  if(found == false){
    let status = document.getElementById('status');
        status.innerHTML = `The element not found`;
  }
},11*500);


}

}