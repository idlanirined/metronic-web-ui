var mainColor = "#fff"
var secondColor = "#f6f6f6"

exports.customTable = function () {
    return {
        typography: {
            useNextVariants: true,
        },
        components: {
            MuiPaper: {
                root: {
                    // position: 'relativ3p;[e',
                    // width: '100% !important',
                    boxShadow: 'none !important',
                    //   boxShadow: "0 0 0 0 rgba(154,161,171,.15)",
                    // border: "1px rgba(0,0,0,0.1) solid",
                    // borderRadius: "30px",
                    // overflow: "hidden",
                    // minHeight: 480,
                    // marginTop: 10,
                },
                responsiveScroll: {
                    position: 'relative',
                    maxHeight: '600 !important',
                    minHeight: '600 !important',
                },
                responsiveScrollMaxHeight: {
                    // backgroundColor: 'red'
                    //   height: 'calc(100vh)',
                    maxHeight: '600 !important',
                    minHeight: '600 !important',
                },
            },
            MuiToolbar: {
                root: {
                    position: 'relative',
                }
            },
            MUIDataTableToolbar: {
                root: {
                    position: 'relative',
                    padding: "0px 5px",
                    backgroundColor: 'white', //'rgba(0,76,151,0.05)',
                },
                titleText: {
                    color: "#555"
                },
                icon: {
                    color: "#555 !important"
                },
                iconActive: {
                    color: "#555 !important"
                },
                left: {
                    flex: "0 0 auto !important"
                },
                actions: {
                    textAlign: 'right !important',
                    flex: "1 0 auto !important",
                }
            },
            MUIDataTableSearch: {
                main: {
                    position: 'absolute',
                    top: "2px",
                    right: "2px",
                    width: "350px !important",
                    backgroundColor: "white",
                    zIndex: "10",
                    textAlign: "right",
                    display: "block",
                },
                searchIcon: {
                    width: "50px !important",
                    color: "#555 !important",
                    display: "inline-block",
                    textAlign: "center",
                    verticalAlign: "top",
                },
                searchText: {
                    width: "calc(100% - 120px) !important",
                    marginRight: "10px",
                    color: "#555 !important",
                    display: "inline-block",
                    verticalAlign: "top",
                },
                clearIcon: {
                    width: "50px !important",
                    color: "#555 !important",
                    display: "inline-block",
                    verticalAlign: "top",
                },
            },
            MuiTableCell: {
                root: {
                    display: 'table-cell',
                    padding: 8,
                    paddingLeft: 25,
                    paddingRight: 25,
                    fontSize: '0.875rem',
                    textAlign: 'left',
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    lineHeight: 1.43,
                    borderBottom: '1px solid #fff',
                    letterSpacing: '0.01071em',
                    verticalAlign: 'inherit',
                }
            },
            MuiPopover: {
                paper: {
                    outline: 0,
                    position: 'absolute',
                    maxWidth: 'calc(100% -32px)',
                    minWidth: 199,
                    maxHeight: 'calc(100% -32px)',
                    minHeight: 16,
                    overflowX: 'hidden',
                    overflowY: 'auto',
                    width: 400
                }
            },
            MUIDataTableFilterList: {
                root: {
                    backgroundColor: "white",
                    margin: "0px 0px 0px 0px",
                    padding: "0px 16px 0px 16px"
                },
                chip: {
                    margin: "8px 8px 8px 0px",
                    color: "#555",
                }
            },
            MUIDataTableHead: {
                main: {
                    position: 'relative',
                    backgroundColor: mainColor,
                    color: "green",
                    // display: "flex",
                    // alignItems: "stretch"
                },
                fixedHeader: {
                    // position: "relative",
                    // borderBottom: "1px rgba(0,0,0,0.1) solid",
                    backgroundColor: 'white', //'rgba(0,76,151,0.05)',
                    color: "#2a9c6c",
                    padding: "10px 20px",
                    height: "auto"
                    ,
                    marginTop: "10px"
                },
            },
            MUIDataTableHeadRow: {
                root: {
                    position: 'relative',
                    backgroundColor: mainColor,
                }
            },
            MUIDataTableHeadCell: {
                root: {
                    fontSize: "12pt",
                    fontWeight: "500",
                    color: "gray",
                    backgroundColor: secondColor,
                },
                fixedHeader: {
                    // position: "relative",
                    // borderBottom: "1px rgba(0,0,0,0.1) solid",
                    backgroundColor: 'white', //'rgba(0,76,151,0.05)',
                    color: "#2a9c6c",
                    padding: "10px 25px",
                    height: "auto"
                },
                toolButton: {
                    display: "flex",
                    height: "auto",
                    whiteSpace: 'nowrap'
                },
                data: {
                    display: "inline-block",
                    verticalAlign: "top",
                },
                sortActive: {
                    color: "#555"
                },
                sortAction: {
                    color: "#555",
                    display: "inline-block",
                    verticalAlign: "top",
                    MuiButtonBase: {
                        color: "#555",
                        root: {
                            color: "#555",
                        }
                    }
                }
            },
            MUIDataTableBodyCell: {
                root: {
                    position: 'relative',
                    fontSize: "13px",
                },
                cellStacked: {
                    "&:nth-child(odd)": {
                        background: "yellow"
                    },
                }
            },
            MUIDataTableBodyRow: {
                root: {
                    '&:nth-child(odd)': {
                        backgroundColor: '#e7ffec'
                    }
                }
            },
            MUIDataTableSelectCell: {
                headerCell: {
                    backgroundColor: secondColor,
                    checkboxRoot: {
                        color: "#555",
                    }
                },
                checkboxRoot: {
                    color: "#555"
                }
            },
            MuiInput: {
                root: {
                    top: "5px",
                    color: "#555 !important",
                },
                underline: {
                    borderBottom: "1px #555 solid !important",
                }
            },
            MuiSelect: {
                root: {
                    top: "0",
                    color: "#555 !important",
                },
            },
            MuiTypography: {
                root: {
                    margin: 0
                },
                body: {
                    fontSize: '0.875rem',
                    fontFamily: 'Poppins',
                    lineHeight: 1.43
                }
            }
            // MuiIconButton: {
            //   root: {
            //     color: "#fff !important",
            //   }
            // }
        }
    }
}

exports.customTableMasterJadwal = function () {
    return {
        typography: {
            useNextVariants: true,
        },
        overrides: {
            MUIDataTable: {
                paper: {
                    // position: 'relativ3p;[e',
                    // width: '100% !important',
                    boxShadow: 'none !important',
                    //   boxShadow: "0 0 0 0 rgba(154,161,171,.15)",
                    // border: "1px rgba(0,0,0,0.1) solid",
                    // borderRadius: "30px",
                    // overflow: "hidden",
                    // minHeight: 480,
                    // marginTop: 10,
                },
                // responsiveScroll: {
                //   position: 'relative',
                //   width: '100% !important',
                // }
                responsiveScrollMaxHeight: {
                    // backgroundColor: 'red'
                    //   height: 'calc(100vh)',
                    maxHeight: 'calc(100vh - 360px) !important',
                    minHeight: 'calc(100vh - 360px) !important',
                },
            },
            MuiToolbar: {
                root: {
                    position: 'relative',
                }
            },
            MUIDataTableToolbar: {
                root: {
                    position: 'relative',
                    padding: "0px 5px",
                    backgroundColor: 'white', //'rgba(0,76,151,0.05)',
                },
                titleText: {
                    color: "#555"
                },
                icon: {
                    color: "#555 !important"
                },
                iconActive: {
                    color: "#555 !important"
                },
                left: {
                    flex: "0 0 auto !important"
                },
                actions: {
                    textAlign: 'right !important',
                    flex: "1 0 auto !important",
                }
            },
            MUIDataTableSearch: {
                main: {
                    position: 'absolute',
                    top: "2px",
                    right: "2px",
                    width: "350px !important",
                    backgroundColor: "white",
                    zIndex: "10",
                    textAlign: "right",
                    display: "block",
                },
                searchIcon: {
                    width: "50px !important",
                    color: "#555 !important",
                    display: "inline-block",
                    textAlign: "center",
                    verticalAlign: "top",
                },
                searchText: {
                    width: "calc(100% - 120px) !important",
                    marginRight: "10px",
                    color: "#555 !important",
                    display: "inline-block",
                    verticalAlign: "top",
                },
                clearIcon: {
                    width: "50px !important",
                    color: "#555 !important",
                    display: "inline-block",
                    verticalAlign: "top",
                },
            },
            MuiTableCell: {
                root: {
                    display: 'table-cell',
                    padding: 8,
                    paddingLeft: 25,
                    paddingRight: 25,
                    fontSize: '0.875rem',
                    textAlign: 'left',
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    lineHeight: 1.43,
                    borderBottom: '1px solid #fff',
                    letterSpacing: '0.01071em',
                    verticalAlign: 'inherit',
                }
            },
            MuiPopover: {
                paper: {
                    outline: 0,
                    position: 'absolute',
                    maxWidth: 'calc(100% -32px)',
                    minWidth: 199,
                    maxHeight: 'calc(100% -32px)',
                    minHeight: 16,
                    overflowX: 'hidden',
                    overflowY: 'auto',
                    width: 400
                }
            },
            MUIDataTableFilterList: {
                root: {
                    backgroundColor: "white",
                    margin: "0px 0px 0px 0px",
                    padding: "0px 16px 0px 16px"
                },
                chip: {
                    margin: "8px 8px 8px 0px",
                    color: "#555",
                }
            },
            MUIDataTableHead: {
                main: {
                    position: 'relative',
                    backgroundColor: mainColor,
                    color: "green",
                    // display: "flex",
                    // alignItems: "stretch"
                },
                fixedHeader: {
                    // position: "relative",
                    // borderBottom: "1px rgba(0,0,0,0.1) solid",
                    backgroundColor: 'white', //'rgba(0,76,151,0.05)',
                    color: "#2a9c6c",
                    padding: "10px 20px",
                    height: "auto"
                    ,
                    marginTop: "10px"
                },
            },
            MUIDataTableHeadRow: {
                root: {
                    position: 'relative',
                    backgroundColor: mainColor,
                }
            },
            MUIDataTableHeadCell: {
                root: {
                    fontSize: "12pt",
                    fontWeight: "500",
                    color: "#555",
                    backgroundColor: secondColor,
                },
                fixedHeader: {
                    // position: "relative",
                    // borderBottom: "1px rgba(0,0,0,0.1) solid",
                    backgroundColor: 'white', //'rgba(0,76,151,0.05)',
                    color: "#2a9c6c",
                    padding: "10px 25px",
                    height: "auto"
                },
                toolButton: {
                    display: "flex",
                    height: "auto",
                    whiteSpace: 'nowrap'
                },
                data: {
                    display: "inline-block",
                    verticalAlign: "top",
                },
                sortActive: {
                    color: "#555"
                },
                sortAction: {
                    color: "#555",
                    display: "inline-block",
                    verticalAlign: "top",
                    MuiButtonBase: {
                        color: "#555",
                        root: {
                            color: "#555",
                        }
                    }
                }
            },
            MUIDataTableBodyCell: {
                root: {
                    position: 'relative',
                    fontSize: "13px",
                },
                cellStacked: {
                    "&:nth-child(odd)": {
                        background: "yellow"
                    },
                }
            },
            MUIDataTableBodyRow: {
                root: {
                    '&:nth-child(odd)': {
                        backgroundColor: '#e7ffec'
                    }
                }
            },
            MUIDataTableSelectCell: {
                headerCell: {
                    backgroundColor: secondColor,
                    checkboxRoot: {
                        color: "#555",
                    }
                },
                checkboxRoot: {
                    color: "#555"
                }
            },
            MuiInput: {
                root: {
                    top: "5px",
                    color: "#555 !important",
                },
                underline: {
                    borderBottom: "1px #555 solid !important",
                }
            },
            MuiSelect: {
                root: {
                    top: "0",
                    color: "#555 !important",
                },
            },
            MuiTypography: {
                root: {
                    margin: 0
                },
                body: {
                    fontSize: '0.875rem',
                    fontFamily: 'Poppins',
                    lineHeight: 1.43
                }
            }
            // MuiIconButton: {
            //   root: {
            //     color: "#fff !important",
            //   }
            // }
        }
    }
}

exports.customTable5 = function () {
    return {
        typography: {
            useNextVariants: true,
        },
        overrides: {
            MUIDataTable: {
                paper: {
                    // position: 'relativ3p;[e',
                    // width: '100% !important',
                    boxShadow: 'none !important',
                    //   boxShadow: "0 0 0 0 rgba(154,161,171,.15)",
                    // border: "1px rgba(0,0,0,0.1) solid",
                    // borderRadius: "30px",
                    // overflow: "hidden",
                    // minHeight: 480,
                    height: 200,
                    marginTop: 10,
                },
                // responsiveScroll: {
                //   position: 'relative',
                //   width: '100% !important',
                // }
                responsiveScrollMaxHeight: {
                    // backgroundColor: 'red'
                    //   height: 'calc(100vh)',
                    minHeight: 'calc(100vh - 300px) !important',
                    maxHeight: 'calc(100vh - 300px) !important'
                },
            },
            MuiToolbar: {
                root: {
                    position: 'relative',
                }
            },
            MUIDataTableToolbar: {
                root: {
                    position: 'relative',
                    padding: "0px 5px",
                    backgroundColor: 'white', //'rgba(0,76,151,0.05)',
                },
                titleText: {
                    color: "#555"
                },
                icon: {
                    color: "#555 !important"
                },
                iconActive: {
                    color: "#555 !important"
                },
                left: {
                    flex: "0 0 auto !important"
                },
                actions: {
                    flex: "1 0 auto !important",
                    textAlign: 'right'
                }
            },
            MUIDataTableSearch: {
                main: {
                    position: 'absolute',
                    top: "2px",
                    right: "2px",
                    width: "350px !important",
                    backgroundColor: "white",
                    zIndex: "10",
                    textAlign: "right",
                    display: "block",
                },
                searchIcon: {
                    width: "50px !important",
                    color: "#555 !important",
                    display: "inline-block",
                    textAlign: "center",
                    verticalAlign: "top",
                },
                searchText: {
                    width: "calc(100% - 120px) !important",
                    marginRight: "10px",
                    color: "#555 !important",
                    display: "inline-block",
                    verticalAlign: "top",
                },
                clearIcon: {
                    width: "50px !important",
                    color: "#555 !important",
                    display: "inline-block",
                    verticalAlign: "top",
                },
            },
            MuiTableCell: {
                root: {
                    display: 'table-cell',
                    padding: 8,
                    paddingLeft: 25,
                    paddingRight: 25,
                    fontSize: '0.875rem',
                    textAlign: 'left',
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    lineHeight: 1.43,
                    borderBottom: '1px solid #fff',
                    letterSpacing: '0.01071em',
                    verticalAlign: 'inherit',
                }
            },
            MuiPopover: {
                paper: {
                    outline: 0,
                    position: 'absolute',
                    maxWidth: 'calc(100% -32px)',
                    minWidth: 199,
                    maxHeight: 'calc(100% -32px)',
                    minHeight: 16,
                    overflowX: 'hidden',
                    overflowY: 'auto',
                    width: 400
                }
            },
            MUIDataTableFilterList: {
                root: {
                    backgroundColor: "white",
                    margin: "0px 0px 0px 0px",
                    padding: "0px 16px 0px 16px"
                },
                chip: {
                    margin: "8px 8px 8px 0px",
                    color: "#555",
                }
            },
            MUIDataTableHead: {
                main: {
                    position: 'relative',
                    backgroundColor: mainColor,
                    color: "green",
                    // display: "flex",
                    // alignItems: "stretch"
                },
                fixedHeader: {
                    // position: "relative",
                    // borderBottom: "1px rgba(0,0,0,0.1) solid",
                    backgroundColor: 'white', //'rgba(0,76,151,0.05)',
                    color: "#2a9c6c",
                    padding: "10px 20px",
                    height: "auto"
                    ,
                    marginTop: "10px"
                },
            },
            MUIDataTableHeadRow: {
                root: {
                    position: 'relative',
                    backgroundColor: mainColor,
                }
            },
            MUIDataTableHeadCell: {
                root: {
                    fontSize: "12pt",
                    fontWeight: "500",
                    color: "#555",
                    backgroundColor: secondColor,
                },
                fixedHeader: {
                    // position: "relative",
                    // borderBottom: "1px rgba(0,0,0,0.1) solid",
                    backgroundColor: 'white', //'rgba(0,76,151,0.05)',
                    color: "#2a9c6c",
                    padding: "10px 25px",
                    height: "auto"
                },
                toolButton: {
                    display: "flex",
                    height: "auto",
                    whiteSpace: 'nowrap'
                },
                data: {
                    display: "inline-block",
                    verticalAlign: "top",
                },
                sortActive: {
                    color: "#555"
                },
                sortAction: {
                    color: "#555",
                    display: "inline-block",
                    verticalAlign: "top",
                    MuiButtonBase: {
                        color: "#555",
                        root: {
                            color: "#555",
                        }
                    }
                }
            },
            MUIDataTableBodyCell: {
                root: {
                    position: 'relative',
                    fontSize: "13px",
                },
                cellStacked: {
                    "&:nth-child(odd)": {
                        background: "yellow"
                    },
                }
            },
            MUIDataTableBodyRow: {
                root: {
                    '&:nth-child(odd)': {
                        backgroundColor: '#e7ffec'
                    }
                }
            },
            MUIDataTableSelectCell: {
                headerCell: {
                    backgroundColor: secondColor,
                    checkboxRoot: {
                        color: "#555",
                    }
                },
                checkboxRoot: {
                    color: "#555"
                }
            },
            MuiInput: {
                root: {
                    top: "5px",
                    color: "#555 !important",
                },
                underline: {
                    borderBottom: "1px #555 solid !important",
                }
            },
            MuiSelect: {
                root: {
                    top: "0",
                    color: "#555 !important",
                },
            }
            // MuiIconButton: {
            //   root: {
            //     color: "#fff !important",
            //   }
            // }
        }
    }
}

exports.customTable2 = function () {
    return {
        typography: {
            useNextVariants: true,
        },
        overrides: {
            MUIDataTable: {
                paper: {
                    // position: 'relativ3p;[e',
                    // width: '100% !important',
                    boxShadow: 'none !important',
                    //   boxShadow: "0 0 0 0 rgba(154,161,171,.15)",
                    // border: "1px rgba(0,0,0,0.1) solid",
                    // borderRadius: "30px",
                    // overflow: "hidden",
                    // minHeight: 480,
                    marginTop: 10
                },
                // responsiveScroll: {
                //   position: 'relative',
                //   width: '100% !important',
                // }
                responsiveScrollMaxHeight: {
                    // backgroundColor: 'red'
                    //   height: 'calc(100vh)',
                    minHeight: 'calc(100vh - 400px) !important',
                    maxHeight: 'calc(100vh - 400px) !important'
                },
            },
            MuiToolbar: {
                root: {
                    position: 'relative',
                }
            },
            MUIDataTableToolbar: {
                root: {
                    position: 'relative',
                    padding: "0px 5px",
                    backgroundColor: 'white', //'rgba(0,76,151,0.05)',
                },
                titleText: {
                    color: "#555"
                },
                icon: {
                    color: "#555 !important"
                },
                iconActive: {
                    color: "#555 !important"
                },
                left: {
                    flex: "0 0 auto !important"
                },
                actions: {
                    flex: "1 0 auto !important",
                    textAlign: 'right'
                }
            },
            MUIDataTableSearch: {
                main: {
                    position: 'absolute',
                    top: "2px",
                    right: "2px",
                    width: "350px !important",
                    backgroundColor: "white",
                    zIndex: "10",
                    textAlign: "right",
                    display: "block",
                },
                searchIcon: {
                    width: "50px !important",
                    color: "#555 !important",
                    display: "inline-block",
                    textAlign: "center",
                    verticalAlign: "top",
                },
                searchText: {
                    width: "calc(100% - 120px) !important",
                    marginRight: "10px",
                    color: "#555 !important",
                    display: "inline-block",
                    verticalAlign: "top",
                },
                clearIcon: {
                    width: "50px !important",
                    color: "#555 !important",
                    display: "inline-block",
                    verticalAlign: "top",
                },
            },
            MuiTableCell: {
                root: {
                    display: 'table-cell',
                    padding: 8,
                    paddingLeft: 25,
                    paddingRight: 25,
                    fontSize: '0.875rem',
                    textAlign: 'left',
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    lineHeight: 1.43,
                    borderBottom: '1px solid #fff',
                    letterSpacing: '0.01071em',
                    verticalAlign: 'inherit',
                }
            },
            MuiPopover: {
                paper: {
                    outline: 0,
                    position: 'absolute',
                    maxWidth: 'calc(100% -32px)',
                    minWidth: 199,
                    maxHeight: 'calc(100% -32px)',
                    minHeight: 16,
                    overflowX: 'hidden',
                    overflowY: 'auto',
                    width: 400
                }
            },
            MUIDataTableFilterList: {
                root: {
                    backgroundColor: "white",
                    margin: "0px 0px 0px 0px",
                    padding: "0px 16px 0px 16px"
                },
                chip: {
                    margin: "8px 8px 8px 0px",
                    color: "#555",
                }
            },
            MUIDataTableHead: {
                main: {
                    position: 'relative',
                    backgroundColor: mainColor,
                    color: "green",
                    // display: "flex",
                    // alignItems: "stretch"
                },
                fixedHeader: {
                    // position: "relative",
                    // borderBottom: "1px rgba(0,0,0,0.1) solid",
                    backgroundColor: 'white', //'rgba(0,76,151,0.05)',
                    color: "#2a9c6c",
                    padding: "10px 20px",
                    height: "auto"
                    ,
                    marginTop: "10px"
                },
            },
            MUIDataTableHeadRow: {
                root: {
                    position: 'relative',
                    backgroundColor: mainColor,
                }
            },
            MUIDataTableHeadCell: {
                root: {
                    fontSize: "12pt",
                    fontWeight: "500",
                    color: "#555",
                    backgroundColor: secondColor,
                },
                fixedHeader: {
                    // position: "relative",
                    // borderBottom: "1px rgba(0,0,0,0.1) solid",
                    backgroundColor: 'white', //'rgba(0,76,151,0.05)',
                    color: "#2a9c6c",
                    padding: "10px 25px",
                    height: "auto"
                },
                toolButton: {
                    display: "flex",
                    height: "auto",
                    whiteSpace: 'nowrap'
                },
                data: {
                    display: "inline-block",
                    verticalAlign: "top",
                },
                sortActive: {
                    color: "#555"
                },
                sortAction: {
                    color: "#555",
                    display: "inline-block",
                    verticalAlign: "top",
                    MuiButtonBase: {
                        color: "#555",
                        root: {
                            color: "#555",
                        }
                    }
                }
            },
            MUIDataTableBodyCell: {
                root: {
                    position: 'relative',
                    fontSize: "13px",
                },
                cellStacked: {
                    "&:nth-child(odd)": {
                        background: "yellow"
                    },
                }
            },
            MUIDataTableBodyRow: {
                root: {
                    '&:nth-child(odd)': {
                        backgroundColor: '#e7ffec'
                    }
                }
            },
            MUIDataTableSelectCell: {
                headerCell: {
                    backgroundColor: secondColor,
                    checkboxRoot: {
                        color: "#555",
                    }
                },
                checkboxRoot: {
                    color: "#555"
                }
            },
            MuiInput: {
                root: {
                    top: "5px",
                    color: "#555 !important",
                },
                underline: {
                    borderBottom: "1px #555 solid !important",
                }
            },
            MuiSelect: {
                root: {
                    top: "0",
                    color: "#555 !important",
                },
            }
            // MuiIconButton: {
            //   root: {
            //     color: "#fff !important",
            //   }
            // }
        }
    }
}

exports.customTable3 = function () {
    return {
        typography: {
            useNextVariants: true,
        },
        overrides: {
            MUIDataTable: {
                paper: {
                    // position: 'relativ3p;[e',
                    // width: '100% !important',
                    boxShadow: 'none !important',
                    //   boxShadow: "0 0 0 0 rgba(154,161,171,.15)",
                    // border: "1px rgba(0,0,0,0.1) solid",
                    borderRadius: "30px",
                    // overflow: "hidden",
                    // minHeight: 480,
                    marginTop: 10
                },
                // responsiveScroll: {
                //   position: 'relative',
                //   width: '100% !important',
                // }
                responsiveScrollMaxHeight: {
                    // backgroundColor: 'red'
                    //   height: 'calc(100vh)',
                    minHeight: 'calc(100vh - 400px) !important',
                    maxHeight: 'calc(100vh - 400px) !important'
                },
            },
            MuiToolbar: {
                root: {
                    position: 'relative',
                }
            },
            MUIDataTableToolbar: {
                root: {
                    position: 'relative',
                    padding: "0px 5px",
                    backgroundColor: 'white', //'rgba(0,76,151,0.05)',
                },
                titleText: {
                    color: "#555"
                },
                icon: {
                    color: "#555 !important"
                },
                iconActive: {
                    color: "#555 !important"
                },
                left: {
                    flex: "0 0 auto !important"
                },
                actions: {
                    flex: "1 0 auto !important",
                    textAlign: 'right'
                }
            },
            MUIDataTableSearch: {
                main: {
                    position: 'absolute',
                    top: "2px",
                    right: "2px",
                    width: "350px !important",
                    backgroundColor: "white",
                    zIndex: "10",
                    textAlign: "right",
                    display: "block",
                },
                searchIcon: {
                    width: "50px !important",
                    color: "#555 !important",
                    display: "inline-block",
                    textAlign: "center",
                    verticalAlign: "top",
                },
                searchText: {
                    width: "calc(100% - 120px) !important",
                    marginRight: "10px",
                    color: "#555 !important",
                    display: "inline-block",
                    verticalAlign: "top",
                },
                clearIcon: {
                    width: "50px !important",
                    color: "#555 !important",
                    display: "inline-block",
                    verticalAlign: "top",
                },
            },
            MuiTableCell: {
                root: {
                    display: 'table-cell',
                    padding: 8,
                    paddingLeft: 25,
                    paddingRight: 25,
                    fontSize: '0.875rem',
                    textAlign: 'left',
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    lineHeight: 1.43,
                    borderBottom: '1px solid #fff',
                    letterSpacing: '0.01071em',
                    verticalAlign: 'inherit',
                }
            },
            MuiPopover: {
                paper: {
                    outline: 0,
                    position: 'absolute',
                    maxWidth: 'calc(100% -32px)',
                    minWidth: 199,
                    maxHeight: 'calc(100% -32px)',
                    minHeight: 16,
                    overflowX: 'hidden',
                    overflowY: 'auto',
                    width: 400
                }
            },
            MUIDataTableFilterList: {
                root: {
                    backgroundColor: "white",
                    margin: "0px 0px 0px 0px",
                    padding: "0px 16px 0px 16px"
                },
                chip: {
                    margin: "8px 8px 8px 0px",
                    color: "#555",
                }
            },
            MUIDataTableHead: {
                main: {
                    position: 'relative',
                    backgroundColor: mainColor,
                    color: "green",
                    // display: "flex",
                    // alignItems: "stretch"
                },
                fixedHeader: {
                    // position: "relative",
                    // borderBottom: "1px rgba(0,0,0,0.1) solid",
                    backgroundColor: 'white', //'rgba(0,76,151,0.05)',
                    color: "#2a9c6c",
                    padding: "10px 20px",
                    height: "auto"
                    ,
                    marginTop: "10px"
                },
            },
            MUIDataTableHeadRow: {
                root: {
                    position: 'relative',
                    backgroundColor: mainColor,
                }
            },
            MUIDataTableHeadCell: {
                root: {
                    fontSize: "12pt",
                    fontWeight: "500",
                    color: "#555",
                    backgroundColor: secondColor,
                },
                fixedHeader: {
                    // position: "relative",
                    // borderBottom: "1px rgba(0,0,0,0.1) solid",
                    backgroundColor: 'white', //'rgba(0,76,151,0.05)',
                    color: "#2a9c6c",
                    padding: "10px 25px",
                    height: "auto"
                },
                toolButton: {
                    display: "flex",
                    height: "auto",
                    whiteSpace: 'nowrap'
                },
                data: {
                    display: "inline-block",
                    verticalAlign: "top",
                },
                sortActive: {
                    color: "#555"
                },
                sortAction: {
                    color: "#555",
                    display: "inline-block",
                    verticalAlign: "top",
                    MuiButtonBase: {
                        color: "#555",
                        root: {
                            color: "#555",
                        }
                    }
                }
            },
            MUIDataTableBodyCell: {
                root: {
                    position: 'relative',
                    fontSize: "13px",
                },
                cellStacked: {
                    "&:nth-child(odd)": {
                        background: "yellow"
                    },
                }
            },
            MUIDataTableBodyRow: {
                root: {
                    '&:nth-child(odd)': {
                        backgroundColor: '#e7ffec'
                    }
                }
            },
            MUIDataTableSelectCell: {
                headerCell: {
                    backgroundColor: secondColor,
                    checkboxRoot: {
                        color: "#555",
                    }
                },
                checkboxRoot: {
                    color: "#555"
                }
            },
            MuiInput: {
                root: {
                    top: "5px",
                    color: "#555 !important",
                },
                underline: {
                    borderBottom: "1px #555 solid !important",
                }
            },
            MuiSelect: {
                root: {
                    top: "0",
                    color: "#555 !important",
                },
            }
            // MuiIconButton: {
            //   root: {
            //     color: "#fff !important",
            //   }
            // }
        }
    }
}

exports.customTablePemanggilan = function () {
    return {
        typography: {
            useNextVariants: true,
        },
        overrides: {
            MUIDataTable: {
                paper: {
                    // position: 'relativ3p;[e',
                    // width: '100% !important',
                    boxShadow: 'none !important',
                    //   boxShadow: "0 0 0 0 rgba(154,161,171,.15)",
                    // border: "1px rgba(0,0,0,0.1) solid",
                    // borderRadius: "30px",
                    // overflow: "hidden",
                    // minHeight: 480,
                    marginTop: 10
                },
                // responsiveScroll: {
                //   position: 'relative',
                //   width: '100% !important',
                // }
                responsiveScrollMaxHeight: {
                    // backgroundColor: 'red'
                    //   height: 'calc(100vh)',
                    minHeight: 'calc(100vh - 350px) !important',
                    maxHeight: 'calc(100vh - 350px) !important'
                },
            },
            MuiToolbar: {
                root: {
                    position: 'relative',
                }
            },
            MUIDataTableToolbar: {
                root: {
                    position: 'relative',
                    padding: "0px 5px",
                    backgroundColor: 'white', //'rgba(0,76,151,0.05)',
                },
                titleText: {
                    color: "#555"
                },
                icon: {
                    color: "#555 !important"
                },
                iconActive: {
                    color: "#555 !important"
                },
                left: {
                    flex: "0 0 auto !important"
                },
                actions: {
                    flex: "1 0 auto !important",
                    textAlign: "right !important",
                }
            },
            MUIDataTableSearch: {
                main: {
                    position: 'absolute',
                    top: "2px",
                    right: "2px",
                    width: "350px !important",
                    backgroundColor: "white",
                    zIndex: "10",
                    textAlign: "right",
                    display: "block",
                },
                searchIcon: {
                    width: "50px !important",
                    color: "#555 !important",
                    display: "inline-block",
                    textAlign: "center",
                    verticalAlign: "top",
                },
                searchText: {
                    width: "calc(100% - 120px) !important",
                    marginRight: "10px",
                    color: "#555 !important",
                    display: "inline-block",
                    verticalAlign: "top",
                },
                clearIcon: {
                    width: "50px !important",
                    color: "#555 !important",
                    display: "inline-block",
                    verticalAlign: "top",
                },
            },
            MuiTableCell: {
                root: {
                    display: 'table-cell',
                    padding: 8,
                    paddingLeft: 25,
                    paddingRight: 25,
                    fontSize: '0.875rem',
                    textAlign: 'left',
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    lineHeight: 1.43,
                    borderBottom: '1px solid #fff',
                    letterSpacing: '0.01071em',
                    verticalAlign: 'inherit',
                }
            },
            MuiPopover: {
                paper: {
                    outline: 0,
                    position: 'absolute',
                    maxWidth: 'calc(100% -32px)',
                    minWidth: 199,
                    maxHeight: 'calc(100% -32px)',
                    minHeight: 16,
                    overflowX: 'hidden',
                    overflowY: 'auto',
                    width: 400
                }
            },
            MUIDataTableFilterList: {
                root: {
                    backgroundColor: "white",
                    margin: "0px 0px 0px 0px",
                    padding: "0px 16px 0px 16px"
                },
                chip: {
                    margin: "8px 8px 8px 0px",
                    color: "#555",
                }
            },
            MUIDataTableHead: {
                main: {
                    position: 'relative',
                    backgroundColor: mainColor,
                    color: "green",
                    // display: "flex",
                    // alignItems: "stretch"
                },
                fixedHeader: {
                    // position: "relative",
                    // borderBottom: "1px rgba(0,0,0,0.1) solid",
                    backgroundColor: 'white', //'rgba(0,76,151,0.05)',
                    color: "#2a9c6c",
                    padding: "10px 20px",
                    height: "auto"
                    ,
                    marginTop: "10px"
                },
            },
            MUIDataTableHeadRow: {
                root: {
                    position: 'relative',
                    backgroundColor: mainColor,
                }
            },
            MUIDataTableHeadCell: {
                root: {
                    fontSize: "12pt",
                    fontWeight: "500",
                    color: "#555",
                    backgroundColor: secondColor,
                },
                fixedHeader: {
                    // position: "relative",
                    // borderBottom: "1px rgba(0,0,0,0.1) solid",
                    backgroundColor: 'white', //'rgba(0,76,151,0.05)',
                    color: "#2a9c6c",
                    padding: "10px 25px",
                    height: "auto"
                },
                toolButton: {
                    display: "flex",
                    height: "auto",
                    whiteSpace: 'nowrap'
                },
                data: {
                    display: "inline-block",
                    verticalAlign: "top",
                },
                sortActive: {
                    color: "#555"
                },
                sortAction: {
                    color: "#555",
                    display: "inline-block",
                    verticalAlign: "top",
                    MuiButtonBase: {
                        color: "#555",
                        root: {
                            color: "#555",
                        }
                    }
                }
            },
            MUIDataTableBodyCell: {
                root: {
                    position: 'relative',
                    fontSize: "13px",
                },
                cellStacked: {
                    "&:nth-child(odd)": {
                        background: "yellow"
                    },
                }
            },
            MUIDataTableBodyRow: {
                root: {
                    '&:nth-child(odd)': {
                        backgroundColor: '#e7ffec'
                    }
                }
            },
            MUIDataTableSelectCell: {
                headerCell: {
                    backgroundColor: secondColor,
                    checkboxRoot: {
                        color: "#555",
                    }
                },
                checkboxRoot: {
                    color: "#555"
                }
            },
            MuiInput: {
                root: {
                    top: "5px",
                    color: "#555 !important",
                },
                underline: {
                    borderBottom: "1px #555 solid !important",
                }
            },
            MuiSelect: {
                root: {
                    top: "0",
                    color: "#555 !important",
                },
            }
            // MuiIconButton: {
            //   root: {
            //     color: "#fff !important",
            //   }
            // }
        }
    }
}


exports.customTableHistory = function () {
    return {
        typography: {
            useNextVariants: true,
        },
        overrides: {
            MUIDataTable: {
                paper: {
                    // position: 'relativ3p;[e',
                    // width: '100% !important',
                    boxShadow: 'none !important',
                    //   boxShadow: "0 0 0 0 rgba(154,161,171,.15)",
                    // border: "1px rgba(0,0,0,0.1) solid",
                    // borderRadius: "30px",
                    // overflow: "hidden",
                    // minHeight: 480,
                    marginTop: 10
                },
                // responsiveScroll: {
                //   position: 'relative',
                //   width: '100% !important',
                // }
                responsiveScrollMaxHeight: {
                    // backgroundColor: 'red'
                    //   height: 'calc(100vh)',
                    minHeight: 'calc(100vh - 250px) !important',
                    maxHeight: 'calc(100vh - 250px) !important'
                },
            },
            MuiToolbar: {
                root: {
                    position: 'relative',
                }
            },
            MUIDataTableToolbar: {
                root: {
                    position: 'relative',
                    padding: "0px 5px",
                    backgroundColor: 'white', //'rgba(0,76,151,0.05)',
                },
                titleText: {
                    color: "#555"
                },
                icon: {
                    color: "#555 !important"
                },
                iconActive: {
                    color: "#555 !important"
                },
                left: {
                    flex: "0 0 auto !important"
                },
                actions: {
                    flex: "1 0 auto !important",
                    textAlign: 'right'
                }
            },
            MUIDataTableSearch: {
                main: {
                    position: 'absolute',
                    top: "2px",
                    right: "2px",
                    width: "350px !important",
                    backgroundColor: "white",
                    zIndex: "10",
                    textAlign: "right",
                    display: "block",
                },
                searchIcon: {
                    width: "50px !important",
                    color: "#555 !important",
                    display: "inline-block",
                    textAlign: "center",
                    verticalAlign: "top",
                },
                searchText: {
                    width: "calc(100% - 120px) !important",
                    marginRight: "10px",
                    color: "#555 !important",
                    display: "inline-block",
                    verticalAlign: "top",
                },
                clearIcon: {
                    width: "50px !important",
                    color: "#555 !important",
                    display: "inline-block",
                    verticalAlign: "top",
                },
            },
            MuiTableCell: {
                root: {
                    display: 'table-cell',
                    padding: 15,
                    paddingLeft: 25,
                    paddingRight: 25,
                    fontSize: '0.875rem',
                    textAlign: 'left',
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    lineHeight: 1.43,
                    borderBottom: '1px solid #fff',
                    letterSpacing: '0.01071em',
                    verticalAlign: 'inherit',
                }
            },
            MuiPopover: {
                paper: {
                    outline: 0,
                    position: 'absolute',
                    maxWidth: 'calc(100% -32px)',
                    minWidth: 199,
                    maxHeight: 'calc(100% -32px)',
                    minHeight: 16,
                    overflowX: 'hidden',
                    overflowY: 'auto',
                    width: 400
                }
            },
            MUIDataTableFilterList: {
                root: {
                    backgroundColor: "white",
                    margin: "0px 0px 0px 0px",
                    padding: "0px 16px 0px 16px"
                },
                chip: {
                    margin: "8px 8px 8px 0px",
                    color: "#555",
                }
            },
            MUIDataTableHead: {
                main: {
                    position: 'relative',
                    backgroundColor: mainColor,
                    color: "green",
                    // display: "flex",
                    // alignItems: "stretch"
                },
                fixedHeader: {
                    // position: "relative",
                    // borderBottom: "1px rgba(0,0,0,0.1) solid",
                    backgroundColor: 'white', //'rgba(0,76,151,0.05)',
                    color: "#2a9c6c",
                    padding: "10px 20px",
                    height: "auto"
                    ,
                    marginTop: "10px"
                },
            },
            MUIDataTableHeadRow: {
                root: {
                    position: 'relative',
                    backgroundColor: mainColor,
                }
            },
            MUIDataTableHeadCell: {
                root: {
                    fontSize: "12pt",
                    fontWeight: "500",
                    color: "#555",
                    backgroundColor: secondColor,
                },
                fixedHeader: {
                    // position: "relative",
                    // borderBottom: "1px rgba(0,0,0,0.1) solid",
                    backgroundColor: 'white', //'rgba(0,76,151,0.05)',
                    color: "#2a9c6c",
                    padding: "10px 25px",
                    height: "auto"
                },
                toolButton: {
                    display: "flex",
                    height: "auto",
                    whiteSpace: 'nowrap'
                },
                data: {
                    display: "inline-block",
                    verticalAlign: "top",
                },
                sortActive: {
                    color: "#555"
                },
                sortAction: {
                    color: "#555",
                    display: "inline-block",
                    verticalAlign: "top",
                    MuiButtonBase: {
                        color: "#555",
                        root: {
                            color: "#555",
                        }
                    }
                }
            },
            MUIDataTableBodyCell: {
                root: {
                    position: 'relative',
                    fontSize: "13px",
                },
                cellStacked: {
                    "&:nth-child(odd)": {
                        background: "yellow"
                    },
                }
            },
            MUIDataTableBodyRow: {
                root: {
                    '&:nth-child(odd)': {
                        backgroundColor: '#e7ffec'
                    }
                }
            },
            MUIDataTableSelectCell: {
                headerCell: {
                    backgroundColor: secondColor,
                    checkboxRoot: {
                        color: "#555",
                    }
                },
                checkboxRoot: {
                    color: "#555"
                }
            },
            MuiInput: {
                root: {
                    top: "5px",
                    color: "#555 !important",
                },
                underline: {
                    borderBottom: "1px #555 solid !important",
                }
            },
            MuiSelect: {
                root: {
                    top: "0",
                    color: "#555 !important",
                },
            }
            // MuiIconButton: {
            //   root: {
            //     color: "#fff !important",
            //   }
            // }
        }
    }
}

exports.customOptions = function () {
    return {
        // selectableRows: false,
        // selectableRows: 'none',
        // filterType: 'multiselect',
        // responsive: 'scroll',
        // viewColumns: true,
        // rowsPerPage: 5,
        // rowsPerPageOptions: [5, 10, 20, 50],
        // print: false,
        // download: false,
        // elevation: 5,
        // filter: true,
        // search: true,
        filterType: 'multiselect',
        // pagination: false,
        fixedHeader: true,
        filter: true,
        download: false,
        search: true,
        sort: false,
        print: false,
        selectableRows: false,
        viewColumns: false,
        rowsPerPage: 10,
        responsive: 'scrollMaxHeight',
        textLabels: {
            body: {
                noMatch: "Tidak ada data yang tersedia",
                toolTip: "Sort",
                columnHeaderTooltip: column => `Sort for ${column.label}`
            },
            pagination: {
                next: "Next Page",
                previous: "Previous Page",
                rowsPerPage: "Rows per page:",
                displayRows: "of",
            },
            toolbar: {
                search: "Search",
                downloadCsv: "Download CSV",
                print: "Print",
                viewColumns: "View Columns",
                filterTable: "Filter Table",
            },
            filter: {
                all: "All",
                title: "FILTERS",
                reset: "RESET",
            },
            viewColumns: {
                title: "Show Columns",
                titleAria: "Show/Hide Table Columns",
            },
            selectedRows: {
                text: "row(s) selected",
                delete: "Delete",
                deleteAria: "Delete Selected Rows",
            },
        }
    }
}
exports.customOptionsDownload = function () {
    return {
        // selectableRows: false,
        // selectableRows: 'none',
        // filterType: 'multiselect',
        // responsive: 'scroll',
        // viewColumns: true,
        // rowsPerPage: 5,
        // rowsPerPageOptions: [5, 10, 20, 50],
        // print: false,
        // download: false,
        // elevation: 5,
        // filter: true,
        // search: true,
        filterType: 'multiselect',
        // pagination: false,
        fixedHeader: true,
        filter: true,
        download: true,
        search: true,
        sort: false,
        print: false,
        selectableRows: false,
        viewColumns: false,
        rowsPerPage: 10,
        responsive: 'scrollMaxHeight',
    }
}

exports.customOptions2 = function () {
    return {
        // selectableRows: false,
        selectableRows: 'none',
        filterType: 'multiselect',
        responsive: 'scrollMaxHeight',
        rowsPerPage: 5,
        rowsPerPageOptions: [5, 10, 20, 50],
        print: false,
        download: false,
        elevation: 5,
    }
}

exports.customOptionsFixedColumn = function () {
    return {
        // selectableRows: false,
        selectableRows: 'none',
        filterType: false,
        filter: false,
        sort: false,
        responsive: 'scrollMaxHeight',
        viewColumns: false,
        // overflowX: 'auto',
        print: false,
        download: false,
        elevation: 5,
        search: false,
        pagination: false
    }
}

exports.customOptionsNofilSearch = function () {
    return {
        filterType: 'multiselect',
        fixedHeader: true,
        filter: false,
        search: false,
        sort: false,
        print: false,
        download: false,
        selectableRows: false,
        viewColumns: false,
        rowsPerPage: 10,
        responsive: 'scrollMaxHeight',
    }
}
exports.customOptionsSearch = function () {
    return {
        filterType: 'multiselect',
        fixedHeader: true,
        filter: false,
        search: true,
        sort: false,
        print: false,
        download: false,
        selectableRows: false,
        viewColumns: false,
        rowsPerPage: 10,
        responsive: 'scrollMaxHeight',
    }
}

exports.customOptionsSearchAndFilter = function () {
    return {
        filterType: 'multiselect',
        fixedHeader: true,
        filter: true,
        search: true,
        sort: true,
        print: false,
        download: false,
        selectableRows: false,
        viewColumns: false,
        rowsPerPage: 10,
        responsive: 'scrollMaxHeight',
    }
}

exports.customOptionsRole = function () {
    return {
        filterType: 'textField',
        fixedHeader: true,
        filter: true,
        search: true,
        sort: false,
        print: false,
        download: false,
        selectableRows: false,
        viewColumns: false,
        rowsPerPage: 10,
        responsive: 'scrollMaxHeight',
    }
}