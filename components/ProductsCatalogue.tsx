import { Box, Divider, Typography, useMediaQuery } from "@mui/material";
import { AuxProps } from "./Layout";
import Sidebar from "./Sidebar";
import ItemPerPage from "./ItemPerPage";
import SidebarMobile from "./SidebarMobile";
import { useTheme } from "@mui/material/styles";

const ProductsCatalogue = ({ children }: AuxProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box>
      <Box textAlign='center' position='relative' marginTop={3}>
        <img
          src='/banner/productbanner1400x312.jpg'
          style={{ width: "100%", height: "auto" }}
        />
        <Typography
          variant='h2'
          position='absolute'
          top='50%'
          left='50%'
          color='#fff'
          fontSize='3rem'
          fontWeight={600}
          sx={{ transform: " translate(-50%, -50%)" }}
        >
          Products
        </Typography>
      </Box>
      <Box textAlign='right'>
        <ItemPerPage />
      </Box>
      {isMobile && (
        <Box>
          <Box textAlign='left'>
            <SidebarMobile />
          </Box>
          <Box>
            <Box marginTop={4}>{children}</Box>
          </Box>
        </Box>
      )}
      {!isMobile && (
        <Box sx={{ display: "flex" }}>
          <Box>
            <Sidebar />
          </Box>
          <Box>
            <Divider orientation='vertical' sx={{ margin: 5 }} />
          </Box>
          <Box marginTop={4}>{children}</Box>
        </Box>
      )}
    </Box>
  );
};

export default ProductsCatalogue;
