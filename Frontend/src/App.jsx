import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import TagsScreen from './screens/TagsScreen';
import Layout from './Components/Layout';
import RegisterForm from './screens/RegisterScreen';


const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        {/* Wrap all routes that share the Layout */}
        <Route element={<Layout />}>
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/Tags" element={<TagsScreen />} />
          <Route path="/Register" element={<RegisterForm />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Route>
        
        {/* Routes outside the layout */}
        {/* <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="*" element={<Navigate to="/login" replace />} /> */}
      </Routes>
    </BrowserRouter>


  );
}

export default App;