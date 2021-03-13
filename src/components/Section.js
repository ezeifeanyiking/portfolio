import React, {useState} from 'react'
import myImage from "../images/my_image.jpeg"

const Section = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="mt-16 w-full flex flex-col items-center">
            <div className="max-w-4xl mx-4">
                <h2 className="font-bold text-xl text-indigo-700 border-b border-indigo-600 pb-1">About me</h2>
                <img src={myImage} alt ="Ifeanyi" className ="myPix"/>
                <button onClick = {() => setCount(count - 1)} className="border-2 border-black px-2 rounded"> - </button>
                {count}
                <button onClick = {() => setCount(count + 1)} className="border-2 border-black px-2 rounded"> + </button>
                
                <p className="text-sm mt-4 text-gray-600">
                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                <h2 className="worksHeading">My Works</h2>

                <div className="worksContainer">
                    <div className="sm:w-1/3">
                        <div className="bg-white p-8 border-b-4 border-pink-500 rounded-lg flex flex-col items-center sm:mx-2 h-full sm:p-3 md:p-8">
                            <div className  ="bg-gray-100 text-indigo-700 w-16 rounded-full p-2">
                                <div className="h-12 w-12 fill-current">CBN Logo</div>
                            </div>
                            <div className  ="mt-4 font-bold">CBN Website</div>
                            <div className  ="text-center mt-2 text-gray-600 text-sm">This was my first job that gave me International recognition</div>
                        </div>
                    </div>
                    <div className="sm:w-1/3">
                        <div className="bg-white p-8 border-b-4 border-pink-500 rounded-lg flex flex-col items-center sm:mx-2 h-full sm:p-3 md:p-8">
                            <div className  ="bg-gray-100 text-indigo-700 w-16 rounded-full p-2">
                                <div className="h-12 w-12 fill-current">Bitcoin Logo</div>
                            </div>
                            <div className  ="mt-4 font-bold">Bitcoin Website</div>
                            <div className  ="text-center mt-2 text-gray-600 text-sm">This was my first job that gave me International recognition</div>
                        </div>
                    </div>
                    <div className="sm:w-1/3">
                        <div className="bg-white p-8 border-b-4 border-pink-500 rounded-lg flex flex-col items-center sm:mx-2 h-full sm:p-3 md:p-8">
                            <div className  ="bg-gray-100 text-indigo-700 w-16 rounded-full p-2">
                                <div className="h-12 w-12 fill-current">Eth Logo</div>
                            </div>
                            <div className  ="mt-4 font-bold">Ethereum Website</div>
                            <div className  ="text-center mt-2 text-gray-600 text-sm">This was my first job that gave me International recognition</div>
                        </div>
                    </div>

                </div>
                
            </div>
            
        </div>
    )
}

export default Section
