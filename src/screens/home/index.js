
import React, { useState, useEffect } from 'react';
import HomeView from './view'
import Loader from '../../components/loader/Loader'


const HomeScreen = ({ navigation }) => {
  const [usersList, setUsersList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://gorest.co.in/public-api/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsersList(data?.data)
        setLoading(false)
      })
  }, [])

  return (
    <>
      {!loading ?
        <HomeView
          usersList={usersList}
          navigation={navigation}
        />
        :
        <Loader />
      }
    </>
  );
}

export default HomeScreen;