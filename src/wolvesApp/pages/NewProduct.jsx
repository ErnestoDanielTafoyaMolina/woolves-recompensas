import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from 'react-bootstrap/Button';
import * as Yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom';
import { useProduct } from '../context/ProductProvider';
import { toast } from 'react-hot-toast';
import { useEffect, useState } from 'react';

export const NewProduct = () => {
    const { createProduct, getProduct, updateProduct } = useProduct();

    const navigate = useNavigate();
    
    const params = useParams();

    const [producto, setProducto] = useState({
      product:'',
      description:'',
      price:'',
      state:'available',
      image: null
    })

    useEffect( () => {
      (async()=>{
        if(params.id){
          const producto = await getProduct(params.id);
          setProducto(producto)
        }
      })();
    },[params.id])

  return (
    <>
                  <h2>Añadir/editar producto</h2>
                  <Formik
                    initialValues={producto}
                    validationSchema={
                      Yup.object({
                      product:Yup.string().required("nombre del producto requerido"),
                      description:Yup.string().required("descripcion del producto requerida"),
                      price:Yup.number().required("Precio requerido"),
                    })}
                    onSubmit={async(values, actions)=>{
                      if(params.id){
                        await updateProduct(params.id, values)
                      }else{
                        await createProduct(values);
                      }
                      navigate('/admin-c')
                    }}
                    enableReinitialize
                    >
                      {({ handleSubmit, setFieldValue })=>(
                        <Form onSubmit={ handleSubmit }>
                          <label>Nombre del producto: </label>
                          <Field name='product' className="form-control" />
                          <ErrorMessage component="p" className='text-danger text-sm' name='product' />

                          <label>Descripcion del producto: </label>
                          <Field name='description' className="form-control" />
                          <ErrorMessage component="p" className='text-danger text-sm' name='description' />

                          <label>Precio del producto: </label>
                          <Field name='price' type="number" min="1" className="form-control" />
                          <ErrorMessage component="p" className='text-danger text-sm' name='price' />

                          <label>Imagen del producto:(opcional) </label>
                          <input 
                             name='image'
                             type="file" 
                             className="form-control"
                             onChange={(e)=>setFieldValue('image',e.target.files[0])} />

                          <Button 
                            type="button" 
                            className="btn btn-danger m-2" 
                            onClick={() => navigate('/admin-c')}
                            >
                              Cancelar
                          </Button>
                          <Button 
                            type="submit" 
                            className="btn btn-success m-2"
                            onClick={( onSubmit )=>{
                              toast.success('Producto guardado')
                            }}
                            >Guardar
                          </Button>
                        </Form>
                      )}
                    </Formik>
    </>
  )
}
