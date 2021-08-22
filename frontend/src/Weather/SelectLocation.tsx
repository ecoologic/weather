import { FC } from 'react';
import { ILocation } from './WeatherApi';

interface ISelectLocationProps {
  locations: ILocation[];
}

const SelectLocation: FC<ISelectLocationProps> = ({ locations }) => {
  return <p>Select from {JSON.stringify(locations)}</p>;
};

export default SelectLocation;
