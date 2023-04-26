import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculo',
  templateUrl: './curriculo.component.html',
  styleUrls: ['./curriculo.component.scss'],
})
export class CurriculoComponent implements OnInit {
  textcv: any = 'For more details, download a copy of my curriculum.';

  constructor() {}

  ngOnInit(): void {}
}
