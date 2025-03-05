//literally just to get my discord pfp

function pfp() {
    const a = "MTE1MDA1NzcxMzY2MTkwNzAwNw.";
    const b = "GzJAwx.";
    const c = "9VwKOCtRhGcOiNOJ0o2_MXjeFmr_z3wGh4lLgw";

    fetch("https://discord.com/api/v10/users/870628551823609926", {
        method: "GET",
        mode: "cors",
        credentials: "include",
        headers: {
            "Authorization": `Bot ${a + b + c}`
        }
    })
    .then(res => res.json())
    .then(data => console.log(data))
}

pfp();
