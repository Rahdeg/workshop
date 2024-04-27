"use client"
import { checkout } from '@/actions/pay'
import React from 'react'

const PayPage = () => {

    const onClick = () => {
        checkout().then((url) => {
            window.location.href = url;
        })
    }
    return (
        <div>

            <button onClick={onClick}>
                Checkout
            </button>
        </div>
    )
}

export default PayPage