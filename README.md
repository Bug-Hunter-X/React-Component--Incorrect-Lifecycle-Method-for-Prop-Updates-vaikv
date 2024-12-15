# React Component Lifecycle Bug

This repository demonstrates a common error in React component lifecycle methods, specifically the misuse of `componentWillReceiveProps`. This method is deprecated in recent React versions, and using it can lead to unexpected behavior and errors.

The `BuggyComponent.js` file shows the incorrect implementation, while `FixedComponent.js` shows the corrected version using `getDerivedStateFromProps` for a cleaner and more efficient approach. 

## Solution

The issue lies in using `componentWillReceiveProps`, which is deprecated.  The solution involves using either `getDerivedStateFromProps` or `componentDidUpdate` to update the component state in response to prop changes.