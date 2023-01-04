import Form from '@/components/Form/Form';
import {useFormContext} from 'react-hook-form';
import {Option} from '@/components/Form/FormSelect';

export type ProductSortBy =
  | 'registered_date'
  | 'name'
  | 'amount'
  | 'sales_count'
  | 'stock_count';

export interface ProductSortByValues {
  productSortBy: ProductSortBy;
}

export const productSortByOptions: Array<Option<ProductSortBy>> = [
  {
    label: '등록일순',
    value: 'registered_date',
  },
  {
    label: '이름순',
    value: 'name',
  },
  {
    label: '가격순',
    value: 'amount',
  },
  {
    label: '판매량순',
    value: 'sales_count',
  },
  {
    label: '재고순',
    value: 'stock_count',
  },
];

export default function ProductSortByField() {
  const {
    register,
    formState: {errors},
  } = useFormContext<ProductSortByValues>();

  return (
    <Form.Select
      options={productSortByOptions}
      {...register('productSortBy')}
      helperText={errors.productSortBy?.message}
    />
  );
}
