const input = document.querySelector(".input");
const itemBox = document.querySelector(".box__main-items");
function main() {
    let clickCurrent = 0
    input.addEventListener("keypress", (e) => {
        if (e.key == "Enter") {
            clickCurrent++
            createItem(e.target.value)
        }    
        if(clickCurrent == 2){
            itemBox.textContent = ""
            input.value = ''
            clickCurrent = 0
        }
    })
}
main()

function createItem(value) {
    let items = value
        .split(",")
        .filter(word => word.trim() !== "")

    items.forEach(item => {
        let newItem = document.createElement("div");
        newItem.textContent = item;
        newItem.classList.add("box__main-item")
        itemBox.append(newItem)
    });
    randomChoice()
}

function randomChoice() {
    const items = document.querySelectorAll(".box__main-item")
    setTimeout(() => {
        let index = 0
        let speed = 40
        let time1 = 400
        let num = (items.length - 5) * speed
        if(items.length > 5){
            time1 -= num
        }
        let allTime = time1 * 2 * items.length
        let randomIndexInArray = Math.trunc(Math.random() * items.length + 1)
        let randomTime = time1 * randomIndexInArray
        let inter = setInterval(() => {
            if (index == items.length) {
                index = 0
                items.forEach(item => {
                    item.classList.remove("overlay")
                })
            }
            if (index == 0) {
                items[index].classList.remove("overlay")
            } else {
                items[index - 1].classList.remove("overlay")
            }
            items[index].classList.add("overlay")
            index++
        }, time1)
        setTimeout(() => {
            clearInterval(inter)
        }, randomTime + allTime)
    }, items.length + 2)

}