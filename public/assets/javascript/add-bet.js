

async function addBetHandler(event) {

    event.preventDefault();
    let game_id = event.target.getAttribute("data-GameID");
    let pick_team_id = document.querySelector(`.winner-${game_id}`).value
    let wager = document.querySelector(`.wager-${game_id}`).value
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



document.querySelector('.place-bet-btn').addEventListener('click', addBetHandler);

