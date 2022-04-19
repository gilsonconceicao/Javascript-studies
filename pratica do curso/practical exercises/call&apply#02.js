// teste de call e apply com object 

// add fime or sosial networks

function movie(index) {
    return `${index}. O filme ${this.nameMovie} was released on ${this.releaseDate}  with the copyright ${this.director}!`
}

const filme01 = {
    nameMovie: 'Fruitvale Station: A Última Parada', 
    releaseDate: '31 January of 2020', 
    director: 'Ryan Coogler'
}

console.log(movie.apply(filme01,[1]))
console.log('_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_')
const filme02 = {
    nameMovie: 'All Day and a Night', 
    releaseDate: '01 May of 2020', 
    director: 'Joe Robert Cole'
}

console.log(movie.call(filme02, 2))