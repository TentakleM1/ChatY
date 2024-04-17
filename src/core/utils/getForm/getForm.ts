import { validation } from '../validation/validation';

export function getForm(typeId: string) {
  const data: Record<string, string> = {};
  const checkData: Record<string, string>[] = [];

  const allInput = document.querySelectorAll('input');

  if(typeId) {

    const popUp = document.getElementById(typeId);

    data['message'] = popUp.value;

    Object.entries(data).forEach((item) => {
      validation(item[0], item[1]).forEach((errors: any) => {
        checkData.push(errors);
      });
    });

  } else {
    allInput.forEach((item) => {
      data[item.name] = item.value;
    });
  
    Object.entries(data).forEach((item) => {
      validation(item[0], item[1]).forEach((errors: any) => {
        checkData.push(errors);
      });
    });
  }

  if (checkData.length != 0) {
    alert(checkData);
  } else {
    delete data.repitPassword;
    return data;
  }
}
