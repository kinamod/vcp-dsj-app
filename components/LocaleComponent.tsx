import { useEffect, useState } from 'react';
import { RenderBuilderContent } from "./builder";

const LocaleComponent = () => {
  const [locale, setLocale] = useState<any | null>(null);

  useEffect(() => {
    // Access the browser's language on the client side
    const browserLocale = navigator.language;
    setLocale(browserLocale);
  }, []);

  return (
    <>
      <div>
        {locale ? (
          <p>Browser Locale: {locale}</p>
        ) : (
          <p>Loading locale...</p>
        )}
      </div>
      </>
  );
};

export default LocaleComponent;
