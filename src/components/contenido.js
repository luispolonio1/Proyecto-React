import React, { createContext, useState } from 'react';
export const ContextoBlog = createContext();
<<<<<<< HEAD
export const ProveedorBlog = ({ children }) => {
const [blogs, setBlogs] = useState([]);
const [blogsel, setblogsel] = useState(null); 

=======
export const ProveedorBlog = ({ children}) => {
    const [blogs, setBlogs] = useState([])
>>>>>>> 1c9df79e75012e24ade18f2c60a1782d90488687
return (
    <ContextoBlog.Provider value={{ blogs, setBlogs, blogsel, setblogsel }}>
      {children}
    </ContextoBlog.Provider>
  );
};
