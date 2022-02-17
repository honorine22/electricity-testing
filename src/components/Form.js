import React from 'react';
const Form = () => {
    const [valueChange, setValueChange] = useState('')
    const [valueSubmit, setValueSubmit] = useState('')

    const handleChange = (event) => (
        setValueChange(event.target.value)
    );

    const handleSubmit = (event) => {
        event.preventDefault();
        setValueSubmit(event.target.text1.value)
    };
    return (
        <div className='lg:mx-4 mt-48 lg:mt-24 grid lg:grid-cols-2 grid-cols-1'>
            <div className='p-4 lg:ml-80 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700'>
                <form data-testid="form" onSubmit={handleSubmit} className='space-y-6' action="#">
                    <h2 className='text-xl font-bold text-gray-900 dark:text-white'>Log in</h2>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Amount</label>
                        <input onChange={handleChange} htmlFor="text1" onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                            }
                        }} pattern="[0-9]*" inputmode="numeric" name="amount" id="amount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Meter</label>
                        <input id="num2" onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                            }
                        }} name="meter" id="meter" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <button type="submit" className="w-full -mt-4 text-white bg-cyan-400 hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">Submit</button>
                </form>
                <h3>React State:</h3>
                <p>Change: {valueChange}</p>
                <p>Submit Value: {valueSubmit}</p>
                <br />
            </div>
            <div className='bg-cyan-400 lg:flex hidden rounded-lg max-w-sm'>
                <div className='py-52 px-24'>
                    <p className='text-md text-white'>Nice to see you again</p>
                    <h1 className='font-bold pt-2 text-white text-xl'>Welcome! Sell It.</h1>
                </div>
            </div>
        </div>
    );
};

export default Form;