import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';

function App() {
  //setup state object to store valus
  //array of state objects to store
  const [activities, setActivities] = useState([]);

  //setup event to run on component render to query API
  useEffect(() => {
      axios.get('http://localhost:5189/api/activities').then(response => {
        setActivities(response.data)
      })
  }, [])
  // [] means this executes once and only once, could be params that if change trigger event again

  return (
    <div>
      <Header as='h2' icon='users' content='Ractivities' />
      <List>
        {activities.map((activity: any) => (
          <List.Item key={activity.id}>{activity.title}</List.Item>
        ))}
      </List>

    </div>
  )
}

export default App
