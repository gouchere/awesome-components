import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'shorten',
})
export class ShortenPipe implements PipeTransform {
  transform(value: string, maxLength: number = 50): string {
    return value.length <= maxLength
      ? value
      : value.substring(0, maxLength) + '...'
  }
}
