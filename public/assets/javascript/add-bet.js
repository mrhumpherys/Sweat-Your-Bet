

function addBetHandler(event) {

    event.preventDefault();
    console.log(event.target)
    const game_id = document.querySelector('.place-bet-btn').getAttribute('data-GameID')
    // const user_id = session.user_id
    const host_pick = (event.target).querySelector('.winner').getAttribute("data-winnerID")

    console.log("game id" + game_id, "+\n" + "+\n" + "hostPick" + host_pick)

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

