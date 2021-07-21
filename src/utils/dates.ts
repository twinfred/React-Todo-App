import { format } from 'date-fns';

function formatDate(date: string): string {
  return format(new Date(date), 'MM/dd/yyyy');
}

export {
  formatDate,
}