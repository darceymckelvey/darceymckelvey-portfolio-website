import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrls: ['./category-navbar.component.css'],
})
export class CategoryNavbarComponent {
  navbarOpen = false; // This will hold the state of the navbar (open or closed)
  dropdownOpen = false; // This will hold the state of the dropdown (open or closed)

  constructor(private elementRef: ElementRef) {}

  // This method will toggle the state of the navbar when the button is clicked
  toggleNavbar(): void {
    this.navbarOpen = !this.navbarOpen;
  }

  // This method will toggle the state of the dropdown when clicked
  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  // Close the navbar when clicking outside
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    if (
      event.target &&
      (event.target as HTMLElement).closest('.navbar') === null
    ) {
      this.navbarOpen = false;
      this.dropdownOpen = false;
    }
  }

  isSmallScreen(): boolean {
    return window.innerWidth < 768;
  }
}
