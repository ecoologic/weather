import { FC } from 'react';

interface ILocation {
  woeid: number;
  name: string;
}

interface ISelectLocationProps {
  locations: ILocation[];
}

const SelectLocation: FC<ISelectLocationProps> = ({ locations }) => {
  return <p>{JSON.stringify(locations)}</p>;
};

export default SelectLocation;
