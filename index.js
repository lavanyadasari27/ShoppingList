let input=document.getElementById("new-task-input");
let allItems=document.getElementById("allItems");
let count=0;
let countnumber=document.getElementById("countnumber");

function addItems()
{
    let head = document.createElement("div");
    let textElement=document.createElement("h3");
    textElement.innerHTML=input.value;
    head.classList.add("addItem");
    allItems.appendChild(head);
    let spanEle=document.createElement("div");
    spanEle.innerHTML="X";
    spanEle.classList.add("delete-icon");
    head.appendChild(textElement);
    head.appendChild(spanEle);
    head.onclick=function()
    {
        head.classList.toggle("green");
        textElement.classList.toggle("strike");
    }
    
    spanEle.onclick=function()
    {
        allItems.removeChild(head);
        count=count-1;
        countnumber.textContent="No of items :"+count;

    }
    input.value='';
    
}

input.addEventListener("keydown", function(event){
    if(event.key==="Enter"){
        addItems();
        count=count+1;
        countnumber.textContent="No of items :"+count;

    }
});

