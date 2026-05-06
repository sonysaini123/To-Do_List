const inputbox=document.getElementById("inputbox");
const  listcontainer=document.getElementById(" listcontainer");
// for add task-->
function addTask() {
    if(inputbox.value==0){
        alert("please enter your task" );
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);

        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    
    }
   
    inputbox.value=" ";
    savedata();

}
// for check/unchecked or delete the task-->
listcontainer.addEventListener("click",function(element){
    if(element.target.tagName ==="SPAN"){
        element.target.parentElement.remove();
    }
    else if(element.target.tagName ==="LI" ){
        element.target.classList.toggle("checked");

    }

    savedata();
},false)






// for save the data in browser-->
function savedata() {
    localStorage.setItem("data",listcontainer.innerHTML);   
}
// for show/display the data on the browser-->
function showdata() {
    listcontainer.innerHTML=localStorage.getItem("data");
}
showdata();