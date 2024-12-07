```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect: Directly modifying the state object
    count.value = 10; //This will not trigger a re-render
  }, []);

  return <div>Count: {count}</div>;
}
```