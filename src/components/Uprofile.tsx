import React from 'react'

const Uprofile = () => {
  return (
    <div>
      <div className="flex w-full">
            <div className="bg-white rounded-xl shadow-md overflow-hidden flex-grow">
                <div className="mt-20 px-6">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                          
                        </div>
                        <button className="flex items-center text-orange-600 font-medium">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                            </svg>
                            Edit Profile
                        </button>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-5 mb-6">
                        <h3 className="text-lg font-semibold mb-4 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                            Personal Information
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-lg border border-gray-200">
                                <p className="text-gray-500 text-sm">Email Address</p>
                               

                            </div>

                            <div className="bg-white p-4 rounded-lg border border-gray-200">
                                <p className="text-gray-500 text-sm">Mobile Number</p>
                            
                            </div>

                            <div className="bg-white p-4 rounded-lg border border-gray-200"></div>
                         </div>
                     </div>
                 </div>
            </div>
         </div>
    </div>
  )
}

export default Uprofile
