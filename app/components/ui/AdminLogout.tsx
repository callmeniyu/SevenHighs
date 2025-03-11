"use client"
import { useAuth } from "@/context/AuthProvider"
import { FiLogOut } from "react-icons/fi"

const AdminLogout = () => {
    const {logout} = useAuth()

    return (
        <button onClick={logout} className="flex gap-2 items-center cursor-pointer">
            <FiLogOut className="text-xl" />
            <p className="font-semibold">Logout</p>
        </button>
    )
}

export default AdminLogout
