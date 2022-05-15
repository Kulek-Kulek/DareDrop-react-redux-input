import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import UsernamesSearchPage from './Pages/UsernamesSearchPage/UsernamesSearchPage';
import Backdrop from './Shared/Backdrop/Backdrop';
import * as actions from './Store/Actions/action-index';

import './App.css';

const App = () => {

  const dispatch = useDispatch();

  const isLoading = useSelector(state => state.fetchingStatus.isLoading);
  const backdropIsActive = useSelector(state => state.modalStatus.backdropIsActive);


  useEffect(() => {
    dispatch(actions.fetchDataFromRemoteAPI());
  }, [dispatch]);



  return (
    <div className="App">
      {(isLoading || backdropIsActive) && <Backdrop />}
      <UsernamesSearchPage />
    </div>
  );
}

export default App;
