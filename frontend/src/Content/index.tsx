import { Paper } from '@material-ui/core';
import { FC, useState } from 'react';
import { IonSubmit } from '../utils/interfaces';
import useStyles from '../utils/useStyles';
import WeatherApi from '../Weather/WeatherApi';
import SearchForm, { ISearchFormValues } from '../Weather/SearchForm';
import SelectLocation from '../Weather/SelectLocation';

const Content: FC = () => {
  const classes = useStyles();

  const [query, setQuery] = useState<string>('');
  const [nextDays, setNextDays] = useState<any[]>([]);
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
        {JSON.stringify(nextDays)}
        <SelectLocation locations={[{ woeid: 1, name: 'test' }]} />
      </Paper>
    </main>
  );
};

export default Content;
