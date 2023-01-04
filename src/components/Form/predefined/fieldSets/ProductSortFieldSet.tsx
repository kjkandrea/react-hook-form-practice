import Form from '@/components/Form/Form';
import {SortOrderValues} from '@/components/Form/predefined/fields/SortOrderField';
import {ProductSortByValues} from '@/components/Form/predefined/fields/ProductSortByField';

export type ProductSortValues = ProductSortByValues & SortOrderValues;

export default function ProductSortFieldSet() {
  return (
    <Form.FieldSet name="register-password">
      <Form.ProductSortByField />
      <Form.SortOrderField />
    </Form.FieldSet>
  );
}
