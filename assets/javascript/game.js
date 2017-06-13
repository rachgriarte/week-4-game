$(document).ready(function() {

    var yourMatchingNumber = 0;


    var randomNum = randomNumGen();

    var wins = 0;
    var losses = 0;
    var gems;

    function randomNumgems() {
        // gems obj
        return {
            'red': {
                points: Math.floor(Math.random() * 11) + 1,
                imageUrl: "assets/images/egeme.png"
            },
            'blue': {
                points: Math.floor(Math.random() * 11) + 1,
                imageUrl: "assets/images/geme.png"
            },
            'yellow': {
                points: Math.floor(Math.random() * 11) + 1,
                imageUrl: "assets/images/bgem.png"
            },
            'green': {
                points: Math.floor(Math.random() * 11) + 1,
                imageUrl: "assets/images/icecreambar.gif"
            }
        };
    }

    function randomNumGen() {
        return Math.floor(Math.random() * 100) + 18;
    }

    function setGame() {
        yourMatchingNumber = 0;
        //create random gem numbers
        gems = randomNumgems();
        //create a random number and render it
        randomNum = randomNumGen();
        var randomNumDiv = $("<div id='random-number'>").text(randomNum);
        $("#random-area").html(randomNumDiv);
    }

    function updateDom(didUserWin) {
        $('#winArea').empty();

        if (didUserWin === true) {
            $('#winArea').append($('<p>').text('You won!!'));
            setGame();
            renderMatchingNumber();
        } else if (didUserWin === false) {
            $('#winArea').append($('<p>').text('You lost!!'));
            setGame();
            renderMatchingNumber();
        }

        var wSpan = $('<span>').text(wins);
        var lSpan = $('<span>').text(losses);

        var pWins = $('<p>').text('Wins: ');
        var pLosses = $('<p>').text('Losses: ');

        pWins.append(wSpan);
        pLosses.append(lSpan);

        $('#winArea').append(pWins);
        $('#winArea').append(pLosses);
    }

    function rendergems() {
        //render gems
        for (var key in gems) {
            var gemDiv = $("<div class='gems-button' data-name='" + key + "'>");
            var gemImg = $("<img alt='image' class='gem-img'>").attr("src", gems[key].imageUrl);
            gemDiv.append(gemImg);
            $("#gem-area").append(gemDiv);
        }
    }

    function updateMatchingNumber(th) {
        var self = th;

        if (self.attr('data-name') == 'red') {
            yourMatchingNumber = yourMatchingNumber + gems[self.attr('data-name')].points;
        } else if (self.attr('data-name') == 'blue') {
            yourMatchingNumber = yourMatchingNumber + gems[self.attr('data-name')].points;
        } else if (self.attr('data-name') == 'yellow') {
            yourMatchingNumber = yourMatchingNumber + gems[self.attr('data-name')].points;
        } else {
            yourMatchingNumber = yourMatchingNumber + gems[self.attr('data-name')].points;
        }
    }

    function renderMatchingNumber() {
        var scoreNumDiv = $("<div id='score-number'>").text(yourMatchingNumber);
        $("#score-area").html();
        $("#score-area").html(scoreNumDiv);
    }

    setGame();
    updateDom();
    rendergems();
    renderMatchingNumber();

    //on.click event 
    $(".gems-button").on("click", function(event) {
        updateMatchingNumber($(this));
        renderMatchingNumber();

        //Check result
        if (yourMatchingNumber == randomNum) {
            wins++;
            setGame();
            updateDom(true);
        } else if (yourMatchingNumber > randomNum) {
            losses++;
            setGame();
            updateDom(false);
        }
    });
