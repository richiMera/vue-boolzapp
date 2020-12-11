var app = new Vue({

  el: "#root",
  data: {
    message: "",
    intentions: ["Fare la spesa", "Fare regali Natale", "Andare in palestra", "Fare gli auguri a nonna"],
  },
  methods: {
    addTodo: function () {
      this.intentions.push(this.message);
      this.message = "";
    },
    removeElement:function(index) {
      this.intentions.splice(index, 1);
    },
  }
});
