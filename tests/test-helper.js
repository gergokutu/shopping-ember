import Application from 'shopping-tut/app';
import config from 'shopping-tut/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
