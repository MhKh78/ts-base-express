import { Server } from './Server';
import { AppRouter } from './AppRouter';
import express from 'express';
import helmet from 'helmet';
import cookieSession from 'cookie-session';
import './controllers/LoginController';
import './controllers/RootController';

new Server('localhost', 3000, [
  helmet(),
  express.json(),
  express.urlencoded({ extended: true }),
  cookieSession({ keys: ['laskdjf'] }),
  AppRouter.getInstance(),
]).start();
