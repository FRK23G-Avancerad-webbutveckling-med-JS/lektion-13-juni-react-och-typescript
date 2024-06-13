export type Movie = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
};

export type APIResponse = {
  Response: string;
  Search: Movie[];
  totalResults: string;
};

// interface User {
//     username: string,
//     name: string
// }

// interface Student extends User {
//     studentId: string
//     isEnrolled: boolean
// }

// interface Teacher extends User {
//     studentId: string
//     isEnrolled: boolean
// }
