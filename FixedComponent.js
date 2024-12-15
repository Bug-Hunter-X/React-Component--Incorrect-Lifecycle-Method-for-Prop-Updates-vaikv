The `getDerivedStateFromProps` lifecycle method provides a clean way to update state based on props.  It takes the props and the current state as arguments and returns an object that represents the new state.  Here's how it would be used to fix the bug:

```javascript
// FixedComponent.js
import React from 'react';

class FixedComponent extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    // Update state only if new prop value is different from the previous one
    if (nextProps.myProp !== prevState.myProp) {
      return { myProp: nextProps.myProp };
    }
    //Return null to indicate no state change is needed.
    return null;
  }

  constructor(props) {
    super(props);
    this.state = { myProp: props.myProp };
  }

  render() {
    return (
      <div>
        <p>My Prop: {this.state.myProp}</p>
      </div>
    );
  }
}

export default FixedComponent;
```
Alternatively, `componentDidUpdate` can also be used, but it requires more explicit comparison of previous and next props.