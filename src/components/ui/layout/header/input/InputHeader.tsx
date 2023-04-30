import { FC, useEffect, useState } from 'react';
import scss from './InputHeader.module.scss';
import cn from 'classnames';
import { useActions, useAppSelector } from '../../../../../hooks/redux';

const InputHeader: FC = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const { handlerInput } = useActions();

  const { inputValue: inputStore } = useAppSelector((state) => state.cardReducer);

  useEffect(() => {
    setInputValue(inputStore);
  }, [inputStore]);

  const handleSearch = () => {
    handlerInput(inputValue);
  };
  const handleInput = (e: string) => {
    setInputValue(e);
  };

  const handleClear = () => {
    setInputValue('');
    handlerInput('');
  };

  return (
    <div className={scss.wrapper}>
      <input
        type="text"
        value={inputValue}
        placeholder={'Input for search'}
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
      <div className={cn(scss.ico, 'top-2 right-0')} onClick={handleClear}>
        <svg viewBox="0 0 612 612" xmlSpace="preserve" width="20" height="20">
          <g>
            <path d="M301.258,256.01L502.645,54.645c12.501-12.501,12.501-32.769,0-45.269c-12.501-12.501-32.769-12.501-45.269,0l0,0   L256.01,210.762L54.645,9.376c-12.501-12.501-32.769-12.501-45.269,0s-12.501,32.769,0,45.269L210.762,256.01L9.376,457.376   c-12.501,12.501-12.501,32.769,0,45.269s32.769,12.501,45.269,0L256.01,301.258l201.365,201.387   c12.501,12.501,32.769,12.501,45.269,0c12.501-12.501,12.501-32.769,0-45.269L301.258,256.01z" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default InputHeader;
