export function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
  localStorage.removeItem('token');
}

export function handleResponse(response) {
  if (response.status === 401) {
    // auto logout if 401 response returned from api
    logout();
    window.location.reload(true);
    return Promise.reject({ type: 'Unauthenticated' });
  }
  return response.json().then(data => {
    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}
