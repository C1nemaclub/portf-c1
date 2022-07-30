import "./index.scss"
import SideBar from "../Sidebar"
import { Outlet } from "react-router-dom"

import React from "react"

export default function Layout() {
  return (
    <div className="App">
      <SideBar />
      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>
        <Outlet />

        <span className="tags bottom-tags">
          &lt;body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  )
}
