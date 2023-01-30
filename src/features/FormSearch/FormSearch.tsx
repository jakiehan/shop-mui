import React from 'react';
import { FormSearchStyled, InputStyled, InputAdornment, SearchIcon } from "./FormSearch.styled";
import { useFormSearch } from './useFormSearch';

export const FormSearch = () => {

  const [value, handleSubmit, handleChange] = useFormSearch();

  return (
    <FormSearchStyled
      component="form"
      name="form"
      onSubmit={handleSubmit}
    >
      <InputStyled
        type="search"
        name="search"
        placeholder="Search products"
        onChange={handleChange}
        value={value}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        disableUnderline
      />
    </FormSearchStyled>
  );
};

