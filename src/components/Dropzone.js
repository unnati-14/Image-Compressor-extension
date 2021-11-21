import React, { useState } from "react"
import { useDropzone } from "react-dropzone"
import './Dropzone.css'

export default function Dropzone() {
  const [files, setFiles] = useState([])

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      )
    },
  })

  const images = files.map((file) => (
    <div key={file.name}>
      <div>
        <img src={file.preview} style={{ width: "200px" }} alt="preview" />
      </div>
    </div>
  ))

  return (
    <div className="drop">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drop file here</p>
      </div>
      <div>{images}</div>
    </div>
  )
}