if(screen.width/screen.height>711/760){
    style.href='style.css'
}
for(let i=100;i>=91;i--){
    let box=document.createElement('div');
    box.id='b'+i;
    box.innerHTML=i;
    box.style.border="solid 1px";
    if(i&1)box.style.backgroundColor="#42f548";
    else box.style.backgroundColor="white";
    board.appendChild(box);
}
for(let i=81;i<=90;i++){
    let box=document.createElement('div');
    box.id='b'+i;
    box.innerHTML=i;
    box.style.border="solid 1px";
    if(i&1)box.style.backgroundColor="#42f548";
    else box.style.backgroundColor="white";
    board.appendChild(box);
}
for(let i=80;i>=71;i--){
    let box=document.createElement('div');
    box.id='b'+i;
    box.innerHTML=i;
    box.style.border="solid 1px";
    if(i&1)box.style.backgroundColor="#42f548";
    else box.style.backgroundColor="white";
    board.appendChild(box);
}
for(let i=61;i<=70;i++){
    let box=document.createElement('div');
    box.id='b'+i;
    box.innerHTML=i;
    box.style.border="solid 1px";
    if(i&1)box.style.backgroundColor="#42f548";
    else box.style.backgroundColor="white";
    board.appendChild(box);
}
for(let i=60;i>=51;i--){
    let box=document.createElement('div');
    box.id='b'+i;
    box.innerHTML=i;
    box.style.border="solid 1px";
    if(i&1)box.style.backgroundColor="#42f548";
    else box.style.backgroundColor="white";
    board.appendChild(box);
}
for(let i=41;i<=50;i++){
    let box=document.createElement('div');
    box.id='b'+i;
    box.innerHTML=i;
    box.style.border="solid 1px";
    if(i&1)box.style.backgroundColor="#42f548";
    else box.style.backgroundColor="white";
    board.appendChild(box);
}
for(let i=40;i>=31;i--){
    let box=document.createElement('div');
    box.id='b'+i;
    box.innerHTML=i;
    box.classList.add('add');
    box.style.border="solid 1px";
    if(i&1)box.style.backgroundColor="#42f548";
    else box.style.backgroundColor="white";
    board.appendChild(box);
}
for(let i=21;i<=30;i++){
    let box=document.createElement('div');
    box.id='b'+i;
    box.innerHTML=i;
    box.style.border="solid 1px";
    if(i&1)box.style.backgroundColor="#42f548";
    else box.style.backgroundColor="white";
    board.appendChild(box);
}
for(let i=20;i>=11;i--){
    let box=document.createElement('div');
    box.id='b'+i;
    box.innerHTML=i;
    box.style.border="solid 1px";
    if(i&1)box.style.background="#42f548";
    else box.style.backgroundColor="white";
    board.appendChild(box);
}
for(let i=1;i<=10;i++){
    let box=document.createElement('div');
    box.id='b'+i;
    box.innerHTML=i;
    box.style.border="solid 1px";
    if(i&1)box.style.backgroundColor="#42f548";
    else box.style.backgroundColor="white";
    board.appendChild(box);
}
var player=[0,0,-1,-1];
var i=0;
let diceroll=new Audio('diceroll.mp3');
let pop=new Audio('popo.mp3');
let success=new Audio('success.mp3')
let yeah=new Audio('yeah.mp3');
let no=new Audio('ohno.mp3');
let good=new Audio('good.mp3');
var names=["player1","player2","player3","player4"];
var winner=[];
var ct=true;
var number;
roll.addEventListener('click',full_game);
var total_number=2;
btn1.onclick=()=>{
    pop.play();
    total_number=2;
    player=[0,0,-1,-1];
    ind.style.display="none";
    name2.style.display='none';
    name3.style.display='none';
    name1.style.display='flex'
}
btn2.onclick=()=>{
    pop.play();
    total_number=3;
    player=[0,0,0,-1];
    ind.display="None";
    ind.style.display="none";
    name1.style.display='none'
    name3.style.display='none'
    name2.style.display='flex';
}
btn3.onclick=()=>{
    pop.play();
    total_number=4;
    player=[0,0,0,0];
    ind.style.display="None";
    ind.style.display="none";
    name1.style.display='none';
    name2.style.display='none';
    name3.style.display='flex';
    pop.play();
}
play1.onclick=()=>{
    pop.load();
    pop.play();
    names[0]=n11.value;
    names[1]=n12.value;
    name1.style.display="none";
    name2.style.display="none";
 name3.style.display="none";
 info.innerHTML=`Turn for ${names[0]}`;
 container=document.getElementById('game-container');
 container.style.display='flex';
}
play2.onclick=()=>{
    pop.load();
    pop.play();
    names[0]=n21.value;
    names[1]=n22.value;
    names[2]=n23.value;
    name1.style.display="none";
    name2.style.display="none";
    name3.style.display="none";
    info.innerHTML=`Turn for ${names[0]}`;
    container=document.getElementById('game-container');
    container.style.display='flex';
}
play3.onclick=()=>{
    pop.load();
    pop.play();
    names[0]=n31.value;
    names[1]=n32.value;
    names[2]=n33.value;
    names[3]=n34.value;
    name1.style.display="none";
    name2.style.display="none";
    name3.style.display="none";
    info.innerHTML=`Turn for ${names[0]}`;
    container=document.getElementById('game-container');
    container.style.display='flex';
}
function check_presence(oldpos,p){
    let x=-1;
     for(let i=0;i<4;i++){
        if(oldpos==player[i] && i!=p){
           x=i;
        }
    }
    return x;
    }
function updatecolor(oldpos,newpos,p,delay=0){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            color=['red','yellow','blue','green'];
            let elem=document.getElementById(`b${oldpos}`);
            if(oldpos!=0){
                let k=check_presence(oldpos,p);
                if(k==-1){
                    if(oldpos&1)elem.style.backgroundColor="#42f548";
                    else elem.style.backgroundColor="white";
                }
                else{
                    elem.style.backgroundColor=color[k];
                }
            }
            elem=document.getElementById(`b${newpos}`);
            elem.style.backgroundColor=color[p];
            resolve();
        },delay);
    })
}
function rolling_function(){
    return new Promise((resolve, reject) => {
        number=Math.floor(Math.random()*6)+1;
        image.src='rollingdice.gif'
        diceroll.load();
        diceroll.play();
        setTimeout(function(){
            if(number==1){image.src="dice1.jpeg";ct=false;}
            else if(number==2){image.src="dice2.jpeg";ct=true;}
            else if(number==3){image.src="dice3.jpeg";ct=true;}
            else if(number==4){image.src="dice4.jpeg";ct=true;}
            else if(number==5){image.src="dice5.jpeg";ct=true;}
            else if(number==6){image.src="dice6.jpeg";ct=true;} 
            resolve(1);
        },1000)  
    })
}
function hide_roLL(){
    return new Promise((resolve, reject) => {
        roll.hidden=true;
        resolve();   
    })
}
function ladder_help(poi,pl){
    return new Promise((resolve, reject) => {
        if(poi==80){
            yeah.load();
            yeah.play();
            player[i]=99;
            updatecolor(poi,player[i],i,500);
            ct=false;
        }
        if(poi==38){
            yeah.load();
            yeah.play();
            player[i]=96;
            updatecolor(poi,player[i],i,500);
            ct=false;
        }
        if(poi==71){
            yeah.load();
            yeah.play();
            player[i]=92;
            updatecolor(poi,player[i],i,500);
            ct=false;
        }
        if(poi==28){
            yeah.load();
            yeah.play();
            player[i]=76;
            updatecolor(poi,player[i],i,500);
            ct=false;
        }
        if(poi==8){
            yeah.load();
            yeah.play();
            player[i]=30;
            updatecolor(poi,player[i],i,500);
            ct=false;
        }
        if(poi==50){
            yeah.load();
            yeah.play();
            player[i]=67;
            updatecolor(poi,player[i],i,500);
            ct=false;
        }
        if(poi==21){
            yeah.load();
            yeah.play();
            player[i]=42;
            updatecolor(poi,player[i],i,500);
            ct=false;
        }
        resolve();
    })
}
function snake_bite(poi,pl){
    return new Promise((resolve, reject) => {
        if(poi==48){
            no.load();
            no.play();
            player[i]=26;
            updatecolor(poi,player[i],i,500);
            ct=true;
        }
        if(poi==36){
            no.load();
            no.play();
            player[i]=6;
            updatecolor(poi,player[i],i,500);
            ct=true;
        }
        if(poi==32){
            no.load();
            no.play();
            player[i]=11;
            updatecolor(poi,player[i],i,500);
            ct=true;
        }
        if(poi==97){
            no.load();
            no.play();
            player[i]=78;
            updatecolor(poi,player[i],i,500);
            ct=true;
        }
        if(poi==62){
            no.load();
            no.play();
            player[i]=18;
            updatecolor(poi,player[i],i,500);       
            ct=true;
        }
        if(poi==89){
            no.load();
            no.play();
            player[i]=54;
            updatecolor(poi,player[i],i,500);
            ct=true;
        }
        if(poi==94){
            no.load();
            no.play();
            player[i]=56;
            updatecolor(poi,player[i],i,500);
            ct=true;
        }
        resolve();
    })
}
function show_roll(){
    return new Promise((resolve, reject) => { 
        roll.hidden=false;
        resolve();
    })
}
function move(){
    return new Promise(async(resolve, reject) => {
        if(number==1 && player[i]==0){
            pop.load();
            pop.play();
            player[i]=1;
            await updatecolor(0,1,i,500);
            resolve();              
        }
        else if(player[i]+number<=100 && player[i]!=0){
            let oldx=player[i];
            let x=player[i]+number;
            while(oldx!=x){
                pop.load();
                pop.play();
                player[i]++;
                await updatecolor(oldx,player[i],i,500);
                oldx++;
            }
            resolve()
        }
        else{
            resolve();
        }
    })
}
function checkwinner(){
    if(player[i]==100){
        good.load();
        good.play();
        player[i]=-2;
        winner.push(names[i]);
        ct=true;
    } 
}
function leader(){
    return new Promise((resolve, reject) => {   
        container=document.getElementById('game-container');
        container.style.display='none';
        leaderboard.style.display='flex';
        if(total_number==2){
            w1.innerHTML=`1<sup>st</sup>  ${winner[0]}`;
        }
        else if(total_number==3){
        w1.innerHTML=`1<sup>st</sup>  ${winner[0]}`;
        w2.innerHTML=`2<sup>nd</sup>  ${winner[1]}`;
    }
         else if(total_number==4){
            w1.innerHTML=`1<sup>st</sup>  ${winner[0]}`;
            w2.innerHTML=`2<sup>nd</sup>  ${winner[1]}`;
            w3.innerHTML=`3<sup>rd</sup>  ${winner[2]}`;
    
        }
        success.play();
        resolve();
    })
    }
    function checkgameover(){
        return new Promise((resolve, reject) => {  
            let oo=0;
           for(let o=0;o<4;o++){
                if(player[o]<=-1){oo++;}
           }
           if(oo>=3){
            leader();
            reject();
           }
           resolve();
        })
    }
function change_turn(){
    return new Promise((resolve, reject) => {
        if(ct){
            i=i+1;
            i%=total_number;
            while(player[i]==-2){
                i=i+1;
                i%=total_number;
             }
             i%=total_number;
            info.innerHTML=`Turn for ${names[i]}`;
         }
         roll.hidden=false;
         resolve();
    })
}
async function full_game(){
    await hide_roLL();
    await rolling_function();
    await move();
    await checkwinner();
    await checkgameover().catch((err)=>{});
    await ladder_help(player[i],i);
    await snake_bite(player[i],i);
    await change_turn()
    await show_roll();
}
reset.onclick=()=>{
    let kk=confirm('Do you want to RESET');
    if(kk)location.reload();
}
reset2.onclick=()=>{
    let kk=confirm('Do you want to RESET');
    if(kk)location.reload();
}
