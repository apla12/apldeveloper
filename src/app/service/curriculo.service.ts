import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root',
})
export class CurriculoService {
  cvEN = 'gs://apldeveloper-cf797.appspot.com/cv-apl-in.pdf';

  constructor(

    ) {}

  public downloadAttachmentCvEN() {
    //return this.storage.refFromURL(this.cvEN);
  }
}
