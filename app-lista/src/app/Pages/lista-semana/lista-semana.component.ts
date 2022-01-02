import { Component, OnInit } from '@angular/core';
import { ListasService } from '../../Service/listas.services';
import { Listas } from '../../Model/listas.model';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Lucas da Silva Maciel', weight: 'ir', symbol: 'H'},
  {position: 2, name: 'Lucas moreira da silva Azevedo', weight: 'voltar', symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 'vouevolto2', symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 'voltar', symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 'ir', symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 'ir', symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 'ir', symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 'ir', symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 'ir', symbol: 'F'},
  {position: 10, name: 'Neon', weight: 'ir', symbol: 'Ne'},
];
@Component({
  selector: 'app-lista-semana',
  templateUrl: './lista-semana.component.html',
  styleUrls: ['./lista-semana.component.css'],
  providers: [ListasService]
})
export class ListaSemanaComponent implements OnInit {
  displayedColumns: string[] = ['name', 'weight'];
  dataSource = ELEMENT_DATA;
  constructor(private listasService: ListasService) { }

  ngOnInit() {
  }

  

}

