const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const colorBox = document.querySelector(".box");
const colorCode =  document.getElementById("colorCode")
const copiedMsg = document.querySelector("#copied")



function randomColor(){
        const color = Math.floor(Math.random()*16777215).toString(16);
    const hex = `#${color}`
    document.body.style.backgroundColor = hex
    colorBox.style.backgroundColor = hex
    colorBox.style.border = "none"
    colorCode.innerText = hex
}
function copyColor(){
    navigator.clipboard.writeText(document.getElementById("colorCode").innerText);
    copiedMsg.style.display = "block"
    copiedMsg.style.color = "darkred"
    setTimeout(()=>{
        copiedMsg.style.display = "none"
    },1500)


}