import React from 'react';
import { useDolarHoy } from '../hooks/useDolarHoy';
import './DolarHoy.css';

const DolarHoy = () => {
  const { data, loading, error } = useDolarHoy();

  return (
    <div className="dolar-hoy-box">
      <h3 className="dolar-hoy-title">Dólar Bolsa</h3>
      {loading && <div className="dolar-hoy-loading">Cargando...</div>}
      {error && <div className="dolar-hoy-error">Error: {error.message}</div>}
      {data && (
        <div>
          <div className="dolar-hoy-value">
            <b>{data.nombre?.toUpperCase() || 'Blue'}</b>
          </div>
          <div className="dolar-hoy-value">
            Compra: <b>{data.compra}</b>
          </div>
          <div className="dolar-hoy-value">
            Venta: <b>{data.venta}</b>
          </div>
        </div>
      )}
    </div>
  );
};

export default DolarHoy;