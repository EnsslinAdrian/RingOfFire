import { Component, input, Input } from '@angular/core';
import { addIcons } from "ionicons";

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent {

@Input() name: string | undefined;
@Input() playerActive: boolean = false;

}
