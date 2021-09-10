import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { productsContext } from '../contexts/ProductsContext';
import 'react-toastify/dist/ReactToastify.css';
import { toast} from 'react-toastify';
import { useHistory } from 'react-router';


const AddPage = () => {

    const { addProduct } = useContext(productsContext)

    const [newProduct, setNewProduct] = useState({
        title: "",
        price: "",
        photo: "",
        description: ""
    });

    const history = useHistory()

    function hadnleInputs(e) {
        let obj = {
            ...newProduct,
            [e.target.name]: e.target.value
        }

        setNewProduct(obj);
    }

    function handleClick() {
        if (!newProduct.title.trim() || !newProduct.price.trim() || !newProduct.photo.trim() || !newProduct.description.trim()) {
            return toast("Заполните все поля")
        }
        addProduct(newProduct)
        setNewProduct({
            title: "",
            price: "",
            photo: "",
            description: ""
        })

        history.push("/")

    }

    return (
        <div>
            <Form.Control value={newProduct.title} onChange={hadnleInputs} name="title" type="text" placeholder="Введите название продукта" />
            <Form.Control value={newProduct.price} onChange={hadnleInputs} name="price" type="text" placeholder="Введите цену продукта" />
            <Form.Control value={newProduct.photo} onChange={hadnleInputs} name="photo" type="text" placeholder="Введите фото продукта" />
            <Form.Control value={newProduct.description} onChange={hadnleInputs} name="description" type="text" placeholder="Введите описание продукта" />
            <Button variant="outline-primary" onClick={handleClick}>Добавить</Button>
            {/* <ToastContainer /> */}
        </div>
    );
};

export default AddPage;