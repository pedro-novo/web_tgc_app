import { Typography, Box, Grid, Paper } from "@mui/material";
import team from "../utils/team";

const Team = () => {
  return (
    <Box textAlign='center' sx={{ marginTop: 10 }}>
      <Box sx={{ marginBottom: 5 }}>
        <Typography variant='h4' align='center'>
          A Nossa Equipa
        </Typography>
        <Typography variant='subtitle2' align='center'>
          O nosso mágico plantel. Os ingredientes necessários para alavancar
          este projeto.
        </Typography>
      </Box>
      <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
        {team.map((member) => (
          <Grid item key={member.id} xs={12} sm={6} lg={3}>
            <Paper elevation={0}>
              <img
                src={member.image}
                style={{ maxWidth: 200, height: "auto" }}
              />
              <Typography variant='subtitle2'>{member.name}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Team;
