var button = document.getElementById("button");
var input =document.getElementById("input");
var ul = document.querySelector("ul");
var li=document.getElementsByTagName("li");
delBtn=document.getElementsByClassName("btn");
var button1;

/* DISPLAY FUNCTION */
function display()
{
var li=document.createElement("li");
li.appendChild(document.createTextNode(input.value));
    /* CREATE BUTTONS */
var button1= document.createElement("button");
button1.innerHTML="Delete";
    /* ADD .btn CLASS ATRRIBUTE */
button1.setAttribute("class","btn");
    /* CALL DELETE FUNCTION */
button1.addEventListener("click",Delete);
li.appendChild(button1);
ul.appendChild(li);
input.value="";
}

function addWhenClick()
 {
    if(input.value)
    {
        display();
    }
     
 }


function addWhenEnter(event1)
      {
    /*console.log(event.which); gives event code */
    /*console.log(event1); gives you whole event */
    if(input.value && event1.which===13)/* event1.keyCode ==13*/
        {
           display();
        }  
}


    /* TOGGLEING .done CLASS  */
function toggle(event2)
{
    var target = event2.target;
    if(target.tagName==="LI")
        {
            target.classList.toggle("done");
        }
}


/* ADD BUTTON WITH .btn CLASS */
for(var i=0;i<li.length;i++)
{
button1=document.createElement("button");
button1.innerHTML="Delete";
button1.setAttribute("class","btn");
li[i].appendChild(button1);      
}

 
function Delete(event1)
{
var target = event1.target;
if(target.tagName="BUTTON")
    {
    target.parentElement.parentElement.removeChild(target.parentElement);
    }
}

/* CALL DELETE FUNCTION */
for(var j=0 ;j<delBtn.length;j++)
{
 delBtn[j].addEventListener("click",Delete);       
}

button.addEventListener("click",addWhenClick);
input.addEventListener("keypress" ,addWhenEnter );
ul.addEventListener("click",toggle);
       
    




    
              
