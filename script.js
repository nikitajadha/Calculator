var screen = document.querySelector('.calculator .screen input')
var actionButtons = document.querySelectorAll('.calculator .operation .actions button')
var numberButtons = document.querySelectorAll('.calculator .operation .numbers button')

actionButtons.forEach((button)=>{
    button.addEventListener('click',()=>{
        let prevData = screen.value
        prevData=prevData+button.getAttribute('data-attr').toString() 
        screen.value =prevData
    })
})
numberButtons.forEach((button)=>{
    button.addEventListener('click',()=>{
        let prevData = screen.value
        prevData=prevData+button.getAttribute('data-attr').toString() 
        screen.value =prevData
    })
})

var clearButton = document.querySelector('.calculator .operation .numbers .clear')
var equalButton = document.querySelector('.calculator .operation .numbers .equal')

clearButton.addEventListener('click',()=>{
    screen.value=""

})
equalButton.addEventListener('click',()=>{
    let expression = screen.value
    let result = eval(expression)
    screen.value=result

})

