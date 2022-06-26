window.onload = () => {

    let rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
    let randPart = (part) => part[rand(0, part.length - 1)];

    part1 = ["en", "es", "in"];
    part2 = ["cry", "cro", "cri"];
    part3 = ["ptyion", "pytion", "ption", "pting", "bit"];
    presets = ["encyclopedia", "hyperion"];

    let ph = document.querySelector("#encryption");

    let changeText = () => {
        let chance = part1.length * part2.length * part3.length;
        let text;
        if (rand(0, chance + presets.length) <= chance) {
            text = randPart(part1) + randPart(part2) + randPart(part3)
        } else {
            text = presets[rand(0, presets.length - 1)];
        }
        ph.innerText = text;
    }
    changeText();

    let refreshButton = document.querySelector("#line");
    refreshButton.addEventListener("click", () => {
        changeText();
    });

};