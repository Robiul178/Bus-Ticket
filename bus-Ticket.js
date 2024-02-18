const seats = document.querySelectorAll('#ticket-button');
for (const seat of seats) {
    seat.addEventListener('click', seeClickButton)
};

function seeClickButton(e) {

    //bg change
    const bgChange = e.target;
    bgChange.style.backgroundColor = 'green';

    //calculate current seat
    const currentSeatElement = document.getElementById('totalSeats');
    const currentSeatText = currentSeatElement.innerText;
    const currentSeat = parseInt(currentSeatText);

    const newCurrentSeat = currentSeat - 1;

    currentSeatElement.innerText = newCurrentSeat;

    //selected ticket number show
    const selectedTicketNumber = document.getElementById('selectTicketNumber');
    const selectSeatText = selectedTicketNumber.innerText;
    const selectSeat = parseInt(selectSeatText)
    const newSelecSeat = selectSeat + 1;
    selectedTicketNumber.innerText = newSelecSeat;

    //hidden button
    if (newSelecSeat === 4) {
        // alert('Select ses')
        disableButton();
    }
}

function disableButton() {
    const seats = document.querySelectorAll('#ticket-button');
    for (const s of seats) {
        s.classList.add('btn-disabled')
    }
}
