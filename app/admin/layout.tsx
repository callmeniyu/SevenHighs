"use client"

import { useState } from "react"
import { useAuth } from "@/context/AuthProvider"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const { isAuthenticated, authenticate } = useAuth()
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")


    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        authenticate(password)
        if (authenticate(password)) {
            setError("")
        } else {
            setError("Incorrect password. Try again.")
        }
    }

    if (!isAuthenticated) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-xl mb-4">Admin Authentication</h1>
                <form onSubmit={handleLogin}>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border p-2 mb-2"
                        placeholder="Enter admin password"
                    />
                    <button type="submit" className="bg-blue-500 text-white p-2">
                        Login
                    </button>
                </form>
                {error && <p className="text-red-500 mt-2">{error}</p>}
            </div>
        )
    }

    return <>{children}</>
}
