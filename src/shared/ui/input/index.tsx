import { forwardRef } from 'react';

import styles from './input.module.css';

type InputProps = React.ComponentProps<'input'>;

/**
 * @ui Input компонент
 */
export const Input = forwardRef<HTMLInputElement, InputProps>((props: InputProps, ref) => {
    return <input {...props} ref={ref} className={[styles.input, props.className].join(' ')} />;
});
