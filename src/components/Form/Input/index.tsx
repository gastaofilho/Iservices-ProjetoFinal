import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';
import { FieldError } from 'react-hook-form'
import { Input, InputProps, FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react'

interface IInputProps extends InputProps{
  label?: string;
  error?: FieldError;
}

export const FormInput = forwardRef(({label, error, ...rest }: IInputProps, ref: ForwardedRef<HTMLInputElement>) => {
  return(
    
    <FormControl isInvalid={!!error}>
        {label ? <FormLabel fontSize={"12px"} fontWeight={"700"}>{label}</FormLabel> : null}
        <Input ref={ref} {...rest} />
      {error ? <FormErrorMessage>{error.message}</FormErrorMessage> : null}
      </FormControl>
  )
});