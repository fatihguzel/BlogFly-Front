import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetPasswordAction } from "../../features/Auth/asyncActions";

const resetPassword = () => {
  const router = useRouter();
  const email = useSelector((state) => state.auth.user.email);
  const dispatch = useDispatch();
  const [resetData, setResetData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const changeHandler = (e) => {
    setResetData({ ...resetData, [e.target.name]: e.target.value });
  };

  const resetPasswordHandler = (e) => {
    e.preventDefault();

    const oldPassword = resetData.oldPassword;
    const newPassword = resetData.newPassword;
    const againPassword = resetData.confirmPassword;
    dispatch(
      resetPasswordAction({
        email,
        oldPassword,
        newPassword,
        againPassword,
      })
    );
  };
  return (
    <section class="bg-gray-50 dark:bg-gray-900">
      <div class="flex flex-col items-center justify-center px-6 py-6 mx-auto md:h-screen lg:py-0 max-lg:py-36">
        <a
          href="#"
          class="flex items-center mb-6 text-4xl font-semibold text-gray-900 dark:text-white"
        >
          BlogFly
        </a>
        <div class="w-full p-6  rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
          <h2 class="mb-1 text-xl font-bold leading-tight tracking-tight md:text-2xl dark:text-gray-500">
            Change Password
          </h2>
          <form
            class="mt-4 space-y-4 lg:mt-5 md:space-y-5"
            onSubmit={resetPasswordHandler}
          >
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium dark:text-gray-500"
              >
                Old Password
              </label>
              <input
                type="password"
                name="oldPassword"
                value={resetPassword.oldPassword}
                onChange={changeHandler}
                id="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="••••••••"
                required=""
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium dark:text-gray-500"
              >
                New Password
              </label>
              <input
                type="password"
                name="newPassword"
                value={resetPassword.newPassword}
                onChange={changeHandler}
                id="newPassword"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div>
              <label
                for="confirm-password"
                class="block mb-2 text-sm font-medium dark:text-gray-500"
              >
                Confirm password
              </label>
              <input
                type="confirmPassword"
                name="confirmPassword"
                value={resetPassword.confirmPassword}
                id="confirmPassword"
                placeholder="••••••••"
                onChange={changeHandler}
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  id="newsletter"
                  aria-describedby="newsletter"
                  type="checkbox"
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  required=""
                />
              </div>
              <div class="ml-3 text-sm">
                <label
                  for="newsletter"
                  class="font-light text-gray-500 dark:text-gray-300"
                >
                  I accept the{" "}
                  <a
                    class="font-medium text-primary-600 hover:underline dark:text-green-900"
                    href="#"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>
            <button
              type="submit"
              class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 "
              onClick={resetPasswordHandler}
            >
              Reset password
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default resetPassword;
