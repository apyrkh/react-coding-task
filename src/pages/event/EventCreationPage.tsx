import EventCreationForm from '@app/interfaces/EventCreationForm'
import GlobalState from '@app/interfaces/GlobalState'
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

interface Props {
  formData: EventCreationForm
}

const Component = (props: Props) => {
  return (
    <div>
      <Link to="/">Home</Link>
      <br />

      Event creation page
    </div>
  )
}

const mapStateToProps = (state: GlobalState, ownProps: any) => ({
  formData: state.eventCreationForm
})

export const EventCreationPage = connect(mapStateToProps)(Component)
