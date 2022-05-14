const endGameData = [{
    name: "space-stone",
    avengers: ["captain-america", "iron-man"]
}, {
    name: "mind-stone",
    avengers: ["ant-man", "captain-america"]
}, {
    name: "reality-stone",
    avengers: ["rocket-raccoon", "thor"]
}, {
    name: "power-stone",
    avengers: ["war-machine", "nebula"]
}, {
    name: "time-stone",
    avengers: [{
        name: "hulk"
    }]
}, {
    name: "soul-stone",
    avengers: ["black-widow", "hawkeye"]
}];


const stones = document.querySelectorAll('.stone');
const avengers = document.querySelectorAll('.avenger');
const glove = document.querySelector('.infinity_glove');

let selected = {
    stone: null,
    avenger: []
}

function handleCorrect(elem) {
    avengers.forEach((avenger) => {
        if (selected.avenger.includes(avenger.id)) {
            avenger.style.display = "none"
        }
    })
    stones.forEach((stone) => {
        if (selected.stone.includes(stone.id)) {
            stone.style.display = "none"
        }
    })
    clearSelection()
}

function clearSelection() {
    avengers.forEach((avenger) => {
        if (selected.avenger.includes(avenger.id)) {
            avenger.style.backgroundColor = "white"
        }
    })
    stones.forEach((stone) => {
        if (selected.stone.includes(stone.id)) {
            stone.style.backgroundColor = "white"
        }
    })
    selected.avenger=[]
    console.log(selected)
    }





function checkAnswers() {
    const relData = endGameData.filter(data => data.name == selected.stone)
    if (_.isEqual(relData[0].avengers.sort(), selected.avenger.sort())) {
        handleCorrect(relData)
    } else {
        alert("Nope")
        clearSelection()

    }
}

let me = glove.addEventListener('click', ({
    target
}) => {
    checkAnswers(target, selected);
})

avengers.forEach(function (avenger) {
    avenger.addEventListener('click', ({
        target
    }) => {
        onClick(target);
    });
});

stones.forEach(function (stone) {
    stone.addEventListener('click', ({
        target
    }) => {
        onClick(target);
    });
});

function onClick(elem) {
    handleSelectView(elem)
    handleSelectData(elem)
    console.log(selected)
}


function handleSelectView(elem) {
    if (elem.style.backgroundColor != "green") {
        elem.style.backgroundColor = "green"
    } else {
        elem.style.backgroundColor = ""

    }
}

function handleSelectData(elem) {
    if (elem.className.includes("stone")) {
        if (selected.stone === elem.id) {
            selected['stone'] = undefined
            console.log(selected)

        }
        selected.stone = elem.id
    } else if (elem.className.includes("avenger")) {
        if (selected.avenger.includes(elem.id)) {
            removeSpesificValue(elem.id, selected.avenger)
        } else selected.avenger.push(elem.id)
    }
}




function removeSpesificValue(val, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            arr.splice(i, 1);
        }
    }
}