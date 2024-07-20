
const ResultMessage = (prop) => (
  <div>
    {prop.condition === "error!" 
      ? <p style={{ color: 'red' }}>{prop.condition}</p>
      : prop.condition === "success" && <p style={{ color: 'green' }}>{prop.condition}</p>}
  </div>
);

export default ResultMessage;
