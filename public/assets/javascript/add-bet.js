

function addBetHandler(event) {

    event.preventDefault();
    let game_id = event.target.getAttribute("data-GameID");
    let pick_team_id = document.querySelector(`.winner-${game_id}`).value
    let wager = document.querySelector(`.wager-${game_id}`).value


    // const user_id = session.user_id
    // const host_pick = (event.target).querySelector('.winner').getAttribute("data-winnerID")

    console.log("game id", " ", game_id, "\n", "\n", "hostPick", " ", pick_team_id, " " + wager)

    // if (comment_text) {
    //     console.log(user_id)
    //     const response = await fetch(`/api/comments/${comment_id}`, {
    //         method: 'PUT',
    //         body: JSON.stringify({
    //             comment_text,
    //             user_id,

    //         }),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     });

    //     if (response.ok) {
    //         document.location.replace(`/view-comment/${post_id}`);
    //     } else {
    //         alert(response.statusText);
    //     }
    // }
}

document.querySelector('.place-bet-btn').addEventListener('click', addBetHandler);

