import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
  Collapse,
  Typography,
  Container,
  Box
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface Department {
  id: number;
  name: string;
  subDepartments?: SubDepartment[];
}

interface SubDepartment {
  id: number;
  name: string;
}

interface DepartmentListProps {
  departments: Department[];
}

const DepartmentList: React.FC<DepartmentListProps> = ({ departments }) => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const toggleSelection = (itemId: number) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems((prevSelected) => prevSelected.filter((id) => id !== itemId));
    } else {
      setSelectedItems((prevSelected) => [...prevSelected, itemId]);
    }
  };

  const isItemSelected = (itemId: number) => selectedItems.includes(itemId);

  const toggleSubDepartment = (subDepartmentId: number, departmentId: number) => {
    if (selectedItems.includes(subDepartmentId)) {
      setSelectedItems((prevSelected) =>
        prevSelected.filter((id) => id !== subDepartmentId)
      );
    } else {
      setSelectedItems((prevSelected) => [
        ...prevSelected,
        subDepartmentId,
        departmentId,
      ]);
    }
  };

  const isAllSubDepartmentsSelected = (
    subDepartments: SubDepartment[],
    departmentId: number
  ) =>
    subDepartments.every((subDepartment) =>
      selectedItems.includes(subDepartment.id)
    );

  return (
    <List sx={{bgcolor:"#cccccc",boxShadow:"1px 1px 6px px #595959"}}>
      {departments.map((department) => (
        <Box key={department.id}>
          <ListItem button onClick={() => toggleSelection(department.id)}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={isItemSelected(department.id)}
                tabIndex={-1}
                disableRipple
              />
              {department.subDepartments && (
                <ListItemIcon>
                  {isItemSelected(department.id) ? (
                    <ExpandMoreIcon />
                  ) : (
                    <ChevronRightIcon />
                  )}
                </ListItemIcon>
              )}
            </ListItemIcon>
            <ListItemText primary={department.name} />
          </ListItem>
          {department.subDepartments && (
            <Collapse in={isItemSelected(department.id)}>
              <List disablePadding>
                {department.subDepartments.map((subDepartment) => (
                  <ListItem
                    key={subDepartment.id}
                    button
                    sx={{ pl: 4 }}
                    onClick={() =>
                      toggleSubDepartment(subDepartment.id, department.id)
                    }
                  >
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={isItemSelected(subDepartment.id)}
                        tabIndex={-1}
                        disableRipple
                      />
                    </ListItemIcon>
                    <ListItemText primary={subDepartment.name} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          )}
        </Box>
      ))}
    </List>
  );
};

const Department: React.FC = () => {
  const departmentsData = [
    {
      id: 1,
      name: "Department 1",
      subDepartments: [
        { id: 11, name: "Sub Department 1.1" },
        { id: 12, name: "Sub Department 1.2" },
      ],
    },
    {
      id: 2,
      name: "Department 2",
      subDepartments: [
        { id: 21, name: "Sub Department 2.1" },
        { id: 22, name: "Sub Department 2.2" },
      ],
    },
    // ... Add more departments
  ];

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Department List
      </Typography>
      <DepartmentList departments={departmentsData} />
    </Container>
  );
};

export default Department;
