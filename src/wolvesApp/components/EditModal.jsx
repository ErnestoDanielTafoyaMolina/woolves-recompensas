import { Formik, Form, Field } from 'formik';

export const EditModal = () => {
  return (
    <>
        <button type="button" className="btn btn-primary m-3" data-bs-toggle="modal" data-bs-target="#editModal">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
          </svg> Editar
        </button>

        <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
          <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="editModalLabel">¿Qué vas a editar?</h1>
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
                    onSubmit={(values, actions)=>
                    console.log(values)}
                    >
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
                              <button type="submit" className="btn btn-primary mr-0" >Editar</button>
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
