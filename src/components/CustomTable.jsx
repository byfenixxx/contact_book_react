import React, { useContext, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { productsContext } from '../contexts/ProductsContext';

const CustomTable = () => {
    const { getProducts, products, deleteProduct } = useContext(productsContext)

    useEffect(() => {
        getProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {
                products ? (
                    <Table striped bordered hover variant="dark" >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Photo</th>
                                <th>#</th>
                                <th>#</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((item, index) => (
                                    <tr key={item.id}>
                                        <td>{index + 1}</td>
                                        <td>{item.title}</td>
                                        <td>{item.description}</td>
                                        <td>{item.price}</td>
                                        <td> <img src={item.photo} alt="" width="300" /> </td>
                                        <td><Button variant="danger" onClick={() => { deleteProduct(item.id) }} >Del</Button></td>
                                        <td>
                                            <Link to={`/edit/${item.id}`}>
                                                <Button>Edit</Button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table >
                ) : (
                    <h2>Loading...</h2>
                )
            }
        </>
    );
};

export default CustomTable;