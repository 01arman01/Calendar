const currentDate = document.querySelector('.current-data')
const daysTag = document.querySelector('.days')
const prevNextIcon = document.querySelectorAll('.icons span')
let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();
const Month = ['January','February','March','April','May','June','July','August','September','October','November','December']

const renderCalendar = ()=>{
    let firstDayofMonth = new Date(currYear,currMonth+1).getDate()
    let lastDateOfMonth = new Date(currYear,currMonth+1, 0).getDate()
    let liTag = ''

    for(leti =firstDayofMonth;i<lastDateOfMonth ; i++){

    }
    console.log(lastDateOfMonth)
    for(let i=1; i<=lastDateOfMonth;i++ ){
        liTag += `<li>${i}</li>`
    }
    currentDate.innerText = `${Month[currMonth]} ${currYear}`
    daysTag.innerHTML = liTag
}
renderCalendar()

prevNextIcon.forEach(icon =>{
   icon.addEventListener('click',()=>{
    currMonth = icon.id === "next"? currMonth + 1 : currMonth - 1
    if(currMonth>11){
        currMonth = 0
        currYear=currYear+1
    }else if (currMonth<-1){
        currYear=currYear-1
        currMonth = 11
    }
    renderCalendar()
    return 0
   })
})

