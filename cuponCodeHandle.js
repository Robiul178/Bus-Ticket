const cuppoButton = document.getElementById('cuppoButton');
cuppoButton.addEventListener('click', cuponHandelar);
function cuponHandelar() {
    const cuponInputText = document.getElementById('cuponInput');
    const userCode = cuponInputText.value;
    const userCuponCode = userCode.toUpperCase();

    let currentCode1 = 'NEW15';
    let currentCode2 = 'Couple20';
    let cuponCode22 = currentCode2.toUpperCase();

    if (currentCode1 === userCuponCode) {
        const selectedTicketNumber = document.getElementById('selectTicketNumber');
        const selectSeatText = selectedTicketNumber.innerText;
        const selectSeat = parseInt(selectSeatText);

        const ticketPrice = 550;
        const totalCost = ticketPrice * selectSeat;

        const discountPrice = totalCost * 0.15;
        const finalDiscountPrice = totalCost - discountPrice;
        const grandTotal = document.getElementById('grandTotal');
        const h2 = document.createElement('h2');
        h2.innerHTML = `${finalDiscountPrice}`;
        grandTotal.appendChild(h2);



        /*
        
    const initialPrice = document.getElementById('ticketPrice');
    total.innerText = 'price';
    const p = document.createElement('p')
    p.innerHTML = `${total}`
    initialPrice.appendChild(p);
        */


        const cuppoButton = document.getElementById('cuppondiv');
        cuppoButton.classList.add('hidden');



        // console.log(cuppoButton.classList, 'cuppoButton');
    }

    //    if (cuponCode22 === userCuponCode) {
    //         const selectedTicketNumber = document.getElementById('selectTicketNumber');
    //         const selectSeatText = selectedTicketNumber.innerText;
    //         const selectSeat = parseInt(selectSeatText);

    //         const ticketPrice = 550;
    //         const totalCost = ticketPrice * selectSeat;

    //         const discountPrice = totalCost * 0.20;
    //         const finalDiscountPrice = totalCost - discountPrice;


    //         console.log(finalDiscountPrice, 'c');
    //     }



}
