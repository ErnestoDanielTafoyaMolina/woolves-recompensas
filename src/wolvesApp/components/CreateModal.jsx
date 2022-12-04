import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useProduct } from '../context/ProductProvider';

export const CreateModal = () => {
  const { createProduct } = useProduct();
  const navigate = useNavigate();
  return (
   <>
        <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#createModal">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
          </svg> Nuevo
        </button>

        <div className="modal fade" id="createModal" tabIndex="-1" aria-labelledby="createModalLabel" aria-hidden="true">
          <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="createModalLabel">¿Añadir producto?</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <Formik
                    initialValues={{
                      product:'',
                      description:'',
                      price:'',
                      state:'available',
                      img:''
                    }}
                    validationSchema={
                      Yup.object({
                      product:Yup.string().required("nombre del producto requerido"),
                      description:Yup.string().required("descripcion del producto requerida"),
                      price:Yup.number().required("Precio requerido"),
                    })}
                    onSubmit={async(values, actions)=>{
                      await createProduct(values),
                      navigate('/admin-c')
                    }}>
                      {({ handleSubmit })=>(
                        <Form onSubmit={ handleSubmit }>
                          <label>Nombre del producto: </label>
                          <Field name='product' className="form-control" />
                      
                          <label>Descripcion del producto: </label>
                          <Field name='description' className="form-control" />
                      
                          <label>Precio del producto: </label>
                          <Field name='price' type="number" min="1" className="form-control" />
                      
                          <label>Imagen del producto:(opcional) </label>
                      
                           <Field name='img' type="file" className="form-control" />
                          <div className="modal-footer">
                              <button type="button" className="btn btn-danger ml-0" data-bs-dismiss="modal">Cancelar</button>
                              <button type="submit" className="btn btn-success mr-0" data-bs-dismiss="modal" >Añadir</button>
                          </div>
                        </Form>
                      )}
                    </Formik>
                </div>
              </div>
          </div>
        </div>
   </>
  )
}
