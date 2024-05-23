import React from 'react'

export default function Navbar() {
  return (
    <div class="main">
   <div class=" navbar-container">
    <div class="logo1"> <i class="fa-solid fa-grid"> </i> </div>
    <div class="logo"> <i class="fa-brands fa-trello"></i></div>
    <div class='trello'>Trello</div>
    </div>
    <div className="nav-links">
    <div class="dropdown">
    <button class="dropdown-toggle">workspaces <div class="dd"><i class="fa-solid fa-caret-down"></i></div></button>
    <div class="dropdown-menu">
      <a href="#">Option 1</a>
      <a href="#">Option 2</a>
      <a href="#">Option 3</a>
    </div>
  </div>
  <div class="dropdown">
    <button class="dropdown-toggle">Recent <div class="dd"><i class="fa-solid fa-caret-down"></i></div></button>
    <div class="dropdown-menu">
      <a href="#">Option 1</a>
      <a href="#">Option 2</a>
      <a href="#">Option 3</a>
    </div>
  </div>
  <div class="dropdown">
    <button class="dropdown-toggle">Starred <div class="dd"><i class="fa-solid fa-caret-down"></i></div></button>
    <div class="dropdown-menu">
      <a href="#">Option 1</a>
      <a href="#">Option 2</a>
      <a href="#">Option 3</a>
    </div>
  </div>
  <div class="dropdown">
    <button class="dropdown-toggle">Templates <div class="dd"><i class="fa-solid fa-caret-down"></i></div></button>
    <div class="dropdown-menu">
      <a href="#">Option 1</a>
      <a href="#">Option 2</a>
      <a href="#">Option 3</a>
    </div>
  </div>
       <div class="button">
       <button class="btn" >Create</button>
        </div> 
      </div>
      <div class="search-container">
    <input type="text" class="search-input" placeholder ="Search..."/>
    
  </div >  

    <div class="notification"> <i class="fa-regular fa-bell"></i></div>
    <div class="question"><i class="fa-regular fa-circle-question"></i> </div >  
    <div class="gmail"><i class="fa-brands fa-google"></i> </div >  
    </div>
  )
}
