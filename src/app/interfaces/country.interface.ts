export interface Country{ //Es como una clase, inicia con mayuscula, pero no tiene propiedades ni metodos
  //solo describe la estructura de los datos en un tipo compuesto
  name: string;
  capital: string;
  region: 'Americas' | 'Europe' | 'Asia' | 'Oceania' | 'Africa', //puedes usar esto cuando conoces los valores posibles
  population: number;
  flag: string;

}
