import { useState } from 'react';

export default function Navbar() {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };
    return (
        <nav className="lg:bg-white z-40 bg-gray-600 h-16 fixed top-0 w-full shadow-md dark:bg-gray-900 dark:text-white">
            <div className="lg:flex cursor-pointer justify-around md:flex">
                <div className="flex items-center justify-between">
                    <div className="text-xl py-4 font-semibold">
                        <h2 className="text-2xl font-bold dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
                            <span className="cursor-pointer">
                                <span className="text-blue-400">Electricity</span>
                            </span>
                        </h2>
                    </div>
                    {/* Mobile menu button */}
                    <div className="flex md:hidden lg:hidden">
                        <button onClick={handleClick}
                            type="button"
                            className="bg-white rounded-md p-2 text-gray-400  hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                {!active ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                                    ></path>
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
                <li className={`${active ? 'bg-gray-600' : 'hidden'} py-4 mt-2 sm:flex block text-sm text-white dark:text-white lg:text-gray-600 capitalize hover:text-blue-700`}>
                    <a href="/">About Us</a>
                </li>

                <li className="py-4 mt-2 sm:flex block text-sm text-white dark:text-white lg:text-gray-600 capitalize hover:text-blue-700">
                    <a href="/#services">Services</a>
                </li>
            </div>
        </nav>
    )
}