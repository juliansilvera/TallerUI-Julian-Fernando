let searchButton = document.getElementById('search-shipment-button');

searchButton.addEventListener('click', function(event) {
    event.preventDefault(); 

    input = document.getElementById('code-shipment').value;
    
    if(input.length == 6) {
        showTrackShipmentContainer();
    }
    
});

function showTrackShipmentContainer(){
    let container = document.getElementById('track-progress-container');
    container.style.visibility = "visible";
}