let a = document.getElementById("equal");

function theme() {
    let a = document.getElementById("mainCont");
    let b = document.getElementById("span");
    let c = document.getElementById("label");
    let d = document.getElementById("btnCard");
    let e = document.getElementById("value");
    let f = document.getElementById("valueMd");
    let h = document.getElementById("autograph");
    h.classList.toggle("autograph");
    f.classList.toggle("disp");
    e.classList.toggle("disp");
    d.classList.toggle("btCard");
    c.classList.toggle("modebut");
    b.classList.toggle("span");
    a.classList.toggle("m-card");
}

let valMd = document.getElementById("valueMd");
let val = document.getElementById("value");
val.value = "";

let n = 0;

function butclr() {
    a.classList.remove("equal");
    n = 0;
    val.value = "";
    valMd.value = "";
    qq = "";
}

let prevNine = 9;

function nine() {
    a.classList.remove("equal");
    val.value += prevNine;
    valMd.value += prevNine;
}

let prevEight = 8;

function eight() {
    a.classList.remove("equal");
    val.value += prevEight;
    valMd.value += prevEight;
}

let prevSeven = 7;

function seven() {
    a.classList.remove("equal");
    val.value += prevSeven;
    valMd.value += prevSeven;
}

let prevSix = 6;

function six() {
    a.classList.remove("equal");
    val.value += prevSix;
    valMd.value += prevSix;
}

let prevFive = 5;

function five() {
    a.classList.remove("equal");
    val.value += prevFive;
    valMd.value += prevFive;
}

let prevFour = 4;

function four() {
    a.classList.remove("equal");
    val.value += prevFour;
    valMd.value += prevFour;
}

let prevThree = 3;

function three() {
    a.classList.remove("equal");
    val.value += prevThree;
    valMd.value += prevThree;
}

let prevTwo = 2;

function two() {
    a.classList.remove("equal");
    val.value += prevTwo;
    valMd.value += prevTwo;
}

let prevOne = 1;

function one() {
    a.classList.remove("equal");
    val.value += prevOne;
    valMd.value += prevOne;
}

let prevZero = 0;

function zero() {
    a.classList.remove("equal");
    val.value += prevZero;
    valMd.value += prevZero;
}

function dot() {
    a.classList.remove("equal");
    let c = val.length;
    if (val[c - 1] === ".") {
        return;
    } else if (n >= 1) {
        return;
    } else {
        n += 1;
        val.value += ".";
        valMd.value += ".";
    }
}

function delt() {
    a.classList.remove("equal");
    let v = document.getElementById("value").value;
    let l = v.length;
    let c = 0;
    let n = "";
    for (let k of v) {
        c += 1;
        if (c === l) {
            break;
        } else {
            n += k;
        }
    }
    val.value = n;
    valMd.value = n;
}



function plus() {
    a.classList.remove("equal");
    let k = val.value;
    if (k.includes("+") || k.includes("-") || k.includes("*") || k.includes("/") || k.includes("%") || k.includes("^")) {
        val.value = val.value;
        valMd.value = valMd.value;
    } else {
        if (val.value !== "") {
            val.value += "+";
            valMd.value += "+";
        }
    }
}

function minus() {
    a.classList.remove("equal");
    let k = val.value;
    if (k.includes("+") || k.includes("-") || k.includes("*") || k.includes("/") || k.includes("%") || k.includes("^")) {
        val.value = val.value;
        valMd.value = valMd.value;
    } else {
        if (val.value !== "") {
            val.value += "-";
            valMd.value += "-";
        }
    }
}

function mul() {
    a.classList.remove("equal");
    let k = val.value;
    if (k.includes("+") || k.includes("-") || k.includes("*") || k.includes("/") || k.includes("%") || k.includes("^")) {
        val.value = val.value;
        valMd.value = valMd.value;
    } else {
        if (val.value !== "") {
            val.value += "*";
            valMd.value += "*";
        }
    }
}

function divide() {
    a.classList.remove("equal");
    let k = val.value;
    if (k.includes("+") || k.includes("-") || k.includes("*") || k.includes("/") || k.includes("%") || k.includes("^")) {
        val.value = val.value;
        valMd.value = valMd.value;
    } else {
        if (val.value !== "") {
            val.value += "/";
            valMd.value += "/";
        }
    }
}

function mod() {
    a.classList.remove("equal");
    let k = val.value;
    if (k.includes("+") || k.includes("-") || k.includes("*") || k.includes("/") || k.includes("%") || k.includes("^")) {
        val.value = val.value;
        valMd.value = valMd.value;
    } else {
        if (val.value !== "") {
            val.value += "%";
            valMd.value += "%";
        }
    }
}

function square() {
    a.classList.remove("equal");
    let k = val.value;
    if (k.includes("+") || k.includes("-") || k.includes("*") || k.includes("/") || k.includes("%") || k.includes("^")) {
        val.value = val.value;
        valMd.value = valMd.value;
    } else {
        if (val.value !== "") {
            val.value += "^";
            valMd.value += "^";
        }
    }
}

function equal() {
    //  START
    a.classList.add("equal");
    let v = document.getElementById("value").value;
    let rr;
    for (let k of v) {
        if (k === "+" || k === "-" || k === "*" || k === "/" || k === "%" || k === "^") {
            rr = v.indexOf(k);
            break;
        }
    }
    let e = "";
    for (let i = 0; i < rr; i++) {
        e += v[i]
    }
    e = JSON.parse(e);

    if (String(e).length === v.length || String(e).length + 1 === v.length) {
        val.value = val.value;
        valMd.value = valMd.value;
    } else if (v === "") {
        val.value = "";
        valMd.value = "";
    } else {
        let f = "";
        let l = rr + 1;
        for (let i = l; i < v.length; i++) {
            f += v[i]
        }
        f = JSON.parse(f);
        let s = v[rr];
        if (s === "+") {
            let sum = e + f;
            val.value = sum;
            valMd.value = sum;
        } else if (s === "-") {
            let minus = e - f;
            val.value = minus;
            valMd.value = minus;
        } else if (s === "*") {
            let sum = e * f;
            val.value = sum;
            valMd.value = sum;
        } else if (s === "/") {
            let sum = e / f;
            val.value = sum;
            valMd.value = sum;
        } else if (s === "%") {
            let mod = e % f;
            val.value = mod;
            valMd.value = mod;
        } else if (s === "^") {
            let sqr = e ** f;
            val.value = sqr;
            valMd.value = sqr;
        }

    }

}