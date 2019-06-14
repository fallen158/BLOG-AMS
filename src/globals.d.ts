import React from 'react'

export interface IDispatch {
  type: string,
  payload: {}
}
export interface IChangeEventFunc {
  (event: React.ChangeEvent<HTMLInputElement>): void
}
export interface IFousEventFunc {
  (event: React.FocusEvent<HTMLInputElement>): void
}

export interface IKeyboardEventFunc {
  (event: React.KeyboardEvent<HTMLInputElement>): void
}

export interface IMouseEventFunc {
  (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void
}
