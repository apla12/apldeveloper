import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogbbComponent } from './dialog/dialog-bb.component';
import { DialogCaixaComponent } from './dialog/dialog-caixa.component';
import { DialogCamaraComponent } from './dialog/dialog-camara.component';
import { DialogCniComponent } from './dialog/dialog-cni.component';
import { DialogPfComponent } from './dialog/dialog-pf.component';
import { DialogSicoobComponent } from './dialog/dialog-sicoob.component';
import { DialogStfComponent } from './dialog/dialog-stf.component';
import { DialogTcuComponent } from './dialog/dialog-tcu.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialogTCU() {
    const dialogRef = this.dialog.open(DialogTcuComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogCNI() {
    const dialogRef = this.dialog.open(DialogCniComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogCamara() {
    const dialogRef = this.dialog.open(DialogCamaraComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogBB() {
    const dialogRef = this.dialog.open(DialogbbComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogPF() {
    const dialogRef = this.dialog.open(DialogPfComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  openDialogSicoob() {
    const dialogRef = this.dialog.open(DialogSicoobComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogCaixa() {
    const dialogRef = this.dialog.open(DialogCaixaComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogSTF() {
    const dialogRef = this.dialog.open(DialogStfComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
