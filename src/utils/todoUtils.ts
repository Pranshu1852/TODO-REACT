import { PriorityType, StatusType } from '../components/Todo';

function formatDate(date: Date) {
  const yyyy = date.getFullYear();
  let mm: string | number = date.getMonth() + 1;
  let dd: string | number = date.getDate();

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
      break;
    }
    case StatusType.COMPLETED: {
      return 'text-green-600';
      break;
    }
    default: {
      return '';
      break;
    }
  }

  return '';
}

export { formatDate, getPriorityColor, getStatusColor };
