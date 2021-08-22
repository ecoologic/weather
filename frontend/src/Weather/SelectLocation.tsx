import { Select } from '@material-ui/core';
import { FC, useState } from 'react';
import { Ilocation } from './WeatherApi';

interface ISelectLocationProps {
  locations: Ilocation[];
}

interface ISelectOnChangeProps {
  name?: string | undefined;
  value: unknown;
}

const SelectLocation: FC<ISelectLocationProps> = ({ locations }) => {
  const [selection, setSelection] = useState<string | undefined>(undefined);
  const onChange = (event: React.ChangeEvent<ISelectOnChangeProps>) => {
    setSelection(event.target.name);
    console.log(`SelectLocaiton ${event.target.name}`);
  };
  if (locations.length) {
    return (
      <Select
        native
        value={selection}
        onChange={onChange}
        inputProps={{ name: 'Location', id: 'locationSelect' }}
      >
        {locations.map((location) => (
          <option value={location.woeid} key={location.woeid}>
            {location.name}
          </option>
        ))}
      </Select>
    );
  } else {
    return null;
  }
};

export default SelectLocation;
