import React, { useState , useEffect } from 'react'
import Axios from 'axios'




//React leaflet
import { MapContainer, TileLayer, useMap , Marker, Popup, Polyline, polygonOne, Polygon} from 'react-leaflet'
import { Icon } from 'leaflet'

// MUI
import { Grid, AppBar, Typography, Button, Card, CardHeader, CardMedia, CardContent, CircularProgress } from "@mui/material";


//Map Icons
import HouseIconPng from './Assets/Mapicons/house.png'
import apartmentIconPng from './Assets/Mapicons/apartment.png'
import officeIconPng from './Assets/Mapicons/office.png'

//Assets
import img1 from "./Assets/img1.jpg";
import myListings from './Assets/Data/Dummydata';
import { margin } from '@mui/system';


function Listing() {

//fetch('http://127.0.0.1:8000/api/listings/').then(response => response.json()).then(data => console.log(data))


const HouseIcon = new Icon({
  iconUrl: HouseIconPng,
  iconSize: [40, 40],
});

const apartmentIcon = new Icon({
  iconUrl: apartmentIconPng,
  iconSize: [40, 40],
});

const officeIcon = new Icon({
  iconUrl: officeIconPng,
  iconSize: [40, 40],
});

const[latitude, setLatitude] = useState(29.5926)
const[longitude, setLongitude] = useState(52.5836)


function GoEast(){
  setLatitude(29.617960551227775);
  setLongitude(52.59248274064806);
}

function GoCenter(){
  setLatitude(29.5926);
  setLongitude(52.5836);
}


const polyOne = [
  [29.754311858657736, 52.410120815543124],
  [29.75662179391943, 52.392439693809926],
  [29.76437086477756, 52.48110279276718],
]

const polygonOne = [
  [29.754311858657736, 52.410120815543124],
  [29.75662179391943, 52.392439693809926],
  [29.76437086477756, 52.48110279276718],
]

const[allListings, setAllListings] = useState([])
const[dataIsLoading, setDataIsLoading] = useState(true) 


useEffect(() => {
  const source = Axios.CancelToken.source()
  async function GetAllListings(){
    try{
      const response = await Axios.get('http://127.0.0.1:8000/api/listings/', {cancelToken: source.token})
      //console.log(response.data)
      setAllListings(response.data)
      setDataIsLoading(false)
      }
      catch(error){
        console.log(error.response)
      }
    
  }
  GetAllListings()
  return ()=>{
    source.cancel()
  }
}, [])

if(dataIsLoading === false){
  console.log(allListings[0].location)
}


if(dataIsLoading === true){
  return(
  <Grid container justifyContent="center" alignItems='center' style={{ height: '100vh' }}>
    <CircularProgress />
  </Grid>
  
  )
}

  return (
    <Grid container>
      <Grid item xs={4}>
      {allListings.map((listing)=>{
        return(
          <Card key={listing.id} style={{ margin: '0.5rem', border: '1px solid black', position: 'relative'}}>
      <CardHeader
        
       // action={
         // <IconButton aria-label="settings">
           // <MoreVertIcon />
          //</IconButton>
        //}
        title={listing.title}
       
      />
      <CardMedia 
        style={{ paddingRight: '1rem', paddingLeft: '1rem', height: '20rem', width: '30rem'}}
        component="img"
        
        image={listing.picture1}
        alt={listing.title}
      />
      <CardContent>
        <Typography variant="body2" >
          {listing.description.substring(0,200)}...
        </Typography>
      </CardContent>

      {listing.property_status === 'Sale' ? (<Typography style={{position: 'absolute', backgroundColor: '#fed000', zIndex: '1000', color: 'white', top: '100px', left: '20px', padding: '5px'}}> {listing.listing_type}:  ${listing.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Typography>)
       :(<Typography style={{position: 'absolute', backgroundColor: '#fed000', zIndex: '1000', color: 'white', top: '100px', left: '20px', padding: '5px'}}> {listing.listing_type}:  ${listing.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} / {listing.rental_frequency} </Typography>)}

      
     {/* <CardActions disableSpacing>
       <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        
      </CardActions>*/}
      
    </Card>
        )
      })}
      </Grid>
      <Grid item xs={8} style={{marginTop: '0.5rem'}}>
        <AppBar position='sticky'>
        <div style={{ height: '100vh' }}>
          <MapContainer center={[29.5926, 52.5836]} zoom={14} scrollWheelZoom={true}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Polyline positions={polyOne} weight={10} color='#fed000'/>
            <Polygon positions={polygonOne} />
          {allListings.map((listing)=>{
            function IconDisplay(){
              if(listing.listing_type=== 'House'){
                return HouseIcon
              }
              else if(listing.listing_type=== 'Apartment'){
                return apartmentIcon
              }
              else if(listing.listing_type=== 'Office'){
                return officeIcon
              }
            }
             return (
              <Marker 
              key={listing.id}
              icon={IconDisplay()}
              position={[
                listing.location.coordinates[0],
                listing.location.coordinates[1],
              ]}>
                
                <Popup>
                <Typography variant='h5'>{listing.title}</Typography>
                <img src={listing.picture1} style={{ height: '14rem', width: '18rem' }}/>
                <Typography variant='body1'>
                  {listing.description.substring(0, 150)}...
                </Typography>
                <Button variant='contained' fullWidth>Details</Button>

              </Popup>
              </Marker>
             )
          })}
            

            {/*<Marker icon={HouseIcon} position={[latitude, longitude]}>
              <Popup>
                <Typography variant='h5'>A title</Typography>
                <img src={img1} style={{ height: '14rem', width: '18rem' }}/>
                <Button variant='contained' fullWidth>A Link</Button>

              </Popup>
        </Marker>*/}
          </MapContainer>
        </div>
        </AppBar>
      </Grid>
    </Grid>
  )
}

export default Listing