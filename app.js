let btn = document.querySelector("#btn");
let emojiName = document.querySelector("#para");
let emojiGroup = document.querySelector("#group");
const emoji = [];

async function getEmoji() {
    let response = await fetch("https://emoji-api.com/emojis?access_key=e639738ca0222f80e4091451b8cee2fd52812b2d");
    let data = await response.json();
    //console.log(data);
    for (let i = 0; i < 2694; i++) {
        emoji.push({
            name: data[i].character,
            emojiCode: data[i].unicodeName,
            emojiGp: data[i].subGroup,

        });
    }
}
getEmoji();
//console.log(emoji);

function randomEmoji() {
    const randomNum = Math.floor(Math.random() * emoji.length);
    // console.log(randomNum);
    btn.innerHTML = emoji[randomNum].name;
    emojiName.innerHTML = emoji[randomNum].emojiCode;
    emojiGroup.innerHTML = emoji[randomNum].emojiGp;

}



btn.addEventListener("click", randomEmoji);