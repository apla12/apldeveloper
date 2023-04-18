import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'dialog-sicoob',
  templateUrl: 'dialog-sicoob.html',
  styleUrls: ['dialog.scss']
})
export class DialogSicoobComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  public dialogRef: MatDialogRef<DialogSicoobComponent>,) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }
}