import * as React from "react"
import { styled } from "@mui/material/styles"
import Card from "@mui/material/Card"
import CardActionArea from "@mui/material/CardActionArea"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Chip from "@mui/material/Chip"

import Link from "./link"

const PREFIX = "PostCard"

const classes = {
  cardActionArea: `${PREFIX}-cardActionArea`,
  card: `${PREFIX}-card`,
  content: `${PREFIX}-content`,
  chip: `${PREFIX}-chip`,
}

const StyledCardActionArea = styled(CardActionArea)(({ theme }) => ({
  [`&.${classes.cardActionArea}`]: {
    width: 680,
    margin: "auto",
  },

  [`& .${classes.card}`]: {
    display: "flex",
  },

  [`& .${classes.content}`]: {
    flex: 1,
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(1),
    },
  },

  [`& .${classes.chip}`]: {
    margin: theme.spacing(0.5),
  },
}))

interface Props {
  frontmatter: {
    slug: string
    title: string
    description: string
    tags: string[]
  }
}

const PostCard: React.FC<Props> = ({ frontmatter }) => {
  return (
    <StyledCardActionArea
      className={classes.cardActionArea}
      component={Link}
      to={frontmatter.slug}
      disableTouchRipple
      disableRipple
    >
      <Card className={classes.card} elevation={0}>
        <div className={classes.content}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              {frontmatter.title}
            </Typography>
            <Typography gutterBottom variant="body2" color="textSecondary">
              {frontmatter.description}
            </Typography>
            {frontmatter.tags.map(tag => (
              <Chip className={classes.chip} label={tag} />
            ))}
          </CardContent>
        </div>
      </Card>
    </StyledCardActionArea>
  )
}

export default PostCard
