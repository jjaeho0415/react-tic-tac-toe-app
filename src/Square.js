import React from "react";

// 직접 만든 컴포넌트는 무조건 대문자로 시작해야함
// 주로 이벤트를 나타내는 prop에는 onSomething과 같은 이름을 사용하고,
function Square({ value, onSquareClick }) {
  return (
    <button className='square' onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default Square;
