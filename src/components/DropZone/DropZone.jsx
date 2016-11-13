import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './DropZone.css'
import { sayHello } from '../../actions/helloWorld'

const getDropZoneStyle = enter => (
	enter ? styles.objectIn : styles.dropZone
)

class DropZone extends Component {
  constructor () {
    super()
    this.onDragEnter = this.onDragEnter.bind(this)
    this.onDragOver = this.onDragOver.bind(this)
    this.onDragLeave = this.onDragLeave.bind(this)
    this.onDrop = this.onDrop.bind(this)

    this.state = {
      enter: false,
    }
  }

  onDragEnter (evt) {
		// this.props.sayHello()
  	evt.preventDefault()
  	evt.stopPropagation()
  	this.setState({
  		enter: true,
  	})
  }

  onDragOver (evt) {
    evt.preventDefault()
    evt.stopPropagation()
  }

  onDragLeave (evt) {
  	evt.preventDefault()
  	evt.stopPropagation()

  	this.setState({
  		enter: false,
  	})
  }

  onDrop (evt) {
    evt.persist()
    evt.preventDefault()
    evt.stopPropagation()

    // Either use "dataTransferItemList" or "DataTransfer" object.
    const dataItems = evt.dataTransfer || evt.dataTransferItemList

    if (dataItems.items) {
			for (let i=0; i < dataItems.items.length; i++) {
				if (dataItems.items[i].kind === 'file') {
					console.log('kind', dataItems.items[i].getAsFile())
					// console.log('data transfer object', dataItems.item[i])
					// console.log('data transfer file', dataItems.item[i].getAsFile())
				}
			}
    }
  }

  render () {

    const { enter } = this.state

    const dropZoneStyle = getDropZoneStyle(enter)

    return (
      <div
        className={dropZoneStyle}
        onDragEnter={this.onDragEnter}
        onDragOver={this.onDragOver}
        onDragLeave={this.onDragLeave}
        onDrop={this.onDrop}
      >
        <div className={styles.title}>
          drop zone
        </div>
      </div>
    )
  }
}

export default DropZone

// const mapStateToProps = () => ({})
//
// export default connect(mapStateToProps, {
// 	sayHello,
// })(DropZone)
