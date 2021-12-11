import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import {
  Button,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  CssBaseline,
  ListItem,
  ListItemIcon,
  Box,
  Menu,
  MenuItem,
  Avatar,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Logout, PersonAdd, Settings } from "@mui/icons-material";
import { deepOrange, green } from "@mui/material/colors";
import setting from '../assets/ic_web_setting.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch, useLocation, useHistory
} from "react-router-dom";
import HomeRoute from '../router/HomeRoutes'
import Constant from "../library/Constants";
import database from "../library/Databases";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  backgroundColor: "#1A3783",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Home() {
  const history = useHistory();
  let location = useLocation();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openAvatar = Boolean(anchorEl);
  const [data, setData] = React.useState(
    {
      array: [
        {
          "menu_id": 2,
          "class_id": "dashboard",
          "menu_name": "Dashboard",
          "type": "item",
          "icon": "general",
          "reference": 1,
          "sub_menu": []
        },
        {
          "menu_id": 3,
          "class_id": "masterdata",
          "menu_name": "Master Data",
          "type": "item",
          "icon": "general",
          "reference": 1,
          "sub_menu": [
            {
              "menu_id": 6,
              "class_id": "daftar-barang",
              "menu_name": "Daftar Barang",
              "type": "item",
              "icon": "master-data",
              "reference": 3,
              "sub_menu": [
                {
                  "menu_id": 17,
                  "class_id": "barang",
                  "menu_name": "Barang",
                  "type": "item",
                  "icon": "",
                  "reference": 6,
                  "sub_menu": [],

                  "collapse": false,
                  "is_access": true,
                  "created": "",
                  "updated": null
                },
                {
                  "menu_id": 18,
                  "class_id": "jenis-barang",
                  "menu_name": "Jenis Barang",
                  "type": "item",
                  "icon": "",
                  "reference": 6,
                  "sub_menu": [],
                  "collapse": false,
                  "is_access": true,
                  "created": "",
                  "updated": null
                },
                {
                  "menu_id": 19,
                  "class_id": "satuan-barang",
                  "menu_name": "Satuan Barang",
                  "type": "item",
                  "icon": "",
                  "reference": 6,
                  "sub_menu": [],
                  "collapse": false,
                  "is_access": true,
                  "created": "",
                  "updated": null
                },
                {
                  "menu_id": 20,
                  "class_id": "golongan-barang",
                  "menu_name": "Golongan Barang",
                  "type": "item",
                  "icon": "",
                  "reference": 6,
                  "sub_menu": [],
                  "collapse": false,
                  "is_access": true,
                  "created": "",
                  "updated": null
                }
              ],
              "collapse": false,
              "is_access": true,
              "created": "",
              "updated": null
            },
            {
              "menu_id": 21,
              "class_id": "daftar-regional",
              "menu_name": "Daftar Regional",
              "type": "item",
              "icon": "transaction",
              "reference": 3,
              "sub_menu": [
                {
                  "menu_id": 29,
                  "class_id": "regional",
                  "menu_name": "Regional",
                  "type": "item",
                  "icon": " ",
                  "reference": 21,
                  "sub_menu": [],
                  "collapse": false,
                  "is_access": true,
                  "created": "",
                  "updated": null
                },
                // {
                //   "menu_id": 30,
                //   "class_id": "wilayah",
                //   "menu_name": "Wilayah",
                //   "type": "item",
                //   "icon": " ",
                //   "reference": 21,
                //   "sub_menu": [],
                //   "collapse": false,
                //   "is_access": true,
                //   "created": "",
                //   "updated": null
                // },
              ],
              "collapse": false,
              "is_access": true,
              "created": "",
              "updated": null
            },
            {
              "menu_id": 22,
              "class_id": "daftar-user",
              "menu_name": "Daftar User",
              "type": "item",
              "icon": "setup",
              "reference": 3,
              "sub_menu": [
                {
                  "menu_id": 23,
                  "class_id": "akun-user",
                  "menu_name": "Akun User",
                  "type": "item ",
                  "icon": " ",
                  "reference": 22,
                  "sub_menu": [],
                  "collapse": false,
                  "is_access": true,
                  "created": "",
                  "updated": null
                },
                {
                  "menu_id": 24,
                  "class_id": "level-user",
                  "menu_name": "Level User",
                  "type": "item",
                  "icon": "",
                  "reference": 22,
                  "sub_menu": [],
                  "collapse": false,
                  "is_access": true,
                  "created": "",
                  "updated": null
                }
              ],
              "collapse": false,
              "is_access": true,
              "created": "",
              "updated": null
            },
            // {
            //   "menu_id": 25,
            //   "class_id": "daftar-supplier",
            //   "menu_name": "Daftar Supplier",
            //   "type": "item",
            //   "icon": "setup",
            //   "reference": 3,
            //   "sub_menu": [
            //     {
            //       "menu_id": 26,
            //       "class_id": "supplier",
            //       "menu_name": "Supplier",
            //       "type": "item ",
            //       "icon": " ",
            //       "reference": 25,
            //       "sub_menu": [],
            //       "collapse": false,
            //       "is_access": true,
            //       "created": "",
            //       "updated": null
            //     },
            //     {
            //       "menu_id": 27,
            //       "class_id": "jenis-supplier",
            //       "menu_name": "Jenis Supplier",
            //       "type": "item",
            //       "icon": "",
            //       "reference": 25,
            //       "sub_menu": [],
            //       "collapse": false,
            //       "is_access": true,
            //       "created": "",
            //       "updated": null
            //     }
            //   ],
            //   "collapse": false,
            //   "is_access": true,
            //   "created": "",
            //   "updated": null
            // },
            {
              "menu_id": 28,
              "class_id": "daftar-akun",
              "menu_name": "Daftar Akun",
              "type": "item",
              "icon": "setup",
              "reference": 3,
              "sub_menu": [
                {
                  "menu_id": 29,
                  "class_id": "account",
                  "menu_name": "Account",
                  "type": "item ",
                  "icon": " ",
                  "reference": 28,
                  "sub_menu": [],
                  "collapse": false,
                  "is_access": true,
                  "created": "",
                  "updated": null
                },
                {
                  "menu_id": 30,
                  "class_id": "kategori-account",
                  "menu_name": "Kategori Account",
                  "type": "item",
                  "icon": "",
                  "reference": 28,
                  "sub_menu": [],
                  "collapse": false,
                  "is_access": true,
                  "created": "",
                  "updated": null
                }
              ],
              "collapse": false,
              "is_access": true,
              "created": "",
              "updated": null
            },
          ],
          "collapse": false,
          "is_access": true,
          "created": "",
          "updated": null
        },
        {
          "menu_id": 29,
          "class_id": "budgeting",
          "menu_name": "Budgeting",
          "type": "item",
          "icon": "general",
          "reference": 1,
          "sub_menu": [
            {
              "menu_id": 30,
              "class_id": "alokasi-dana",
              "menu_name": "Alokasi Dana",
              "type": "item",
              "icon": "master-data",
              "reference": 29,
              "sub_menu": [],
              "collapse": false,
              "is_access": true,
              "created": "",
              "updated": null
            },
            {
              "menu_id": 31,
              "class_id": "dana-non-rutin",
              "menu_name": "Dana Non Rutin",
              "type": "item",
              "icon": "master-data",
              "reference": 29,
              "sub_menu": [],
              "collapse": false,
              "is_access": true,
              "created": "",
              "updated": null
            }
          ],
          "collapse": false,
          "is_access": true,
          "created": "",
          "updated": null
        },
        {
          "menu_id": 32,
          "class_id": "inventory",
          "menu_name": "Inventory",
          "type": "item",
          "icon": "general",
          "reference": 1,
          "sub_menu": [
            {
              "menu_id": 33,
              "class_id": "quotation",
              "menu_name": "Quotation",
              "type": "item",
              "icon": "master-data",
              "reference": 32,
              "sub_menu": [],
              "collapse": false,
              "is_access": true,
              "created": "",
              "updated": null
            },
            {
              "menu_id": 34,
              "class_id": "po",
              "menu_name": "PO",
              "type": "item",
              "icon": "master-data",
              "reference": 32,
              "sub_menu": [],
              "collapse": false,
              "is_access": true,
              "created": "",
              "updated": null
            },
            {
              "menu_id": 37,
              "class_id": "surat-jalan",
              "menu_name": "Surat Jalan",
              "type": "item",
              "icon": "master-data",
              "reference": 32,
              "sub_menu": [],
              "collapse": false,
              "is_access": true,
              "created": "",
              "updated": null
            },
            {
              "menu_id": 35,
              "class_id": "penerimaan-barang",
              "menu_name": "Penerimaan Barang",
              "type": "item",
              "icon": "master-data",
              "reference": 32,
              "sub_menu": [],
              "collapse": false,
              "is_access": true,
              "created": "",
              "updated": null
            },
            {
              "menu_id": 35,
              "class_id": "invoice-supplier",
              "menu_name": "Invoice Supplier",
              "type": "item",
              "icon": "master-data",
              "reference": 32,
              "sub_menu": [],
              "collapse": false,
              "is_access": true,
              "created": "",
              "updated": null
            },
            {
              "menu_id": 36,
              "class_id": "retur-barang",
              "menu_name": "Retur Barang",
              "type": "item",
              "icon": "master-data",
              "reference": 32,
              "sub_menu": [],
              "collapse": false,
              "is_access": true,
              "created": "",
              "updated": null
            },
            {
              "menu_id": 37,
              "class_id": "retur-service-barang",
              "menu_name": "Retur/ Service Barang",
              "type": "item",
              "icon": "master-data",
              "reference": 32,
              "sub_menu": [],
              "collapse": false,
              "is_access": true,
              "created": "",
              "updated": null
            }
          ],
          "collapse": false,
          "is_access": true,
          "created": "",
          "updated": null
        },
        {
          "menu_id": 38,
          "class_id": "reporting",
          "menu_name": "Reporting",
          "type": "item",
          "icon": "general",
          "reference": 1,
          "sub_menu": [
          ],
          "collapse": false,
          "is_access": true,
          "created": "",
          "updated": null
        }
      ]
    })
  const [selectedSubIndex, setSelectSub] = React.useState([]);
  const [selectedSubPath, setSelectSubPath] = React.useState("");
  const [menuid, setMenuid] = React.useState("");
  const [pathname, setPathname] = React.useState("")
  const [menu, setMenu] = React.useState("")
  const [selectedIndex, setSelectedIndex] = React.useState("Dashboard");
  const [selectedPath, setSelectedPath] = React.useState("dashboard");

  let { path, url } = useRouteMatch();

  React.useEffect(() => {
    let path = String(location.pathname).split('/')
    // localStorage.clear()
    let dataHeadOffice = JSON.parse(localStorage.getItem(Constant.DATA_HEAD_OFFICE))
    if (dataHeadOffice == null) {
      localStorage.setItem(Constant.DATA_HEAD_OFFICE, JSON.stringify(database))
    }
    setPathname(path[1])
  })

  function handleCollapse(item) {
    setOpen(true);
    let arr = data.array
    let index = arr.findIndex((val) => val.menu_name === item.menu_name)
    arr[index].collapse = !arr[index].collapse
    setData({ ...data, data: arr })
  }

  function handleCollapseSub(item) {
    setOpen(true);
    console.log(item, data.array);
    let idx = data.array.findIndex((val) => val.menu_id === item.reference)
    if (idx > -1) {
      let index = data.array[idx].sub_menu.findIndex((val) => val.menu_id === item.menu_id)
      data.array[idx].sub_menu[index].collapse = !data.array[idx].sub_menu[index].collapse
      forceUpdate()
    }
    console.log(data.array);
    // let arr = data.array
    // let index = arr.findIndex((val) => val.menu_name === item.menu_name)
    // arr[index].collapse = !arr[index].collapse
    // setData({ ...data, data: arr })
  }

  const forceUpdate = React.useReducer(bool => !bool)[1];

  const logout = () => {
    window.location.reload();
  }

  const selectSub = (e) => {
    // console.log(e);
    setOpen(true)
    setMenuid(e.id)
    setSelectSub(e.menu_name)
    setSelectSubPath(e.class_id)
    setSelectedIndex("")
    setSelectedPath("")
  }

  const selectIndex = (e) => {
    // console.log(e);
    setMenuid(e.id)
    setSelectSub("")
    setSelectSubPath("")
    setSelectedIndex(e.menu_name)
    setSelectedPath(e.class_id)
    // alert(e)
    // if (open === false) {
    // setOpen(true)
    // }
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{ boxShadow: '0px 1px 0px -13px rgb(0 0 0 / 20%), 0px 0px 0px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)' }}>
        <Toolbar style={{ backgroundColor: "#FFFFFF" }}>
          <div style={{ display: "flex", justifyContent: "space-between", width: '-webkit-fill-available' }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: "36px",
                  ...(open && { display: "none" }),
                }}
              >
                <MenuIcon style={{ color: "#1d56db" }} />
              </IconButton>
              {/* <Typography variant="h6" noWrap component="div">
                <Button size="medium" variant="outlined" style={{ backgroundColor: '#F3F6F9' }}>
                  <Typography>Pages</Typography>
                </Button>
                <Button size="medium">
                  <Typography>Feature</Typography>
                </Button>
                <Button size="medium">
                  <Typography>Apps</Typography>
                </Button>
              </Typography> */}
            </div>
            {/* <Avatar sx={{ bgcolor: green[50] }} variant="square"> */}
              <Typography style={{ color: green[500] }}>Head Office / Region</Typography>
            {/* </Avatar> */}
          </div>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader style={{ backgroundColor: "#FAC745" }}>
          <div
            style={{
              display: "flex",
              width: "-webkit-fill-available",
              justifyContent: "space-between",
              padding: 10,
            }}
          >
            <Typography
              style={{
                color: "#1A3783",
                fontWeight: "bold",
                alignSelf: "center",
              }}
            >
              METRONIC
            </Typography>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon style={{ color: "gray" }} />
              ) : (
                <ChevronLeftIcon style={{ color: "gray" }} />
              )}
            </IconButton>
          </div>
        </DrawerHeader>
        <Divider />
        <List>
          {data.array && data.array.map((item, index) => (
            <div style={{ marginTop: index === 0 ? null : 5 }} >
              {item.sub_menu.length > 0 ?
                <a data-tip={item.menu_name} data-for={item.menu_name}>
                  <div style={{ justifyContent: 'space-between', flexDirection: 'row', display: 'flex', paddingLeft: open ? 20 : 0, paddingRight: open ? 10 : 5, cursor: 'pointer' }} onClick={() => { handleCollapse(item) }}>
                    <ListItem key={item.menu_name} style={{ padding: '10px 0', marginLeft: 20 }}>
                      <ListItemIcon style={{ minWidth: open ? 40 : 56 }}>
                        <div style={{ backgroundColor: !open ? pathname === item.class_id ? "white" : "transparent" : 'transparent', padding: 5, borderRadius: 10 }}>
                          <img
                            src={setting
                            }
                            style={{ width: 20, height: 20 }} />
                        </div>
                      </ListItemIcon>
                      <Typography style={{ fontFamily: 'Poppins', color: '#d5e0dc', fontSize: 12 }}>{item.menu_name}</Typography>
                    </ListItem>
                    {item.sub_menu.length > 0 ? (item.collapse ? <ExpandLess style={{ color: "#d5e0dc", alignSelf: 'center' }} /> : <ExpandMore style={{ color: "#d5e0dc", alignSelf: 'center' }} />) : null}
                    {/* {!open && (<ReactTooltip border={true} id={item.menu_name} place="bottom" type="light" effect="solid" />)} */}
                  </div>
                </a>
                :
                <Link to={`${url}${item.class_id}`}>
                  <div style={{ paddingLeft: open ? 20 : 0 }} className={pathname === item.class_id ? "active" : ""}>
                    <a data-tip={item.menu_name} data-for={item.menu_name}>
                      <ListItem button key={item.menu_name}
                        onClick={() => selectIndex(item)}
                        style={{ padding: '10px 0', marginLeft: 20 }}>
                        <ListItemIcon style={{ minWidth: open ? 40 : 56 }}>
                          <div style={{ backgroundColor: !open ? pathname === item.class_id ? "#white" : "transparent" : 'transparent', padding: 5, borderRadius: 10 }}>
                            <img
                              src={
                                setting
                              }
                              style={{ width: 20, height: 20 }} />
                          </div>
                        </ListItemIcon>
                        <Typography style={{ fontFamily: 'Poppins', color: pathname === item.class_id ? '#2a9c6c' : '#d5e0dc', fontSize: 12 }}>{item.menu_name}</Typography>
                      </ListItem>
                    </a>
                    {/* {!open && (<ReactTooltip border={true} id={item.menu_name} place="bottom" type="light" effect="solid" />)} */}
                  </div>
                </Link>
              }
              {item.sub_menu.length > 0 &&
                <div>
                  <Collapse in={item.collapse} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {item.sub_menu.map((sub, indexs) => {
                        return (
                          <div>
                            {sub.sub_menu.length > 0 ?
                              <a data-tip={sub.menu_name} data-for={sub.menu_name}>
                                <div style={{ justifyContent: 'space-between', flexDirection: 'row', display: 'flex', paddingLeft: open ? 20 : 0, paddingRight: open ? 10 : 5, cursor: 'pointer' }} onClick={() => { handleCollapseSub(sub) }}>
                                  <ListItem key={sub.menu_name} style={{ padding: '10px 0', marginLeft: 20 }}>
                                    <ListItemIcon style={{ minWidth: open ? 40 : 56 }}>
                                      <div style={{ backgroundColor: !open ? pathname === sub.class_id ? "white" : "transparent" : 'transparent', padding: 5, borderRadius: 10 }}>
                                        {/* <img
                                          src={setting
                                          }
                                          style={{ width: 20, height: 20 }} /> */}
                                      </div>
                                    </ListItemIcon>
                                    <Typography style={{ fontFamily: 'Poppins', color: '#d5e0dc', fontSize: 12 }}>{sub.menu_name}</Typography>
                                  </ListItem>
                                  {sub.sub_menu.length > 0 ? (sub.collapse ? <ExpandLess style={{ color: "#d5e0dc", alignSelf: 'center' }} /> : <ExpandMore style={{ color: "#d5e0dc", alignSelf: 'center' }} />) : null}
                                  {/* {!open && (<ReactTooltip border={true} id={sub.menu_name} place="bottom" type="light" effect="solid" />)} */}
                                </div>
                              </a>
                              :
                              <Link to={`${url}${sub.class_id}`}>
                                <div style={{ paddingLeft: open ? 20 : 0 }} className={pathname === sub.class_id ? "active" : ""}>
                                  <a data-tip={sub.menu_name} data-for={sub.menu_name}>
                                    <ListItem button key={sub.menu_name}
                                      onClick={() => selectIndex(sub)}
                                      style={{ padding: '10px 0', marginLeft: 20 }}>
                                      <ListItemIcon style={{ minWidth: open ? 40 : 56 }}>
                                        <div style={{ backgroundColor: !open ? pathname === sub.class_id ? "#white" : "transparent" : 'transparent', padding: 5, borderRadius: 10 }}>
                                          {/* <img
                                            src={
                                              setting
                                            }
                                            style={{ width: 20, height: 20 }} /> */}
                                        </div>
                                      </ListItemIcon>
                                      <Typography style={{ fontFamily: 'Poppins', color: pathname === sub.class_id ? '#2a9c6c' : '#d5e0dc', fontSize: 12 }}>{sub.menu_name}</Typography>
                                    </ListItem>
                                  </a>
                                  {/* {!open && (<ReactTooltip border={true} id={item.menu_name} place="bottom" type="light" effect="solid" />)} */}
                                </div>
                              </Link>
                            }
                            {sub.sub_menu.length > 0 &&
                              <Collapse in={sub.collapse} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                  {sub.sub_menu.map((subs, indexs) => {
                                    return (
                                      <Link to={subs.menu_name === "Logout" ? `/` : `${url}${subs.class_id}`}>
                                        <a data-tip={subs.menu_name} data-for={subs.menu_name}>
                                          <div
                                            style={{ paddingLeft: 60, borderTopLeftRadius: 20, borderBottomLeftRadius: 20, display: 'flex' }} className={selectedSubPath === subs.class_id ? "active" : ""}
                                            onClick={() => subs.menu_name === "Logout" ? logout() : selectSub(sub)}>
                                            <ListItem button style={{ padding: '10px 0', marginLeft: 40 }}>
                                              <Typography style={{ fontFamily: 'Poppins', color: selectedSubPath === subs.class_id ? '#2a9c6c' : '#d5e0dc', fontSize: 12 }}>{subs.menu_name}</Typography>
                                            </ListItem>
                                          </div>
                                        </a>
                                      </Link>
                                    )
                                  })}
                                </List>
                              </Collapse>
                            }
                          </div>
                        )
                        // return (
                        //   <Link to={sub.menu_name === "Logout" ? `/` : `${url}${sub.class_id}`}>
                        //     <a data-tip={sub.menu_name} data-for={sub.menu_name}>
                        //       <div
                        //         style={{ paddingLeft: 60, borderTopLeftRadius: 20, borderBottomLeftRadius: 20, display: 'flex' }} className={selectedSubPath === sub.class_id ? "active" : ""}
                        //         onClick={() => sub.menu_name === "Logout" ? logout() : selectSub(sub)}>
                        //         <ListItem button style={{ padding: '10px 0', marginLeft: 20 }}>
                        //           <Typography style={{ fontFamily: 'Poppins', color: selectedSubPath === sub.class_id ? '#2a9c6c' : '#d5e0dc', fontSize: 12 }}>{sub.menu_name}</Typography>
                        //         </ListItem>
                        //       </div> 
                        //     </a>
                        //   </Link>
                        // )
                      })}
                    </List>
                  </Collapse>
                </div>
              }
            </div>
            // <ListItem button key={text}>
            //     <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            //     <ListItemText primary={text}/>
            // </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }} style={{ padding: 0 }}>
        <DrawerHeader />
        {menuid !== "" && (
          <div style={{ height: '93vh', width: '-webkit-fill-available', backgroundColor: '#E9EBF3' }}>
            <Switch>
              {HomeRoute.map((route, index) => (
                // You can render a <Route> in as many places
                // as you want in your app. It will render along
                // with any other <Route>s that also match the URL.
                // So, a sidebar or breadcrumbs or anything else
                // that requires you to render multiple things
                // in multiple places at the same URL is nothing
                // more than multiple <Route>s.
                <Route
                  key={index}
                  path={route.path}
                  // exact={route.exact}
                  location={location}
                  children={<route.main open={open} menuid={menuid} />}
                />
              ))}
            </Switch>
          </div>
        )}
      </Box>
    </Box>
  );
}
