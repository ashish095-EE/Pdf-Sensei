
"use client"
import { PlusCircleIcon } from "lucide-react"
import {Button} from "./ui/button"
import { useRouter } from "next/navigation";

function PlacehoderDocuments() {
    const router = useRouter();
    const handelClick = () => {

        router.push('/dashboard/upload') // Navigate to new document page on click. Replace '/documents/new' with the actual route.
        
    }
  return (
    <Button onClick={handelClick} className="flex flex-col items-center w-64 h-80 rounded-xl bg-gray-200 drop-shadow-md text-gray-400">
        <PlusCircleIcon className="h-16 w-16"/>
        <p>
            Add a Documents
        </p>
      
    </Button>
  )
}

export default PlacehoderDocuments
