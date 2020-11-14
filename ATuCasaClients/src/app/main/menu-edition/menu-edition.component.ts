import { Component, OnInit, ViewChild } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { ContextMenu } from 'primeng/contextmenu';


@Component({
  selector: 'app-menu-edition',
  templateUrl: './menu-edition.component.html',
  styleUrls: ['./menu-edition.component.scss'],
})
export class MenuEditionComponent implements OnInit {

  @ViewChild('cMenu') cMenu:ContextMenu;

  storeMenu: any[] = [
    {
      nombre: 'Categoria 1',
      items: [
        {
          nombre: 'Producto 1',
          descripcion: 'Esse occaecat aute sint laboris sunt elit.',
          image_path: "https://picsum.photos/id/684/400/400",
          costo_base: 50000,
          costo_descuento: 25000,
          disponible: true,
        },

        {
          nombre: 'Producto 2',
          descripcion: 'Esse occaecat aute sint laboris sunt elit.',
          image_path: "https://picsum.photos/id/684/400/400",
          costo_base: 25000,
          costo_descuento: null,
          disponible: true,
        },

        {
          nombre: null,
          descripcion: null,
          image_path: null,
          costo_base: null,
          costo_descuento: null,
          disponible: false,
        },

        {
          nombre: 'Producto 1',
          descripcion: 'Esse occaecat aute sint laboris sunt elit.',
          image_path: "https://picsum.photos/id/684/400/400",
          costo_base: 25000,
          costo_descuento: null,
          disponible: true,
        },
      ],
    },
  ];

  itemMenu:MenuItem[]= [
    {label:"Editar Adicionales", icon: "pi pi-shopping-cart", command: ()=>{
      this.showAdditionalsSidebar = true;
    }},
    {label:"Eliminar Item", icon: "pi pi-trash", command: ()=>{}}
 ];


  selectedContextItem:any;
  showAdditionalsSidebar:boolean = false;

  constructor() {}


  canEnable(item)
  {
    if(!item.nombre) return false;
    if(!item.descripcion) return false;
    if(!item.costo_base) return false;

    return true;
  }

  showItemMenu(event,item)
  {
    event.preventDefault();
    event.stopPropagation();
    this.selectedContextItem = item;
    this.cMenu.show(event);
  }

  ngOnInit(): void {}
}
