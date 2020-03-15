<template>
  <div id="employee-table">
    <p v-if="emp_data.length < 1" class="empty-table">No employees. Add a new one to view</p>
    <table v-else>
      <thead>
        <tr>
          <th>Employee name</th>
          <th>Employee email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="emp in emp_data" :key="emp.id">
          <td>{{emp.name}}</td>
          <td>{{emp.email}}</td>
          <td>
            <button>Edit</button>
            <button @click="$emit('delete:employee', emp.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "employee-table",
  props: {
    emp_data: Array
  }
};
</script>

<style scoped>
button {
  margin: 0 0.5rem 0 0;
}
</style>