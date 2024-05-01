var zoomRatio = 1.5;

function swapMap(id) {
    //RESET EVERYTHING//
    maps["political"].style.display = "none";
    maps["islands"].style.display = "none";
    maps["seas"].style.display = "none";
    buttons["political"].classList.remove("activeButton");
    buttons["islands"].classList.remove("activeButton");
    buttons["seas"].classList.remove("activeButton");

    //OPEN ID//
    buttons[id].classList.add("activeButton");
    maps[id].style.display = "block";
    updateZoomRatioText();
}

function zoomRatioIncrease() {
    if (zoomRatio >= 5) {
        zoomRatio = 5;
    } else if (zoomRatio < 5 && zoomRatio >= 1.5) {
        zoomRatio += 0.5;
    } else {
        zoomRatio += 0.25;
    }
    zoomRatio = Math.round(zoomRatio * 100) / 100
    updateZoomRatioText();
}

function zoomRatioDecrease() {
    if (zoomRatio <= 0.5) {
        zoomRatio = 0.5;
    } else if (zoomRatio <= 1.5) {
        zoomRatio -= 0.25;
    } else {
        zoomRatio -= 0.5;
    }
    zoomRatio = Math.round(zoomRatio * 100) / 100
    updateZoomRatioText();
}

function updateZoomRatioText() {
    zoomRatioText1.innerHTML = zoomRatio;
    zoomRatioText2.innerHTML = zoomRatio;
    zoomRatioText3.innerHTML = zoomRatio;
}



var addZoom = target => {
    let container = document.getElementById(target),
        imgsrc = container.currentStyle || window.getComputedStyle(container, false);
    imgsrc = imgsrc.backgroundImage.slice(4, -1).replace(/"/g, "");
    let img = new Image();
    img.src = imgsrc;
    img.onload = () => {
        let ratio = img.naturalHeight / img.naturalWidth,
            percentage = ratio * 100 + "%";
        container.onmousemove = e => {
            let rect = e.target.getBoundingClientRect(),
                xPos = e.clientX - rect.left,
                yPos = e.clientY - rect.top,
                xPercent = xPos / (container.clientWidth / 100) + "%",
                yPercent = yPos / ((container.clientWidth * ratio) / 100) + "%";

            Object.assign(container.style, {
                backgroundPosition: xPercent + " " + yPercent,
                backgroundSize: img.naturalWidth/zoomRatio + "px"
            });
        };
        container.onmouseleave = e => {
            Object.assign(container.style, {
                backgroundPosition: "center",
                backgroundSize: "cover"
            });
        };
    }
};

window.onload = () => {
    addZoom("politicalmap");
    addZoom("islandmap");
    addZoom("seamap");
}