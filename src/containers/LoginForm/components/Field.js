import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// Components
import Label from './Label';
import Input from './Input';
import ErrorSpan from './ErrorSpan';

const FieldWrapper = styled.div`
  margin: 0.8em 0;
  position: relative;
`;

function Field({
  label,
  type,
  placeholder,
  name,
  isRequired,
  onChange,
  onBlur,
  onFocus,
  value,
  errors,
}) {

  return (
    <FieldWrapper isErrored={errors[name]}>
      <Label isErrored={errors[name]} htmlFor={name}>
        {label}
      </Label>
      <Input
        isErrored={errors[name]}
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        required={isRequired}
        value={value}
      />
      <ErrorSpan errors={errors[name]}>{errors[name]}</ErrorSpan>
    </FieldWrapper>
  );
}

Field.propTypes = {
  errors: PropTypes.object,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  value: PropTypes.string,
};

Field.defaultProps = {
  value: '',
  errors: null,
};

export default Field;
