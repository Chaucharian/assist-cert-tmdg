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
import { ref } from 'valtio'

const Message = ({ show, message, error = true }) => (
  <Box
    style={{ overflow: 'hidden' }}
    pt={theme.spacing.small}
    pl={theme.spacing.small}
  >
    <Box animate={{ y: show ? '0%' : '-200%' }}>
      <Text type={theme.fonts.span} color={error ? '#e73c3c' : '#3ce78c'}>
        {message}
      </Text>
    </Box>
  </Box>
)

const ContactForm = () => {
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      budget: '',
      company: '',
      email: '',
      ideas: { web: false, mobile: false, landing: false, product: false },
      message: '',
      name: '',
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
      <Flex flexDirection='column' pl={'10px'} pr={'10px'}>
        <Text type={theme.fonts.span}>Name*</Text>
        <FormTextField
          control={control}
          name='name'
          placeholder='Hello...'
          enterkeyhint='next'
          rules={{
            required: `what's your name?`,
          }}
        />
        <Message show={errors?.name?.message} message="what's your name?" />
        <Spacer vertical={'62px'} />
        <Text type={theme.fonts.span}>Company name</Text>
        <FormTextField
          control={control}
          name='company'
          placeholder='or website?'
          enterkeyhint='next'
        />
        <Spacer vertical={'62px'} />
        <Text type={theme.fonts.span}>Email*</Text>
        <FormTextField
          control={control}
          name='email'
          inputmode='email'
          placeholder='Where can we reply?'
          enterkeyhint='next'
          rules={{
            required: 'we need your email to reach out to you 🙏',
            pattern: {
              message: 'email format is not valid',
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            },
          }}
        />
        <Message
          show={errors?.email?.message}
          message='email format is not valid'
        />
        <Spacer vertical={'62px'} />
        <Flex flexDirection='column'>
          <Text type={theme.fonts.span}> What's in your mind?</Text>
          <Spacer vertical={'32px'} />
          <div>
            <FormCheckbox
              name='ideas.web'
              label='Web development'
              control={control}
            />
            <FormCheckbox
              name='ideas.mobile'
              label='Mobile'
              control={control}
            />
            <FormCheckbox
              name='ideas.landing'
              label='Creative Landing'
              control={control}
            />
            <FormCheckbox
              name='ideas.product'
              label='Product Design'
              control={control}
            />
          </div>
          <Spacer vertical={'16px'} />
          <Line play={true} />
        </Flex>
        <Spacer vertical={'62px'} />
        <Text type={theme.fonts.span}>Budget*</Text>
        <Spacer vertical={'32px'} />
        <div>
          <FormRadio
            name='budget'
            label='5k'
            rules={{
              required: `how much are you willing to pay?`,
            }}
            control={control}
          />
          <FormRadio
            name='budget'
            label='10k'
            rules={{
              required: `how much are you willing to pay?`,
            }}
            control={control}
          />
          <FormRadio
            name='budget'
            label='20k'
            rules={{
              required: `how much are you willing to pay?`,
            }}
            control={control}
          />
          <FormRadio
            name='budget'
            label='>30k'
            rules={{
              required: `how much are you willing to pay?`,
            }}
            control={control}
          />
        </div>
        <Spacer vertical={'16px'} />
        <Line play={true} />
        <Message
          show={errors.budget?.message}
          message={'how much are you willing to pay?'}
        />
        <Spacer vertical={'62px'} />
        <Text type={theme.fonts.span}>Message*</Text>
        <FormTextField
          control={control}
          name='message'
          placeholder='I want to build something something beatiful'
          enterkeyhint='next'
          rules={{
            required: `tell us something about your idea 🤘`,
          }}
          type='textarea'
        />
        <Message
          show={errors?.message?.message}
          message={`tell us something about your idea 🤘`}
        />
        <Spacer vertical={theme.spacing.medium} />
        <Flex width='100%' justifyContent='flex-end'>
          <Box p={{ md: 10 }}>
            <Flex justifyContent='flex-end'>
              <Button
                fontSize='20px'
                secondaryColor='rgba(255, 255, 255, 0.06)'
                selectedTextColor='black'
                type='submit'
                onClick={handleSubmit(submit)}
              >
                Submit
              </Button>
            </Flex>
            <Message
              error={false}
              show={submitForm.isSuccess}
              message={`Message sent! We'll contact you soon 🙌`}
            />
          </Box>
        </Flex>
      </Flex>
    </form>
  )
}

export default ContactForm
