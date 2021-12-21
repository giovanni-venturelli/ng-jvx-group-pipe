import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public animals = [
    {class: 'aves', species: 'erithacus rubecula', commonName: 'European robin'},
    {class: 'mammalia', species: 'canis lupus familiaris', commonName: 'dog'},
    {class: 'reptilia', species: 'trachemys scripta elegans', commonName: 'red-eared slider'},
    {class: 'aves', species: 'columba livia', commonName: 'common pigeon'},
    {class: 'reptilia', species: 'podarcis siculus', commonName: 'Italian wall lizard'},
    {class: 'mammalia', species: 'felis catus', commonName: 'cat'},
    {class: 'mammalia', species: 'panthera leo', commonName: 'lion'},
    {class: 'reptilia', species: 'tarentola mauritanica', commonName: 'common wall gecko'},
    {class: 'aves', species: 'passer domesticus', commonName: 'Old World sparrow'},
  ];
}
