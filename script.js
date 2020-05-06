window.addEventListener('keydown', e => {
    if(e.key == " "){
        generateNewPallete();
    }
})

function getRandomHex(){
    const possibleValues = [1,2,3,4,5,6,7,8,9,0,'a','b','c','d','e','f'];
    return possibleValues[Math.floor(Math.random() * possibleValues.length)];
}

function generateNewPallete(){
    let main = document.querySelector('main');
    while(main.childNodes.length > 0)
        main.removeChild(main.childNodes[0]);

    let rs = [];
    let gs = [];
    let bs = [];
    for(let i =0 ; i < 100; i ++){
        let r = getRandomHex() + '' + getRandomHex();
        let g = getRandomHex() + '' + getRandomHex();
        let b = getRandomHex() + '' + getRandomHex();
        rs.push(r);
        gs.push(g);
        bs.push(b);
    }

    //align colors (pastel effect)
    rs.sort();
    bs.sort();
    gs.sort();

    for(let i = 0; i < rs.length; i ++){
        let color = rs[i] + gs[i] + bs[i];
        let el = document.createElement('div');
        el.classList.add('color');
        el.setAttribute('style', 'background-color: #' + color);
        main.appendChild(el);
    }
}