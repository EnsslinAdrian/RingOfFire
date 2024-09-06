import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { addIcons } from "ionicons";

@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss'
})

export class StartScreenComponent {

  constructor(private router: Router) {

  }

  newGame() {
    // Start Game
    this.router.navigateByUrl('/game')
  }

}
