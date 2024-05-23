import React from 'react'
import Body from './Body'
export default function Sidebar()
 {
  
  return (
    <div class="header">
        <div class="sidebar">
            <div class="B">
        <div class="dropdown">
    <button class="dropdown-toggle"> <div class="logo2"><i class="fa-brands fa-trello"></i></div>Boards </button>
    <div class="dropdown-menu">
     
    </div>
  </div>
  <div class="dropdown">
    <button class="dropdown-toggle"><div class ="logo2"><i class="fa-regular fa-user"></i></div>Members<div class="plus"><i class="fa-solid fa-plus"></i></div> </button>
    <div class="dropdown-menu">
     
    </div>
  </div>
  <div class="dropdown">
    <button class="dropdown-toggle"><div class="logo2"><i class="fa-solid fa-gear"></i></div>Workspace Settings<div class="p"><i class="fa-solid fa-caret-down"></i></div> </button>
    <div class="dropdown-menu">
     
    </div>
  </div>
  <div class= "T">workspace views</div>
  <div class="dropdown">
    <button class="dropdown-toggle"><div class="logo2"><i class="fa-solid fa-table"></i></div>Table </button>
    <div class="dropdown-menu">
      
    </div>
  </div>
  <div class="dropdown">
    <button class="dropdown-toggle"><div class="logo2"><i class="fa-solid fa-calendar-days"></i></div>calender </button>
    <div class="dropdown-menu">
      
    </div>
  </div>
  <div class= "T">Your Boards</div>
  <div class= "T2"><div class="box"></div>My Trello Board</div>
            </div>
            </div>
        <div class="centerbar">
        <Body/>
         
        
          
         
       
    </div>
    
        </div>
      
    
  )
}

