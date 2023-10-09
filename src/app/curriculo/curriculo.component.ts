import { Component, OnInit } from '@angular/core';
import { CurriculoService } from '../service/curriculo.service';

@Component({
  selector: 'app-curriculo',
  templateUrl: './curriculo.component.html',
  styleUrls: ['./curriculo.component.scss'],
})
export class CurriculoComponent implements OnInit {
  textcv: any = 'For more details, download a copy of my curriculum.';

  constructor(private service: CurriculoService) {}

  ngOnInit(): void {}

  downloadAttachmentCvEN() {
    this.service.downloadAttachmentCvEN();
  }

  downloadAttachmentCvPT() {
    this.service.downloadAttachmentCvEN();
  }
}
