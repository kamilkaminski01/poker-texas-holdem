import React from 'react'
import './style.scss'
import { FieldValues, FormProvider, useForm } from 'react-hook-form'
import Input from 'components/molecules/Input'
import { valid } from 'utils/Validators/validators'
import { validSchemas } from 'utils/Validators/validatorsSchemas'
import { handleApiResponse } from 'utils/handleApiResponse'
import { CreateGameFormProps } from './interface'
import Button from 'components/atoms/Button'
import classNames from 'classnames'
import { generatePath, useNavigate } from 'react-router-dom'
import { PATHS } from 'utils/consts'

const CreateGameForm = ({ createGameData, closeForm, isFormOpen }: CreateGameFormProps) => {
  const methods = useForm()
  const navigate = useNavigate()

  const onSubmit = async (formValues: FieldValues) => {
    const { smallBlind, bigBlind, buyIn, seatCount } = formValues

    if (bigBlind < smallBlind * 2) {
      methods.setError('bigBlind', {
        type: 'manual',
        message: 'Big blind must be at least 2 times bigger than small blind'
      })
      return
    }

    const response = await createGameData({
      smallBlind,
      bigBlind,
      buyIn,
      seatCount
    })

    handleApiResponse(response, closeForm, methods.setError)
    if (response.succeed && response.data?.hash) {
      const path = generatePath(PATHS.game, { hash: response.data.hash })
      navigate(path)
    }
  }

  return (
    <FormProvider {...methods}>
      <form
        className={classNames('create-game-form', { 'create-game-form__open': isFormOpen })}
        onSubmit={methods.handleSubmit(onSubmit)}>
        <h3 className="create-game-form__title">Create a Game</h3>
        <Input
          name="smallBlind"
          placeholder="Small Blind"
          type="number"
          defaultValue={1}
          validators={{ required: valid.required, ...validSchemas.smallBlind }}
        />
        <Input
          name="bigBlind"
          placeholder="Big Blind"
          type="number"
          defaultValue={2}
          validators={{ required: valid.required, ...validSchemas.bigBlind }}
        />
        <Input
          name="buyIn"
          placeholder="Buy-in Amount"
          type="number"
          defaultValue={20}
          validators={{ required: valid.required, ...validSchemas.buyIn }}
        />
        <Input
          name="seatCount"
          placeholder="Seats Amount"
          type="number"
          defaultValue={4}
          validators={{ required: valid.required, ...validSchemas.seatCount }}
        />
        <Button className={'create-game-form__btn btn--outline'}>Create</Button>
      </form>
    </FormProvider>
  )
}

export default CreateGameForm
