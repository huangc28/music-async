import React, { Component } from 'react'
import Title from '../../components/Title'
import TestJPEG from './images/test.jpeg'
import styles from './Home.css'

const Home = () => (
	<div className={styles.root}>
		<Title title="this is a custom title" />
		<img src={TestJPEG} />
	</div>
)

export default Home
