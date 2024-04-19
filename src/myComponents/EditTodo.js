import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import clear from '../image/clear.svg';

export default function EditTodo(props) {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    useEffect(() => {
        if (props.editingTodo) {
            setTitle(props.editingTodo.title);
            setDesc(props.editingTodo.desc);
        }
    }, [props.editingTodo]);


    const submit = (e) => {
        e.preventDefault()
        if (!title || !desc) {
            alert("Title and description can not be blank for edit")
        } else {
            props.onClose()
            props.updateTodo(title,desc)
        }
    }

    return (
        <div id="modal" className={` ${props.isOpen ? 'min-h-screen fixed w-full top-0 right-0 bg-black bg-opacity-25 z-10' : 'hidden'}`}>
            <div className="min-h-screen flex w-full h-full justify-center items-center">
                <form onSubmit={submit} id='myform' className="w-5/12 text-left bg-white rounded-lg px-10 py-8 shadow-md text-gray-600">
                    <div className='flex w-full justify-between'>
                        <p className='font-medium w-full'>{props.formTitle}</p>
                        <button type='button' onClick={props.onClose} className='w-7 h-7 bg-HeaderbgColor rounded-full flex justify-center p-2'>
                            <img className='w-3' src={clear} />
                        </button>
                    </div>
                    <div className="my-5">
                        <label htmlFor="Title" className="block mb-2 text-sm font-medium text-gray-900 ">Title</label>
                        <input type="text" onChange={(e) => { setTitle(e.target.value) }} value={title} id="title" className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
                        <input type="text" onChange={(e) => { setDesc(e.target.value) }} value={desc} id="description" className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5" />
                    </div>
                    <button type="submit" className="my-2 text-white bg-HeaderbgColor focus:ring-2 focus:outline-none focus:ring-HeaderbgColor font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
                </form>
            </div>
        </div>
    )
}

EditTodo.defaultProps = {
    formTitle: "Edit a Todo"
}

EditTodo.propTypes = {
    formTitle: PropTypes.string
}


