import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';
import { FieldError } from 'react-hook-form'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement>{
  label?: string;
  error?: FieldError;
}

export const Input = forwardRef(({label, error, disabled, ...rest }: IInputProps, ref: ForwardedRef<HTMLInputElement>) => {
  return(
    <div>
      <div>
        {label ? <label>{label}</label> : null}
        <input ref={ref} {...rest} />
      </div>
      {error ? <p>{error.message}</p> : null}
    </div>
  )
});