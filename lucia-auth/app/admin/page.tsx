import { redirect } from 'next/navigation';
import { validateRequest } from "@/lib/auth";
import React from 'react'

const AdminPage = async () => {
    const { user } = await validateRequest();


    if (!user || user.role !== "ADMIN") {
        return redirect("/");
    }



    return (
        <div>Only admin</div>
    )
}

export default AdminPage