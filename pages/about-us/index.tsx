import React from "react";
import { NextPage } from "next";
import { Box, Container, Grid, Typography } from "@mui/material";

const AboutPage: NextPage = () => {
  return (
    <Box>
      <Box textAlign='center' position='relative' marginTop={3}>
        <img
          src='/about/newsletterbg.jpg'
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
          About Us
        </Typography>
      </Box>
      <Container>
        <Grid
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
          spacing={2}
        >
          <Grid item xs={12} md={6}>
            <Box m={5}>
              <img src='/about/Untitled-59.jpg' style={{ maxWidth: "90%" }} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box m={5}>
              <Typography variant='h3' align='left'>
                Who are We?
              </Typography>
              <hr style={{ margin: "10px" }} />
              <Typography variant='subtitle1' align='left'>
                {`Este projeto nasce de uma paixão partilhada por um grupo de
                amigos, alavancado assim este novo projeto, que consiste na
                criação da presente página especializada em TCGs. Em concreto,
                um grupo amigos, ligados a diferentes ramos (design, marketing,
                informática e outras pessoas ligadas à comunidade de Pokémon
                desde muito cedo) , sendo que as práticas relacionadas com este
                hobby (colecionar e jogar), se destacaram desde muito jovens.`}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box m={5}>
              <Typography variant='h3' align='left'>
                Objectives
              </Typography>
              <hr style={{ margin: "10px" }} />
              <Typography variant='subtitle1' align='left'>
                O nosso objetivo passa por aprender e crescer, teremos a
                humildade para reconhecer que haverá sempre alguém que sabe mais
                do que nós e o fará melhor do que nós. Destacando que o mais
                importante para nós é respeitar todas as pessoas ligadas à
                prática, independentemente da origem ou motivos que os
                trouxeram, seja como jogador profissional, colecionador ou até
                mesmo investidor.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box m={5}>
              <img src='/about/Objectives.jpg' style={{ maxWidth: "90%" }} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box m={5}>
              <img src='/about/cardmarket.jpg' style={{ maxWidth: "90%" }} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box m={5}>
              <Typography variant='h3' align='left'>
                CardMarket
              </Typography>
              <hr style={{ margin: "10px" }} />
              <Typography variant='subtitle1' align='left'>
                Atuamos desde Abril de 2021, como conta Profissional no
                CardMarket, a maior plataforma de compra e venda de TCG. Um
                marco neste percurso, que destacamos com o maior dos orgulhos!
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutPage;
