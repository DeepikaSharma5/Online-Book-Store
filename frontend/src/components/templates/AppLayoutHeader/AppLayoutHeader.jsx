import React from "react"
import {Divider, Grid, Typography, Box, withStyles} from "@material-ui/core";
import { APP_ROUTES } from "../../../utilities/constants/routes.constants";

const AppLayoutHeader = ({componentTitle}) => {

    const ComponentHeading = withStyles({
        root: {
            marginBottom: "15px",
            fontWeight: 600,
            fontSize: "20px"
          }
    })(Typography);

    return(
        <Grid direction="column">
            <Box ml={2}>
                <ComponentHeading>
                    {componentTitle}
                </ComponentHeading>
            </Box>
            <Divider />
        </Grid>
    )
}

export default AppLayoutHeader;