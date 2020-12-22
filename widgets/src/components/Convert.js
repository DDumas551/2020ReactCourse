import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debounce, setDebounce] = useState(text);

  const doTranslation = async () => {
    const { data } = await axios.post(
      "https://translation.googleapis.com/language/translate/v2",
      {},
      {
        params: {
          q: debounce,
          target: language.value,
          key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
        },
      }
    );
    setTranslated(data.data.translations[0].translatedText);
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebounce(text);
    }, 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    doTranslation();
  }, [debounce, language]);
  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
