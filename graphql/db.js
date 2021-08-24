let movies = [
    {
        id: 0,
        name: "1",
        score: 1
    },
    {
        id: 1,
        name: "2",
        score: 2
    },
    {
        id: 2,
        name: "3",
        score: 3
    },
    {
        id: 3,
        name: "4",
        score: 4
    },
    {
        id: 4,
        name: "5",
        score: 5
    },
    {
        id: 5,
        name: "6",
        score: 6
    }
];

export const getId = id => {
    const filteredPeople = peope.filter(person=>person.id === string(id));
    return filteredPeople[0];
};

export const getMovies = () => movies;

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== string(id));
    if(movies.length>cleanedMovies.length){
        movie = cleanedMovies;
        return true;
    }else{
        return false;
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length + 1}`,
        name,
        score
    }
    movies.push(newMovie)
    return newMovie;
}