import Form from '@/components/forms/Form/Form';
import {useFormContext} from 'react-hook-form';
import {Option} from '@/components/forms/Form/FormSelect';

type OrderBy = 'asc' | 'desc';

export interface OrderByValues {
  orderBy: OrderBy;
}

const orderByOptions: Array<Option<OrderBy>> = [
  {
    label: '오름차순',
    value: 'asc',
  },
  {
    label: '내림차순',
    value: 'desc',
  },
];

export default function OrderByField() {
  const {
    register,
    formState: {errors},
  } = useFormContext<OrderByValues>();

  return (
    <Form.Select
      options={orderByOptions}
      {...register('orderBy')}
      helperText={errors.orderBy?.message}
    />
  );
}
