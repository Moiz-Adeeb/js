let count = 0; //initializing variable count to 0

function increaseCount() {
    count++; //increment the count by 1

    displayCount(); //display the count
    checkCountValue(); //check count value and display alertx
}

function checkCountValue() {
    if (count === 10) {
        alert("Your Post has gained 10 followers! Congratulation!")
    }
    
    else if (count === 20) {
        alert("Your Post has gained 20 followers! Keep it UP!")
    }
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML = count ; //Display the count in HTML
}

function resetCount() {
    count = 0;
    displayCount()
}