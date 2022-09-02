import { useEffect } from 'react';
import { useForm, FormProvider} from 'react-hook-form';
import CardFront from './component/CardFront';
import CardForm from './component/CardForm';
import { CardFormInputs } from './types';
import './styles/App.scss';


function App() { 
  const methods = useForm<CardFormInputs>();
  const {watch} = methods;
  const watchAllFields = watch();
  const watchCVC = watch("cvc")

  return (
    <div className="App">
      <div id="gradient-container">
      <div id="card-back"><p id="cvc-text">{watchCVC}</p></div>
      <CardFront />
      </div>
      <FormProvider {...methods} >
      <CardForm />
      </FormProvider>
    </div>
  );
}

export default App;
