const tvShow = [
    '{ "name": "Breaking Bad", "releaseYear": 2008 }', 
    '{ "name": "Mr. Robot", "releaseYear": 2015}', 
    '{ "name": "True Detective", "releaseYear": 2014 }', 
    '{ "name": "The Hannibal \'s Tale", "releaseYear": 2013 }', 
    '{ "name": "House M.D",  "releaseYear": 2004 }', 
    '{ "name": "Watchmen", "releaseYear": 2019 }'
]

// map and filter

let transform = json => JSON.parse(json); 
console.log(tvShow.map(transform).filter(e => e.releaseYear <= 2010))