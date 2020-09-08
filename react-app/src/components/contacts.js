import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

    const Contacts = ({ contacts }) => {
        const classes = useStyles();

      return (
        <div>
          <center><h1>Top five ice cream shops in Alpharetta</h1></center>
          {contacts && contacts.map((contact) => (

        <Card className={classes.root} variant="outlined">
            <CardContent>
            <div className={classes.shopname}> 
                <Typography variant="h5" component="h2"  className={classes.pos3} gutterBottom>
                    {contact.name}
                </Typography>
            </div>
           
            <Typography variant="body" component="p">
               Address : {contact.address}
            </Typography>

            <Typography className={classes.pos} color="textPrimary">
                Review
            </Typography>
            
            {contact.review.reviews&&contact.review.reviews.map((re) => (
              <>
                <Typography variant="body2" component="p" className={classes.pos2} >
                    {re.user.name}
                </Typography>
                <Typography>
                    {re.text}
                </Typography>
               </>
             ))
            }     
            </CardContent>
            </Card>
          ))}
        </div>
      )
    };


    const useStyles = makeStyles({
        root: {
          minWidth: 275,
        },
        bullet: {
          display: 'inline-block',
          margin: '0 2px',
          transform: 'scale(0.8)',
        },
        title: {
          fontSize: 14,
        },
        shopname: {
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
        },
        pos: {
          marginBottom: 5,
          marginTop:12,
          fontWeight: 'bold',
          color: 'blue'
        },
        pos2: {
            marginBottom: 5,
            marginTop:12,
            fontWeight: 'bold',
         
          },
          pos3: {
            marginBottom: 5,
            marginTop:12,
            fontWeight: 'bold',
            color: 'green'
          },
      });

    export default Contacts