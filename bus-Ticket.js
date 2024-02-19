const seats = document.querySelectorAll('#ticket-button');
for (const seat of seats) {
    seat.addEventListener('click', seeClickButton)
};

function seeClickButton(e) {

    const ticketName = e.target.innerText;
    const ticketList = document.getElementById("ticketList");
    const li = document.createElement('li')
    li.innerHTML = `
     <tr>
        <td>${ticketName}</td>
        <td>Economy</td>
        <td>550 tk</td>
     </tr`;
    ticketList.appendChild(li);

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

    //calculate ticket price
    const totalSelectedSeat = newSelecSeat;
    const ticketPrice = 550;
    const total = totalSelectedSeat * ticketPrice;

    const grandTotal = document.getElementById('grandTotal');
    grandTotal.innerHTML = `${total}`

    const grandTotal2 = document.getElementById('grandTotal2');
    grandTotal2.innerHTML = `${total}`


    //hidden button
    if (newSelecSeat === 4) {
        disableButton();
    };



}

function disableButton() {
    const seats = document.querySelectorAll('#ticket-button');
    for (const s of seats) {
        s.classList.add('btn-disabled')
    }
};
