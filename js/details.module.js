/////// get id 
async function getGameDetails(id) {
    loaderManage();
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '67ed718156mshbb7fb4a3f86eb80p112203jsnac869d075d67',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    try {
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
        const response = await api.json();
        displayData(response);
        console.log(response);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

////////display data in modal
function displayData(response){
    let image =  document.getElementById('game-img');
    let desc =  document.getElementById('game-desc');
    image.innerHTML=`<img src="${response.thumbnail}" />`;
    desc.innerHTML=`
    <h2>Title : ${response.title}</h2>
    <h3>Category : ${response.genre}</h3>
    <h3>Platform : ${response.platform}</h3>
    <p>${response.description}</p>
    <a class="btn btn-danger " href="${response.game_url}" target="_blank">Show Game</a>
    `

}

////////loader
let btnList = document.querySelectorAll('a');
for (let i = 0; i < btnList.length; i++) {
    btnList[i].addEventListener('click', function (eventInfo) {
        loaderManage();
    });
}

function loaderManage(){
    showLoader();
        setTimeout(function() {
            hideLoader();
          }, 2000);
}

function hideLoader(){
    $(".preloader").hide();
}

function showLoader(){
    $(".preloader").show();
}