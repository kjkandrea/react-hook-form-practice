import Form from '@/components/forms/Form/Form';
import {SubmitHandler, useForm, FormProvider} from 'react-hook-form';
import {ProductNameValues} from '@/components/forms/predefined/fields/ProductNameField';
import {SortOrderValues} from '@/components/forms/predefined/fields/SortOrderField';
import {ProductSortByValues} from '@/components/forms/predefined/fields/ProductSortByField';
import {StringParam, useQueryParams} from 'use-query-params';

type SearchProductsQueryValues = ProductNameValues &
  ProductSortByValues &
  SortOrderValues;

export default function SearchProductsPage() {
  const methods = useForm<SearchProductsQueryValues>({
    mode: 'onBlur',
    defaultValues: {
      productSortBy: 'registered_date',
      sortOrder: 'asc',
    },
  });

  const [queryParams, setQueryParams] = useQueryParams({
    productName: StringParam,
    productSortBy: StringParam,
    sortOrder: StringParam,
  });

  const onSubmit: SubmitHandler<SearchProductsQueryValues> = data => {
    setQueryParams(data);
    console.log(queryParams);
    alert(JSON.stringify(data));
  };

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
