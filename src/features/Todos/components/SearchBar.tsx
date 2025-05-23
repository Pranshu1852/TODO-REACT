import SearchIcon from '@mui/icons-material/Search';
import type { ChangeEvent } from 'react';

interface SearchBar{
    value: string;
    handleChange: (event: ChangeEvent<HTMLInputElement>)=>void;
}

function SearchBar({value, handleChange}: SearchBar) {
  return (
    <div className="flex flex-row items-center gap-2 border-2 border-black p-2 rounded-lg w-full">
      <SearchIcon />
      <input
        value={value}
        onChange={handleChange}
        className="outline-none bg-transparent w-full"
        type="text"
        placeholder="Search Todo..."
      />
    </div>
  );
}

export default SearchBar;
