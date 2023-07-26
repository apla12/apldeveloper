import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  panelOpenState = false;

  servers: any[] = [
    { name: 'weblogic', value: 10 },
    { name: 'jboss', value: 10 },
    { name: 'tomcat', value: 10 },
  ];

  databases: any[] = [
    { name: 'SQLServer', value: 10 },
    { name: 'Oracle', value: 10 },
    { name: 'MySql', value: 10 },
    { name: 'PostgreSQL', value: 10 },
    { name: 'MongoDB', value: 10 },
  ];

  integrationServer: any[] = [
    { name: 'maven', value: 10 },
    { name: 'jenkins', value: 10 },
    { name: 'sonar', value: 10 },
  ];

  webs: any[] = [
    { name: 'Angular(+2)', value: 10 },
    { name: 'Typescript', value: 10 },
    { name: 'Bootstrap', value: 10 },
    { name: 'JavaScript', value: 10 },
    { name: 'CSS', value: 10 },
    { name: 'cypress', value: 10 },
    { name: 'jasmine', value: 10 },
    { name: 'Material UI', value: 10 },
    { name: 'Flex', value: 10 },
    { name: 'JQuery', value: 10 },
  ];

  frames: any[] = [
    { name: 'Spring Boot', value: 10 },
    { name: 'Spring Security', value: 10 },
    { name: 'Spring Data', value: 10 },
    { name: 'JPA', value: 10 },
    { name: 'Hibernate', value: 10 },
    { name: 'EJB', value: 10 },
    { name: 'JSF', value: 10 },
    { name: 'cucumber', value: 10 },
    { name: 'Go - GoLang', value: 10 },
  ];

  languagePT: any[] = [
    { name: 'Reading', value: 100 },
    { name: 'Writing', value: 100 },
    { name: 'Speaking', value: 100 },
  ];

  languageEN: any[] = [
    { name: 'Reading', value: 100 },
    { name: 'Writing', value: 100 },
    { name: 'Speaking', value: 100 },
  ];

  languageES: any[] = [
    { name: 'Reading', value: 100 },
    { name: 'Writing', value: 100 },
    { name: 'Speaking', value: 100 },
  ];

  graduate: any[] = [
    { name: 'Institution', value: 'Catholic University of Brasilia, Brazil' },
    { name: 'Degree', value: 'Systems Development with Java' },
    { name: 'Date (Year)', value: '2012 - 2017' },
  ];

  postgraduate: any[] = [
    { name: 'Institution', value: 'University Unyleya of Brasilia, Brazil' },
    { name: 'Degree', value: 'Systems Development with Java' },
    { name: 'Date (Year)', value: '2019 – 2020' },
  ];

  constructor(public el: ElementRef) {}
}
