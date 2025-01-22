"use client"
import React, { useState } from "react"
import Drawer from "@mui/material/Drawer"

const Sidebar = ({ hidden }: { hidden: boolean }) => {
    const [open, setOpen] = useState(false)

    const toggleDrawer = (newOpen: boolean) => () => {
        !hidden && setOpen(newOpen)
    }
    return (
        <Drawer open={open} onClose={toggleDrawer(false)}>
            <ul>
                <li>hoi</li>
                <li>hoi</li>
                
                <li>hoi</li>
                <li>hoi</li>
            </ul>
        </Drawer>
    )
}

export default Sidebar
