import Form from '@/components/Form/Form';
import {SubmitHandler, useForm, FormProvider} from 'react-hook-form';
import {ProductNameValues} from '@/components/Form/predefined/fields/ProductNameField';
import {
  SortOrder,
  sortOrderOptions,
} from '@/components/Form/predefined/fields/SortOrderField';
import {
  ProductSortBy,
  productSortByOptions,
} from '@/components/Form/predefined/fields/ProductSortByField';
import {createEnumParam, StringParam, useQueryParams} from 'use-query-params';
import {omitEmptyQuery} from '@/utils/omitEmptyQuery';
import {pluck} from '@/utils/pluck';
import {ProductSortValues} from '@/components/Form/predefined/fieldSets/ProductSortFieldSet';

type SearchProductsQueryValues = ProductNameValues & ProductSortValues;

export default function SearchProductsPage() {
  const [queryParams, setQueryParams] = useQueryParams({
    productName: StringParam,
    productSortBy: createEnumParam<ProductSortBy>(
      pluck(productSortByOptions, 'value')
    ),
    sortOrder: createEnumParam<SortOrder>(pluck(sortOrderOptions, 'value')),
  });

  const methods = useForm<SearchProductsQueryValues>({
    mode: 'onSubmit',
    defaultValues: omitEmptyQuery(
      queryParams
    ) as Partial<SearchProductsQueryValues>,
  });

  const onSubmit: SubmitHandler<SearchProductsQueryValues> = data => {
    setQueryParams(omitEmptyQuery(data));
    alert(JSON.stringify(data));
  };

  return (
    <FormProvider {...methods}>
      <div>
        <h1>Search Products</h1>
        <Form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
          <Form.ProductNameField />
          <Form.ProductSortFieldSet />
          <Form.Button type="submit">검색</Form.Button>
        </Form>
      </div>
    </FormProvider>
  );
}
