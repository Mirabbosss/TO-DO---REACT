import { useState } from "react";
import MainLayout from "@layouts/main-layout";
import Section from "@layouts/section";
import Container from "@layouts/container";
import Form from "@form/form";
import Input from "@form/input";
import Modal from "@components/modals";
import Button from "@ui/button"

const App = () => {

  const [todo, setTodo] = useState([]);
  const [title, setTitle] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [currentTitle, setCurrentTitle] = useState('');

  const addTask = () => {
    const newTask = {
      title: title,
      created_at: Date.now(),
      isDone: false,
      id: Date.now()
    };

    if(newTask.title.trim().length){
      setTodo([...todo, newTask]);
      setTitle('');
    } else {
      alert("Task title cannot be empty");
    }
  }

  const deleteTask = (id) => {
    const updatedTasks = todo.filter(task => task.id!== id);
    setTodo(updatedTasks);
  }

  const editTask = (id, val) => {
    setCurrentTitle(val);
    setShowModal(true);
    localStorage.setItem('taskId', id);
  }

  const saveTask = () => {
    let id = localStorage.getItem('taskId');

    todo.forEach(task =>{
      if(task.id == id){
        task.title = currentTitle;
        setShowModal(false);
      }
    })
  }



  return (
    <MainLayout>
      <Section id="main">

        <Modal saveTask={saveTask} show={showModal} setShow={setShowModal} title={currentTitle} setTitle={setCurrentTitle}/>

        <Container className="container mx-auto">

          <div className="todo-card my-8 mx-auto w-[600px] p-3">

            <Form submitFunc={addTask} className="p-3 border flex justify-between gap-x-2">
              <Input val={title} setVal={setTitle} type="text" placeholder="Enter task title" className="grow p-2" />
              <Button type="submit" className="bg-indigo-500 px-3 text-white rounded-sm focus:ring-2 hover:bg-indigo-600" title={"Add task"}/>
            </Form>

            <table className="bg-slate-300 w-full text-center">
              <thead className="bg-white text-indigo-700">
                <tr>
                  <th>N</th>
                  <th>Title</th>
                  <th>Created at</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>

              <tbody className="bg-slate-500">
                {
                  todo.map((item, index) => {
                    return (
                      <tr className="tr h-[50px]" key={item.id}>
                      <td>{index+1}</td>
                      <td>{item.title}</td>
                      <td>{item.created_at}</td>
                      <td>
                        <Button fun={()=> editTask(item.id, item.title)} className="bg-blue-500 px-3 text-white rounded-sm focus:ring-2 hover:bg-indigo-600">
                          <i className="bi bi-pencil-square"></i> Edit
                        </Button>
                      </td>
                      <td>
                        <Button fun={()=>deleteTask(item.id)} className="bg-red-500 px-3 text-white rounded-sm focus:ring-2 hover:bg-red-600">
                          <i className="bi bi-trash3-fill"></i> Delete
                        </Button>
                      </td>
                    </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </Container>

      </Section>
    </MainLayout>
  );
};

export default App;