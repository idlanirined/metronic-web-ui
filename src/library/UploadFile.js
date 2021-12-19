import React, { Component, createRef } from "react"
import Dropzone from 'react-dropzone'
import { LinearProgress, withStyles, Snackbar, } from '@mui/material'
import closeCircle from '../assets/closecircle.svg';
import imgUpload from '../assets/upload.svg';
import MuiAlert from '@mui/lab/Alert';

const dropzoneRef = createRef()
const Alert = (props) => { <MuiAlert elevation={6} variant="filled" {...props} /> };

class UploadFile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            file: '',
            nameFile: 'File name',
            typeFile: '',
            sizeFile: '0',
            inputVisible: true,
            previewVisible: false,
            labelUploadVisible: false,
            iconButtonUpload: 'fa fa-1x fa-upload',
            uploadProgress: false,
            percentage: '0',
            completed: '0',
            alert: false,
            alertMessage: '',
            sizeUpload: this.props.sizeUpload === undefined ? 1 : this.props.sizeUpload
        }
    }

    componentDidUpdate(prevs, next) {
        if (prevs.percentage > 0 && prevs.percentage <= 100) {
            // console.log('old percentage', prevs.percentage)
            // console.log('new percentage', this.state.percentage)
            if (this.state.percentage !== prevs.percentage) {
                this.setState({ percentage: prevs.percentage })
            }
        }
        if (prevs.result === 'success' || prevs.result === 'error') {
            if (this.state.uploadProgress === true) {
                this.setState({ uploadProgress: false, percentage: '100', iconButtonUpload: 'fa fa-1x fa-check' })
            }
        }
    }

    componentDidMount() {
        console.log(this.props);
        if (this.props.docName !== null) {
            // console.log('masuk');
            this.setState({ docName: this.props.docName, docSize: this.props.docSize, inputVisible: false, editVisible: true })
        }
    }

    onDrop = (acceptedFiles) => {
        console.log(acceptedFiles);
        const formData = new FormData()
        let length = acceptedFiles[0].name.split(".").length
        let fileType = acceptedFiles[0].name.split(".")[length - 1]
        formData.append('file', acceptedFiles[0])
        // console.log(sizeFile);
        if (this.props.intent === 'management') {
            if (acceptedFiles) {
                if (acceptedFiles.includes(String(fileType).toUpperCase())) {
                    // if (this.props.acceptedFiles.includes(fileType)) {
                    if ((acceptedFiles[0].size / 1000).toFixed(0) < (this.props.sizeUpload * 1000)) {
                        this.setState({
                            file: acceptedFiles[0],
                            typeFile: fileType,
                            nameFile: acceptedFiles[0].name,
                            sizeFile: (acceptedFiles[0].size / 1000).toFixed(0),
                            previewVisible: true,
                            inputVisible: false,
                            uploadProgress: false,
                            percentage: '0'
                        })
                        this.props.onHandle(acceptedFiles[0])
                    } else {
                        this.setState({ alertMessage: `The file is too large. Allowed maximum size is ${this.props.sizeUpload} MB`, alert: true })
                        // alert('File Tidak Boleh Lebih Dari 1MB')
                    }
                } else {
                    this.setState({ alertMessage: 'File extension not allowed', alert: true })
                    // alert('File Tidak Mendukung')
                }
            }
            else {
                this.setState({
                    previewVisible: false,
                    inputVisible: true,
                    uploadProgress: false,
                    percentage: '0'
                })
                this.setState({ alertMessage: "File extension not allowed", alert: true })
                // alert("Unsupported Media Type")
            }
        } else {
            let files = ["XLSX"]
            if (files.includes(String(fileType).toUpperCase())) {
                if (acceptedFiles) {
                    this.setState({
                        file: acceptedFiles[0],
                        typeFile: fileType,
                        nameFile: acceptedFiles[0].name,
                        sizeFile: (acceptedFiles[0].size / 1000).toFixed(0),
                        previewVisible: true,
                        inputVisible: false,
                        uploadProgress: false,
                        percentage: '0'
                    })
                    this.props.onHandle(acceptedFiles[0])
                } else {
                    this.setState({
                        previewVisible: false,
                        inputVisible: true,
                        uploadProgress: false,
                        percentage: '0'
                    })
                    this.setState({ alertMessage: "File extension not allowed", alert: true })
                    // alert("Unsupported Media Type")
                }
            } else {
                this.setState({ alertMessage: "File extension not allowed", alert: true })
            }
        }
    }

    onRemove = () => {
        if (this.props.intent === "management") {
            this.setState({
                previewVisible: false,
                editVisible: false,
                inputVisible: true,
                uploadProgress: false,
                percentage: '0'
            })
            this.props.onDelete("delete")
        } else {
            this.setState({
                previewVisible: false,
                editVisible: false,
                inputVisible: true,
                uploadProgress: false,
                percentage: '0'
            })
        }
    }

    onUpload = () => {
        console.log(this.props, this.state);
        // this.props.onUpload()
        var strProps = this.props.acceptedFiles
        var strState = this.state.typeFile
        // console.log(strProps);
        // console.log(strState);

        if (strProps.includes(String(strState).toUpperCase())) {
            if (this.state.sizeFile < this.state.sizeUpload * 1000) {
                this.props.onUpload()
            } else {
                alert('The file is too large. Allowed maximum size is 1MB')

                // this.setState({ alertMessage: 'The file is too large. Allowed maximum size is 1MB', alert: true })
                // alert('File Tidak Boleh Lebih Dari 1MB')
            }
        } else {
            alert('File extension not allowed')
            // this.setState({ alertMessage: 'File extension not allowed', alert: true })
            // alert('File Tidak Mendukung')
        }
    }

    closeAlert() {
        this.setState({ alert: false })
    }

    render() {
        return (
            <div>
                <Dropzone ref={dropzoneRef} onDrop={this.onDrop} multiple={this.props.multiple}>
                    {({ getRootProps, getInputProps }) => (
                        <div>
                            <Snackbar open={this.state.alert} autoHideDuration={6000} onClose={() => this.closeAlert()}>
                                <Alert onClose={() => this.closeAlert()} severity={"warning"}>
                                    {this.state.alertMessage}
                                </Alert>
                            </Snackbar>
                            <div className="upload-file" style={{}}>

                                {/* label */}
                                {this.state.inputVisible
                                    ? <div {...getRootProps()} className="padding-10px" style={{ cursor: 'pointer' }}>
                                        <input {...getInputProps()} />
                                        <div className="u-p-title">
                                            Drag 'n' drop some files here, or click to select files
                                        </div>
                                    </div>
                                    : null}

                                {/* edit */}
                                {this.state.editVisible ?
                                    <div className="u-p-file u-p-preview">
                                        <div className="display-flex-normal">
                                            <div className="width width-35px">
                                                <button
                                                    onClick={this.onRemove}
                                                    className=""
                                                    type="button">
                                                    <img src={closeCircle} />
                                                </button>
                                            </div>
                                            <div className="width width-full margin-left-10px">
                                                <div className="txt-site txt-12 txt-white txt-bold">
                                                    {this.state.docName}
                                                </div>
                                                <div className="txt-site txt-11 txt-white txt-thin">
                                                    {this.state.docSize / 1000} KB
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    : null}
                                {/* file */}
                                {this.state.previewVisible
                                    ?
                                    <div className="u-p-file u-p-preview">
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <div style={{ display: 'flex' }}>
                                                <div className="width width-35px" style={{ alignSelf: 'center' }}>
                                                    <button
                                                        onClick={this.state.uploadProgress === true ? null : this.onRemove}
                                                        className="btn btn-small-circle"
                                                        type="button">
                                                        <img src={closeCircle} />
                                                    </button>
                                                </div>
                                                <div className="width width-full margin-left-10px" style={{ alignSelf: 'center' }}>
                                                    <div className="txt-site txt-14 txt-white txt-bold">
                                                        {this.state.nameFile} - {this.state.sizeFile} KB
                                                    </div>
                                                </div>
                                            </div>
                                            {this.props.type === 'upload' ?
                                                <div className="width width-155px padding-10px txt-site txt-11 txt-white txt-thin">
                                                    Uploading {this.state.percentage}%
                                                </div> : null}

                                            {this.props.disableButtonUpload !== true ? (
                                                <div className="width width-35px">
                                                    <button
                                                        className="btn btn-small-circle"
                                                        type="button"
                                                        onClick={this.state.uploadProgress === true ? null : this.onUpload}>
                                                        {/*<i className={this.state.iconButtonUpload} />*/}
                                                        {this.state.uploadProgress === true
                                                            ? <i className={'fa fa-1x fa-spinner fa-spin'} /> : this.props.intent === 'management' ? null :
                                                                <img src={imgUpload} />}
                                                    </button>
                                                </div>
                                            ) : null}
                                        </div>
                                        {this.props.type === 'upload' ?
                                            <div className="margin-top-15px">
                                                <LinearProgress variant="determinate" value={this.state.percentage} />
                                            </div> : null}
                                        {/* this.state.uploadProgress === true
                                    ? (
                                        <div className="margin-15px">
                                            <LinearProgress variant="determinate" value={this.state.percentage} />
                                        </div>
                                    ) : null */}
                                    </div>
                                    : null}

                                {/* image */}
                                {/* <div className="u-p-image u-p-preview">
                                    <div className="display-flex-normal">
                                        <div className="width width-full display-flex-normal">
                                            <button className="btn btn-small-circle btn-black">
                                                <i className="fa fa-1x fa-times" />
                                            </button>
                                        </div>
                                        <div className="width width-full display-flex-normal content-right">
                                            <button className="btn btn-small-circle btn-black">
                                                <i className="fa fa-1x fa-upload" />
                                            </button>
                                        </div>
                                    </div>
                                </div> */}

                            </div>
                        </div>
                    )}
                </Dropzone>
            </div>
        )
    }
}

export default UploadFile