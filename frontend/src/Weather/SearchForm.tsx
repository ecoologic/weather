import { TextField, ButtonGroup } from '@material-ui/core';
import Button from '../utils/Button';
import { ChangeEvent, FC, useRef, useState } from 'react';
import { IHasOnSubmit, voidFn } from '../utils/interfaces';

export type ISearchFormFields = 'query';
export interface ISearchFormValues {
  query: string;
}
const blankValues = { query: '' };

const SearchForm: FC<IHasOnSubmit<ISearchFormValues>> = ({ onSubmit }) => {
  const [values, setValues] = useState<ISearchFormValues>(blankValues);
  const firstInputRef = useRef<HTMLHeadingElement | null>(null);

  const onChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setValues((values) => ({ ...values, [ev.target.id]: ev.target.value }));
  };

  const valid = (field: ISearchFormFields): boolean => {
    const value = values[field];
    const fieldValidator = {
      query: () => !!value,
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
        id="query"
        label="Search locations"
        value={values.query}
        error={!valid('query')}
        helperText={valid('query') ? '' : `Any place`}
        inputRef={firstInputRef}
        required
        autoFocus
        onChange={onChange}
      />
      <ButtonGroup fullWidth={true}>
        <Button
          enabled={isEnabled()}
          title="Search"
          color="primary"
          onClick={wrappedOnSubmit}
          fullWidth={true}
        >
          Search
        </Button>
      </ButtonGroup>
    </form>
  );
};

export default SearchForm;
