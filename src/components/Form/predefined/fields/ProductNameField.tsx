import regex from '@/const/regex';
import Form from '@/components/Form/Form';
import {useFormContext} from 'react-hook-form';

export interface ProductNameValues {
  productName: string;
}

export default function ProductNameField() {
  const {
    register,
    formState: {errors},
  } = useFormContext<ProductNameValues>();

  return (
    <Form.Input
      id="product-name"
      type="text"
      label="상품 명"
      {...register('productName', {
        pattern: {
          value: regex.noSpecialChar,
          message: '특수문자를 허용하지 않습니다. 🙏',
        },
      })}
      helperText={errors.productName?.message}
    />
  );
}
