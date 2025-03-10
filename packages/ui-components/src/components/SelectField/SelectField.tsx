import {
  Select,
  SelectFieldProps as SelectFieldChakraProps,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import React, { forwardRef } from 'react';

import FormContainer, {
  FormContainerProps,
} from '../FormContainer/FormContainer';

export interface SelectFieldProps
  extends FormContainerProps,
    Omit<SelectFieldChakraProps, 'onBlur' | 'id' | 'onChange'> {
  options: Array<{ label: string; value: string }>;
  placeholder?: string;
  defaultValue?: string | number;
  variant?: string;
}

const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  (props, ref) => {
    const {
      options,
      onChange,
      onBlur,
      name,
      placeholder,
      defaultValue,
      disabled,
      variant = 'primary',
    } = props;
    const styles = useMultiStyleConfig('Form', { variant });

    return (
      <FormContainer {...props}>
        <Select
          {...props}
          ref={ref}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          sx={styles.formInput}
          placeholder={placeholder}
          defaultValue={defaultValue}
          disabled={disabled}
          data-testid="selectfield.select"
        >
          {options.map(({ value, label }) => (
            <option
              key={value}
              style={{
                padding: 0,
              }}
              value={value}
            >
              {label}
            </option>
          ))}
        </Select>
      </FormContainer>
    );
  }
);

export default SelectField;
