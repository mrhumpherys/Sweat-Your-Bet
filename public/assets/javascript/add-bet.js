

async function addBetHandler(event) {
   
    event.preventDefault();
    console.log(" HERE BITCH")
    let game_id = event.target.getAttribute("data-GameID");
    let pick_team_id = document.querySelector(`.winner-${game_id}`).value
    let wager = document.querySelector(`.wager-${game_id}`).value

    console.log(game_id, pick_team_id, wager)
    const response = await fetch(`/api/bets/`, {

        method: 'POST',
        body: JSON.stringify({
            wager,
            game_id,
            pick_team_id
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