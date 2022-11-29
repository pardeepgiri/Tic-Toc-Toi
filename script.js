let btnRef=document.querySelectorAll(".buttion-option");
let popupRef=document.querySelector(".popup");
let newgamebtn=document.getElementById("new-game");
let restartbtn=document.getElementById("restart");
let msgRef=document.getElementById("message");

let winningperten=[
    [0,1,2],
    [0,3,6],
    [2,5,8],
    [6,7,8],
    [3,4,5],
    [1,4,7],
    [0,4,8],
    [2,4,6],
];

let xTurn=true;
let count=0;

const disableButtons=()=>{
    btnRef.forEach((element)=>(element.disabled=true));
    popupRef.classList.remove("hide");
}

const enablebuttion=()=>{
    btnRef.forEach(element=>{
        element.innerText="";
        element.disabled=false;
    });
popupRef.classList.add("hide");
};

const winfunction =(letter)=>{
    disableButtons();
    if(letter=="X"){
        msgRef.innerHTML=" &#x1F389; <br>'X' wins"
    }else{
        msgRef.innerHTML="&#x1F389; <br> 'O' wins"
    }
};

const drawfunction=()=>{
    disableButtons();
    msgRef.innerHTML="match draw"
}

newgamebtn.addEventListener("click",()=>{
    count=0;
    enablebuttion();
})
restartbtn.addEventListener("click",()=>{
    count=0;
    enablebuttion();
})


const wincheck=()=>{
    for(let i of winningperten){
        let[element1, element2, element3 ]=[
            btnRef[i[0]].innerText,
            btnRef[i[1]].innerText,
            btnRef[i[2]].innerText,
        ];
        if(element1 !==" " && element2 !=" "&&element3 !==""){
            if(element1==element2&&element2==element3){
                winfunction(element1);
            }
        }
    }
}
btnRef.forEach((element)=>{
    element.addEventListener("click",()=>{
        if(xTurn){
            xTurn=false;
            element.innerText="X";
            element.disabled=true;

        }else{
            xTurn=true;
            element.innerText="O";
            element.disabled=true;

        }
        count+=1;
        if(count===9){
            drawfunction();

        }
        wincheck();
    })
})


window.onload=enablebuttion;