/** @format */

import { useState } from 'react';
import gif from './assets/gif.mp4';
import { checkPalindrome } from './utility';
// import { checkPalindrome } from '../utility';

const Main = () => {
  const [enteredInput, setEnteredInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [flag, setFlag] = useState();
  const [nextPalindromeDate, setNextPalindromeDate] = useState('');
  const [formatDateString, setFormatDateString] = useState('');
  const [daysMissed, setDaysMissed] = useState(0);
  const [format, setFormat] = useState('');

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      console.log('hii');
      checkPalindrome(
        enteredInput,
        setFlag,
        setFormat,
        setDaysMissed,
        setNextPalindromeDate,
        setFormatDateString,
        setLoading
      );
    }, 2000);
  };

  return (
    <>
      {console.log('', nextPalindromeDate)}
      <div>
        <form onSubmit={handleOnSubmit}>
          <div>
            <input
              type="date"
              name="userInput"
              id="userInput"
              onChange={(e) => setEnteredInput(e.target.value)}
              required
            />
            <button type="submit" className="bg-white">
              Check
            </button>
          </div>
        </form>
      </div>
      <div>
        {loading && <img src={gif} alt="giphy" />}
        {flag === true && !loading && (
          <div>
            <div>
              <h1>Kudos !</h1>
              <h2>
                Your birthdate is a <span>palindrome</span> .
              </h2>
              <h3>
                in format : <span>{format}</span> .
              </h3>
            </div>
          </div>
        )}
        {flag === false && !loading && (
          <div>
            <div>
              <h1>Oh Snap ! </h1>
              <div>
                <h2>
                  Your birthdate is <span>not a palindrome</span> .
                </h2>
              </div>
              <h3>
                Next palindrome date : <span>{nextPalindromeDate}</span> , in
                Format : {formatDateString} .
              </h3>
              <h3>
                You missed it by <span>{daysMissed} </span>
                Day{daysMissed === 1 ? '' : 's'} .
              </h3>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Main;
