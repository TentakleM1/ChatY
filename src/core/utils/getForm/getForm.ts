import { validation } from '../validation/validation';

export function getForm() {
  const data: Record<string, string> = {};
  const checkData: Record<string, string>[] = [];

  const allInput = document.querySelectorAll('input');

  allInput.forEach((item) => {
    data[item.name] = item.value;
  });

  Object.entries(data).forEach((item) => {
    validation(item[0], item[1]).forEach((errors: any) => {
      checkData.push(errors);
    });
  });

  if (checkData.length != 0) {
    alert(checkData);
  } else {
    delete data.repitPassword;
    return data;
  }
}
