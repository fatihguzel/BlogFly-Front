import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../features/Auth/asyncActions";

const NavAuthSide = () => {
  const router = useRouter();
  const loginedUser = useSelector((state) => state.auth.logined);
  const dispatch = useDispatch();

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logoutAction()).then(() => router.push("/"));
  };
  if (!loginedUser) {
    return (
      <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-4">
          {/* hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium */}
          <Link
            className={`hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium   ${
              router.pathname == "/login" && "active"
            }`}
            href="/login"
            style={{
              textDecoration: "none",
            }}
          >
            Login
          </Link>
          <Link
            className={`hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium ${
              router.pathname == "/login" && "active"
            }`}
            href="/register"
            style={{
              textDecoration: "none",
            }}
          >
            Register
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-4">
          {/* hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium */}
          <Link
            className={` hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-mediu${
              router.pathname == "/profile" && "active"
            }`}
            href="/profile"
            style={{
              textDecoration: "none",
            }}
          >
            Profile
          </Link>
          <Link
            className={` hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-mediu${
              router.pathname == "/" && "active"
            }`}
            href="/"
            onClick={logoutHandler}
            style={{
              textDecoration: "none",
            }}
          >
            Logout
          </Link>
        </div>
      </div>
    );
  }
  // if (!loginedUser) {
  //   return (
  //     <div class="flex items-center">
  //       <div class="flex ">
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           class="h-5 w-5  text-gray-600"
  //           fill="none"
  //           viewBox="0 0 24 24"
  //           stroke="currentColor"
  //         >
  //           <path
  //             stroke-linecap="round"
  //             stroke-linejoin="round"
  //             stroke-width="2"
  //             d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
  //           />
  //         </svg>
  //         <input
  //           class="ml-2 mb-2 outline-none bg-transparent "
  //           type="text"
  //           name="search"
  //           id="search"
  //           placeholder="Search..."
  //         />
  //       </div>
  //       <ul class="flex items-center space-x-6">

  //         <li>
  //           <svg
  //             xmlns="http://www.w3.org/2000/svg"
  //             class="h-6 w-6"
  //             fill="none"
  //             viewBox="0 0 24 24"
  //             stroke="currentColor"
  //           >
  //             <path d="M12 14l9-5-9-5-9 5 9 5z" />
  //             <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  //             <path
  //               stroke-linecap="round"
  //               stroke-linejoin="round"
  //               stroke-width="2"
  //               d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
  //             />
  //           </svg>
  //         </li>
  //         <li>
  //           <svg
  //             xmlns="http://www.w3.org/2000/svg"
  //             class="h-6 w-6"
  //             fill="none"
  //             viewBox="0 0 24 24"
  //             stroke="currentColor"
  //           >
  //             <path
  //               stroke-linecap="round"
  //               stroke-linejoin="round"
  //               stroke-width="2"
  //               d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
  //             />
  //           </svg>
  //         </li>
  //         <li>
  //           <svg
  //             xmlns="http://www.w3.org/2000/svg"
  //             class="h-6 w-6"
  //             fill="none"
  //             viewBox="0 0 24 24"
  //             stroke="currentColor"
  //           >
  //             <path
  //               stroke-linecap="round"
  //               stroke-linejoin="round"
  //               stroke-width="2"
  //               d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
  //             />
  //           </svg>
  //         </li>
  //       </ul>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div class="flex items-center">
  //       <div class="flex ">
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           class="h-5 w-5  text-gray-600"
  //           fill="none"
  //           viewBox="0 0 24 24"
  //           stroke="currentColor"
  //         >
  //           <path
  //             stroke-linecap="round"
  //             stroke-linejoin="round"
  //             stroke-width="2"
  //             d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
  //           />
  //         </svg>
  //         <input
  //           class="ml-2 mb-2 outline-none bg-transparent "
  //           type="text"
  //           name="search"
  //           id="search"
  //           placeholder="Search..."
  //         />
  //       </div>
  //       <ul class="flex items-center space-x-6">

  //         <ToastContainer />
  //         <li>
  //           <svg
  //             xmlns="http://www.w3.org/2000/svg"
  //             class="h-6 w-6"
  //             fill="none"
  //             viewBox="0 0 24 24"
  //             stroke="currentColor"
  //           >
  //             <path d="M12 14l9-5-9-5-9 5 9 5z" />
  //             <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  //             <path
  //               stroke-linecap="round"
  //               stroke-linejoin="round"
  //               stroke-width="2"
  //               d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
  //             />
  //           </svg>
  //         </li>
  //         <li>
  //           <svg
  //             xmlns="http://www.w3.org/2000/svg"
  //             class="h-6 w-6"
  //             fill="none"
  //             viewBox="0 0 24 24"
  //             stroke="currentColor"
  //           >
  //             <path
  //               stroke-linecap="round"
  //               stroke-linejoin="round"
  //               stroke-width="2"
  //               d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
  //             />
  //           </svg>
  //         </li>
  //         <li>
  //           <svg
  //             xmlns="http://www.w3.org/2000/svg"
  //             class="h-6 w-6"
  //             fill="none"
  //             viewBox="0 0 24 24"
  //             stroke="currentColor"
  //           >
  //             <path
  //               stroke-linecap="round"
  //               stroke-linejoin="round"
  //               stroke-width="2"
  //               d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
  //             />
  //           </svg>
  //         </li>
  //       </ul>
  //     </div>
  //   );
  // }
};

export default NavAuthSide;
