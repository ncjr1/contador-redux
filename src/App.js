import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import {incrementarContador, decrementarContador} from './actions/contador.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

function App({contador, incrementar, decrementar}) {
  return (
    <div id="container">
      <div className="App">
        Contador: {contador}
      </div>
      <div id="buttonContainer">
        <button id="btnIncrementar" onClick={incrementar}><FontAwesomeIcon icon={solid('plus')}/> Incrementar</button>
        <button id="btnDecrementar" onClick={decrementar}><FontAwesomeIcon icon={solid('minus')}/> Decrementar</button>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  contador: state.contadorReducer.contador,
});

const mapDispatchToProps = (dispatch) => ({
  incrementar: () => dispatch(incrementarContador()),
  decrementar: () => dispatch(decrementarContador()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
//connect(estadoQueDesejaUsar, dispatchersQueDesejaUsar)(ComponenteQueDesejaConectar).
