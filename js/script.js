const API_URL = 'https://free-to-play-games-database.p.rapidapi.com/api';
const htmlResponse = document.querySelector("#app");


fetch(`${API_URL}/games`, {
    method: 'GET',
    headers: {
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
		'X-RapidAPI-Key': 'f486a27398msh3d75cc7e99e67e6p145abdjsnc0ae792a1e0e'
	}
})  .then((response) => response.json())
    .then((games) => {
        games.forEach((game) => {
            const elem = document.createElement('article');
            elem.classList.add('game__wrapper')

            const elemContent = document.createElement('article');
            elemContent.classList.add('game__content');
            elem.appendChild(elemContent);

            const imgWrapper = document.createElement('figure');
            imgWrapper.classList.add('img__wrapper');
            elemContent.appendChild(imgWrapper);

            const img = document.createElement('img');
            img.src = game.thumbnail;
            imgWrapper.appendChild(img);

            const nameField = document.createElement('h3');
            nameField.classList.add('game__title');
            const name = document.createTextNode(`${game.title}`);
            nameField.appendChild(name);
            elemContent.appendChild(nameField);

            const shortDescription = document.createElement('p');
            shortDescription.classList.add('short__description');
            const description = document.createTextNode(`${game.short_description}`);
            shortDescription.appendChild(description);
            elemContent.appendChild(shortDescription);

            const plataformWrapper = document.createElement('article');
            plataformWrapper.classList.add('platform__wrapper');
            elemContent.appendChild(plataformWrapper);

            const platformLink = document.createElement('article');
            platformLink.classList.add('tag__link--wrapper');
            plataformWrapper.appendChild(platformLink);
            
            const plataformTag = document.createElement('p');
            plataformTag.classList.add('plataform__tag');
            const plataform = document.createTextNode(`${game.platform}`);
            plataformTag.appendChild(plataform);
            platformLink.appendChild(plataformTag);

            const link__wrapper = document.createElement('article');
            link__wrapper.classList.add('anchor__wrapper');
            plataformWrapper.appendChild(link__wrapper);

            const gameAnchor = document.createElement('a');
            gameAnchor.classList.add('game__anchor');
            const anchorDescription = document.createTextNode('View more →');
            gameAnchor.href = game.game_url;
            gameAnchor.target = "_blank"
            gameAnchor.appendChild(anchorDescription);
            link__wrapper.appendChild(gameAnchor);
            
            htmlResponse.appendChild(elem);
        });
        console.log(games);
    });

