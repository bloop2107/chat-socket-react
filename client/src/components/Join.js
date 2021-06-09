import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Join = () => {
    const [name,setName] = useState('');
    const [room,setRoom] = useState('');

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Join</h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">
                Email address
              </label>
              <input
                id="name"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="room" className="sr-only">
                Password
              </label>
              <input
                id="room"
                name="room"
                type="text"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-2"
                placeholder="Select Room"
                onChange={(e) => setRoom(e.target.value)}
              />
            </div>
          </div>

          <div>
              <Link onClick={(e) => (!name || !room) ? e.preventDefault() : null } to={`/chat?name=${name}&room=${room}`} >
                <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                </span>
                Sign in
                </button>
              </Link>
          </div>
        </form>
      </div>
    </div>
    )
}

export default Join
    