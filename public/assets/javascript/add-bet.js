

async function addBetHandler(event) {
   
    event.preventDefault();
    console.log(" HERE BITCH")
    let game_id = event.target.getAttribute("data-GameID");
    let pickTeamID = document.querySelector(`.winner-${game_id}`).value
    let wager = document.querySelector(`.wager-${game_id}`).value

    console.log(game_id, parseInt(pickTeamID), wager)
    const response = await fetch(`/api/bets/`, {

        method: 'POST',
        body: JSON.stringify({
            wager,
            game_id,
            pickTeamID
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }





}

const cbox = document.querySelectorAll(".place-bet-btn");

for (let i = 0; i < cbox.length; i++) {
    cbox[i].addEventListener("click", addBetHandler
    );
}