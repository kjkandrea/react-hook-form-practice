import Form from '@/components/Form/Form';
import {useFormContext} from 'react-hook-form';
import {Option} from '@/components/Form/FormSelect';

export type SortOrder = 'asc' | 'desc';

export interface SortOrderValues {
  sortOrder: SortOrder;
}

export const sortOrderOptions: Array<Option<SortOrder>> = [
  {
    label: '오름차순',
    value: 'asc',
  },
  {
    label: '내림차순',
    value: 'desc',
  },
];

export default function SortOrderField() {
  const {
    register,
    formState: {errors},
  } = useFormContext<SortOrderValues>();

  return (
    <Form.Select
      options={sortOrderOptions}
      {...register('sortOrder')}
      helperText={errors.sortOrder?.message}
    />
  );
}
