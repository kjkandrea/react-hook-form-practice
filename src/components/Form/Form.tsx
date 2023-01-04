import FormInput from '@/components/Form/FormInput';
import FormButton from '@/components/Form/FormButton';
import {FormHTMLAttributes, ReactNode} from 'react';
import EmailField from '@/components/Form/predefined/fields/EmailField';
import FormFieldSet from '@/components/Form/FormFieldSet';
import RegisterPasswordFieldSet from '@/components/Form/predefined/fieldSets/RegisterPasswordFieldSet';
import PasswordField from '@/components/Form/predefined/fields/PasswordField';
import ProductNameField from '@/components/Form/predefined/fields/ProductNameField';
import FormSelect from '@/components/Form/FormSelect';
import SortOrderField from '@/components/Form/predefined/fields/SortOrderField';
import ProductSortByField from '@/components/Form/predefined/fields/ProductSortByField';

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
