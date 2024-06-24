import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';

function AppJSX() {
  const name = '하은';
  const list = ['우유', '딸기', '바나나'];
  return (
    // 1. 컴포넌트는 꼭 1개의 태그만 반환
    <>
      {/* 2. 빈<></> 또는 <Fragment></Fragment>로 감싸기 */}
      {/* 3. 변수명은 className으로 주기 */}
      <h1 className='orange'>{`hi ${name}`}</h1>
      <h2>react study</h2>
      <p>{name}</p>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default AppJSX;
