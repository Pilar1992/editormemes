
/* elementos con innerHTML o DOM */

const txt1 = document.getElementById ("txt1");
const txt2 = document.getElementById ("txt2");


/* elementos con eventos */

const toptxt = document.getElementById("toptxt");
const btmtxt = document.getElementById("btmtxt");
const topCheck = document.getElementById("top-check");
const btmCheck = document.getElementById("btm-check");

toptxt.addEventListener("keyup", () => {
    txt1.innerHTML = toptxt.value;
});


btmtxt.addEventListener("keyup", () => {
    txt2.innerHTML = btmtxt.value;
});

topCheck.addEventListener("click", () => {
    console.log(topCheck.checked)
    if(topCheck.checked) {
       txt1.style.display = "none";
    } else {
        txt1.style.display = "block";    }
});

/* btmCheck.addEventListener("click", () => {
    console.log(btmCheck.checked)
    if(btmCheck.checked) {
       txt2.style.display = "none";
    } else {
        txt2.style.display = "block";  }
    });  */

    const actualizarFuente = () => {
        const fuente = $('text-font-select').value
        $('txt1').style.fontFamily = fuente
        $('txt2').style.fontFamily = fuente
    }; 