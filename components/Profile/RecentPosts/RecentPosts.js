import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogsAction } from "../../../features/Blogs/asyncActions";
import styles from "./recentposts.module.css";

const recentPosts = () => {
  const sharedPosts = useSelector((state) => state.blog.sharedBlogs);
  const loginedUser = useSelector((state) => state.auth.user);
  const email = loginedUser.email;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogsAction({ email }));
  }, []);

  return (
    <div class="w-full">
      <h3 class="font-medium text-gray-900 text-left px-6">Recent activites</h3>
      <div class="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
        {sharedPosts.map((post) => (
          <Link
            href={`/blog/${post._id}`}
            class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3  block hover:bg-gray-100 transition duration-150 no-underline"
            key={post.id}
          >
            <img
              src="63-631830_clipart-bilgisayar-kullanan-kalem-clipart-bilgisayar.png"
              alt=""
              class="rounded-full h-6 shadow-md inline-block mr-2"
            />
            {post.title}
          </Link>
        ))}
      </div>
    </div>
    // <div className="row mb-40">
    //   <label
    //     htmlFor="previousPosts"
    //     className={`previousPosts ${styles.previousPosts}`}
    //     style={{
    //       marginTop: "50px",
    //     }}
    //   >
    //     Son paylaşılan yazılar
    //   </label>

    //   {sharedPosts.map((blog) => (
    //     <div className="container" key={blog._id}>
    //       <div className="row">
    //         <div
    //           className="col-12 col-sm-8 col-lg-5"
    //           style={{
    //             width: "100%",
    //             backgroundColor: "#E0E0E0",
    //           }}
    //         >
    //           <ul className="list-group">
    //             <a
    //               href="#"
    //               className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
    //             >
    //               <div
    //                 className="flex-column"
    //                 style={{
    //                   fontWeight: "bolder",
    //                   fontSize: "20px",
    //                 }}
    //               >
    //                 {blog.title}
    //                 <p>
    //                   <small
    //                     style={{
    //                       fontWeight: "normal",
    //                       fontSize: "15px",
    //                       fontStyle: "italic",
    //                     }}
    //                   >
    //                     {blog.text}
    //                   </small>
    //                 </p>
    //               </div>
    //               <div className={`image-parent ${styles.imageParent}`}>
    //                 <img
    //                   src="/Blog_pic.png"
    //                   className="img-fluid"
    //                   alt="quixote"
    //                   style={{
    //                     height: "50px",
    //                     width: "50px",
    //                   }}
    //                 />
    //               </div>
    //             </a>
    //           </ul>
    //         </div>
    //       </div>
    //       <Link
    //         type="submit"
    //         id="submit-code"
    //         className="p-3 text-sm font-bold tracking-wide uppercase rounded bg-slate-300 dark:text-black no-underline"
    //         href={`/blog/${blog._id}`}
    //       >
    //         Read more
    //       </Link>
    //     </div>
    //   ))}
    // </div>
  );
};

export default recentPosts;
