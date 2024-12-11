import React from "react";

const ProfileEdit = () => {
  return (
    <>
<div className="mainpage grid grid-cols-1 md:grid-cols-12 gap-4 p-4">
<div className="leftsection hidden md:block md:col-span-4 bg-gray-100 p-4 rounded-lg shadow-md">
    <div className="text-center">
      <img
        src="https://avatars.githubusercontent.com/u/41060734?v=4"
        alt="Profile Image"
        className="w-20 h-20 mx-auto rounded-full border-4 border-blue-500 shadow-md"
      />
      <h2 className="text-xl font-semibold mt-4">Shriyash Parandkar</h2>
      <p className="text-gray-600">Software Developer</p>
      <p className="text-gray-500 text-sm">FIS Global</p>
      <p className="text-gray-500 text-sm">email@example.com</p>
    </div>
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
      <ul className="space-y-2">
        <li>
          <a href="#" className="text-blue-500 hover:underline">Change Password</a>
        </li>
        <li>
          <a href="#" className="text-blue-500 hover:underline">Update Contact Info</a>
        </li>
        <li>
          <a href="#" className="text-blue-500 hover:underline">Notification Preferences</a>
        </li>
      </ul>
    </div>
    <div className="bg-blue-100 p-4 rounded-lg text-center mt-6">
      <p className="text-gray-700 italic">
        "The only way to do great work is to love what you do." <br /> - Steve Jobs
      </p>
    </div>
  </div>
  <div className="rightsection md:col-span-8 bg-white p-4 rounded-lg shadow-md">
    <div className="header flex flex-col items-center md:flex-row md:justify-between gap-4">
      <h1 className="text-2xl font-semibold text-center md:text-left">Edit Profile</h1>
      <img
        src="https://avatars.githubusercontent.com/u/41060734?v=4"
        alt="Profile Image"
        className="w-24 h-24 rounded-full border-4 border-white shadow-md"
      />
    </div>
    <div className="FormSection mt-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="boxType w-full grid gap-2">
          <span className="font-semibold">First Name</span>
          <input
            className="border rounded-xl shadow-md h-12 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Shriyash"
          />
        </div>
        <div className="boxType w-full grid gap-2">
          <span className="font-semibold">Last Name</span>
          <input
            className="border rounded-xl shadow-md h-12 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Parandkar"
          />
        </div>
      </div>
      <div className="email mt-6">
        <span className="font-semibold">Email</span>
        <input
          className="border rounded-xl mt-2 shadow-md h-12 p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="email"
          placeholder="email@example.com"
        />
      </div>
      <div className="Contact mt-6">
        <span className="font-semibold">Contact Number</span>
        <input
          className="border rounded-xl mt-2 shadow-md h-12 p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="+91 7021707728"
        />
      </div>
      <div className="flex flex-col my-5 md:flex-row justify-between gap-4">
        <div className="boxType w-full grid gap-2">
          <span className="font-semibold">Current Company</span>
          <input
            className="border rounded-xl shadow-md h-12 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="FIS Global"
          />
        </div>
        <div className="boxType w-full grid gap-2">
          <span className="font-semibold">Current Designation</span>
          <input
            className="border rounded-xl shadow-md h-12 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Software Developer"
          />
        </div>
      </div>
      <div className="flex justify-start gap-4 mt-4">
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg shadow hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400">Cancel</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">Submit</button>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default ProfileEdit;
