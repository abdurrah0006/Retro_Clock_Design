/*======= Clock =======*/
const hour = document.getElementById('clock-hour'),
      minutes = document.getElementById('clock-minutes')

const clock = () =>{
    //gets the date object
    let date = new Date()

    //every hours the hour hand rotates 30deg so 12x30=360

    //gets hour and minutes
    //(current time) / 12(hours) * 360(deg circle)
    //(current minutes) / 60(minutes) * 360(deg circle)

    let hh = date.getHours() / 12 * 360,
        mm = date.getMinutes() / 60 * 360

    //Adding rotation to the element
    hour.style.transform = `rotateZ(${hh + mm / 12}deg)`
    minutes.style.transform = `rotateZ(${mm}deg)`

}
setInterval(clock,1000) //1000 = 1s (updates every 1s)

/*======= Time And Date Text =======*/
const dateDayWeek = document.getElementById('date-day-week'),
      dateMonth = document.getElementById('date-month'),
      dateDay = document.getElementById('date-day'),
      dateYear = document.getElementById('date-year'),
      dateHour = document.getElementById('text-hour'),
      dateMinutes = document.getElementById('text-minutes'),
      dateAmPM = document.getElementById('text-ampm')
      
const clockText = () =>{
    let date = new Date()

    //gets time and date
    let dayWeek = date.getDay(),
        month = date.getMonth(),
        day = date.getDate(),
        year = date.getFullYear(),
        hh = date.getHours(),
        mm = date.getMinutes(),
        ampm

    //Gets days of the week and months (Sunday first)
    let daysWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    //Add the corresponding dates
    dateDayWeek.innerHTML = `${daysWeek[dayWeek]}`
    dateMonth.innerHTML = `${months[month]}`
    dateDay.innerHTML = `${day},`
    dateYear.innerHTML = year
    
    //If greater than 12 then, -12 so starts at 1
    if(hh >= 12){
        hh = hh - 12
        ampm = 'PM'
    }else{
        ampm = 'AM'
    }

    dateAmPM.innerHTML = ampm

    //if 0 then, changes to 12 hours
    if (hh == 0){
        hh = 12
    }

    //Less than 10 gets a 0-- hours
    if(hh < 10){
        hh = `0${hh}`
    }

    dateHour.innerHTML = `${hh}`

    //Less than 10 gets a 0 -- minutes
    if(mm < 10){
        mm = `0${mm}`
    }

    dateMinutes.innerHTML = `: ${mm}`

}
setInterval(clockText, 1000)
