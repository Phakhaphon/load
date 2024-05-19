import { Main } from "next/document";
import Image from "next/image";
import Logo from "../../public/logo.png"
import { FaTwitch } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="mt-16">
      <div className="grid grid-rows-2 gap-24 grid-flow-col justify-center ">
        <div className="flex justify-center">
        <Image className=" rounded-full" src={Logo} alt="my profile" width={150} height={150}/>
        </div>

        <div className="flex justify-between gap-14 w-full">
          <div>
            <div className='flex justify-center items-center gap-2 mt-2'>
              <span className='sr-only'>Loading...</span>
              <div className='h-5 w-5 bg-[#cebba2] rounded-full animate-bounce [animation-delay:-0.3s]'></div>
              <div className='h-5 w-5 bg-[#cebba2] rounded-full animate-bounce [animation-delay:-0.15s]'></div>
              <div className='h-5 w-5 bg-[#cebba2] rounded-full animate-bounce'></div>
            </div>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#cebba2]">STARTING SOON!!</p>
          </div>
          <div>
            <div className='flex justify-center items-center gap-2 mt-2'>
              <span className='sr-only'>Loading...</span>
              <div className='h-5 w-5  bg-[#cebba2] rounded-full animate-bounce [animation-delay:-0.3s]'></div>
              <div className='h-5 w-5 bg-[#cebba2] rounded-full animate-bounce [animation-delay:-0.15s]'></div>
              <div className='h-5 w-5 bg-[#cebba2] rounded-full animate-bounce'></div>
            </div>
          </div>
          
        </div>
      </div>
      <div className="bg-gradient-to-r from-orange-100 to-[#c0ab93] w-full py-6">
        <ul className="flex justify-evenly items-center">
          <li className="flex gap-6 text-xl items-center font-bold"><FaTwitch size={50}/>Newsnipy</li>
          <li className="text-xl font-bold">โดเนทขึ้นจอ Tipme</li>
        </ul>
      </div>
    </main>
  );
}
