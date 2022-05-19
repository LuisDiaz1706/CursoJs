class Book {
    constructor(titulo, ano, autor, genero) {
        this.title = titulo
        this.year = ano
        this.author = autor
        this.gender = genero
    }

    getAuthor() {
        return this.author
    }

    getGender() {
        return this.gender
    }

    bookInfo() {
        return `$ El titulo ${this.title} es del autor ${this.author} y pertence al genero de ${this.gender} y es del año ${this.year}`
    }
}



let books = [];

while (books.length < 3) {
    let titulo = prompt("Intruduce titulo");
    let autor = prompt("Intruduce autor");
    let ano = prompt("Intruduce año");
    let genero = prompt("Intruduce genero");

    if (titulo != "" && autor != "" && !isNaN(ano) && ano.length == 4 && (genero == "aventura"
        || genero == "terror" || genero == "fantasia")) {

        books.push(new Book(titulo, ano, autor, genero));
    }
}

const MuestraLibros = () => {
    console.log(books)
}


const MuestraAutor = () => {
    let author = [];
    for (const book of books) {
        //console.log(book.getAuthor());
        author.push(book.getAuthor());
    }
    console.log(author.sort());
}

const MuestaGenero = () => {
    let gender = prompt("Intruduce genero");

    for (const book of books) {
        if (book.getGender() == gender) {
            console.log(book.bookInfo())
        }
    }
}

MuestraLibros();
MuestraAutor();
MuestaGenero();
