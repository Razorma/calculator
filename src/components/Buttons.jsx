
const Buttons = ({ setEquation, setTotal, equation }) => {
    const handleOperation = (value) => {
      setEquation((prevEquation) => prevEquation + value);
    };
  
    const handleTotal = () => {
      try {
        const result = eval(equation);
        setTotal(result);
      } catch (error) {
        // Handle error if the equation is invalid
        setTotal('Error');
      }
    };
  
    const clearEquation = () => {
      setEquation('');
      setTotal('');
    };
  
    return (
      <table>
        <tbody>
          <tr>
            <td className='cancel' onClick={clearEquation}>
              C
            </td>
            <td className='negate' onClick={() => handleOperation('-')}>
              +/-</td>
            <td className='percent' onClick={() => handleOperation('%')}>
              %</td>
            <td className='devide' onClick={() => handleOperation('/')}>
              /
            </td>
          </tr>
          <tr>
            <td className='seven' onClick={() => handleOperation('7')}>7</td>
            <td className='eight' onClick={() => handleOperation('8')}>8</td>
            <td className='nine' onClick={() => handleOperation('9')}>9</td>
            <td className='times' onClick={() => handleOperation('*')}>
              *
            </td>
          </tr>
          <tr>
            <td className='four' onClick={() => handleOperation('4')}>4</td>
            <td className='five' onClick={() => handleOperation('5')}>5</td>
            <td className='six' onClick={() => handleOperation('6')}>6</td>
            <td className='subtract' onClick={() => handleOperation('-')}>
              -
            </td>
          </tr>
          <tr>
            <td className='one' onClick={() => handleOperation('1')}>1</td>
            <td className='two' onClick={() => handleOperation('2')}>2</td>
            <td className='three' onClick={() => handleOperation('3')}>3</td>
            <td className='add' onClick={() => handleOperation('+')}>
              +
            </td>
          </tr>
          <tr>
            <td className='zero' colSpan={2} onClick={() => handleOperation('0')}>
              0
            </td>
            <td className='dercimal' onClick={() => handleOperation('.')}>
              .
            </td>
            <td className='total' onClick={handleTotal}>=</td>
          </tr>
        </tbody>
      </table>
    );
  };
  
  export default Buttons;