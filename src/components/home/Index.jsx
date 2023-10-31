import React from 'react'
import Navbar from './Navbar'
import Cookies from 'js-cookie';
function Index() {
  const user = JSON.parse(Cookies.get('user'));
  console.log(user,"hi")
  return (
    <>
    <Navbar/>
    <div className="flex items-center mt-10 pt-10 justify-center">
    <div>
      <div>
          {user && (
            <div className=" mt-10 border border-400 fw-bold px-4 py-3 rounded relative" role="alert">
              <span className="block sm:inline">Welcome {user.name}, Your Role is {user.role.name}</span> 
            </div>
          )}
        </div>
    </div>
    </div>
    </>
    
  )
}

export default Index