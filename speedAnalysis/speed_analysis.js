let testText= "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest() {
    // set test text 
    document.getElementById('inputText').value = testText;

    // reset results and timer
    document.getElementById('output').innerHTML = "";
    startTime = new Date().getTime();

    // change btton text and functionality
    var button = document.getElementById("btn");
    button.innerHTML = "End Test"
    button.onclick = endTest;
}

function endTest() {
    endTime = new Date().getTime();

    // disable  user input
    document.getElementById("userInput").readonly = true;

    // calculate times elapsed and wpm
    var timeElapsed = (endTime - startTime) / 1000; // in seconds
    var userTypedText = document.getElementById("userInput").value;

    //split text using regex to count words correctly
    var typedWords = userTypedText.split(/\s+/).filter(function (word) {
        return word !== "";
    }).length;

    var wpm = 0; // default value

    if (timeElapsed !== 0) {
        wpm = Math.round((typedWords / timeElapsed) * 60);
    }

    // display the results
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h2>Typing Test Results:</h2>" + 
    "<p>Words Typed: " + typedWords + "</p>" +
    "<p>Time Elapsed: " + timeElapsed.toFixed(2) + "seconds </p>" +
    "<p>Words Per Minute (WPM) : " + wpm + "</p>";

    // reset the button
    var button = document.getElementById("btn");
    button.innerHTML = "Start Test";
    button.onclick = startTest;

}