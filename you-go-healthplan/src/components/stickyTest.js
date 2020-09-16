import React from "react";
import { StickyContainer, Sticky } from "react-sticky";

class App extends React.Component {
  render() {
    return (
      <StickyContainer>
        <Sticky>
          {({
            style,

            // the following are also available but unused in this example
            isSticky,
            wasSticky,
            distanceFromTop,
            distanceFromBottom,
            calculatedHeight,
          }) => <header style={style}>{/* ... */}</header>}
        </Sticky>
        {/* ... */}
      </StickyContainer>
    );
  }
}
