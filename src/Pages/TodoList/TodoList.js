
// import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading';
import edit from '../../pen-to-square-solid.svg'



const TodoList = ({taskEdit, setTaskEdit}) => {

    const { data: allTask, isLoading, refetch } = useQuery('task', () => fetch('https://daily-task-22.herokuapp.com/task').then(res => res.json()))

    // const [taskEdit, settaskEdit] = useState(null);

    // if(isLoading){
    //     return <Loading></Loading>
    // }
    const addTask = event => {
        event.preventDefault()
        const task = event.target.task.value;
        console.log(task)

        fetch(`https://daily-task-22.herokuapp.com/task`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ task: task })
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                console.log(data)
                event.target.task.value = ""
            })

    }

    const deleteTask = (id) => {

        fetch(`https://daily-task-22.herokuapp.com/task/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                console.log(data)
            })
    }

    const taskComplete = (id) => {
        console.log(id)
        fetch(`https://daily-task-22.herokuapp.com/taskComplete`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ id })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                deleteTask(id)
            })
    }


    const editTask = (id) =>{
        console.log(id)
        const findTask = allTask.find(task=> task._id === id)
        console.log(findTask)
        setTaskEdit(findTask)
    }
    return (
        <div className="card min-h-[500px] h-screen w-[80%] my-5 md:w-[70%] lg:w-1/2 mx-auto bg-accent border-2 shadow-xl">
            <div className="card-body ">

                <h2 className=" font-bold my-3 text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center ">To Do List </h2>
                <form onSubmit={addTask} className='flex mx-12 justify-center'>
                    <input name='task' className='bg-orange-100 w-[70%] rounded-l-lg sm:w-full p-2' type="text" placeholder="Add Your Task" required />
                    { taskEdit?  <input className='text-center bg-green-500 rounded-r-lg p-2 btn-outline' type="submit" value="Edit Task" />
                    :
                    <input className='text-center bg-orange-500 rounded-r-lg p-2 btn-outline' type="submit" value="Add Task" />    
                }
                </form>
                {/* <div> */}
                {
                    allTask && allTask.map(task =>
                        <div className='shadow-2xl w-full lg:w-[85%] bg-orange-100 p-2 align-center mx-auto flex my-1/2 rounded'>
                            <input onClick={() => taskComplete(task._id)} type="checkbox" className="checkbox mr-3" />
                            <h1 className='w-[70%]'>{task.task} </h1>
                            <img src={edit} onClick={()=>editTask(task._id)} alt="" className='cursor-pointer mx-auto w-[25px]' />                                                      
                        </div>
                    )
                }

                {/* </div> */}
            </div>
        </div>
    );
};

export default TodoList;