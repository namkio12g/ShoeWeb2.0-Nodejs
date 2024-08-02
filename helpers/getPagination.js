module.exports = (query, numberOfProduct, numberDocument) => {
  let pagination = {
    numberOfProduct: numberOfProduct,
  };
  pagination.numberDocument = numberDocument;
  if (pagination.numberOfProduct > numberDocument) {
    pagination.pageCurrent = 1;
  } else {
    if (query.page) {
      pagination.pageCurrent = parseInt(query.page);
    } else {
      pagination.pageCurrent = 1;
    }
  }

  pagination.positionProduct =
    (pagination.pageCurrent - 1) * pagination.numberOfProduct;
  pagination.numberOfPage = Math.ceil(
    pagination.numberDocument / pagination.numberOfProduct
  );
  return pagination;
};
