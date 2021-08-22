import { FC } from 'react';
import { conditionIcon, IdayWeather } from '../Weather/WeatherApi';

// TODO: units of measure
const DaysWeather: FC<{ daysWeather: IdayWeather[] }> = ({ daysWeather }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Condition</th>
          <th></th>
          <th>Min</th>
          <th>Max</th>
          <th>Wind speed (mps)</th>
        </tr>
      </thead>
      <tbody>
        {daysWeather.map((day) => (
          <tr key={day.date}>
            <td>{day.date}</td>
            <td>{day.weatherStateName}</td>
            <td>
              <img
                width={20}
                height={20}
                src={conditionIcon(day.weatherStateAbbr)}
                alt={day.weatherStateName}
              />
            </td>
            <td>{day.minTemp.toFixed(2)}</td>
            <td>{day.maxTemp.toFixed(2)}</td>
            <td>{day.windSpeed.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DaysWeather;
