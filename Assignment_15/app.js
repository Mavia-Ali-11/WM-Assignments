var state = true;
function rotateCard(userClick) {
    if (state) {
        var randomNum = Math.floor(Math.random() * 6);
        var cards1 = ["url('images/king.jpg')", "url('images/queen.jpg')", "url('images/jack.jpg')"];
        var cards2 = ["url('images/queen.jpg')", "url('images/king.jpg')", "url('images/jack.jpg')"];
        var cards3 = ["url('images/jack.jpg')", "url('images/queen.jpg')", "url('images/king.jpg')"];
        var cards4 = ["url('images/king.jpg')", "url('images/jack.jpg')", "url('images/queen.jpg')"];
        var cards5 = ["url('images/queen.jpg')", "url('images/jack.jpg')", "url('images/king.jpg')"];
        var cards6 = ["url('images/jack.jpg')", "url('images/king.jpg')", "url('images/queen.jpg')"];
        var card1 = document.getElementById('card1');
        var card2 = document.getElementById('card2');
        var card3 = document.getElementById('card3');
        var pickCard = document.getElementById('pickCard');

        card1.style.transition = '1s';
        card2.style.transition = '1s';
        card3.style.transition = '1s';
        pickCard.style.transition = '1s';
        card1.style.transform = 'rotateY(180deg)';
        card2.style.transform = 'rotateY(180deg)';
        card3.style.transform = 'rotateY(180deg)';
        pickCard.style.transform = 'rotateY(180deg)';

        if (randomNum == 0 && userClick == 0) {
            card1.style.backgroundImage = cards1[0];
            card2.style.backgroundImage = cards1[1];
            card3.style.backgroundImage = cards1[2];
            pickCard.style.backgroundImage = cards1[userClick];
            alert("You won! It's a King.");
        }
        else if (randomNum == 1 && userClick == 1) {
            card1.style.backgroundImage = cards2[0];
            card2.style.backgroundImage = cards2[1];
            card3.style.backgroundImage = cards2[2];
            pickCard.style.backgroundImage = cards2[userClick];
            alert("You won! It's a King.");
        }
        else if (randomNum == 2 && userClick == 2) {
            card1.style.backgroundImage = cards3[0];
            card2.style.backgroundImage = cards3[1];
            card3.style.backgroundImage = cards3[2];
            pickCard.style.backgroundImage = cards3[userClick];
            alert("You won! It's a King.");
        }
        else if (randomNum == 3 && userClick == 0) {
            card1.style.backgroundImage = cards4[0];
            card2.style.backgroundImage = cards4[1];
            card3.style.backgroundImage = cards4[2];
            pickCard.style.backgroundImage = cards4[userClick];
            alert("You won! It's a King.");
        }
        else if (randomNum == 4 && userClick == 2) {
            card1.style.backgroundImage = cards5[0];
            card2.style.backgroundImage = cards5[1];
            card3.style.backgroundImage = cards5[2];
            pickCard.style.backgroundImage = cards5[userClick];
            alert("You won! It's a King.");
        }
        else if (randomNum == 5 && userClick == 1) {
            card1.style.backgroundImage = cards6[0];
            card2.style.backgroundImage = cards6[1];
            card3.style.backgroundImage = cards6[2];
            pickCard.style.backgroundImage = cards6[userClick];
            alert("You won! It's a King.");
        }
        else {
            if (randomNum == 0) {
                card1.style.backgroundImage = cards1[0];
                card2.style.backgroundImage = cards1[1];
                card3.style.backgroundImage = cards1[2];
                alert("You lose! It's not a King.");
                pickCard.style.backgroundImage = cards1[userClick];

            }
            else if (randomNum == 1) {
                card1.style.backgroundImage = cards2[0];
                card2.style.backgroundImage = cards2[1];
                card3.style.backgroundImage = cards2[2];
                alert("You lose! It's not a King.");
                pickCard.style.backgroundImage = cards2[userClick];
            }
            else if (randomNum == 2) {
                card1.style.backgroundImage = cards3[0];
                card2.style.backgroundImage = cards3[1];
                card3.style.backgroundImage = cards3[2];
                alert("You lose! It's not a King.");
                pickCard.style.backgroundImage = cards3[userClick];
            }
            else if (randomNum == 3) {
                card1.style.backgroundImage = cards4[0];
                card2.style.backgroundImage = cards4[1];
                card3.style.backgroundImage = cards4[2];
                alert("You lose! It's not a King.");
                pickCard.style.backgroundImage = cards4[userClick];
            }
            else if (randomNum == 4) {
                card1.style.backgroundImage = cards5[0];
                card2.style.backgroundImage = cards5[1];
                card3.style.backgroundImage = cards5[2];
                alert("You lose! It's not a King.");
                pickCard.style.backgroundImage = cards5[userClick];
            }
            else {
                card1.style.backgroundImage = cards6[0];
                card2.style.backgroundImage = cards6[1];
                card3.style.backgroundImage = cards6[2];
                alert("You lose! It's not a King.");
                pickCard.style.backgroundImage = cards6[userClick];
            }
        }
        state = false;
    }
}