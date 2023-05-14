var list = document.getElementById("list")

function addTodo(){
    var input = document.getElementById("input_item")
    var li = document.createElement("li")
    var liText = document.createTextNode(input.value)
    li.appendChild(liText)

    var delBtn = document.createElement("button")
    var delText = document.createTextNode("DEL")
    delBtn.setAttribute("class", "btn")
    delBtn.setAttribute("onclick", "deleteItem(this)")
    delBtn.appendChild(delText)

    var editBtn = document.createElement("button")
    var editText = document.createTextNode("EDIT")
    editBtn.setAttribute("class", "btn")
    editBtn.appendChild(editText)
    editBtn.setAttribute("onclick", "editItem(this)")

    li.appendChild(delBtn)
    li.appendChild(editBtn)
    list.appendChild(li)
    input_item.value = ""
}
function deleteItem(e){
    e.parentNode.remove()

}
function deleteAll(){
    list.innerHTML = ""
}
function editItem(e){
    var val = prompt("Enter updated value", e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = val;
}