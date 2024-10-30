import { useState, ChangeEvent, FocusEvent, MouseEvent, FormEvent } from 'react';
import states from './countryStates';
import ConsolidatedData from './ConsolidatedData';

const INITIAL_FORM = {
  name: '',
  email: '',
  cpf: '',
  endereco: '',
  cidade: '',
  estado: states[0] || '',
  tipo: 'Casa',
  resumo: '',
  cargo: '',
  descricaoCargo: '',
};

function App() {
  const [formInfo, setFormInfo] = useState(INITIAL_FORM);
  const [alertShown, setAlertShown] = useState(false); // Para mostrar o alerta apenas uma vez
  const [showConsolidatedData, setShowConsolidatedData] = useState(false); // Controla a exibição dos dados consolidados

  const handleChange = (event: ChangeEvent<HTMLInputElement
  | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    let formattedValue = value;

    if (name === 'endereco') {
      formattedValue = value.replace(/[^a-zA-Z0-9\s]/g, '');
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

  const handleCargoMouseEnter = (event: MouseEvent<HTMLInputElement>) => {
    if (!alertShown) {
      alert('Preencha com cuidado esta informação.');
      setAlertShown(true);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Evita o recarregamento da página
    setShowConsolidatedData(true); // Exibe a <div> com os dados consolidados
  };

  return (
    <form onSubmit={ handleSubmit }>
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

      <fieldset>
        <legend>Dados Profissionais</legend>

        <label>
          Resumo do currículo
          <textarea
            name="resumo"
            value={ formInfo.resumo }
            onChange={ handleChange }
            maxLength={ 1000 }
            required
          />
        </label>

        <label>
          Cargo
          <input
            type="text"
            name="cargo"
            value={ formInfo.cargo }
            onChange={ handleChange }
            maxLength={ 40 }
            onMouseEnter={ handleCargoMouseEnter }
            required
          />
        </label>

        <label>
          Descrição do cargo
          <textarea
            name="descricaoCargo"
            value={ formInfo.descricaoCargo }
            onChange={ handleChange }
            maxLength={ 500 }
            required
          />
        </label>
      </fieldset>

      <button type="submit">Enviar</button>

      {showConsolidatedData && <ConsolidatedData formInfo={ formInfo } />}
    </form>
  );
}

export default App;
