import Form from '@/components/forms/Form/Form';
import {SubmitHandler, useForm, FormProvider} from 'react-hook-form';
import {ProductNameValues} from '@/components/forms/predefined/fields/ProductNameField';
import {SortOrderValues} from '@/components/forms/predefined/fields/SortOrderField';
import {ProductSortByValues} from '@/components/forms/predefined/fields/ProductSortByField';

type SearchProductsQueryValues = ProductNameValues &
  ProductSortByValues &
  SortOrderValues;

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
          <Form.ProductNameField />
          <Form.ProductSortByField />
          <Form.OrderByField />
          <Form.Button type="submit">검색</Form.Button>
        </Form>
      </div>
    </FormProvider>
  );
}
