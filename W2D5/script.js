// All Movies

const allMovies = database.Movies;



//  Retrieve from Movie Database (year = value, name = lowercase)

const retrieveFromDatabase = (value, source) => {
    if(parseInt(value)){
        if(source === 'radiobutton'){
            const result = allMovies.filter((item) => item.Year >= value);
            return result;
        }} 
    else {
        const result = allMovies.filter((item) => item.Title.toLowerCase().includes(value.toLowerCase()));
        return result;
    }
};



// Add Search Content to Body

const displayMovies = (array) => {
    const contentBody = document.querySelector('#selectedmovies');
    while(contentBody.firstChild) {
        contentBody.removeChild(contentBody.firstChild);
    }
    if(array.length > 0){
        array.forEach((item) => {
            const movieContent = document.createElement('div');
            movieContent.classList.add('selectedMovies');
            const movieLink = `<a href="https://www.imdb.com/title/${item.imdbID}" target="_blank"><img src="${item.Poster}" alt="${item.Title}"></a>`;
            movieContent.innerHTML = movieLink;
            contentBody.append(movieContent);
        });
    };
};

displayMovies(allMovies);



// Handler User Input 

const handleUserInput = () => {
    const button = document.querySelectorAll('input[name=filter]');
    button.forEach((element) => {
        element.addEventListener('click',(event) => {
            const valueSelected = event.target.value;
            const filterdMovies = retrieveFromDatabase(valueSelected,'radiobutton');
            displayMovies(filterdMovies);
        });
    });
};

handleUserInput();
