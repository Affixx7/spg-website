import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function ImageCard({ image, title }) {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardMedia
        component="img"
        height="auto"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="body1" component="div">
        <strong> {title}</strong>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ImageCard;
