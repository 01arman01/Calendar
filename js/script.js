const currentDate = document.querySelector('.current-data')
const daysTag = document.querySelector('.days')
const prevNextIcon = document.querySelectorAll('.icons span')
let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();
const Month = ['January','February','March','April','May','June','July','August','September','October','November','December']

const renderCalendar = ()=>{
    let firstDayofMonth = new Date(currYear,currMonth,1).getDay()
    let lastDateOfMonth = new Date(currYear,currMonth+1, 0).getDate()
    let lastDayOfMonth = new Date(currYear,currMonth, lastDateOfMonth).getDay()
    let lastDateOfLastMonth = new Date(currYear,currMonth , 0).getDate()
    let liTag = ''

    for(let i =firstDayofMonth;i>0; i--){

        liTag += `<li class="inactive">${lastDateOfLastMonth- i+1}</li>`
    }

    for(let i=1; i<=lastDateOfMonth;i++ ){
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear()? "active" : ""
        liTag += `<li class="${isToday}">${i}</li>`
    }
    for(let i=lastDayOfMonth; i<6;i++ ){
        liTag += `<li class="inactive">${i -lastDayOfMonth+1}</li>`
    }
    currentDate.innerText = `${Month[currMonth]} ${currYear}`
    daysTag.innerHTML = liTag
}
renderCalendar()

prevNextIcon.forEach(icon =>{
   icon.addEventListener('click',()=>{
    currMonth = icon.id === "next"? currMonth + 1 : currMonth - 1
    if(currMonth <0 || currMonth > 11){
        date = new  Date(currYear, currMonth)
        currYear = date.getFullYear()
        currMonth = date.getMonth()
    }else {
        date = new  Date()
    }
    renderCalendar()
    return 0
   })
})

