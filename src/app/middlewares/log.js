export default (request, response, next) => {
  const { method, url, params, query, ip, body } = request;
  // eslint-disable-next-line no-console
  console.log(method, url, params, query, ip, body);

  next();
};
