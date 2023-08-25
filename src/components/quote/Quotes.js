import { useEffect, useState } from 'react';
import './quotes.css';

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getQuotes = async () => {
      await fetch(
        'https://api.api-ninjas.com/v1/quotes?category=success&&limit=10',
        {
          headers: { 'X-Api-Key': '4jSXs4kYBN2NYbxRcEH+pQ==9pROL1fNIxazrI0m' },
          contentType: 'application/json',
        },
      )
        .then((res) => res.json())
        .then((jsonData) => {
          setQuotes(jsonData);
          setIsLoading(false);
        })
        .catch((err) => err);
    };
    getQuotes();
  }, []);

  return (
    <div className="main">
      <h1 className="quotes-title">get inspired by this success quotes</h1>
      {isLoading === false ? (
        quotes.map((item) => (
          <blockquote
            data-testid="qte"
            key={item.quote.toString()}
            className="quote-text"
          >
            <p data-testid="qt" className="quote">
              {item.quote}
            </p>
            <footer>
              <cite>
                -
                {item.author}
              </cite>
            </footer>
          </blockquote>
        ))
      ) : (
        <div>
          <blockquote className="blockquote-loading">
            <p className="quote-loading skeleton" />
            <footer>
              <cite className="author-loading skeleton" />
            </footer>
          </blockquote>

          <blockquote className="blockquote-loading">
            <p className="quote-loading skeleton" />
            <footer>
              <cite className="author-loading skeleton" />
            </footer>
          </blockquote>
        </div>
      )}
    </div>
  );
};

export default Quotes;
