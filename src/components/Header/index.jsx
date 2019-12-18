import React, { Fragment } from "react"
import "./index.scss"
function Header({ left = [], center = [], right = [], style , onLeftClick = function(){}}) {
  return (
    <div className="header" style={style} onClick={() => onLeftClick()}>
      <div className="header-left">
        {
          left.map((val, index) => {
            return (
              <Fragment key={index}>
                {val}
              </Fragment>
            )
          })
        }
      </div>
      <div className="header-center">
        {
          center.map((val, index) => {
            return (
              <Fragment key={index}>
                {val}
              </Fragment>
            )
          })
        }
      </div>
      <div className="header-right">
        {
          right.map((val, index) => {
            return (
              <Fragment key={index}>
                {val}
              </Fragment>
            )
          })
        }
      </div>
    </div>
  )
}

export default Header