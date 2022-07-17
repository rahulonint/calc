const input = document.querySelector(".form input")

// first row
const ac = document.querySelector(".ac")
const mod = document.querySelector(".mod")
const div = document.querySelector(".div")
const mul = document.querySelector(".mul")

// second row
const seven = document.querySelector(".seven")
const eight = document.querySelector(".eight")
const nine = document.querySelector(".nine")
const sub = document.querySelector(".sub")

// third row
const four = document.querySelector(".four")
const five = document.querySelector(".five")
const six = document.querySelector(".six")
const add = document.querySelector(".add")

// fourth row
const one = document.querySelector(".one")
const two = document.querySelector(".two")
const three = document.querySelector(".three")

// fifth row
const double_zero = document.querySelector(".double-zero")
const zero = document.querySelector(".zero")
const period = document.querySelector(".period")
const equal = document.querySelector(".equal")

//------------------------------end of selection all rows----------------------------------------

// adding keypress event for input tag
input.addEventListener("keypress",(e)=>{
e.preventDefault()
if(e.key!=="Enter"){
input.value+=e.key
}
else{
    input.value=eval(input.value)
}
})

// clearing inner data of input tag
ac.addEventListener("click", () => {
    if (input.value !== "") {
        input.value = ""
    }
})

// making string for evaluation
function num(element) {
    element.addEventListener("click", () => {
        input.value += element.innerText
    })
}

// evaluating value
equal.addEventListener("click", () => {
    if (input.value[input.value.length - 1] === "%" || input.value[input.value.length - 1] === "/" || input.value[input.value.length - 1] === "X" || input.value[input.value.length - 1] === "-" || input.value[input.value.length - 1] === "+") {
        input.value = ""
    }

    // for multiply
    if (input.value.includes("X")) {
        input.value = input.value.replaceAll("X", "*")
    }


    if (input.value !== "") {
        input.value = eval(input.value)
    }
})


num(mod)
num(div)
num(mul)

num(seven)
num(eight)
num(nine)
num(sub)

num(four)
num(five)
num(six)
num(add)

num(one)
num(two)
num(three)

num(double_zero)
num(zero)
num(period)
