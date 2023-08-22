import { RegisterOptions } from 'react-hook-form'

export interface InputProps {
  name: string
  type?: string
  hideErrors?: boolean
  className?: string
  placeholder?: string
  step?: string
  defaultValue?: string | number | readonly string[] | undefined
  validators?: RegisterOptions
}
