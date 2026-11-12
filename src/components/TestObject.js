function TestObject({ numbers, hello }) {
  if (numbers.length > 5) {
    return numbers.map((number, index) => <li key={index}>{number}</li>);
  }
  return <div>TestObject: {hello}</div>;
}

export default TestObject;
