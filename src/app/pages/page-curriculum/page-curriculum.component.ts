import { Component, OnInit } from '@angular/core';

export interface CurriculumJerry {
  posicion: string;
  descripcion: string;
  compania: string;
  fecha: string;
}

const ELEMENT_DATA: CurriculumJerry[] = [
  {posicion: 'Analista de Soporte', descripcion: 'Soporte a aplicaciones bancarias BBVA sobre la arquitectura Front-End', compania: 'BBVA', fecha: '04/17-12/17'},
  {posicion: 'Maquetador WEB', descripcion: 'Mailings, maquetado HTML, Photoshop, Illustrator, CSS', compania: 'Toro Digital', fecha: '01/18-06/17'},
  {posicion: 'Programador WEB', descripcion: 'Componentes Web y funciones AJAX utilizando Polymer, jQuery, y LitElement', compania: 'Movivendor', fecha: '06/18-01/19'},
  {posicion: 'Programador Angular', descripcion: 'Tablas con Angular y TypeScript, componentes Material, formularios reactivos, consumo de servicios..', compania: 'Ahorra Seguros', fecha: '02/19-12/19'},
  {posicion: 'Programador Angular', descripcion: 'Proyecto de Cajas para operaciones bancarias, consumo de servicios, seguridad, routing, Material , RxJS, Angular 9, Integración Continua y Git', compania: 'Te Creemos', fecha: '03/20-11/21'},
];

@Component({
  selector: 'app-page-curriculum',
  templateUrl: './page-curriculum.component.html',
  styleUrls: ['./page-curriculum.component.scss']
})
export class PageCurriculumComponent implements OnInit {
  displayedColumns: string[] = ['compania', 'descripcion', 'posicion',  'fecha', ];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
