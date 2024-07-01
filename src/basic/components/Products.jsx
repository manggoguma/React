import React, { useEffect, useState } from 'react';

export default function Products() {
const [products, setProducts] = useState([]);
const [checked, setChecked] = useState(false);
const handleChange = () => setChecked((prev)=>!prev);

//   // 비동기 형식으로 데이터 가져오기 -> 성능에 문제 생김
//   fetch('data/Products.json')
//     .then((res) => res.json())
//     //json 형태로 변환
//     .then((data) => {
//       console.log('데이터를 네트워크에서 받아옴');
//       setProducts(data);
//     });

  useEffect(() => {
    fetch(`data/${checked ? 'sale_':'' }Products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('처음 mount 되었을 때');
        setProducts(data);
      });
      return ()=>{
        console.log('unmount 상태');
      }
  },[checked]);

  return (
    <>
    <input id = 'checkbox' type="checkbox" value={checked} onChange={handleChange} />
    <label htmlFor="checkbox">Show Only 🔥 Sale</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>

    </>
  );
}
