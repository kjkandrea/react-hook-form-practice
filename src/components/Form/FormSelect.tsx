import {
  forwardRef,
  OptionHTMLAttributes,
  Ref,
  SelectHTMLAttributes,
} from 'react';

export interface Option<T> {
  label: string;
  value: T;
}

interface FormSelectProps<T> extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  helperText?: string;
  options: Array<Option<T>>;
}

function FormSelect<
  ValueType extends OptionHTMLAttributes<HTMLOptionElement>['value']
>(
  {label, id, options, helperText, ...rest}: FormSelectProps<ValueType>,
  ref: Ref<HTMLSelectElement>
) {
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <select id={id} ref={ref} {...rest}>
        {options.map(({label, value}, index) => (
          <option value={value} key={index}>
            {label}
          </option>
        ))}
      </select>
      {helperText && <p>{helperText}</p>}
    </div>
  );
}

export default forwardRef(FormSelect);
