"use client"
import { Dialog,DialogContent,DialogTrigger,DialogTitle } from './ui/dialog'
import React from 'react'
import { useState } from 'react'
import PricingSection from './PricingSection'

const PricingModal = ({ subscriptionTier="free",children}) => {
  const [isOpen,setIsOpen]=useState(false);

  const canOpen=subscriptionTier==="free";

  return (
   <Dialog open={isOpen} onOpenChange={canOpen?setIsOpen:undefined} >
  <DialogTrigger>{children}</DialogTrigger>
  <DialogContent className="p-8 pt-4 sm:max-w-6xl">
    <DialogTitle/> 
    <PricingSection/>
  </DialogContent>
</Dialog>    
  )
}
export default PricingModal