function switchcolor() {
    const text = document.getElementById("text");
    text.classList.add("color");
}

function switchstyle() {
    const text = document.getElementById("text");
    text.classList.add("style");
}

function switchscale() {
    const text = document.getElementById("text");
    text.classList.add("scale");
}

function kresl() {
    const text = document.getElementById("text");
    text.classList.add("kresl");
}

function undoall() {
    const text = document.getElementById("text");
    text.classList.remove("color", "scale", "style", "kresl");
}
