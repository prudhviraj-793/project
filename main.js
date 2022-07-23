let btn = document.getElementById("btn").addEventListener("click", function() {
    let parent = document.getElementById("list");
    let child = document.createElement("li");
    let edit = document.createElement("button");
    edit.appendChild(document.createTextNode("Edit"));
    let del = document.createElement("button");
    del.appendChild(document.createTextNode("Delete"));
    child.innerHTML = `${document.getElementById("ip1").value} - ${document.getElementById("ip2").value} - 
    ${document.getElementById("ip3").value} ${edit} ${del}`;
    parent.append(child);
});