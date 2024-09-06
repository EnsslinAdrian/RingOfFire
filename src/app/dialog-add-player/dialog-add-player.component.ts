import { Component, inject } from '@angular/core';
import { GameComponent } from '../game/game.component';
import { MaterialModule } from '../material.module';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-add-player',
  standalone: true,
  imports: [GameComponent, MaterialModule],
  templateUrl: './dialog-add-player.component.html',
  styleUrl: './dialog-add-player.component.scss'
})


export class DialogAddPlayerComponent {
  readonly dialogRef = inject(MatDialogRef<GameComponent>);

  name: string = '';  

  onNoClick(): void {
    this.dialogRef.close();
  }

}


