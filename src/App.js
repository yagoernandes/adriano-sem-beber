import './App.css';


function App() {
  const ULTIMA_VEZ_QUE_BEBEU_TIMESTAMP = new Date('01/30/2021').getTime()
  const HOJE_TIMESTAMP = new Date().getTime()
  const dias_sem_beber = parseInt((HOJE_TIMESTAMP - ULTIMA_VEZ_QUE_BEBEU_TIMESTAMP) / (24 * 3600 * 1000))
  console.log({ ULTIMA_VEZ_QUE_BEBEU_TIMESTAMP, HOJE_TIMESTAMP })
  return (
    <div className="App">
      <header className="App-header">
        <span className="App-logo">🍺</span>
        <p>
          O Adriano está a <strong>{dias_sem_beber} dias</strong> sem beber.
        </p>
      </header>
    </div>
  );
}

export default App;
