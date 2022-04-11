
let user = document.getElementById('data');
let getall = document.querySelectorAll('.box');
let head = document.getElementById('status');
let found = false;

const binarySearch = function(){
    if(user.value === ""){
        alert('please enter a value');
    }else{

   
    getall.forEach(function(ele){
        ele.style.background='white';
    })
    let l = 0;
    let r = 9;
    let arr = [];
    while(l<=r){
        let mid = l+(r-l)/2;
        let mini = parseInt(mid);
        // let bx = document.getElementById('bx2');
        // console.log(mini+1);
        let bx = document.getElementById(`bx${mini+1}`);
        // console.log(bx);
        arr.push(bx);
        if(bx.innerHTML === user.value){
            break;
        }else if(bx.innerHTML > user.value){
            r = mini-1;
        }else{
            l = mini+1;
        }

    }

    arr.every(function(ele,ind){
        let delay = ind+1;
        setTimeout(()=>{
            ele.style.background='blue';
            if(ele.innerHTML === user.value){
                ele.style.background='green';
                head.innerHTML = `element found at index ${ind+1}`
                found = true;
                
            }
            
        },delay*500);
        return true;
        
    })

    setTimeout(()=>{
        if(found == false){
          
              head.innerHTML = `The element not found`;
        }
      },4*500);

}
}


let btn = document.getElementById('btn1');
btn.addEventListener('click',binarySearch);