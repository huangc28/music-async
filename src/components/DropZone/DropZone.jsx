import React, { Component } from 'react'
import styles from './DropZone.css'

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
  	evt.preventDefault()
  	evt.stopPropagation()
    // console.log('drop zone')
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
      dataItems.items.foreach(item => {
        console.log('kind', item.kind)
      })
    }
    // console.log(dataItems)
    // console.log('data transfer object', dataItems.items)

    // dataItems.items.forEach(item => {
    //   console.log('kind', item.kind)
    //   // if (item.kind)
    // })

    // Fire an action for uploading file to server.
    // console.log(evt)
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
