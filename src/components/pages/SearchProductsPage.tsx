import Form from '@/components/forms/Form/Form';
import {SubmitHandler, useForm, FormProvider} from 'react-hook-form';

interface SearchProductsQueryValues {
  foo: 'bar';
}

export default function SearchProductsPage() {
  const methods = useForm<SearchProductsQueryValues>({
    mode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<SearchProductsQueryValues> = data =>
    alert(JSON.stringify(data));

  return (
    <FormProvider {...methods}>
      <div>
        <h1>Search Products</h1>
        <Form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
          상품 명, 상품 카테고리, 재고 수, 소팅 기준
        </Form>
      </div>
    </FormProvider>
  );
}
