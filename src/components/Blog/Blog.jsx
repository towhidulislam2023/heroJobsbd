import React from 'react';
import SecandaryHeader from '../SecondaryHeader/SecandaryHeader';

const Blog = () => {
    return (
        <div>
            <SecandaryHeader>Blog</SecandaryHeader>
            <div className="md:w-[70%] w-[95] px-7 md:p-0 mx-auto ">
                <div className="my-5">
                    <h1 className='text-3xl font-bold '>1. When should you use context API?</h1>
                    <p className="text-lg">
                        <span className="text-red-700 font-semibold text-lg">Ans:</span>
                        <br />
                        <span className="bg-green-100 text-black p-1">context API</span>: The Context API in React is a way to manage state in your application and pass data down to child components without the need for prop drilling.
                        <br />
                        Here are some scenarios where you may want to use the  
                        Context API:
                        <ol >
                            <li> <span className='bg-green-100'>#1</span> Theme Switching</li>
                            <li> <span className='bg-green-100'>#2</span> User Authentication</li>
                            <li> <span className='bg-green-100'>#3</span> Multilingual Support</li>
                            <li> <span className='bg-green-100'>#4</span> Application Configuration</li>
                        </ol>
                    </p>
                </div>

                <div className="my-5">
                    <h1 className='text-3xl font-bold '>2.What is a custom hook?</h1>
                    <p className="text-lg">
                        <span className="text-red-700 font-semibold text-lg">Ans:</span>
                        <br />
                        <span className="bg-green-100 text-black p-1">custom hook</span>:
                        A custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks. Hooks are reusable functions.we can extract that logic to a custom Hook. Custom Hooks start with "use". Example: useFetch .
                        <br />
                        Rules of Hooks:
                        <ol>
                            <li> <span className='bg-green-100'>#1</span>Don't call Hooks inside loops, conditions, or nested functions</li>
                            <li> <span className='bg-green-100'>#2</span> Don't call Hooks from regular JavaScript functions</li>
                            <li> <span className='bg-green-100'>#3</span> You can skip to the next page explaining how to write your own Hooks now</li>
                            <li> <span className='bg-green-100'>#4</span> This is why Hooks must be called on the top level of our components.</li>
                        </ol>
                    </p>
                </div>
                <div className="my-5">
                    <h1 className='text-3xl font-bold '>3.What is useRef?</h1>
                    <p className="text-lg">
                        <span className="text-red-700 font-semibold text-lg">Ans:</span>
                        <br />
                        <span className="bg-green-100 text-black p-1">useRef</span>:
                        useRef is a built-in React hook that accepts one argument as the initial value and returns a reference. It allows you to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
                    </p>
                </div>
                <div className="my-5">
                    <h1 className='text-3xl font-bold '>4.What is useMemo?.</h1>
                    <p className="text-lg">
                        <span className="text-red-700 font-semibold text-lg">Ans:</span>
                        <br />
                        <span className="bg-green-100 text-black p-1">useMemo</span>:
                        useMemo is a React Hook that lets you cache the result of a calculation between re-renders.useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running.It is a Hook, so we can only call it at the top level of your component our own Hooks
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;