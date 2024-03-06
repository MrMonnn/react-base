import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { LoadingContext } from 'react-router-loading'

const Hihi = props => {

  const loadingContext = useContext(LoadingContext)
  const loading = async () => {
    loadingContext.done()
  }
  useEffect(() => {
    loading()
  }, [])

  return (
    <div>
      AboutUs!!
    </div>
  )
}

Hihi.propTypes = {}

export default Hihi