import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const NavbarButton = ({
  children,
  color,
}: {
  children: any;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | undefined;
}) => {
  const styles = {
    button: {
      textTransform: "capitalize",
      fontWeight: "500",
      fontStyle: "normal",
      fontSize: {
        sm: "12px",
        md: "16px",
      },
      lineHeight: "24px",
      marginLeft: {
        sm: "5px",
        md: "25px",
      },
    },
  };

  return (
    <Button variant="text" color={color ? color : "inherit"} sx={styles.button}>
      {children}
    </Button>
  );
};

export default function Header() {
  const styles = {
    root: {
      flexGrow: 1,
    },
    appBar: {
      height: 122,
      justifyContent: "center",
    },
    logo: { flexGrow: 1 },
    navbar: {
      display: { xs: "none", sm: "flex" },
      flexGrow: 1,
      justifyContent: "flex-end",
    },
  };

  return (
    <Container sx={styles.root}>
      <AppBar
        position="static"
        elevation={0}
        color="primary"
        sx={styles.appBar}
      >
        <Toolbar>
          <Box sx={styles.logo}>
            <img src="/images/webln-logo.png" alt="webln logo" />
          </Box>
          <Box sx={styles.navbar}>
            <NavbarButton color="secondary">Home</NavbarButton>
            <NavbarButton>Developers Docs</NavbarButton>
            <NavbarButton>Current Projects</NavbarButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
