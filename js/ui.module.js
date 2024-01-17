
/////////get gategory
let liList = document.querySelectorAll('li a');
for (let i = 0; i < liList.length; i++) {
    liList[i].addEventListener('click', function (eventInfo) {
        removeActive();
        this.classList.add('active');
        let gameData = eventInfo.target.innerHTML;
        console.log(gameData);
        getGames(gameData);
    });
}

///////remove active
function removeActive(){
    let liList = document.querySelectorAll('li a');
    for (let i = 0; i < liList.length; i++) {
        liList[i].classList.remove("active");
    }
}




////////////get games by Api
async function getGames(gameData) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '67ed718156mshbb7fb4a3f86eb80p112203jsnac869d075d67',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    try {
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${gameData}`, options);
        const response = await api.json();
        console.log(response);
        displayGames(response);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


////////display games
function displayGames(response) {
    let cartonna = '';
    for (let i = 0; i < response.length; i++) {
        cartonna += `
            <div class="col-md-3">
            <a href="#open-modal" onclick="getGameDetails(${response[i].id})">
                <div class="card">
                    <img src="${response[i].thumbnail}" class="card-img-top" alt="game photo">
                    <div class="card-body border border-1 ">
                        <h1>${response[i].title}</h1>
                        <p class="card-text">${response[i].short_description.slice(0, 50)}</p>
                    </div>
                    <div class="card-body d-flex justify-content-around p-1 border border-1">
                        <p>${response[i].genre}</p>
                        <p>${response[i].platform}</p>
                    </div>
                </div>
            </a>
            </div>`;
    }
    const gameContainer = document.querySelector('.container .row');
    gameContainer.innerHTML = cartonna;
}


window.onload = function() {
    getGames("MMORPG");
    var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
  };
