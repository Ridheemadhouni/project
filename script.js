const boxes = document.querySelectorAll("section");

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        boxes.forEach((item) => {
            item.style.border = "none";
        });

        box.style.border = "4px solid #7cbbf3";
    });
});

const topButton = document.createElement("button");

topButton.innerText = "↑ Top";
topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.padding = "12px 20px";
topButton.style.fontSize = "18px";
topButton.style.border = "none";
topButton.style.borderRadius = "30px";
topButton.style.backgroundColor = "#24527a";
topButton.style.color = "#e0ebeb";
topButton.style.cursor = "pointer";
topButton.style.display = "none";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});

topButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});