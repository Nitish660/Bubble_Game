

function MakeBubble(){
    var clutter = "";

    for(var i = 1; i < 190; i++) {
        var rn = Math.floor(Math.random() * 10); // Corrected Math.random()
        clutter += `<div class="bubble">${rn}</div>`;
    }
    
    document.querySelector("#pbtm").innerHTML = clutter;
}


MakeBubble();

