import React, { useCallback, useRef, useState } from "react";
import styles from "./Search.module.scss";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setValue } from "../../redux/slices/searchSlice";
import { debounce } from "lodash";

const Search: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const value = useAppSelector((state) => state.search.value);
  const dispatch = useAppDispatch();

  const handleChangeInput = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  const handleClear = () => {
    dispatch(setValue(""));
    setInputValue("");
    inputRef.current?.focus();
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateSearchValue = useCallback(
    debounce((str) => dispatch(setValue(str)), 250),
    []
  );

  return (
    <>
      <div className={styles.root}>
        <img className={styles.icon} src="/src/assets/img/search.svg" alt="" />
        <input
          ref={inputRef}
          value={inputValue}
          onChange={handleChangeInput}
          className={styles.input}
          type="text"
          placeholder="Поиск пиццы ..."
        />
        {value !== "" && (
          <img
            className={styles.clearIcon}
            src="/src/assets/img/trash.svg"
            alt=""
            onClick={handleClear}
          />
        )}
      </div>
    </>
  );
};

export default Search;
