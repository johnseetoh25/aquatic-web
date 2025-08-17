import { Menu } from 'lucide-react'
import React from 'react'

export default function Navbar() {
  return (
    <div className="navbar">
    <details className="flex-none">
        <summary className="btn btn-square btn-ghost">
            <Menu/>
        </summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
        </ul>
    </details>
    <div className="flex-1">
        <a className="text-xl px-2.5">daisyUI</a>
    </div>
    
    </div>
  )
}
