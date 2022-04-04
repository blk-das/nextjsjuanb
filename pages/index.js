import Head from "next/head";
import { useState, useEffect } from "react";
import UserList from "../src/components/UserList";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
      fetch("https://reqres.in/api/users?page=1")
        .then((data) => data.json())
        .then((users) => setUsers(users.data));
  }, []);

  const handleClick = () => {
    fetch("https://reqres.in/api/users?page=2")
    .then((data) => data.json())
    .then((users) => setUsers(users.data));
  }

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <button onClick={handleClick}>lis api blk</button>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Head>
        <title>Gestión de usuarios</title>
        <meta name="description" content="User CRUD app" />
      </Head>
      <main>
        <h1>
Herramienta de gestión de usuarios
ss</h1>
        {/* <h3>Navegar as:</h3> */}
        <p>Lista de usuarios</p>
        <UserList uses={users} />
      </main>

      <footer>
        <span>Marcador de posición para pie de página</span>
      </footer>
    </div>
  );
}
