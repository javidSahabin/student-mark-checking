
let nameBox = document.getElementById("nameBox");
let markBox = document.getElementById("markBox");
let resultList = document.querySelector(".list");
let checkingBtn = document.getElementById("checkBtn");

checkingBtn.addEventListener("click", () => {
    let nameValue = nameBox.value.trim();
    let markValue = parseInt(markBox.value.trim());
    
    if(!nameValue || !markValue){
        alert("Enter name and mark");
    }

    let list = document.createElement("li");
    list.innerHTML = `Name: ${nameValue}<br>Mark: ${markValue}`

    let passed = document.createElement("p");
    passed.innerText = markValue >= 50 ? "Wow! Your passed" : "Sorry your failed";

    let passOrFaild = markValue >=50 ? "fa-circle-check" : "fa-circle-exclamation";
    let resultIndicator = document.createElement("i");
    resultIndicator.classList.add("fa-solid", passOrFaild);

    let trash = document.createElement("i");
    trash.classList.add("fa-regular", "fa-circle-xmark")

    list.append(passed, resultIndicator, trash);
    resultList.appendChild(list)

    resultList.addEventListener("click", (event) => {
        if(event.target.classList.contains("fa-circle-xmark")){
            event.target.parentElement.remove()
        }
    })
})