import jwt from 'jsonwebtoken';
import { handleResponse } from './util';

async function auth(type, payload) {
  try {
    const url = `https://wta-cats.herokuapp.com/auth/${type}`;
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });
    const { token } = await handleResponse(response);
    localStorage.setItem('token', token);

    let user = jwt.decode(token).user;
    localStorage.setItem('user', JSON.stringify(user));
    return user;
  } catch (err) {
    throw err;
  }
}

export async function signup(payload) {
  try {
    const user = await auth('signup', payload);
    return user;
  } catch (err) {
    throw err;
  }
}

export async function login(payload) {
  try {
    const user = await auth('login', payload);
    return user;
  } catch (err) {
    throw err;
  }
}
