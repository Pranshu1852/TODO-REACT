import { PriorityType, StatusType } from '../components/Todo';

function formatDate(date: Date) {
  const newDate = new Date(date);
  const yyyy = newDate.getFullYear();
  let mm: string | number = newDate.getMonth() + 1;
  let dd: string | number = newDate.getDate();

  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }

  return dd + '/' + mm + '/' + yyyy;
}

function getPriorityColor(priority: PriorityType) {
  switch (priority) {
    case PriorityType.HIGH: {
      return 'text-red-600';
    }
    case PriorityType.MEDIUM: {
      return 'text-orange-600';
    }
    case PriorityType.LOW: {
      return 'text-yellow-600';
    }
    default: {
      return '';
    }
  }
}

function getStatusColor(status: StatusType) {
  switch (status) {
    case StatusType.NOTSELECTED: {
      return 'text-purple-600';
    }
    case StatusType.INPROGRESS: {
      return 'text-blue-600';
    }
    case StatusType.COMPLETED: {
      return 'text-green-600';
    }
    default: {
      return '';
    }
  }
}

export { formatDate, getPriorityColor, getStatusColor };
