import { useCallback, useEffect, useState } from "react";
import quoteLogo from "./assets/quote.svg";
import LinkedIn from "./assets/linkedin.svg";
import GitHub from "./assets/github.svg";
import "./styles.css";

export default function App() {
  const [quote, setQuote] = useState({});
  const [spinner, setSpinner] = useState(true);
  // let url = `http://api.quotable.io/random`;
  let url = "https://api.quotable.io/random";

  const fetchQuote = useCallback(async () => {
    const response = await fetch(url);
    const json = await response.json();
    setQuote(json);
    setSpinner(false);
  }, [url]);

  useEffect(() => {
    fetchQuote();
  }, [fetchQuote]);

  // console.log(quote);

  return (
    <div className="App">
      <div className="quoteCOntainer">
        <img src={quoteLogo} className="quoteLogo" alt="Quote Logo" />
        {spinner ? (
          <>
            <h4 className="loading">Loading...</h4>
          </>
        ) : (
          <>
            <div className="quote">{quote.content}</div>
            <div className="author">~{quote.author}</div>
          </>
        )}
      </div>
      <button
        onClick={() => {
          setSpinner(true);
          fetchQuote();
        }}
      >
        Genarate Quote
      </button>
      <div className="socials">
        <a target="_blank" rel="noreferrer" href="https://github.com/pman47">
          <img src={GitHub} alt="github" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/pman47/"
        >
          <img src={LinkedIn} alt="linkedin" />
        </a>
      </div>
    </div>
  );
}
