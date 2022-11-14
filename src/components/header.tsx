import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const NavbarButton = ({
  children,
  color,
  href
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
      textTransform: "none",
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
    <Button variant="text" color={color ? color : "inherit"} sx={styles.button} href={href}>
      {children}
    </Button>
  );
};

export default function Header(props: {
  name: string;
  logo: string;
  links: {
    title: string;
    href: string;
  }[];
}) {
  const { name, logo, links } = props;

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
            <img src={logo} alt={name} />
          </Box>
          <Box sx={styles.navbar}>
            {links.map((link: { title: string }, index: number) => (
              <NavbarButton key={`nav-${index}`} href={link.href}>{link.title}</NavbarButton>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
