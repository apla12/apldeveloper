import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  panelOpenState = false;

  servers: any[] = [
    { name: 'weblogic', value: 50, level: '5 years' },
    { name: 'jboss', value: 60, level: '6 years' },
    { name: 'tomcat', value: 70, level: '7 years' },
  ];

  databases: any[] = [
    { name: 'SQLServer', value: 50, level: '5 years' },
    { name: 'Oracle', value: 40, level: '4 years' },
    { name: 'MySql', value: 50, level: '5 years' },
    { name: 'PostgreSQL', value: 50, level: '5 years' },
    { name: 'MongoDB', value: 30, level: '3 years' },
  ];

  integrationServer: any[] = [
    { name: 'maven', value: 70, level: '7 years' },
    { name: 'jenkins', value: 50, level: '5 years' },
    { name: 'sonar', value: 50, level: '5 years' },
  ];

  webs: any[] = [
    { name: 'Angular(+2)', value: 60, level: '6 years' },
    { name: 'Typescript', value: 60, level: '6 years' },
    { name: 'Bootstrap', value: 80, level: '8 years' },
    { name: 'JavaScript', value: 80, level: '8 years' },
    { name: 'CSS', value: 80, level: '8 years' },
    { name: 'cypress', value: 20, level: '2 years' },
    { name: 'jasmine', value: 20, level: '2 years' },
    { name: 'Material UI', value: 40, level: '4 years' },
    { name: 'Flex', value: 30, level: '3 years' },
    { name: 'JQuery', value: 40, level: '4 years' },
  ];

  frames: any[] = [
    { name: 'Spring Boot', value: 70, level: '7 years' },
    { name: 'Spring Security', value: 60, level: '6 years' },
    { name: 'Spring Data', value: 70, level: '7 years' },
    { name: 'JPA', value: 85, level: '8 years' },
    { name: 'Hibernate', value: 70, level: '7 years' },
    { name: 'EJB', value: 50, level: '5 years' },
    { name: 'JSF', value: 40, level: '4 years' },
    { name: 'cucumber', value: 30, level: '3 years' },
    { name: 'Go - GoLang', value: 20, level: '2 years' },
  ];

  languagePT: any[] = [
    { name: 'Reading', value: 100, level: 'Native' },
    { name: 'Writing', value: 100, level: 'Native' },
    { name: 'Speaking', value: 100, level: 'Native' },
  ];

  languageEN: any[] = [
    { name: 'Reading', value: 70, level: 'Intermediary' },
    { name: 'Writing', value: 60, level: 'Intermediary' },
    { name: 'Speaking', value: 30, level: 'Basic' },
  ];

  languageES: any[] = [
    { name: 'Reading', value: 80, level: 'Intermediary' },
    { name: 'Writing', value: 60, level: 'Intermediary' },
    { name: 'Speaking', value: 70, level: 'Intermediary' },
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
