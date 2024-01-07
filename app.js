let h4=document.querySelector('h4');

let btn=document.querySelector('button');

let check=0;
btn.addEventListener("click",function(){

    if(check==0){
    h4.innerText="Friends";
    h4.style.color="green";
    btn.innerText="Remove";
    btn.style.backgroundColor="#dadada";
    btn.style.color="black";
    check=1;
    }
    else{
        h4.innerText="Strangers";
        h4.style.color="Red";
        btn.style.backgroundColor="cadetblue";
        btn.innerText="Add Friend";
        btn.style.color="#fff";
       
        check=0;
    }

})