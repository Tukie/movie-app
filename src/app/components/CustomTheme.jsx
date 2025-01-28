"use client";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Bounce, ToastContainer, toast } from "react-toastify";

const theme = createTheme({
  palette: {
    primary: {
      main: "#AC241B",
      light: "#e64a19",
      dark: "#b71c1c",
      contrastText: "#fff",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "9999px",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          height: "40px",
          borderRadius: "9999px",
          border: "1px solid #fff",
          color: "#fff",
        },
        icon: {
          color: "#fff",
        },
      },
    },
  },
});

export default function CustomTheme({ children }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </ThemeProvider>
  );
}
