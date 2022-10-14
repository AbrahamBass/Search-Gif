import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../Services/http.service'
import {FormGroup, FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private HttpService: HttpService, private FormBuilder: FormBuilder) { }

  searchGroup: FormGroup = new FormGroup({})
  items: any = []
  data: string = ''

  ngOnInit(): void {
    this.searchGroup = this.FormBuilder.group({
      search: ''
    })

    this.HttpService.obtenerDatos().subscribe(
      (res) => {
        this.items = res.data;
      }
    )
  }

  buscar(datos: string) {
    this.HttpService.obtenerDatos(datos).subscribe(
      (res) => {
        this.items = res.data;
      }
    )
    this.data = this.searchGroup.value.search 
    this.searchGroup.reset()
  }

}
