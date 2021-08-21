import { Paper } from '@material-ui/core';
import { FC } from 'react';
import useStyles from '../utils/useStyles';

const Content: FC = () => {
  const classes = useStyles();

  return (
    <main className="App__content">
      <Paper className={classes.padded}>TEST!</Paper>
    </main>
  );
};

export default Content;
