import { useState, ChangeEvent } from 'react';

const INITIAL_FORM = {
  name: '',
  email: '',
  cpf: '',
};

function App() {
  const [formInfo, setFormInfo] = useState(INITIAL_FORM);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormInfo((prevFormInfo) => ({
      ...prevFormInfo,
      [name]: name === 'name' ? value.toUpperCase() : value,
    }));
  };

  return (
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
  );
}

export default App;
