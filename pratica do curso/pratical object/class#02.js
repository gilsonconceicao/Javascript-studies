// Entendendo classes melhor

class AddMovie {
    constructor(nameMovie, director) {
        this.nameMovie = nameMovie
        this.director = director
    }

    showNameMovie () {
        return `O filme ${this.nameMovie} foi produzido pelo ${this.director}.`
    }
}

class DescriptionMovie extends AddMovie {
    constructor(nameMovie, dateRelease, genreMove) {
        super(nameMovie)
        this.dateRelease = dateRelease
        this.genreMove = genreMove
    }

    description() {
        return `${this.nameMovie}, foi lançado em ${this.dateRelease}. Do gênero ${this.genereMove = this.genreMove}.`
    }
}

const OldKnives = new AddMovie("All the Old Knives", "Janus Metz")
console.log(OldKnives.showNameMovie())

const OldKnivesDescription = new DescriptionMovie("Old Knives", "8 de abril de 2022", "ação")
console.log(OldKnivesDescription.description())
console.log('______________________')

const DeepWater = new AddMovie("Deep Walter", "Adrian Lyne")
console.log(DeepWater.showNameMovie())

const DeepWaterDescription = new DescriptionMovie("Deep Walter", "18 de março de 2022", "Suspense")
console.log(DeepWaterDescription.description())