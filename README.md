# react-escape

An element which renders its children into a separate DOM node automatically appended to the end of the document body.  This allows a mechanism to escape the current tree into a separate layer.  This is useful for things like popups, popouts, custom tooltips, etc.  (Also see react-float-affixed which uses this module)

```js
var Escape = require('react-escape')
```

```jsx
    <Escape to="viewport" style={{backgroundColor:'rgba(255,255,255,0.8)'}}>
        <div>I am outside the rest of the DOM tree</div>
    </Escape>
```

You can escape to either the "viewport" which will attach it's children using "fixed" or escape to the "document" which will position with "absolute".
