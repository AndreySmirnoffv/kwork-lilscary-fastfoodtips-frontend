import classNames from '@shared/lib/classnames';
import { Props } from '../model/type';
import s from './Input.module.scss';
import { ForwardedRef, forwardRef, useState } from 'react';

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ title, error, onChange, className, prevLetter, maxLength, type = 'text', ...props }: Props, ref?: ForwardedRef<HTMLInputElement>) => {
    const [value, setVlaue] = useState('');

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (maxLength && e.target.value.length > maxLength) setVlaue(value);
      else setVlaue(e.target.value);

      if (onChange) {
        onChange(e);
      }
    };

    return (
      <div className={s.container}>
        {title && <p className={s.title}>{title}</p>}
        <div className={s['input-container']}>
          {prevLetter && <p className={s['prev-letter']}>{prevLetter}</p>}
          <input
            ref={ref}
            className={classNames(s.input, className, { [s['input-letter']]: !!prevLetter })}
            value={value}
            type={type}
            onChange={handleInput}
            {...props}
          />
        </div>
        {error && <p className={s.error}>{error}</p>}
      </div>
    );
  }
);
