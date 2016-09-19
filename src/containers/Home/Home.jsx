import React, { Component } from 'react'
import Title from '../../components/Title'
import TestJPEG from './images/test.jpeg'
import styles from './Home.css'

const Home = () => (
	<div className={styles.root}>
		{/* music list */}
		<div>
			music list group
		</div>

		{/* manipulation zone */}
		<div>
			<div>
				dropzone
			</div>
			<div>
				playing zone
			</div>
		</div>
	</div>
)

export default Home
