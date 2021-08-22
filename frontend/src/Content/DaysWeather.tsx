import { FC } from 'react';
import { IdayWeather } from '../Weather/WeatherApi';

const DaysWeather: FC<{ daysWeather: IdayWeather[] }> = ({ daysWeather }) => {
  return <p>DaysWeather {JSON.stringify(daysWeather)}</p>;
};

export default DaysWeather;
