import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import toast from 'react-hot-toast';
import { useProduct } from '../context/ProductProvider';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiFillEdit } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

export const AdminCards = ({ product }) => {

  const { deleteProduct } = useProduct();
  const navigate = useNavigate()
  const handleDelete = (id) => {
    toast((t)=>(
      <div className='card'>
        <div className="card-body">
          <h5 className='card-title'>¿Seguro que quieres eliminar el producto con el id <strong>{ id }</strong>? </h5>
        </div>
        <div className="card-footer">
          <button className="btn btn-secondary m-2" onClick={ () => toast.dismiss(t.id) }>No</button>
          <button className="btn btn-danger m-2" onClick={()=> {
            deleteProduct(id);
            toast.dismiss(t.id);
            } }>Si</button>
        </div>
      </div>
    ))
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title><center>{ product.product }</center></Card.Title>
        {product.image && <img src={ product.image.url } alt={`imagen de ${product.product}`} /> }
        <Card.Text>
            <li><b>Descripcion:</b>{ product.description }</li>
            <li><b>Precio:</b>{ product.price }</li>
            <li><b>Estado:</b>{ product.state }</li>
        </Card.Text>
        <Card.Footer className='flex justify-between'>
          <Button variant="danger m-2" onClick={ () => handleDelete(product._id) }><RiDeleteBin6Line/>Eliminar</Button>
          <Button variant="primary m-2 " onClick={() => navigate(`/product/${product._id}`)}><AiFillEdit/>Editar</Button>
        </Card.Footer>
      </Card.Body>
    </Card>
  )
}
