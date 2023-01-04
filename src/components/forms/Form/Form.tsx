import FormInput from '@/components/forms/Form/FormInput';
import FormButton from '@/components/forms/Form/FormButton';
import {FormHTMLAttributes, ReactNode} from 'react';
import EmailField from '@/components/forms/predefined/fields/EmailField';
import FormFieldSet from '@/components/forms/Form/FormFieldSet';
import RegisterPasswordFieldSet from '@/components/forms/predefined/fieldSets/RegisterPasswordFieldSet';
import PasswordField from '@/components/forms/predefined/fields/PasswordField';
import ProductNameField from '@/components/forms/predefined/fields/ProductNameField';
import FormSelect from '@/components/forms/Form/FormSelect';
import SortOrderField from '@/components/forms/predefined/fields/SortOrderField';
import ProductSortByField from '@/components/forms/predefined/fields/ProductSortByField';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

function Form({children, ...rest}: FormProps) {
  return <form {...rest}>{children}</form>;
}

Form.Input = FormInput;
Form.Select = FormSelect;
Form.Button = FormButton;
Form.FieldSet = FormFieldSet;

Form.PasswordField = PasswordField;
Form.EmailField = EmailField;
Form.RegisterPasswordFieldSet = RegisterPasswordFieldSet;
Form.OrderByField = SortOrderField;

Form.ProductNameField = ProductNameField;
Form.ProductSortByField = ProductSortByField;

export default Form;
