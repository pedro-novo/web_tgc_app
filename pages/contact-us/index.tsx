import React from "react";
import { NextPage } from "next";
import { Box, Container, Grid, Typography } from "@mui/material";

const ContactUsPage: NextPage = () => {
  return (
    <Container>
      <Box textAlign='center' position='relative' marginTop={3}>
        <img
          src='/contact/websitebanner.png'
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
          Contact Us
        </Typography>
      </Box>
      <Container>
        <Grid
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
          spacing={2}
          marginTop={5}
        >
          <Grid item xs={12} md={6}>
            <Box>
              <Box textAlign='center'>
                <img src='/contact/pokedex.png' style={{ maxWidth: "30%" }} />
              </Box>
              <Box>
                <Typography variant='h3' align='center'>
                  Get in touch!
                </Typography>
                <hr style={{ margin: "10px" }} />
                <Typography variant='subtitle1' align='center'>
                  Poderá entrar em contacto connosco através das nossas redes
                  sociais, para obter respostas da forma mais célere possível,
                  onde esclarecemos qualquer dúvida inerente aos nossos
                  serviços.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Box textAlign='center'>
                <img src='/contact/pokedex.png' style={{ maxWidth: "30%" }} />
              </Box>
              <Box>
                <Typography variant='h3' align='center'>
                  Use our form
                </Typography>
                <hr style={{ margin: "10px" }} />
                <Typography variant='subtitle1' align='center'>
                  Se nos pretende ajudar, poderá enviar sugestões através do
                  formulário que se encontra mais a baixo. Todo o tipo de
                  sugestões ou criticas, que nos permitam crescer, serão sempre
                  bem recebidas!
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default ContactUsPage;
