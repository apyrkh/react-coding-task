import { EventCreationForm } from '@app/components/event/EventCreationForm'
import EventCreationFormModel from '@app/interfaces/EventCreationFormModel'
import GlobalState from '@app/interfaces/GlobalState'
import { changeEventCreationForm } from '@app/redux/actions/eventCreationFormAction'
import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

const mapStateToProps = (state: GlobalState) => ({
  formData: state.eventCreationForm
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onChange: (formData: Partial<EventCreationFormModel>) => dispatch(changeEventCreationForm(formData))
})

export const EventCreationFormContainer = connect(mapStateToProps, mapDispatchToProps)(EventCreationForm)
