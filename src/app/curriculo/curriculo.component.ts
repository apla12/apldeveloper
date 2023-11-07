import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import { window } from 'rxjs';

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

  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    console.log('init');
  }

  downloadAttachmentCvEN() {
    console.log('EN');
    const storage = getStorage();
    const starsRef = ref(storage, '/cv-apl-in.pdf');

    getDownloadURL(starsRef)
      .then((url) => {
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = (event) => {
          const blob = xhr.response;
        };
        xhr.open('GET', url);
        xhr.send();
      })
      .catch((error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/object-not-found':
            // File doesn't exist
            break;
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;
          case 'storage/canceled':
            // User canceled the upload
            break;

          // ...

          case 'storage/unknown':
            // Unknown error occurred, inspect the server response
            break;
        }
      });
  }

  downloadAttachmentCvPT() {
    console.log('PT');
  }
}
