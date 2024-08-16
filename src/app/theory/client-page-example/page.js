// 'use client';

// import { fetchProductList } from '@/actions/page';
// import React, { useEffect, useState } from 'react'

// const ClientSideExample = () => {

//     const [products, setProducts] = useState([]);
//     const [loading,setLoading] = useState(false);


//     const getListOfProducts = async () => {
//         setLoading(true);
//         const data = await fetchProductList();
//         if (data) {
//             // console.log(data);
//             setProducts(data);
//             setLoading(false);

//         }
//     }
//     useEffect(() => {
//         getListOfProducts();
//     }, [])

//     if(loading){
//         return <h1 className='text-4xl'>Loading...</h1>
//     }


//     return (
//         <div>Products

//             <>

//                 {/* <li> */}
//                 <ul>
//                     {
//                         // products.map((product) => {
//                         //     return <li key={product.id}>{product.title}</li>
//                         // })

//                         products && products.length > 0 ? (

//                             products.map((products) => {

//                                 return (
//                                     <li key={products.id} > {products.title}</li>
//                                 )
//                             })

//                         ) : (

//                             <h2>"No products found"</h2>
//                         )
//                     }
//                 </ul>
//                 {/* </li> */}

//             </>

//         </div>
//     )
// }

// export default ClientSideExample