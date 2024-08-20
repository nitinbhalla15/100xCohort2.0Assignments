let count =1;

function counter2(){
    setTimeout(()=>{
        console.log(count++);
        counter2();
    },1000);    
}

counter2();