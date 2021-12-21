# NgJvxGroupPipe

ng-jvx-group-pipe is a simple pipe that groups the elements of an array.

## Install ng-jvx-group-pipe

```
npm install ng-jvx-group-pipe --save
```

In <b>app.module.ts</b>

```typescript
import {NgJvxGroupPipeModule} from 'ng-jvx-group-pipe';

@NgModule({
  imports: [
    NgJvxGroupPipeModule
  ]
})
```

## API
The pipe will transform any array of `T` in an array of object
```typescript
{
    group: string;
    items: T[];
}
```

### Inputs

| Name        | Type     | Description                        |
|-------------|----------|------------------------------------|
| `groupName` | `string` | The name of the grouping property. |

## Example
In <b>example-component.ts</b>
```typescript
export class ExampleComponent {
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
```
In <b>example-component.html</b>

```angular2html
  <div>
    <div style="margin-bottom: 10px"><strong>Grouped animals</strong></div>
    <div *ngFor="let groupedAnimals of (animals | groupBy: 'class')">
      <div><strong>{{groupedAnimals.group}}</strong></div>
      <div *ngFor="let animal of groupedAnimals.items" style="padding-inline: 10px">
        {{animal.commonName}} - {{animal.species}}
      </div>
    </div>
  </div>
```

Result:

![result](https://github.com/giovanni-venturelli/ng-jvx-group-pipe/blob/main/blob/grouped-example.png?raw=true)
