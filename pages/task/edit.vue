<template>
  <div>

    <PageAction>
         <b-row>
        <b-col md="6">
          <NuxtLink class="btn btn-primary" :to="{ name: 'task-list' }"
            >Back</NuxtLink
          >
        </b-col>
      </b-row>
      </PageAction>

    <b-container class="page-actions">
      <b-row>
        <b-col md="8" offset-md="2">
          <ValidationObserver v-slot="{ handleSubmit }">
            <b-form @submit.prevent="handleSubmit(onSubmit)">
              <ValidationProvider
                name="title"
                rules="required"
                v-slot="{ errors }"
              >
                <b-form-group>
                  <label for="title">Title</label>
                  <b-form-input
                    name="title"
                    type="text"
                    v-model="task.title"
                    placeholder="Enter something..."
                  ></b-form-input>
                </b-form-group>
                <small class="error">{{ errors[0] }}</small>
              </ValidationProvider>

              <ValidationProvider
                name="description"
                rules="required"
                v-slot="{ errors }"
              >
                <b-form-group>
                  <label for="description">Description</label>
                  <b-form-textarea
                    name="description"
                    type="text"
                    v-model="task.description"
                    placeholder="Enter something..."
                  ></b-form-textarea>
                </b-form-group>
                <small class="error">{{ errors[0] }}</small>
              </ValidationProvider>

              <b-form-select
                class="mb-3"
                v-model="task.task_status_id"
                :options="statuses"
                value-field="id"
                text-field="name"
              ></b-form-select>

              <b-button type="submit" variant="primary">Submit</b-button>
            </b-form>
          </ValidationObserver>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import TaskStatusRepository from "@/repositories/TaskStatusRepository";
import TaskRepository from "@/repositories/TaskRepository";
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
  components: {
    ValidationObserver: ValidationObserver,
    ValidationProvider: ValidationProvider,
  },
  data() {
    return {
      task: {},
      statuses: [],
    };
  },
  created() {
    this.fetchTaskStatusList();
    this.fetchTaskList();
  },
  methods: {
    fetchTaskStatusList() {
      TaskStatusRepository.list().then((response) => {
        this.statuses = response.data.data;
      });
    },
    fetchTaskList() {
      TaskRepository.get(this.$route.params.id).then((response) => {
        this.task = response.data.data;
      });
    },
    onSubmit() {
      TaskRepository.update(this.task.id, this.task).then((response) => {
        this.$notify({
          text: "Task updated successfully",
          type: "success",
          group: "alerts",
        });
        this.$router.push({ name: "task-list" });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.page-actions {
  padding: 20px 0px;
}
.error {
  color: #ff0000;
  margin: 0px 0px 20px 0px;
  display: block;
}
</style>