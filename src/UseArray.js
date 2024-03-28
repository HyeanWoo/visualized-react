// This is a React problem from BFE.dev

import React, { useCallback, useState } from "react";

export function useArray(initialValue) {
  const [arr, setArr] = useState(initialValue);

  const push = useCallback((value) => {
    setArr((prev) => [...prev, value]);
    return value;
  }, []);

  const removeByIndex = useCallback((index) => {
    const removedValue = arr[index];
    const removedArr = [...arr.slice(0, index), ...arr.slice(index + 1)];
    setArr(removedArr);
    return removedValue;
  }, []);

  return {
    value: arr,
    push,
    removeByIndex,
  };
}

// if you want to try your code on the right panel
// remember to export App() component like below

// export function App() {
//   const { value } = useArray([1, 2, 3])
//   return <div>
//     {value}
//   </div>
// }
