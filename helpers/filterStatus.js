module.exports.statusOrder = (query) => {
  let status = [
    {
      name: "ALL",
      value: "",
      class: "",
    },
    {
      name: "Đã Xác Nhận",
      value: "Đã Xác Nhận",
      class: "",
    },
    {
      name: "Chưa Xác Nhận",
      value: "Chưa Xác Nhận",
      class: "",
    },
  ];
  if (query.status) {
    const index = status.findIndex((items) => {
      return items.value == query.status;
    });
    status[index].class = "active";
  }
  return status;
};

module.exports.statusProduct = (query) => {
  let listOption = [
    {
      name: "ALL",
      value: "",
      class: "",
    },
    {
      name: "active",
      value: "active",
      class: "",
    },
    {
      name: "inactive",
      value: "inactive",
      class: "",
    },
  ];
  if (query.status) {
    const index = listOption.findIndex((items) => {
      return items.value == query.status;
    });
    listOption[index].class = "active";
  }
  return listOption;
};
