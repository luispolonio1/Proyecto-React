import React, { createContext, useState } from 'react';
export const ContextoBlog = createContext();
export const ProveedorBlog = ({ children }) => {
    const [blogs, setBlogs] = useState([])
return (
    <ContextoBlog.Provider value={{ blogs, setBlogs }}>
        {children}
    </ContextoBlog.Provider>
    );
};
