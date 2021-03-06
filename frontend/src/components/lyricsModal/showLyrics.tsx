import React, { FC } from 'react'
import { connect } from 'react-redux'
import { TrackInterface } from '../../logic/list/constants'
import { RootStateInterface } from '../../logic/types'

interface ShowLyricsInterface {
  activeTrack: TrackInterface
}

const ShowLyrics: FC<ShowLyricsInterface> = ({ activeTrack }) => {
  return <p className="lyricText">{activeTrack.lyrics ? activeTrack.lyrics : null}</p>
}

const mapStatetoProp = (state: RootStateInterface) => ({
  activeTrack: state.activeList
})

export default connect(mapStatetoProp)(ShowLyrics)
