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
import { useRouter } from 'next/router'

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
  const { asPath } = useRouter()
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

  // const submitForm: any = useMutation(
  //   (payload:any) => {
  //     //   return axios.post('/api/email/send', payload)
  //     return new Promise((res) => setTimeout(() => res('e'), 2000))
  //   },
  //   {
  //     onSuccess: () => {
  //       useStore.setState({
  //         showCert: true,
  //         name: nombre
  //       })
  //       reset()
  //     },
  //   }
  // )

  const pathToImgCert = () => {
    const certificates = {
      workshops: {
        AlanCourtis: '/img/workshops/AlanCourtis.png',
        DianaAisenberg: '/img/workshops/DianaAisenberg.png',
        ExperienciaRocambole: '/img/workshops/ExperienciaRocambole.png',
        ExtraBrut: '/img/workshops/ExtraBrut.png',
        Larutadeloslogos: '/img/workshops/Larutadeloslogos.png',
        PublicacionesExperimentales:
          '/img/workshops/PublicacionesExperimentales.png',
        WEB3: '/img/workshops/WEB3.png',
      },
      asistencia: {
        asistencia: '/img/asistencia/Asistencia.png',
      },
      grupos: {
        grupos: '/img/grupos/Grupos.png',
      },
      CE: {
        CE: '/img/CE/CE.png',
      },
    }

    let certPath = null
    const certType = asPath.split('/')[1]

    if (asPath.includes('workshops')) {
      const certName = asPath.split('/')[2]
      certPath = certType && certName ? certificates[certType][certName] : null
    } else {
      certPath = certificates[certType]
        ? certificates[certType][certType]
        : null
    }

    return certPath
  }

  const delay = (time = 3000) =>
    new Promise((res) => setTimeout(() => res('e'), time))

  const [loading, setLoading] = useState(false)

  const submit = async (form) => {
    setLoading(true)
    await delay()
    if (pathToImgCert()) {
      useStore.setState({
        showCert: true,
        name: form.name,
        certPath: pathToImgCert(),
      })
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
      }}
    >
      <Flex flexDirection='column' pt='50px' maxWidth='500px'>
        <AppearingEffect effect={'bottom'} animationProps={{ delay: 3500 }}>
          <Text type={theme.fonts.span}>Nombre*</Text>
          <FormTextField
            control={control}
            name='name'
            placeholder='juancito perez'
            enterkeyhint='next'
            rules={{
              required: `campo requerido`,
            }}
          />
        </AppearingEffect>
        <Message show={errors?.name?.message} message='Dime tu nombre! 😡' />
        <Spacer vertical={'62px'} />

        <AppearingEffect effect={'bottom'} animationProps={{ delay: 4000 }}>
          <Button type='submit' onClick={handleSubmit(submit)}>
            Generar
          </Button>
        </AppearingEffect>

        <Message
          show={loading}
          message={
            pathToImgCert()
              ? 'Generando magia... ✨🎉'
              : 'URL de certificado incorrecta 🤷‍♂️'
          }
        />
        <Spacer vertical={'62px'} />
      </Flex>
    </form>
  )
}

export default AttendanceForm
