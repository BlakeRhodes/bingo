import {Component, Input, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {EditDialogComponent} from '../edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {
  @Input() textValue: string;
  marked = false;

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  toggleBackground() {
    this.marked = !this.marked;
  }

  editText() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '15%';
    dialogConfig.width = '60%';
    dialogConfig.data = {description: this.textValue};

    const dialogRef = this.dialog.open(EditDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.textValue = result.description;
        }
      }
    );
    return false;
  }
}
