
var count=0;
 window.random=[];
var gameScore=document.getElementById("gameScore");
var container=document.getElementById("container");
var displayStatus=document.getElementById("resultDisplay");
createRandomMine();
for(let i=1;i<=81;i++)
{
    
    let newDiv = document.createElement("div");
    newDiv.id=`cell_{${i}}`;
    newDiv.className="game-div";
    newDiv.addEventListener("click",divClicked);
    container.appendChild(newDiv);
    
}


function onRestart()
{
    count=0;
    gameScore.innerHTML="0";
    for(let i=1;i<=81;i++)
{
    
        document.getElementById(`cell_{${i}}`).addEventListener("click", divClicked);
        document.getElementById(`cell_{${i}}`).classList.add('game-div');
        document.getElementById(`cell_{${i}}`).classList.remove('green-div');
        document.getElementById(`cell_{${i}}`).classList.remove('red-div');
    
    
}
displayStatus.innerHTML="";
createRandomMine();
    
}


function createRandomMine()
{
 window.random=[];
while(window.random.length!=10)
{
    let a= Math.floor(Math.random()*100);
    
    if(a<82)
    {
        
        if(!window.random.includes(`cell_{${a}}`))
        window.random.push(`cell_{${a}}`);
    }   
    
}
console.log(window.random);
}




function divClicked()
{
    
    if(window.random.includes(this.id))
    {
        this.classList.remove('game-div');
        this.classList.add('red-div');
        looseGame();
    }
    else
    {
        this.classList.remove('game-div');
        this.classList.add('green-div');
        
        this.removeEventListener("click", divClicked);
        count++;
        gameScore.innerHTML=count;
        winGame();
        
    }
}

function looseGame()
{
    for(let i=0;i<window.random.length;i++)
    {
        document.getElementById(window.random[i]).classList.add('red-div');
        document.getElementById(window.random[i]).classList.remove('game-div');
    }
    
    displayStatus.innerHTML=`game over`;
    for(let i=1;i<=81;i++)
        {
         
                document.getElementById(`cell_{${i}}`).removeEventListener("click", divClicked);
             
        }
}

function winGame()
{
        if(count==71)
        {
            displayStatus.innerHTML=`win`;
            
            for(let i=1;i<=81;i++)
            {
                
                document.getElementById(`cell_{${i}}`).removeEventListener("click", divClicked);
                
            }
        }
}