import React from 'react';
const Blog = () => {
    return (
        <div className="my-container">
        <div className="container my-6 px-14 md:px-32 lg:px-64 py-6 flex justify-between bg-slate-200 mt-16 ">
        <div className="qna-area">
          <div className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              1. Tell us the differences between uncontrolled and controlled components.
            </div>
            <div className="collapse-content text-start">
               
            </div>
          </div>
          <div className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              2. How to validate React props using PropTypes
            </div>
            <div className="collapse-content">
               
            </div>
          </div>
          <div className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              3. Tell us the difference between nodejs and express js.
            </div> 
            <div className="collapse-content">
              <p>
              
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              4. What is a custom hook, and why will you create a custom hook?
            </div>
            <div className="collapse-content">
            
            </div>
          </div>
        </div>
      </div>
        
        </div>
    );
};

export default Blog;