import { FC, useContext, useEffect, useRef, useState } from 'react';
import scss from './InputHeader.module.scss';
import { HomeContext } from '../../../../../context';

const InputHeader: FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const valueRef = useRef<string>();

  const { foundHandler } = useContext(HomeContext);

  useEffect(() => {
    if (localStorage.getItem('search')) {
      setInputValue(localStorage.getItem('search') as string);
      foundHandler(localStorage.getItem('search') as string);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (typeof valueRef.current === 'string') {
        localStorage.setItem('search', valueRef.current);
      }
    };
  }, []);

  const handleSearch = () => {
    foundHandler(inputValue);
  };
  const handleInput = (e: string) => {
    valueRef.current = e;
    setInputValue(e);
  };

  return (
    <div className={scss.wrapper}>
      <input
        type="text"
        value={inputValue}
        placeholder={'InputHeader for search'}
        className={scss.input}
        onChange={(e) => handleInput(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
      />
      <div className={scss.ico} onClick={handleSearch}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          height="40px"
          version="1.1"
          viewBox="0 0 512 512"
          width="40px"
          xmlSpace="preserve"
        >
          <path d="M219.5,327C160.776,327,113,279.224,113,220.5S160.776,114,219.5,114S326,161.776,326,220.5S278.224,327,219.5,327z   M219.5,146c-41.08,0-74.5,33.42-74.5,74.5s33.42,74.5,74.5,74.5s74.5-33.42,74.5-74.5S260.58,146,219.5,146z" />
          <path d="M380.414,400.222c-3.215,0-6.313-1.172-8.723-3.3l-103.17-91.114c-5.447-4.812-5.964-13.157-1.153-18.602l12.341-13.973  c2.494-2.829,6.097-4.455,9.877-4.455c3.215,0,6.313,1.172,8.723,3.3l103.17,91.114c5.447,4.812,5.964,13.157,1.153,18.602  l-12.341,13.973C387.797,398.596,384.195,400.222,380.414,400.222z" />
        </svg>
      </div>
    </div>
  );
};

export default InputHeader;
