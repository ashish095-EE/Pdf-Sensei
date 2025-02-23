"use client"
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

import {CircleArrowDown,RocketIcon} from "lucide-react"



function FileUploader() {
    
    

    

    
    const onDrop = useCallback((acceptedFiles:File[]) => {
        const file = acceptedFiles[0];

        if(file){
            //await handelUpload
        }
        else{
            //error message and toast
        }
        // Do something with the files
      }, []);
      const {getRootProps, getInputProps, isDragActive,isFocused,isDragAccept} = useDropzone({
        onDrop,
        accept: {'application/pdf': [".pdf"]},
        multiple: false,
  
    })
  return (
    <div className="flex flex-col gap-4 items-center max-2-7xl mx-auto">

        <div {...getRootProps()} className={`p-10 border-2 border-dashed mt-10 w-[90%] border-indigo-600 text-indigo-600 rounded-lg h-96 flex items-center justify-center ${isFocused || isDragAccept ? "bg-indigo-300": "bg-indigo-100"}`}>
        <input {...getInputProps()} />

        <div className='flex flex-col items-center justify-center'>

            {
                isDragActive ? (
                    <>
                        <RocketIcon className='h-20 w-20 animate-ping'/>
                        <p>Drop the files here ...</p>
                    </>

                ): (
                    <>
                        <CircleArrowDown className='h-20 w-20 animate-bounce'/>
                        <p>Drag n drop some files here, or click to select files</p>
                    </>

                )
                
            }
        </div>
        </div>
    </div>
  )
}

export default FileUploader
