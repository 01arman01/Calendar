const currentDate = document.querySelector('.current-data')
const daysTag = document.querySelector('.days')

// getting new date,    Year and Month
let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();
// console.log('data-->',date)
// console.log('currYear-->',currYear)
// console.log('currMonth-->',currMonth)
const Month = ['January','February','March','April','May','June','July','August','September','October','November','December']

const renderCalendar = ()=>{
    let lastDateOfMonth = new Date(currYear,currMonth+1, 0).getDate()
    let liTag = ''
    console.log(lastDateOfMonth)
    for(let i=1; i<=lastDateOfMonth;i++ ){
        liTag += `<li>${i}</li>`
        console.log(i)
    }
    currentDate.innerText = `${Month[currMonth]} ${currYear}`
    daysTag.innerHTML = liTag
}
renderCalendar()
