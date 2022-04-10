import AuthenticatedSidebar from "../organisms/AuthenticatedSidebar"
import Navbar from "../organisms/Navbar"

function AuthenticatedLayout({ children, showBack }) {
  return (
    <div className="w-full flex">
      <div className='w-[25%] fixed left-0 top-0'>
        <AuthenticatedSidebar />
      </div>
      <div className="w-[75%] absolute top-0 left-[25%]">
        <Navbar showBack={showBack} />
        <div className='mt-11 px-10 absolute top-[64px]'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default AuthenticatedLayout