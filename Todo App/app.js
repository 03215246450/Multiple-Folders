var input = document.getElementById("inp")
var ul = document.getElementById("ul")


function addTask(){
    console.log(input.value);
    var li = document.createElement("li")
    var liVal = document.createTextNode(input.value)
    li.appendChild(liVal)
 
    var dltbtn = document.createElement("button")
    var dlttext = document.createTextNode("Delete")
    dltbtn.appendChild(dlttext)
    dltbtn.setAttribute("class", "butn")
    dltbtn.setAttribute("onclick", "delete_li(this)")
    li.appendChild(dltbtn)

    var editbtn = document.createElement("button")
    var addtext = document.createTextNode("Edit")
    editbtn.appendChild(addtext)
    editbtn.setAttribute("onclick", "Addtext(this)")
    li.appendChild(editbtn)



    ul.appendChild(li)
    input.value = ""

}


function delete_li(dltbtn){
    console.log(dltbtn.parentNode);
    dltbtn.parentNode.remove()
}


function Addtext(btn){
    btn.parentNode.firstChild.nodeValue = prompt("Enter text here")
}
