    let boxes=document.querySelectorAll(".box");
    let reset=document.querySelector("#reset-btn");
    let msgCon=document.querySelector(".msg-con");
    let msg=document.querySelector("#msg");
    let newgamebtn=document.querySelector("#new-btn");

    let turn=true;
    let count=0;

    const wining=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    boxes.forEach((box)=>{
        box.addEventListener("click",()=>{ 
            if(turn){
                box.innerText="o";
                turn=false;
            }else{
                box.innerText="x";
                turn=true;
            }
            box.disabled=true;
            checkwinner();
        });
    });

    const checkwinner=()=>{
        for(pat of wining){
            let pos1=boxes[pat[0]].innerText;
            let pos2=boxes[pat[1]].innerText;
            let pos3=boxes[pat[2]].innerText;
            if(pos1!=""&&pos2!=""&&pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                showWin(pos1);
            }
        }
    }
        count++;
        if(count===9){
            draw();
        }
    };

    const showWin=(winner)=>{
        msg.innerText=`congratulations ,winner is ${winner}`;
        msgCon.classList.remove("hide");
        dissabledbox();
    };

    const draw=()=>{
        msg.innerText=`match was draw`;
        msgCon.classList.remove("hide");
        dissabledbox();
    }

    const dissabledbox=()=>{
        for(let b of boxes){
            b.disabled=true;
        }
    };
    
    const enabledbox=()=>{
        for(let b of boxes){
            b.disabled=false;
            b.innerText="";
        }
    };

    const resetbtn=()=>{
        turn=true;
        enabledbox();
        msgCon.classList.add("hide");
    };
    newgamebtn.addEventListener("click",resetbtn); 
     reset.addEventListener("click",resetbtn); 