const li = document.createElement("li");
li.className = "colleciton-item";
li.id = "new-item";

li.setAttribute("title", "new-item");

li.appendChild(document.createTextNode("Hello World"));

console.log(li);

//apped the new element as a child to an old element
document.querySelector("#practiceForm").appendChild(li);

//Similarly other elements, and other tags can be appended
/*
Create element
Assign classNames, Id, setAttributes
Then append it as a child
For text - create Text Node and append it
*/
