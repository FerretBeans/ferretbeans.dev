//literally just to get my discord pfp
function pfp() {
    fetch("https://cors-dun.vercel.app/discord?userId=870628551823609926")
    .then(response => response.json())
    .then(data => {
        var meow = document.getElementById("img");
        meow.src = `https://cdn.discordapp.com/avatars/870628551823609926/${data.avatar}.png`
    });
}

/*
TAKEN FROM https://codepen.io/rileyjshaw/pen/vExWpe !!!!!
editted a little to make faster but still go show love <3
*/ 
(function () {
    var angle = 0;
    var p = document.getElementById('x3');
    var text = p.textContent.split('');
    var len = text.length;
    var phaseJump = 180 / len;
    var spans;
  
    p.innerHTML = text.map(function (char) {
      return '<span>' + char + '</span>';
    }).join('');
  
    spans = p.children;
  
    (function wheee () {
      for (var i = 0; i < len; i++) {
        spans[i].style.color = 'hsl(' + (angle + Math.floor(i * phaseJump)) + ', 55%, 70%)';
      }
      angle += 3;
      requestAnimationFrame(wheee);
    })();
})();

let miau = "";

function idkuwu() {
    const UwU = new URLSearchParams({ 
        method: "user.getrecenttracks",
        user: "ferretbeans",
        limit: "1",
        api_key: "cc71d4aea47a8cf9402dc4579022cfba",
        format: "json"
    });

    fetch("https://ws.audioscrobbler.com/2.0/?" + UwU.toString())
        .then(res => res.json())
        .then(data => {
            let moosic = data.recenttracks.track;
            if (moosic && moosic.length > 0) {
                let song = moosic[0];
                let title = song.name;
                let maker = song.artist['#text'];

                let woaw = title + " - " + maker;
                if (woaw !== miau) {
                    const mrow = document.getElementById("musicuwu");
                    mrow.innerHTML = woaw;
                    miau = woaw;
                }
            } else {
                const mrow = document.getElementById("musicuwu");
                mrow.innerHTML = "I'm Not currently listening to music";
            }
        });
}

setInterval(() => {
    idkuwu();
}, 250);

idkuwu();
pfp();