import React, { useEffect, useState } from 'react'

export default function App() {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("darkMode") === "dark"
    })
useEffect(()=>{
    if(darkMode){
        document.body.classList.add("dark")
        localStorage.setItem("darkMode", "dark") 
    } else {
        document.body.classList.remove("dark")
        localStorage.setItem("darkMode","light")
    }
}, [darkMode])

const toggleDarkMode = (() => {
    setDarkMode(prev=>!prev)
})

  return (
    <button onClick={toggleDarkMode}>{darkMode ? "Light Mode" : "Dark Mode"}</button>
  )
}

