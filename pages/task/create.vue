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

              <b-button type="submit" variant="primary">Submit</b-button>
            </b-form>
          </ValidationObserver>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import TaskRepository from "@/repositories/TaskRepository";
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
  components: {
    ValidationObserver: ValidationObserver,
    ValidationProvider: ValidationProvider,
  },
  data() {
    return {
      task: {
        title: null,
        description: null,
      },
    };
  },
  methods: {
    onSubmit() {
      TaskRepository.create(this.task).then((response) => {
        this.$notify({
          text: "Task created successfully",
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