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
          "sub_menu": [],
          "collapse": false,
          "is_access": true,
          "created": "",
          "updated": null
        },
        {
          "menu_id": 6,
          "class_id": "daftar-barang",
          "menu_name": "Daftar Barang",
          "type": "item",
          "icon": "master-data",
          "reference": 1,
          "sub_menu": [
            {
              "menu_id": 7,
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
              "menu_id": 8,
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
              "menu_id": 9,
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
              "menu_id": 13,
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
          "menu_id": 17,
          "class_id": "daftar-regional",
          "menu_name": "Daftar Regional",
          "type": "item",
          "icon": "transaction",
          "reference": 1,
          "sub_menu": [
            {
              "menu_id": 29,
              "class_id": "regional",
              "menu_name": "Regional",
              "type": "item",
              "icon": " ",
              "reference": 17,
              "sub_menu": [],
              "collapse": false,
              "is_access": true,
              "created": "",
              "updated": null
            },
            {
              "menu_id": 30,
              "class_id": "wilayah",
              "menu_name": "Wilayah",
              "type": "item",
              "icon": " ",
              "reference": 17,
              "sub_menu": [],
              "collapse": false,
              "is_access": true,
              "created": "",
              "updated": null
            },
            {
              "menu_id": 34,
              "class_id": "transaction",
              "menu_name": "Transaction",
              "type": "item",
              "icon": " ",
              "reference": 17,
              "sub_menu": [],

              "collapse": false,
              "is_access": true,
              "created": "",
              "updated": null
            }
          ],
          "button": [
            {
              "button_id": 1,
              "button_type": "read",
              "status": true,
              "created": "",
              "updated": null
            },
            {
              "button_id": 2,
              "button_type": "create",
              "status": true,
              "created": "",
              "updated": null
            },
            {
              "button_id": 3,
              "button_type": "update",
              "status": true,
              "created": "",
              "updated": null
            },
            {
              "button_id": 4,
              "button_type": "delete",
              "status": true,
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
          "menu_id": 15,
          "class_id": "setup",
          "menu_name": "Setup",
          "type": "item",
          "icon": "setup",
          "reference": 1,
          "sub_menu": [
            {
              "menu_id": 22,
              "class_id": "merchant-category-code",
              "menu_name": "Merchant Category Code",
              "type": "item ",
              "icon": " ",
              "reference": 15,
              "sub_menu": [],

              "collapse": false,
              "is_access": true,
              "created": "",
              "updated": null
            },
            {
              "menu_id": 11,
              "class_id": "master-cost-type",
              "menu_name": "Master Cost Type",
              "type": "item",
              "icon": "",
              "reference": 15,
              "sub_menu": [],

              "collapse": false,
              "is_access": true,
              "created": "",
              "updated": null
            },
            {
              "menu_id": 14,
              "class_id": "master-location",
              "menu_name": "Master Location",
              "type": "item",
              "icon": "",
              "reference": 15,
              "sub_menu": [],

              "collapse": false,
              "is_access": true,
              "created": "",
              "updated": null
            },
            {
              "menu_id": 23,
              "class_id": "approval-matrix",
              "menu_name": "Approval Matrix",
              "type": "item",
              "icon": " ",
              "reference": 15,
              "sub_menu": [],

              "collapse": false,
              "is_access": true,
              "created": "",
              "updated": null
            },
            {
              "menu_id": 24,
              "class_id": "risk-acceptance-criteria",
              "menu_name": "Risk Acceptance Criteria",
              "type": "item",
              "icon": " ",
              "reference": 15,
              "sub_menu": [],

              "collapse": false,
              "is_access": true,
              "created": "",
              "updated": null
            },
            {
              "menu_id": 25,
              "class_id": "category-score",
              "menu_name": "Category Score",
              "type": "item",
              "icon": " ",
              "reference": 15,
              "sub_menu": [],
              "button": [
                {
                  "button_id": 1,
                  "button_type": "read",
                  "status": true,
                  "created": "",
                  "updated": null
                },
                {
                  "button_id": 2,
                  "button_type": "create",
                  "status": true,
                  "created": "",
                  "updated": null
                },
                {
                  "button_id": 4,
                  "button_type": "delete",
                  "status": true,
                  "created": "",
                  "updated": null
                },
                {
                  "button_id": 3,
                  "button_type": "update",
                  "status": true,
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
              "menu_id": 26,
              "class_id": "paremeter",
              "menu_name": "Parameter",
              "type": "item",
              "icon": " ",
              "reference": 15,
              "sub_menu": [],

              "collapse": false,
              "is_access": true,
              "created": "",
              "updated": null
            }
          ],
          "button": [
            {
              "button_id": 1,
              "button_type": "read",
              "status": true,
              "created": "",
              "updated": null
            },
            {
              "button_id": 2,
              "button_type": "create",
              "status": true,
              "created": "",
              "updated": null
            },
            {
              "button_id": 3,
              "button_type": "update",
              "status": true,
              "created": "",
              "updated": null
            },
            {
              "button_id": 4,
              "button_type": "delete",
              "status": true,
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
          "class_id": "monitoring",
          "menu_name": "Monitoring",
          "type": "item",
          "icon": "monitoring",
          "reference": 1,
          "sub_menu": [
            {
              "menu_id": 16,
              "class_id": "monitoring-status",
              "menu_name": "Monitoring Status",
              "type": "item",
              "icon": "",
              "reference": 21,
              "sub_menu": [],

              "collapse": false,
              "is_access": true,
              "created": "",
              "updated": null
            },
            {
              "menu_id": 27,
              "class_id": "log-payment-transaction",
              "menu_name": "Log Payment Transaction",
              "type": "item",
              "icon": " ",
              "reference": 21,
              "sub_menu": [],

              "collapse": false,
              "is_access": true,
              "created": "",
              "updated": null
            },
            {
              "menu_id": 18,
              "class_id": "payment-monitoring",
              "menu_name": "Payment Monitoring",
              "type": "item",
              "icon": "",
              "reference": 21,
              "sub_menu": [],

              "collapse": false,
              "is_access": true,
              "created": "",
              "updated": null
            },
            {
              "menu_id": 19,
              "class_id": "settlement-monitoring",
              "menu_name": "Settlement Monitoring",
              "type": "item",
              "icon": "",
              "reference": 21,
              "sub_menu": [],

              "collapse": false,
              "is_access": true,
              "created": "",
              "updated": null
            },
            {
              "menu_id": 28,
              "class_id": "monitoring-edc-location",
              "menu_name": "Monitoring EDC Location",
              "type": "item",
              "icon": " ",
              "reference": 21,
              "sub_menu": [],

              "collapse": false,
              "is_access": true,
              "created": "",
              "updated": null
            },
            {
              "menu_id": 31,
              "class_id": "approval-monitoring",
              "menu_name": "Approval Monitoring",
              "type": "item",
              "icon": " ",
              "reference": 21,
              "sub_menu": [],

              "collapse": false,
              "is_access": true,
              "created": "",
              "updated": null
            },
            {
              "menu_id": 32,
              "class_id": "fraud-detection-monitoring",
              "menu_name": "Fraud Detection Monitoring",
              "type": "item",
              "icon": " ",
              "reference": 21,
              "sub_menu": [],

              "collapse": false,
              "is_access": true,
              "created": "",
              "updated": null
            },
            {
              "menu_id": 33,
              "class_id": "transaction-monitoring",
              "menu_name": "Transaction Monitoring",
              "type": "item",
              "icon": " ",
              "reference": 21,
              "sub_menu": [],

              "collapse": false,
              "is_access": true,
              "created": "",
              "updated": null
            }
          ],
          "button": [
            {
              "button_id": 1,
              "button_type": "read",
              "status": true,
              "created": "",
              "updated": null
            },
            {
              "button_id": 2,
              "button_type": "create",
              "status": true,
              "created": "",
              "updated": null
            },
            {
              "button_id": 3,
              "button_type": "update",
              "status": true,
              "created": "",
              "updated": null
            },
            {
              "button_id": 4,
              "button_type": "delete",
              "status": true,
              "created": "",
              "updated": null
            }
          ],
          "collapse": false,
          "is_access": true,
          "created": "",
          "updated": null
        }
      ],
      "button": [
        {
          "button_id": 1,
          "button_type": "read",
          "status": true,
          "created": "System - 2021-10-14 14:54:20",
          "updated": null
        },
        {
          "button_id": 2,
          "button_type": "create",
          "status": true,
          "created": "System - 2021-10-14 14:54:21",
          "updated": null
        },
        {
          "button_id": 3,
          "button_type": "update",
          "status": true,
          "created": "System - 2021-10-14 14:54:21",
          "updated": null
        },
        {
          "button_id": 4,
          "button_type": "delete",
          "status": true,
          "created": "System - 2021-10-14 14:54:21",
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
    setPathname(path[1])
  })

  function handleCollapse(item) {
    setOpen(true);
    let arr = data.array
    let index = arr.findIndex((val) => val.menu_name === item.menu_name)
    arr[index].collapse = !arr[index].collapse
    setData({ ...data, data: arr })
  }

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
      <AppBar position="fixed" open={open}>
        <Toolbar style={{ backgroundColor: "#f7faff" }}>
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
              <Typography variant="h6" noWrap component="div">
                <Button size="medium" variant="outlined" style={{ backgroundColor: '#F3F6F9' }}>
                  <Typography>Pages</Typography>
                </Button>
                <Button size="medium">
                  <Typography>Feature</Typography>
                </Button>
                <Button size="medium">
                  <Typography>Apps</Typography>
                </Button>
              </Typography>
            </div>
            <Avatar sx={{ bgcolor: green[50] }} variant="square">
              <Typography style={{ color: green[500] }}>S</Typography>
            </Avatar>
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
                          <Link to={sub.menu_name === "Logout" ? `/` : `${url}${sub.class_id}`}>
                            <a data-tip={sub.menu_name} data-for={sub.menu_name}>
                              <div
                                style={{ paddingLeft: 60, borderTopLeftRadius: 20, borderBottomLeftRadius: 20, display: 'flex' }} className={selectedSubPath === sub.class_id ? "active" : ""}
                                onClick={() => sub.menu_name === "Logout" ? logout() : selectSub(sub)}>
                                <ListItem button style={{ padding: '10px 0', marginLeft: 20 }}>
                                  <Typography style={{ fontFamily: 'Poppins', color: selectedSubPath === sub.class_id ? '#2a9c6c' : '#d5e0dc', fontSize: 12 }}>{sub.menu_name}</Typography>
                                </ListItem>
                              </div>
                            </a>
                            {/* {!open && (<ReactTooltip border={true} id={sub.menu_name} place="bottom" type="light" effect="solid" />)} */}
                          </Link>
                        )
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
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    </Box>
  );
}
