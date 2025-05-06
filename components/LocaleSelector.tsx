'use client'; // if using /app directory

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LocaleSelector() {
  const [localeSelected, setLocale] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false); // Track dropdown state

 
  const router = useRouter();
 

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle dropdown visibility
  };

  const handleLinkClick = (path: string) => {
    router.push(path); // Navigate to the selected page
    setIsOpen(false); // Close the dropdown after selecting
  };

  return (
    <>
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-button">
        Choose an Option
      </button>

      {isOpen && (
        <ul className="dropdown-menu">
          <li>
            <button onClick={() => handleLinkClick('/en-GB/saas-4-u')}>
              UK English
            </button>
          </li>
          <li>
            <button onClick={() => handleLinkClick('/en-US/saas-4-u')}>
              US English
            </button>
          </li>
          <li>
            <button onClick={() => handleLinkClick('/fr-FR/saas-4-u')}>
              French
            </button>
          </li>
        </ul>
      )}
    </div>
    </>
  );
}