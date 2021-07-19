import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'accountNameFilter'
})
export class AccountNameFilterPipe implements PipeTransform {

    //Custom pipe for searching Account holder name
  transform(value: any, searchTerm: any): any {
    return value.filter(function(search:any){
      return search.account_name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
      
    })
  }

}
