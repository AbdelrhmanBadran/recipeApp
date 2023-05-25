import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(meals: any[], searchTerm: string): any[] {

    return meals.filter( meal => meal.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

}
