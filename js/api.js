document.addEventListener('DOMContentLoaded', async function() {
    const url = 'https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '51f5805ed4msh3be9e24c4d598eep15458cjsn8b8178baa677',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);

        // Parsear los datos JSON
        const juegos = JSON.parse(result);

        // Obtener el elemento de la lista
        const listaJuegos = document.getElementById('app');

        // Crear elementos de lista para los primeros 10 juegos
        for (let i = 0; i < 10; i++) {
            const juego = juegos[i];
            const listItem = document.createElement('li');

            // Crear un enlace para el juego
            const link = document.createElement('a');
            link.href = juego.game_url;
            link.textContent = juego.title;
            listItem.appendChild(link);

            // Crear una imagen para la miniatura del juego
            const img = document.createElement('img');
            img.src = juego.thumbnail;
            img.alt = juego.title; // Agrega un texto alternativo para accesibilidad

            // Envolver la imagen con el enlace
            link.appendChild(img);

            listaJuegos.appendChild(listItem);
        }
    } catch (error) {
        console.error(error);
    }
});
