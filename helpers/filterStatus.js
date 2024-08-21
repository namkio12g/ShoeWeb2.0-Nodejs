module.exports.statusOrder = (query) => {
  let status = [
    {
      name: "ALL",
      value: "0",
      class: ""
    },
    {
      name: "Đã Xác Nhận",
      value: "2",
      class: ""

    },
    {
      name: "Chưa Xác Nhận",
      value: "1",
      class: ""

    },
    {
      name: "Đang giao hàng",
      value: "3",
      class: ""

    },
    {
      name: "Giao hàng thành công",
      value: "4",
      class:""

    },
  ];
  if (query.status) {
    const index = status.findIndex((items) => {
      return items.value == query.status;
    });
    console.log(index)
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
