import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'timePipe'
})
export class TimePipePipe implements PipeTransform {

  transform(dateString: number, ...args: unknown[]): unknown {
    // date from the posts from today's date
    return moment(dateString).fromNow();

}
}
