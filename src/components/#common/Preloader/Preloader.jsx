import React from 'react'
import s from './Preloader.module.scss'

const Preloader = (props) => {
	return <div style={props.css} className={s.loadingSpinnerBall}>
			<div  className={s.ball}>
				<div></div>
			</div>
		</div>


}

export  default Preloader