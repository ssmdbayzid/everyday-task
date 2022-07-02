import React from 'react';
import { useQuery } from 'react-query';
import checked from '../../clipboard-check-solid.svg'
const CompleteTask = () => {
    const { data: allTask, isLoading, refetch } = useQuery('task', () => fetch('https://daily-task-22.herokuapp.com/taskComplete').then(res => res.json()))
    
    const deleteTask = (id) => {

        fetch(`https://daily-task-22.herokuapp.com/taskComplete/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                console.log(data)
            })
    }
    return (
        <div class="card min-h-[500px]  w-1/2 mx-auto bg-accent shadow-xl">
            <div className='flex mx-auto mt-5 items-center'>
            <img className='mx-2 w-[30px]' src={checked} alt=""/>
            <h2 class="my-3 font-bold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center "> Task Completed</h2>
            </div>
            
            <div>
                    {
                        allTask && allTask.map(task =>
                            <div className='shadow-2xl bg-orange-100 p-2 align-center mx-12 flex m-3'>
                                <input type="checkbox" checked="checked" class="checkbox mr-3" />
                                <h1 className='w-[80%]'>{task.task} </h1>
                                <h1 onClick={()=>deleteTask(task._id)} className='bg-orange-700 cursor-pointer px-2 text-white rounded'>Remove</h1>
                            </div>
                        )
                    }
                </div>
        </div>
    );
};

export default CompleteTask;