function calculateDaysNeeded() {
    const numberOfPages = document.getElementById("numberOfPages").value
    const daysNeeded = 604 / numberOfPages
    document.getElementById("answer").innerHTML = daysNeeded
}