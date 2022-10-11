import { FC } from 'react'
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
  label: string
  control: any
  rules?: any
  defaultValue?: any
  [x: string]: any
}

const FormRadio: FC<FormButtonProps> = ({
  name,
  label,
  control,
  rules,
  defaultValue = false,
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

  return (
    <Container m={{ _: '6px', md: '12px' }}>
      <input value={label} name={name} type='radio' />
      <Button
        selected={value === label}
        onClick={() => onChange(label)}
        selectedTextColor='black'
        secondaryColor='rgba(255, 255, 255, 0.06)'
        {...props}
      >
        {label}
      </Button>
    </Container>
  )
}

export default FormRadio
