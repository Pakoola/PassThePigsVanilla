let playerArray = [];

function addPlayer(){
    let playerInputName = document.getElementById('playerName').value;
    playerArray.push(playerInputName.toString());

    // Create input for name to strore
    let playerHolderDiv = document.createElement('div');
    let playerHolderDivId = playerInputName + "_divholder";
    playerHolderDiv.id = playerHolderDivId;
    document.getElementById("players").appendChild(playerHolderDiv);

    // Create name placeholder input field
    let playerNameInput = document.createElement('input');
   
    playerNameInput.value = playerInputName;
    playerNameInput.id = playerInputName + "_name_" + playerArray.length;
    document.getElementById(playerHolderDivId).appendChild(playerNameInput);


    document.getElementById('playerName').value = "";
    console.log(playerArray);
    
    // Add input to store points
    let playerPointsInput = document.createElement('input');
    playerPointsInput.setAttribute('type', 'number');
    let newPlayerPointsId = playerInputName + "_points_" + playerArray.length;
    playerPointsInput.id = newPlayerPointsId;
    playerPointsInput.value = 0;
    document.getElementById(playerHolderDivId).appendChild(playerPointsInput);


    // Create button associated
    let playerAddPointsButton = document.createElement('button');
    playerAddPointsButton.innerHTML = "Add points";
    playerAddPointsButton.setAttribute('onClick', "setPoints(" + newPlayerPointsId + ", 1)");
    document.getElementById(playerHolderDivId).appendChild(playerAddPointsButton);

}


function setPoints(playerInputId, points){
    var usersPoints = parseInt(document.getElementById(playerInputId.id).value);
    usersPoints += points;
    document.getElementById(playerInputId.id).value = usersPoints;
}