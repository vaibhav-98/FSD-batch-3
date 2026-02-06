function addPara() {
    // create element 
   let p = document.createElement('p')

   //2. Add text  
   p.innerText = "New Paragraph added successfully"

    let container = document.getElementById("container");
    

    //3.
    container.appendChild(p);
}

function removePara() {
    let para = document.getElementById("remove")
    para.remove()
}