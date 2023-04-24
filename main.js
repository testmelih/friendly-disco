const app = Vue.createApp({
  data() {
    return {
      circumference: '',
      length: '',
      size: '',
    };
  },
  methods: {
    calculateSize() {
      const circumference = parseInt(this.circumference);
      const length = parseInt(this.length);
      if (isNaN(circumference) || isNaN(length)) {
        alert('Please enter valid numbers for circumference and length.');
        return;
      }
      const diameter = circumference / Math.PI;
      const size = (diameter - 12.57) / 0.4;
      this.size = Math.round(size * 100) / 100;
    },
  },
});

app.mount('#app');
