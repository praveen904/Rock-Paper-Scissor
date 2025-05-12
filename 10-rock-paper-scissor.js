let score=JSON.parse(localStorage.getItem('score')) ||{
  win:0,
  lose:0,
  tie:0
};

update();

function play(playermove){
const com=pick();
let result='';
if(playermove==='Scissor'){
  if(com==='Rock'){
    result='Lose';
  } else if(com==='Paper'){
      result='Win';
  } else if (com==='Scissor'){
      result='Tie';
  }
}
else if(playermove==='Paper'){
  if(com==='Rock'){
   result='Win';
  }else if(com==='Paper'){
   result='Tie';
  }else if (com==='Scissor'){
    result='Lose';
  }
}
else if(playermove==='Rock'){
  if(com==='Rock'){
    result='Tie';
  }else if(com==='Paper'){
    result='Lose'
  }else if (com=='Scissor'){
    result='Win';
  }
}

if(result==='Win'){
  score.win+=1;
}else if(result==='Lose'){
  score.lose+=1;
} else if(result==='Tie'){
  score.tie+=1;
}

localStorage.setItem('score',JSON.stringify(score));
update();
document.querySelector('.result')
  .innerHTML=result;

document.querySelector('.move')
  .innerHTML=`You
<img src="images/${playermove}-emoji.png" class="move-icon">
<img src="images/${com}-emoji.png" class="move-icon">
computer`;
}  
function update(){
document.querySelector('.score')
  .innerHTML=`Score: Win: ${score.win} Lose: ${score.lose} Tie: ${score.tie}`;
}


function pick(){
const randomnumber=Math.random();
let computer='';
if(randomnumber>=0 && randomnumber<1/3){
  computer='Rock';
} else if(randomnumber>=1/3 && randomnumber<2/3){
  computer='Paper';
} else if(randomnumber>2/3 && randomnumber<1){
  computer='Scissor';
}
return computer;
}