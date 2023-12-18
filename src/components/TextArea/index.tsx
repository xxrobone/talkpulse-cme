import { FC } from 'react';
import styles from './Textarea.module.scss';

interface TextProps {
 /*  label: string; */
  name: string;
/*   value: string | number; */
  placeholder: string;
  error: boolean;
  disabled?: boolean;
  id: string;
 /*  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void; */
}

const TextArea: FC<TextProps> = ({
  name,
  placeholder,
  error,
  disabled,
  id,
}) => {
  return (
    <div className={styles['textarea-wrapper']}>
 {/*      <label
        htmlFor={label}
        className='text-lg font-semibold block text-gray-700 font-bold mb-2 '
      >
        {label}
      </label> */}
      <textarea
        className='shadow appearance-none border rounded w-full h-72 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-current placeholder-[#667085]'
        id={id}
      /*   value={value} */
        name={name}
        placeholder={placeholder}
        disabled={disabled}
       /*  onChange={onChange} */
      ></textarea>
      {error && (
        <p className='text-[#db4437] text-sm font-normal ml-3 mt-1'>
          This field can't be empty
        </p>
      )}
    </div>
  );
};

export default TextArea;
