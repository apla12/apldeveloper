import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Item {
  name: string;
}

@Component({
  selector: 'app-curriculo',
  templateUrl: './curriculo.component.html',
  styleUrls: ['./curriculo.component.scss'],
})
export class CurriculoComponent implements OnInit {
  textcv: any = 'For more details, download a copy of my curriculum.';

  //item$: Observable<Item[]>;

  constructor(private _http: HttpClient) {
    //const itemCollection = collection(this.firestore, 'items');
    //this.item$ = collectionData(itemCollection) as Observable<Item[]>;
  }

  ngOnInit(): void {
    console.log('init');
  }

  downloadAttachmentCvEN() {
    console.log('EN');
  }

  downloadAttachmentCvPT() {
    console.log('PT');
  }
}
