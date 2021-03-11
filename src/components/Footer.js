import React from 'react'

const Footer = () => {
    return (
        <div className ="bg-gray-800 py-12 mt-12 w-full flex flex-col items-center border-t-2 border-black">
            <h2 className="font-bold text-xl text-gray-400">Signup for free consultation</h2>
            <form className="max-w-xl w-full text-gray-200 mt-4 px-8 md:px-0" action ="#" method ="post">
                <div className="flex flex-col md:flex-row md:-mx-2">
                    <label for ="firstName" className="sr-only">First Name</label>
                    <input className="bg-gray-700 mt-4 border border-gray-600 rounded-lg py-2 px-4 w-full md:m-2" type= "text" placeholder="First name" id="firstName" />
                    <label for ="lastName" className="sr-only">Last Name</label>
                    <input className="bg-gray-700 mt-4 border border-gray-600 rounded-lg py-2 px-4 w-full md:m-2" type= "text" placeholder="Last name" id="lasttName" />
                </div>
                <div className="flex flex-col md:flex-row md:-mx-2">
                <label for ="email" className="sr-only">Email</label>
                    <input className="bg-gray-700 mt-4 border border-gray-600 rounded-lg py-2 px-4 w-full md:m-2" type= "text" placeholder="john@email.com" id="email" />
                    <label for ="yourTitle" className="sr-only">Your title</label>
                    <input className="bg-gray-700 mt-4 border border-gray-600 rounded-lg py-2 px-4 w-full md:m-2" type= "text" placeholder="Your title" id="yourTitle" />
                </div>
                <div className="flex flex-col md:flex-row md:-mx-2">
                <button className="bg-blue-600 text-sm mt-4 rounded-lg py-2 px-4 w-full md:mx-2">Contact Me</button>
                </div>
                
            </form>

            <div className="bg-gray-800 pt-8">
                <p className ="text-xs text-gray-600">Copyright &copy; 2021 Senior Dev</p>
            </div>
        
        </div>
    )
}

export default Footer
