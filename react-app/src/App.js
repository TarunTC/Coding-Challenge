import React from 'react';
import './App.css';
import Contacts from './components/contacts';

class  App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {contacts: [], reviewdata: []};
  }


  componentDidMount() {
    fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=icecream&location=alpharetta&limit=5",{
    method:'GET',
    dataType: 'json',
    headers: {
      'Authorization':'Bearer Wzy8m1uH0-3PzPzJsuVjsT9zlyClZimWrInChwNzSDF8q2BCd-I_6vgb8KTLiv-6Yjs9qjG-ymqDmR-buHuCNiUZuJtQFUfyGOivlBFFIspD9ZV9a2txNvZLXCBVX3Yx',
  }

    })
      .then(response => response.json())
      .then((responseData) => {
        responseData.businesses.map((id) => {
          const revirewid = id.id
          fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${revirewid}/reviews`, {
            method:'GET',
            dataType: 'json',
            headers: {
              'Authorization':'Bearer Wzy8m1uH0-3PzPzJsuVjsT9zlyClZimWrInChwNzSDF8q2BCd-I_6vgb8KTLiv-6Yjs9qjG-ymqDmR-buHuCNiUZuJtQFUfyGOivlBFFIspD9ZV9a2txNvZLXCBVX3Yx',
          }

          }).then(response => response.json())
          .then((res) => {
            const data = {
              name: id.name,
              address: `${id.location.address1} ${id.location.address2} ${id.location.address3} ${id.location.city}` ,
              review: res
            }
            this.setState({contacts: [...this.state.contacts, data]})
          }).catch((e) => {

          })
        })   
      })
      .catch(error => this.setState({ error })
      
   )}
    
    
render(){
  return (
    <Contacts contacts={this.state.contacts} />
  )
  }
}

export default App;