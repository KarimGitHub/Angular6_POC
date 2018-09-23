import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(values: any[], searchText : any): any[] {
     
    if(!searchText) return values;
    if(!values) return [];

    searchText = searchText.toLowerCase();
    
    return values.filter(item => {
     return (item['name'].toLowerCase().indexOf(searchText) > -1 ||
      item['age'].toLowerCase().indexOf(searchText) > -1 ||
      item['phoneNo'].toLowerCase().indexOf(searchText) > -1 ) && item['age'] >= 20
    });
  }
}
