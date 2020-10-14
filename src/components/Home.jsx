import React from 'react'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
const Home = () => <>
    <h1>
        Home
        
    </h1>
    <Grid container justify="flex-end">
            <Grid item>
              <Link href="SignInSide" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
    </Grid>
</>

export default Home