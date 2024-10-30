import React from 'react';

interface ConsolidatedDataProps {
  formInfo: {
    name: string;
    email: string;
    cpf: string;
    endereco: string;
    cidade: string;
    estado: string;
    tipo: string;
    resumo: string;
    cargo: string;
    descricaoCargo: string;
  };
}

function ConsolidatedData({ formInfo }: ConsolidatedDataProps) {
  return (
    <div>
      <h2>Dados Consolidados</h2>
      <p>
        <strong>Nome:</strong>
        {' '}
        {formInfo.name}
      </p>
      <p>
        <strong>Email:</strong>
        {' '}
        {formInfo.email}
      </p>
      <p>
        <strong>CPF:</strong>
        {' '}
        {formInfo.cpf}
      </p>
      <p>
        <strong>Endereço:</strong>
        {' '}
        {formInfo.endereco}
      </p>
      <p>
        <strong>Cidade:</strong>
        {' '}
        {formInfo.cidade}
      </p>
      <p>
        <strong>Estado:</strong>
        {' '}
        {formInfo.estado}
      </p>
      <p>
        <strong>Tipo:</strong>
        {' '}
        {formInfo.tipo}
      </p>
      <p>
        <strong>Resumo do currículo:</strong>
        {' '}
        {formInfo.resumo}
      </p>
      <p>
        <strong>Cargo:</strong>
        {' '}
        {formInfo.cargo}
      </p>
      <p>
        <strong>Descrição do cargo:</strong>
        {' '}
        {formInfo.descricaoCargo}
      </p>
    </div>
  );
}

export default ConsolidatedData;
