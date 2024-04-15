import { useState } from 'react'


export default function AddTodo(props) {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const submit = (e) => {
        e.preventDefault()
        if (!title || !desc) {
            alert("Please add a title and description to proceed")
        } else {
            props.addTodo(title, desc)
            setTitle("")
            setDesc("")
        }
    }

    return (
        <div className='mb-5 w-full flex justify-center'>
            <form onSubmit={submit} className="w-6/12 text-left">
                <p className='font-medium w-full text-xl my-3'>Add a Todo</p>
                <div className="mb-5">
                    <label htmlFor="Title" className="block mb-2 text-sm font-medium text-gray-900 ">Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5" />
                </div>
                <div className="mb-5">
                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
                    <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5" />
                </div>
                {/* <div className="flex items-start mb-5">
                    <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300  dark:focus:ring-blue-600" required />
                    </div>
                    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                </div> */}
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>
    )
}
