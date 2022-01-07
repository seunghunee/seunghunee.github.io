import * as React from "react"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Chip from "@material-ui/core/Chip"

import Link from "./link"

interface Props {
  frontmatter: {
    slug: string
    title: string
    description: string
    tags: string[]
  }
}

const PostCard: React.FC<Props> = ({ frontmatter }) => {
  const classes = useStyles()
  return (
    <CardActionArea
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
    </CardActionArea>
  )
}

export default PostCard

const useStyles = makeStyles(theme => ({
  cardActionArea: {
    width: 680,
    margin: "auto",
  },
  card: {
    display: "flex",
  },
  content: {
    flex: 1,
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(1),
    },
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}))
