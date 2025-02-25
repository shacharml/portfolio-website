import * as React from "react";  
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { waitFor } from "@testing-library/react";
import Navbar from "../src/components/Navbar"; // Adjust import according to your file structure
import { NAVIGATION_LINKS } from "../constants/index";



// // Simulates clicking a menu item to verify navigation works.
// test("clicking navbar links scrolls to the correct section", async () => {
//   const projectsLink = screen.getByRole('heading', { level: 2, name: /projects/i }).toBeInTheDocument();
// //   getByText(/projects/i);

//   // Mock window.location.hash
//   Object.defineProperty(window, 'location', {
//     value: { hash: '' },
//     writable: true,
//   });

//   // Click the link
//   userEvent.click(projectsLink);

//   // Wait for the scroll effect
//   await screen.findByText(/some text that confirms the section is loaded/);

//   // Check that the hash is updated
//   expect(window.location.hash).toBe("#projects");
// });


describe("Navbar Component", () => {
   
  // Test: Render the Navbar
    it("renders the navbar and contains navigation links", () => {
      render(<Navbar />);
  
      // Check if the navigation links are present
      NAVIGATION_LINKS.forEach((navLink) => {
        expect(screen.getByText(navLink.label)).toBeInTheDocument();
      });
    });
  
  
  });
