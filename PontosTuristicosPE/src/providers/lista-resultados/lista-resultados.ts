import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';


let apiListaUrl = "http://localhost:8100/api/places/category";
let apiListaUrlCategoriaCidade = "http://localhost:8100/api/places?category=";

@Injectable()
export class ListaResultadosProvider {
  cidades: any;

  constructor(public http: Http) {
    console.log('Hello ListaResultadosProvider Provider');

    this.cidades = [
      {id_cidade: 134, nome: 'Recife'},
      {id_cidade: 113, nome: 'Olinda'},
      {id_cidade: 15, nome: 'Arcoverde'},
      {id_cidade: 32, nome: 'Cabo de Santo Agostinho'},
      {id_cidade: 46, nome: 'Caruaru'},
      {id_cidade: 45, nome: 'Carpina'}
  ]

  }

  filterItems(searchTerm){
    
           return this.cidades.filter((cidade) => {
               return cidade.nome.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
           });    
    
       }

  abrirListaLocais(id) {
    var url = apiListaUrl + "/" + id;
    return this.http.get(url)
      .map(res => res.json())
      .catch(res => { return Observable.throw(res) });
  }

  abrirListaLocaisCidade(id_categoria, id_cidade){
    var url = apiListaUrlCategoriaCidade + id_categoria + "&city=" + id_cidade;
    return this.http.get(url)
    .map(res => res.json())
    .catch(res => { return Observable.throw(res) });
  }

}