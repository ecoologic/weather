import { Paper } from '@material-ui/core';
import { FC, useState } from 'react';
import { IonSubmit } from '../utils/interfaces';
import useStyles from '../utils/useStyles';
import WeatherApi from '../Weather/WeatherApi';
import LocationForm, { ILocationFormValues } from './LocationForm';

const Content: FC = () => {
  const classes = useStyles();

  const [location, setLocation] = useState<string>('');
  const [nextDays, setNextDays] = useState<any[]>([]);
  const onSubmitLocationForm: IonSubmit<ILocationFormValues> = async (
    values
  ) => {
    setLocation(values.location);
    const weatherApi = new WeatherApi(values.location);
    setNextDays(await weatherApi.nextDays());
  };

  return (
    <main className="App__content">
      <Paper className={classes.padded}>
        <LocationForm onSubmit={onSubmitLocationForm} />
        {location}
        {JSON.stringify(nextDays)}
      </Paper>
    </main>
  );
};

export default Content;
