import { Card, CardContent, CardMedia, Typography} from "@mui/material";
import LazyLoad from "react-lazy-load";




const FeaturedProductCard = ({ image, title }) => {


    return (
        <Card sx={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", borderRadius: 16}}>
            <LazyLoad height={400} offset={150} >
            <CardMedia
                sx={{ height: 500, flexGrow: 1, objectFit:"contain", mt:{lg:4}, width: "90%"}}
                image={image}
                component="img"
                title={title}
            />
            </LazyLoad>
            <CardContent sx={{ flexGrow: 0, backgroundColor: "#f0f8ffe7" }}>
                <Typography variant="h6" sx={{ fontSize: 18, fontWeight: 700, mb: 2, }}>
                    {title}
                </Typography>
            </CardContent>
        </Card>
    )

}

export default FeaturedProductCard;
