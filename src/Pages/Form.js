import React from 'react';

const Form = ({ input, setInput, taskEdit, setTaskEdit }) => {

    const onInputChange = event =>{
        setInput(event.target.value)
        console.log(event.target.value)

    }
    const handleFormSubmit = event =>{
        event.preventDefault()
    }


    return (
        <div>
            <form onSubmit={ handleFormSubmit} className='flex mx-12 justify-center'>
                <input className='bg-orange-100 w-[70%] rounded-l-lg sm:w-full p-2' type="text" placeholder="Enter a Todo" value={input} required                
                onChange={onInputChange}/>

                {taskEdit ? <input className='text-center bg-green-500 rounded-r-lg p-2 btn-outline' type="submit" value="Edit Task" />
                    :
                    <input className='text-center bg-orange-500 rounded-r-lg p-2 btn-outline' type="submit" value="Add Task" />
                }
            </form>
        </div>
    );
};

export default Form;