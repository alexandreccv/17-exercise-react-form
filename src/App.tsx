import { useState, ChangeEvent, FocusEvent } from 'react';
import states from './countryStates';

const INITIAL_FORM = {
  name: '',
  email: '',
  cpf: '',
  endereco: '',
  cidade: '',
  estado: states[0] || '', // Define o primeiro estado como padrão
  tipo: 'Casa',
};

function App() {
  const [formInfo, setFormInfo] = useState(INITIAL_FORM);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;

    let formattedValue = value;

    if (name === 'endereco') {
      formattedValue = value.replace(/[^a-zA-Z0-9\s]/g, ''); // Remove caracteres especiais
    }

    setFormInfo((prevFormInfo) => ({
      ...prevFormInfo,
      [name]: name === 'name' ? formattedValue.toUpperCase() : formattedValue,
    }));
  };

  const handleCityBlur = (event: FocusEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (/^\d/.test(value)) {
      setFormInfo((prevFormInfo) => ({
        ...prevFormInfo,
        cidade: '',
      }));
    }
  };

  return (
    <form action="">
      <fieldset>
        <legend>Dados Pessoais</legend>

        <label>
          Nome
          <input
            type="text"
            name="name"
            value={ formInfo.name }
            onChange={ handleChange }
            maxLength={ 40 }
            required
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={ formInfo.email }
            onChange={ handleChange }
            maxLength={ 50 }
            required
          />
        </label>

        <label>
          CPF
          <input
            type="text"
            name="cpf"
            value={ formInfo.cpf }
            onChange={ handleChange }
            maxLength={ 11 }
            required
          />
        </label>
      </fieldset>

      <fieldset>
        <legend>Dados de Endereço</legend>

        <label>
          Endereço
          <input
            type="text"
            name="endereco"
            value={ formInfo.endereco }
            onChange={ handleChange }
            maxLength={ 200 }
            required
          />
        </label>

        <label>
          Cidade
          <input
            type="text"
            name="cidade"
            value={ formInfo.cidade }
            onChange={ handleChange }
            onBlur={ handleCityBlur }
            maxLength={ 28 }
            required
          />
        </label>

        <label>
          Estado
          <select
            name="estado"
            value={ formInfo.estado }
            onChange={ handleChange }
            required
          >
            <option value="">Selecione o estado</option>
            {states.map((state) => (
              <option key={ state } value={ state }>
                {state}
              </option>
            ))}
          </select>
        </label>

        <div>
          Tipo
          <label>
            <input
              type="radio"
              name="tipo"
              value="Casa"
              checked={ formInfo.tipo === 'Casa' }
              onChange={ handleChange }
            />
            Casa
          </label>
          <label>
            <input
              type="radio"
              name="tipo"
              value="Apartamento"
              checked={ formInfo.tipo === 'Apartamento' }
              onChange={ handleChange }
            />
            Apartamento
          </label>
        </div>
      </fieldset>
    </form>
  );
}

export default App;
