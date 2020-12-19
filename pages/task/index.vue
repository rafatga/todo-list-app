<template>
  <div>
    <PageAction>
       <b-row>
        <b-col md="6">
          <NuxtLink class="btn btn-primary" :to="{ name: 'task-create' }"
            >New Task</NuxtLink
          >
        </b-col>
        <b-col md="3" offset-md="3" class="text-right">
            <b-form-select 
            v-model="filters.status" 
            :options="statuses"
            value-field="id"
            text-field="name"
            ></b-form-select>
        </b-col>
      </b-row>
      </PageAction>

    <b-table :items="taskList" :fields="fields" striped fixed responsive="sm">
      <template #cell(actions)="row">
        <NuxtLink
          class="mr-2 btn btn-primary"
          :to="{ name: 'task-edit', params: { id: row.item.id } }"
          >edit</NuxtLink
        >
        <b-button class="mr-2 btn-danger" @click="onActionDeleteTask(row.item)">
          delete
        </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import TaskStatusRepository from "@/repositories/TaskStatusRepository";
import TaskRepository from "@/repositories/TaskRepository";

export default {
  data() {
    return {
      statuses: [],
      filters: {
        status: null
      },
      fields: [
        {
          key: "title",
          sortable: false,
        },
        {
          key: "short_description",
          label: "Description",
          sortable: false,
        },
        {
          key: "status.name",
          label: "Status",
          sortable: true,
        },
        {
          key: "created_at",
          label: "Creation time",
          sortable: true,
        },
        {
          key: "actions",
          sortable: false,
        },
      ],
      tasks: [],
    };
  },
  computed: {
		taskList () {
			return this.filters.status
				? this.tasks.filter(task => task.status.id ===  this.filters.status)
				: this.tasks
    }
  },
  created() {
    this.fetchTaskStatusList();
    this.fetchTaskList();
  },
  methods: {
    fetchTaskStatusList() {
      TaskStatusRepository.list().then((response) => {
        this.statuses = [
          { id: null, name: 'Please select an option' },
          ...response.data.data
        ];
      });
    },
    fetchTaskList() {
      TaskRepository.list().then((response) => {
        this.tasks = response.data.data;
      });
    },
    //actions
    onActionDeleteTask(task) {
      this.$dialog
        .confirm("Are your sure you want to permanently remove this task?")
        .then((dialog) => {
          TaskRepository.destroy(task.id).then((response) => {
            this.$notify({
              text: "Successfully deleted task",
              type: "success",
              group: "alerts",
            });
            this.fetchTaskList();
          });
        })
        .catch((error) => {
          console.log("Error", error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.page-actions {
  padding: 20px 0px;
}
</style>