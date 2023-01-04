import {Form, FormProps} from 'react-router-dom';

function QueryParamBindingForm({...rest}: FormProps) {
  return <Form {...rest} />;
}
