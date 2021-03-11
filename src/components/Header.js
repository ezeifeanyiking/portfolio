import React from 'react'

const Header = () => {
    return (
        <div className="bg-gray-800 w-full px-4 py-3 flex justify-center">
            <div className= "max-w-4xl w-full">
                <div className = "flex items-center justify-between text-gray-100">
                    <div>Logo stays here</div>
                    <a href = "https://google.com" className="bg-pink-500 text-indigo-100 font-bold mt-2 px-4 py-2 rounded-full text-xs uppercase sm:hidden">Another Logo</a>
                </div>
                <div className ="my-4">
                <h1 className="text-2xl text-indigo-100">Welcome to my portfolio</h1>
                <p className="text-sm text-indigo-200">I am your best plug for any software project that you want to emback on.</p>
            </div>
                <div>
                    <a href = "https://google.com" className="bg-pink-500 text-indigo-100 font-bold mt-2 px-4 py-2 rounded-full text-xs uppercase">Contact Me</a> 
                </div>
                <div>
                    <img className="bg-white rounded-full border-pink-500" src ="/src/images/my_image.jpeg" alt =""/>
                </div>
            </div>
        </div>
    )
}

export default Header
