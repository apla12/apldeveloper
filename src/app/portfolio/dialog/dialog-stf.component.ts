import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'dialog-stf',
  templateUrl: 'dialog-stf.html',
  styleUrls: ['dialog.scss']
})
export class DialogStfComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  public dialogRef: MatDialogRef<DialogStfComponent>,) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }
}