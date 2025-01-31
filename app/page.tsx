import CountryCard from '@/components/country-card';

export type Country = {
  name: {
    common: string;
   
  };
  capital: string;
  population: number;
  languages:string;
  region: string;
  subregion: string;
  translations: {
    por:{
      common: string;
    }
  };
  flags:{
    svg: string;
    alt:string;
  };
  borders?: string[];
  cca3: string;
  
}
async function getCountries(): Promise<Country[]> {
  const response = await fetch("https://restcountries.com/v3.1/all");
  return response.json();
}


export default async function Home() {
  const countries = await getCountries();
  return (
    <section className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
    lg:grid-cols-4 xl:grid-cols-5 gap-2 mt-16 w-full">
      {countries.map((country) => (
       <CountryCard
       key={country.name.common}
       name={country.name.common}
       ptName={country.translations.por.common}
       flag={country.flags.svg}
       flagAlt={country.flags.alt}
       />
     

      ))}
    </section>
  );
}
