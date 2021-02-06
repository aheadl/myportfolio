import React, { Component, useState } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Button,
} from "reactstrap";
import { NavLink } from "react-router-dom";

const NavbarComp = () => {

  console.log("In navbar");
   const [isNavOpen, setNav] = useState(true);

   function toggleNav() {
     setNav(!isNavOpen);
   }
   function toggleModal() {
     // this.setState({
     //     isModalOpen: !this.state.isModalOpen
     // });
     console.log("this will be a modal");
   }
   return (
     <React.Fragment>
       <Navbar dark sticky="top" expand="md" className="font-color">
         <div className="container">
           <NavbarBrand className="mr-auto" href="/"></NavbarBrand>
           {/* <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar> */}
           <NavbarToggler onClick={toggleNav} />
           <Collapse isOpen={isNavOpen} navbar>
             <Nav
               navbar
               style={{
                 backgroundColor: "#9acd32",
                 textalign: "right",
               }}
             >
               <NavItem>
                 <NavLink
                   className="nav-link"
                   to="/"
                   style={{ color: "White " }}
                   activeClassName="is-active"
                 >
                   <i className="fa fa-home fa-lg" /> Home
                 </NavLink>
                 <span>
                   <i className="" />
                 </span>
                 <span></span>
               </NavItem>
               <NavItem>
                 <NavLink
                   className="nav-link"
                   to="/food"
                   style={{ color: "White " }}
                   activeClassName="is-active"
                 >
                   <i className="fas fa-seedling fa-lg" /> Food
                 </NavLink>
               </NavItem>
               <NavItem>
                 <NavLink
                   className="nav-link"
                   to="/vegan"
                   style={{ color: "White " }}
                 >
                   <i className="fas fa-leaf fa-lg" /> Meatless Options
                 </NavLink>
               </NavItem>
               <NavItem>
                 <NavLink
                   className="nav-link"
                   to="/healthwellness"
                   style={{ color: "White " }}
                 >
                   <i className="fas fa-heart fa-lg" /> Wellness
                 </NavLink>
               </NavItem>
               <NavItem>
                 <NavLink
                   className="nav-link"
                   to="/travel"
                   style={{ color: "White " }}
                 >
                   <i className="fas fa-luggage-cart fa-lg" /> Travel
                 </NavLink>
               </NavItem>
               <NavItem>
                 <NavLink
                   className="nav-link"
                   to="/fashion"
                   style={{ color: "White " }}
                 >
                   <i className="fas fa-tshirt fa-lg" /> Fashion
                 </NavLink>
               </NavItem>
               <NavItem>
                 <NavLink
                   className="nav-link"
                   to="/about"
                   style={{ color: "White " }}
                 >
                   <i className="fa fa-info fa-lg" /> About
                 </NavLink>
               </NavItem>
               <NavItem>
                 <NavLink
                   className="nav-link"
                   to="/contact"
                   style={{ color: "White " }}
                 >
                   <i className="fa fa-address-card fa-lg" /> Contact Us
                 </NavLink>
               </NavItem>
               <span
                 style={{
                   backgroundColor: "#9acd32",
                 }}
                 className="navbar-text ml-auto"
               >
                 <i className="" />
               </span>
               <span
                 style={{
                   backgroundColor: "#9acd32",
                   color: "White ",
                 }}
                 className="navbar-text ml-auto"
               >
                 <i className="fa fa-sign-in" aria-hidden="true"></i> Login
               </span>
             </Nav>
           </Collapse>
         </div>
       </Navbar>
     </React.Fragment>
   );

}
export default NavbarComp;