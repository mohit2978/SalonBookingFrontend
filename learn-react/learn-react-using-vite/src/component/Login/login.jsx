import React from 'react';

function Login() {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [gender, setGender] = React.useState('');

    const handleChnage=(e) => {
        console.log('Chnage',e.target.value);
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();//else form will reload
        const form = {name,email,message,gender};
        console.log(form);
    }

    //Separate handler for each field!!or ue call back as used in email

    return (
        <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-center mb-4">Sample Form</h2>

            <form onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        onChange={handleChnage}
                    />
                </div>

                {/* Email Field */}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        onChange={e=>setEmail(e.target.value)}
                    />
                </div>

                {/* Gender Field */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Gender:</label>
                    <div className="flex items-center space-x-4">
                        <div>
                            <input
                                type="radio"
                                id="male"
                                name="gender"
                                value="male"
                                className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                                onChange={e=>{
                                    console.log("male")
                                    console.log(e.target.checked);
                                    setGender(e.target.value);
                                }}
                            />
                            <label htmlFor="male" className="ml-2 text-sm text-gray-700">Male</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="female"
                                name="gender"
                                value="female"
                                className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                                onChange={e=>{
                                    console.log("female")
                                    console.log(e.target.checked);
                                    setGender(e.target.value);
                                }}
                            />
                            <label htmlFor="female" className="ml-2 text-sm text-gray-700">Female</label>
                        </div>
                    </div>
                </div>

                {/* Message Field */}
                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div className="mb-4">
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;