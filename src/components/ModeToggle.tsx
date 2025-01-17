"use client"

import { Button } from './ui/button'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

const ModeToggle = () => {
    const { theme, setTheme } = useTheme()
  return (
    <Button className='flex items-center justify-center' variant={"ghost"} size={"icon"} onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        <SunIcon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-180 dark:scale-0' />
        <MoonIcon className='h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
        <span className='sr-only'>Toggle Theme</span>
    </Button>
  )
}

export default ModeToggle