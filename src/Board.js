// App.js는 컴포넌트를 생성
// React에서 컴포넌트는 사용자 인터페이스의 일부를 표시하는 재사용 가능한 코드의 조각
// 컴포넌트는 애플리케이션의 UI 앨리먼트를 렌더링, 관리, 업데이트할 때 사용함
import Square from "./Square";
import calculateWinner from "./calculateWinner";

function Board({ xIsNext, squares, onPlay }) {
  const winner = calculateWinner(squares);
  function handleClick(i) {
    if (squares[i] || winner) {
      return;
    }
    // 이벤트를 처리하는 함수를 정의할 때는 handleSomething과 같은 이름을 사용
    // slice()를 사용해 squares 배열의 사본 생성(원본 변경 X)
    // -> 기본적으로 부모 컴포넌트의 state가 변경되면 변경 사항이 없는 컴포넌트도 포함한 모든 컴포넌트가 리렌더링되기 때문에 성능상 좋지 않음
    // -> 불변성을 사용하면 컴포넌트가 데이터의 변경 여부를 저렴한 비용으로 판단할 수 있음
    // 자바스크립트는 클로저를 지원 -> 내부 함수(handleClick)가 외부 함수(Board)에 정의된 변수 및 함수에 접근 가능함 -> 이 두 함수는 Board 함수 내부에 정의되어 있기 때문
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }
  let status = winner
    ? `Winner: ${winner}`
    : `Next Player ${xIsNext ? "X" : "O"}`;
  return (
    <>
      <div className='status'>{status}</div>
      <div className='board-row'>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className='board-row'>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className='board-row'>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default Board;
