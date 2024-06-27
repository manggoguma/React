import React,{useState} from 'react';

export default function Products() {
    const [count,setCount] = useState(0);
    const [Products,setProducts] = useState([]);

    return (
        <>
            <ul>
                {Products.map((product)=>(
                    <li key={product.id}>
                        <article>
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                        </article>
                    </li>
                ))}            
            </ul>   
            <button onClick={()=>setCount((prev)=>prev+1)}>{count}</button>
        </>
    );
}

