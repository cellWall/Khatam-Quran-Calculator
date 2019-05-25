function calculateDaysNeeded() {
    const numberOfPages = document.getElementById("numberOfPages").value
    const daysNeeded = 604 / numberOfPages

    let message = 'you need ' + daysNeeded + ' days to read.';

    if (daysNeeded <= 365) {
        message += "Well done! you are going to finish the Quran in less than a year!!"
    } else {
       message += "Do not worry, with patience comes success!"
    }

    if (numberOfPages > 604) {
        message = "there are only 604 pages in the Qur'an."
    } else if (numberOfPages < 0) {
        message = "the least number of pages you can read is 0"
    }
    
    if (numberOfPages && numberOfPages >0 && numberOfPages <605){
        message = daysNeeded.toFixed(0) + ' days'
    }

    document.getElementById('answer').innerHTML = message
}

