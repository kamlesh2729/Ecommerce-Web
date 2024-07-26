import React from 'react'

const Signup = () => {
  return (
    <>
      <section className="flex flex-col w-3/5 px-36 mx-auto">
        <h1 className=" uppercase font-semibold text-h4 mx-auto">
          Sign Up here
        </h1>
        <form className=" flex flex-col">
          <label htmlFor="Fname" className="text-p font-semibold mb-4">
            First Name <b className=" text-blue-500">*</b>
          </label>
          <input
            className=" bg-slate-100 py-5 px-7 text-p border outline-none mb-9 focus:border-b-2 focus:border-t-0 border-r-0 border-l-0 focus:border-text-orange"
            type="text"
            name="name"
            id="Fname"
          />
          <label htmlFor="Fname" className="text-p font-semibold mb-4">
            Last Name <b className=" text-blue-500">*</b>
          </label>
          <input
            className=" bg-slate-100 py-5 px-7 text-p border outline-none mb-9 focus:border-b-2 focus:border-t-0 border-r-0 border-l-0 focus:border-text-orange"
            type="text"
            name="name"
            id="Fname"
          />
          <label htmlFor="Email" className="text-p font-semibold mb-4">
            Email<b className=" text-blue-500">*</b>
          </label>
          <input
            className=" bg-slate-100 py-5 px-7 text-p border outline-none mb-9 focus:border-b-2 focus:border-t-0 border-r-0 border-l-0 focus:border-text-orange"
            type="email"
            name="email"
            id="Email"
          />
          <label htmlFor="msg" className="text-p font-semibold mb-4">
            Passaword<b className=" text-blue-500">*</b>
          </label>
          <input
            className=" bg-slate-100 py-5 px-7 text-p border outline-none mb-9 focus:border-b-2 focus:border-t-0 border-r-0 border-l-0 focus:border-text-orange"
            type="password"
            name="password"
            id="Password"
          />

          <button
            className=" bg-blue-500 flex justify-center items-center py-7 px-12 rounded-md shadow-3xt transition-all border border-solid border-text-orange text-white text-bt font-semibold cursor-pointer hover:shadow-3xr hover:bg-text-orange"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </section>
    </>
  );
}

export default Signup