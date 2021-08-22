import { FC } from 'react';
import { Ilocation } from './WeatherApi';

interface ISelectLocationProps {
  locations: Ilocation[];
}

const SelectLocation: FC<ISelectLocationProps> = ({ locations }) => {
  return <p>Select from {JSON.stringify(locations)}</p>;
};

export default SelectLocation;
