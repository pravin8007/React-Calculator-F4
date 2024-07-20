// Css
import './InputField.css';
const InputField = (prop) => (
  <input 
    type="text" 
    value={prop.value} 
    onChange={prop.onChange} 
    placeholder={prop.placeholder} 
  />
);

export default InputField;
