import React, { useState } from 'react';
import uuid from 'react-uuid';
import Swal from 'sweetalert2';

const Crud = () => {
   // Creamos los estados para nuestro formulario
   const [tasks, setTasks] = useState([]);
   const [title, setTitle] = useState('');
   const [description, setDescription] = useState('');
   const [edit, setEdit] = useState(false);

   // Funciones para operaciones CRUD
   //----------------------------------------------------------------
   // Funcion agregar
   const addTask = () => {
      const task = { id: uuid(), title, description };
      setTasks([...tasks, task]);
   };
   // Funcion actions para agrupar todas las operacioness
   const actions = (e) => {
      e.preventDefault();
      edit ? updateTask() : addTask();
      clear();
   };
   // Funcion para eliminar un registro
   const deleteTask = (id) => {
      Swal.fire({
         title: '¿Está seguro?',
         text: 'No podras rehacer los cambios!',
         icon: 'Atención',
         showCancelButton: true,
         confirmButtonColor: '#55FF33 ',
         cancelButtonColor: '#FF5533',
         confirmButtonText: 'Si, eliminar!',
      }).then((result) => {
         if (result.isConfirmed) {
            const nTask = tasks.filter((task) => task.id !== id);
            setTasks(nTask);
            Swal.fire({
               title: 'Eliminado',
               text: 'Tu registro fue eliminado',
               icon: 'success',
               showConfirmButton: false,
               timer: 1350,
            });
         }
      });
   };
   // Funcion para editar el registro
   const updateTask = () => {
      const id = localStorage.getItem('id');
      const newTask = { id, title, description };
      const newTasks = tasks.map((item) => (item.id === id ? newTask : item));
      setTasks(newTasks);
      clear();
   };
   // Funcion para limpiar los inputs
   const clear = () => {
      setTitle('');
      setDescription('');
      setEdit(false);
      localStorage.removeItem('id');
   };
   // FUncion para obtener el objeto y posteriormente editarlo
   const getData = (id) => {
      const task = tasks.find((t) => t.id === id);
      localStorage.setItem('id', id);
      setTitle(task.title);
      setDescription(task.description);
      setEdit(true);
   };
   // ----------------------------------------------------------------
   return (
      <div className='container'>
         {/* Formulario con los inputs */}
         <div className='col-sm-6 justify-content-center mx-auto p-2 mt-2'>
            <div className='card shadow'>
               <h3 className='card-title text-center mt-3'>CRUD</h3>
               <div className='card-body'>
                  {/* Formulario */}
                  <form onSubmit={actions}>
                     {/* Inout TItulo */}
                     <div className='mb-3'>
                        <input
                           type='text'
                           className='form-control'
                           placeholder='Ingrese título'
                           value={title}
                           required
                           autoFocus
                           onChange={(e) => setTitle(e.target.value)}
                        ></input>
                     </div>
                     {/* Input Descripcion */}
                     <div className='mb-3'>
                        <input
                           type='text'
                           className='form-control'
                           placeholder='Descripción de la tarea'
                           value={description}
                           required
                           onChange={(e) => setDescription(e.target.value)}
                        ></input>
                     </div>
                     {/* Boton Bumit para enviar */}
                     <button type='submit' className='btn btn-primary form-control'>
                        Save
                     </button>
                  </form>
               </div>
            </div>
         </div>

         {/* Listado de tareas */}
         <div>
            <ul className='list-group list-group-numbered'>
               {/* Recorremos con map por cada item muestre un li */}
               {tasks.map((i) => (
                  <li
                     className='list-group-item d-flex justify-content-between align-items-start'
                     key={i.id}
                  >
                     <div className='ms-2 me-auto'>
                        <div className='fw-bold'>{i.title} </div>
                        {i.description}
                     </div>
                     <button className='btn btn-danger me-2' onClick={() => deleteTask(i.id)}>
                        <i className='fas fa-trash-alt'></i>
                     </button>
                     <button className='btn btn-warning ' onClick={() => getData(i.id)}>
                        <i className='fas fa-edit'></i>
                     </button>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
};

export default Crud;
