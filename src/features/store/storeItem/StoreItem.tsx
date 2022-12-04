import React from "react";
import { StoreItemInterface } from "../../../models/store";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import Divider from "@mui/joy/Divider";
import moment from "moment";


const StoreItem = ({
  itemId,
  storeId,
  itemName,
  itemNotes,
  itemQuantity,
  addedAt,
  imageUrl,
}: StoreItemInterface) => {
  
  const relativeTime = moment.unix(addedAt).fromNow();



  // TODO see if image is valid other wise display a skelton one.
  return (
    <>
      <Card variant="outlined" sx={{ width: 320,overflow: 'visible'  }}>
        <CardOverflow>
          <AspectRatio objectFit="contain" ratio="4/3">
            <img src={imageUrl} alt="" loading="lazy" />
          </AspectRatio>
          <Typography level="h2" sx={{ fontSize: "md", mt: 2 }}>
            {itemName}
          </Typography>
          <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
            {itemNotes}
          </Typography>
          <Divider />
          <CardOverflow
            variant="soft"
            sx={{
              display: "flex",
              gap: 1.5,
              py: 1.5,
              px: "var(--Card-padding)",
              bgcolor: "background.level1",
            }}
          >
            <Typography
              level="body3"
              sx={{ fontWeight: "md", color: "text.secondary" }}
            >
            {itemQuantity}
            </Typography>
            <Divider orientation="vertical" />
            <Typography
              level="body3"
              sx={{ fontWeight: "md", color: "text.secondary" }}
            >
              {relativeTime}
            </Typography>
          </CardOverflow>
        </CardOverflow>
      </Card>
    </>
  );
};

export default StoreItem;
