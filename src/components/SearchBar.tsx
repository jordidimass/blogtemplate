import React, { useState, useEffect } from 'react';
import hotkeys from 'hotkeys-js';

type SearchBarProps = {
  onSearch: (searchTerm: string) => void;
};

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const handleHotkeys = (event: KeyboardEvent, handler: { key: string }) => {
      if (handler.key === 'k+cmd') {
        event.preventDefault();
        (document.getElementById('search-input') as HTMLElement)?.focus();
      }
    };

    hotkeys('*', handleHotkeys);

    return () => {
      hotkeys.unbind('*', handleHotkeys);
    };
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="relative">
      <input
        type="text"
        id="search-input"
        className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        placeholder="Search for blog posts..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button
        type="button"
        className="absolute right-0 top-0 mt-2 mr-4 text-gray-600 focus:outline-none"
        onClick={() => setSearchTerm('')}
      >
        {searchTerm && <i className="fas fa-times"></i>}
      </button>
    </div>
  );
};
// import React, { useState } from 'react';
// import { styled } from '../stitches.config';

// const Input = styled('input', {
//   padding: '0.5rem',
//   borderRadius: '4px',
//   border: '1px solid gray',
//   marginRight: '0.5rem',
// });

// const Button = styled('button', {
//   padding: '0.5rem',
//   borderRadius: '4px',
//   border: 'none',
//   cursor: 'pointer',
//   color: 'white',
//   gradientBg: 'var(--colors-buttonGradientStart) var(--colors-buttonGradientMid) var(--colors-buttonGradientEnd)',
// });

// type SearchBarProps = {
//   onSearch: (searchTerm: string) => void;
// };

// export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = () => {
//     onSearch(searchTerm);
//   };

//   return (
//     <div>
//       <Input
//         type="text"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         placeholder="Search..."
//       />
//       <Button onClick={handleSearch}>Search</Button>
//     </div>
//   );
// };
