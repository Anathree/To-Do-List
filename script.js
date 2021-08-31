let text,icon,i=0;
let temp='a';
function goal(){
let ip=document.getElementById("goalip").value;
let ULlist=document.getElementById("goallist");

    if(ip!==''){

        let todoid=new Date().getTime();
        let todoid1=temp+todoid;//b
        let $li=document.createElement("li");
        $li.innerHTML='<div id="' +todoid + '" class="list"> '+ ip +'<i class="fa fa-trash"> </i></div>';
        ULlist.appendChild($li);
    
    }
    //checked
    ULlist.addEventListener('click',(e)=>{


             if(e.target.getAttribute("class")=="list"){
                 console.log(e.target.parentElement);
                 e.target.parentElement.style.textDecoration="line-through";
                 
                }
              

                if(e.target.getAttribute("class")=="fa fa-trash"){
                    e.target.parentElement.style.display = "none";
                }
    });

    ULlist.addEventListener('dblclick',(e)=>{
        if(e.target.getAttribute("class")=="list"){
            console.log(e.target.parentElement);
            e.target.parentElement.style.textDecoration="none";
            
           }
    });    
    ULlist.addEventListener('click',(ev)=>{
        if(ev.target.getAttribute("class")=="fa fa-trash"){
            ev.target.parentElement.style.display = "none";
        }
    });
    //remove
/*    var close = document.getElementsById("todoid1");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        }
    }*/
}
