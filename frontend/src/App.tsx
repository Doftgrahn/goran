import React, { FC, useEffect, Suspense } from 'react'
import './styles/App.scss'
import { connect, useDispatch } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import Div100vh from 'react-div-100vh'
import Header from './components/header/header'
import Routes from './routes/routes'
import Spinner from './components/shared/spinner/spinner'
import UserProfile from './components/userProfile/userProfile'
import ScrollToTop from './utils/scrollToTop/scrollToTop'
import { lightTheme, darkTheme } from './utils/colors/colors'
import { getActiveUser } from './logic/auth/authAction'
import { AppInterface } from './types/propTypes'
import googleAnalytics from './utils/reactAnalytics/reactAnalytics'

const App: FC<AppInterface> = ({ theme }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    googleAnalytics()
    dispatch(getActiveUser())
  }, [dispatch])

  useEffect(() => {
    const currentTheme = theme === 'light' ? lightTheme : darkTheme
    Object.keys(currentTheme).forEach(key => {
      const value = currentTheme[key]
      document.documentElement.style.setProperty(key, value)
    })
  }, [theme])

  return (
    <Div100vh style={{ minHeight: '100rvh' }}>
      <div className="App">
        <Router>
          <ScrollToTop>
            <Suspense fallback={<Spinner />}>
              <Header />
              {/* SideMenus */}
              <UserProfile />
              <div className="container">
                <Routes />
              </div>
            </Suspense>
          </ScrollToTop>
        </Router>
      </div>
    </Div100vh>
  )
}

const mapStateToProps = (state: any) => ({
  theme: state.theme
})

export default connect(mapStateToProps)(App)
