const student = ["David",
["HTML", "CSS", "JS", "React"], 
[98, 85, 90, 95]];

/**
 * Usando Destructuración de arrays,
 * debes devolver todas las tecnologías
 * @returns
 */
export const getAllTechnologies = () => {
const  [ ,tec, ] =  student;
return tec;
};

/**
 * Usando Destructuración de arrays,
 * debes devolver todos los valores
 * @returns
 */
export const getAllValues = () => {
  const [ , , val] = student;
  return val;
};

/**
 * Usando Destructuración de arrays,
 * debes devolver solo React
 * @returns
 */
export const getReact = () => {
const[  ,tec, ] = student;
const[, , ,fourth] = tec;
return fourth;
};

/**
 * Usando Destructuración de arrays,
 * debes devolver CSS y 85
 * @returns
 */
export const getCSSAnd85 = () => {
  const[ ,tec,val] = student;
  const[ ,css, , ] = tec;
  const[ ,num , , ] = val;
  return [css, num];
};

/*****************************************************
 * ***************************************************
 ******************************************************/
const books = [
  {
    title: "La vida del lazarillo de Tormes",
    author: "Anonymous",
    published: "1554",
  },
  {
    title: "The NeverEnding Story",
    author: "Michael Ende",
    published: "1984",
  },
  {
    title: "The Lord of the Rings",
    author: "J. R. R. Tolkien",
    published: "1954",
  },
  {
    title: "Beowulf",
    author: "Anonymous",
    published: "900",
  },
];

/**
 * Usando Destructuración de arrays y objetos,
 * debes devolver el título del primer libro
 * @returns
 */
export const getTitleFirstBook = () => {
  const getbooks = (books) =>{
    return books;
  }
  const [primero, , , ] = getbooks (books);
  return primero.title;
};

/**
 * Usando Destructuración de arrays y objetos,
 * debes devolver el año de publicación del segundo libro
 * @returns
 */
export const getPublishedSecondBook = () => {
  const getbooks = (books) =>{
    return books;
  }
  const [ ,segundo, , ] = getbooks (books);
  return segundo.published;
};

/**
 * Usando Destructuración de arrays y objetos,
 * debes devolver el título y el autor del último libro
 * @returns
 */
export const getAuthorsAndTitleLastBook = () => {
  const getbooks = (books) =>{
    return books;
  }
  const [ , , ,last] = getbooks (books);
  return [last.title, last.author];
};
