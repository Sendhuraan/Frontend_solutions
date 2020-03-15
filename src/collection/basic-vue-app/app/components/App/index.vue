<template>
  <div id="app" class="small-container">
    <h1>Employees</h1>
    <employee-form @add:employee="addEmployee" />
    <employee-table :emp_data="data" @delete:employee="deleteEmployee" />
  </div>
</template>

<script>
import EmployeeTable from '../EmployeeTable';
import EmployeeForm from '../EmployeeForm';

export default {
  name: 'app',
  components: {
    EmployeeTable,
    EmployeeForm
  },
  data() {
    return {
      data: []
    };
  },
  methods: {
    addEmployee(newData) {
      const lastId =
        this.data.length > 0 ? this.data[this.data.length - 1].id : 0;
      const id = lastId + 1;
      const newEmployee = { ...newData, id };
      this.data = [...this.data, newEmployee];
    },
    deleteEmployee(id) {
      this.data = this.data.filter(data => data.id !== id);
    }
  }
};
</script>

<style>
button {
  background: #009435;
  border: 1px solid #009435;
}

.small-container {
  max-width: 680px;
}
</style>
