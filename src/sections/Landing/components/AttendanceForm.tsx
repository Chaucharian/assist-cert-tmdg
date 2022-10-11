import {
  Flex,
  Spacer,
  Text,
  Button,
  Link,
  TextButton,
  Box,
} from '@/components/dom'
import theme, { device, fonts } from '@/styles/theme'
import useStore from '@/helpers/store'
import React, { useEffect, useState } from 'react'
import Line from '@/components/dom/Line'
import { FormTextField } from '@/components/dom/Form'
import { useForm } from 'react-hook-form'
import { FormCheckbox, FormRadio } from '@/components/dom/Form'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import AppearingEffect from '../../../components/dom/AppearingEffect'

const Message = ({ show, message, error = true }) => (
  <Box
    style={{ overflow: 'hidden' }}
    pt={theme.spacing.small}
    pl={theme.spacing.small}
  >
    <Box animate={{ y: show ? '0%' : '-200%' }}>
      <Text type={theme.fonts.span} color={error ? 'white' : '#3ce78c'}>
        {message}
      </Text>
    </Box>
  </Box>
)

const AttendanceForm = () => {
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      ticket: '',
    },
  })

  const submitForm: any = useMutation(
    (payload) => {
      return axios.post('/api/email/send', payload)
    },
    { onSuccess: () => reset() }
  )

  const submit = (form) => {
    submitForm.mutate({
      sender: {
        name: 'contact form',
        email: 'marplacode@gmail.com',
        password: process.env.SENDER_PASSWORD_FORM,
      },
      recipient: {
        email: 'hello@marplacode.com',
      },
      subject: 'Work inquiry!',
      content: JSON.stringify(form),
    })
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
      }}
    >
      <Flex flexDirection='column' pt='50px' width='600px'>
        <AppearingEffect
          effect={'bottom'}
          animationProps={{ delay: 4000, minWidth: '400px' }}
        >
          <Text type={theme.fonts.span}>Email*</Text>
          <FormTextField
            control={control}
            name='email'
            inputmode='email'
            placeholder='tmdg@20.ar'
            enterkeyhint='next'
            rules={{
              required: 'we need your email to reach out to you 🙏',
              pattern: {
                message: 'formato de mail invalido',
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              },
            }}
          />
        </AppearingEffect>
        <Message
          show={errors?.email?.message}
          message='formato de mail invalido'
        />
        <Spacer vertical={'62px'} />
        <AppearingEffect
          effect={'bottom'}
          animationProps={{ delay: 3500, minWidth: '400px' }}
        >
          <Text type={theme.fonts.span}>Numero de ticket*</Text>
          <FormTextField
            control={control}
            name='name'
            placeholder='123456'
            enterkeyhint='next'
            rules={{
              required: `campo requerido`,
            }}
          />
        </AppearingEffect>
        <Message show={errors?.name?.message} message='campo requerido' />
        <Spacer vertical={'62px'} />
        <AppearingEffect
          effect={'bottom'}
          animationProps={{ delay: 4000, minWidth: '400px' }}
        >
          <Button type='submit' onClick={handleSubmit(submit)}>
            Generar
          </Button>
        </AppearingEffect>
        <Spacer vertical={'62px'} />
      </Flex>
    </form>
  )
}

export default AttendanceForm
