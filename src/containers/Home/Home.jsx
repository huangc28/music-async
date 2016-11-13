import React, { Component } from 'react'
import DropZone from '../../components/DropZone'
import styles from './Home.css'

class Home extends Component {
	render () {
		return (
			<div className={styles.root}>
				<DropZone />
			</div>
		)
	}
}


export default Home
