import { Injectable } from '@angular/core';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
@Injectable({
  providedIn: 'root',
})
export class CurriculoService {
  constructor() {}

  downloadAttachment(nameFile: any) {
    const storage = getStorage();
    getDownloadURL(ref(storage, nameFile))
      .then(function (url) {
        var link = document.createElement('a');
        link.setAttribute('href', url);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch(function (error) {
        console.error('Upload failed:', error);
      });
  }
}
