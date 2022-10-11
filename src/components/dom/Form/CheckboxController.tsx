import { Children, FC } from 'react'
import { SpectrumTextFieldProps } from '@react-types/textfield'
import { useController } from 'react-hook-form'
import Button from '../Button'
import styled from 'styled-components'
import { space, compose } from 'styled-system'

const Container = styled.div`
  display: inline-block;
  input {
    display: none;
  }

  ${compose(space)}
`

export interface FormButtonProps extends SpectrumTextFieldProps {
  name: string
  control: any
  rules?: any
  defaultValue?: any
  [x: string]: any
}

const CheckboxController: FC<FormButtonProps> = ({
  name,
  label,
  control,
  rules,
  defaultValue = false,
  children,
  ...props
}) => {
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
    rules,
    defaultValue,
  })

  return <>{typeof children === 'function' && children({ control })}</>
}

export default CheckboxController
