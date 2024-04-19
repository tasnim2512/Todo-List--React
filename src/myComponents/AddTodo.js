import { useState } from 'react'
import PropTypes from 'prop-types'
import clear from '../image/clear.svg';

export default function AddTodo(props) {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [isModalOpen, setIsModalOpen] = useState(false);

    const AddTasksubmit = (e) => {
        e.preventDefault()
        if (!title || !desc) {
            alert("Please add a title and description to proceed")
        } else {
            props.addTodo(title, desc)
            setTitle("")
            setDesc("")
            setIsModalOpen(false);
        }
    }

    const handleOpen = () => {
        setIsModalOpen(true);
    };

    const handleClose = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='mt-8 w-6/12'>
            <div className='flex justify-start w-full'>
                <button onClick={handleOpen} type="button" className=" text-white bg-HeaderbgColor focus:ring-2 focus:outline-none focus:ring-HeaderbgColor font-medium rounded-lg text-sm w-2/12 sm:w-auto px-5 py-2.5 text-center">Add Todo </button>
            </div>
            <div id="modal" className={` ${isModalOpen ? 'min-h-screen fixed w-full top-0 right-0 bg-black bg-opacity-25 z-10' : 'hidden'}`}>
                <div className="min-h-screen flex w-full h-full justify-center items-center">
                    <form id='myform' onSubmit={AddTasksubmit} className="w-5/12 text-left bg-white rounded-lg px-10 py-8 shadow-md text-gray-600">
                        <div className='flex w-full justify-between'>
                            <p className='font-medium w-full'>{props.formTitle}</p>
                            <button type='button' onClick={handleClose} className='w-7 h-7 bg-HeaderbgColor rounded-full flex justify-center p-2'>
                                <img className='w-3' src={clear} />
                            </button>
                        </div>
                        <div className="my-5">
                            <label htmlFor="Title" className="block mb-2 text-sm font-medium text-gray-900 ">Title</label>
                            <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} id="title" className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5" />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
                            <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} id="description" className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5" />
                        </div>
                        <button type="submit" className="my-2 text-white bg-HeaderbgColor focus:ring-2 focus:outline-none focus:ring-HeaderbgColor font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
AddTodo.defaultProps = {
    formTitle: "Add a Todo"
}

AddTodo.propTypes = {
    formTitle: PropTypes.string
}
