export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleString(undefined, {
    day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit'
  });
};
