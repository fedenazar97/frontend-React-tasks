import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="bg-slate-800 min-h-screen">
      <div className="bg-zinc-900 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">Task List</h1>
          <div className="space-x-4">
            <Link to="/login" className="text-gray-200 font-medium hover:text-gray-100">Login</Link>
            <Link to="/signup" className="text-gray-200 font-medium hover:text-gray-100">Sign up</Link>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
        <h3 className="text-2xl font-bold text-white mb-4">Welcome to your to-do list!</h3>
        <h4 className="text-gray-500 text-lg mb-8">Please log in or sign up to access your tasks list.</h4>
        <div className="flex space-x-4">
          <Link to="/login" className="bg-indigo-500 hover:bg-indigo-400 text-white px-4 py-2 rounded-md shadow">Login</Link>
          <Link to="/signup" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md shadow">Sign up</Link>
        </div>
      </div>
    </div>
  );
};


