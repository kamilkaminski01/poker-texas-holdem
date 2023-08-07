import React from 'react'
import './style.scss'
import { FieldValues, FormProvider, useForm } from 'react-hook-form'
import Input from 'components/molecules/Input'
import { valid } from 'utils/Validators/validators'
import { validSchemas } from 'utils/Validators/validatorsSchemas'
import { handleApiResponse } from 'utils/handleApiResponse'
import { CreateGameFormProps } from './interface'

const CreateGameForm = ({ createGameData, closeForm }: CreateGameFormProps) => {
  const methods = useForm()

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
  }

  return (
    <FormProvider {...methods}>
      <form className="create-game-form" onSubmit={methods.handleSubmit(onSubmit)}>
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

        <button type="submit">Create Game</button>
        <button onClick={closeForm}>Cancel</button>
      </form>
    </FormProvider>
  )
}

export default CreateGameForm
