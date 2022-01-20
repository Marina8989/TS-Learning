import { FC,ChangeEvent, useState } from 'react';

interface Props {
   name: string;
   age: number;
   email: string;
   hairColor: HairColor;
}

export enum HairColor {
    Blonde= "Your hais is blonde",
    Brown = "Cool hair color",
    Pink = "Wow! That is os cool!"
}

export const Person: FC<Props> = ({name, age, email, hairColor})  => {

    const [country, setCountry] = useState<string | null>("");
    type NameType = "Pedro" | "Jack"
    const nameForType: NameType = "Pedro";

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
       setCountry(event.target.value)
    }

  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{email}</h1>
      <input placeholder="Write down your country..." onChange={handleChange}/>

      {country}
      {hairColor}
    </div>
  );
}

