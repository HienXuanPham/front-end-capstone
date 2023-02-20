import axios from "axios";
import { useState, useEffect } from "react";

const Quote = () => {
  /** ----- External API ----- */
  const [quote, setQuote] = useState("");

  const handleQuote = (quote) => {
    setQuote(quote);
  };

  const getRandomQuote = (quotes) => {
    const index = Math.floor(Math.random() * quotes.length);
    return quotes[index];
  };

  const getQuote = () => {
    return axios
      .get("https://type.fit/api/quotes")
      .then((response) => {
        return response.data;
      })
      .then((quotes) => {
        return getRandomQuote(quotes);
      })
      .catch(() => {
        console.log("error");
      });
  };

  useEffect(() => {
    const loadQuote = async () => {
      const quote = await getQuote();
      if (quote.author === null) {
        quote.author = "Unknow";
      }
      handleQuote(`${quote.text} - ${quote.author}`);
      return;
    };
    loadQuote();
  }, []);

  return <p>{quote}</p>;
};

export default Quote;
