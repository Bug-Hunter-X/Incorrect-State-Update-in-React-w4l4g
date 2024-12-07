```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: Using the setCount function
    setCount(10);
  }, []);

  return <div>Count: {count}</div>;
}

export default MyComponent;
```