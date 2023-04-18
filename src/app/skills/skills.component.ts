import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

export interface Chip {
  name: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  servers: Chip[] = [
    { name: 'weblogic' },
    { name: 'jboss' },
    { name: 'tomcat' },
  ];

  databases: Chip[] = [
    { name: 'SQLServer' },
    { name: 'Oracle' },
    { name: 'MySql' },
    { name: 'PostgreSQL' },
    { name: 'MongoDB' },
  ];

  webs: Chip[] = [
    { name: 'Angular' },
    { name: 'Typescript' },
    { name: 'Bootstrap' },
    { name: 'JavaScript' },
    { name: 'CSS' },
    { name: 'cypress' },
    { name: 'jasmine' },
    { name: 'Material UI' },
    { name: 'Flex' },
    { name: 'JQuery' },
  ];

  frames: Chip[] = [
    { name: 'Spring Boot' },
    { name: 'Spring Data' },
    { name: 'Spring Security' },
    { name: 'Hibernate' },
    { name: 'JPA' },
    { name: 'JSF' },
    { name: 'Struts' },
    { name: 'JBoss Seam' },
  ];

  ngOnInit(): void {
  }

  constructor() {
  }

  dropServer(event: CdkDragDrop<Chip[]>) {
    moveItemInArray(this.servers, event.previousIndex, event.currentIndex);
  }

  dropDataBase(event: CdkDragDrop<Chip[]>) {
    moveItemInArray(this.databases, event.previousIndex, event.currentIndex);
  }

  dropFrame(event: CdkDragDrop<Chip[]>) {
    moveItemInArray(this.frames, event.previousIndex, event.currentIndex);
  }

  dropWeb(event: CdkDragDrop<Chip[]>) {
    moveItemInArray(this.webs, event.previousIndex, event.currentIndex);
  }

}
