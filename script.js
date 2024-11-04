function ruin() {
    let boundary = document.getElementsByClassName("fc-content")[0];
    for (let item of document.getElementsByClassName("fc-event")) {
        item.style.left = (Math.random() * boundary.clientWidth) + "px";
        item.style.top = (Math.random() * boundary.clientHeight) + "px";
        item.style.transform = "rotate(" + (Math.random() * 360) + "deg)";
    }
}

setTimeout(() => {
    if (Math.random() < 0.05) {
        ruin();
    }
}, 750)

window.onkeydown = (e) => {
    if (e.key === "?")
        ruin();  
}