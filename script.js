let hiddenLetter = "";
let counter = 0;
let entries = "";
function start(){

    const words = ['red', 'beautiful', 'candy', 'mushroom'];

    const index = Math.floor(Math.random() * 4);

    let chosenWord = words[index].split("");

    let hiddenWord = document.getElementById('hidden-word');

    for(let i=0; i<chosenWord.length; i++){

        const h2 = document.createElement("h2");

            h2.style.marginLeft = "30px";
            h2.style.width = "50px";
            h2.style.textAlign = "center";
            h2.style.borderBottom = "10px solid black";
            const letter = document.createTextNode(chosenWord[i].toUpperCase());
            h2.style.color = "#d9b26f";
            hiddenLetter += chosenWord[i].toLowerCase();
            h2.appendChild(letter);
            hiddenWord.appendChild(h2)

    }
    
    document.getElementById('start-button').disabled = true;
    document.getElementById('keyboard').style.visibility = 'visible';
    entries = "";
    document.getElementById('entries').innerHTML = entries;
    document.getElementById('entries').style.visibility = "visible";
}

function inputCheck(letter){
    const arr = hiddenLetter.split("");

    if(arr.indexOf(letter) > -1){

        let nodes = document.getElementsByTagName('h2');

        for(let i=0; i<nodes.length; i++){

            if(nodes[i].textContent.toLowerCase() === letter){

                nodes[i].style.color = "white";
            }
        }
        
    }else{
        counter++;
        if(counter === 7){

            counter = 0;
            document.getElementById('start-button').disabled = false

            document.getElementById('head').style.visibility = "hidden";
            document.getElementById('body').style.visibility = "hidden";
            document.getElementById('left-arm').style.visibility = "hidden";
            document.getElementById('right-arm').style.visibility = "hidden";
            document.getElementById('left-leg').style.visibility = "hidden";
            document.getElementById('right-leg').style.visibility = "hidden";

            let parentNode = document.getElementById('hidden-word');

            while (parentNode.hasChildNodes()) {
                parentNode.removeChild(parentNode.firstChild);
            }

            document.getElementById('keyboard').style.visibility = 'hidden';
            entries = "";
            document.getElementById('entries').innerHTML = entries;
            document.getElementById('entries').style.visibility = "hidden";
            
        }

        switch(counter){

            case 1: let head = document.getElementById('head');
                    head.style.visibility = "visible"; 
                    break;
            case 2: let body = document.getElementById('body');
                    body.style.visibility = "visible";
                    break;
            case 3: let left_arm = document.getElementById('left-arm');
                    left_arm.style.visibility = "visible";
                    break;
            case 4: let right_arm = document.getElementById('right-arm');
                    right_arm.style.visibility = "visible";
                    break;
            case 5: let left_leg = document.getElementById('left-leg');
                    left_leg.style.visibility = "visible";
                    break;
            case 6: let right_leg = document.getElementById('right-leg');
                    right_leg.style.visibility = "visible";
                    break;
        }

        entries += letter + ",";
        document.getElementById('entries').innerHTML = entries.toUpperCase();
    }

}




