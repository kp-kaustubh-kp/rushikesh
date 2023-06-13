import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'admindashboardfilter'
})
export class AdmindashboardfilterPipe implements PipeTransform {

  transform(value: any[], filterString: string, propName: string): any[] {
    const resultArray = [];
    if(value?.length === 0 || filterString === '' || propName === '') {
      return value;
    }
    for(const item of value){
      if(item[propName].trim().toLowerCase().includes(filterString?.toLocaleLowerCase())){
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
