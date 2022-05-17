// Praticando class - Venda de Livros

class Library {
    constructor (index, bookName, infoBook, sellingNotOn) {
        this.indexNumber = index
        this.bookName = bookName;
        this.infoBook = infoBook
        this.sellingNotOn = false; 
    }

    get getBookInfo() {
        console.log(`Livro - ${this.indexNumber}`)
        console.log(`${this.bookName}`)
        console.log(`O livro ${this.bookName} fala sobre ${this.infoBook}.`)
        console.log(`Está a venda? ${this.sellingNotOn ? "Sim!" : "Não!"}`)
    }

    get selling () {
        this.sellingNotOn = true; 
    }

    get notSelling () {
        this.sellingNotOn = false; 
    }

}

class DetailsBook extends Library {
    constructor (publicEvaluation) {
        super(); 
        this.publicEvaluation = publicEvaluation
    }

    get getPublicBook () {
        console.log(`${this.publicEvaluation} goastaram do livro!`)
        console.log('___________________')
    }

}
// ----- livro 1 
const book1 = new Library(1, "O poder do agora", "momentos reais da vida e aprendizado")
book1.selling
book1.getBookInfo

const infoBook1 = new DetailsBook("98%")
infoBook1.getPublicBook 

// ------ livro 2 
const book2 = new Library(2, "HTML e CSS", "Um guia para criação de páginas web em padrões")
book2.notSelling
book2.getBookInfo;

const infoBook2 = new DetailsBook("100%")
infoBook2.getPublicBook 