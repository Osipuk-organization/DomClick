export const statusCode = function(res, code) {
  if (res.status !== code) {
    throw new Error(`Ответ сети: ${res.status}`);
  }
};