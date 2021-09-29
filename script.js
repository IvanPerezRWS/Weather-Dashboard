
// When page loads, display last serached city

$(document).ready(function() {
    generateHistory();
    let lastSearched = JSON.parse(localStorage.getItem("inputCi"));
    if (lastSearched?.length > 0) {
        // Check if previous city search is in localStorage
        // If city search is in localStorage
        let lastCity = lastSearched[lastSearched.length - 1];
        // Display searched city in searchbar
        createQuery(lastCity);
    }

    // On click handler for createQuery(); When city is entered, input city val is taken
    $(".handlerCitySearch").on("click", function(event) {
        event.preventDefault();
        createQuery();
        let inputCity = $("#citySearch").val();

    // Get list of cities from localStorage. Create empty array if list doens texist
    let cityArray = JSON.parse(localStorage.getItem("inputCity")) || [];

    // add input city to list
    cityArray.push(inputCity);
    // save list of cities into local storage
    localStorage.setItem("inputCity", JSON.stringify(cityArray));
    generateHistory();
    });



});

// Clear the searchHistoryContainer
$(".searchHistoryContainer").html("");
// for loop to creare CityBtns
for (
    let cityCounter = 0;
    cityCounter < cityHistory?.length;
    cityCounter++
) {
    let city = cityHistory[cityCounter];
    $(".searchHistoryContainer").append(
        `<button id=CityBtn${cityCounter}">"${city}</button>`
    );
}