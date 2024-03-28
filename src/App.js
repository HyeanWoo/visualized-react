import React, { useEffect, useState } from "react";
import { useArray } from "./UseArray";
import { flushSync } from "react-dom";

const initArray = [1, 2, 3];

const push_values = [];
const removeByIndex_values = [];

const App = () => {
  const { push, removeByIndex } = useArray(initArray);
  const [_, setState] = useState(0);

  push_values.push(push);
  removeByIndex_values.push(removeByIndex);

  useEffect(() => {
    flushSync(() => {
      setState(0);
    });
    flushSync(() => {
      push(4);
    });
  }, []);

  return <div>NULL</div>;
};

setTimeout(() => {
  console.log(push_values);
  console.log(push_values.length);
  console.log(removeByIndex_values);
  console.log(removeByIndex_values.length);
}, 50);

export default App;
