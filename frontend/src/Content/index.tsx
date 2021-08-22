import { Paper } from '@material-ui/core';
import { FC, useState } from 'react';
import { IonSubmit } from '../utils/interfaces';
import useStyles from '../utils/useStyles';
import WeatherApi, { IdayWeather, Ilocation } from '../Weather/WeatherApi';
import SearchForm, { ISearchFormValues } from '../Weather/SearchForm';
import SelectLocation from '../Weather/SelectLocation';
import DaysWeather from './DaysWeather';

const parseLocations = (nextDays: IdayWeather[]) => {};

const locations: Ilocation[] = [
  { woeid: 123, name: 'Brisbane' },
  { woeid: 222, name: 'Sydney' },
];

const Content: FC = () => {
  const classes = useStyles();

  const [query, setQuery] = useState<string>('');
  const [nextDays, setNextDays] = useState<IdayWeather[]>([]);
  const onSubmitSearchForm: IonSubmit<ISearchFormValues> = async (values) => {
    setQuery(values.query);
    const weatherApi = new WeatherApi(values.query);
    setNextDays(await weatherApi.nextDays());
  };

  return (
    <main className="App__content">
      <Paper className={classes.padded}>
        <SearchForm onSubmit={onSubmitSearchForm} />
        {query}
        <SelectLocation locations={locations} />
        <DaysWeather daysWeather={nextDays} />
      </Paper>
    </main>
  );
};

export default Content;
