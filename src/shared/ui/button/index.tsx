import { forwardRef } from 'react';

import styles from './button.module.css';

type ButtonProps = {
    variant?: 'ghost' | 'primary';
} & React.ComponentProps<'button'>;

/**
 * @ui Button компонент
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props: ButtonProps, ref) => {
    return (
        <button
            {...props}
            ref={ref}
            className={[styles.button, props.variant && styles[props.variant], props.className].join(' ')}
        >
            {props.children}
        </button>
    );
});
