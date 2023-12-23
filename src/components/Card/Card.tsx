import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

import { FaXTwitter } from 'react-icons/fa6';

import { useRandomQuote } from '../../CustomHook/useRandomQuote';
import './Card.css';

const Card = () => {
  const [quote, setRandomQuote] = useRandomQuote();

  const changeQuote = () => {
    setRandomQuote();
  };

  return (
    <div
      className='quote-box'
      id='quote-box'
    >
      <header className='box-header'>
        <section>
          <FaQuoteLeft />
          <span
            className='text'
            id='text'
          >
            {quote.text}
          </span>
          <FaQuoteRight />
          <p
            className='author'
            id='author'
          >
            {quote.author}
          </p>
        </section>

        <section>
          <a
            target='_blank'
            href={`https://twitter.com/intent/tweet?text=${quote.text} ${quote.author}`}
            id='tweet-quote'
          >
            <FaXTwitter className='twitter'
              color={'gray'}
              size='2rem'
            />
          </a>
        </section>
      </header>

      <button
        type='button'
        id='new-quote'
        className='new-quote'
        onClick={changeQuote}
      >
        New quote
      </button>
    </div>
  );
};

export default Card;
