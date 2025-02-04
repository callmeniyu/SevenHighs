"use client"
import { useEffect, useState } from "react"
import { IoMdClose } from "react-icons/io"

const Toast = ({ toast }: { toast: { status: boolean, type: string } }) => {
    const [open, setOpen] = useState(toast.status);

    useEffect(() => {
        if (toast.status) {
            setOpen(true);
            const timer = setTimeout(() => {
                setOpen(false);
            }, 5000);
            return () => clearTimeout(timer); 
        } else {
            setOpen(false);
        }
    }, [toast]);

    const renderText = () => {
        switch (toast.type) {
            case "create":
                return <h1>Successfully Created Blog</h1>;
            case "update":
                return <h1>Successfully Updated Blog</h1>;
            case "image":
                return <h1>Successfully Uploaded Image</h1>;
            default:
                return null;
        }
    };

    return (
        open && (
            <div className="bg-green-400 flex left-4 bottom-6 rounded-lg gap-3 w-80 fixed justify-center items-center p-3">
                {renderText()}
                <IoMdClose onClick={() => setOpen(false)} className="text-black text-lg cursor-pointer" />
            </div>
        )
    );
};

export default Toast;