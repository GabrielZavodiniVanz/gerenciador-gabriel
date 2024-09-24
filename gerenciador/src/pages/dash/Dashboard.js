import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import './Dashboard.css';

function Dashboard({ receitas, despesas }) {
  const totalReceitas = receitas.reduce((total, receita) => total + receita.valor, 0);
  const totalDespesas = despesas.reduce((total, despesa) => total + despesa.valor, 0);
  const saldo = totalReceitas - totalDespesas;

  const data = [
    { name: 'Receitas', value: totalReceitas },
    { name: 'Despesas', value: totalDespesas },
    { name: 'Saldo', value: saldo }
  ];

  const COLORS = ['#0088FE', '#FF8042', '#00C49F'];

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">
        Dashboard 
        <i className="fas fa-chart-pie" style={{ marginLeft: '10px', color: '#0088FE' }}></i>
      </h1>
      <div className="pie-chart">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={150}
            fill="#8884d8"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
      <div className="total-values">
        <div className="value-card">
          <h3>Total de Receitas</h3>
          <p>{totalReceitas.toFixed(2)}</p>
        </div>
        <div className="value-card">
          <h3>Total de Despesas</h3>
          <p>{totalDespesas.toFixed(2)}</p>
        </div>
        <div className="value-card">
          <h3>Saldo</h3>
          <p>{saldo.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
