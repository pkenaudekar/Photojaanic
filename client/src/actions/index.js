import jsonServer from '../apis/jsonServer';

export const fetchPics = () => async (dispatch) => {
  const res = await jsonServer.get('/gallery');

  dispatch({
    type: 'FETCH_PICS',
    payload: res.data,
  });
};
