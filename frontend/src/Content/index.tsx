import { Paper } from '@material-ui/core';
import { FC, useState } from 'react';
import { IonSubmit } from '../utils/interfaces';
import useStyles from '../utils/useStyles';
import LocationForm, { ILocationFormValues } from './LocationForm';

const Content: FC = () => {
  const classes = useStyles();

  const [location, setLocation] = useState<string>('');
  const onSubmitLocationForm: IonSubmit<ILocationFormValues> = (values) => {
    setLocation(values.location);
  };

  return (
    <main className="App__content">
      <Paper className={classes.padded}>
        <LocationForm onSubmit={onSubmitLocationForm} />
        {location}
      </Paper>
    </main>
  );
};

export default Content;
