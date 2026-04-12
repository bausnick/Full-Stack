import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripListing } from './trip-listing/trip-listing';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TripListing, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Travlr Getaways Admin!';
}
