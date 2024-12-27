//literally just to get my discord pfp

function pfp() {
    fetch("https://discord.com/api/v10/users/938014927262711819", {
        method: "GET",
        mode: "cors",
        credentials: "include",
        headers: {
            "Authorization": "MTMyMjA3MDk5NTQ2NDQ5MTAxOA.G_3uP4.jyIp-t7ku3L_BDbteju8YCJwmn2xhec0c4af_M",
            "Authorization": "Bot"
        }
    })
    .then(res => res.json())
    .then(data => console.log(data))
}

pfp();