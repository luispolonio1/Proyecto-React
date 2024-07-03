import React, { createContext, useState } from 'react';
export const ContextoBlog = createContext();
export const ProveedorBlog = ({ children }) => {
const [blogs, setBlogs] = useState([]);
const [blogsel, setblogsel] = useState(null); 

return (
    <ContextoBlog.Provider value={{ blogs, setBlogs, blogsel, setblogsel }}>
      {children}
    </ContextoBlog.Provider>
  );
};
