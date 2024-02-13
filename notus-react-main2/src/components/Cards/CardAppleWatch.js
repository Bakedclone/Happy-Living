// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
// import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { Link } from "react-router-dom";

const CardAppleWatch = ({ prop }) => {
  // console.log(prop);
  return (
    <Card>
      <CardMedia sx={{ height: '18rem' }} image={prop.images[0].url} />
      <CardContent sx={{ padding: theme => `${theme.spacing(3, 5.25, 4)} !important` }}>
        {/* <Typography variant='h6' sx={{ marginBottom: 1 }}>
          {prop.name}
        </Typography> */}
        <h3 className="font-semibold text-3xl">
          {prop.name}
        </h3>
        {/* <Typography sx={{ marginBottom: 2 }}>$249.40</Typography>
        <Typography variant='body2'>
          3.1GHz 6-core 10th-generation Intel Core i5 processor, Turbo Boost up to 4.5GHz
        </Typography> */}
      </CardContent>
      <Link
        to={{
          pathname: '/selectproperty/booknow',
          state: { data: prop._id }
        }}>
        <Button variant='contained' sx={{ py: 2.5, width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
          Book Now
        </Button>
      </Link>
    </Card>
  )
}

export default CardAppleWatch
