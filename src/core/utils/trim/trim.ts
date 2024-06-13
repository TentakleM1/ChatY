function trim(string: string, chars?: string): string {
    if (chars === undefined) {
      chars = " ";
    }
  
    // Удаление символов из начала строки
    while (string && chars.includes(string[0])) {
      string = string.slice(1);
    }
  
    // Удаление символов из конца строки
    while (string && chars.includes(string[string.length - 1])) {
      string = string.slice(0, -1);
    }
  
    return string;
  }

  export default trim;
  
