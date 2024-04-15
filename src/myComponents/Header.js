import React from 'react'
import PropTypes from 'prop-types'
import {
    Link,
} from "react-router-dom";

export default function Header(props) {
    return (
        <header className="bg-gray-100 flex w-full justify-center">
            <nav className="flex w-8/12 items-center justify-center px-6 lg:px-8" aria-label="Global">
                <div className="px-10">
                    <Link to="/" className="-m-1.5 p-1.5">
                        <p className="text-blue-900 font-semibold border-b border-blue-900 text-lg">{props.title}</p>
                    </Link>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <Link to="/" className="text-sm font-semibold leading-6 text-gray-900">
                        Home
                    </Link>
                    <Link to="/about" className="text-sm font-semibold leading-6 text-gray-900">
                        About
                    </Link>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    {
                        props.searchBar ? <form action="#" method="POST" >
                            <div className='flex items-center px-4 space-x-2'>
                                <div className="">
                                    <input type="text" name="search" id="search" autoComplete="given-name" className="focus:outline-none block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                                </div>
                                <button type="submit"
                                    className="block border border-gray-200 p-2 text-sm bg-blue-200 rounded-sm">
                                    Search
                                </button>
                            </div>
                        </form> : ""
                    }
                </div>
            </nav>
        </header>
    )
}

Header.defaultProps = {
    title: "",
    searchBar: false
}

Header.propTypes = {
    title: PropTypes.string,
    searchBar: PropTypes.bool
}