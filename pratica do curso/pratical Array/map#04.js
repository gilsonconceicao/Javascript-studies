const tvshows = [
    { name: 'Breaking Bad', releaseYear: 2008 }, 
    { name: 'Mr. Robot', releaseYear: 2015}, 
    { name: 'True Detective', releaseYear: 2014 }, 
    { name: 'The Hannibal \'s Tale', releaseYear: 2013 }, 
    { name: 'House M.D', releaseYear: 2004 }, 
    { name: 'Watchmen', releaseYear: 2019 }
]

// get names tv shows

const nameTvShows = tvshows.map(names => names.name); 
// options: filter(yers => yers.releaseYear > 2010); 
console.log(nameTvShows)