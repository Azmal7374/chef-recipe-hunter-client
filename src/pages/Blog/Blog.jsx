import React from "react";
import Pdf from 'react-to-pdf';
import { useRef } from 'react';

const Blog = () => {
  const ref = useRef();
  return (
    <div className="my-container">
  
    <div ref={ref}> 
    
    <div className="container my-6 px-14 md:px-32 lg:px-64 py-6 flex justify-between bg-gray-600 mt-16 ">
    <div className="qna-area">
      <div className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          1. Tell us the differences between uncontrolled and controlled
          components.
        </div>
        <div className="collapse-content text-start">
          <p>
            {" "}
            controlled component - In a controlled component, form data is
            handled by a React component.
          </p>
          <p>
            uncontrolled component - The alternative is uncontrolled
            components, where form data is handled by the DOM itself. To
            write an uncontrolled component, instead of writing an event
            handler for every state update, you can use a ref to get form
            values from the DOM.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          2. How to validate React props using PropTypes
        </div>
        <div className="collapse-content">
          <p>
            propTypes is used to verify the input type for props in react.
            If you try to put any other type, then it will give you warning
            in console. For example, if you set name should be string, but
            you pass something else like number then it will give you
            warning in console and also the result might get different.
            After you define patterns in for propTypes you should set
            default values for props as well.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          3. Tell us the difference between nodejs and express js.
        </div>
        <div className="collapse-content">
          <p>
            ----Express.js----- <br />
            <li>
              It is used to build web-apps using approaches and principles
              of Node.js.
            </li>
            <li>It is built on Node.js.</li>
            <li>Framework based on Node.js.</li>
            <li>It requires less coding time.</li>
            <li>Written in:JavaScript</li>
          </p>

          <p>
            -----Node.js---- <br />
            <li>
              It is used to build web-apps using approaches and principles
              of Node.js.
            </li>
            <li>It is built on Google’s V8 engine.</li>
            <li>
              Run-time platform or environment designed for server-side
              execution of JavaScript.
            </li>
            <li>It requires more coding time.</li>
            <li>Written in:C, C++, JavaScript</li>
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          4. What is a custom hook, and why will you create a custom hook?
        </div>
        <div className="collapse-content">
          <p>
          ---Custom Hook--- <br />
            What is a custom hook? A custom Hook is a JavaScript function
            whose name starts with ”use” and that may call other Hooks.
            That's it! If you have code in a component that you feel would
            make sense to extract, either for reuse elsewhere or to keep the
            component simpler, you can pull that out into a function.
          </p>

          <p>With Hooks, you can extract stateful logic from a component so it can be tested independently and reused. Hooks allow you to reuse stateful logic without changing your component hierarchy. This makes it easy to share Hooks among many components or with the community.</p>
        </div>
      </div>
    </div>
  </div>
    
    </div>
      <div className="text-center">
      <Pdf targetRef={ref} filename="blog.pdf">
      {({ toPdf }) => (
        <button onClick={toPdf}  className='bg-gray-600 p-3 w-40  rounded-md  text-white font-bold hover:bg-gray-700'>
          Generate PDF
        </button>
      )}
    </Pdf>
      </div>
    </div>
  );
};

export default Blog;
