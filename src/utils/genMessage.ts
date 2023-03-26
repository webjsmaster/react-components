export function genMessage(type: string) {
  let res = '';
  switch (type) {
    case 'text': {
      res = 'The length > 1 and < 15';
      break;
    }
    case 'date': {
      res = 'Enter the date';
      break;
    }
    case 'file': {
      res = 'This not file';
      break;
    }
    case 'select': {
      res = 'Select the menu item';
      break;
    }
  }

  return res;
}
