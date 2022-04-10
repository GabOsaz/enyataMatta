import Image from "next/image"

function LoginSidebar() {
  return (
    <div className="bg-darkBlue-color uppercase h-screen flex items-center justify-center">
      <div className="mx-12">
        <Image src={'/logo1.svg'} width='385' height='167' alt="logo" />
      </div>
    </div>
  )
}

export default LoginSidebar