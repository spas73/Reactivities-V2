import {  Grid2, Typography } from "@mui/material"
import { useActivities } from "../../../lib/hooks/useActivities";
import ActivityDetailsHeader from "./ActivityDetailsHeader";
import ActivityDetailsInfo from "./ActivityDetailsInfo";
import ActivityDetailsChat from "./ActivityDetailsChat";
import ActivityDetailsSidebar from "./ActivityDetailsSidebar";
import { useParams } from "react-router";

export default function ActivityDetailPage() {

    const { id } = useParams();
    const { activity, isLoadingActivity } = useActivities(id);

    if (isLoadingActivity) return <Typography>Loading...</Typography>

    if (!activity) return <Typography>Activity not found</Typography>

    return (
        /*   <Card sx={{ borderRadius: 3 }}>
              <CardMedia
                  component='img'
                  src={`/images/categoryImages/${activity.category}.jpg`}
              />
              <CardContent>
                  <Typography variant="h5" >{activity.title}</Typography>
                  <Typography variant="subtitle1" fontWeight='light'>{activity.date}</Typography>
                  <Typography variant="body1" >{activity.description}</Typography>
              </CardContent>
              <CardActions>
                  <Button component={Link} to={`/manage/${activity.id}`} color="primary">Edit</Button>
                  <Button onClick={() => navigate(`/activities`)} color="inherit">Cancel</Button>
              </CardActions>
          </Card> */
        <Grid2 container spacing={3}>
            <Grid2 size={8}>
                <ActivityDetailsHeader activity ={activity}/>
                <ActivityDetailsInfo activity ={activity}/>
                <ActivityDetailsChat />
            </Grid2>
            <Grid2 size={4}>
                <ActivityDetailsSidebar />
            </Grid2>
        </Grid2>
    )
}


