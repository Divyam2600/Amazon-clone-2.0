import React, {useState} from "react";
import { XIcon,
         MenuIcon,
         LogoutIcon,
         LoginIcon
} from "@heroicons/react/outline";
import {SidebarData} from "./SidebarData"
import Link from "next/link"
import {useRouter} from 'next/router'
import { signOut, useSession, signIn } from "next-auth/react";

function Navbar() {
  
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const router = useRouter()
  const {data : session} = useSession()

  return (
    <div className="justify-start items-center">
      {/* Right Navbar */}
      <div className='h-10 flex justify-start items-center'>
        <Link href="/" className='ml-8 text-4xl bg-none'>
            <p
              className="link pl-2 flex items-center text-center text-white"
              onClick={showSidebar}
            >
              <MenuIcon className="h-6 mr-1" />
              <h3 className=" font-semibold text-lg">All</h3>
            </p>
        </Link>
      </div>

      <nav className={sidebar ? 'nav-menu active' : 'nav-menu inactive'}>
          <div className=' text-white' onClick={showSidebar}>
            <li className=' bg-amazon_blue h-10 flex justify-start '>
              <Link href='/' className=' bg-none'>
                <XIcon className="h-8 -mt-0.5 cursor-pointer" />
              </Link>
            </li>
            {/* {session ? 
              <> 
                <div className="my-3 mx-2 text-lg sm:hidden antialiased font-sans">
                
            </div>
              </> : <> </>
            } */}
            {session ?
              <>
                <div className="justify-center my-4 mx-2 font-semibold antialiased text-lg">
                <p>Hello,</p>
                    <p>{session.user.name}</p>
                </div>
              </> 
              : 
              <>
              </>
            }
            {SidebarData.map( (item, index) => {
              return (
                  <div className=" items-center justify-center my-4 mx-1 border border-gray-500 rounded-md p-3 hover:bg-white hover:text-amazon_blue transition ease-out duration-150 hover:ease-in cursor-pointer font-semibold font-sans" key={index} >
                    <ul 
                      key={index} 
                      className=""
                    >
                      <Link href={item.path}>
                        <a className="flex text-center items-center">
                          <span className="w-7">{item.icon}</span>
                          <span className="ml-3 text-lg">{item.title}</span>
                        </a>
                        </Link>
                    </ul>
                  </div>
              );
            })}
            {session ?
            <>
              <div className="items-center justify-center my-4 mx-1 border border-gray-500 rounded-md p-3 hover:bg-white hover:text-amazon_blue transition ease-out duration-150 hover:ease-in cursor-pointer font-semibold font-sans">
                <a className="flex text-center items-center" onClick={signOut}>
                  <LogoutIcon className="w-7" />
                  <span className="ml-3 text-lg">Logout</span>
                </a>
              </div>
            </> 
            : 
            <>
            <div className="sm:hidden items-center justify-center my-4 mx-1 border border-gray-500 rounded-md p-3 hover:bg-white hover:text-amazon_blue transition ease-out duration-150 hover:ease-in cursor-pointer font-semibold font-sans">
                <a className="flex text-center items-center" onClick={signIn}>
                  <LoginIcon className="w-7" />
                  <span className="ml-3 text-lg">Sign In</span>
                </a>
              </div>
            </>
          }
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
