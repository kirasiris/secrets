import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Alert from '../layout/Alert';
// All Secrets
import Secrets from '../../components/secrets/Secrets';
import Secret from '../../components/secret/Secret';
// All Male Secrets
import MaleSecrets from '../../components/secrets/MaleSecrets';
// All Female Secrets
import FemaleSecrets from '../../components/secrets/FemaleSecrets';
// All Other Secrets
import OtherSecrets from '../../components/secrets/OtherSecrets';
// All NSFW Secrets
import NSFWSecrets from '../../components/secrets/NSFWSecrets';
// 404 Not Found
import NotFound from '../layout/NotFound';

const Routes = () => {
  return (
    <Fragment>
      <div className="container">
        <Alert />
      </div>
      <Switch>
        {/* All Secrets */}
        <Route exact path="/secrets" component={Secrets} />
        <Route exact path="/secrets/:id" component={Secret} />
        {/* All Male Secrets */}
        <Route exact path="/male" component={MaleSecrets} />
        {/* All Female Secrets */}
        <Route exact path="/female" component={FemaleSecrets} />
        {/* All Other Secrets */}
        <Route exact path="/other" component={OtherSecrets} />
        {/* All NSFW Secrets */}
        <Route exact path="/nsfw" component={NSFWSecrets} />
        {/* 404 Error */}
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  );
};

export default Routes;
