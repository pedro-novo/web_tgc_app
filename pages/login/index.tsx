import React from "react";
import { useAuthContext } from "../../components/context/AuthContext";
import { NextPage } from "next";
import { auth } from "../../utils/firebase-config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Typography, Box, Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { useRouter } from "next/router";

const LoginPage: NextPage = () => {
  const { isAuthSet } = useAuthContext();
  const router = useRouter();
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((result) => {
      console.log(result);
      isAuthSet(true);
      router.push("/");
    });
  };

  return (
    <Box textAlign='center'>
      <Box textAlign='center' m={20}>
        <Box p={10}>
          <Typography variant='h4'>Login with Google</Typography>
        </Box>
        <Box>
          <Button
            variant='contained'
            endIcon={<GoogleIcon />}
            onClick={signInWithGoogle}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
