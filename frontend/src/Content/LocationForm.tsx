import { TextField, ButtonGroup } from '@material-ui/core';
import Button from '../utils/Button';
import { ChangeEvent, FC, useRef, useState } from 'react';
import { IHasOnSubmit, voidFn } from '../utils/interfaces';

export type ILocationFormFields = 'location';
export interface ILocationFormValues {
  location: string;
}

const LocationForm: FC<IHasOnSubmit<ILocationFormValues>> = ({ onSubmit }) => {
  const blankValues = { location: '' };
  const [values, setValues] = useState<ILocationFormValues>(blankValues);
  const firstInputRef = useRef<HTMLHeadingElement | null>(null);

  const onChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setValues((values) => ({ ...values, [ev.target.id]: ev.target.value }));
  };

  const valid = (field: ILocationFormFields): boolean => {
    const value = values[field];
    const fieldValidator = {
      location: () => !!value,
    }[field];
    return fieldValidator();
  };

  const isEnabled = (): boolean => true;
  const reset: voidFn = () => {
    setValues(blankValues);
    firstInputRef?.current?.focus?.();
  };
  const wrappedOnSubmit: voidFn = () => {
    onSubmit(values);
    reset();
  };

  return (
    <form>
      <TextField
        id="location"
        label="Name"
        value={values.location}
        error={!valid('location')}
        helperText={valid('location') ? '' : `Any value`}
        inputRef={firstInputRef}
        required
        autoFocus
        onChange={onChange}
      />
      <ButtonGroup fullWidth={true}>
        <Button
          enabled={isEnabled()}
          title="Push me"
          color="primary"
          onClick={wrappedOnSubmit}
          fullWidth={true}
        >
          Submit
        </Button>
      </ButtonGroup>
    </form>
  );
};

export default LocationForm;
