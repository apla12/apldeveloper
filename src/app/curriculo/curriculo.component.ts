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

  cvEN() {
    this.service.downloadAttachment('/cv-apl-english.pdf');
  }

  cvPT() {
    this.service.downloadAttachment('/cv-apl-portuguese.pdf');
  }
}
