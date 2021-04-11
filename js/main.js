new Vue({
	el: 'main',
	data:{
		tasks: ['Crear repositorio', 'Crear capa de servicios'],		
		task: '',
		toEdit: null,
		taskEdit: null
	},
	methods:{
		add(){
			this.tasks.push(this.task);
			this.task = null;
		},editTask(index){
			this.tasks[index] = this.taskEdit;
			this.taskEdit = null;
			this.toEdit = null;			
		},
		showEdit(index){
			this.toEdit = index;
			this.taskEdit = this.tasks[index];
		},
		deleteTask(index){			
			this.tasks.splice(index, 1);			
		}
	},
	computed: {
		
	}
});
