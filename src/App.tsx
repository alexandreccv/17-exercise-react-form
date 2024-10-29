import { useState, ChangeEvent } from 'react';

function App() {
  const [name, setName] = useState<string>('');

  const handleUpperName = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toUpperCase();
    setName(value);
  };

  return (
    <fieldset>
      <legend>Dados Pessoais</legend>

      <label>
        Nome:
        <input
          type="text"
          id="name"
          value={ name }
          onChange={ handleUpperName }
          maxLength={ 40 }
          required
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          id="email"
          maxLength={ 50 }
          required
        />
      </label>

      <label>
        CPF:
        <input
          type="text"
          id="cpf"
          maxLength={ 11 }
          required
        />
      </label>
    </fieldset>
  );
}

export default App;
