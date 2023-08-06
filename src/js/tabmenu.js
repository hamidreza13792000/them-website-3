const btntabs=document.querySelectorAll(".btntabs");
const contenttab=document.querySelectorAll(".contenttab");

btntabs.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        btntabs.forEach((item)=>{item.classList.remove("bg-[#c8e0ffa5]");})
        item.classList.add("bg-[#c8e0ffa5]");
        contenttab.forEach(item=>{item.classList.add("hidden")})
        contenttab[index].classList.remove("hidden")
        contenttab[index].classList.add("flex");
    });
})