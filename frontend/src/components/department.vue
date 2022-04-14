<template>
  <div>
    <button
      type="button"
      class="btn btn-primary m-2 float-end"
      v-b-modal.modal-1
      @click="addClick()"
    >
      Add Departamento
    </button>

    <table class="table table-striped">
      <thead>
        <tr>
          <th>Id</th>
          <th>Departamento</th>
          <th>Opções</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="department in departments" :key="department.DepartmentId">
          <td>{{ department.DepartmentId }}</td>
          <td>{{ department.DepartmentName }}</td>
          <td>
            <button
              type="button"
              class="btn btn-light mr-1 btnedit"
              v-b-modal.modal-1
              @click="editDepartment(department)"
            >
              <b-icon-pencil-square />
            </button>
            <button
              type="button"
              class="btn btn-light mr-1 btndelet"
              @click="deleteDepartment(department.DepartmentId)"
            >
              <b-icon-trash-fill />
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div>
      <b-modal
        id="modal-1"
        hide-footer
        v-bind:title="modalTitle"
        ref="modalref"
      >
        <div class="input-group mb-3">
          <span class="input-group-text">Departamento</span>
          <input type="text" class="form-control" v-model="DepartmentName" />
        </div>

        <b-button
          class="btn btn-primary"
          
          data-bs-dismiss="modal"
          v-if="DepartmentId == 0"
          @click="createDepartment()"
          >Salvar</b-button
        >

        <b-button
          type="button"
          class="btn btn-primary"
          data-bs-dismiss="modal"
          v-if="DepartmentId != 0"
          @click="editingDepartment()"
          >Atualizar</b-button
        >
      </b-modal>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { getVariables } from "../utils/variables";

export default {
  data() {
    return {
      departments: [],
      modalTitle: "",
      DepartmentId: 0,
      DepartmentName: "",
    };
  },
  methods: {
    refreshData() {
      axios.get(getVariables("API_URL") + "departments").then((response) => {
        console.log("response", response);
        this.departments = response.data;
      });
    },
    addClick() {
      (this.modalTitle = "Adicionando um Departamento"),
        (this.DepartmentId = 0);
      this.DepartmentName = "";
    },
    editDepartment(dep) {
      (this.modalTitle = "Editando o Departamento"),
        (this.DepartmentId = dep.DepartmentId);
      this.DepartmentName = dep.DepartmentName;
    },
    createDepartment() {

      if(this.DepartmentName.trim().length != 0) {
        let dados = {
          "DepartmentName": this.DepartmentName
        }
  
        axios.post(getVariables('API_URL')+'departments', JSON.stringify(dados))
          .then((response) => {            
            this.departments.push(response.data.data)
  
          })
      }
    },
    editingDepartment() {

      if(this.DepartmentName.trim().length != 0) {
        let dados = {
          DepartmentId: this.DepartmentId,
          DepartmentName: this.DepartmentName,
        };
  
        axios
          .put(getVariables("API_URL") + "departments", JSON.stringify(dados))
          .then((response) => {
            console.log("response", response);
            this.departments.push(response.data.response);
  
          });
      }
    },
    deleteDepartment(id) {
      axios
        .delete(getVariables("API_URL") + "department/" + id)
        .then((response) => {
          console.log("response", response);

          this.departments = this.departments.filter(
            (e) => e.DepartmentId != id
          );
        });
    },
  },
  mounted: function () { 
    this.refreshData();
  },
};
</script>

<style>
.btnedit {
margin-right: 5px;
}
.btndelet {

}
</style>