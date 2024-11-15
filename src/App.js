import { useState } from 'react';
import './App.css';

function App() {
  const [equation, setEquation] = useState('');
  const [interval, setInterval] = useState({
    interval1: 1,
    interval2: 1
  });
  const [msg, setMsg] = useState(null);

  function handleEquationChange(e) {
    setEquation(e.target.value);
  }

  function handleIntervalChange(e) {
    const { name, value } = e.target;
    setInterval((prevInterval) => ({
      ...prevInterval,
      [name]: value
    }));
  }

  function check() {
    try {
      // Normalizar la ecuación: reemplazar `−` por `-`
      const normalizedEquation = equation.replace(/−/g, '-');
  
      // Validación básica para permitir solo números, operadores, paréntesis, espacios y 'x'
      const isValid = /^[0-9+\-*/()x\s^]+$/.test(normalizedEquation);
  
      if (!isValid) {
        setMsg(
          "Error: Solo se permiten números, operadores (+, -, *, /, ^), paréntesis y 'x' para la variable."
        );
        return;
      }
  
      // Reemplaza 'x' por interval1 y evalúa
      const equation1Eval = normalizedEquation
        .replace(/x/g, `(${interval.interval1})`)
        .replace(/\^/g, '**');
      const result1 = eval(equation1Eval);
  
      // Reemplaza 'x' por interval2 y evalúa
      const equation2Eval = normalizedEquation
        .replace(/x/g, `(${interval.interval2})`)
        .replace(/\^/g, '**');
      const result2 = eval(equation2Eval);
  
      // Verifica el Teorema de Bolzano
      const verify =
        (result1 <= -1 && result2 >=0) || (result1 >= 0 && result2 <= -1)
          ? 'Cumple con el teorema de Bolzano'
          : 'No cumple con el teorema de Bolzano';
  
      setMsg(
        `Resultado con intervalo 1: ${result1}, Resultado con intervalo 2: ${result2}. ${verify}`
      );
    } catch (err) {
      setMsg('Error: Expresión inválida. Verifica el formato de la ecuación.');
    }
  }
  
  

  return (
    <div className="App">
      <input
        type="number"
        value={interval.interval1}
        onChange={handleIntervalChange}
        name="interval1"
        placeholder="Ingrese el 1 intervalo"
        required
      />
      <input
        type="number"
        value={interval.interval2}
        onChange={handleIntervalChange}
        name="interval2"
        placeholder="Ingres3 el 2 intervalo"
        required
      />
      <input
        type="text"
        value={equation}
        onChange={handleEquationChange}
        placeholder="Ingresa una ecuación "
        required
      />
      <button onClick={check}>Check</button>
      {msg && <p>{msg}</p>}
    </div>
  );
}

export default App;
