import React from 'react';
import './table.css' ;

function Table({ despesas, receitas }) {
 
  const totalDespesas = despesas.reduce((total, despesa) => total + despesa.valor, 0);
  const totalReceitas = receitas.reduce((total, receita) => total + receita.valor, 0);
  const saldo = totalReceitas - totalDespesas;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {despesas.map((despesa, index) => (
            <tr key={index}>
              <td>{despesa.descricao}</td>
              <td>{despesa.valor.toFixed(2)}</td>
              <td>Despesa</td>
            </tr>
          ))}
          {receitas.map((receita, index) => (
            <tr key={index}>
              <td>{receita.descricao}</td>
              <td>{receita.valor.toFixed(2)}</td>
              <td>Receita</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h3>Total de Despesas: {totalDespesas.toFixed(2)}</h3>
        <h3>Total de Receitas: {totalReceitas.toFixed(2)}</h3>
        <h3>Saldo: {saldo.toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default Table;
