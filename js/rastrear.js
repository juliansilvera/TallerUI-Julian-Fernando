let searchButton = document.getElementById('search-shipment-button');

searchButton.addEventListener('click', function(event) {
    event.preventDefault(); 
    showTrackShipmentContainer();
});

function showTrackShipmentContainer(){
    let container = document.getElementById('track-progress-container');
    container.style.visibility = "visible";
}