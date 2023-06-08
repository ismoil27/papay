/*  
F-Task: Shunday function tuzing, unga string argument pass bolsin. 
Function ushbu agrumentdagi faqat digitlarni yangi stringda return qilsin!

Masalan: findDigits('ad5we34jkf89') return qilishi kerak bolgan qiymat '53489'

*/

function findDigits(params) {
  let digits = "";
  for (let i = 0; i < params.length; i++) {
    const char = params.charAt(i);
    console.log(char);
    if (!isNaN(char)) {
      digits += char;
    }
  }
  console.log(digits);
  console.log(typeof digits);
  return digits;
}

const res = findDigits("df34sf5645s4dfsdf5454");
