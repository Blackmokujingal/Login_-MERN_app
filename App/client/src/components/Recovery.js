import React from "react";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { passwordValidate } from "../helper/validate";

import styles from "../styles/Username.module.css";

const Password = () => {
  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validate: passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder="false"></Toaster>
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold text-indigo-500">Recovery</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Enter OPT to recover password{" "}
            </span>
          </div>
          <form className="pt-20" >
            <div className="textbox flex flex-col items-center gap-6">
              <div className="input text-center">
              <span
                className="
              py-4 text-sm text-left text-gray-500"
              >
                Enter 6 digits OTP sent to your email address.
              </span>
              <input
                className={styles.textbox}
                type="password"
                placeholder="Password"
              />

              </div>
              
              <button className={styles.btn} type="submit">
                Sign In{" "}
              </button>
            </div>
            <div className="text-center py-4">
              <span className="text-gray-500">
                Can't get OPT ?{" "}
                <button className="text-red-500">
                Resend it 
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Password;
