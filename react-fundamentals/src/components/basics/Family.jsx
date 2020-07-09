import React from 'react';

export default function (props) {
  return (
    <div>
      {props.children.map((child, i) => {
        return React.cloneElement(child, { ...props, key: i })
      })}

    </div>)
}