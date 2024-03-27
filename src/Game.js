import React, { useState } from "react";
import Board from "./Board";

const Game = () => {
  // 단일 항목 배열로 그 자체가 9개의 null의 배열
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }
  const moves = history.map((squares, move) => {
    let description = move > 0 ? `Go to move # ${move}` : "Go to game start";
    let order =
      move === 0 ? `게임을 시작하세요.` : `당신은 ${move}번째 순서에 있습니다.`;
    return (
      <li key={move}>
        {order}
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });
  // 동적인 리스트를 만들 때마다 적절한 key를 할당해야함
  // key가 지정되지 않은 경우 React는 배열의 인덱스를 기본 key로 사용하는데
  // 그러면 리스트 항목의 순서를 바꾸거나 항목을 추가/제거할 때 문제 발생
  // key는 컴포넌트와 해당 컴포넌트의 형제 컴포넌트 사이에서만 고유하면 됨(전역적으로 고유할 필요는 X)
  return (
    <div className='game'>
      <div className='game-board'>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className='game-info'>
        <ol className='order-description'>{moves}</ol>
      </div>
    </div>
  );
};

export default Game;
