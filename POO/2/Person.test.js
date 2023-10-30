import { Person } from './Person.js';

describe("POO Person",() => {
    it("should gets name, surname, country and age", () =>{
        const Person_1 = new Person("Angela", "Salazar", "España","24");
        expect(Person_1.name).toBe("Angela");
        expect(Person_1.surname).toBe("Salazar");
        expect(Person_1.country).toBe("España");
        expect(Person_1.age).toBe("24");
    });
    it("should gets name = Peter, surname= Jackson, country = CANADA, age =39", () => {
        const Person_2 = new Person("Peter", "Jackson", "CANADA","39");
        expect(Person_2.name).toBe("Peter");
        expect(Person_2.surname).toBe("Jackson");
        expect(Person_2.country).toBe("CANADA");
        expect(Person_2.age).toBe("39");
    });
});