import React from "react"
import {Divider, Grid, Typography, Box, withStyles} from "@material-ui/core";
import { APP_ROUTES } from "../../../utilities/constants/routes.constants";

const AppLayoutHeader = () => {

    const ComponentHeading = withStyles({
        root: {
            marginBottom: "15px",
            fontWeight: 600,
            fontSize: "20px",
            color: "#ffffff"
          }
    })(Typography);

    return(
        <Grid direction="column" style={{backgroundColor: "#1e2527"}}>
            <Box ml={2}>
                <ComponentHeading>
                    HEADER
                </ComponentHeading>
            </Box>
            <Divider />
        </Grid>
    )
}

export default AppLayoutHeader;