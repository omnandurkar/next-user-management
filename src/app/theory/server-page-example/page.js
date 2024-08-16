
import { fetchProductList } from '@/actions/page';
import React from 'react'



const ServerActionsExample = async () => {

    const products = await fetchProductList();

    // console.log(products);

    return (
        <div>Products

            <>

                {/* <li> */}
                <ul>
                    {
                        // products.map((product) => {
                        //     return <li key={product.id}>{product.title}</li>
                        // })

                        products && products.length > 0 ? (

                            products.map((products) => {

                                return (
                                    <li key={products.id} > {products.title}</li>
                                )
                            })

                        ) : (

                            <h2>"No products found"</h2>
                        )
                    }
                </ul>
                {/* </li> */}

            </>

        </div>
    )
}

export default ServerActionsExample