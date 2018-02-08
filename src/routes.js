import React from 'react';
import { Switch } from 'react-router-dom';

import Home from './components/Home/home';
import Layout from './hoc/Layout/layout';
import NewsArticle from './components/Articles/News/Post/index';
import VideoArticle from './components/Articles/Videos/Video/index';
import NewsMain from './components/Articles/News/Main/index';
import VideosMain from './components/Articles/Videos/Main/index';
import SignIn from './components/SignIn/signIn';
import Dashboard from './components/Dashboard/dashboard';

import PrivateRoutes from './components/AuthRoutes/privateRoutes';
import PublicRoutes from './components/AuthRoutes/publicRoutes';

const Routes = (props) => {
  return (
    <Layout user={props.user}>
      <Switch>
        <PublicRoutes {...props}path="/" exact restricted={false} component={Home} />
        <PublicRoutes {...props}path="/news" exact restricted={false} component={NewsMain} />
        <PublicRoutes {...props}path="/videos" exact restricted={false} component={VideosMain} />
        <PublicRoutes {...props}path="/articles/:id" exact restricted={false} component={NewsArticle} />
        <PublicRoutes {...props}path="/videos/:id" exact restricted={false} component={VideoArticle} />
        <PublicRoutes {...props} path="/sign-in" exact restricted={true} component={SignIn} />
        <PrivateRoutes {...props} path="/dashboard" exact component={Dashboard} />
      </Switch>
    </Layout>
  );
}


export default Routes;