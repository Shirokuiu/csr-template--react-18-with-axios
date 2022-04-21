import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function ExamplePage() {
  if (true) {
    useEffect(() => {}, []);
  }

  return (
    <>
      <h1>Hello</h1>
      <Link to="/">Go to main page</Link>
    </>
  );
}

export default ExamplePage;
