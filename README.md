# Incorrect State Update in React

This example demonstrates a common mistake in React state management where the state object is directly mutated instead of using the `setState` function. This issue leads to unexpected behavior because the component does not re-render when the state changes.

## Bug

The `bug.js` file shows the incorrect way to update the state. Directly changing the `count.value` property does not trigger a re-render in React, causing the display to remain unchanged.

## Solution

The `bugSolution.js` file presents the correct method. The `setCount` function provided by the `useState` hook must be used to update the state. This triggers a re-render, ensuring the display reflects the updated value.