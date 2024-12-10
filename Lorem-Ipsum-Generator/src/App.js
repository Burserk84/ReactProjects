import { useState } from "react";
import dataFa from "./DataFa";
import dataEn from "./DataEn";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const [language, setLanguage] = useState('fa'); // Language state

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (amount < 0) amount = 0;
    if (amount > 4) amount = 4;
    const data = language === 'fa' ? dataFa : dataEn;
    setText(data.slice(0, amount));
  };

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'fa' ? 'en' : 'fa'));
  };

  return (
    <div className="container">
      <button className="language-toggle" onClick={toggleLanguage}>
        {language === 'fa' ? 'EN' : 'FA'}
      </button>
      <h4>{language === 'fa' ? 'لورم ساز اصغر مشتی' : 'Lorem Ipsum Generator'}</h4>
      <div className="question">
        <p>{language === 'fa' ? 'تعداد پاراگراف: ' : 'Number of paragraphs: '}</p>
        <input
          type="number"
          name="total"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          {language === 'fa' ? 'بساز' : 'Generate'}
        </button>
      </div>
      <article className="lorems">
        {text.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </article>
    </div>
  );
}

export default App;
