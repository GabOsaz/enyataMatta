import LoginSidebar from '../organisms/LoginSidebar'

function UnauthenticatedLayout({ children }) {
  return (
    <div className="w-full flex">
        <div className='w-[25vw]'>
            <LoginSidebar />
        </div>
        <div className='w-[75vw] grid place-content-center'>
            {children}
        </div>
    </div>
  )
}

export default UnauthenticatedLayout