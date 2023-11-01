let colors = ["red", "green", "blue", "gray", "yellow"];

let box = document.querySelectorAll(".box");
box.forEach((ele,index) => {
    ele.style.backgroundColor = colors[index];
    ele.addEventListener('click',()=>{
        document.body.style.backgroundColor  = colors[index];
    })
})