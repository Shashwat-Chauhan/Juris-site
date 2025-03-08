import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../config/firebase';
import Navbar from '../components/Navbar';
import blog_image from '../assets/image/blog_image.jpg'
export const Blogs = () => {
    const [data, setData] = useState([]);
    const collectionRef = collection(db, "blogs");

    const getBlogs = async () => {
        try {
            const querySnapshot = await getDocs(collectionRef);
            const blogsData = querySnapshot.docs.map((doc) => {
                const blog = doc.data();
                return {
                    id: doc.id,
                    ...blog,
                    date: blog.date?.toDate ? blog.date.toDate().toLocaleDateString() : "Unknown Date",
                };
            });
            setData(blogsData);
        } catch (error) {
            console.log("Error fetching blogs", error);
        }
    };

    useEffect(() => {
        getBlogs();
    }, []);

    return (
        <>
            <Navbar />
            <div className="mt-24 max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.length > 0 ? (
                    data.map((blog) => (
                        <div key={blog.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                            {blog.imageUrl && (
                                <img src={blog.imageUrl} alt= {blog_image} className="w-full h-48 object-cover" />
                            )}
                            <div className="p-4"    >
                                <h2 className="text-lg font-semibold text-gray-900">{blog.heading}</h2>
                                <p className="text-gray-700 mt-1">{blog.subHeading}</p>
                                <div className="flex items-center justify-between text-sm text-gray-500 mt-3">
                                    <span>✍ {blog.author}</span>
                                    <span>📅 {blog.date}</span>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500 col-span-3">No blogs available</p>
                )}
            </div>
        </>
    );
};
