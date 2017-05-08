import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute, IndexRedirect, Redirect } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import App from './components/user';
import User from './components/user/main';
import Login from './components/Login';
import OAuth from './containers/OAuth';
import Admin from './components/admin';
import configureStore from './store/storeConfig';
import jQuery from '../uui/js/lib/jquery-1.12.0.min';
import CampaignsContainer from './containers/admin/campaign-library-container';
import QuestionnaireLibraryContainer from './containers/admin/questionnaire-library-container';
import QuestionnaireFormContainer from './containers/admin/questionnaire-form-container';
import CampaignCreatingContainer from './containers/admin/campaign-form-container';
import CampaignStatistics from './containers/admin/campaign-statistics-container';
import BasicQuestionCard from './components/admin/campaign-statistics/blocks/question-data';
import EditCampaignQuestionnaire from './components/admin/edit-campaign/edit-campaign-questionnaire';
import EditCampaignTimeLineAndAudience from './components/admin/edit-campaign/edit-campaign-timeline-and-audience';

window.$ = jQuery;

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
<Provider store={store}>
  <Router history={history}>
  <Route path="/" component={App}>
  <IndexRoute component={User} />
  </Route>
  <Route path="admin" component={Admin} >
  <IndexRedirect to="campaigns" />
  /* <IndexRoute component={CampaignsContainer} />
   <Redirect from="admin" to="admin/campaigns" />*/
  <Route path="campaigns" component={CampaignsContainer} />
  <Route path="campaigns/create" component={CampaignCreatingContainer} />

  <Route path="campaigns/:campaignId" component={CampaignStatistics} />
  <Route path="campaigns/:campaignId/edit-campaign-questionnaire" component={EditCampaignQuestionnaire} />
  <Route path="campaigns/:campaignId/edit-campaign-time-line-and-audience" component={EditCampaignTimeLineAndAudience} />

  <Route path="questionnaires" component={QuestionnaireLibraryContainer} />
  <Route path="questionnaires/:status(/:id)" component={QuestionnaireFormContainer} />
  <Route path="questionCard" component={BasicQuestionCard} />

  </Route>
  <Route path="/login" component={Login} />
  <Route path="/oauth2/code" component={OAuth} />
  </Router>
  </Provider>,
  document.getElementById('app')
);
