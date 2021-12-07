/** @format */

// Check if input data is a palindrome.
const isPalindrome = (input) => {
  let reversedString = input.split('').reverse().join('');
  if (reversedString === input) return true;
};

// Find the next possible palindrome.
const nextPalindrome = (
  enteredInput,
  setDaysMissed,
  setNextPalindromeDate,
  setFormatDateString,
  setIsLoading
) => {
  let temp = new Date(enteredInput);
  let count = 0;
  temp.setDate(temp.getDate() + 1);
  while (1) {
    count++;
    setDaysMissed(count);
    let dateString = temp.toISOString().substring(0, 10).replaceAll('-', '');
    let year = dateString.substring(0, 4);
    let month = dateString.substring(4, 6);
    let day = dateString.substring(6, 8);

    //YYYY-MM-DD
    let dateFormat1 = dateString;
    //DD-MM-YYYY
    let dateFormat2 = day + month + year;
    //MMDDYY
    let dateFormat3 = month + day + year.substring(2, 4);

    if (isPalindrome(dateFormat1)) {
      setNextPalindromeDate(year + '-' + month + '-' + day);
      setFormatDateString('YYYY-MM-DD');
      break;
    } else if (isPalindrome(dateFormat2)) {
      setNextPalindromeDate(day + '-' + month + '-' + year);
      setFormatDateString('DD-MM-YYYY');
      break;
    } else if (isPalindrome(dateFormat3)) {
      setNextPalindromeDate(month + '-' + day + '-' + year.substring(2, 4));
      setFormatDateString('MM-DD-YY');
      break;
    }
    temp.setDate(temp.getDate() + 1);
  }

  setIsLoading(false);
};

// Check if input is palindrome in all possible formats.
export const checkPalindrome = (
  enteredInput,
  setFlag,
  setFormat,
  setDaysMissed,
  setNextPalindromeDate,
  setFormatDateString,
  setIsLoading
) => {
  let date = enteredInput.replaceAll('-', '');
  let year = date.substring(0, 4);
  let month = date.substring(4, 6);
  let day = date.substring(6, 8);

  //YYYY-MM-DD
  let dateFormat1 = date;
  //DD-MM-YYYY
  let dateFormat2 = day + month + year;
  //MM-DD-YYYY
  let dateFormat3 = month + day + year.substring(2, 4);

  if (isPalindrome(dateFormat1)) {
    setFlag(isPalindrome(dateFormat1));
    setFormat(year + '-' + month + '-' + day);
    setFormatDateString('YYYY-MM-DD');
    setIsLoading(false);

    return;
  } else if (isPalindrome(dateFormat2)) {
    setFlag(isPalindrome(dateFormat2));
    setFormat(day + '-' + month + '-' + year);
    setFormatDateString('DD-MM-YYYY');
    setIsLoading(false);

    return;
  } else if (isPalindrome(dateFormat3)) {
    setFlag(isPalindrome(dateFormat3));
    setFormat(month + '-' + day + '-' + year.substring(2, 4));
    setFormatDateString('MM-DD-YY');
    setIsLoading(false);

    return;
  } else {
    setFlag(false);
    nextPalindrome(
      enteredInput,
      setDaysMissed,
      setNextPalindromeDate,
      setFormatDateString,
      setIsLoading
    );
  }
};
