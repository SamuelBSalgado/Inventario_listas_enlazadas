// function showList(){
//     for(i=0; i<inventory._array.length; i++){
//         showSection.innerHTML += JSON.stringify(inventory.presentList(i)) + '<br>';
//     }
// }

function timedSuccessMessage(){
    return setTimeout(deleteTimedMessage, 1000);
}
function deleteTimedMessage(){
    showSection.innerHTML = '';
}

// function showInverted(){
//     for(let i=inventory._array.length-1; i>=0; i--){
//         showSection.innerHTML +=JSON.stringify(inventory.presentList(i)) + '<br>';
//     }
// }