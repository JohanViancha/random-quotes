import { useState } from 'react';
import { Quote } from '../Models/Quote.interface';
import { quoteList } from '../Models/Quotes';

const useRandomQuote = (): [Quote, () => void] => {

  const generaRandomQuote = (): number => Math.floor(Math.random() * 20);

  const [quote, setQuote] = useState(quoteList[generaRandomQuote()] as Quote);

  const setRandomQuote = (): void => setQuote(quoteList[generaRandomQuote()]);

  return [quote, setRandomQuote];
};

export { useRandomQuote };
