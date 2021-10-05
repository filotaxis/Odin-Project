function Book(title, author, num_pag, read) {
    this.title = title;
    this.author = author;
    this.num_pag = num_pag;
    this.read = read;

    this.info = () => {
        let readIt = this.read ? "alredy read it" : "not read yet";
        return `${this.title} by ${this.author}, ${this.num_pag} pages, ${readIt}`;
    }
}


const bryan = new Book("el bryan", "bryan medina", 300, false);

console.log(bryan.info());
