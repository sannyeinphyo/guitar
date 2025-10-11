"use client"
import React from "react";
import { motion } from "framer-motion";
export default function Contacts() {
  return (

    <>
    <div>
    <motion.h1
    initial = {{opacity: 0 , y : -50}}
    whileInView={{opacity : 1 , y:0 }}
    transition={{duration:.2 ,}}
    viewport={{amount:0.2 , once:false}}
    className="text-4xl text-center pt-16 font-bold"

    >
      Contact
    </motion.h1>
    <div>
      
    </div>
    </div>
    </>
    // <div className="flex items-center justify-center h-[80vh]">
    //   <div className="border-2 border-dashed border-blue-600 rounded-xl px-6 py-4 text-center text-lg font-semibold text-gray-700 shadow-sm">
    //     🚧 In Deployment — Coming Soon...
    //   </div>
    // </div>
  );
}
