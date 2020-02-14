import React, { FC } from 'react'
import { connect, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'

import { setActiveBoard as activeBoard } from '../../../logic/activeBoard/activeBoardAction'
import { BoardInterface } from '../../../logic/types'

import NewBoard from '../newboard/newBoard'
import Spinner from '../../shared/spinner/spinner'
import Account from '../../../assets/account/account'

const BoardList: FC<any> = ({ setlist }) => {
  const { loading, boards } = setlist
  const dispatch = useDispatch()

  const setActiveBoard = (board: any): any => dispatch(activeBoard(board))

  const renderMyBoards = boards.map((board: BoardInterface): any => (
    <li key={board._id} title={`Setlist: ${board.title}`}>
      <Link tabIndex={0} onClick={() => setActiveBoard(board)} to={`/dashboard/${board.title}`}>
        <p>
          <Account height={20} width={20} />{' '}
          {board.collaborators.length ? board.collaborators.length : 'Only you'}
        </p>
        <h3>{board.title}</h3>
      </Link>
    </li>
  ))

  return (
    <ul className="boardlist">
      <NewBoard />
      <Fade cascade>{loading ? <Spinner /> : renderMyBoards}</Fade>
    </ul>
  )
}

const mapStateToProps = (state: any) => ({
  setlist: state.setlist
})

export default connect(mapStateToProps)(BoardList)
