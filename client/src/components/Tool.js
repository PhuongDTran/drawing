import React, { useContext } from 'react'
import { TwitterPicker } from 'react-color'
import { Context } from '../store/store';
import { types } from '../store/types'
import Draggable from 'react-draggable';
import { Button, Paper } from '@material-ui/core'

function Tool() {
  const { state, dispatch } = useContext(Context)

  const pickColor = (color, event) => {
    dispatch({ type: types.SET_COLOR, payload: color.hex })
  }
  const clearDrawing = () => {
    dispatch({ type: types.SET_CLEAR, payload: true })
  }
  return (
    <Draggable bounds='parent'>
      <Paper
        style={{ display: "inline-flex", backgroundColor: "white" }}>
        <TwitterPicker triangle="hide" color={state.color} onChangeComplete={pickColor} />
        <div style={{ display: 'flex', flexDirection: "column" }}>
          <Button style={{ margin: 'auto' }} variant="contained" color="secondary" onClick={clearDrawing}> Clear </Button>
          <Button style={{ margin: 'auto' }} variant="contained" color="primary" > Share </Button>
        </div>
      </Paper>
    </Draggable>
  )
}

export default Tool