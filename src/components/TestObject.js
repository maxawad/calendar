function TestObject({ numbers, hello }) {
  if (numbers.length > 5) {
    return numbers.map((number) => <li>{number}</li>);
  }
  return <div>TestObject: {hello}</div>;
}

export default TestObject;
