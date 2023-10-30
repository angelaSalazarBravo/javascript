import { Books } from './Books.js';

describe("POO",() => {
    it("should gets title, author and published for La vida del lazarillo de Tormes", () =>{
        const book_1 = new Books("La vida del lazarillo de Tormes", "Anonymous", "1554");
        expect(book_1.title).toBe("La vida del lazarillo de Tormes");
        expect(book_1.author).toBe("Anonymous");
        expect(book_1.published).toBe("1554");
    });
    it("should gets title, author and published for The NeverEnding Story", () => {
        const book_2 = new Books("The NeverEnding Story", "Michael Ende", "1979");
        expect(book_2.title).toBe("The NeverEnding Story");
        expect(book_2.author).toBe("Michael Ende");
        expect(book_2.published).toBe("1979");
    });
    it("should hets title, author, and published for The lord of the Rings", () =>{
        const book_3 = new Books("The lord of the Rings", "J.R.R. Tolkien", "1937");
        expect(book_3.title).toBe("The lord of the Rings");
        expect(book_3.author).toBe("J.R.R. Tolkien");
        expect(book_3.published).toBe("1937");
    });
    it("sould gets title, author and published for Beowulf", () => {
        const book_4 = new Books("Beowulf", "anonymous", "11th centuries");
        expect(book_4.title).toBe("Beowulf");
        expect(book_4.author).toBe("anonymous");
        expect(book_4.published).toBe("11th centuries");
    });

});