import React, { FC, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import BoardList from './setlist/boardlist/boardlist'
import Collaborators from './setlist/collaborators/collaborators'
import SetlistModal from './setlistModal/setlistModal'
import { AppModel } from '../logic/setlist/setlistAction'
import { SetlistProps } from '../types/propTypes'
import { closeModals } from '../logic/modal/modalAction'
import { cleanAllSideMenus } from '../logic/sidemenu/sidemenuAction'
import { RootStateInterface } from '../logic/types'

const Setlist: FC<SetlistProps> = ({ modal, collaborators }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(AppModel())
    return () => {
      dispatch(closeModals())
      dispatch(cleanAllSideMenus())
    }
  }, [dispatch])

  const setListModal = modal ? <SetlistModal /> : null

  return (
    <main className="board">
      <section className="container">
        <h1>My Setlists</h1>
        <BoardList />
        {collaborators.length > 0 && (
          <>
            <h2>Collaborators</h2>
            <Collaborators />
          </>
        )}
      </section>
      {/* Modals */}
      {setListModal}
    </main>
  )
}

const mapStateToProps = (state: RootStateInterface) => ({
  modal: state.modal.setlistModal,
  loading: state.setlist.loading,
  collaborators: state.setlist.collaborators
})

export default connect(mapStateToProps)(Setlist)
