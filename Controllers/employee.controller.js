const employees = [
  { id: 1, name: "sasi" },
  { id: 2, name: "radha" },
  { id: 3, name: "saras" },
  { id: 4, name: "Kathir" },
  { id: 5, name: "kanna" },
];
export const getEmployeesDetails = (req, res) => {
  res.status(200).json({ data: employees });
};

export const getEmployeesDetailsById = (req, res) => {
  const empId = req.params.id;
  const empIdDetail = employees.find((emp) => emp.id == empId); //{id:2,name:"sasi"}

  if (!empIdDetail) {
    return res
      .status(404)
      .json({ message: "Details not found in particular Id" });
  }
  res.status(200).json({ message: "Employee Details", data: empIdDetail });
};

export const createEmployeeDetail = (req, res) => {
  const newEmployeeDetail = {
    id: employees.length + 1,
    name: req.body.name,
  };
  employees.push(newEmployeeDetail);
  res
    .status(201)
    .json({ message: "New Employee detail added", data: newEmployeeDetail });
};

export const updateEmployeeDetail = (req, res) => {
  const empId = req.params.id;
  const empDetail = employees.find((emp) => emp.id == empId);
  if (!empDetail) {
    return res.status(200).json({ message: "emp detail not found", data: [] });
  }
  empDetail.name = req.body.name;
  res.status(200).json({ message: "Detail updated", data: empDetail });
};

export const deleteEmployeeDetail = (req, res) => {
  const empId = req.params.id;
  const empDetailIndex = employees.findIndex((emp) => emp.id == empId);
  console.log("empDetailIndex", empDetailIndex);
  if (empDetailIndex === -1) {
    return res.status(404).json({ message: "Detail not found" });
  }
  employees.splice(empDetailIndex, 1);
  res.status(200).json({ message: "empdetail deleted" });
};
